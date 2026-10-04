/*
 * ============================================================================
 * SCIFINITY HOMEPAGE BANNER SERVICE
 * ============================================================================
 *
 * Firestore-backed service for homepage banners.
 *
 * Responsibilities:
 * - Read published banners for the public homepage
 * - Read all banners for the admin portal
 * - Create banners
 * - Update banners
 * - Archive banners
 * - Publish banners
 * - Permanently delete banners
 *
 * IMPORTANT SECURITY RULE:
 *
 * The UI should NOT call Firestore directly.
 *
 * All homepage-banner Firestore access should go through this service.
 *
 * Also:
 *
 * CREATE:
 *   Raw input
 *      ↓
 *   Validation
 *      ↓
 *   Firestore
 *
 * UPDATE:
 *   Raw update input
 *      ↓
 *   Validation
 *      ↓
 *   Firestore
 *
 * Raw CMS input must never be written directly to Firestore.
 * ============================================================================
 */

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
  type DocumentData,
  type QueryDocumentSnapshot,
} from 'firebase/firestore';

import { getFirestoreDb } from '../firebase/firestore.ts';
import { waitForAuthReady } from '../firebase/auth.ts';

import {
  validateCreateHomepageBannerInput,
  validateUpdateHomepageBannerInput,
} from './cmsValidation.ts';


/*
 * ============================================================================
 * BANNER TYPES
 * ============================================================================
 */

export type BannerStatus =
  | 'DRAFT'
  | 'REVIEW'
  | 'APPROVED'
  | 'SCHEDULED'
  | 'PUBLISHED'
  | 'ARCHIVED';

export type BannerType =
  | 'CAMPAIGN'
  | 'NOTICE'
  | 'EVENT'
  | 'RESOURCE'
  | 'COURSE'
  | 'GENERAL';


/*
 * ============================================================================
 * SHARED TYPES
 * ============================================================================
 */

export interface LocalizedText {
  en: string;
  bn: string;
}


/*
 * ============================================================================
 * HOMEPAGE BANNER
 * ============================================================================
 */

export interface HomepageBanner {
  id: string;

  title: LocalizedText;

  subtitle: LocalizedText;

  description: LocalizedText;

  desktopImage: {
    url: string;
    altText: LocalizedText;
  };

  mobileImage: {
    url: string;
    altText: LocalizedText;
  };

  cta: {
    enabled: boolean;
    label: LocalizedText;
    url: string;
    external: boolean;
  };

  bannerType: BannerType;

  priority: number;

  startAt: Date | null;

  endAt: Date | null;

  status: BannerStatus;

  featured: boolean;

  createdAt: Date | null;

  updatedAt: Date | null;
}


/*
 * ============================================================================
 * CREATE INPUT
 * ============================================================================
 */

export interface CreateHomepageBannerInput {
  title: LocalizedText;

  subtitle?: LocalizedText;

  description?: LocalizedText;

  desktopImage: {
    url: string;
    altText: LocalizedText;
  };

  mobileImage?: {
    url: string;
    altText: LocalizedText;
  };

  cta?: {
    enabled: boolean;
    label: LocalizedText;
    url: string;
    external: boolean;
  };

  bannerType: BannerType;

  priority?: number;

  startAt?: Date | null;

  endAt?: Date | null;

  status?: BannerStatus;

  featured?: boolean;
}


/*
 * ============================================================================
 * FIRESTORE TIMESTAMP → JAVASCRIPT DATE
 * ============================================================================
 *
 * Firestore returns Timestamp objects.
 * The rest of the application uses JavaScript Date objects.
 *
 * This function safely converts a Firestore Timestamp into a Date.
 */

function timestampToDate(value: unknown): Date | null {

  if (!value) {
    return null;
  }

  if (
    typeof value === 'object' &&
    value !== null &&
    'toDate' in value &&
    typeof (value as { toDate?: unknown }).toDate === 'function'
  ) {
    return (
      value as {
        toDate: () => Date;
      }
    ).toDate();
  }

  return null;
}


/*
 * ============================================================================
 * FIRESTORE DOCUMENT → HOMEPAGE BANNER
 * ============================================================================
 */

function mapBanner(
  snapshot: QueryDocumentSnapshot<DocumentData>
): HomepageBanner {

  const data = snapshot.data();

  return {
    id: snapshot.id,

    title: data.title ?? {
      en: '',
      bn: '',
    },

    subtitle: data.subtitle ?? {
      en: '',
      bn: '',
    },

    description: data.description ?? {
      en: '',
      bn: '',
    },

    desktopImage: data.desktopImage ?? {
      url: '',
      altText: {
        en: '',
        bn: '',
      },
    },

    mobileImage: data.mobileImage ?? {
      url: '',
      altText: {
        en: '',
        bn: '',
      },
    },

    cta: data.cta ?? {
      enabled: false,
      label: {
        en: '',
        bn: '',
      },
      url: '',
      external: false,
    },

    bannerType: data.bannerType ?? 'GENERAL',

    priority: Number(
      data.priority ?? 0
    ),

    startAt: timestampToDate(
      data.startAt
    ),

    endAt: timestampToDate(
      data.endAt
    ),

    status: data.status ?? 'DRAFT',

    featured: Boolean(
      data.featured
    ),

    createdAt: timestampToDate(
      data.createdAt
    ),

    updatedAt: timestampToDate(
      data.updatedAt
    ),
  };
}


/*
 * ============================================================================
 * PUBLIC HOMEPAGE
 * ============================================================================
 *
 * Returns banners that are currently published.
 *
 * Firestore query:
 * - status must be PUBLISHED
 * - priority is descending
 *
 * Additional date filtering is performed in application code.
 */

export async function getPublishedHomepageBanners(): Promise<
  HomepageBanner[]
> {

  const db = getFirestoreDb();

  const bannersRef = collection(
    db,
    'homepageBanners'
  );

  const bannersQuery = query(
    bannersRef,

    where(
      'status',
      '==',
      'PUBLISHED'
    ),

    orderBy(
      'priority',
      'desc'
    )
  );

  const snapshot = await getDocs(
    bannersQuery
  );

  const now = new Date();

  return snapshot.docs
    .map(mapBanner)
    .filter((banner) => {

      const starts =
        !banner.startAt ||
        banner.startAt.getTime() <= now.getTime();

      const notExpired =
        !banner.endAt ||
        banner.endAt.getTime() >= now.getTime();

      return (
        starts &&
        notExpired
      );
    });
}


/*
 * ============================================================================
 * ADMIN — GET ALL BANNERS
 * ============================================================================
 *
 * Returns all banners:
 * - DRAFT
 * - REVIEW
 * - APPROVED
 * - SCHEDULED
 * - PUBLISHED
 * - ARCHIVED
 */

export async function getAllHomepageBanners(): Promise<
  HomepageBanner[]
> {

  await waitForAuthReady();

  const db = getFirestoreDb();

  const bannersRef = collection(
    db,
    'homepageBanners'
  );

  const bannersQuery = query(
    bannersRef,

    orderBy(
      'priority',
      'desc'
    )
  );

  const snapshot = await getDocs(
    bannersQuery
  );

  return snapshot.docs.map(
    mapBanner
  );
}


/*
 * ============================================================================
 * CREATE HOMEPAGE BANNER
 * ============================================================================
 *
 * IMPORTANT:
 *
 * The input is validated BEFORE anything is written to Firestore.
 */

export async function createHomepageBanner(
  input: CreateHomepageBannerInput
): Promise<string> {

  /*
   * Make sure Firebase Authentication is ready.
   */

  await waitForAuthReady();


  /*
   * Validate and normalize the input.
   *
   * Nothing from the raw input is written directly to Firestore.
   */

  const validatedInput =
    validateCreateHomepageBannerInput(
      input
    );


  /*
   * Get Firestore.
   */

  const db = getFirestoreDb();


  /*
   * Get the homepageBanners collection.
   */

  const bannersRef = collection(
    db,
    'homepageBanners'
  );


  /*
   * Build the Firestore document.
   *
   * IMPORTANT:
   *
   * Every CMS field comes from validatedInput.
   * We do NOT use raw input here.
   */

  const documentData = {

    title:
      validatedInput.title,

    subtitle:
      validatedInput.subtitle,

    description:
      validatedInput.description,

    desktopImage:
      validatedInput.desktopImage,

    mobileImage:
      validatedInput.mobileImage,

    cta:
      validatedInput.cta,

    bannerType:
      validatedInput.bannerType,

    priority:
      validatedInput.priority,

    startAt:
      validatedInput.startAt,

    endAt:
      validatedInput.endAt,

    status:
      validatedInput.status,

    featured:
      validatedInput.featured,

    createdAt:
      serverTimestamp(),

    updatedAt:
      serverTimestamp(),
  };


  /*
   * Write the validated document to Firestore.
   */

  const document = await addDoc(
    bannersRef,
    documentData
  );


  /*
   * Return the newly created document ID.
   */

  return document.id;
}


/*
 * ============================================================================
 * UPDATE HOMEPAGE BANNER
 * ============================================================================
 *
 * IMPORTANT:
 *
 * An update may contain only a subset of banner fields.
 *
 * Example:
 *
 * {
 *   priority: 5
 * }
 *
 * Therefore we use a dedicated UPDATE validator rather than the CREATE
 * validator.
 *
 * Raw update data is NEVER written directly to Firestore.
 */

export async function updateHomepageBanner(
  bannerId: string,
  updates: Partial<CreateHomepageBannerInput>
): Promise<void> {

  /*
   * Make sure Firebase Authentication is ready.
   */

  await waitForAuthReady();


  /*
   * Validate the update.
   *
   * This is the CMS security boundary for updates.
   */

  const validatedUpdates =
    validateUpdateHomepageBannerInput(
      updates
    );


  /*
   * Get Firestore.
   */

  const db = getFirestoreDb();


  /*
   * Get the specific banner document.
   */

  const bannerRef = doc(
    db,
    'homepageBanners',
    bannerId
  );


  /*
   * Build the update document.
   *
   * Only validated fields are written.
   */

  const updateData = {
    ...validatedUpdates,

    updatedAt:
      serverTimestamp(),
  };


  /*
   * Write the validated update to Firestore.
   */

  await updateDoc(
    bannerRef,
    updateData
  );
}


/*
 * ============================================================================
 * ARCHIVE HOMEPAGE BANNER
 * ============================================================================
 *
 * Archiving is preferred over permanent deletion.
 */

export async function archiveHomepageBanner(
  bannerId: string
): Promise<void> {

  await waitForAuthReady();

  const db = getFirestoreDb();

  const bannerRef = doc(
    db,
    'homepageBanners',
    bannerId
  );

  await updateDoc(
    bannerRef,
    {
      status: 'ARCHIVED',

      updatedAt:
        serverTimestamp(),
    }
  );
}


/*
 * ============================================================================
 * PUBLISH HOMEPAGE BANNER
 * ============================================================================
 */

export async function publishHomepageBanner(
  bannerId: string
): Promise<void> {

  await waitForAuthReady();

  const db = getFirestoreDb();

  const bannerRef = doc(
    db,
    'homepageBanners',
    bannerId
  );

  await updateDoc(
    bannerRef,
    {
      status: 'PUBLISHED',

      updatedAt:
        serverTimestamp(),
    }
  );
}


/*
 * ============================================================================
 * PERMANENT DELETE
 * ============================================================================
 *
 * Permanent deletion should normally be avoided.
 *
 * Archive is preferred.
 *
 * This function remains available for controlled administrative use.
 */

export async function deleteHomepageBanner(
  bannerId: string
): Promise<void> {

  await waitForAuthReady();

  const db = getFirestoreDb();

  const bannerRef = doc(
    db,
    'homepageBanners',
    bannerId
  );

  await deleteDoc(
    bannerRef
  );
}
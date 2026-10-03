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
 * - Archive/delete banners
 *
 * The UI should NOT call Firestore directly.
 * All homepage-banner Firestore access should go through this service.
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

export interface LocalizedText {
  en: string;
  bn: string;
}

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
    return (value as { toDate: () => Date }).toDate();
  }

  return null;
}

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

    priority: Number(data.priority ?? 0),

    startAt: timestampToDate(data.startAt),
    endAt: timestampToDate(data.endAt),

    status: data.status ?? 'DRAFT',

    featured: Boolean(data.featured),

    createdAt: timestampToDate(data.createdAt),
    updatedAt: timestampToDate(data.updatedAt),
  };
}

/**
 * --------------------------------------------------------------------------
 * PUBLIC HOMEPAGE
 * --------------------------------------------------------------------------
 *
 * Returns banners that are currently published.
 *
 * Date filtering is also performed in application code so the service
 * remains safe if the Firestore query/index strategy changes later.
 */
export async function getPublishedHomepageBanners(): Promise<
  HomepageBanner[]
> {
  const db = getFirestoreDb();

  const bannersRef = collection(db, 'homepageBanners');

  const bannersQuery = query(
    bannersRef,
    where('status', '==', 'PUBLISHED'),
    orderBy('priority', 'desc')
  );

  const snapshot = await getDocs(bannersQuery);

  const now = new Date();

  return snapshot.docs
    .map(mapBanner)
    .filter((banner) => {
      const starts =
        !banner.startAt || banner.startAt.getTime() <= now.getTime();

      const notExpired =
        !banner.endAt || banner.endAt.getTime() >= now.getTime();

      return starts && notExpired;
    });
}

/**
 * --------------------------------------------------------------------------
 * ADMIN
 * --------------------------------------------------------------------------
 *
 * Returns all banners, including drafts and archived banners.
 */
export async function getAllHomepageBanners(): Promise<HomepageBanner[]> {
  await waitForAuthReady();

  const db = getFirestoreDb();

  const bannersRef = collection(db, 'homepageBanners');

  const bannersQuery = query(
    bannersRef,
    orderBy('priority', 'desc')
  );

  const snapshot = await getDocs(bannersQuery);

  return snapshot.docs.map(mapBanner);
}

/**
 * Create a new homepage banner.
 */
export async function createHomepageBanner(
  input: CreateHomepageBannerInput
): Promise<string> {
  await waitForAuthReady();

  const db = getFirestoreDb();

  const bannersRef = collection(db, 'homepageBanners');

  const documentData = {
    title: input.title,

    subtitle: input.subtitle ?? {
      en: '',
      bn: '',
    },

    description: input.description ?? {
      en: '',
      bn: '',
    },

    desktopImage: input.desktopImage,

    mobileImage: input.mobileImage ?? input.desktopImage,

    cta: input.cta ?? {
      enabled: false,
      label: {
        en: '',
        bn: '',
      },
      url: '',
      external: false,
    },

    bannerType: input.bannerType,

    priority: input.priority ?? 0,

    startAt: input.startAt ?? null,
    endAt: input.endAt ?? null,

    status: input.status ?? 'DRAFT',

    featured: input.featured ?? false,

    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  const document = await addDoc(bannersRef, documentData);

  return document.id;
}

/**
 * Update an existing homepage banner.
 */
export async function updateHomepageBanner(
  bannerId: string,
  updates: Partial<CreateHomepageBannerInput>
): Promise<void> {
  const db = getFirestoreDb();

  const bannerRef = doc(db, 'homepageBanners', bannerId);

  await updateDoc(bannerRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Archive a banner without physically deleting it.
 *
 * This should normally be preferred over deleteHomepageBanner().
 */
export async function archiveHomepageBanner(
  bannerId: string
): Promise<void> {
  const db = getFirestoreDb();

  const bannerRef = doc(db, 'homepageBanners', bannerId);

  await updateDoc(bannerRef, {
    status: 'ARCHIVED',
    updatedAt: serverTimestamp(),
  });
}

/**
 * Publish a homepage banner.
 */
export async function publishHomepageBanner(
  bannerId: string
): Promise<void> {
  const db = getFirestoreDb();

  const bannerRef = doc(db, 'homepageBanners', bannerId);

  await updateDoc(bannerRef, {
    status: 'PUBLISHED',
    updatedAt: serverTimestamp(),
  });
}

/**
 * Permanent deletion.
 *
 * This will later be restricted further through governance/security rules.
 */
export async function deleteHomepageBanner(
  bannerId: string
): Promise<void> {
  const db = getFirestoreDb();

  const bannerRef = doc(db, 'homepageBanners', bannerId);

  await deleteDoc(bannerRef);
}
/**
 * SCIFINITY CMS VALIDATION
 *
 * Runtime validation for Firestore-bound CMS content.
 *
 * Important:
 * TypeScript interfaces protect compile-time code.
 * They do NOT validate runtime data coming from forms,
 * Firestore, APIs, or other external boundaries.
 */

import type {
  BannerStatus,
  BannerType,
  CreateHomepageBannerInput,
  LocalizedText
} from './homepageBannerService.ts';

const BANNER_TYPES: readonly BannerType[] = [
  'CAMPAIGN',
  'NOTICE',
  'EVENT',
  'RESOURCE',
  'COURSE',
  'GENERAL'
];

const BANNER_STATUSES: readonly BannerStatus[] = [
  'DRAFT',
  'REVIEW',
  'APPROVED',
  'SCHEDULED',
  'PUBLISHED',
  'ARCHIVED'
];

const LIMITS = {
  title: 120,
  subtitle: 180,
  description: 500,
  altText: 160,
  ctaLabel: 60,
  url: 2048,
  priority: 9999
} as const;

function fail(field: string, message: string): never {
  throw new Error(`CMS validation failed: ${field} — ${message}`);
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function requireString(
  value: unknown,
  field: string,
  options: {
    required?: boolean;
    maxLength?: number;
  } = {}
): string {
  const { required = true, maxLength } = options;

  if (value === undefined || value === null) {
    if (!required) return '';
    fail(field, 'value is required');
  }

  if (typeof value !== 'string') {
    fail(field, 'must be a string');
  }

  const trimmed = value.trim();

  if (required && trimmed.length === 0) {
    fail(field, 'cannot be empty');
  }

  if (maxLength !== undefined && trimmed.length > maxLength) {
    fail(field, `must be ${maxLength} characters or fewer`);
  }

  return trimmed;
}

function validateLocalizedText(
  value: unknown,
  field: string,
  maxLength: number,
  required = false
): LocalizedText {
  // Optional field omitted: this is valid.
  if (value === undefined || value === null) {
    if (!required) {
      return {
        en: '',
        bn: '',
      };
    }

    fail(field, 'is required');
  }

  if (!isPlainObject(value)) {
    fail(field, 'must contain an object with en and bn values');
  }

  return {
    en: requireString(value.en, `${field}.en`, {
      required,
      maxLength,
    }),
    bn: requireString(value.bn, `${field}.bn`, {
      required,
      maxLength,
    }),
  };
}

function isSafeUrl(
  value: string,
  options: {
    allowRelative: boolean;
  }
): boolean {
  if (!value) return false;

  if (value.length > LIMITS.url) {
    return false;
  }

  // Explicitly reject dangerous protocols before URL parsing.
  if (/^\s*(javascript|data|vbscript):/i.test(value)) {
    return false;
  }

  if (options.allowRelative && value.startsWith('/')) {
    return true;
  }

  try {
    const parsed = new URL(value);

    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

function validateUrl(
  value: unknown,
  field: string,
  options: {
    required?: boolean;
    allowRelative: boolean;
  }
): string {
  const { required = false, allowRelative } = options;

  const url = requireString(value, field, {
    required,
    maxLength: LIMITS.url
  });

  if (!url) return '';

  if (!isSafeUrl(url, { allowRelative })) {
    fail(
      field,
      'must be a valid HTTP(S) URL or an allowed relative path'
    );
  }

  return url;
}

function validateBannerType(value: unknown): BannerType {
  if (
    typeof value !== 'string' ||
    !BANNER_TYPES.includes(value as BannerType)
  ) {
    fail(
      'bannerType',
      `must be one of: ${BANNER_TYPES.join(', ')}`
    );
  }

  return value as BannerType;
}

function validateBannerStatus(value: unknown): BannerStatus {
  if (
    typeof value !== 'string' ||
    !BANNER_STATUSES.includes(value as BannerStatus)
  ) {
    fail(
      'status',
      `must be one of: ${BANNER_STATUSES.join(', ')}`
    );
  }

  return value as BannerStatus;
}

function validatePriority(value: unknown): number {
  if (value === undefined || value === null) {
    return 0;
  }

  if (
    typeof value !== 'number' ||
    !Number.isFinite(value) ||
    !Number.isInteger(value)
  ) {
    fail('priority', 'must be a finite integer');
  }

  if (value < 0 || value > LIMITS.priority) {
    fail(
      'priority',
      `must be between 0 and ${LIMITS.priority}`
    );
  }

  return value;
}

function validateBoolean(
  value: unknown,
  field: string,
  defaultValue: boolean
): boolean {
  if (value === undefined || value === null) {
    return defaultValue;
  }

  if (typeof value !== 'boolean') {
    fail(field, 'must be true or false');
  }

  return value;
}

function validateDate(
  value: unknown,
  field: string
): Date | null | undefined {
  if (value === undefined) {
    return undefined;
  }

  if (value === null) {
    return null;
  }

  if (!(value instanceof Date) || Number.isNaN(value.getTime())) {
    fail(field, 'must be a valid Date or null');
  }

  return value;
}

/**
 * Validate and normalize a homepage banner before Firestore write.
 */
export function validateCreateHomepageBannerInput(
  input: CreateHomepageBannerInput
): CreateHomepageBannerInput {
  if (!isPlainObject(input)) {
    fail('input', 'must be an object');
  }

  const title = validateLocalizedText(
    input.title,
    'title',
    LIMITS.title,
    true
  );

  const subtitle = validateLocalizedText(
    input.subtitle,
    'subtitle',
    LIMITS.subtitle,
    false
  );

  const description = validateLocalizedText(
    input.description,
    'description',
    LIMITS.description,
    false
  );

  if (!isPlainObject(input.desktopImage)) {
    fail('desktopImage', 'must be an object');
  }

  const desktopImage = {
    url: validateUrl(input.desktopImage.url, 'desktopImage.url', {
      required: true,
      allowRelative: true
    }),
    altText: validateLocalizedText(
      input.desktopImage.altText,
      'desktopImage.altText',
      LIMITS.altText,
      true
    )
  };

  const mobileImageInput =
    input.mobileImage ?? input.desktopImage;

  if (!isPlainObject(mobileImageInput)) {
    fail('mobileImage', 'must be an object');
  }

  const mobileImage = {
    url: validateUrl(mobileImageInput.url, 'mobileImage.url', {
      required: true,
      allowRelative: true
    }),
    altText: validateLocalizedText(
      mobileImageInput.altText,
      'mobileImage.altText',
      LIMITS.altText,
      true
    )
  };

 let cta = {
  enabled: false,
  label: {
    en: '',
    bn: '',
  },
  url: '',
  external: false,
};

if (input.cta !== undefined && input.cta !== null) {
  if (!isPlainObject(input.cta)) {
    fail('cta', 'must be an object');
  }

  const ctaEnabled = validateBoolean(
    input.cta.enabled,
    'cta.enabled',
    false
  );

  cta = {
    enabled: ctaEnabled,

    label: validateLocalizedText(
      input.cta.label,
      'cta.label',
      LIMITS.ctaLabel,
      ctaEnabled
    ),

    url: validateUrl(input.cta.url, 'cta.url', {
      required: ctaEnabled,
      allowRelative: true,
    }),

    external: validateBoolean(
      input.cta.external,
      'cta.external',
      false
    ),
  };
}

  const startAt = validateDate(input.startAt, 'startAt') ?? null;
  const endAt = validateDate(input.endAt, 'endAt') ?? null;

  if (startAt && endAt && endAt.getTime() < startAt.getTime()) {
    fail('endAt', 'cannot be earlier than startAt');
  }

  return {
    title,
    subtitle,
    description,
    desktopImage,
    mobileImage,
    cta,
    bannerType: validateBannerType(input.bannerType),
    priority: validatePriority(input.priority),
    startAt,
    endAt,
    status:
      input.status === undefined
        ? 'DRAFT'
        : validateBannerStatus(input.status),
    featured: validateBoolean(
      input.featured,
      'featured',
      false
    )
  };
}
/**
 * ============================================================================
 * UPDATE HOMEPAGE BANNER VALIDATION
 * ============================================================================
 *
 * An update is different from creating a banner.
 *
 * When creating a banner, we validate the complete banner.
 *
 * When updating a banner, the admin may change only one field.
 *
 * Example:
 *
 * {
 *   priority: 5
 * }
 *
 * Therefore, this function validates only the fields that are actually
 * supplied in the update.
 *
 * IMPORTANT:
 * Raw update data must never be written directly to Firestore.
 */
export function validateUpdateHomepageBannerInput(
  input: unknown
): Partial<CreateHomepageBannerInput> {

  if (!isPlainObject(input)) {
    fail('updates', 'must be an object');
  }

  const validated: Partial<CreateHomepageBannerInput> = {};

  /*
   * --------------------------------------------------------------------------
   * TITLE
   * --------------------------------------------------------------------------
   */

  if ('title' in input) {
    validated.title = validateLocalizedText(
      input.title,
      'title',
      LIMITS.title,
      true
    );
  }

  /*
   * --------------------------------------------------------------------------
   * SUBTITLE
   * --------------------------------------------------------------------------
   */

  if ('subtitle' in input) {
    validated.subtitle = validateLocalizedText(
      input.subtitle,
      'subtitle',
      LIMITS.subtitle,
      false
    );
  }

  /*
   * --------------------------------------------------------------------------
   * DESCRIPTION
   * --------------------------------------------------------------------------
   */

  if ('description' in input) {
    validated.description = validateLocalizedText(
      input.description,
      'description',
      LIMITS.description,
      false
    );
  }

  /*
   * --------------------------------------------------------------------------
   * DESKTOP IMAGE
   * --------------------------------------------------------------------------
   */

  if ('desktopImage' in input) {
    if (!isPlainObject(input.desktopImage)) {
      fail('desktopImage', 'must be an object');
    }

    validated.desktopImage = {
      url: validateUrl(
        input.desktopImage.url,
        'desktopImage.url',
        {
          required: true,
          allowRelative: true
        }
      ),

      altText: validateLocalizedText(
        input.desktopImage.altText,
        'desktopImage.altText',
        LIMITS.altText,
        true
      )
    };
  }

  /*
   * --------------------------------------------------------------------------
   * MOBILE IMAGE
   * --------------------------------------------------------------------------
   */

  if ('mobileImage' in input) {
    if (!isPlainObject(input.mobileImage)) {
      fail('mobileImage', 'must be an object');
    }

    validated.mobileImage = {
      url: validateUrl(
        input.mobileImage.url,
        'mobileImage.url',
        {
          required: true,
          allowRelative: true
        }
      ),

      altText: validateLocalizedText(
        input.mobileImage.altText,
        'mobileImage.altText',
        LIMITS.altText,
        true
      )
    };
  }

  /*
   * --------------------------------------------------------------------------
   * CTA
   * --------------------------------------------------------------------------
   */

  if ('cta' in input) {
    if (!isPlainObject(input.cta)) {
      fail('cta', 'must be an object');
    }

    const ctaEnabled = validateBoolean(
      input.cta.enabled,
      'cta.enabled',
      false
    );

    validated.cta = {
      enabled: ctaEnabled,

      label: validateLocalizedText(
        input.cta.label,
        'cta.label',
        LIMITS.ctaLabel,
        ctaEnabled
      ),

      url: validateUrl(
        input.cta.url,
        'cta.url',
        {
          required: ctaEnabled,
          allowRelative: true
        }
      ),

      external: validateBoolean(
        input.cta.external,
        'cta.external',
        false
      )
    };
  }

  /*
   * --------------------------------------------------------------------------
   * BANNER TYPE
   * --------------------------------------------------------------------------
   */

  if ('bannerType' in input) {
    validated.bannerType = validateBannerType(
      input.bannerType
    );
  }

  /*
   * --------------------------------------------------------------------------
   * PRIORITY
   * --------------------------------------------------------------------------
   */

  if ('priority' in input) {
    validated.priority = validatePriority(
      input.priority
    );
  }

  /*
   * --------------------------------------------------------------------------
   * START DATE
   * --------------------------------------------------------------------------
   */

  if ('startAt' in input) {
    validated.startAt =
      validateDate(input.startAt, 'startAt') ?? null;
  }

  /*
   * --------------------------------------------------------------------------
   * END DATE
   * --------------------------------------------------------------------------
   */

  if ('endAt' in input) {
    validated.endAt =
      validateDate(input.endAt, 'endAt') ?? null;
  }

  /*
   * --------------------------------------------------------------------------
   * STATUS
   * --------------------------------------------------------------------------
   */

  if ('status' in input) {
    validated.status = validateBannerStatus(
      input.status
    );
  }

  /*
   * --------------------------------------------------------------------------
   * FEATURED
   * --------------------------------------------------------------------------
   */

  if ('featured' in input) {
    validated.featured = validateBoolean(
      input.featured,
      'featured',
      false
    );
  }

  /*
   * --------------------------------------------------------------------------
   * DATE CONSISTENCY
   * --------------------------------------------------------------------------
   *
   * We can only compare the dates when both are included in this update.
   */

  if (
    validated.startAt instanceof Date &&
    validated.endAt instanceof Date &&
    validated.endAt.getTime() < validated.startAt.getTime()
  ) {
    fail(
      'endAt',
      'cannot be earlier than startAt'
    );
  }

  return validated;
}
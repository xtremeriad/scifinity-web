import { validateCreateHomepageBannerInput } from '../src/services/content/cmsValidation.ts';

const validBanner = {
  title: {
    en: 'SSC 2027 Revision Program',
    bn: 'এসএসসি ২০২৭ রিভিশন প্রোগ্রাম',
  },

  desktopImage: {
    url: 'https://example.com/banner.jpg',
    altText: {
      en: 'SSC 2027 Revision Program',
      bn: 'এসএসসি ২০২৭ রিভিশন প্রোগ্রাম',
    },
  },

  bannerType: 'CAMPAIGN' as const,
};

function expectRejected(
  testName: string,
  input: unknown
): void {
  try {
    validateCreateHomepageBannerInput(
      input as Parameters<typeof validateCreateHomepageBannerInput>[0]
    );

    console.error(`❌ FAILED: ${testName}`);
    console.error('   Expected validation to reject the input.');
    process.exitCode = 1;
  } catch {
    console.log(`✅ PASSED: ${testName}`);
  }
}

function expectAccepted(
  testName: string,
  input: unknown
): void {
  try {
    validateCreateHomepageBannerInput(
      input as Parameters<typeof validateCreateHomepageBannerInput>[0]
    );

    console.log(`✅ PASSED: ${testName}`);
  } catch (error) {
    console.error(`❌ FAILED: ${testName}`);
    console.error(
      error instanceof Error ? error.message : String(error)
    );
    process.exitCode = 1;
  }
}


/* ============================================================================
 * TEST 1 — VALID BANNER
 * ========================================================================== */

expectAccepted(
  'Valid homepage banner is accepted',
  validBanner
);


/* ============================================================================
 * TEST 2 — DANGEROUS JAVASCRIPT URL
 * ========================================================================== */

expectRejected(
  'javascript: URL is rejected',
  {
    ...validBanner,

    desktopImage: {
      ...validBanner.desktopImage,
      url: 'javascript:alert(1)',
    },
  }
);


/* ============================================================================
 * TEST 3 — INVALID URL
 * ========================================================================== */

expectRejected(
  'Invalid URL is rejected',
  {
    ...validBanner,

    desktopImage: {
      ...validBanner.desktopImage,
      url: 'not-a-valid-url',
    },
  }
);


/* ============================================================================
 * TEST 4 — INVALID BANNER TYPE
 * ========================================================================== */

expectRejected(
  'Invalid banner type is rejected',
  {
    ...validBanner,

    bannerType: 'INVALID_TYPE',
  }
);


/* ============================================================================
 * TEST 5 — INVALID PRIORITY
 * ========================================================================== */

expectRejected(
  'Negative priority is rejected',
  {
    ...validBanner,

    priority: -1,
  }
);


/* ============================================================================
 * TEST 6 — END DATE BEFORE START DATE
 * ========================================================================== */

expectRejected(
  'End date earlier than start date is rejected',
  {
    ...validBanner,

    startAt: new Date('2026-12-10T00:00:00Z'),
    endAt: new Date('2026-12-01T00:00:00Z'),
  }
);


/* ============================================================================
 * FINAL RESULT
 * ========================================================================== */

if (process.exitCode === 1) {
  console.error('\n❌ CMS validation tests failed.');
} else {
  console.log('\n✅ All CMS validation tests passed.');
}
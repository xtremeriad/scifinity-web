/* ==========================================================================
   PAGE 10 — GOLDEN SEAT CONTENT (ENGLISH)
   Source: 11_GOLDEN_SEAT.md
   Updated with official verified Golden Seat policy.
   ========================================================================== */

import { SCIFINITY_OWNER_DATA } from '../placeholders.ts';

export const GOLDEN_SEAT_CONTENT = {
  hero: {
    eyebrow: 'COMMUNITY & ACCESS INITIATIVE',
    headline: 'The Golden Seat — An Opportunity to Learn.',
    supporting: 'Financial circumstances should not automatically prevent a determined student from accessing SCIFINITY. The Golden Seat provides tuition support to a deserving student in every batch.',
    status: 'CONFIRMED' as const
  },
  principles: {
    eyebrow: 'ELIGIBILITY & MINDSET',
    headline: 'The Right Mindset Matters Most',
    description: 'The Golden Seat is not awarded based on prior privilege or test luck. It is reserved for candidates who demonstrate profound intellectual curiosity and genuine dedication.',
    criteria: [
      { title: 'Genuine Financial Need', desc: 'Students whose families face real financial constraints in accessing small-batch coaching.' },
      { title: 'Uncompromising Ambition', desc: 'A fierce internal drive to understand, master science and math, and excel academically.' },
      { title: 'Academic Discipline', desc: 'Punctuality, consistent homework completion, and respect for batchmates and mentor.' },
      { title: 'Readiness for Struggle', desc: 'A willingness to embrace mistakes as learning milestones during debugging sessions.' }
    ],
    status: 'CONFIRMED' as const
  },
  applicationRoutes: {
    eyebrow: 'APPLICATION PATHWAYS',
    headline: 'Two Pathways to the Golden Seat',
    pathways: [
      {
        number: '01',
        title: 'Direct Student Application',
        desc: 'A student applies directly via our admission portal, specifying their financial context and personal passion for learning.',
        cta: 'Apply Directly'
      },
      {
        number: '02',
        title: 'Batch Peer Nomination',
        desc: 'Enrolled SCIFINITY students can officially nominate a dedicated, hardworking classmate who deserves tuition support.',
        cta: 'Nominate a Peer'
      }
    ],
    status: 'CONFIRMED' as const
  },
  applicationWindow: {
    eyebrow: 'APPLICATION SCHEDULE',
    headline: 'Application Windows',
    text: SCIFINITY_OWNER_DATA.goldenSeat.applicationWindow,
    status: 'CONFIRMED' as const
  },
  evaluationAndCoverage: {
    evaluator: 'Founder Evaluation',
    evaluatorDesc: 'The founder personally interviews every shortlisted candidate to evaluate their learning mindset, curiosity, and sincerity.',
    coverageTitle: 'Coverage Scope',
    coverageDesc: 'The Golden Seat provides 100% tuition coverage for the enrolled program.',
    status: 'CONFIRMED' as const
  },
  accountability: {
    eyebrow: 'RESPONSIBILITY & CONTINUATION',
    headline: 'Continuation Criteria',
    description: 'To retain the Golden Seat throughout the academic programme, the student must fulfill the following approved criteria:',
    criteria: SCIFINITY_OWNER_DATA.goldenSeat.continuationCriteria,
    status: 'CONFIRMED' as const
  },
  cta: {
    headline: 'Apply for the Golden Seat or Nominate a Deserving Student',
    primary: { label: 'Apply for Golden Seat', route: '/admission?type=golden-seat' },
    secondary: { label: 'Explore Our System', route: '/system' }
  }
};

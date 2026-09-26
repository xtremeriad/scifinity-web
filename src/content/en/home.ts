/* ==========================================================================
   PAGE 01 — HOME CONTENT (ENGLISH)
   Source: 02_HOME.md
   Updated with verified founder statement and center locations.
   ========================================================================== */

import { SCIFINITY_OWNER_DATA } from '../placeholders.ts';

export const HOME_CONTENT = {
  hero: {
    headline: 'Where ingenuity meets curiosity.',
    supporting: 'SCIFINITY is a mentor-led educational ecosystem for SSC, HSC and Admission Test students—built to make learning meaningful, analytical and engaging.',
    pillars: [
      { label: 'EST. 2014', detail: 'Over 12 years of mentorship' },
      { label: 'SMALL BATCHES', detail: 'Maximum 15 students per batch' },
      { label: 'FOUNDER-LED', detail: 'EEE (IUT) Engineering Pedagogy' },
      { label: 'CORE PROGRAMS', detail: 'SSC | HSC | Admission Test' },
      { label: 'NCTB CURRICULUM', detail: 'Bangla Medium | English Version' }
    ],
    primaryCta: { label: 'Apply for Admission', route: '/admission' },
    secondaryCta: { label: 'Explore Our System', route: '/system' },
    status: 'CONFIRMED' as const
  },
  fundamentalQuestion: {
    eyebrow: 'THE CORE QUESTION',
    headline: 'Why do so many students study without actually enjoying or understanding what they learn?',
    description: 'In 2014, our founder observed students experiencing quiet discomfort and disappointment with memorization-heavy routines. SCIFINITY was founded to replace passive syllabus-cramming with genuine curiosity and deep conceptual understanding.',
    cta: { label: 'Read Why SCIFINITY Exists', route: '/why-scifinity' },
    status: 'CONFIRMED' as const
  },
  beliefs: {
    eyebrow: 'CORE PEDAGOGICAL PILLARS',
    headline: 'What We Believe About Real Learning',
    principles: [
      { title: 'Concepts Before Memorization', text: 'Formulas and facts matter, but only after you understand the physical and logical reasoning behind them.' },
      { title: 'Active Struggle & Debugging', text: 'Mistakes are not failures; they are diagnostic blueprints. We help students isolate where thinking breaks down.' },
      { title: 'Explanation as Proof', text: 'If you cannot explain a concept simply in your own words, you do not truly understand it yet.' },
      { title: 'Diagnostic Assessment', text: 'Tests exist to locate gaps in clarity and guide targeted practice, not to rank or label student capability.' }
    ],
    cta: { label: 'Explore Our Philosophy', route: '/why-scifinity' },
    status: 'CONFIRMED' as const
  },
  learningSystem: {
    eyebrow: 'SYSTEMATIC MENTORSHIP',
    headline: 'The 9-Stage SCIFINITY Learning Loop',
    description: 'We do not ask how fast we can rush through a syllabus. We ask where your understanding begins and how to build durable mastery.',
    steps: [
      { step: '01', title: 'Why', desc: 'Identify motivation, personal goals, and syllabus context.' },
      { step: '02', title: 'Connect', desc: 'Anchor abstract theories to observable real-world phenomena.' },
      { step: '03', title: 'Think', desc: 'Deconstruct problems from first principles before calculating.' },
      { step: '04', title: 'Attempt', desc: 'Independent student problem solving without premature clues.' },
      { step: '05', title: 'Debug', desc: 'Isolate error mechanics and logic flaws collaboratively.' },
      { step: '06', title: 'Retry', desc: 'Solve again with newly corrected conceptual understanding.' },
      { step: '07', title: 'Explain', desc: 'Articulate the reasoning aloud to peers and mentor.' },
      { step: '08', title: 'Practice', desc: 'Targeted variations to reinforce procedural agility.' },
      { step: '09', title: 'Mastery Check', desc: 'Diagnostic testing to confirm independent transfer.' }
    ],
    cta: { label: 'See How the System Works', route: '/system' },
    status: 'CONFIRMED' as const
  },
  tenMinuteBridge: {
    eyebrow: 'SIGNATURE PEDAGOGY',
    headline: "Today's Lesson. Tomorrow's Goal.",
    description: 'The 10-Minute Bridge is a focused intervention within regular classes that connects past academic foundations, today’s board topic, and future competitive admission expectations.',
    parts: [
      { stage: 'PAST', title: 'Prior Foundation', desc: 'Reactivate prerequisites and foundational intuition.' },
      { stage: 'PRESENT', title: 'Board Curriculum', desc: 'Deeply master today’s SSC/HSC core syllabus topic.' },
      { stage: 'FUTURE', title: 'Admission Horizon', desc: 'Explore how university admission problems test this exact principle.' }
    ],
    note: 'Note: The 10-Minute Bridge connects concepts without turning regular classes into premature rush-coaching.',
    status: 'CONFIRMED' as const
  },
  programsSummary: {
    eyebrow: 'ACADEMIC OFFERINGS',
    headline: 'Structured Programs with Rigorous Focus',
    programs: [
      {
        id: 'ssc',
        title: 'SSC Program',
        classes: 'Classes 9–10',
        subjects: ['General Mathematics', 'Higher Mathematics', 'Physics', 'Chemistry'],
        summary: 'Build strong conceptual fundamentals behind science and math rather than treating formulas as things to memorize.',
        route: '/programs/ssc'
      },
      {
        id: 'hsc',
        title: 'HSC Program',
        classes: 'Classes 11–12',
        subjects: ['Higher Mathematics', 'Physics', 'Chemistry'],
        summary: 'Develop analytical depth, systematic problem-solving, and disciplined study habits for both board excellence and university readiness.',
        route: '/programs/hsc'
      },
      {
        id: 'admission',
        title: 'Admission Test Program',
        classes: 'Post-HSC & Pre-Admission',
        subjects: ['Higher Mathematics', 'Physics', 'Chemistry'],
        summary: 'Rigorous engineering and university A-Unit preparation focused on first-principles problem deconstruction.',
        route: '/programs/admission'
      },
      {
        id: 'final-sprint',
        title: 'FINAL SPRINT Batch',
        classes: 'SSC & HSC',
        subjects: [
          'SSC Final Preparation',
          'HSC Final Preparation',
          'Intensive Revision',
          'Problem-Solving Practice',
          'Examination Strategy'
        ],
        summary: 'An intensive final-stage preparation program for SSC and HSC students after their respective Test Examinations—focused on revision, problem-solving, exam strategy, and stronger board examination performance.',
        route: '/programs'
      }
    ],
    cta: { label: 'View All Programs', route: '/programs' },
    status: 'CONFIRMED' as const
  },
  collaborationIntro: {
    eyebrow: 'COLLABORATION',
    headline: 'Learn Beyond the Classroom',
    supportingLine: 'What if learning could also mean creating, contributing, and experiencing the real world?',
    description: 'SCIFINITY creates opportunities for students to participate in meaningful academic, creative, and real-world collaborative experiences.',
    cta: { label: 'Explore Collaboration', route: '/collaboration' },
    status: 'CONFIRMED' as const
  },
  founderSummary: {
    eyebrow: 'LEADERSHIP & MENTORSHIP',
    name: SCIFINITY_OWNER_DATA.founder.displayName,
    headline: 'Founder-Led Personal Investment',
    title: 'Founder & Mentor',
    credentials: SCIFINITY_OWNER_DATA.founder.degree,
    experience: SCIFINITY_OWNER_DATA.founder.mentoringSpan,
    quote: SCIFINITY_OWNER_DATA.founder.approvedStatement,
    cta: { label: 'Meet the Founder', route: '/founder' },
    status: 'CONFIRMED' as const
  },
  developmentPath: {
    eyebrow: 'DEVELOPMENT PATH',
    headline: 'How Students Develop at SCIFINITY',
    description: 'Our developmental progression is designed to transform passive test-takers into self-directed thinkers.',
    milestones: [
      'Understand Yourself',
      'Recognize Strengths & Weaknesses',
      'Choose Effective Strategies',
      'Deliberate Practice',
      'Explain Aloud',
      'Continuous Diagnostic Improvement',
      'Build Genuine Confidence',
      'Independent Thinking'
    ],
    status: 'CONFIRMED' as const
  },
  connectIntro: {
    eyebrow: 'SCIFINITY CONNECT',
    headline: 'Something on Your Mind?',
    supportingLine: 'Not every problem has an answer in a textbook.',
    body: "A difficult subject. A change in motivation. Trouble maintaining a routine. Uncertainty about what comes next. Or simply something about your child's learning that you want to understand.",
    subtext: 'You can talk to us.',
    cta: { label: 'Explore SCIFINITY Connect', route: '/connect' },
    status: 'CONFIRMED' as const
  },
  storiesNotice: {
    eyebrow: 'VERIFIED EVIDENCE',
    headline: 'Success Is More Than a Number',
    text: SCIFINITY_OWNER_DATA.evidence.statusNotice,
    cta: { label: 'Explore Success & Evidence', route: '/success' },
    status: 'COMING_SOON' as const
  },
  goldenSeat: {
    eyebrow: 'COMMUNITY & ACCESS',
    headline: 'The Golden Seat — An Opportunity to Learn',
    description: 'Financial limitations must not prevent a determined student from accessing SCIFINITY. One deserving student in every batch receives complete tuition support through direct application or peer nomination.',
    cta: { label: 'Explore the Golden Seat', route: '/golden-seat' },
    status: 'CONFIRMED' as const
  },
  vaultSummary: {
    eyebrow: 'OPEN EDUCATIONAL RESOURCE',
    headline: 'The Vault — Free Insights & Strategy',
    description: 'Open to any student with internet access. Practical study frameworks, exam strategies, physics conceptual tips, and math problem-solving techniques.',
    categories: ['Study Tips', 'Exam Tips', 'Physics Tips', 'Mathematics Tricks'],
    plannedFeature: 'Comprehensive board question solutions with high-quality step-by-step explanations (Currently in Development).',
    cta: { label: 'Enter The Vault', route: '/vault' },
    status: 'CONFIRMED' as const
  },
  locationsSummary: {
    eyebrow: 'CENTERS',
    headline: 'Two Dhaka Locations. One Rigorous Standard.',
    description: 'Both centers uphold identical 15-student batch limits, alternate-day schedules, and founder-led mentorship.',
    locations: [
      { name: 'Uttara Center', batches: 'Dawn, Zenith, Prime, Vesper (Sat/Mon/Wed)', address: SCIFINITY_OWNER_DATA.locations.uttara.fullLocation },
      { name: 'Patuatuli Center', batches: 'Dawn, Zenith, Prime, Vesper (Sun/Tue/Thu)', address: SCIFINITY_OWNER_DATA.locations.patuatuli.fullLocation }
    ],
    cta: { label: 'View Location Details', route: '/locations' },
    status: 'CONFIRMED' as const
  },
  finalCta: {
    headline: 'If you are looking for a place where understanding matters, begin here.',
    description: 'Small batches of 15 students ensure direct, personalized mentorship. Apply with a genuine desire to learn.',
    primary: { label: 'Apply for Admission', route: '/admission' },
    secondary: { label: 'Explore Our System', route: '/system' }
  }
};

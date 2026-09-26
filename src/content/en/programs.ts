/* ==========================================================================
   PROGRAMS MASTER CONTENT (ENGLISH)
   Source: 05_PROGRAMS, 06_PROGRAM_SSC, 07_PROGRAM_HSC, 08_PROGRAM_ADMISSION_TEST
   ========================================================================== */

export const PROGRAMS_INDEX_CONTENT = {
  hero: {
    eyebrow: 'ACADEMIC STRUCTURE',
    headline: 'Learn for the Exam. Learn Beyond the Exam.',
    supporting: 'SCIFINITY currently focuses on SSC, HSC and Admission Test preparation in Mathematics, Physics and Chemistry. Each program is built around conceptual understanding, problem-solving, explanation and deliberate practice.',
    status: 'CONFIRMED' as const
  },
  pedagogicalLogic: {
    headline: 'Why Our Programs Are Structured This Way',
    description: 'We do not separate board preparation from conceptual rigor. Solid board exam performance is the natural byproduct of first-principles mastery, and competitive university admission requires concepts learned deeply years prior.'
  },
  batchInfo: {
    headline: 'Small Batch Architecture',
    maxSize: 'Strict maximum 15 students per batch',
    batches: ['Dawn', 'Zenith', 'Prime', 'Vesper'],
    scheduleNote: 'Batches are shared across Uttara and Patuatuli centers on alternate days.'
  },
  adyantaDistinction: {
    headline: 'Ecosystem & Publications',
    text: 'SCIFINITY delivers direct mentor-led teaching. Broader self-study tools—including Parallel Test Books, Flash Cards, and Learning Tools—are published by Adyanta, an independent publishing house under common leadership.',
    status: 'CONFIRMED' as const
  }
};

export const SSC_PROGRAM_CONTENT = {
  meta: {
    title: 'SSC Program (Classes 9–10) — SCIFINITY',
    description: 'General Math, Higher Math, Physics, and Chemistry for SSC candidates. Build foundational concepts instead of memorizing the syllabus.'
  },
  hero: {
    eyebrow: 'PROGRAM 01 — CLASSES 9 & 10',
    headline: 'SSC Foundation Program',
    positioning: 'Build the conceptual foundation behind the syllabus instead of treating the syllabus as a list of things to memorize.',
    target: 'Classes 9–10 Students'
  },
  subjects: [
    { name: 'General Mathematics', focus: 'Algebraic logic, geometry proofs, trigonometry, and statistics fundamentals.' },
    { name: 'Higher Mathematics', focus: 'Set theory, coordinate geometry, advanced algebra, and vectors.' },
    { name: 'Physics', focus: 'Mechanics, wave mechanics, thermodynamics, light, and electrical intuition.' },
    { name: 'Chemistry', focus: 'Atomic structure, periodic trends, chemical bonding, and reaction dynamics.' }
  ],
  methodology: {
    headline: 'How We Teach SSC Candidates',
    points: [
      'Deconstruct physical formulas into observable real-life mechanics.',
      'Frequent oral explanation sessions in front of the batch.',
      'Active error debugging when homework problems fail.',
      'Topic-wise diagnostic tests to isolate conceptual gaps before school exams.'
    ]
  },
  studentFit: {
    headline: 'Who Is This Program For?',
    text: 'Any student willing to engage, complete homework, and think through mistakes. Prior academic weakness does not disqualify a student; lack of willingness to try does.'
  },
  batchLocations: {
    locations: 'Uttara & Patuatuli Centers (Alternate Days)',
    batches: 'Dawn, Zenith, Prime, Vesper (Max 15 Students)',
    scheduleStatus: '[CURRENT CLASS SCHEDULE REQUIRED]'
  }
};

export const HSC_PROGRAM_CONTENT = {
  meta: {
    title: 'HSC Program (Classes 11–12) — SCIFINITY',
    description: 'Higher Math, Physics, and Chemistry for HSC candidates. Deep conceptual understanding, rigorous problem solving, and early admission bridge.'
  },
  hero: {
    eyebrow: 'PROGRAM 02 — CLASSES 11 & 12',
    headline: 'HSC Advanced & Bridge Program',
    positioning: 'Develop deeper conceptual understanding, stronger problem-solving ability and the habits needed for both board examinations and future admission preparation.',
    target: 'Classes 11–12 Students'
  },
  subjects: [
    { name: 'Higher Mathematics', focus: 'Differential & integral calculus, matrices, complex numbers, conic sections, and mechanics.' },
    { name: 'Physics', focus: 'Newtonian mechanics, rotational dynamics, thermodynamics, wave optics, electromagnetism, and modern physics.' },
    { name: 'Chemistry', focus: 'Qualitative & quantitative chemistry, organic reaction mechanisms, electrochemistry, and chemical equilibrium.' }
  ],
  admissionConnection: {
    headline: 'The Admission Bridge for HSC',
    description: 'Through our 10-Minute Bridge, HSC students understand how their current board topics connect to challenging problems in BUET, Medical, and University A-Unit entrance tests without overwhelming their current board focus.'
  },
  studentExpectations: {
    headline: 'Student Commitment',
    text: 'Consistent daily problem practice, active participation during debugging sessions, and regular completion of analytical assignments.'
  },
  batchLocations: {
    locations: 'Uttara & Patuatuli Centers (Alternate Days)',
    batches: 'Dawn, Zenith, Prime, Vesper (Max 15 Students)',
    scheduleStatus: '[CURRENT CLASS SCHEDULE REQUIRED]'
  }
};

export const ADMISSION_PROGRAM_CONTENT = {
  meta: {
    title: 'Admission Test Program — SCIFINITY',
    description: 'Engineering & University A-Unit admission preparation. Higher Math, Physics, and Chemistry grounded in first-principles problem solving.'
  },
  hero: {
    eyebrow: 'PROGRAM 03 — COMPETITIVE ENTRANCE',
    headline: 'Engineering & University A-Unit Admission',
    positioning: 'Admission preparation should not begin only after the board examination. Built on first-principles understanding, speed, and analytical intuition rather than blind shortcut memorization.',
    target: 'Engineering (BUET/CKRUET) & University A-Unit Aspirants'
  },
  subjects: [
    { name: 'Higher Mathematics', focus: 'High-speed analytical problem solving, multi-concept integration, and calculus applications.' },
    { name: 'Physics', focus: 'Multi-variable mechanics, complex electrical networks, and unconventional physical scenarios.' },
    { name: 'Chemistry', focus: 'Advanced stoichiometry, organic synthesis pathways, and rapid equilibrium calculations.' }
  ],
  foundationFirst: {
    headline: 'Why Foundation Outperforms Rote Shortcuts',
    description: 'Admission tests deliberately create novel, unseen problem variants. Students who only memorize shortcut formulas fail when constraints shift. Students grounded in first principles adapt effortlessly.'
  },
  resources: {
    current: 'Free access to The Vault (Study Tips, Exam Tips, Physics Tips, Mathematics Tricks).',
    futureStatus: 'Comprehensive solved board and admission question repository (Currently PLANNED).'
  }
};

export const FINAL_SPRINT_PROGRAM_CONTENT = {
  meta: {
    title: 'FINAL SPRINT Batch (SSC & HSC) — SCIFINITY',
    description: 'Intensive final-stage preparation program for SSC and HSC candidates after Test Examinations. Revision, problem-solving, and exam strategy.'
  },
  hero: {
    eyebrow: 'FINAL STAGE — SSC & HSC',
    headline: 'FINAL SPRINT Batch',
    positioning: 'An intensive final-stage preparation program for SSC and HSC students after their respective Test Examinations—focused on final revision, problem-solving, examination strategy, and stronger board-examination performance.',
    target: 'SSC & HSC'
  },
  subjects: [
    { name: 'SSC Final Preparation', focus: 'Targeted revision and board question strategy across SSC subjects.' },
    { name: 'HSC Final Preparation', focus: 'Comprehensive board exam simulations and analytical mastery for HSC.' },
    { name: 'Intensive Revision', focus: 'Systematic reviews of high-yield concepts and error-prone areas.' },
    { name: 'Problem-Solving Practice', focus: 'Rigorous application practice under timed examination conditions.' },
    { name: 'Examination Strategy', focus: 'Mark distribution tactics, time management, and structured presentation.' }
  ]
};

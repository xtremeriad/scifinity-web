/* ==========================================================================
   PAGE 03 — OUR SYSTEM CONTENT (ENGLISH)
   Source: 04_OUR_SYSTEM.md
   ========================================================================== */

export const SYSTEM_CONTENT = {
  hero: {
    eyebrow: 'METHODOLOGY & PEDAGOGY',
    headline: 'A Learning System Built Around the Student.',
    supporting: 'SCIFINITY does not begin with the question, "How much of the syllabus can we finish?" It begins with the student: why they are here, what they understand, where their thinking breaks down, and what they need to do next.',
    status: 'CONFIRMED' as const
  },
  sections: [
    {
      number: '01',
      title: 'Active Learning vs. Passive Receiving',
      description: 'In traditional classrooms, students sit passively taking notes while a teacher performs solutions. At SCIFINITY, students are actively engaged in questioning, formulating hypotheses, and deriving principles themselves.',
      status: 'CONFIRMED' as const
    },
    {
      number: '02',
      title: 'Start With Why',
      description: 'Every academic journey begins with establishing personal intent: "Why are you here?" Understanding personal goals creates intrinsic motivation and personal responsibility for learning.',
      status: 'CONFIRMED' as const
    },
    {
      number: '03',
      title: 'Real-Life Connection',
      description: 'New concepts begin with familiar physical situations whenever possible. Students observe real-world phenomena before moving into mathematical formalism.',
      flow: ['Real-life example', 'Connection to physical principle', 'Academic formula & derivation'],
      status: 'CONFIRMED' as const
    },
    {
      number: '04',
      title: 'Understand Before Memorizing',
      description: 'Formulas, constants, and standard procedures have immense value—but they must always rest on foundational conceptual comprehension first.',
      status: 'CONFIRMED' as const
    },
    {
      number: '05',
      title: 'Think Before the Answer',
      description: 'When a student is stuck, we do not simply provide the solution. We guide them to re-read the problem, identify missing constraints, and discover where their logic stalled.',
      flow: ['Analyze question', 'Identify core constraint', 'Formulate hypothesis', 'Independent attempt'],
      status: 'CONFIRMED' as const
    },
    {
      number: '06',
      title: 'Trial, Error & Debugging',
      description: 'When a student makes a mistake, our engineering approach kicks in. We do not judge the error; we debug it. We trace the error mechanics, explain why the breakdown occurred, and let the student retry.',
      flow: ['Attempt', 'Isolate Error Point', 'Diagnose Misconception', 'Correct Logic', 'Successful Retry'],
      status: 'CONFIRMED' as const
    },
    {
      number: '07',
      title: 'Explain Aloud',
      description: 'Students are frequently asked to stand up and explain a concept or real-life problem aloud to their batchmates. Articulating reasoning makes gaps instantly visible and solidifies retention.',
      status: 'CONFIRMED' as const
    },
    {
      number: '08',
      title: 'Peer Reinforcement',
      description: 'Assignments are checked collaboratively, allowing students to see alternate solution pathways and learn from their peers’ analytical approaches.',
      status: 'CONFIRMED' as const
    },
    {
      number: '09',
      title: 'Semicircular Classroom Architecture',
      description: 'Desks are arranged in a semicircular curve. This guarantees direct eye contact, total visibility, zero back-row disengagement, and fluid mentor-student dialog.',
      status: 'CONFIRMED' as const
    },
    {
      number: '10',
      title: 'Mastery Check',
      description: 'Evaluations combine continuous observation, oral explanations, and formal topic-based diagnostic tests to ensure complete conceptual transfer before moving forward.',
      status: 'CONFIRMED' as const
    },
    {
      number: '11',
      title: 'Examination as Diagnostic Tool',
      description: 'Examinations are not punitive rankings. They provide actionable telemetry on what the student understands and where further deliberate practice is required.',
      status: 'CONFIRMED' as const
    },
    {
      number: '12',
      title: 'The 10-Minute Bridge',
      description: 'Every class features a short 10-minute synthesis connecting past prerequisites, today’s board lesson, and future admission test implications.',
      flow: ['PAST: Prior Intuition', 'PRESENT: Today’s Core Syllabus', 'FUTURE: Admission Synthesis'],
      status: 'CONFIRMED' as const
    },
    {
      number: '13',
      title: 'Understanding Yourself',
      description: 'Students learn metacognition: recognizing their cognitive strengths, identifying study traps, and choosing personalized problem-solving strategies.',
      status: 'CONFIRMED' as const
    },
    {
      number: '14',
      title: 'Parent Partnership',
      description: 'Parents support regular homework completion, keep students well-rested and prepared, and reinforce the value of productive struggle at home.',
      status: 'CONFIRMED' as const
    }
  ],
  developmentCycle: {
    eyebrow: 'DEVELOPMENT LIFECYCLE',
    headline: 'From Initial Curiosity to Independent Mastery',
    stages: [
      { name: 'Awareness', desc: 'Recognizing current gaps and establishing study intent.' },
      { name: 'Understanding', desc: 'Grasping first principles behind scientific & mathematical laws.' },
      { name: 'Practice', desc: 'Iterative problem solving with targeted debugging.' },
      { name: 'Confidence', desc: 'Explaining concepts aloud and tackling novel test problems.' },
      { name: 'Independence', desc: 'Self-directed study and self-diagnosis without continuous supervision.' }
    ]
  },
  cta: {
    headline: 'Ready to See How Our Programs Apply This System?',
    description: 'Explore our SSC, HSC, and competitive Admission Test academic programs.',
    primary: { label: 'Explore Programs', route: '/programs' },
    secondary: { label: 'Apply for Admission', route: '/admission' }
  }
};

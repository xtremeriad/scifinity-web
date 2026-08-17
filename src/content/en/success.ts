/* ==========================================================================
   PAGE 09 — SUCCESS & STORIES CONTENT (ENGLISH)
   Source: 10_SUCCESS_AND_STORIES.md
   ========================================================================== */

export const SUCCESS_CONTENT = {
  hero: {
    eyebrow: 'EVIDENCE & OUTCOMES',
    headline: 'Success Is More Than a Number.',
    supporting: 'Examination results matter. They are evidence of performance and an important part of a student’s academic journey. But SCIFINITY does not define mastery by marks alone. We also care about whether a student can explain what they know, apply it, recognize their own errors and continue learning independently.',
    status: 'CONFIRMED' as const
  },
  dimensionsOfSuccess: {
    eyebrow: 'OUR DEFINITION',
    headline: 'Six Dimensions of Real Student Mastery',
    dimensions: [
      { title: 'Conceptual Understanding', desc: 'Grasping the physical and logical mechanisms behind equations rather than blindly executing routines.' },
      { title: 'Ability to Explain', desc: 'Articulating complex principles clearly to peers and answering unexpected counter-questions.' },
      { title: 'Independent Diagnosis', desc: 'Spotting where mathematical steps derailed without waiting for an instructor to point out the error.' },
      { title: 'Effective Study Strategy', desc: 'Managing preparation time, diagnostic revisions, and high-pressure exam timelines with composure.' },
      { title: 'Academic Results', desc: 'Demonstrated high performance in institutional, board (SSC/HSC), and competitive university admission exams.' },
      { title: 'Long-Term Independence', desc: 'Developing the intellectual curiosity and resilience required for lifelong self-directed learning.' }
    ],
    status: 'CONFIRMED' as const
  },
  evidenceFramework: {
    eyebrow: 'CASE STUDY ARCHITECTURE',
    headline: 'How We Document Student Transformation',
    steps: [
      { step: '01', title: 'Starting Point', desc: 'Initial academic baseline, specific topic anxieties, and study habits upon joining.' },
      { step: '02', title: 'The Challenge', desc: 'Where the student’s thinking broke down when encountering advanced non-routine problems.' },
      { step: '03', title: 'Learning Process', desc: 'Active participation in semicircular debugging sessions and oral explanation practice.' },
      { step: '04', title: 'The Shift', desc: 'The moment conceptual intuition replaced memorization and confidence took root.' },
      { step: '05', title: 'The Outcome', desc: 'Verified examination marks, university placement, and independent study maturity.' }
    ],
    status: 'CONFIRMED' as const
  },
  verificationNotice: {
    eyebrow: 'INSTITUTIONAL INTEGRITY POLICY',
    headline: 'Strict Evidence Verification in Progress',
    text: 'In alignment with our core ethical standards, SCIFINITY never fabricates student names, results, quotes, or photographs. Verified student journeys and guardian testimonials from our active batches are compiled with written parental consent and will be featured here as reviews conclude.',
    status: 'PLACEHOLDER' as const
  },
  guardianPerspective: {
    eyebrow: 'GUARDIAN PERSPECTIVE',
    headline: 'What Parents Observe at Home',
    observations: [
      { focus: 'Reduced Exam Anxiety', desc: 'Students approach revision with structured diagnostic strategies rather than panic-driven cramming.' },
      { focus: 'Enthusiastic Explanation', desc: 'Students actively discuss science concepts and real-world connections at the family table.' },
      { focus: 'Ownership of Work', desc: 'Independent homework completion and voluntary error review replace constant parental prompting.' }
    ],
    status: 'CONFIRMED' as const
  },
  cta: {
    headline: 'Join an Educational Environment Focused on Genuine Growth',
    primary: { label: 'Apply for Admission', route: '/admission' },
    secondary: { label: 'Explore Programs', route: '/programs' }
  }
};

/* ==========================================================================
   PAGE 13 — ADMISSION CONTENT (ENGLISH)
   Source: 14_ADMISSION.md
   ========================================================================== */

export const ADMISSION_CONTENT = {
  hero: {
    eyebrow: 'APPLICATION & ENROLLMENT',
    headline: 'Ready to Learn Differently?',
    supporting: 'If you want to understand what you learn, work through your mistakes and develop more effective ways to study, start by telling us why you want to join SCIFINITY.',
    status: 'CONFIRMED' as const
  },
  mindsetRequirement: {
    eyebrow: 'WHO CAN APPLY',
    headline: 'Anyone with the Right Mindset',
    description: 'We do not select students solely based on top grades. The single non-negotiable requirement is a genuine willingness to understand, participate actively, complete homework, and embrace intellectual struggle.',
    status: 'CONFIRMED' as const
  },
  processSteps: [
    { step: '01', title: 'Application', desc: 'Submit your details, preferred location, and personal motivation below.' },
    { step: '02', title: 'Evaluation & Dialogue', desc: 'The mentor reviews your intent and discusses learning expectations with you and your guardians.' },
    { step: '03', title: 'Batch Allocation', desc: 'Placement into an appropriate 15-student batch (Dawn, Zenith, Prime, or Vesper).' },
    { step: '04', title: 'Initial Orientation', desc: 'Setting baseline expectations, study habits, and personal academic goals.' },
    { step: '05', title: 'Learning & Diagnosis', desc: 'Commence active classroom learning, debugging loops, and topic mastery tests.' }
  ],
  studentCommitments: [
    'Attend all sessions punctually and prepared.',
    'Complete all assigned homework and diagnostic practice tasks.',
    'Participate voluntarily in explanation sessions and error debugging.',
    'Take personal ownership of academic growth and intellectual honesty.'
  ],
  parentRole: {
    headline: 'The Guardian’s Role',
    description: 'Parents ensure home study environments are conducive to focus, verify homework completion, and support their student during challenging diagnostic revisions.'
  },
  formSpecs: {
    programs: [
      { value: 'SSC', label: 'SSC Program (Classes 9–10)' },
      { value: 'HSC', label: 'HSC Program (Classes 11–12)' },
      { value: 'Admission Test', label: 'University / Engineering Admission Test' }
    ],
    locations: [
      { value: 'Uttara', label: 'Uttara Center (Dhaka)' },
      { value: 'Patuatuli', label: 'Patuatuli Center (Dhaka)' }
    ],
    batches: [
      { value: 'Dawn', label: 'Batch Dawn (Morning / Alternate Days)' },
      { value: 'Zenith', label: 'Batch Zenith (Mid-day / Alternate Days)' },
      { value: 'Prime', label: 'Batch Prime (Afternoon / Alternate Days)' },
      { value: 'Vesper', label: 'Batch Vesper (Evening / Alternate Days)' }
    ],
    backendNotice: 'Submission Endpoint: [FINAL FORM BACKEND AND NOTIFICATION PROCESS REQUIRED]'
  }
};

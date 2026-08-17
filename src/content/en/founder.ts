/* ==========================================================================
   PAGE 08 — FOUNDER & MENTOR CONTENT (ENGLISH)
   Source: 09_FOUNDER_AND_MENTOR.md
   Updated with official verified founder details.
   ========================================================================== */

import { SCIFINITY_OWNER_DATA } from '../placeholders.ts';

export const FOUNDER_CONTENT = {
  hero: {
    eyebrow: 'LEADERSHIP & PEDAGOGY',
    name: SCIFINITY_OWNER_DATA.founder.displayName,
    headline: 'Founder & Mentor',
    credentials: SCIFINITY_OWNER_DATA.founder.degree,
    mentoringSpan: SCIFINITY_OWNER_DATA.founder.mentoringSpan,
    status: 'CONFIRMED' as const
  },
  approvedStatement: {
    eyebrow: 'APPROVED FOUNDER STATEMENT',
    quote: SCIFINITY_OWNER_DATA.founder.approvedStatement,
    status: 'CONFIRMED' as const
  },
  originStory: {
    eyebrow: 'HOW IT BEGAN',
    headline: 'The Landlord’s Son and the Question That Started SCIFINITY',
    paragraphs: [
      'SCIFINITY began in 2014 when teaching was simply a way for its founder to make a living. His first student was the son of his landlord.',
      "That student was not attentive to studying. The founder noticed discomfort and disappointment in the student's eyes and later encountered similar experiences in many other students.",
      'Those experiences led to a different question: What if learning could become interesting again?',
      'SCIFINITY grew from that question.'
    ],
    status: 'CONFIRMED' as const
  },
  philosophyStatement: {
    eyebrow: 'MENTORSHIP STATEMENT',
    headline: 'An Engineering Approach to Human Learning',
    quote: [
      'I do not see teaching as the delivery of a syllabus.',
      'I try to make the connection between an academic concept and the world around the student. When necessary, I go beyond the boundary of the syllabus to make the idea understandable and to encourage the student to think.',
      'My engineering background influences how I approach mistakes: understand the problem, identify the point of failure, correct it, and try again.'
    ],
    status: 'CONFIRMED' as const
  },
  subjectsTaught: {
    eyebrow: 'ACADEMIC SCOPE',
    headline: 'Subjects Personally Mentored',
    description: 'To ensure unwavering pedagogical rigor, our founder remains personally invested in all currently offered core Physical Science and Mathematics subjects:',
    subjects: [
      { name: 'General Mathematics', level: 'SSC (Classes 9–10)' },
      { name: 'Higher Mathematics', level: 'SSC, HSC, Admission Test' },
      { name: 'Physics', level: 'SSC, HSC, Admission Test' },
      { name: 'Chemistry', level: 'SSC, HSC, Admission Test' }
    ],
    status: 'CONFIRMED' as const
  },
  credibilityStandards: {
    eyebrow: 'AUTHENTICITY & TRUST',
    headline: 'How We Build Credibility',
    points: [
      { title: 'Academic Rigor', desc: 'Rigorous engineering training from IUT applied to secondary and higher-secondary education.' },
      { title: '12 Years of Mentorship', desc: 'Continuous direct interaction with Dhaka students across evolving curricula since 2014.' },
      { title: 'Evidence-Based Progress', desc: 'No fabricated awards, bought rankings, or exaggerated slogans. True student understanding is our only metric.' }
    ],
    status: 'CONFIRMED' as const
  },
  cta: {
    headline: 'Experience the SCIFINITY Teaching Method',
    primary: { label: 'Explore Our System', route: '/system' },
    secondary: { label: 'Explore Programs', route: '/programs' }
  }
};

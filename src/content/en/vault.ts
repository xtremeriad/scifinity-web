/* ==========================================================================
   PAGE 11 — THE VAULT CONTENT (ENGLISH)
   Source: 12_THE_VAULT.md
   ========================================================================== */

import type { VaultResource } from '../types.ts';

export const VAULT_CONTENT = {
  hero: {
    eyebrow: 'FREE KNOWLEDGE REPOSITORY',
    headline: 'The Vault — Learn Smarter.',
    supporting: 'Information is everywhere. The challenge is knowing what matters, how to use it and how to turn it into understanding. The Vault is SCIFINITY’s free online resource space for practical tips and tricks.',
    accessNotice: 'Free and open to anyone with an internet connection.',
    status: 'CONFIRMED' as const
  },
  categories: [
    { id: 'all', name: 'All Resources' },
    { id: 'study-tips', name: 'Study Tips' },
    { id: 'exam-tips', name: 'Exam Tips' },
    { id: 'physics-tips', name: 'Physics Tips' },
    { id: 'math-tricks', name: 'Mathematics Tricks' },
    { id: 'board-solutions', name: 'Board Questions & Solutions (Planned)' }
  ],
  resources: [
    {
      id: 'vault-01',
      title: 'The First 15 Minutes: Deconstructing Complex Physics Problems',
      category: 'Physics Tips' as const,
      level: 'SSC & HSC',
      status: 'CONFIRMED' as const,
      description: 'A step-by-step diagnostic method to visualize constraints and identify governing physical laws before writing down equations.',
      readTime: '6 min read'
    },
    {
      id: 'vault-02',
      title: 'Calculus Intuition: Why Integration is More Than Reversed Differentiation',
      category: 'Mathematics Tricks' as const,
      level: 'HSC & Admission',
      status: 'CONFIRMED' as const,
      description: 'Understanding Riemann sums, accumulation mechanics, and graphical shortcuts for high-speed university entrance exams.',
      readTime: '8 min read'
    },
    {
      id: 'vault-03',
      title: 'The Error Log Method: How to Turn Wrong Answers into High Exam Scores',
      category: 'Study Tips' as const,
      level: 'All Levels',
      status: 'CONFIRMED' as const,
      description: 'A disciplined framework for categorizing mistakes into calculation slips, missing prerequisites, and conceptual misunderstandings.',
      readTime: '5 min read'
    },
    {
      id: 'vault-04',
      title: 'Managing High-Stakes Time Allocation in Admission Tests',
      category: 'Exam Tips' as const,
      level: 'Admission Test',
      status: 'CONFIRMED' as const,
      description: 'How to triage question papers, avoid time sinks on deceptive questions, and preserve emotional composure under pressure.',
      readTime: '7 min read'
    },
    {
      id: 'vault-05',
      title: 'Vector Decomposition in Non-Orthogonal Coordinate Frames',
      category: 'Physics Tips' as const,
      level: 'HSC & Admission',
      status: 'CONFIRMED' as const,
      description: 'Breaking down inclined planes and multi-body rotational forces using geometric symmetry.',
      readTime: '10 min read'
    },
    {
      id: 'vault-06',
      title: 'Mastering Trigonometric Substituted Proofs in Algebra',
      category: 'Mathematics Tricks' as const,
      level: 'SSC & HSC',
      status: 'CONFIRMED' as const,
      description: 'Transforming algebraic inequalities and nested radicals through trigonometric identities.',
      readTime: '6 min read'
    }
  ] as VaultResource[],
  plannedExpansion: {
    eyebrow: 'FUTURE ROADMAP',
    headline: 'Comprehensive Board & Admission Question Bank',
    description: 'We are currently developing a curated repository of past SSC, HSC, and University Admission exam questions featuring complete, step-by-step conceptual derivations.',
    status: 'PLANNED' as const
  },
  cta: {
    headline: 'Want Personalized Mentorship in Physics & Math?',
    primary: { label: 'Explore Academic Programs', route: '/programs' },
    secondary: { label: 'Apply for Admission', route: '/admission' }
  }
};

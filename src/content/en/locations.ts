/* ==========================================================================
   PAGE 12 — LOCATIONS CONTENT (ENGLISH)
   Source: 13_LOCATIONS.md
   Updated with official verified location and schedule details.
   ========================================================================== */

import { SCIFINITY_OWNER_DATA } from '../placeholders.ts';

export const LOCATIONS_CONTENT = {
  hero: {
    eyebrow: 'PHYSICAL CENTERS',
    headline: 'Our Campuses: Where the Journey Meets the Goal',
    supporting: 'SCIFINITY operates from two dedicated Dhaka locations: Uttara and Patuatuli. Both centers follow the exact same educational philosophy, 15-student batch limit, and mentor-led learning system.',
    status: 'CONFIRMED' as const
  },
  sharedSystemPrinciples: {
    eyebrow: 'STANDARDIZED QUALITY',
    headline: 'Identical Academic Rigor Across Both Hubs',
    points: [
      { title: 'Strict Batch Limit', desc: 'Maximum 15 students per batch at both centers—no overcrowded classrooms.' },
      { title: 'Founder-Led Teaching', desc: 'The founder personally leads physical instruction across core science and math subjects at both branches.' },
      { title: 'Alternate-Day Synchronization', desc: 'Uttara (Sat/Mon/Wed) and Patuatuli (Sun/Tue/Thu) operate on standardized batch timings.' },
      { title: 'Semicircular Layout', desc: 'Custom semicircular desk seating designed for direct eye contact and instant question feedback.' }
    ]
  },
  locationsList: [
    {
      id: 'uttara',
      name: 'Uttara Center',
      city: 'Dhaka-1230, Bangladesh',
      status: 'CONFIRMED' as const,
      addressRequired: SCIFINITY_OWNER_DATA.locations.uttara.fullLocation,
      daysSchedule: SCIFINITY_OWNER_DATA.locations.uttara.scheduleDays,
      facilityNote: 'Strict 15-student semicircular seating with direct line-of-sight engagement.',
      story: 'Uttara is where my academic and professional story truly began. It witnessed my transition from an ambitious college student to an EEE Engineer. I never truly left Uttara—it is a part of me. Every street reminds me of the struggle to master a complex concept and the eventual joy of clarity.',
      environment: [
        'Serene Environment away from chaotic noise.',
        "Modern Infrastructure designed to match an engineer's standard of precision."
      ],
      batches: [
        'Dawn: 7:00 AM–8:30 AM',
        'Zenith: 8:30 AM–10:00 AM',
        'Prime: 4:00 PM–5:30 PM',
        'Vesper: 5:30 PM–7:00 PM'
      ]
    },
    {
      id: 'patuatuli',
      name: 'Patuatuli Center',
      city: 'Dhaka-1100, Bangladesh',
      status: 'CONFIRMED' as const,
      addressRequired: SCIFINITY_OWNER_DATA.locations.patuatuli.fullLocation,
      daysSchedule: SCIFINITY_OWNER_DATA.locations.patuatuli.scheduleDays,
      facilityNote: 'Strict 15-student semicircular seating with direct line-of-sight engagement.',
      story: 'Standing at the doorstep of BanglaBazar, this is the tactical heart of my vision. This ancient study hub is where my Unique Publication is situated—allowing me to walk directly from my research desk to the whiteboard. It is my urge to contribute my engineering expertise to this historic academic zone.',
      environment: [
        'Legacy in the most famous academic zone.',
        "The Creator's Hub where theory meets the printed page."
      ],
      batches: [
        'Dawn: 7:00 AM–8:30 AM',
        'Zenith: 8:30 AM–10:00 AM',
        'Prime: 4:00 PM–5:30 PM',
        'Vesper: 5:30 PM–7:00 PM'
      ]
    }
  ],
  standardTimings: [
    { name: 'Dawn Batch', time: SCIFINITY_OWNER_DATA.schedules.dawnTiming },
    { name: 'Zenith Batch', time: SCIFINITY_OWNER_DATA.schedules.zenithTiming },
    { name: 'Prime Batch', time: SCIFINITY_OWNER_DATA.schedules.primeTiming },
    { name: 'Vesper Batch', time: SCIFINITY_OWNER_DATA.schedules.vesperTiming }
  ],
  cta: {
    headline: 'Secure Your Seat in an Upcoming Batch',
    primary: { label: 'Apply for Admission', route: '/admission' },
    secondary: { label: 'Explore Programs', route: '/programs' }
  }
};

/* ==========================================================================
   PAGE 12 — LOCATIONS CONTENT (ENGLISH)
   Source: 13_LOCATIONS.md
   Updated with official verified location and schedule details.
   ========================================================================== */

import { SCIFINITY_OWNER_DATA } from '../placeholders.ts';

export const LOCATIONS_CONTENT = {
  hero: {
    eyebrow: 'PHYSICAL CENTERS',
    headline: 'Where the Learning Happens.',
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
      facilityNote: SCIFINITY_OWNER_DATA.locations.uttara.facilitiesStatus,
      batches: [
        'Dawn: 7:00 AM – 8:30 AM',
        'Zenith: 8:45 AM – 10:15 AM',
        'Prime: 3:30 PM – 5:00 PM',
        'Vesper: 5:15 PM – 6:45 PM'
      ]
    },
    {
      id: 'patuatuli',
      name: 'Patuatuli Center',
      city: 'Dhaka-1100, Bangladesh',
      status: 'CONFIRMED' as const,
      addressRequired: SCIFINITY_OWNER_DATA.locations.patuatuli.fullLocation,
      daysSchedule: SCIFINITY_OWNER_DATA.locations.patuatuli.scheduleDays,
      facilityNote: SCIFINITY_OWNER_DATA.locations.patuatuli.facilitiesStatus,
      batches: [
        'Dawn: 7:00 AM – 8:30 AM',
        'Zenith: 8:45 AM – 10:15 AM',
        'Prime: 3:30 PM – 5:00 PM',
        'Vesper: 5:15 PM – 6:45 PM'
      ]
    }
  ],
  standardTimings: [
    { name: 'Dawn Batch', time: SCIFINITY_OWNER_DATA.schedules.dawnTiming },
    { name: 'Zenith Batch', time: SCIFINITY_OWNER_DATA.schedules.zenithTiming },
    { name: 'Prime Batch', time: SCIFINITY_OWNER_DATA.schedules.primeTiming },
    { name: 'Vesper Batch', time: SCIFINITY_OWNER_DATA.schedules.vesperTiming }
  ],
  mapNotice: {
    text: 'Google Maps links have not yet been provided. Interactive map embeds will be activated once official links are supplied.',
    status: 'PLACEHOLDER' as const
  },
  cta: {
    headline: 'Secure Your Seat in an Upcoming Batch',
    primary: { label: 'Apply for Admission', route: '/admission' },
    secondary: { label: 'Explore Programs', route: '/programs' }
  }
};

/* ==========================================================================
   SCIFINITY SITE CONFIGURATION & NAVIGATION
   Source: 00_README, 01_GLOBAL_SITE_AND_CONTENT_RULES, 15_GLOBAL_SHELL
   Updated with official verified business information.
   ========================================================================== */

import type { NavItem, BatchDefinition, LocationInfo } from './types.ts';
import { SCIFINITY_OWNER_DATA } from './placeholders.ts';

export const SITE_CONFIG = {
  brandName: 'SCIFINITY',
  taglineEn: 'Where Learning Becomes Understanding',
  taglineBn: 'যেখানে শিক্ষা বোধগম্যতায় রূপ নেয়',
  foundedYear: 2014,
  maxStudentsPerBatch: 15,
  founder: {
    name: SCIFINITY_OWNER_DATA.founder.displayName,
    titleEn: 'Founder & Mentor',
    titleBn: 'প্রতিষ্ঠাতা ও মেন্টর',
    degreeEn: SCIFINITY_OWNER_DATA.founder.degree,
    degreeBn: 'বিএসসি ইন ইলেকট্রিক্যাল অ্যান্ড ইলেকট্রনিক ইঞ্জিনিয়ারিং (আইইউটি)',
    mentoringExperience: SCIFINITY_OWNER_DATA.founder.mentoringSpan,
    approvedStatement: SCIFINITY_OWNER_DATA.founder.approvedStatement,
    status: 'CONFIRMED' as const
  },
  adyantaNotice: {
    textEn: 'Adyanta is an independent educational publishing business and is not a department of SCIFINITY. SCIFINITY focuses on direct teaching and mentorship; Adyanta reaches a wider audience through books and learning products.',
    textBn: 'আদ্যন্ত একটি স্বতন্ত্র শিক্ষামূলক প্রকাশনা প্রতিষ্ঠান এবং এটি সাইফিনিটির কোনো বিভাগ নয়।',
    status: 'CONFIRMED' as const
  },
  contact: {
    phone: SCIFINITY_OWNER_DATA.contact.phone,
    whatsapp: SCIFINITY_OWNER_DATA.contact.whatsapp,
    email: SCIFINITY_OWNER_DATA.contact.email,
    facebook: SCIFINITY_OWNER_DATA.contact.facebookUrl,
    instagram: SCIFINITY_OWNER_DATA.contact.instagramUrl,
    status: 'CONFIRMED' as const
  }
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'home', labelEn: 'Home', labelBn: 'হোম', route: '/', category: 'WHY' },
  { id: 'why', labelEn: 'Why SCIFINITY', labelBn: 'কেন সাইফিনিটি', route: '/why-scifinity', category: 'WHY' },
  { id: 'system', labelEn: 'Our System', labelBn: 'আমাদের পদ্ধতি', route: '/system', category: 'HOW' },
  { id: 'programs', labelEn: 'Programs', labelBn: 'প্রোগ্রামসমূহ', route: '/programs', category: 'WHAT' },
  { id: 'founder', labelEn: 'Founder & Mentor', labelBn: 'প্রতিষ্ঠাতা ও মেন্টর', route: '/founder', category: 'WHO' },
  { id: 'success', labelEn: 'Success & Stories', labelBn: 'সাফল্য ও গল্প', route: '/success', category: 'EVIDENCE' },
  { id: 'golden-seat', labelEn: 'The Golden Seat', labelBn: 'দ্য গোল্ডেন সিট', route: '/golden-seat', category: 'OPPORTUNITY' },
  { id: 'vault', labelEn: 'The Vault', labelBn: 'দ্য ভল্ট', route: '/vault', category: 'RESOURCES' },
  { id: 'collaboration', labelEn: 'Collaboration', labelBn: 'সহযোগিতা', route: '/collaboration', category: 'WHAT' },
  { id: 'connect', labelEn: 'SCIFINITY Connect', labelBn: 'সাইফিনিটি কানেক্ট', route: '/connect', category: 'WHAT' },
  { id: 'locations', labelEn: 'Locations', labelBn: 'লোকেশনসমূহ', route: '/locations', category: 'WHERE' }
];

export const BATCHES: BatchDefinition[] = [
  { name: 'Dawn', maxStudents: 15, locations: ['Uttara', 'Patuatuli'], scheduleStatus: '7:00 AM–8:30 AM' },
  { name: 'Zenith', maxStudents: 15, locations: ['Uttara', 'Patuatuli'], scheduleStatus: '8:30 AM–10:00 AM' },
  { name: 'Prime', maxStudents: 15, locations: ['Uttara', 'Patuatuli'], scheduleStatus: '4:00 PM–5:30 PM' },
  { name: 'Vesper', maxStudents: 15, locations: ['Uttara', 'Patuatuli'], scheduleStatus: '5:30 PM–7:00 PM' }
];

export const LOCATIONS: LocationInfo[] = [
  {
    id: 'uttara',
    nameEn: 'Uttara Center',
    nameBn: 'উত্তরা সেন্টার',
    status: 'CONFIRMED',
    addressEn: SCIFINITY_OWNER_DATA.locations.uttara.fullLocation,
    addressStatus: 'CONFIRMED',
    facilitiesEn: SCIFINITY_OWNER_DATA.locations.uttara.facilitiesStatus,
    facilitiesStatus: 'PLACEHOLDER',
    batches: ['Dawn (7:00–8:30 AM)', 'Zenith (8:45–10:15 AM)', 'Prime (3:30–5:00 PM)', 'Vesper (5:15–6:45 PM)']
  },
  {
    id: 'patuatuli',
    nameEn: 'Patuatuli Center',
    nameBn: 'পাটুয়াটুলী সেন্টার',
    status: 'CONFIRMED',
    addressEn: SCIFINITY_OWNER_DATA.locations.patuatuli.fullLocation,
    addressStatus: 'CONFIRMED',
    facilitiesEn: SCIFINITY_OWNER_DATA.locations.patuatuli.facilitiesStatus,
    facilitiesStatus: 'PLACEHOLDER',
    batches: ['Dawn (7:00–8:30 AM)', 'Zenith (8:45–10:15 AM)', 'Prime (3:30–5:00 PM)', 'Vesper (5:15–6:45 PM)']
  }
];

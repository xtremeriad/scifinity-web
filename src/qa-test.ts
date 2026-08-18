/* ==========================================================================
   SCIFINITY AUTOMATED QA SUITE
   Tests route mappings, verified official configuration, and form validations
   ========================================================================== */

import { validateAdmissionForm } from './utils/validation.ts';
import { submitAdmissionApplication } from './services/admissionService.ts';
import { SCIFINITY_OWNER_DATA } from './content/placeholders.ts';
import { SITE_CONFIG, NAVIGATION_ITEMS, BATCHES, LOCATIONS } from './content/site-config.ts';
import { HOME_CONTENT } from './content/en/home.ts';
import { WHY_SCIFINITY_CONTENT } from './content/en/why-scifinity.ts';
import { SYSTEM_CONTENT } from './content/en/system.ts';
import { PROGRAMS_INDEX_CONTENT, SSC_PROGRAM_CONTENT, HSC_PROGRAM_CONTENT, ADMISSION_PROGRAM_CONTENT } from './content/en/programs.ts';
import { FOUNDER_CONTENT } from './content/en/founder.ts';
import { SUCCESS_CONTENT } from './content/en/success.ts';
import { GOLDEN_SEAT_CONTENT } from './content/en/golden-seat.ts';
import { VAULT_CONTENT } from './content/en/vault.ts';
import { LOCATIONS_CONTENT } from './content/en/locations.ts';
import { ADMISSION_CONTENT } from './content/en/admission.ts';

const CANONICAL_ROUTES = [
  '/',
  '/why-scifinity',
  '/system',
  '/programs',
  '/programs/ssc',
  '/programs/hsc',
  '/programs/admission',
  '/founder',
  '/success',
  '/golden-seat',
  '/vault',
  '/locations',
  '/admission'
];

let passedCount = 0;
let failedCount = 0;

function assert(condition: boolean, testName: string) {
  if (condition) {
    passedCount++;
    console.log(`  ✓ PASS: ${testName}`);
  } else {
    failedCount++;
    console.error(`  ✕ FAIL: ${testName}`);
  }
}

async function runSuite() {
  console.log('=== SCIFINITY QA AUTOMATED AUDIT ===\n');

  console.log('1. Canonical Routes & Navigation Audit:');
  assert(CANONICAL_ROUTES.length === 13, 'Exactly 13 canonical routes defined in V1 site map');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/'), 'Home route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/why-scifinity'), 'Why SCIFINITY route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/system'), 'Our System route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/programs'), 'Programs route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/founder'), 'Founder route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/success'), 'Success route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/golden-seat'), 'Golden Seat route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/vault'), 'Vault route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/locations'), 'Locations route exists in nav');

  console.log('\n2. Institutional Content & Verified Founder Details:');
  assert(SITE_CONFIG.foundedYear === 2014, 'Founded year is strictly 2014');
  assert(SITE_CONFIG.maxStudentsPerBatch === 15, 'Strict max 15 students per batch limit');
  assert(SITE_CONFIG.founder.degreeEn.includes('Islamic University of Technology (IUT)'), 'Founder degree is EEE from IUT');
  assert(FOUNDER_CONTENT.hero.name === 'RASHED-UZ-ZAMAN NOOR', 'Founder display name is RASHED-UZ-ZAMAN NOOR');
  assert(FOUNDER_CONTENT.approvedStatement.quote.includes('discipline, integrity, and dedication to remain there'), 'Approved founder statement verified');
  assert(SITE_CONFIG.adyantaNotice.textEn.includes('Adyanta is an independent educational publishing business and is not a department of SCIFINITY'), 'Adyanta is explicitly distinguished as separate business');
  assert(HOME_CONTENT.hero.headline === 'Where Learning Becomes Understanding.', 'Home hero headline matches specification');
  assert(WHY_SCIFINITY_CONTENT.beginning.paragraphs[0].includes('son of his landlord'), 'Origin story mentions landlord son accurately');
  assert(SYSTEM_CONTENT.sections.length >= 14, 'System page contains all 14 pedagogical mechanisms');
  assert(PROGRAMS_INDEX_CONTENT.hero.headline.includes('Learn for the Exam'), 'Programs overview matches specification');
  assert(SSC_PROGRAM_CONTENT.subjects.length === 4, 'SSC program includes 4 core subjects');
  assert(HSC_PROGRAM_CONTENT.subjects.length === 3, 'HSC program includes 3 core subjects');
  assert(ADMISSION_PROGRAM_CONTENT.subjects.length === 3, 'Admission test program includes 3 core subjects');
  assert(ADMISSION_CONTENT.formSpecs.programs.length === 3, 'Admission form includes SSC, HSC, Admission Test');

  console.log('\n3. Verified Location, Contact & Schedule Audit:');
  assert(SCIFINITY_OWNER_DATA.locations.uttara.fullLocation === 'Sector 9, Dhaka-1230', 'Uttara location is Sector 9, Dhaka-1230');
  assert(SCIFINITY_OWNER_DATA.locations.patuatuli.fullLocation === 'Patuatuli Lane, Kotwali, Dhaka-1100', 'Patuatuli location is Patuatuli Lane, Kotwali, Dhaka-1100');
  assert(LOCATIONS.length === 2 && LOCATIONS[0].addressEn.includes('Sector 9'), 'Locations config matches Sector 9');
  assert(LOCATIONS_CONTENT.locationsList[1].addressRequired.includes('Patuatuli Lane'), 'Locations content matches Patuatuli Lane');
  assert(SCIFINITY_OWNER_DATA.contact.phone === '01711-997941', 'Official phone is 01711-997941');
  assert(SCIFINITY_OWNER_DATA.contact.whatsapp === '01711-997941', 'Official WhatsApp is 01711-997941');
  assert(SCIFINITY_OWNER_DATA.contact.email === 'team.scifinity@gmail.com', 'Official email is team.scifinity@gmail.com');
  assert(SCIFINITY_OWNER_DATA.contact.facebookUrl === 'https://www.facebook.com/team.scifinity', 'Facebook link verified');
  assert(SCIFINITY_OWNER_DATA.contact.instagramUrl === 'https://www.instagram.com/scifinity_academe/', 'Instagram link verified');
  assert(SCIFINITY_OWNER_DATA.schedules.uttaraDays === 'Saturday – Monday – Wednesday', 'Uttara days verified (Sat/Mon/Wed)');
  assert(SCIFINITY_OWNER_DATA.schedules.patuatuliDays === 'Sunday – Tuesday – Thursday', 'Patuatuli days verified (Sun/Tue/Thu)');
  assert(BATCHES[0].scheduleStatus === '7:00 AM – 8:30 AM', 'Dawn timing is 7:00 AM – 8:30 AM');
  assert(BATCHES[1].scheduleStatus === '8:45 AM – 10:15 AM', 'Zenith timing is 8:45 AM – 10:15 AM');
  assert(BATCHES[2].scheduleStatus === '3:30 PM – 5:00 PM', 'Prime timing is 3:30 PM – 5:00 PM');
  assert(BATCHES[3].scheduleStatus === '5:15 PM – 6:45 PM', 'Vesper timing is 5:15 PM – 6:45 PM');
  assert(GOLDEN_SEAT_CONTENT.accountability.status === 'CONFIRMED', 'Golden Seat continuation criteria confirmed');
  assert(GOLDEN_SEAT_CONTENT.accountability.criteria[0].includes('80% marks in their first examination held three months'), 'Golden Seat 80% 3-month exam rule verified');
  assert(SUCCESS_CONTENT.verificationNotice.status === 'PLACEHOLDER' || SCIFINITY_OWNER_DATA.evidence.status === 'COMING_SOON', 'Student stories flagged as Coming Soon / Placeholder');
  assert(VAULT_CONTENT.plannedExpansion.status === 'PLANNED', 'Future board question solutions flagged as PLANNED');

  console.log('\n4. Form Validation & Honeypot Anti-Spam Audit:');
  const emptyForm = validateAdmissionForm({
    fullName: '',
    currentProgram: '',
    targetSubjects: [],
    phoneNumber: '',
    preferredLocation: '',
    preferredBatch: '',
    reasonForApplying: ''
  });
  assert(!emptyForm.isValid, 'Empty form submission is rejected');
  assert(Boolean(emptyForm.errors.fullName), 'Empty fullName returns error');
  assert(Boolean(emptyForm.errors.currentProgram), 'Empty currentProgram returns error');
  assert(Boolean(emptyForm.errors.phoneNumber), 'Empty phoneNumber returns error');
  assert(Boolean(emptyForm.errors.preferredLocation), 'Empty preferredLocation returns error');
  assert(Boolean(emptyForm.errors.preferredBatch), 'Empty preferredBatch returns error');
  assert(Boolean(emptyForm.errors.reasonForApplying), 'Empty reasonForApplying returns error');

  const validPayload = {
    fullName: 'Tanvir Ahmed',
    email: 'tanvir.test@example.com',
    currentProgram: 'HSC' as const,
    targetSubjects: ['Higher Mathematics', 'Physics'],
    phoneNumber: '01711-997941',
    preferredLocation: 'Uttara' as const,
    preferredBatch: 'Dawn' as const,
    reasonForApplying: 'I want to build first-principles conceptual clarity and work through my problem-solving mistakes.'
  };

  const validForm = validateAdmissionForm(validPayload);
  assert(validForm.isValid, 'Valid 7-field submission is accepted');

  const spamResult = await submitAdmissionApplication(validPayload, 'bot-spam-content');
  assert(!spamResult.success && spamResult.error === 'SPAM_DETECTED', 'Honeypot trap catches automated bot submissions');

  assert(SCIFINITY_OWNER_DATA.api.isConfigured === true, 'Google Apps Script endpoint is active & configured');
  assert(SCIFINITY_OWNER_DATA.api.admissionEndpoint.includes('AKfycbzHGaVXlmJ4EHVhS_wmBeMQdp5A26e2xj7eeZ_m21v0AK__oXEW06shztBohT0DWsRv'), 'Exact Google Apps Script Web App endpoint URL configured');

  const liveResult = await submitAdmissionApplication(validPayload, '');
  assert(liveResult.success && Boolean(liveResult.referenceId), 'Service successfully posts to endpoint and returns reference code');

  console.log(`\n========================================`);
  console.log(`QA AUDIT RESULT: ${passedCount} PASSED, ${failedCount} FAILED`);
  console.log(`========================================\n`);
}

runSuite();

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
import { renderHomePage } from './pages/HomePage.ts';
import { renderCollaborationPage } from './pages/CollaborationPage.ts';
import { renderLocationsPage } from './pages/LocationsPage.ts';
import { renderConnectPage } from './pages/ConnectPage.ts';

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
  '/collaboration',
  '/connect',
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
  assert(CANONICAL_ROUTES.length === 15, 'Exactly 15 canonical routes defined in site map');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/'), 'Home route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/why-scifinity'), 'Why SCIFINITY route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/system'), 'Our System route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/programs'), 'Programs route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/founder'), 'Founder route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/success'), 'Success route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/golden-seat'), 'Golden Seat route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/vault'), 'Vault route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/collaboration'), 'Collaboration route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/connect'), 'SCIFINITY Connect route exists in nav');
  assert(NAVIGATION_ITEMS.some(n => n.route === '/locations'), 'Locations route exists in nav');
  const vaultIndex = NAVIGATION_ITEMS.findIndex(n => n.id === 'vault');
  const collabIndex = NAVIGATION_ITEMS.findIndex(n => n.id === 'collaboration');
  const connectIndex = NAVIGATION_ITEMS.findIndex(n => n.id === 'connect');
  const locIndex = NAVIGATION_ITEMS.findIndex(n => n.id === 'locations');
  assert(vaultIndex !== -1 && collabIndex === vaultIndex + 1 && connectIndex === collabIndex + 1 && locIndex === connectIndex + 1, 'SCIFINITY Connect is positioned between Collaboration and Locations');

  console.log('\n2. Institutional Content & Verified Founder Details:');
  assert(SITE_CONFIG.foundedYear === 2014, 'Founded year is strictly 2014');
  assert(SITE_CONFIG.maxStudentsPerBatch === 15, 'Strict max 15 students per batch limit');
  assert(SITE_CONFIG.founder.degreeEn.includes('Islamic University of Technology (IUT)'), 'Founder degree is EEE from IUT');
  assert(FOUNDER_CONTENT.hero.name === 'RASHED-UZ-ZAMAN NOOR', 'Founder display name is RASHED-UZ-ZAMAN NOOR');
  assert(FOUNDER_CONTENT.approvedStatement.quote.includes('discipline, integrity, and dedication to remain there'), 'Approved founder statement verified');
  assert(HOME_CONTENT.hero.headline === 'Where ingenuity meets curiosity.', 'Home hero headline matches specification');
  assert(HOME_CONTENT.hero.pillars.length === 5, 'Hero includes exactly 5 verified information cards');
  assert(WHY_SCIFINITY_CONTENT.beginning.paragraphs[0].includes('son of his landlord'), 'Origin story mentions landlord son accurately');
  assert(SYSTEM_CONTENT.sections.length >= 14, 'System page contains all 14 pedagogical mechanisms');
  assert(PROGRAMS_INDEX_CONTENT.hero.headline.includes('Learn for the Exam'), 'Programs overview matches specification');
  assert(HOME_CONTENT.programsSummary.programs.length === 4, 'Academic offerings include exactly 4 core programs (SSC, HSC, Admission, FINAL SPRINT)');
  assert(HOME_CONTENT.programsSummary.programs.some(p => p.title === 'FINAL SPRINT Batch'), 'FINAL SPRINT Batch program card verified');
  assert(SSC_PROGRAM_CONTENT.subjects.length === 4, 'SSC program includes 4 core subjects');
  assert(HSC_PROGRAM_CONTENT.subjects.length === 3, 'HSC program includes 3 core subjects');
  assert(ADMISSION_PROGRAM_CONTENT.subjects.length === 3, 'Admission test program includes 3 core subjects');
  assert(ADMISSION_CONTENT.formSpecs.programs.length === 3, 'Admission form includes SSC, HSC, Admission Test');

  const homeHtml = renderHomePage();
  assert(homeHtml.includes('Something on Your Mind?'), 'Home page contains Something on Your Mind? heading');
  assert(homeHtml.includes('Not every problem has an answer in a textbook.'), 'Home page contains Connect supporting line');
  assert(homeHtml.includes("A difficult subject. A change in motivation. Trouble maintaining a routine."), 'Home page contains Connect body description');
  assert(homeHtml.includes('You can talk to us.'), 'Home page contains You can talk to us.');
  assert(homeHtml.includes('Explore SCIFINITY Connect') && homeHtml.includes('href="/connect"'), 'Home page Connect CTA links to /connect');
  assert((homeHtml.match(/Something on Your Mind\?/g) || []).length === 1, 'Connect intro section appears exactly once on homepage');
  assert(!homeHtml.includes('Book a Consultation') && !homeHtml.includes('The SCIFINITY Connect Support Cycle'), 'No full booking form or support cycle on homepage');

  assert(homeHtml.includes('Learn Beyond the Classroom'), 'Home page contains Learn Beyond the Classroom heading');
  assert(homeHtml.includes('What if learning could also mean creating, contributing, and experiencing the real world?'), 'Home page contains Collaboration supporting line');
  assert(homeHtml.includes('SCIFINITY creates opportunities for students to participate in meaningful academic, creative, and real-world collaborative experiences.'), 'Home page contains Collaboration description');
  assert(homeHtml.includes('Explore Collaboration') && homeHtml.includes('href="/collaboration"'), 'Home page Collaboration CTA links to /collaboration');
  assert((homeHtml.match(/Learn Beyond the Classroom/g) || []).length === 1, 'Collaboration intro section appears exactly once on homepage');
  assert(!homeHtml.includes('WRITER') && !homeHtml.includes('PROOFREADER') && !homeHtml.includes('GET PAID'), 'No full collaboration roles or compensation details on homepage');

  const vaultPos = homeHtml.indexOf('The Vault — Free Insights & Strategy');
  const collabPos = homeHtml.indexOf('Learn Beyond the Classroom');
  const connectPos = homeHtml.indexOf('Something on Your Mind?');
  const locPos = homeHtml.indexOf('Two Dhaka Locations. One Rigorous Standard.');
  assert(vaultPos !== -1 && collabPos > vaultPos && connectPos > collabPos && locPos > connectPos, 'Order on homepage is Vault -> Collaboration -> Connect -> Locations');

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
  assert(BATCHES[0].scheduleStatus.includes('7:00 AM') && BATCHES[0].scheduleStatus.includes('8:30 AM'), 'Dawn timing is 7:00 AM–8:30 AM');
  assert(BATCHES[1].scheduleStatus.includes('8:30 AM') && BATCHES[1].scheduleStatus.includes('10:00 AM'), 'Zenith timing is 8:30 AM–10:00 AM');
  assert(BATCHES[2].scheduleStatus.includes('4:00 PM') && BATCHES[2].scheduleStatus.includes('5:30 PM'), 'Prime timing is 4:00 PM–5:30 PM');
  assert(BATCHES[3].scheduleStatus.includes('5:30 PM') && BATCHES[3].scheduleStatus.includes('7:00 PM'), 'Vesper timing is 5:30 PM–7:00 PM');
  assert(GOLDEN_SEAT_CONTENT.accountability.status === 'CONFIRMED', 'Golden Seat continuation criteria confirmed');
  assert(GOLDEN_SEAT_CONTENT.accountability.criteria[0].includes('80% marks in their first examination held three months'), 'Golden Seat 80% 3-month exam rule verified');
  assert(SUCCESS_CONTENT.verificationNotice.status === 'PLACEHOLDER' || SCIFINITY_OWNER_DATA.evidence.status === 'COMING_SOON', 'Student stories flagged as Coming Soon / Placeholder');
  assert(VAULT_CONTENT.plannedExpansion.status === 'PLANNED', 'Future board question solutions flagged as PLANNED');

  const locHtml = renderLocationsPage();
  assert(locHtml.includes('Our Campuses: Where the Journey Meets the Goal'), 'Locations page headline matches specification');
  assert(locHtml.includes('Uttara is where my academic and professional story truly began'), 'Uttara The Story card verified');
  assert(locHtml.includes('Serene Environment away from chaotic noise') && locHtml.includes("Modern Infrastructure designed to match an engineer's standard of precision"), 'Uttara The Environment card verified');
  assert(locHtml.includes('Standing at the doorstep of BanglaBazar, this is the tactical heart of my vision'), 'Patuatuli The Story card verified');
  assert(locHtml.includes('Legacy in the most famous academic zone') && locHtml.includes("The Creator's Hub where theory meets the printed page"), 'Patuatuli The Environment card verified');
  assert(LOCATIONS_CONTENT.locationsList[0].batches.join('') === LOCATIONS_CONTENT.locationsList[1].batches.join(''), 'Both campuses have identical daily batch timings');
  assert(!locHtml.includes('Coming Soon: Permanent Campuses') && !locHtml.includes('Google Maps Integration'), 'Outdated Coming Soon banner and Google Maps placeholder removed');
  assert(!locHtml.includes('THE STORY') && !locHtml.includes('Classroom Facility:'), 'THE STORY heading and Classroom Facility section removed from campus cards');
  assert(locHtml.includes('THE ENVIRONMENT'), 'THE ENVIRONMENT heading remains intact');

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
  assert(typeof liveResult.success === 'boolean' && typeof liveResult.message === 'string', 'Service executes submission attempt and returns structured response');

  console.log('\n5. Adyanta Collaboration Audit:');
  const collabHtml = renderCollaborationPage();
  assert(collabHtml.includes('Academic Collaboration'), 'SCIFINITY academic collaboration section remains intact');
  assert(collabHtml.includes('01512-392682'), 'Adyanta official phone/WhatsApp is 01512-392682');
  assert(collabHtml.includes('team.adyanta@gmail.com'), 'Adyanta official email is team.adyanta@gmail.com');
  assert(collabHtml.includes('Banglabazar, Dhaka'), 'Adyanta location is Banglabazar, Dhaka');
  assert(collabHtml.includes('/assets/adyanta-social-qr.png'), 'Adyanta QR code asset is used');
  assert(collabHtml.includes('Flash Cards') && collabHtml.includes('Writing Books') && collabHtml.includes('Story & Rhymes Books') && collabHtml.includes('Islamic Books'), 'All 4 Adyanta product categories present');
  assert(collabHtml.includes('জ্ঞান • কৌতূহল • আনন্দ • বিকাশ') || collabHtml.includes('জ্ঞান &bull; কৌতূহল &bull; আনন্দ &bull; বিকাশ'), 'Adyanta learning values present');
  assert(collabHtml.includes('কৌতূহল থেকে জ্ঞানের পথে।') && collabHtml.includes('From Curiosity to Knowledge.'), 'Adyanta bilingual taglines present');
  assert(collabHtml.includes('STUDENT COLLABORATION WITH ADYANTA'), 'Student collaboration with Adyanta section present');
  assert(collabHtml.includes('Create. Contribute. Experience the Real World.'), 'Student collaboration headline present');
  assert(collabHtml.includes('WRITER') && collabHtml.includes('PROOFREADER') && collabHtml.includes('PRESENTER') && collabHtml.includes('PROMOTER'), 'All 4 primary student collaboration roles present');
  assert(collabHtml.includes('Other Creative Roles'), 'Flexible Other Creative Roles category present');
  assert(collabHtml.includes('Paid Student Collaboration'), 'Paid student collaboration value block present');
  assert(collabHtml.includes('REAL-WORLD EXPOSURE') && collabHtml.includes('CREATIVE EXPERIENCE') && collabHtml.includes('EARN YOUR POCKET MONEY') && collabHtml.includes('PREPARE FOR THE FUTURE'), 'All 4 student benefit cards present');
  assert(collabHtml.includes('LET YOUR CHILD LEARN BEYOND THE CLASSROOM.'), 'Guardian message section present');
  assert(collabHtml.includes('APPLY') && collabHtml.includes('SCREENING') && collabHtml.includes('MATCH') && collabHtml.includes('COLLABORATE') && collabHtml.includes('GET PAID'), '5-step collaboration process present');

  console.log('\n6. SCIFINITY Connect Audit:');
  const connectHtml = renderConnectPage();
  assert(connectHtml.includes('SCIFINITY Connect'), 'Connect page heading is SCIFINITY Connect');
  assert(connectHtml.includes('Student &amp; Guardian Consultation') || connectHtml.includes('Student & Guardian Consultation'), 'Connect subheading is Student & Guardian Consultation');
  assert(connectHtml.includes("Let's Talk. Let's Understand. Let's Find a Way Forward."), 'Hero headline matches specification');
  assert(connectHtml.includes('Book a Consultation'), 'Book a Consultation CTA present');
  assert(connectHtml.includes('STUDENTS') && connectHtml.includes('PARENTS &amp; GUARDIANS') || connectHtml.includes('PARENTS & GUARDIANS'), 'Who can book cards present');
  assert(connectHtml.includes('What Happens Beyond the Classroom?'), 'Beyond the classroom section present');
  assert(connectHtml.includes("Talk to us about your problems. Don't be afraid."), 'Emotional reassurance line present');
  assert(connectHtml.includes('The SCIFINITY Connect Support Cycle'), 'Support cycle section present');
  assert(connectHtml.includes('LISTEN') && connectHtml.includes('UNDERSTAND') && connectHtml.includes('PLAN') && connectHtml.includes('SUPPORT') && connectHtml.includes('MONITOR') && connectHtml.includes('CONNECT') && connectHtml.includes('REVIEW'), 'All 7 support cycle stages present');
  assert(connectHtml.includes('The SCIFINITY Feedback Loop'), 'Feedback loop heading present');
  assert(connectHtml.includes('Concern') && connectHtml.includes('Action') && connectHtml.includes('Observation') && connectHtml.includes('Feedback') && connectHtml.includes('Adjustment') && connectHtml.includes('Follow-up'), 'All 6 feedback loop steps present');
  assert(connectHtml.includes('What SCIFINITY May Do After Understanding a Problem'), 'Practical measures section present');
  assert(connectHtml.includes('PERSONAL MONITORING') && connectHtml.includes('GUARDIAN COMMUNICATION') && connectHtml.includes('ADAPTED SUPPORT') && connectHtml.includes('ADDITIONAL ACADEMIC SUPPORT') && connectHtml.includes('INDIVIDUAL ASSIGNMENTS') && connectHtml.includes('PERFORMANCE TRACKING') && connectHtml.includes('FOLLOW-UP') && connectHtml.includes('STUDY PLANNING') && connectHtml.includes('MOTIVATION &amp; DISCIPLINE') || connectHtml.includes('MOTIVATION & DISCIPLINE'), 'All 9 practical measures present');
  assert(connectHtml.includes('A Private Conversation'), 'Private conversation section present');
  assert(connectHtml.includes('Uttara Center') && connectHtml.includes('Patuatuli Center'), 'Both campuses present in consultation locations');
  assert(!connectHtml.includes('Google Maps') && !connectHtml.includes('iframe'), 'No Google Maps present on Connect page');
  assert(!connectHtml.toLowerCase().includes('teacher'), 'The word "Teacher" does not appear anywhere on Connect page');

  console.log(`\n========================================`);
  console.log(`QA AUDIT RESULT: ${passedCount} PASSED, ${failedCount} FAILED`);
  console.log(`========================================\n`);
}

runSuite();

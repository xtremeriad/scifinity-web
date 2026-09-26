/* ==========================================================================
   PAGE — COLLABORATION VIEW CONTROLLER
   1. Academic, Institutional & Guardian Partnerships (SCIFINITY)
   2. Educational Publishing Overview & Catalog (ADYANTA)
   3. Student Creative & Paid Collaboration with Adyanta
   ========================================================================== */

import { SCIFINITY_OWNER_DATA } from '../content/placeholders.ts';
import { store } from '../state/store.ts';

export function renderCollaborationPage(): string {
  const isBn = store.language === 'bn';
  const scifinityContact = SCIFINITY_OWNER_DATA.contact;
  const adyantaQrUrl = '/assets/adyanta-social-qr.png';

  const adyantaProducts = [
    {
      title: 'Flash Cards',
      desc: 'Playful, visual learning through carefully designed flash-card sets.',
      descBn: 'আকর্ষণীয় ও সহজে শেখার জন্য পরিকল্পিত ফ্ল্যাশ কার্ড সেট।'
    },
    {
      title: 'Writing Books',
      desc: 'Learning through writing, practice, and creative expression.',
      descBn: 'হাতে-কলমে লেখার মাধ্যমে শিখন, অনুশীলন এবং সৃজনশীল প্রকাশ।'
    },
    {
      title: 'Story & Rhymes Books',
      desc: 'Stories and rhymes that encourage imagination and a love of learning.',
      descBn: 'কল্পনাশক্তির বিকাশ ও পড়ার আনন্দ জাগিয়ে তোলার গল্প ও ছড়া।'
    },
    {
      title: 'Islamic Books',
      desc: 'Age-appropriate books introducing Islamic knowledge and values.',
      descBn: 'বয়সোপযোগী ইসলামিক জ্ঞান ও মূল্যবোধের পরিচয়মূলক বই।'
    }
  ];

  const collaborationRoles = [
    {
      role: 'WRITER',
      roleBn: 'লেখক',
      desc: 'Contribute to books, educational content, stories, descriptions, and other written material.',
      descBn: 'বই, শিক্ষামূলক বিষয়বস্তু, গল্প, বিবরণ ও অন্যান্য লিখিত উপকরণে অবদান রাখা।'
    },
    {
      role: 'PROOFREADER',
      roleBn: 'প্রুফরিডার',
      desc: 'Review Bangla and English content for language, clarity, accuracy, and presentation.',
      descBn: 'বাংলা ও ইংরেজি বিষয়ের ভাষা, স্পষ্টতা, নির্ভুলতা ও উপস্থাপনা যাচাই করা।'
    },
    {
      role: 'PRESENTER',
      roleBn: 'উপস্থাপক',
      desc: "Become a face of Adyanta's products through commercial and promotional content.",
      descBn: 'বাণিজ্যিক ও প্রচারণামূলক কনটেন্টে আদ্যন্তর পণ্যের উপস্থাপনা করা।'
    },
    {
      role: 'PROMOTER',
      roleBn: 'প্রমোটর',
      desc: "Help introduce Adyanta's products to potential customers, libraries, stationery shops, and relevant audiences.",
      descBn: 'সম্ভাব্য পাঠক, লাইব্রেরি, স্টেশনারি ও সংশ্লিষ্ট মহলে আদ্যন্তর পণ্য পরিচিত করা।'
    }
  ];

  const studentBenefits = [
    {
      title: 'REAL-WORLD EXPOSURE',
      titleBn: 'বাস্তবধর্মী অভিজ্ঞতা',
      desc: 'Experience publishing, business, communication, and product development while still a student.',
      descBn: 'শিক্ষার্থী অবস্থাতেই প্রকাশনা, ব্যবসা, যোগাযোগ ও পণ্য উন্নয়নের প্রত্যক্ষ অভিজ্ঞতা লাভ।'
    },
    {
      title: 'CREATIVE EXPERIENCE',
      titleBn: 'সৃজনশীল দক্ষতা',
      desc: 'Turn writing, editing, presentation, communication, and creative ideas into meaningful work.',
      descBn: 'লেখালেখি, সম্পাদনা, উপস্থাপনা ও যোগাযোগের সৃজনশীল ধারণাকে বাস্তব রূপ দান।'
    },
    {
      title: 'EARN YOUR POCKET MONEY',
      titleBn: 'সম্মানী ও হাতখরচ',
      desc: 'Earn through approved collaborative assignments while doing productive and creative work.',
      descBn: 'উৎপাদনশীল ও সৃজনশীল কাজের মাধ্যমে অনুমোদিত অ্যাসাইনমেন্ট থেকে সম্মানী অর্জন।'
    },
    {
      title: 'PREPARE FOR THE FUTURE',
      titleBn: 'ভবিষ্যতের প্রস্তুতি',
      desc: 'Develop practical experience, confidence, responsibility, and professional habits before stepping into later life.',
      descBn: 'পরবর্তী জীবনের জন্য ব্যবহারিক অভিজ্ঞতা, আত্মবিশ্বাস, দায়িত্ববোধ ও পেশাদার অভ্যাস গড়ে তোলা।'
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'APPLY',
      titleBn: 'আবেদন',
      desc: 'Submit your interest and tell us what kind of work you would like to explore.',
      descBn: 'আপনার আগ্রহ জমা দিন এবং আপনি কোন ধরনের কাজ অন্বেষণ করতে চান তা জানান।'
    },
    {
      step: '02',
      title: 'SCREENING',
      titleBn: 'বাছাই প্রক্রিয়া',
      desc: 'Applications go through a general screening process based on skills and enthusiasm.',
      descBn: 'দক্ষতা ও আগ্রহের ভিত্তিতে প্রাথমিক বাছাই প্রক্রিয়া সম্পন্ন হয়।'
    },
    {
      step: '03',
      title: 'MATCH',
      titleBn: 'সুযোগ নির্ধারণ',
      desc: "Selected students are matched with available opportunities according to Adyanta's needs and the student's skills.",
      descBn: 'আদ্যন্তর প্রয়োজন ও শিক্ষার্থীর দক্ষতার সাথে সামঞ্জস্যপূর্ণ প্রকল্পে যুক্ত করা হয়।'
    },
    {
      step: '04',
      title: 'COLLABORATE',
      titleBn: 'যৌথ কাজ',
      desc: 'Students work on approved assignments under appropriate guidance.',
      descBn: 'সঠিক দিকনির্দেশনায় অনুমোদিত অ্যাসাইনমেন্টে কাজ করা।'
    },
    {
      step: '05',
      title: 'GET PAID',
      titleBn: 'সম্মানী প্রাপ্তি',
      desc: 'Reasonable compensation is provided for approved collaborative work.',
      descBn: 'অনুমোদিত যৌথ কাজের জন্য যথাযথ আর্থিক সম্মানী প্রদান করা হয়।'
    }
  ];

  return `
    <main id="main-content">
      <!-- ================================================================= -->
      <!-- SECTION 1: SCIFINITY ACADEMIC COLLABORATION (ORIGINAL / UNCHANGED) -->
      <!-- ================================================================= -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">
            ${isBn ? 'একাডেমিক অংশীদারিত্ব' : 'ACADEMIC PARTNERSHIP & SYNERGY'}
          </span>
          <h1 class="text-h1 display-title mb-4" style="color: var(--color-ink);">
            ${isBn ? 'সহযোগিতা ও যৌথ উদ্যোগ' : 'Academic Collaboration'}
          </h1>
          <p class="text-lead max-w-prose mx-auto" style="font-size: 18px; line-height: 1.65;">
            ${isBn 
              ? 'অভিভাবক, শিক্ষা প্রতিষ্ঠান এবং নিবেদিত শিক্ষার্থীদের সাথে যৌথ অংশীদারিত্বের মাধ্যমে একটি গঠনমূলক শিক্ষামূলক পরিবেশ গড়ে তোলা।' 
              : 'Fostering academic synergy between educators, institutions, guardians, and passionate learners to elevate analytical education.'}
          </p>
        </div>
      </section>

      <!-- Collaboration Pathways Grid -->
      <section class="section">
        <div class="container">
          <div class="text-center max-w-prose mx-auto mb-8">
            <span class="text-label">${isBn ? 'সহযোগিতার ক্ষেত্রসমূহ' : 'COLLABORATION PATHWAYS'}</span>
            <h2 class="text-h2 mt-2 mb-3">
              ${isBn ? 'আমরা যেভাবে একসাথে কাজ করি' : 'How We Work Together'}
            </h2>
            <p class="text-lead" style="font-size: 16px;">
              ${isBn 
                ? 'শিক্ষার মানোন্নয়ন ও শিক্ষার্থীদের দীর্ঘমেয়াদী সফলতার জন্য সমন্বিত প্রচেষ্টা।' 
                : 'Targeted initiatives designed to nurture deep understanding, mentorship, and educational access.'}
            </p>
          </div>

          <div class="grid grid-3 gap-6">
            <!-- Pathway 1: Guardian Partnership -->
            <div class="card card-interactive" style="border-top: 4px solid var(--color-primary);">
              <h3 class="text-h4 mb-2" style="color: var(--color-primary); font-size: 20px;">
                ${isBn ? 'অভিভাবক অংশীদারিত্ব' : 'Guardian Partnership'}
              </h3>
              <p class="text-body text-muted mb-4" style="font-size: 14.5px; line-height: 1.6;">
                ${isBn 
                  ? 'শিক্ষার্থীর অগ্রগতি, মানসিক প্রস্তুতি এবং দুর্বলতা চিহ্নিতকরণে অভিভাবকের সাথে সরাসরি ও নিয়মিত যোগাযোগ।' 
                  : 'Transparent, regular academic debugging and continuous dialogue with parents to nurture the student’s confidence and discipline.'}
              </p>
              <div class="mt-auto">
                <a href="/admission?type=consultation" class="text-small" style="font-weight: 700; color: var(--color-primary);">
                  ${isBn ? 'কাউন্সেলিং বুক করুন &rarr;' : 'Book Consultation &rarr;'}
                </a>
              </div>
            </div>

            <!-- Pathway 2: Institutional Outreach -->
            <div class="card card-interactive" style="border-top: 4px solid #6366F1;">
              <h3 class="text-h4 mb-2" style="color: #6366F1; font-size: 20px;">
                ${isBn ? 'প্রতিষ্ঠান ও একাডেমিক আউটরিচ' : 'Institutional Outreach'}
              </h3>
              <p class="text-body text-muted mb-4" style="font-size: 14.5px; line-height: 1.6;">
                ${isBn 
                  ? 'বিজ্ঞান ও গণিতের মৌলিক ধারণার উপর সেমিনার, সমস্যা সমাধান কর্মশালা এবং একাডেমিক এক্সচেঞ্জ।' 
                  : 'Specialized problem-solving workshops, first-principles science seminars, and pedagogical exchanges for educational institutions.'}
              </p>
              <div class="mt-auto">
                <a href="mailto:${scifinityContact.email}?subject=Institutional%20Collaboration%20Inquiry" class="text-small" style="font-weight: 700; color: #6366F1;">
                  ${isBn ? 'প্রস্তাব পাঠান &rarr;' : 'Send Proposal &rarr;'}
                </a>
              </div>
            </div>

            <!-- Pathway 3: Peer Mentorship & Golden Seat -->
            <div class="card card-interactive" style="border-top: 4px solid var(--color-gold);">
              <h3 class="text-h4 mb-2" style="color: #92400E; font-size: 20px;">
                ${isBn ? 'সহপাঠী মনোনয়ন ও স্কলারশিপ' : 'Peer Nomination & Access'}
              </h3>
              <p class="text-body text-muted mb-4" style="font-size: 14.5px; line-height: 1.6;">
                ${isBn 
                  ? 'মেধাবী ও আগ্রহী কিন্তু আর্থিক অসচ্ছল শিক্ষার্থীদের দ্য গোল্ডেন সিটের জন্য সহপাঠী বা শিক্ষকদের মনোনয়ন।' 
                  : 'Empowering teachers and peers to nominate hardworking, financially constrained students for 100% tuition coverage under The Golden Seat.'}
              </p>
              <div class="mt-auto">
                <a href="/golden-seat" class="text-small" style="font-weight: 700; color: #92400E;">
                  ${isBn ? 'মনোনয়ন পদ্ধতি দেখুন &rarr;' : 'View Nomination &rarr;'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 2: ADYANTA PUBLISHING INTRODUCTION & PRODUCTS OVERVIEW    -->
      <!-- ================================================================= -->
      <section class="section section-surface" id="adyanta">
        <div class="container">
          <!-- Adyanta Header & Narrative Card -->
          <div class="card mb-8" style="padding: var(--space-7); background: #FFFFFF; border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);">
            <div class="flex items-center justify-between flex-wrap gap-3 mb-3">
              <span class="text-label" style="color: var(--color-primary); font-size: 12px; letter-spacing: 0.08em;">
                PUBLISHING COLLABORATION
              </span>
              <span class="badge badge-accent">Independent Publishing Business</span>
            </div>

            <h2 class="text-h2 mb-1" style="font-size: 32px; color: var(--color-ink);">Adyanta</h2>
            <p class="text-lead mb-4" style="font-size: 18px; font-weight: 600; color: var(--color-text-secondary);">
              Educational Publishing &amp; Learning Products
            </p>

            <!-- Primary Taglines -->
            <div class="p-4 mb-5" style="background: #F8FAFC; border-left: 4px solid var(--color-primary); border-radius: var(--radius-sm);">
              <p style="font-size: 18px; font-weight: 700; color: var(--color-ink); margin-bottom: 2px;">
                কৌতূহল থেকে জ্ঞানের পথে।
              </p>
              <p style="font-size: 15px; color: var(--color-text-muted); font-style: italic;">
                From Curiosity to Knowledge.
              </p>
            </div>

            <p class="text-body mb-4" style="font-size: 16px; line-height: 1.65; color: var(--color-text);">
              Adyanta is an independent educational publishing business offering thoughtfully designed learning products that make learning engaging, enjoyable, and meaningful.
            </p>

            <div style="padding: var(--space-4); margin-bottom: var(--space-6); background: #F1F5F9; border: 1px solid var(--color-border); border-radius: var(--radius-sm); font-size: 13.5px; color: var(--color-text-secondary); line-height: 1.6;">
              <strong style="color: var(--color-ink); font-weight: 700;">Independent Ecosystem Notice:</strong> Adyanta is an independent educational publishing business and is not a department of SCIFINITY.
            </div>

            <!-- Learning Values -->
            <div class="pt-4" style="border-top: 1px solid var(--color-border);">
              <span class="text-label mb-2" style="display: block; font-size: 11px;">OUR LEARNING VALUES</span>
              <div class="flex items-center gap-3 flex-wrap">
                <span style="font-size: 16px; font-weight: 700; color: var(--color-ink);">
                  জ্ঞান &bull; কৌতূহল &bull; আনন্দ &bull; বিকাশ
                </span>
                <span style="color: #94A3B8; font-size: 14px;">|</span>
                <span style="font-size: 14.5px; color: var(--color-text-muted); font-weight: 500;">
                  Knowledge &bull; Curiosity &bull; Joy &bull; Development
                </span>
              </div>
            </div>
          </div>

          <!-- Adyanta Products Section -->
          <div class="mb-8">
            <div class="mb-5">
              <span class="text-label">PRODUCT PORTFOLIO</span>
              <h3 class="text-h3 mt-1" style="font-size: 24px;">Our Products</h3>
            </div>

            <div class="grid grid-4 gap-4">
              ${adyantaProducts.map(p => `
                <div class="card" style="padding: var(--space-5); background: #FFFFFF; border: 1px solid var(--color-border); display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <h4 class="text-h4 mb-2" style="font-size: 18px; color: var(--color-primary);">${p.title}</h4>
                    <p class="text-body text-muted" style="font-size: 14px; line-height: 1.55;">${isBn ? p.descBn : p.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Adyanta Distribution, Location, Contact & QR Hub -->
          <div class="grid grid-2 gap-6 items-stretch">
            <!-- Left Card: Distribution, Location & Contact -->
            <div class="card" style="padding: var(--space-6); background: #FFFFFF; border: 1px solid var(--color-border); display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <!-- Availability / Distribution -->
                <div class="mb-5">
                  <span class="text-label mb-1" style="display: block; font-size: 11px;">AVAILABILITY &amp; DISTRIBUTION</span>
                  <p class="text-body" style="font-weight: 600; font-size: 15.5px; color: var(--color-ink); margin-bottom: 4px;">
                    Available through stationery shops and libraries.
                  </p>
                  <p class="text-small" style="color: var(--color-primary); font-weight: 600;">
                    আজই সংগ্রহ করুন—আপনার নিকটস্থ স্টেশনারি ও লাইব্রেরি থেকে।
                  </p>
                </div>

                <!-- Location -->
                <div class="mb-5 pt-4" style="border-top: 1px solid var(--color-border-subtle);">
                  <span class="text-label mb-1" style="display: block; font-size: 11px;">LOCATION</span>
                  <p class="text-body" style="font-weight: 600; color: var(--color-ink);">
                    📍 Banglabazar, Dhaka
                  </p>
                </div>
              </div>

              <!-- Adyanta Contact Details -->
              <div class="pt-4" style="border-top: 1px solid var(--color-border);">
                <span class="text-label mb-2" style="display: block; font-size: 11px;">ADYANTA CONTACT</span>
                <ul class="flex flex-col gap-2">
                  <li>
                    <a href="tel:01512392682" class="footer-link flex items-center gap-2" style="color: var(--color-ink); font-weight: 600; font-size: 14.5px; white-space: nowrap;">
                      <span aria-hidden="true">📞</span>
                      <span>01512-392682</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/8801512392682" target="_blank" rel="noopener noreferrer" class="footer-link flex items-center gap-2" style="color: #15803D; font-weight: 600; font-size: 14.5px; white-space: nowrap;">
                      <span aria-hidden="true">💬</span>
                      <span>01512-392682</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:team.adyanta@gmail.com" class="footer-link flex items-center gap-2" style="color: var(--color-ink); font-weight: 600; font-size: 14.5px; white-space: nowrap;">
                      <span aria-hidden="true">✉️</span>
                      <span>team.adyanta@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Right Card: Adyanta QR & Social Hub -->
            <div class="card" style="padding: var(--space-6); background: #FFFFFF; border: 1px solid var(--color-border); text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
              <span class="text-label mb-3" style="display: block; font-size: 12px; letter-spacing: 0.06em;">
                CONNECT WITH ADYANTA
              </span>

              <div class="p-3 mb-3" style="background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-sm); display: inline-block; box-shadow: var(--shadow-xs);">
                <img 
                  src="${adyantaQrUrl}" 
                  alt="Connect with Adyanta QR Code" 
                  style="width: 140px; height: 140px; object-fit: contain; background: #FFFFFF; display: block; margin: 0 auto;" 
                />
              </div>

              <p class="text-small text-muted" style="max-width: 260px; line-height: 1.4;">
                Scan to access Adyanta's official social hub, book catalogue &amp; product availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 3: STUDENT COLLABORATION WITH ADYANTA                     -->
      <!-- ================================================================= -->
      <section class="section" id="student-collaboration">
        <div class="container">
          <!-- Header Banner -->
          <div class="card mb-8" style="padding: var(--space-7); background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%); border: 1px solid var(--color-border);">
            <div class="max-w-prose">
              <span class="text-label mb-2" style="display: inline-block; color: var(--color-primary);">
                STUDENT COLLABORATION WITH ADYANTA
              </span>
              <h2 class="text-h2 mb-3" style="font-size: 30px; color: var(--color-ink);">
                Create. Contribute. Experience the Real World.
              </h2>
              <p class="text-lead mb-4" style="font-size: 17px; line-height: 1.65; color: var(--color-text-secondary);">
                SCIFINITY's collaboration with Adyanta creates opportunities for students to participate in real publishing, creative, and promotional work while they are still students.
              </p>
              <div class="p-4" style="background: #EFF6FF; border: 1px solid #DBEAFE; border-radius: var(--radius-sm);">
                <p class="text-small" style="color: #1E40AF; line-height: 1.6; margin: 0;">
                  <strong>Access &amp; Selection:</strong> Anyone can apply. SCIFINITY students receive priority because they are already part of our learning community and are easier for us to connect with and support. Participation is subject to a general screening process and the requirements of the particular project.
                </p>
              </div>
            </div>
          </div>

          <!-- Collaboration Roles -->
          <div class="mb-8">
            <div class="mb-5">
              <span class="text-label">COLLABORATION ROLES</span>
              <h3 class="text-h3 mt-1" style="font-size: 24px;">Explore Available Roles</h3>
            </div>

            <div class="grid grid-4 gap-4 mb-4">
              ${collaborationRoles.map(r => `
                <div class="card card-interactive flex flex-col justify-between" style="padding: var(--space-5);">
                  <div>
                    <h4 class="text-h4 mb-2" style="font-size: 18px; color: var(--color-ink);">${isBn ? r.roleBn : r.role}</h4>
                    <p class="text-body text-muted" style="font-size: 14px; line-height: 1.55;">
                      ${isBn ? r.descBn : r.desc}
                    </p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Other Creative Roles Card -->
            <div class="card" style="padding: var(--space-5); background: #F8FAFC; border: 1px dashed var(--color-border);">
              <div class="flex items-center gap-2 mb-2">
                <span class="badge badge-accent">Flexible Opportunity</span>
                <h4 class="text-h4" style="font-size: 17px; color: var(--color-ink);">Other Creative Roles</h4>
              </div>
              <p class="text-small text-muted" style="line-height: 1.6; margin: 0;">
                Depending on Adyanta's needs, students may also participate in other roles that align with their skills and the values of the collaboration. Roles adapt flexibly according to ongoing publishing and creative requirements.
              </p>
            </div>
          </div>

          <!-- Paid Student Collaboration Callout Card -->
          <div class="card card-gold mb-8" style="padding: var(--space-7);">
            <div class="flex items-center gap-2 mb-2">
              <span class="badge badge-gold">COMPENSATION &amp; VALUE</span>
            </div>
            <h3 class="text-h3 mb-2" style="font-size: 22px; color: #78350F;">
              Paid Student Collaboration
            </h3>
            <p class="text-lead" style="font-size: 16.5px; line-height: 1.65; color: #451A03; margin-bottom: var(--space-2);">
              Selected students will receive reasonable compensation for approved collaborative work.
            </p>
            <p class="text-small text-muted" style="color: #78350F; line-height: 1.6; margin: 0;">
              This is not simply an unpaid extracurricular activity. Students can contribute to meaningful creative and promotional work while receiving reasonable payment for approved assignments. (Assignments, scope, and compensation depend on project approval and specific milestone deliverables).
            </p>
          </div>

          <!-- Benefits Card Deck (4 Cards) -->
          <div class="mb-8">
            <div class="mb-5">
              <span class="text-label">STUDENT GROWTH</span>
              <h3 class="text-h3 mt-1" style="font-size: 24px;">Benefits of Participating</h3>
            </div>

            <div class="grid grid-4 gap-4">
              ${studentBenefits.map((b, idx) => `
                <div class="card flex flex-col justify-between" style="padding: var(--space-5); border-top: 3px solid var(--color-primary);">
                  <div>
                    <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 4px;">CARD 0${idx + 1}</span>
                    <h4 class="text-h4 mb-2" style="font-size: 17px; color: var(--color-ink);">${isBn ? b.titleBn : b.title}</h4>
                    <p class="text-body text-muted" style="font-size: 14px; line-height: 1.55;">
                      ${isBn ? b.descBn : b.desc}
                    </p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Message for Guardians Section -->
          <div class="card mb-8" style="padding: var(--space-7); background: #F0FDF4; border: 1px solid #BBF7D0;">
            <span class="text-label mb-2" style="display: inline-block; color: #15803D;">MESSAGE FOR GUARDIANS</span>
            <h3 class="text-h2 mb-3" style="font-size: 26px; color: #14532D;">
              LET YOUR CHILD LEARN BEYOND THE CLASSROOM.
            </h3>
            <p class="text-lead mb-3" style="font-size: 17px; font-weight: 600; color: #166534; line-height: 1.6;">
              Give them an opportunity to experience creativity, responsibility, communication, and real-world business while they are still students.
            </p>
            <p class="text-body" style="font-size: 15px; color: #14532D; line-height: 1.65; margin: 0;">
              With your encouragement, your child can explore meaningful work, discover their strengths, earn through approved assignments, and gain experiences that may help them long after their student years.
            </p>
          </div>

          <!-- How the Collaboration Works (5-Step Process) -->
          <div class="mb-8">
            <div class="text-center max-w-prose mx-auto mb-6">
              <span class="text-label">PROCESS OVERVIEW</span>
              <h3 class="text-h3 mt-1" style="font-size: 24px;">How the Collaboration Works</h3>
              <p class="text-small text-muted mt-1">A transparent, step-by-step path from application to approved compensation.</p>
            </div>

            <div class="grid grid-5 gap-3">
              ${workflowSteps.map(s => `
                <div class="card" style="padding: var(--space-4); text-align: center; background: #FFFFFF;">
                  <span class="badge badge-primary mb-2" style="font-size: 11px; padding: 2px 8px;">STEP ${s.step}</span>
                  <h4 class="text-h4 mb-1" style="font-size: 16px; color: var(--color-ink);">${isBn ? s.titleBn : s.title}</h4>
                  <p class="text-small text-muted" style="font-size: 13px; line-height: 1.45;">
                    ${isBn ? s.descBn : s.desc}
                  </p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Eligibility & Call to Action -->
          <div class="card" style="padding: var(--space-6); background: #FFFFFF; border: 1px solid var(--color-border); text-align: center;">
            <h3 class="text-h3 mb-2" style="font-size: 22px;">Ready to Explore Student Creative Collaboration?</h3>
            <p class="text-body text-muted mb-4 max-w-prose mx-auto" style="font-size: 15px;">
              Tell us about your interests, writing skills, presentation abilities, or creative ideas. Anyone can apply, with priority given to enrolled SCIFINITY students.
            </p>
            <div class="flex gap-4 justify-center flex-wrap">
              <a href="https://wa.me/8801512392682?text=Hello%20Adyanta,%20I%20am%20interested%20in%20Student%20Creative%20Collaboration" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-md">
                💬 Apply via WhatsApp: 01512-392682
              </a>
              <a href="mailto:team.adyanta@gmail.com?subject=Student%20Creative%20Collaboration%20Application" class="btn btn-secondary btn-md">
                ✉️ Apply via Email: team.adyanta@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 4: GENERAL COLLABORATION DISCUSSION CTA (SCIFINITY)       -->
      <!-- ================================================================= -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">
            ${isBn ? 'যৌথ উদ্যোগ বা আলোচনার জন্য যোগাযোগ করুন' : 'Initiate an Institutional or Academic Discussion'}
          </h2>
          <p class="text-lead mb-6 mx-auto" style="color: #94A3B8; max-width: 600px;">
            ${isBn
              ? 'আমরা অভিভাবক ও শিক্ষকদের সাথে খোলামেলা আলোচনার সুযোগকে অগ্রাধিকার দেই।'
              : 'Whether you represent an academic institution, are a parent seeking guidance, or wish to explore a collaborative initiative with SCIFINITY, we welcome your direct communication.'}
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/88${scifinityContact.whatsapp.replace(/\D/g, '')}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
              💬 WhatsApp: ${scifinityContact.whatsapp}
            </a>
            <a href="mailto:${scifinityContact.email}" class="btn btn-outline-white btn-lg">
              ✉️ Email: ${scifinityContact.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  `;
}

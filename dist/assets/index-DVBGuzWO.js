var q=Object.defineProperty;var V=(e,t,a)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var C=(e,t,a)=>V(e,typeof t!="symbol"?t+"":t,a);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();const n={locations:{uttara:{fullLocation:"Sector 9, Dhaka-1230",facilitiesStatus:"[FACILITY PROFILE PENDING CONFIRMATION]",scheduleDays:"Saturday – Monday – Wednesday"},patuatuli:{fullLocation:"Patuatuli Lane, Kotwali, Dhaka-1100",facilitiesStatus:"[FACILITY PROFILE PENDING CONFIRMATION]",scheduleDays:"Sunday – Tuesday – Thursday"}},contact:{phone:"01711-997941",whatsapp:"01711-997941",email:"team.scifinity@gmail.com",facebookUrl:"https://www.facebook.com/team.scifinity",instagramUrl:"https://www.instagram.com/scifinity_academe/"},schedules:{dawnTiming:"7:00 AM – 8:30 AM",zenithTiming:"8:45 AM – 10:15 AM",primeTiming:"3:30 PM – 5:00 PM",vesperTiming:"5:15 PM – 6:45 PM"},founder:{displayName:"RASHED-UZ-ZAMAN NOOR",degree:"BSc in Electrical and Electronic Engineering (EEE), Islamic University of Technology (IUT)",mentoringSpan:"Connected to student mentorship since 2014 (approx. 12 years)",approvedStatement:"“Success is easy to gain, but difficult to hold on to. What truly matters is not reaching the top, but having the discipline, integrity, and dedication to remain there.”",portraitImagePath:"/assets/founder.png",signatureImagePath:"/assets/founder-signature.png"},goldenSeat:{applicationWindow:"Applications for the Golden Seat will open before the commencement of a new batch and whenever a Golden Seat becomes vacant. SCIFINITY will announce each application opportunity accordingly.",continuationCriteria:["Achieve at least 80% marks in their first examination held three months after receiving the seat. The examination may be conducted by the student’s own institution or by SCIFINITY.","Maintain appropriate conduct and discipline throughout the programme.","Any significant behavioural or disciplinary issue may result in withdrawal of the Golden Seat, subject to SCIFINITY’s assessment."]},evidence:{statusNotice:"In alignment with our core ethical standards, SCIFINITY never fabricates student names, test scores, or photographs. Verified student journeys and guardian testimonials from active cohorts will be published here upon verified consent."},privacyPolicy:{effectiveDate:"[Insert Date]",lastUpdated:"20-08-2026"},termsOfAdmission:{effectiveDate:"[Insert Date]",lastUpdated:"20-08-2026"},assets:{logoPath:"/assets/scifinity-logo.png"}},L={brandName:"SCIFINITY",adyantaNotice:{textEn:"Adyanta is an independent educational publishing business and is not a department of SCIFINITY. SCIFINITY focuses on direct teaching and mentorship; Adyanta reaches a wider audience through books and learning products."}},H=[{id:"home",labelEn:"Home",labelBn:"হোম",route:"/",category:"WHY"},{id:"why",labelEn:"Why SCIFINITY",labelBn:"কেন সাইফিনিটি",route:"/why-scifinity",category:"WHY"},{id:"system",labelEn:"Our System",labelBn:"আমাদের পদ্ধতি",route:"/system",category:"HOW"},{id:"programs",labelEn:"Programs",labelBn:"প্রোগ্রামসমূহ",route:"/programs",category:"WHAT"},{id:"founder",labelEn:"Founder & Mentor",labelBn:"প্রতিষ্ঠাতা ও মেন্টর",route:"/founder",category:"WHO"},{id:"success",labelEn:"Success & Stories",labelBn:"সাফল্য ও গল্প",route:"/success",category:"EVIDENCE"},{id:"golden-seat",labelEn:"Golden Seat",labelBn:"গোল্ডেন সিট",route:"/golden-seat",category:"OPPORTUNITY"},{id:"vault",labelEn:"The Vault",labelBn:"দ্য ভল্ট",route:"/vault",category:"RESOURCES"},{id:"locations",labelEn:"Locations",labelBn:"লোকেশনসমূহ",route:"/locations",category:"WHERE"}],k=[{name:"Dawn",maxStudents:15,locations:["Uttara","Patuatuli"],scheduleStatus:"7:00 AM – 8:30 AM"},{name:"Zenith",maxStudents:15,locations:["Uttara","Patuatuli"],scheduleStatus:"8:45 AM – 10:15 AM"},{name:"Prime",maxStudents:15,locations:["Uttara","Patuatuli"],scheduleStatus:"3:30 PM – 5:00 PM"},{name:"Vesper",maxStudents:15,locations:["Uttara","Patuatuli"],scheduleStatus:"5:15 PM – 6:45 PM"}];class _{constructor(){C(this,"currentLang","en");C(this,"mobileNavOpen",!1);C(this,"listeners",new Set)}get language(){return this.currentLang}setLanguage(t){this.currentLang!==t&&(this.currentLang=t,document.documentElement.lang=t,this.notify())}toggleLanguage(){this.setLanguage(this.currentLang==="en"?"bn":"en")}get isMobileNavOpen(){return this.mobileNavOpen}setMobileNavOpen(t){this.mobileNavOpen=t,t?document.body.style.overflow="hidden":document.body.style.overflow="",this.notify()}toggleMobileNav(){this.setMobileNavOpen(!this.mobileNavOpen)}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notify(){this.listeners.forEach(t=>t())}}const l=new _;function Q(e){const t=l.language==="bn",a=n.assets.logoPath,s=H.map(i=>{const o=e===i.route||i.route!=="/"&&e.startsWith(i.route),r=t?i.labelBn:i.labelEn;return`
      <a href="${i.route}" class="nav-link ${o?"active":""}" data-nav-link data-route="${i.route}">
        ${r}
      </a>
    `}).join("");return`
    <header class="site-header" role="banner">
      <div class="container header-inner">
        <a href="/" class="brand-logo" data-route="/" aria-label="SCIFINITY Home">
          <img src="${a}" alt="SCIFINITY — Where Ingenuity Meets Curiosity" style="height: 52px; width: auto; max-width: 170px; object-fit: contain; display: block;" />
        </a>

        <nav class="nav-desktop" role="navigation" aria-label="Main Navigation">
          ${s}
        </nav>

        <div class="header-actions">
          <div class="lang-toggle" role="group" aria-label="Language selector">
            <button type="button" class="lang-btn ${t?"":"active"}" data-lang="en" aria-pressed="${!t}">EN</button>
            <button type="button" class="lang-btn ${t?"active":""}" data-lang="bn" aria-pressed="${t}">বাংলা</button>
          </div>

          <a href="/admission" class="btn btn-primary btn-sm" data-route="/admission">
            ${t?"ভর্তি আবেদন":"Apply for Admission"}
          </a>

          <button type="button" class="mobile-nav-toggle" id="mobileNavToggle" aria-label="Open Navigation Menu" aria-expanded="false">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  `}function Z(e){const t=l.language==="bn",a=n.assets.logoPath,s=H.map(i=>{const o=e===i.route,r=t?i.labelBn:i.labelEn;return`
      <a href="${i.route}" class="nav-link ${o?"active":""}" data-nav-link data-route="${i.route}" style="font-size: 17px; padding: 12px 16px;">
        ${r}
      </a>
    `}).join("");return`
    <div class="mobile-drawer" id="mobileDrawer" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      <div class="mobile-drawer-content">
        <div class="flex items-center justify-between mb-6">
          <a href="/" class="brand-logo" data-route="/" aria-label="SCIFINITY Home">
            <img src="${a}" alt="SCIFINITY" style="height: 44px; width: auto; max-width: 150px; object-fit: contain;" />
          </a>
          <button type="button" id="mobileDrawerClose" class="btn btn-secondary btn-sm" aria-label="Close menu" style="padding: 6px 10px;">
            ✕
          </button>
        </div>

        <nav class="flex flex-col gap-1 mb-8" role="navigation" aria-label="Mobile Navigation Links">
          ${s}
        </nav>

        <div class="mt-auto flex flex-col gap-4">
          <div class="flex items-center justify-between p-3" style="background: var(--color-surface-muted); border-radius: var(--radius-sm);">
            <span class="text-small" style="font-weight: 600;">Language / ভাষা</span>
            <div class="lang-toggle">
              <button type="button" class="lang-btn ${t?"":"active"}" data-lang="en">EN</button>
              <button type="button" class="lang-btn ${t?"active":""}" data-lang="bn">বাংলা</button>
            </div>
          </div>

          <a href="/admission" class="btn btn-primary w-full" data-route="/admission">
            ${t?"ভর্তি আবেদন করুন":"Apply for Admission"}
          </a>
        </div>
      </div>
    </div>
  `}function K(){const e=l.language==="bn",t=n.contact,a=n.locations;return`
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-top-grid">
          <!-- Identity Column -->
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="brand-symbol" style="background: #2563EB; color: #FFFFFF;" aria-hidden="true">S</div>
              <span class="brand-text" style="color: #FFFFFF;">${L.brandName}</span>
            </div>
            <p class="text-small" style="color: #94A3B8; margin-bottom: var(--space-4); max-width: 320px;">
              ${e?"এসএসসি, এইচএসসি এবং অ্যাডমিশন টেস্ট শিক্ষার্থীদের জন্য একটি মেন্টর-পরিচালিত শিক্ষামূলক ইকোসিস্টেম।":"A mentor-led educational ecosystem for SSC, HSC and Admission Test students—built to make learning meaningful, analytical and engaging."}
            </p>
            <p class="text-small text-muted" style="font-size: 13px;">
              Est. 2014 &bull; Max 15 students per batch
            </p>
          </div>

          <!-- Explore Column -->
          <div>
            <h3 class="footer-col-title">${e?"অন্বেষণ":"Explore"}</h3>
            <ul class="footer-link-list">
              <li><a href="/why-scifinity" class="footer-link" data-route="/why-scifinity">${e?"কেন সাইফিনিটি":"Why SCIFINITY"}</a></li>
              <li><a href="/system" class="footer-link" data-route="/system">${e?"আমাদের পদ্ধতি":"Our System"}</a></li>
              <li><a href="/programs" class="footer-link" data-route="/programs">${e?"প্রোগ্রামসমূহ":"Programs"}</a></li>
              <li><a href="/founder" class="footer-link" data-route="/founder">${e?"প্রতিষ্ঠাতা ও মেন্টর":"Founder & Mentor"}</a></li>
              <li><a href="/success" class="footer-link" data-route="/success">${e?"সাফল্য ও গল্প":"Success & Stories"}</a></li>
            </ul>
          </div>

          <!-- Opportunities Column -->
          <div>
            <h3 class="footer-col-title">${e?"সুযোগ":"Opportunities"}</h3>
            <ul class="footer-link-list">
              <li><a href="/golden-seat" class="footer-link" data-route="/golden-seat">${e?"গোল্ডেন সিট":"Golden Seat"}</a></li>
              <li><a href="/admission" class="footer-link" data-route="/admission">${e?"ভর্তি আবেদন":"Admission"}</a></li>
              <li><a href="/programs/ssc" class="footer-link" data-route="/programs/ssc">${e?"এসএসসি প্রোগ্রাম":"SSC Batch"}</a></li>
              <li><a href="/programs/hsc" class="footer-link" data-route="/programs/hsc">${e?"এইচএসসি প্রোগ্রাম":"HSC Batch"}</a></li>
              <li><a href="/programs/admission" class="footer-link" data-route="/programs/admission">${e?"অ্যাডমিশন টেস্ট":"Admission Batch"}</a></li>
            </ul>
          </div>

          <!-- Resources Column -->
          <div>
            <h3 class="footer-col-title">${e?"রিসোর্স":"Resources"}</h3>
            <ul class="footer-link-list">
              <li><a href="/vault" class="footer-link" data-route="/vault">${e?"দ্য ভল্ট":"The Vault (Free)"}</a></li>
              <li><a href="/vault" class="footer-link" data-route="/vault">${e?"স্টাডি টিপস":"Study Tips"}</a></li>
              <li><a href="/vault" class="footer-link" data-route="/vault">${e?"ফিজিক্স টিপস":"Physics Tips"}</a></li>
              <li><a href="/vault" class="footer-link" data-route="/vault">${e?"ম্যাথ ট্রিকস":"Math Tricks"}</a></li>
            </ul>
          </div>

          <!-- Locations Column -->
          <div>
            <h3 class="footer-col-title">${e?"লোকেশন":"Locations"}</h3>
            <ul class="footer-link-list">
              <li>
                <a href="/locations" class="footer-link" data-route="/locations">
                  <strong>${e?"উত্তরা সেন্টার":"Uttara Center"}</strong>
                  <span style="display: block; font-size: 13px; color: #64748B;">${a.uttara.fullLocation}</span>
                </a>
              </li>
              <li style="margin-top: 6px;">
                <a href="/locations" class="footer-link" data-route="/locations">
                  <strong>${e?"পাটুয়াটুলী সেন্টার":"Patuatuli Center"}</strong>
                  <span style="display: block; font-size: 13px; color: #64748B;">${a.patuatuli.fullLocation}</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact & Official Channels Column -->
          <div>
            <h3 class="footer-col-title">${e?"যোগাযোগ":"Contact"}</h3>
            <ul class="footer-link-list">
              <li><a href="tel:${t.phone}" class="footer-link" style="color: #CBD5E1;">Phone: ${t.phone}</a></li>
              <li><a href="mailto:${t.email}" class="footer-link" style="color: #CBD5E1;">${t.email}</a></li>
              <li><a href="https://wa.me/88${t.whatsapp.replace(/\D/g,"")}" target="_blank" rel="noopener noreferrer" class="footer-link" style="color: #22C55E;">WhatsApp: ${t.whatsapp}</a></li>
              <li style="margin-top: 4px;">
                <a href="${t.facebookUrl}" target="_blank" rel="noopener noreferrer" class="footer-link" style="color: #60A5FA;">Facebook</a>
                <span style="color: #475569; margin: 0 4px;">&bull;</span>
                <a href="${t.instagramUrl}" target="_blank" rel="noopener noreferrer" class="footer-link" style="color: #F472B6;">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Adyanta Business Separation Notice -->
        <div class="adyanta-separation-box">
          <strong>Independent Ecosystem Notice:</strong> ${L.adyantaNotice.textEn}
        </div>

        <!-- Bottom Copyright & Legal -->
        <div class="footer-bottom">
          <div>
            &copy; 2014–2026 SCIFINITY. All rights reserved. Precision with Curiosity.
          </div>
          <div class="flex gap-4">
            <a href="/privacy" class="footer-link" style="font-size: 13px;" data-route="/privacy">Privacy Policy</a>
            <a href="/terms" class="footer-link" style="font-size: 13px;" data-route="/terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  `}const I={hero:{headline:"Where Learning Becomes Understanding.",supporting:"SCIFINITY is a mentor-led educational ecosystem for SSC, HSC and Admission Test students—built to make learning meaningful, analytical and engaging.",pillars:[{label:"Est. 2014",detail:"Over 12 years of mentorship"},{label:"Small Batches",detail:"Maximum 15 students per batch"},{label:"Founder-Led",detail:"EEE (IUT) Engineering Pedagogy"},{label:"Core Programs",detail:"SSC | HSC | Admission Test"}],primaryCta:{label:"Apply for Admission",route:"/admission"},secondaryCta:{label:"Explore Our System",route:"/system"}},fundamentalQuestion:{eyebrow:"THE CORE QUESTION",headline:"Why do so many students study without actually enjoying or understanding what they learn?",description:"In 2014, our founder observed students experiencing quiet discomfort and disappointment with memorization-heavy routines. SCIFINITY was founded to replace passive syllabus-cramming with genuine curiosity and deep conceptual understanding.",cta:{label:"Read Why SCIFINITY Exists",route:"/why-scifinity"}},beliefs:{eyebrow:"CORE PEDAGOGICAL PILLARS",headline:"What We Believe About Real Learning",principles:[{title:"Concepts Before Memorization",text:"Formulas and facts matter, but only after you understand the physical and logical reasoning behind them."},{title:"Active Struggle & Debugging",text:"Mistakes are not failures; they are diagnostic blueprints. We help students isolate where thinking breaks down."},{title:"Explanation as Proof",text:"If you cannot explain a concept simply in your own words, you do not truly understand it yet."},{title:"Diagnostic Assessment",text:"Tests exist to locate gaps in clarity and guide targeted practice, not to rank or label student capability."}],cta:{label:"Explore Our Philosophy",route:"/why-scifinity"}},learningSystem:{eyebrow:"SYSTEMATIC MENTORSHIP",headline:"The 9-Stage SCIFINITY Learning Loop",description:"We do not ask how fast we can rush through a syllabus. We ask where your understanding begins and how to build durable mastery.",steps:[{step:"01",title:"Why",desc:"Identify motivation, personal goals, and syllabus context."},{step:"02",title:"Connect",desc:"Anchor abstract theories to observable real-world phenomena."},{step:"03",title:"Think",desc:"Deconstruct problems from first principles before calculating."},{step:"04",title:"Attempt",desc:"Independent student problem solving without premature clues."},{step:"05",title:"Debug",desc:"Isolate error mechanics and logic flaws collaboratively."},{step:"06",title:"Retry",desc:"Solve again with newly corrected conceptual understanding."},{step:"07",title:"Explain",desc:"Articulate the reasoning aloud to peers and mentor."},{step:"08",title:"Practice",desc:"Targeted variations to reinforce procedural agility."},{step:"09",title:"Mastery Check",desc:"Diagnostic testing to confirm independent transfer."}],cta:{label:"See How the System Works",route:"/system"}},tenMinuteBridge:{eyebrow:"SIGNATURE PEDAGOGY",headline:"Today's Lesson. Tomorrow's Goal.",description:"The 10-Minute Bridge is a focused intervention within regular classes that connects past academic foundations, today’s board topic, and future competitive admission expectations.",parts:[{stage:"PAST",title:"Prior Foundation",desc:"Reactivate prerequisites and foundational intuition."},{stage:"PRESENT",title:"Board Curriculum",desc:"Deeply master today’s SSC/HSC core syllabus topic."},{stage:"FUTURE",title:"Admission Horizon",desc:"Explore how university admission problems test this exact principle."}],note:"Note: The 10-Minute Bridge connects concepts without turning regular classes into premature rush-coaching."},programsSummary:{eyebrow:"ACADEMIC OFFERINGS",headline:"Structured Programs with Rigorous Focus",programs:[{id:"ssc",title:"SSC Program",classes:"Classes 9–10",subjects:["General Mathematics","Higher Mathematics","Physics","Chemistry"],summary:"Build strong conceptual fundamentals behind science and math rather than treating formulas as things to memorize.",route:"/programs/ssc"},{id:"hsc",title:"HSC Program",classes:"Classes 11–12",subjects:["Higher Mathematics","Physics","Chemistry"],summary:"Develop analytical depth, systematic problem-solving, and disciplined study habits for both board excellence and university readiness.",route:"/programs/hsc"},{id:"admission",title:"Admission Test Program",classes:"Post-HSC & Pre-Admission",subjects:["Higher Mathematics","Physics","Chemistry"],summary:"Rigorous engineering and university A-Unit preparation focused on first-principles problem deconstruction.",route:"/programs/admission"}],cta:{label:"View All Programs",route:"/programs"}},founderSummary:{eyebrow:"LEADERSHIP & MENTORSHIP",name:n.founder.displayName,title:"Founder & Mentor",credentials:n.founder.degree,experience:n.founder.mentoringSpan,quote:n.founder.approvedStatement,cta:{label:"Meet the Founder",route:"/founder"}},developmentPath:{eyebrow:"DEVELOPMENT PATH",headline:"How Students Develop at SCIFINITY",description:"Our developmental progression is designed to transform passive test-takers into self-directed thinkers.",milestones:["Understand Yourself","Recognize Strengths & Weaknesses","Choose Effective Strategies","Deliberate Practice","Explain Aloud","Continuous Diagnostic Improvement","Build Genuine Confidence","Independent Thinking"]},storiesNotice:{eyebrow:"VERIFIED EVIDENCE",headline:"Success Is More Than a Number",text:n.evidence.statusNotice,cta:{label:"Explore Success & Evidence",route:"/success"}},goldenSeat:{eyebrow:"COMMUNITY & ACCESS",headline:"The Golden Seat — An Opportunity to Learn",description:"Financial limitations must not prevent a determined student from accessing SCIFINITY. One deserving student in every batch receives complete tuition support through direct application or peer nomination.",cta:{label:"Explore the Golden Seat",route:"/golden-seat"}},vaultSummary:{eyebrow:"OPEN EDUCATIONAL RESOURCE",headline:"The Vault — Free Insights & Strategy",description:"Open to any student with internet access. Practical study frameworks, exam strategies, physics conceptual tips, and math problem-solving techniques.",categories:["Study Tips","Exam Tips","Physics Tips","Mathematics Tricks"],plannedFeature:"Comprehensive board question solutions with high-quality step-by-step explanations (Currently in Development).",cta:{label:"Enter The Vault",route:"/vault"}},locationsSummary:{eyebrow:"CENTERS",headline:"Two Dhaka Locations. One Rigorous Standard.",description:"Both centers uphold identical 15-student batch limits, alternate-day schedules, and founder-led mentorship.",locations:[{name:"Uttara Center",batches:"Dawn, Zenith, Prime, Vesper (Sat/Mon/Wed)",address:n.locations.uttara.fullLocation},{name:"Patuatuli Center",batches:"Dawn, Zenith, Prime, Vesper (Sun/Tue/Thu)",address:n.locations.patuatuli.fullLocation}],cta:{label:"View Location Details",route:"/locations"}},finalCta:{headline:"If you are looking for a place where understanding matters, begin here.",description:"Small batches of 15 students ensure direct, personalized mentorship. Apply with a genuine desire to learn.",primary:{label:"Apply for Admission",route:"/admission"},secondary:{label:"Explore Our System",route:"/system"}}},J={global:{applyCta:"ভর্তির জন্য আবেদন করুন",exploreSystemCta:"আমাদের পদ্ধতি জানুন",exploreProgramsCta:"প্রোগ্রামসমূহ দেখুন",meetFounderCta:"মেন্টরের সাথে পরিচিত হোন",enterVaultCta:"দ্য ভল্টে প্রবেশ করুন",exploreGoldenSeatCta:"গোল্ডেন সিট জানুন",viewLocationsCta:"লোকেশনসমূহ দেখুন",translationNotice:"অনুমোদিত চূড়ান্ত বাংলা সংস্করণ প্রতিষ্ঠাতা কর্তৃক পর্যালোচনায় রয়েছে"},home:{heroHeadline:"যেখানে শিক্ষা বোধগম্যতায় রূপ নেয়।",heroSupporting:"সাইফিনিটি এসএসসি, এইচএসসি এবং অ্যাডমিশন টেস্ট শিক্ষার্থীদের জন্য একটি মেন্টর-পরিচালিত শিক্ষামূলক ইকোসিস্টেম—যা শিক্ষাকে অর্থপূর্ণ, বিশ্লেষণাত্মক এবং আকর্ষণীয় করে তোলার জন্য নির্মিত।",fundamentalQuestion:"কেন এত শিক্ষার্থী শিক্ষা উপভোগ বা সম্পূর্ণ উপলব্ধি না করেই পড়ে?",learningSystemHeadline:"৯-ধাপের সাইফিনিটি শিখন পদ্ধতি",bridgeHeadline:"আজকের পাঠ। আগামী দিনের লক্ষ্য।"}};function X(){return`
    <div class="learning-flow-container">
      <div class="learning-flow-grid">
        ${I.learningSystem.steps.map(a=>`
    <div class="flow-step-card" data-step="${a.step}">
      <div class="flex items-center justify-between">
        <span class="flow-step-badge">Stage ${a.step}</span>
      </div>
      <h4 class="text-h4" style="font-size: 18px; margin-top: 4px; margin-bottom: 4px;">${a.title}</h4>
      <p class="text-small text-muted">${a.desc}</p>
    </div>
  `).join("")}
      </div>
    </div>
  `}function D(){return`
    <div class="bridge-wrapper" style="margin-top: var(--space-6);">
      <div class="bridge-container">
        ${I.tenMinuteBridge.parts.map((t,a)=>`
          <div class="bridge-step ${a===1?"active":""}">
            <div class="flex items-center justify-between">
              <span class="bridge-step-number">${t.stage}</span>
              <span class="badge ${a===1?"badge-primary":"badge-neutral"}">Step 0${a+1}</span>
            </div>
            <h4 class="text-h4" style="font-size: 20px;">${t.title}</h4>
            <p class="text-body text-muted" style="font-size: 15px;">${t.desc}</p>
          </div>
        `).join("")}
      </div>
      <p class="text-small text-muted mt-4" style="text-align: center; font-style: italic;">
        ${I.tenMinuteBridge.note}
      </p>
    </div>
  `}function ee(){return`
    <div style="margin-top: var(--space-6);">
      <div class="grid grid-4 gap-3">
        ${I.developmentPath.milestones.map((t,a)=>`
          <div class="card" style="padding: var(--space-4); border-left: 3px solid var(--color-accent); background: #FFFFFF;">
            <div class="flex items-center justify-between mb-2">
              <span class="text-label" style="color: var(--color-accent-hover);">Phase 0${a+1}</span>
            </div>
            <h4 class="text-h4" style="font-size: 16px;">${t}</h4>
          </div>
        `).join("")}
      </div>
      <p class="text-small text-muted mt-3" style="text-align: center;">
        Note: This reflects our intended pedagogical progression, not an artificial marketing guarantee.
      </p>
    </div>
  `}function te(){const e=I,t=l.language==="bn",a=J;return`
    <main id="main-content">
      ${t?`
        <div class="container mt-4">
          <div class="p-3" style="background: #FFFBEB; border: 1px solid #FDE68A; border-radius: var(--radius-sm); font-size: 13px; color: #92400E; display: flex; align-items: center; justify-content: space-between;">
            <span><strong>বাংলা সংস্করণ:</strong> ${a.global.translationNotice}</span>
            <span class="status-tag review">[TRANSLATION_REQUIRED]</span>
          </div>
        </div>
      `:""}

      <!-- Section 01: Hero -->
      <section class="section section-hero">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label mb-3" style="display: inline-block;">
              ${t?"শিক্ষামূলক ইকোসিস্টেম &bull; প্রতিষ্ঠাকাল ২০১৪":"EDUCATIONAL ECOSYSTEM &bull; EST. 2014"}
            </span>
            <h1 class="text-h1 display-title mb-4">
              ${t?a.home.heroHeadline:e.hero.headline}
            </h1>
            <p class="text-lead mb-6">
              ${t?a.home.heroSupporting:e.hero.supporting}
            </p>
            <div class="flex gap-4 flex-wrap">
              <a href="${e.hero.primaryCta.route}" class="btn btn-primary btn-lg" data-route="${e.hero.primaryCta.route}">
                ${t?a.global.applyCta:e.hero.primaryCta.label}
              </a>
              <a href="${e.hero.secondaryCta.route}" class="btn btn-secondary btn-lg" data-route="${e.hero.secondaryCta.route}">
                ${t?a.global.exploreSystemCta:e.hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <!-- Hero Pillars Grid -->
          <div class="grid grid-4 gap-4 mt-8">
            ${e.hero.pillars.map(s=>`
              <div class="card" style="padding: var(--space-4); background: #FFFFFF;">
                <span class="text-label" style="font-size: 11px;">${s.label}</span>
                <p class="text-body" style="font-weight: 600; font-size: 15px; margin-top: 4px;">${s.detail}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Section 02: The Fundamental Question -->
      <section class="section">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${e.fundamentalQuestion.eyebrow}</span>
          <h2 class="text-h2 mb-4">
            "${t?a.home.fundamentalQuestion:e.fundamentalQuestion.headline}"
          </h2>
          <p class="text-lead mb-6 mx-auto" style="max-width: 680px;">
            ${e.fundamentalQuestion.description}
          </p>
          <a href="${e.fundamentalQuestion.cta.route}" class="btn btn-secondary" data-route="${e.fundamentalQuestion.cta.route}">
            ${e.fundamentalQuestion.cta.label} &rarr;
          </a>
        </div>
      </section>

      <!-- Section 03: What SCIFINITY Believes -->
      <section class="section section-surface">
        <div class="container">
          <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span class="text-label">${e.beliefs.eyebrow}</span>
              <h2 class="text-h2 mt-2">${e.beliefs.headline}</h2>
            </div>
            <a href="${e.beliefs.cta.route}" class="btn btn-secondary btn-sm" data-route="${e.beliefs.cta.route}">
              ${e.beliefs.cta.label}
            </a>
          </div>

          <div class="grid grid-2 gap-6">
            ${e.beliefs.principles.map(s=>`
              <div class="card card-interactive">
                <h3 class="text-h4 mb-2" style="color: var(--color-primary);">${s.title}</h3>
                <p class="text-body text-muted">${s.text}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Section 04: The SCIFINITY Learning System -->
      <section class="section">
        <div class="container">
          <div class="text-center max-w-prose mx-auto mb-8">
            <span class="text-label">${e.learningSystem.eyebrow}</span>
            <h2 class="text-h2 mt-2 mb-3">${t?a.home.learningSystemHeadline:e.learningSystem.headline}</h2>
            <p class="text-lead">${e.learningSystem.description}</p>
          </div>

          ${X()}

          <div class="text-center mt-8">
            <a href="${e.learningSystem.cta.route}" class="btn btn-primary" data-route="${e.learningSystem.cta.route}">
              ${t?a.global.exploreSystemCta:e.learningSystem.cta.label} &rarr;
            </a>
          </div>
        </div>
      </section>

      <!-- Section 05: The 10-Minute Bridge -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mx-auto text-center">
            <span class="text-label">${e.tenMinuteBridge.eyebrow}</span>
            <h2 class="text-h2 mt-2 mb-3">${t?a.home.bridgeHeadline:e.tenMinuteBridge.headline}</h2>
            <p class="text-lead">${e.tenMinuteBridge.description}</p>
          </div>

          ${D()}
        </div>
      </section>

      <!-- Section 06: Academic Programs -->
      <section class="section">
        <div class="container">
          <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span class="text-label">${e.programsSummary.eyebrow}</span>
              <h2 class="text-h2 mt-2">${e.programsSummary.headline}</h2>
            </div>
            <a href="${e.programsSummary.cta.route}" class="btn btn-secondary btn-sm" data-route="${e.programsSummary.cta.route}">
              ${t?a.global.exploreProgramsCta:e.programsSummary.cta.label}
            </a>
          </div>

          <div class="grid grid-3 gap-6">
            ${e.programsSummary.programs.map(s=>`
              <div class="card card-interactive flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-3">
                    <span class="badge badge-primary">${s.classes}</span>
                  </div>
                  <h3 class="text-h3" style="font-size: 22px; margin-bottom: 8px;">${s.title}</h3>
                  <p class="text-body text-muted mb-4" style="font-size: 15px;">${s.summary}</p>
                  
                  <div class="mb-6">
                    <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 6px;">Subjects Included:</span>
                    <ul class="flex flex-col gap-1">
                      ${s.subjects.map(i=>`<li class="text-small" style="color: var(--color-ink);">&bull; ${i}</li>`).join("")}
                    </ul>
                  </div>
                </div>

                <a href="${s.route}" class="btn btn-secondary btn-sm w-full" data-route="${s.route}">
                  Explore ${s.title} &rarr;
                </a>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Section 07: Founder & Mentor -->
      <section class="section section-dark">
        <div class="container">
          <div class="grid grid-sidebar gap-8 items-center">
            <div class="text-center">
              <img 
                src="/assets/founder.png" 
                alt="Rashed-Uz-Zaman Noor — Founder & Mentor, SCIFINITY" 
                style="width: 100%; max-width: 280px; border-radius: var(--radius-md); object-fit: cover; aspect-ratio: 4/5; box-shadow: var(--shadow-lg); border: 2px solid rgba(255, 255, 255, 0.15); display: inline-block;" 
              />
            </div>

            <div>
              <span class="text-label" style="color: #60A5FA;">${e.founderSummary.eyebrow}</span>
              <h2 class="text-h2 mt-2 mb-2" style="color: #FFFFFF;">${e.founderSummary.name}</h2>
              <p class="text-lead" style="color: #CBD5E1; font-weight: 600; margin-bottom: 4px;">
                ${t?"প্রতিষ্ঠাতা ও মেন্টর":e.founderSummary.title}
              </p>
              <p class="text-small mb-4" style="color: #94A3B8;">
                ${e.founderSummary.credentials} &bull; ${e.founderSummary.experience}
              </p>
              
              <div class="card mb-6" style="background: rgba(255, 255, 255, 0.05); border-color: rgba(255, 255, 255, 0.15); padding: var(--space-6);">
                <blockquote class="text-lead" style="font-style: italic; color: #F1F5F9; line-height: 1.7;">
                  "${e.founderSummary.quote}"
                </blockquote>
                <div class="flex items-center justify-between mt-4 pt-3 flex-wrap gap-2" style="border-top: 1px solid rgba(255, 255, 255, 0.1);">
                  <span class="text-small" style="color: #94A3B8; font-weight: 600;">— ${e.founderSummary.name}, Founder & Mentor</span>
                  <img src="/assets/founder-signature.png" alt="Signature of ${e.founderSummary.name}" style="height: 38px; width: auto; object-fit: contain; filter: brightness(0) invert(1); opacity: 0.9;" />
                </div>
              </div>

              <a href="${e.founderSummary.cta.route}" class="btn btn-outline-white btn-sm" data-route="${e.founderSummary.cta.route}">
                ${t?a.global.meetFounderCta:e.founderSummary.cta.label} &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 08: Student Development Path -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mx-auto text-center mb-8">
            <span class="text-label">${e.developmentPath.eyebrow}</span>
            <h2 class="text-h2 mt-2 mb-3">${e.developmentPath.headline}</h2>
            <p class="text-lead">${e.developmentPath.description}</p>
          </div>

          ${ee()}
        </div>
      </section>

      <!-- Section 09: Evidence & Student Stories (Coming Soon) -->
      <section class="section section-surface">
        <div class="container">
          <div class="card" style="padding: var(--space-8); border: 1px dashed var(--color-border); text-align: center; max-width: 840px; margin: 0 auto;">
            <div class="flex items-center justify-center gap-2 mb-3">
              <span class="text-label">${e.storiesNotice.eyebrow}</span>
              <span class="status-tag planned">COMING SOON</span>
            </div>
            <h3 class="text-h3 mb-3">${e.storiesNotice.headline}</h3>
            <p class="text-body text-muted mb-6 max-w-prose mx-auto">
              ${e.storiesNotice.text}
            </p>
            <a href="${e.storiesNotice.cta.route}" class="btn btn-secondary btn-sm" data-route="${e.storiesNotice.cta.route}">
              ${e.storiesNotice.cta.label} &rarr;
            </a>
          </div>
        </div>
      </section>

      <!-- Section 10: Golden Seat -->
      <section class="section">
        <div class="container">
          <div class="card card-gold" style="padding: var(--space-8);">
            <div class="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div>
                <span class="badge badge-gold mb-2">${e.goldenSeat.eyebrow}</span>
                <h2 class="text-h2">${e.goldenSeat.headline}</h2>
              </div>
              <a href="${e.goldenSeat.cta.route}" class="btn btn-gold" data-route="${e.goldenSeat.cta.route}">
                ${t?a.global.exploreGoldenSeatCta:e.goldenSeat.cta.label} &rarr;
              </a>
            </div>
            <p class="text-lead max-w-prose" style="color: #4B5563;">
              ${e.goldenSeat.description}
            </p>
          </div>
        </div>
      </section>

      <!-- Section 11: The Vault -->
      <section class="section section-surface">
        <div class="container">
          <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span class="text-label">${e.vaultSummary.eyebrow}</span>
              <h2 class="text-h2 mt-2">${e.vaultSummary.headline}</h2>
              <p class="text-body text-muted mt-1">${e.vaultSummary.description}</p>
            </div>
            <a href="${e.vaultSummary.cta.route}" class="btn btn-secondary btn-sm" data-route="${e.vaultSummary.cta.route}">
              ${t?a.global.enterVaultCta:e.vaultSummary.cta.label}
            </a>
          </div>

          <div class="grid grid-4 gap-4">
            ${e.vaultSummary.categories.map(s=>`
              <div class="card" style="padding: var(--space-4); background: #FFFFFF;">
                <span class="badge badge-accent mb-2">Free Resource</span>
                <h4 class="text-h4" style="font-size: 17px;">${s}</h4>
              </div>
            `).join("")}
          </div>

          <div class="mt-6 p-4" style="background: #F0F9FF; border: 1px solid #BAE6FD; border-radius: var(--radius-sm);">
            <div class="flex items-center gap-2">
              <span class="status-tag planned">[PLANNED]</span>
              <span class="text-small" style="color: #0369A1; font-weight: 500;">${e.vaultSummary.plannedFeature}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 12: Locations -->
      <section class="section">
        <div class="container">
          <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span class="text-label">${e.locationsSummary.eyebrow}</span>
              <h2 class="text-h2 mt-2">${e.locationsSummary.headline}</h2>
              <p class="text-body text-muted mt-1">${e.locationsSummary.description}</p>
            </div>
            <a href="${e.locationsSummary.cta.route}" class="btn btn-secondary btn-sm" data-route="${e.locationsSummary.cta.route}">
              ${t?a.global.viewLocationsCta:e.locationsSummary.cta.label}
            </a>
          </div>

          <div class="grid grid-2 gap-6">
            ${e.locationsSummary.locations.map(s=>`
              <div class="card">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-h3" style="font-size: 20px;">${s.name}</h3>
                  <span class="status-tag confirmed">Confirmed Hub</span>
                </div>
                <p class="text-small text-muted mb-3"><strong>Batches:</strong> ${s.batches}</p>
                <div class="p-3" style="background: var(--color-surface-muted); border-radius: var(--radius-sm); font-size: 13px;">
                  <strong>Address:</strong> <span style="font-weight: 600; color: var(--color-ink);">${s.address}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Section 13: Final CTA Banner -->
      <section class="section section-dark text-center" style="background: linear-gradient(180deg, var(--color-ink) 0%, #0B1120 100%);">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">${e.finalCta.headline}</h2>
          <p class="text-lead mb-6 mx-auto" style="color: #94A3B8; max-width: 600px;">
            ${e.finalCta.description}
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${e.finalCta.primary.route}" class="btn btn-primary btn-lg" data-route="${e.finalCta.primary.route}">
              ${t?a.global.applyCta:e.finalCta.primary.label}
            </a>
            <a href="${e.finalCta.secondary.route}" class="btn btn-outline-white btn-lg" data-route="${e.finalCta.secondary.route}">
              ${t?a.global.exploreSystemCta:e.finalCta.secondary.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  `}const ae={hero:{eyebrow:"ORIGIN & PURPOSE",headline:"Why Does SCIFINITY Exist?",supporting:"We exist to transform education from a routine of memorization into a process of genuine intellectual discovery and durable understanding."},beginning:{eyebrow:"THE BEGINNING (2014)",headline:"From a Tutoring Need to a Fundamental Question",paragraphs:["SCIFINITY began in 2014 when teaching was simply a way for its founder to make a living. His first student was the son of his landlord.","That student was not attentive to studying. The founder noticed discomfort and disappointment in the student's eyes and later encountered similar experiences in many other students.","Those experiences led to a different question: What if learning could become interesting again?","SCIFINITY grew from that question."]},theProblem:{eyebrow:"SYSTEMIC CHALLENGES",headline:"The Problems We Address",points:[{title:"Rote-Centric Assessment",desc:"Examinations often reward superficial memorization rather than deep conceptual comprehension."},{title:"Weak Foundational Literacy & Numeracy",desc:"Students are pushed forward into advanced topics before foundational intuitions are solid."},{title:"Mass Coaching Factories",desc:"Overcrowded classrooms where individual student misconceptions remain unnoticed and unaddressed."},{title:"Challenged Curriculum Execution",desc:"Curricula delivered as disjointed facts rather than an interconnected web of principles."}]},beliefs:{eyebrow:"OUR CORE BELIEFS",headline:"What SCIFINITY Believes About Learning",items:[{topic:"How Students Learn Best",text:"Students learn best through direct engagement, active curiosity, structured reasoning, and immediate application."},{topic:"The Role of Memorization",text:"Memorization is a secondary tool for preserving facts and formulas after concepts have been thoroughly understood."},{topic:"The True Meaning of Understanding",text:"Genuine understanding means being able to explain a concept in your own words, apply it to novel problems, and defend your reasoning."},{topic:"Deliberate Practice",text:"Repetition without diagnostic feedback is useless. Practice must be targeted, analytical, and iterative."},{topic:"Examinations as Diagnosis",text:"An exam is a diagnostic measuring tool to discover gaps in understanding, not the absolute definition of a student’s potential."}]},targetStudent:{eyebrow:"INTENDED QUALITIES",headline:"The Student SCIFINITY Aims to Develop",qualities:["First-principles thinking and logical deduction","Curiosity about the physical world","Comfort with productive intellectual struggle","Clear, articulate spoken and written explanation","Academic honesty and personal integrity","Self-directed learning habits and metacognition","Confidence and calm in high-stakes examination environments"]},antiVision:{eyebrow:"WHAT WE REFUSE TO BECOME",headline:"Our Non-Negotiable Boundaries",refusals:["We will never become a mass coaching factory with crowded lecture halls.","We will never treat students as statistical marketing numbers or billboard trophies.","We will never substitute memorized tricks for authentic conceptual mastery.","We will never use fear-based marketing or artificial urgency to pressure families."]},parentExpectations:{eyebrow:"PARENT PARTNERSHIP",headline:"Your Child's Time Deserves a Serious Learning System",description:"We view parents as essential partners. Parents should expect rigorous use of study time, transparent communication regarding progress, and a disciplined learning environment. In return, we expect parents to support homework completion and ensure students attend classes prepared."},nationalReach:{eyebrow:"VISION & REACH",headline:"A Classroom Can Be Small. The Idea Does Not Have to Be.",description:"Our physical batches remain capped at 15 students because individualized attention cannot be compromised. However, through our publications and open-access Vault resources, our educational philosophy is designed to reach and inspire students far beyond our physical classrooms."},nextCta:{headline:"Explore the Mechanics of Our Teaching System",description:"Discover how we turn these foundational beliefs into an everyday classroom methodology.",primary:{label:"Explore Our System",route:"/system"},secondary:{label:"View Academic Programs",route:"/programs"}}};function se(){const e=ae;return`
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${e.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4">${e.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto">${e.hero.supporting}</p>
        </div>
      </section>

      <!-- The Beginning -->
      <section class="section">
        <div class="container container-prose">
          <span class="text-label">${e.beginning.eyebrow}</span>
          <h2 class="text-h2 mt-2 mb-6">${e.beginning.headline}</h2>
          
          <div class="quote-highlight mb-6">
            ${e.beginning.paragraphs.map(t=>`<p class="mb-4 text-body" style="font-size: 18px;">${t}</p>`).join("")}
            <div class="mt-6 pt-3 flex items-center justify-between flex-wrap gap-2" style="border-top: 1px solid var(--color-border-subtle);">
              <span class="text-small text-muted" style="font-weight: 600;">Rashed-Uz-Zaman Noor &bull; Founder & Mentor</span>
              <img src="/assets/founder-signature.png" alt="Signature of Rashed-Uz-Zaman Noor" style="height: 36px; width: auto; object-fit: contain;" />
            </div>
          </div>
        </div>
      </section>

      <!-- The Problem -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${e.theProblem.eyebrow}</span>
            <h2 class="text-h2 mt-2">${e.theProblem.headline}</h2>
          </div>

          <div class="grid grid-2 gap-6">
            ${e.theProblem.points.map(t=>`
              <div class="card">
                <h3 class="text-h4 mb-2" style="color: var(--color-primary);">${t.title}</h3>
                <p class="text-body text-muted">${t.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- What We Believe -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${e.beliefs.eyebrow}</span>
            <h2 class="text-h2 mt-2">${e.beliefs.headline}</h2>
          </div>

          <div class="grid grid-3 gap-6">
            ${e.beliefs.items.map(t=>`
              <div class="card">
                <span class="badge badge-accent mb-2">${t.topic}</span>
                <p class="text-body text-muted" style="margin-top: 8px;">${t.text}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- The Student We Develop -->
      <section class="section section-surface">
        <div class="container">
          <div class="grid grid-2 gap-8 items-center">
            <div>
              <span class="text-label">${e.targetStudent.eyebrow}</span>
              <h2 class="text-h2 mt-2 mb-4">${e.targetStudent.headline}</h2>
              <p class="text-body text-muted mb-4">
                We believe that education must cultivate independent thinkers who can navigate complex problems with poise.
              </p>
            </div>
            <div>
              <ul class="flex flex-col gap-3">
                ${e.targetStudent.qualities.map(t=>`
                  <li class="card" style="padding: var(--space-3) var(--space-4); border-left: 3px solid var(--color-primary);">
                    <span class="text-body" style="font-weight: 500;">✓ ${t}</span>
                  </li>
                `).join("")}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- What SCIFINITY Is Not (Anti-Vision) -->
      <section class="section section-dark">
        <div class="container container-narrow text-center">
          <span class="text-label" style="color: #F87171;">${e.antiVision.eyebrow}</span>
          <h2 class="text-h2 mt-2 mb-6" style="color: #FFFFFF;">${e.antiVision.headline}</h2>
          
          <div class="grid grid-2 gap-4 text-left">
            ${e.antiVision.refusals.map(t=>`
              <div class="card" style="background: rgba(255, 255, 255, 0.05); border-color: rgba(239, 68, 68, 0.3); color: #F1F5F9;">
                <p class="text-body" style="color: #F87171; font-weight: 600;">✕ ${t}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Parent Expectations & National Reach -->
      <section class="section">
        <div class="container">
          <div class="grid grid-2 gap-8">
            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">${e.parentExpectations.eyebrow}</span>
              <h3 class="text-h3 mt-2 mb-3">${e.parentExpectations.headline}</h3>
              <p class="text-body text-muted">${e.parentExpectations.description}</p>
            </div>

            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">${e.nationalReach.eyebrow}</span>
              <h3 class="text-h3 mt-2 mb-3">${e.nationalReach.headline}</h3>
              <p class="text-body text-muted">${e.nationalReach.description}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Transition CTA -->
      <section class="section section-surface text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4">${e.nextCta.headline}</h2>
          <p class="text-lead mb-6">${e.nextCta.description}</p>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${e.nextCta.primary.route}" class="btn btn-primary btn-lg" data-route="${e.nextCta.primary.route}">
              ${e.nextCta.primary.label}
            </a>
            <a href="${e.nextCta.secondary.route}" class="btn btn-secondary btn-lg" data-route="${e.nextCta.secondary.route}">
              ${e.nextCta.secondary.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  `}const ie={hero:{eyebrow:"METHODOLOGY & PEDAGOGY",headline:"A Learning System Built Around the Student.",supporting:'SCIFINITY does not begin with the question, "How much of the syllabus can we finish?" It begins with the student: why they are here, what they understand, where their thinking breaks down, and what they need to do next.'},sections:[{number:"01",title:"Active Learning vs. Passive Receiving",description:"In traditional classrooms, students sit passively taking notes while a teacher performs solutions. At SCIFINITY, students are actively engaged in questioning, formulating hypotheses, and deriving principles themselves.",status:"CONFIRMED"},{number:"02",title:"Start With Why",description:'Every academic journey begins with establishing personal intent: "Why are you here?" Understanding personal goals creates intrinsic motivation and personal responsibility for learning.',status:"CONFIRMED"},{number:"03",title:"Real-Life Connection",description:"New concepts begin with familiar physical situations whenever possible. Students observe real-world phenomena before moving into mathematical formalism.",flow:["Real-life example","Connection to physical principle","Academic formula & derivation"],status:"CONFIRMED"},{number:"04",title:"Understand Before Memorizing",description:"Formulas, constants, and standard procedures have immense value—but they must always rest on foundational conceptual comprehension first.",status:"CONFIRMED"},{number:"05",title:"Think Before the Answer",description:"When a student is stuck, we do not simply provide the solution. We guide them to re-read the problem, identify missing constraints, and discover where their logic stalled.",flow:["Analyze question","Identify core constraint","Formulate hypothesis","Independent attempt"],status:"CONFIRMED"},{number:"06",title:"Trial, Error & Debugging",description:"When a student makes a mistake, our engineering approach kicks in. We do not judge the error; we debug it. We trace the error mechanics, explain why the breakdown occurred, and let the student retry.",flow:["Attempt","Isolate Error Point","Diagnose Misconception","Correct Logic","Successful Retry"],status:"CONFIRMED"},{number:"07",title:"Explain Aloud",description:"Students are frequently asked to stand up and explain a concept or real-life problem aloud to their batchmates. Articulating reasoning makes gaps instantly visible and solidifies retention.",status:"CONFIRMED"},{number:"08",title:"Peer Reinforcement",description:"Assignments are checked collaboratively, allowing students to see alternate solution pathways and learn from their peers’ analytical approaches.",status:"CONFIRMED"},{number:"09",title:"Semicircular Classroom Architecture",description:"Desks are arranged in a semicircular curve. This guarantees direct eye contact, total visibility, zero back-row disengagement, and fluid mentor-student dialog.",status:"CONFIRMED"},{number:"10",title:"Mastery Check",description:"Evaluations combine continuous observation, oral explanations, and formal topic-based diagnostic tests to ensure complete conceptual transfer before moving forward.",status:"CONFIRMED"},{number:"11",title:"Examination as Diagnostic Tool",description:"Examinations are not punitive rankings. They provide actionable telemetry on what the student understands and where further deliberate practice is required.",status:"CONFIRMED"},{number:"12",title:"The 10-Minute Bridge",description:"Every class features a short 10-minute synthesis connecting past prerequisites, today’s board lesson, and future admission test implications.",flow:["PAST: Prior Intuition","PRESENT: Today’s Core Syllabus","FUTURE: Admission Synthesis"],status:"CONFIRMED"},{number:"13",title:"Understanding Yourself",description:"Students learn metacognition: recognizing their cognitive strengths, identifying study traps, and choosing personalized problem-solving strategies.",status:"CONFIRMED"},{number:"14",title:"Parent Partnership",description:"Parents support regular homework completion, keep students well-rested and prepared, and reinforce the value of productive struggle at home.",status:"CONFIRMED"}],developmentCycle:{eyebrow:"DEVELOPMENT LIFECYCLE",headline:"From Initial Curiosity to Independent Mastery",stages:[{name:"Awareness",desc:"Recognizing current gaps and establishing study intent."},{name:"Understanding",desc:"Grasping first principles behind scientific & mathematical laws."},{name:"Practice",desc:"Iterative problem solving with targeted debugging."},{name:"Confidence",desc:"Explaining concepts aloud and tackling novel test problems."},{name:"Independence",desc:"Self-directed study and self-diagnosis without continuous supervision."}]},cta:{headline:"Ready to See How Our Programs Apply This System?",description:"Explore our SSC, HSC, and competitive Admission Test academic programs.",primary:{label:"Explore Programs",route:"/programs"},secondary:{label:"Apply for Admission",route:"/admission"}}};function ne(){return`
    <div class="semicircle-diagram">
      <div class="flex items-center justify-between w-full mb-4">
        <div>
          <span class="badge badge-primary mb-2">Classroom Architecture</span>
          <h3 class="text-h3" style="font-size: 20px;">Semicircular Seating Arrangement</h3>
        </div>
        <span class="badge badge-neutral">Max 15 Students</span>
      </div>
      
      <p class="text-body text-muted mb-6" style="font-size: 15px; text-align: center; max-width: 600px;">
        Traditional classroom rows create hidden backbenchers. Our semicircular curve ensures every student maintains direct eye contact, full visibility, and immediate dialogue with the mentor.
      </p>

      <div style="width: 100%; max-width: 500px; padding: var(--space-4); background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-md); text-align: center;">
        <svg viewBox="0 0 400 200" width="100%" height="auto" style="max-height: 200px;">
          <!-- Mentor Center Podium -->
          <circle cx="200" cy="170" r="18" fill="#2563EB" />
          <text x="200" y="174" fill="#FFFFFF" font-size="10" font-weight="700" text-anchor="middle" font-family="sans-serif">MENTOR</text>
          
          <!-- Semicircular Sightlines / Arc -->
          <path d="M 60 160 A 140 140 0 0 1 340 160" fill="none" stroke="#E4E7EC" stroke-width="2" stroke-dasharray="4 4" />
          
          <!-- 15 Student Desks Arranged on Semicircle -->
          <!-- Arc Points from angle 195 deg to 345 deg -->
          <circle cx="65" cy="150" r="8" fill="#06B6D4" />
          <circle cx="80" cy="120" r="8" fill="#06B6D4" />
          <circle cx="102" cy="94" r="8" fill="#06B6D4" />
          <circle cx="130" cy="74" r="8" fill="#06B6D4" />
          <circle cx="162" cy="62" r="8" fill="#06B6D4" />
          <circle cx="196" cy="58" r="8" fill="#06B6D4" />
          <circle cx="230" cy="62" r="8" fill="#06B6D4" />
          <circle cx="262" cy="74" r="8" fill="#06B6D4" />
          <circle cx="290" cy="94" r="8" fill="#06B6D4" />
          <circle cx="312" cy="120" r="8" fill="#06B6D4" />
          <circle cx="327" cy="150" r="8" fill="#06B6D4" />
        </svg>

        <div class="flex items-center justify-center gap-6 mt-3">
          <div class="flex items-center gap-2">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #2563EB; display: inline-block;"></span>
            <span class="text-small">Mentor (Direct Sightline)</span>
          </div>
          <div class="flex items-center gap-2">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #06B6D4; display: inline-block;"></span>
            <span class="text-small">15 Student Workstations</span>
          </div>
        </div>
      </div>
    </div>
  `}function oe(){return`
    <div class="card" style="background: #F8FAFC; border-left: 4px solid var(--color-primary); padding: var(--space-6);">
      <h3 class="text-h3" style="font-size: 22px; margin-bottom: var(--space-4);">
        The Engineering Debugging Loop for Mistakes
      </h3>
      <p class="text-body text-muted mb-6">
        When an engineering system fails, you don't guess—you isolate the faulty component. We treat student errors with the same objective precision.
      </p>

      <div class="grid grid-3 gap-4">
        ${[{title:"1. Independent Attempt",desc:"Student tackles a non-routine problem without premature coaching."},{title:"2. Error Detection",desc:"Calculation or conceptual derailment is observed during work."},{title:"3. Root Cause Isolation",desc:"Mentor questions the student to find the exact line where reasoning failed."},{title:"4. Conceptual Correction",desc:"Re-deriving the underlying principle behind the breakdown."},{title:"5. Diagnostic Retry",desc:"Student re-solves the original problem and a fresh variant independently."}].map(t=>`
          <div class="card" style="padding: var(--space-4); background: #FFFFFF;">
            <h4 class="text-h4" style="font-size: 16px; color: var(--color-primary); margin-bottom: 4px;">${t.title}</h4>
            <p class="text-small text-muted">${t.desc}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `}function re(){const e=ie;return`
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${e.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4">${e.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto">${e.hero.supporting}</p>
        </div>
      </section>

      <!-- System Mechanisms Grid -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">FOUNDATIONAL MECHANISMS</span>
            <h2 class="text-h2 mt-2">How We Mentor Every Day</h2>
          </div>

          <div class="grid grid-2 gap-6">
            ${e.sections.map(t=>`
              <div class="card card-interactive">
                <div class="flex items-center justify-between mb-3">
                  <span class="badge badge-primary">Mechanism ${t.number}</span>
                </div>
                <h3 class="text-h3" style="font-size: 20px; margin-bottom: 8px;">${t.title}</h3>
                <p class="text-body text-muted">${t.description}</p>

                ${t.flow?`
                  <div class="mt-4 p-3" style="background: var(--color-surface-muted); border-radius: var(--radius-sm);">
                    <span class="text-label" style="font-size: 10px; display: block; margin-bottom: 4px;">Sequence Flow:</span>
                    <div class="flex items-center gap-2 flex-wrap text-small" style="font-weight: 600; color: var(--color-ink);">
                      ${t.flow.map((a,s)=>`<span>${a}</span>${s<t.flow.length-1?'<span style="color: var(--color-primary);">&rarr;</span>':""}`).join("")}
                    </div>
                  </div>
                `:""}
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Visualizer: Semicircular Classroom -->
      <section class="section section-surface">
        <div class="container container-narrow">
          ${ne()}
        </div>
      </section>

      <!-- Visualizer: Debugging Flow -->
      <section class="section">
        <div class="container">
          ${oe()}
        </div>
      </section>

      <!-- Visualizer: 10-Minute Bridge -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mx-auto text-center">
            <span class="text-label">CONTINUOUS SYNTHESIS</span>
            <h2 class="text-h2 mt-2 mb-3">The 10-Minute Bridge Mechanism</h2>
            <p class="text-lead">
              Connecting past prerequisite intuition, today’s board lesson, and future competitive entrance requirements in every class.
            </p>
          </div>
          ${D()}
        </div>
      </section>

      <!-- Expected Development Lifecycle -->
      <section class="section">
        <div class="container">
          <div class="text-center max-w-prose mx-auto mb-8">
            <span class="text-label">${e.developmentCycle.eyebrow}</span>
            <h2 class="text-h2 mt-2 mb-3">${e.developmentCycle.headline}</h2>
          </div>

          <div class="grid grid-3 gap-4">
            ${e.developmentCycle.stages.map((t,a)=>`
              <div class="card" style="padding: var(--space-4); border-top: 3px solid var(--color-primary);">
                <span class="text-label">Stage 0${a+1}</span>
                <h4 class="text-h4 mt-1 mb-2">${t.name}</h4>
                <p class="text-small text-muted">${t.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- System CTA -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">${e.cta.headline}</h2>
          <p class="text-lead mb-6 mx-auto" style="color: #94A3B8; max-width: 600px;">${e.cta.description}</p>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${e.cta.primary.route}" class="btn btn-primary btn-lg" data-route="${e.cta.primary.route}">
              ${e.cta.primary.label}
            </a>
            <a href="${e.cta.secondary.route}" class="btn btn-outline-white btn-lg" data-route="${e.cta.secondary.route}">
              ${e.cta.secondary.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  `}const le={hero:{eyebrow:"ACADEMIC STRUCTURE",headline:"Learn for the Exam. Learn Beyond the Exam.",supporting:"SCIFINITY currently focuses on SSC, HSC and Admission Test preparation in Mathematics, Physics and Chemistry. Each program is built around conceptual understanding, problem-solving, explanation and deliberate practice."},batchInfo:{headline:"Small Batch Architecture",maxSize:"Strict maximum 15 students per batch",scheduleNote:"Batches are shared across Uttara and Patuatuli centers on alternate days."},adyantaDistinction:{headline:"Ecosystem & Publications",text:"SCIFINITY delivers direct mentor-led teaching. Broader self-study tools—including Parallel Test Books, Flash Cards, and Learning Tools—are published by Adyanta, an independent publishing house under common leadership."}},A={hero:{eyebrow:"PROGRAM 01 — CLASSES 9 & 10",headline:"SSC Foundation Program",positioning:"Build the conceptual foundation behind the syllabus instead of treating the syllabus as a list of things to memorize.",target:"Classes 9–10 Students"},subjects:[{name:"General Mathematics",focus:"Algebraic logic, geometry proofs, trigonometry, and statistics fundamentals."},{name:"Higher Mathematics",focus:"Set theory, coordinate geometry, advanced algebra, and vectors."},{name:"Physics",focus:"Mechanics, wave mechanics, thermodynamics, light, and electrical intuition."},{name:"Chemistry",focus:"Atomic structure, periodic trends, chemical bonding, and reaction dynamics."}],methodology:{headline:"How We Teach SSC Candidates",points:["Deconstruct physical formulas into observable real-life mechanics.","Frequent oral explanation sessions in front of the batch.","Active error debugging when homework problems fail.","Topic-wise diagnostic tests to isolate conceptual gaps before school exams."]},studentFit:{headline:"Who Is This Program For?",text:"Any student willing to engage, complete homework, and think through mistakes. Prior academic weakness does not disqualify a student; lack of willingness to try does."},batchLocations:{scheduleStatus:"[CURRENT CLASS SCHEDULE REQUIRED]"}},N={hero:{eyebrow:"PROGRAM 02 — CLASSES 11 & 12",headline:"HSC Advanced & Bridge Program",positioning:"Develop deeper conceptual understanding, stronger problem-solving ability and the habits needed for both board examinations and future admission preparation.",target:"Classes 11–12 Students"},subjects:[{name:"Higher Mathematics",focus:"Differential & integral calculus, matrices, complex numbers, conic sections, and mechanics."},{name:"Physics",focus:"Newtonian mechanics, rotational dynamics, thermodynamics, wave optics, electromagnetism, and modern physics."},{name:"Chemistry",focus:"Qualitative & quantitative chemistry, organic reaction mechanisms, electrochemistry, and chemical equilibrium."}],admissionConnection:{headline:"The Admission Bridge for HSC",description:"Through our 10-Minute Bridge, HSC students understand how their current board topics connect to challenging problems in BUET, Medical, and University A-Unit entrance tests without overwhelming their current board focus."},studentExpectations:{headline:"Student Commitment",text:"Consistent daily problem practice, active participation during debugging sessions, and regular completion of analytical assignments."},batchLocations:{scheduleStatus:"[CURRENT CLASS SCHEDULE REQUIRED]"}},P={hero:{eyebrow:"PROGRAM 03 — COMPETITIVE ENTRANCE",headline:"Engineering & University A-Unit Admission",positioning:"Admission preparation should not begin only after the board examination. Built on first-principles understanding, speed, and analytical intuition rather than blind shortcut memorization.",target:"Engineering (BUET/CKRUET) & University A-Unit Aspirants"},subjects:[{name:"Higher Mathematics",focus:"High-speed analytical problem solving, multi-concept integration, and calculus applications."},{name:"Physics",focus:"Multi-variable mechanics, complex electrical networks, and unconventional physical scenarios."},{name:"Chemistry",focus:"Advanced stoichiometry, organic synthesis pathways, and rapid equilibrium calculations."}],foundationFirst:{headline:"Why Foundation Outperforms Rote Shortcuts",description:"Admission tests deliberately create novel, unseen problem variants. Students who only memorize shortcut formulas fail when constraints shift. Students grounded in first principles adapt effortlessly."},resources:{current:"Free access to The Vault (Study Tips, Exam Tips, Physics Tips, Mathematics Tricks).",futureStatus:"Comprehensive solved board and admission question repository (Currently PLANNED)."}};function ce(){const e=le,t=[{title:"SSC Program (Classes 9–10)",target:A.hero.target,positioning:A.hero.positioning,subjects:A.subjects.map(a=>a.name),route:"/programs/ssc"},{title:"HSC Program (Classes 11–12)",target:N.hero.target,positioning:N.hero.positioning,subjects:N.subjects.map(a=>a.name),route:"/programs/hsc"},{title:"Admission Test Program",target:P.hero.target,positioning:P.hero.positioning,subjects:P.subjects.map(a=>a.name),route:"/programs/admission"}];return`
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${e.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4">${e.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto">${e.hero.supporting}</p>
        </div>
      </section>

      <!-- Programs Grid -->
      <section class="section">
        <div class="container">
          <div class="grid grid-3 gap-6">
            ${t.map(a=>`
              <div class="card card-interactive flex flex-col justify-between" style="padding: var(--space-6);">
                <div>
                  <span class="badge badge-primary mb-3">${a.target}</span>
                  <h2 class="text-h3" style="font-size: 24px; margin-bottom: 8px;">${a.title}</h2>
                  <p class="text-body text-muted mb-4" style="font-size: 15px;">${a.positioning}</p>

                  <div class="mb-6">
                    <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 6px;">Curriculum Subjects:</span>
                    <ul class="flex flex-col gap-1">
                      ${a.subjects.map(s=>`<li class="text-small" style="font-weight: 500;">&bull; ${s}</li>`).join("")}
                    </ul>
                  </div>
                </div>

                <a href="${a.route}" class="btn btn-primary btn-sm w-full" data-route="${a.route}">
                  View Full Program Details &rarr;
                </a>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Batch Architecture -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mx-auto text-center mb-8">
            <span class="text-label">COACHING INTEGRITY</span>
            <h2 class="text-h2 mt-2 mb-3">${e.batchInfo.headline}</h2>
            <p class="text-lead" style="font-weight: 600; color: var(--color-primary);">${e.batchInfo.maxSize}</p>
            <p class="text-body text-muted mt-2">${e.batchInfo.scheduleNote}</p>
          </div>

          <div class="grid grid-4 gap-4">
            ${k.map(a=>`
              <div class="card" style="text-align: center; padding: var(--space-5);">
                <span class="badge badge-neutral mb-2">Cohort</span>
                <h3 class="text-h3" style="font-size: 20px;">Batch ${a.name}</h3>
                <p class="text-small text-muted mt-2">Max ${a.maxStudents} Students</p>
                <p class="text-small text-muted">Uttara & Patuatuli</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Adyanta Ecosystem Distinction -->
      <section class="section">
        <div class="container container-narrow">
          <div class="card" style="border-left: 4px solid var(--color-accent); padding: var(--space-6); background: #F8FAFC;">
            <div class="flex items-center gap-2 mb-2">
              <span class="badge badge-accent">Publishing Ecosystem</span>
              <span class="status-tag confirmed">Separate Business</span>
            </div>
            <h3 class="text-h3" style="font-size: 20px; margin-bottom: 8px;">${e.adyantaDistinction.headline}</h3>
            <p class="text-body text-muted">${e.adyantaDistinction.text}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">Ready to Experience Conceptual Learning?</h2>
          <p class="text-lead mb-6 mx-auto" style="color: #94A3B8;">Apply for an upcoming batch in Uttara or Patuatuli.</p>
          <a href="/admission" class="btn btn-primary btn-lg" data-route="/admission">
            Apply for Admission &rarr;
          </a>
        </div>
      </section>
    </main>
  `}function de(){const e=A;return`
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${e.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4">${e.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto">${e.hero.positioning}</p>
          <div class="mt-6 flex gap-4 justify-center">
            <a href="/admission?prog=ssc" class="btn btn-primary" data-route="/admission">Apply for SSC Batch</a>
            <a href="/system" class="btn btn-secondary" data-route="/system">Explore Our System</a>
          </div>
        </div>
      </section>

      <!-- Subject Breakdown -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">SUBJECT FOCUS</span>
            <h2 class="text-h2 mt-2">Comprehensive 4-Subject Syllabus Mastery</h2>
          </div>

          <div class="grid grid-2 gap-6">
            ${e.subjects.map(t=>`
              <div class="card card-interactive">
                <h3 class="text-h3" style="font-size: 20px; color: var(--color-primary); margin-bottom: 8px;">${t.name}</h3>
                <p class="text-body text-muted">${t.focus}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Methodology & Assessment -->
      <section class="section section-surface">
        <div class="container">
          <div class="grid grid-2 gap-8">
            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">TEACHING METHOD</span>
              <h3 class="text-h3 mt-2 mb-4">${e.methodology.headline}</h3>
              <ul class="flex flex-col gap-3">
                ${e.methodology.points.map(t=>`
                  <li class="text-body text-muted" style="display: flex; gap: 8px;">
                    <span style="color: var(--color-primary); font-weight: 700;">&bull;</span>
                    <span>${t}</span>
                  </li>
                `).join("")}
              </ul>
            </div>

            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">STUDENT PROFILE</span>
              <h3 class="text-h3 mt-2 mb-4">${e.studentFit.headline}</h3>
              <p class="text-body text-muted mb-4">${e.studentFit.text}</p>
              <div class="p-4" style="background: var(--color-surface-muted); border-radius: var(--radius-sm);">
                <p class="text-small" style="font-weight: 600; color: var(--color-ink);">
                  Note: Prior weak marks do not disqualify a student. Sincerity and active participation in class debugging sessions are the sole prerequisites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Batch and Location Info -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-6">
            <span class="text-label">BATCH & LOCATION SPECS</span>
            <h2 class="text-h2 mt-2">Class Structure for SSC</h2>
          </div>

          <div class="grid grid-4 gap-4">
            ${k.map(t=>`
              <div class="card" style="padding: var(--space-4);">
                <span class="badge badge-primary mb-2">SSC Cohort</span>
                <h4 class="text-h4" style="font-size: 18px;">Batch ${t.name}</h4>
                <p class="text-small text-muted mt-2">Max ${t.maxStudents} Students</p>
                <div class="mt-2">
                  <span class="status-tag placeholder">${e.batchLocations.scheduleStatus}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">Build a Strong Foundation for SSC</h2>
          <p class="text-lead mb-6 mx-auto" style="color: #94A3B8;">Reserve your place in a 15-student batch.</p>
          <a href="/admission" class="btn btn-primary btn-lg" data-route="/admission">
            Apply for SSC Admission &rarr;
          </a>
        </div>
      </section>
    </main>
  `}function pe(){const e=N;return`
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${e.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4">${e.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto">${e.hero.positioning}</p>
          <div class="mt-6 flex gap-4 justify-center">
            <a href="/admission?prog=hsc" class="btn btn-primary" data-route="/admission">Apply for HSC Batch</a>
            <a href="/system" class="btn btn-secondary" data-route="/system">Explore Our System</a>
          </div>
        </div>
      </section>

      <!-- Subject Breakdown -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">CORE SYLLABUS RIGOR</span>
            <h2 class="text-h2 mt-2">HSC Advanced Subject Coverage</h2>
          </div>

          <div class="grid grid-3 gap-6">
            ${e.subjects.map(t=>`
              <div class="card card-interactive">
                <h3 class="text-h3" style="font-size: 20px; color: var(--color-primary); margin-bottom: 8px;">${t.name}</h3>
                <p class="text-body text-muted">${t.focus}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Admission Connection & Expectations -->
      <section class="section section-surface">
        <div class="container">
          <div class="grid grid-2 gap-8">
            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">PEDAGOGICAL SYNTHESIS</span>
              <h3 class="text-h3 mt-2 mb-4">${e.admissionConnection.headline}</h3>
              <p class="text-body text-muted">${e.admissionConnection.description}</p>
            </div>

            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">EXPECTATIONS</span>
              <h3 class="text-h3 mt-2 mb-4">${e.studentExpectations.headline}</h3>
              <p class="text-body text-muted">${e.studentExpectations.text}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Batch Info -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-6">
            <span class="text-label">BATCH STRUCTURE</span>
            <h2 class="text-h2 mt-2">HSC Batch Availability</h2>
          </div>

          <div class="grid grid-4 gap-4">
            ${k.map(t=>`
              <div class="card" style="padding: var(--space-4);">
                <span class="badge badge-primary mb-2">HSC Cohort</span>
                <h4 class="text-h4" style="font-size: 18px;">Batch ${t.name}</h4>
                <p class="text-small text-muted mt-2">Max ${t.maxStudents} Students</p>
                <div class="mt-2">
                  <span class="status-tag placeholder">${e.batchLocations.scheduleStatus}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">Excel in HSC and Prepare for University</h2>
          <p class="text-lead mb-6 mx-auto" style="color: #94A3B8;">Join a mentor-led 15-student batch in Uttara or Patuatuli.</p>
          <a href="/admission" class="btn btn-primary btn-lg" data-route="/admission">
            Apply for HSC Admission &rarr;
          </a>
        </div>
      </section>
    </main>
  `}function ue(){const e=P;return`
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${e.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4">${e.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto">${e.hero.positioning}</p>
          <div class="mt-6 flex gap-4 justify-center">
            <a href="/admission?prog=admission" class="btn btn-primary" data-route="/admission">Apply for Admission Batch</a>
            <a href="/system" class="btn btn-secondary" data-route="/system">Explore Our System</a>
          </div>
        </div>
      </section>

      <!-- Subject Focus -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">ENGINEERING & A-UNIT PREPARATION</span>
            <h2 class="text-h2 mt-2">Subjects Mentored at Admission Depth</h2>
          </div>

          <div class="grid grid-3 gap-6">
            ${e.subjects.map(t=>`
              <div class="card card-interactive">
                <h3 class="text-h3" style="font-size: 20px; color: var(--color-primary); margin-bottom: 8px;">${t.name}</h3>
                <p class="text-body text-muted">${t.focus}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Foundation vs Shortcuts -->
      <section class="section section-surface">
        <div class="container">
          <div class="card" style="padding: var(--space-8); border-left: 4px solid var(--color-primary); background: #FFFFFF;">
            <span class="text-label">PHILOSOPHY OF ENTRANCE EXAMS</span>
            <h3 class="text-h3 mt-2 mb-4">${e.foundationFirst.headline}</h3>
            <p class="text-lead text-muted max-w-prose">${e.foundationFirst.description}</p>
          </div>
        </div>
      </section>

      <!-- 10-Minute Bridge in Admission Context -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mx-auto text-center">
            <span class="text-label">CONTINUOUS INTEGRATION</span>
            <h2 class="text-h2 mt-2 mb-3">Connecting Board Foundations to Admission Testing</h2>
          </div>
          ${D()}
        </div>
      </section>

      <!-- Vault Resources Integration -->
      <section class="section section-surface">
        <div class="container container-narrow">
          <div class="card" style="padding: var(--space-6);">
            <div class="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div>
                <span class="badge badge-accent mb-2">Free Online Resources</span>
                <h3 class="text-h3">Access The Vault</h3>
              </div>
              <a href="/vault" class="btn btn-secondary btn-sm" data-route="/vault">
                Enter The Vault &rarr;
              </a>
            </div>
            <p class="text-body text-muted mb-4">${e.resources.current}</p>
            <div class="p-3" style="background: #F0F9FF; border: 1px solid #BAE6FD; border-radius: var(--radius-sm);">
              <span class="status-tag planned">[PLANNED]</span>
              <span class="text-small" style="color: #0369A1; font-weight: 500; margin-left: 6px;">${e.resources.futureStatus}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">Prepare with First-Principles Clarity</h2>
          <p class="text-lead mb-6 mx-auto" style="color: #94A3B8;">Apply for an upcoming Admission Test cohort.</p>
          <a href="/admission" class="btn btn-primary btn-lg" data-route="/admission">
            Apply for Admission &rarr;
          </a>
        </div>
      </section>
    </main>
  `}const me={hero:{eyebrow:"LEADERSHIP & PEDAGOGY",name:n.founder.displayName,headline:"Founder & Mentor",credentials:n.founder.degree,mentoringSpan:n.founder.mentoringSpan},approvedStatement:{eyebrow:"APPROVED FOUNDER STATEMENT",quote:n.founder.approvedStatement},originStory:{eyebrow:"HOW IT BEGAN",headline:"The Landlord’s Son and the Question That Started SCIFINITY",paragraphs:["SCIFINITY began in 2014 when teaching was simply a way for its founder to make a living. His first student was the son of his landlord.","That student was not attentive to studying. The founder noticed discomfort and disappointment in the student's eyes and later encountered similar experiences in many other students.","Those experiences led to a different question: What if learning could become interesting again?","SCIFINITY grew from that question."]},philosophyStatement:{eyebrow:"MENTORSHIP STATEMENT",headline:"An Engineering Approach to Human Learning",quote:["I do not see teaching as the delivery of a syllabus.","I try to make the connection between an academic concept and the world around the student. When necessary, I go beyond the boundary of the syllabus to make the idea understandable and to encourage the student to think.","My engineering background influences how I approach mistakes: understand the problem, identify the point of failure, correct it, and try again."]},subjectsTaught:{eyebrow:"ACADEMIC SCOPE",headline:"Subjects Personally Mentored",description:"To ensure unwavering pedagogical rigor, our founder remains personally invested in all currently offered core Physical Science and Mathematics subjects:",subjects:[{name:"General Mathematics",level:"SSC (Classes 9–10)"},{name:"Higher Mathematics",level:"SSC, HSC, Admission Test"},{name:"Physics",level:"SSC, HSC, Admission Test"},{name:"Chemistry",level:"SSC, HSC, Admission Test"}]},credibilityStandards:{eyebrow:"AUTHENTICITY & TRUST",headline:"How We Build Credibility",points:[{title:"Academic Rigor",desc:"Rigorous engineering training from IUT applied to secondary and higher-secondary education."},{title:"12 Years of Mentorship",desc:"Continuous direct interaction with Dhaka students across evolving curricula since 2014."},{title:"Evidence-Based Progress",desc:"No fabricated awards, bought rankings, or exaggerated slogans. True student understanding is our only metric."}]},cta:{headline:"Experience the SCIFINITY Teaching Method",primary:{label:"Explore Our System",route:"/system"},secondary:{label:"Explore Programs",route:"/programs"}}};function he(){const e=me,t=n.founder.portraitImagePath,a=n.founder.signatureImagePath;return`
    <main id="main-content">
      <!-- Hero Section with Authentic Portrait -->
      <section class="section section-hero">
        <div class="container">
          <div class="grid grid-sidebar gap-8 items-center">
            <!-- Portrait Image -->
            <div class="text-center">
              <div class="card" style="padding: var(--space-3); background: #FFFFFF; box-shadow: var(--shadow-md); display: inline-block;">
                <img 
                  src="${t}" 
                  alt="Rashed-Uz-Zaman Noor — Founder & Mentor, SCIFINITY" 
                  style="width: 100%; max-width: 320px; border-radius: var(--radius-sm); object-fit: cover; aspect-ratio: 4/5; display: block;" 
                />
              </div>
            </div>

            <!-- Profile Info -->
            <div>
              <span class="text-label mb-2" style="display: inline-block;">${e.hero.eyebrow}</span>
              <h1 class="text-h1 display-title mb-2">${e.hero.name}</h1>
              <p class="text-lead mb-3" style="color: var(--color-primary); font-weight: 600;">
                ${e.hero.headline}
              </p>
              <p class="text-lead max-w-prose" style="font-size: 18px; color: var(--color-ink); line-height: 1.6;">
                ${e.hero.credentials}
              </p>
              <p class="text-body text-muted mt-2">${e.hero.mentoringSpan}</p>
              
              <div class="mt-4">
                <img src="${a}" alt="Signature of ${e.hero.name}" style="height: 52px; width: auto; object-fit: contain;" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Approved Statement Block with Authentic Signature -->
      <section class="section" style="padding-top: var(--space-6);">
        <div class="container container-prose">
          <div class="card" style="background: #F8FAFC; border: 1px solid var(--color-primary-surface); padding: var(--space-8); text-align: center; box-shadow: var(--shadow-sm);">
            <span class="text-label mb-3" style="color: var(--color-primary); display: inline-block;">${e.approvedStatement.eyebrow}</span>
            <blockquote class="text-h3" style="font-style: italic; font-weight: 500; line-height: 1.6; color: var(--color-ink); margin-bottom: var(--space-4);">
              ${e.approvedStatement.quote}
            </blockquote>
            <div class="flex items-center justify-center gap-4 flex-col mt-4">
              <img src="${a}" alt="Signature of ${e.hero.name}" style="height: 44px; width: auto; object-fit: contain;" />
              <p class="text-small text-muted" style="font-weight: 600;">
                — ${e.hero.name}, Founder & Mentor
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Origin Story -->
      <section class="section section-surface">
        <div class="container container-prose">
          <span class="text-label">${e.originStory.eyebrow}</span>
          <h2 class="text-h2 mt-2 mb-6">${e.originStory.headline}</h2>

          <div class="quote-highlight mb-8">
            ${e.originStory.paragraphs.map(s=>`<p class="mb-4 text-body" style="font-size: 18px;">${s}</p>`).join("")}
          </div>
        </div>
      </section>

      <!-- Philosophy Statement -->
      <section class="section section-dark">
        <div class="container container-narrow">
          <span class="text-label" style="color: #60A5FA;">${e.philosophyStatement.eyebrow}</span>
          <h2 class="text-h2 mt-2 mb-6" style="color: #FFFFFF;">${e.philosophyStatement.headline}</h2>

          <div class="flex flex-col gap-4">
            ${e.philosophyStatement.quote.map(s=>`
              <div class="card" style="background: rgba(255, 255, 255, 0.05); border-color: rgba(255, 255, 255, 0.15); color: #F1F5F9; padding: var(--space-5);">
                <p class="text-lead" style="font-style: italic; color: #FFFFFF;">"${s}"</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Subjects Personally Mentored -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${e.subjectsTaught.eyebrow}</span>
            <h2 class="text-h2 mt-2">${e.subjectsTaught.headline}</h2>
            <p class="text-body text-muted mt-2">${e.subjectsTaught.description}</p>
          </div>

          <div class="grid grid-4 gap-4">
            ${e.subjectsTaught.subjects.map(s=>`
              <div class="card" style="padding: var(--space-5); text-align: center;">
                <h3 class="text-h4" style="font-size: 18px; color: var(--color-primary);">${s.name}</h3>
                <p class="text-small text-muted mt-2">${s.level}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Credibility Standards -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${e.credibilityStandards.eyebrow}</span>
            <h2 class="text-h2 mt-2">${e.credibilityStandards.headline}</h2>
          </div>

          <div class="grid grid-3 gap-6">
            ${e.credibilityStandards.points.map(s=>`
              <div class="card">
                <h3 class="text-h4 mb-2" style="font-size: 18px; color: var(--color-ink);">${s.title}</h3>
                <p class="text-body text-muted">${s.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section section-surface text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4">${e.cta.headline}</h2>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${e.cta.primary.route}" class="btn btn-primary btn-lg" data-route="${e.cta.primary.route}">
              ${e.cta.primary.label}
            </a>
            <a href="${e.cta.secondary.route}" class="btn btn-secondary btn-lg" data-route="${e.cta.secondary.route}">
              ${e.cta.secondary.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  `}const ge={hero:{eyebrow:"EVIDENCE & OUTCOMES",headline:"Success Is More Than a Number.",supporting:"Examination results matter. They are evidence of performance and an important part of a student’s academic journey. But SCIFINITY does not define mastery by marks alone. We also care about whether a student can explain what they know, apply it, recognize their own errors and continue learning independently."},dimensionsOfSuccess:{eyebrow:"OUR DEFINITION",headline:"Six Dimensions of Real Student Mastery",dimensions:[{title:"Conceptual Understanding",desc:"Grasping the physical and logical mechanisms behind equations rather than blindly executing routines."},{title:"Ability to Explain",desc:"Articulating complex principles clearly to peers and answering unexpected counter-questions."},{title:"Independent Diagnosis",desc:"Spotting where mathematical steps derailed without waiting for an instructor to point out the error."},{title:"Effective Study Strategy",desc:"Managing preparation time, diagnostic revisions, and high-pressure exam timelines with composure."},{title:"Academic Results",desc:"Demonstrated high performance in institutional, board (SSC/HSC), and competitive university admission exams."},{title:"Long-Term Independence",desc:"Developing the intellectual curiosity and resilience required for lifelong self-directed learning."}]},evidenceFramework:{eyebrow:"CASE STUDY ARCHITECTURE",headline:"How We Document Student Transformation",steps:[{step:"01",title:"Starting Point",desc:"Initial academic baseline, specific topic anxieties, and study habits upon joining."},{step:"02",title:"The Challenge",desc:"Where the student’s thinking broke down when encountering advanced non-routine problems."},{step:"03",title:"Learning Process",desc:"Active participation in semicircular debugging sessions and oral explanation practice."},{step:"04",title:"The Shift",desc:"The moment conceptual intuition replaced memorization and confidence took root."},{step:"05",title:"The Outcome",desc:"Verified examination marks, university placement, and independent study maturity."}]},verificationNotice:{eyebrow:"INSTITUTIONAL INTEGRITY POLICY",headline:"Strict Evidence Verification in Progress",text:"In alignment with our core ethical standards, SCIFINITY never fabricates student names, results, quotes, or photographs. Verified student journeys and guardian testimonials from our active batches are compiled with written parental consent and will be featured here as reviews conclude.",status:"PLACEHOLDER"},guardianPerspective:{eyebrow:"GUARDIAN PERSPECTIVE",headline:"What Parents Observe at Home",observations:[{focus:"Reduced Exam Anxiety",desc:"Students approach revision with structured diagnostic strategies rather than panic-driven cramming."},{focus:"Enthusiastic Explanation",desc:"Students actively discuss science concepts and real-world connections at the family table."},{focus:"Ownership of Work",desc:"Independent homework completion and voluntary error review replace constant parental prompting."}]},cta:{headline:"Join an Educational Environment Focused on Genuine Growth",primary:{label:"Apply for Admission",route:"/admission"},secondary:{label:"Explore Programs",route:"/programs"}}};function M(e){switch(e){case"PLACEHOLDER":return'<span class="status-tag placeholder" title="Official institutional data required from owner">[PLACEHOLDER]</span>';case"REVIEW_REQUIRED":return'<span class="status-tag review" title="Policy condition pending final founder review">[REVIEW_REQUIRED]</span>';case"PLANNED":return'<span class="status-tag planned" title="Future capability currently in development">[PLANNED]</span>';case"TRANSLATION_REQUIRED":return'<span class="status-tag review" title="Official human translation pending approval">[TRANSLATION_REQUIRED]</span>';case"CONFIRMED":default:return""}}function be(){const e=ge;return`
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${e.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4">${e.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto">${e.hero.supporting}</p>
        </div>
      </section>

      <!-- 6 Dimensions of Success -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${e.dimensionsOfSuccess.eyebrow}</span>
            <h2 class="text-h2 mt-2">${e.dimensionsOfSuccess.headline}</h2>
          </div>

          <div class="grid grid-3 gap-6">
            ${e.dimensionsOfSuccess.dimensions.map((t,a)=>`
              <div class="card card-interactive">
                <span class="text-label" style="font-size: 11px;">Dimension 0${a+1}</span>
                <h3 class="text-h4 mt-1 mb-2" style="font-size: 18px; color: var(--color-primary);">${t.title}</h3>
                <p class="text-body text-muted">${t.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Evidence Framework -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mx-auto text-center mb-8">
            <span class="text-label">${e.evidenceFramework.eyebrow}</span>
            <h2 class="text-h2 mt-2 mb-3">${e.evidenceFramework.headline}</h2>
          </div>

          <div class="grid grid-5 gap-3">
            ${e.evidenceFramework.steps.map(t=>`
              <div class="card" style="padding: var(--space-4); background: #FFFFFF; border-top: 3px solid var(--color-accent);">
                <span class="badge badge-accent mb-2">Step ${t.step}</span>
                <h4 class="text-h4" style="font-size: 16px; margin-bottom: 4px;">${t.title}</h4>
                <p class="text-small text-muted">${t.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Verified Stories Notice & Policy -->
      <section class="section">
        <div class="container container-narrow">
          <div class="card" style="padding: var(--space-8); border: 2px dashed var(--color-border); background: #FAF5FF; text-align: center;">
            <div class="flex items-center justify-center gap-2 mb-3">
              <span class="text-label" style="color: #7E22CE;">${e.verificationNotice.eyebrow}</span>
              ${M(e.verificationNotice.status)}
            </div>
            <h3 class="text-h3 mb-4" style="font-size: 24px;">${e.verificationNotice.headline}</h3>
            <p class="text-body text-muted max-w-prose mx-auto mb-6">
              ${e.verificationNotice.text}
            </p>
            <div class="p-3" style="background: rgba(255, 255, 255, 0.8); border-radius: var(--radius-sm); display: inline-block;">
              <span class="text-small" style="color: #6B21A8; font-weight: 600;">
                Integrity Rule: Zero fabricated student testimonials, AI headshots, or bought marketing rankings.
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Guardian Perspective -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${e.guardianPerspective.eyebrow}</span>
            <h2 class="text-h2 mt-2">${e.guardianPerspective.headline}</h2>
          </div>

          <div class="grid grid-3 gap-6">
            ${e.guardianPerspective.observations.map(t=>`
              <div class="card">
                <h3 class="text-h4 mb-2" style="font-size: 18px; color: var(--color-ink);">${t.focus}</h3>
                <p class="text-body text-muted">${t.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">${e.cta.headline}</h2>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${e.cta.primary.route}" class="btn btn-primary btn-lg" data-route="${e.cta.primary.route}">
              ${e.cta.primary.label}
            </a>
            <a href="${e.cta.secondary.route}" class="btn btn-outline-white btn-lg" data-route="${e.cta.secondary.route}">
              ${e.cta.secondary.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  `}const ye={hero:{eyebrow:"COMMUNITY & ACCESS INITIATIVE",headline:"The Golden Seat — An Opportunity to Learn.",supporting:"Financial circumstances should not automatically prevent a determined student from accessing SCIFINITY. The Golden Seat provides tuition support to a deserving student in every batch."},principles:{eyebrow:"ELIGIBILITY & MINDSET",headline:"The Right Mindset Matters Most",description:"The Golden Seat is not awarded based on prior privilege or test luck. It is reserved for candidates who demonstrate profound intellectual curiosity and genuine dedication.",criteria:[{title:"Genuine Financial Need",desc:"Students whose families face real financial constraints in accessing small-batch coaching."},{title:"Uncompromising Ambition",desc:"A fierce internal drive to understand, master science and math, and excel academically."},{title:"Academic Discipline",desc:"Punctuality, consistent homework completion, and respect for batchmates and mentor."},{title:"Readiness for Struggle",desc:"A willingness to embrace mistakes as learning milestones during debugging sessions."}]},applicationRoutes:{eyebrow:"APPLICATION PATHWAYS",headline:"Two Pathways to the Golden Seat",pathways:[{number:"01",title:"Direct Student Application",desc:"A student applies directly via our admission portal, specifying their financial context and personal passion for learning.",cta:"Apply Directly"},{number:"02",title:"Batch Peer Nomination",desc:"Enrolled SCIFINITY students can officially nominate a dedicated, hardworking classmate who deserves tuition support.",cta:"Nominate a Peer"}]},applicationWindow:{eyebrow:"APPLICATION SCHEDULE",headline:"Application Windows",text:n.goldenSeat.applicationWindow},evaluationAndCoverage:{evaluator:"Founder Evaluation",evaluatorDesc:"The founder personally interviews every shortlisted candidate to evaluate their learning mindset, curiosity, and sincerity.",coverageTitle:"Coverage Scope",coverageDesc:"The Golden Seat provides 100% tuition coverage for the enrolled program."},accountability:{eyebrow:"RESPONSIBILITY & CONTINUATION",headline:"Continuation Criteria",description:"To retain the Golden Seat throughout the academic programme, the student must fulfill the following approved criteria:",criteria:n.goldenSeat.continuationCriteria},cta:{headline:"Apply for the Golden Seat or Nominate a Deserving Student",primary:{label:"Apply for Golden Seat",route:"/admission?type=golden-seat"},secondary:{label:"Explore Our System",route:"/system"}}};function ve(){const e=ye;return`
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero" style="background: linear-gradient(180deg, #FFFDF7 0%, var(--color-background) 100%);">
        <div class="container container-narrow text-center">
          <span class="badge badge-gold mb-3">${e.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4" style="color: #1F2937;">${e.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto" style="color: #4B5563;">${e.hero.supporting}</p>
          <div class="mt-6 flex gap-4 justify-center flex-wrap">
            <a href="/admission?type=golden-seat" class="btn btn-gold btn-lg" data-route="/admission">
              Apply for the Golden Seat &rarr;
            </a>
            <a href="/admission?type=nomination" class="btn btn-secondary btn-lg" data-route="/admission">
              Nominate a Peer
            </a>
          </div>
        </div>
      </section>

      <!-- Eligibility & Mindset -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label" style="color: #B45309;">${e.principles.eyebrow}</span>
            <h2 class="text-h2 mt-2">${e.principles.headline}</h2>
            <p class="text-lead text-muted mt-2">${e.principles.description}</p>
          </div>

          <div class="grid grid-2 gap-6">
            ${e.principles.criteria.map(t=>`
              <div class="card card-gold">
                <h3 class="text-h3" style="font-size: 20px; color: #92400E; margin-bottom: 8px;">${t.title}</h3>
                <p class="text-body text-muted">${t.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Two Pathways to Apply -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mx-auto text-center mb-8">
            <span class="text-label">${e.applicationRoutes.eyebrow}</span>
            <h2 class="text-h2 mt-2">${e.applicationRoutes.headline}</h2>
          </div>

          <div class="grid grid-2 gap-8">
            ${e.applicationRoutes.pathways.map(t=>`
              <div class="card card-interactive" style="padding: var(--space-6);">
                <span class="badge badge-primary mb-3">Pathway ${t.number}</span>
                <h3 class="text-h3" style="font-size: 22px; margin-bottom: 8px;">${t.title}</h3>
                <p class="text-body text-muted mb-6">${t.desc}</p>
                <a href="/admission?type=${t.number==="01"?"golden-seat":"nomination"}" class="btn btn-secondary btn-sm" data-route="/admission">
                  ${t.cta} &rarr;
                </a>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Application Schedule & Evaluation -->
      <section class="section">
        <div class="container">
          <div class="grid grid-3 gap-6">
            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">${e.applicationWindow.eyebrow}</span>
              <h3 class="text-h3 mt-2 mb-3" style="font-size: 20px;">${e.applicationWindow.headline}</h3>
              <p class="text-body text-muted">${e.applicationWindow.text}</p>
            </div>

            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">EVALUATION PROCESS</span>
              <h3 class="text-h3 mt-2 mb-3" style="font-size: 20px;">${e.evaluationAndCoverage.evaluator}</h3>
              <p class="text-body text-muted">${e.evaluationAndCoverage.evaluatorDesc}</p>
            </div>

            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">BENEFIT SCOPE</span>
              <h3 class="text-h3 mt-2 mb-3" style="font-size: 20px;">${e.evaluationAndCoverage.coverageTitle}</h3>
              <p class="text-body text-muted">${e.evaluationAndCoverage.coverageDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Accountability & Approved Continuation Criteria -->
      <section class="section section-surface">
        <div class="container container-narrow">
          <div class="card" style="padding: var(--space-8); border: 1px solid #FEDF89; background: #FFFAEB;">
            <div class="flex items-center justify-between mb-3">
              <span class="text-label" style="color: #B54708;">${e.accountability.eyebrow}</span>
              <span class="status-tag confirmed">Approved Policy</span>
            </div>
            <h3 class="text-h3 mb-3" style="font-size: 22px; color: #7A2E0E;">${e.accountability.headline}</h3>
            <p class="text-body mb-4" style="color: #7A2E0E;">
              ${e.accountability.description}
            </p>
            <ul class="flex flex-col gap-3">
              ${e.accountability.criteria.map(t=>`
                <li class="flex items-start gap-2" style="font-size: 15px; color: #7A2E0E;">
                  <span style="font-weight: 700; color: #B45309;">&bull;</span>
                  <span>${t}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">${e.cta.headline}</h2>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${e.cta.primary.route}" class="btn btn-gold btn-lg" data-route="${e.cta.primary.route}">
              ${e.cta.primary.label}
            </a>
            <a href="${e.cta.secondary.route}" class="btn btn-outline-white btn-lg" data-route="${e.cta.secondary.route}">
              ${e.cta.secondary.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  `}const fe={hero:{eyebrow:"FREE KNOWLEDGE REPOSITORY",headline:"The Vault — Learn Smarter.",supporting:"Information is everywhere. The challenge is knowing what matters, how to use it and how to turn it into understanding. The Vault is SCIFINITY’s free online resource space for practical tips and tricks.",accessNotice:"Free and open to anyone with an internet connection."},categories:[{id:"all",name:"All Resources"},{id:"study-tips",name:"Study Tips"},{id:"exam-tips",name:"Exam Tips"},{id:"physics-tips",name:"Physics Tips"},{id:"math-tricks",name:"Mathematics Tricks"},{id:"board-solutions",name:"Board Questions & Solutions (Planned)"}],resources:[{id:"vault-01",title:"The First 15 Minutes: Deconstructing Complex Physics Problems",category:"Physics Tips",level:"SSC & HSC",status:"CONFIRMED",description:"A step-by-step diagnostic method to visualize constraints and identify governing physical laws before writing down equations.",readTime:"6 min read"},{id:"vault-02",title:"Calculus Intuition: Why Integration is More Than Reversed Differentiation",category:"Mathematics Tricks",level:"HSC & Admission",status:"CONFIRMED",description:"Understanding Riemann sums, accumulation mechanics, and graphical shortcuts for high-speed university entrance exams.",readTime:"8 min read"},{id:"vault-03",title:"The Error Log Method: How to Turn Wrong Answers into High Exam Scores",category:"Study Tips",level:"All Levels",status:"CONFIRMED",description:"A disciplined framework for categorizing mistakes into calculation slips, missing prerequisites, and conceptual misunderstandings.",readTime:"5 min read"},{id:"vault-04",title:"Managing High-Stakes Time Allocation in Admission Tests",category:"Exam Tips",level:"Admission Test",status:"CONFIRMED",description:"How to triage question papers, avoid time sinks on deceptive questions, and preserve emotional composure under pressure.",readTime:"7 min read"},{id:"vault-05",title:"Vector Decomposition in Non-Orthogonal Coordinate Frames",category:"Physics Tips",level:"HSC & Admission",status:"CONFIRMED",description:"Breaking down inclined planes and multi-body rotational forces using geometric symmetry.",readTime:"10 min read"},{id:"vault-06",title:"Mastering Trigonometric Substituted Proofs in Algebra",category:"Mathematics Tricks",level:"SSC & HSC",status:"CONFIRMED",description:"Transforming algebraic inequalities and nested radicals through trigonometric identities.",readTime:"6 min read"}],plannedExpansion:{eyebrow:"FUTURE ROADMAP",headline:"Comprehensive Board & Admission Question Bank",description:"We are currently developing a curated repository of past SSC, HSC, and University Admission exam questions featuring complete, step-by-step conceptual derivations.",status:"PLANNED"},cta:{headline:"Want Personalized Mentorship in Physics & Math?",primary:{label:"Explore Academic Programs",route:"/programs"},secondary:{label:"Apply for Admission",route:"/admission"}}};function xe(){const e=fe;return`
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${e.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4">${e.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto mb-4">${e.hero.supporting}</p>
          <span class="badge badge-accent">${e.hero.accessNotice}</span>
        </div>
      </section>

      <!-- Category Filter Pills & Resource Repository -->
      <section class="section">
        <div class="container">
          <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span class="text-label">RESOURCE REPOSITORY</span>
              <h2 class="text-h2 mt-2">Analytical Tips & Frameworks</h2>
            </div>
            
            <div class="flex gap-2 flex-wrap" id="vaultCategoryFilters">
              ${e.categories.map((t,a)=>`
                <button type="button" class="btn btn-sm ${a===0?"btn-primary":"btn-secondary"} vault-filter-btn" data-category="${t.name}">
                  ${t.name}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Resource Cards Grid -->
          <div class="grid grid-3 gap-6" id="vaultGrid">
            ${e.resources.map(t=>`
              <div class="card card-interactive flex flex-col justify-between" data-category="${t.category}">
                <div>
                  <div class="flex items-center justify-between mb-3">
                    <span class="badge badge-accent">${t.category}</span>
                    <span class="text-small text-muted">${t.level}</span>
                  </div>
                  <h3 class="text-h4 mb-3" style="font-size: 19px;">${t.title}</h3>
                  <p class="text-body text-muted mb-4" style="font-size: 15px;">${t.description}</p>
                </div>
                <div class="flex items-center justify-between pt-3" style="border-top: 1px solid var(--color-border-subtle);">
                  <span class="text-small text-muted">${t.readTime}</span>
                  <span class="text-small" style="color: var(--color-primary); font-weight: 600;">Free Access &rarr;</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Planned Expansion Notice -->
      <section class="section section-surface">
        <div class="container container-narrow">
          <div class="card" style="padding: var(--space-8); border: 1px solid #BAE6FD; background: #F0F9FF; text-align: center;">
            <div class="flex items-center justify-center gap-2 mb-3">
              <span class="text-label" style="color: #0284C7;">${e.plannedExpansion.eyebrow}</span>
              ${M(e.plannedExpansion.status)}
            </div>
            <h3 class="text-h3 mb-3" style="color: #0369A1;">${e.plannedExpansion.headline}</h3>
            <p class="text-body max-w-prose mx-auto" style="color: #0C4A6E;">
              ${e.plannedExpansion.description}
            </p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">${e.cta.headline}</h2>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${e.cta.primary.route}" class="btn btn-primary btn-lg" data-route="${e.cta.primary.route}">
              ${e.cta.primary.label}
            </a>
            <a href="${e.cta.secondary.route}" class="btn btn-outline-white btn-lg" data-route="${e.cta.secondary.route}">
              ${e.cta.secondary.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  `}const Se={hero:{eyebrow:"PHYSICAL CENTERS",headline:"Where the Learning Happens.",supporting:"SCIFINITY operates from two dedicated Dhaka locations: Uttara and Patuatuli. Both centers follow the exact same educational philosophy, 15-student batch limit, and mentor-led learning system."},sharedSystemPrinciples:{eyebrow:"STANDARDIZED QUALITY",headline:"Identical Academic Rigor Across Both Hubs",points:[{title:"Strict Batch Limit",desc:"Maximum 15 students per batch at both centers—no overcrowded classrooms."},{title:"Founder-Led Teaching",desc:"The founder personally leads physical instruction across core science and math subjects at both branches."},{title:"Alternate-Day Synchronization",desc:"Uttara (Sat/Mon/Wed) and Patuatuli (Sun/Tue/Thu) operate on standardized batch timings."},{title:"Semicircular Layout",desc:"Custom semicircular desk seating designed for direct eye contact and instant question feedback."}]},locationsList:[{id:"uttara",name:"Uttara Center",city:"Dhaka-1230, Bangladesh",status:"CONFIRMED",addressRequired:n.locations.uttara.fullLocation,daysSchedule:n.locations.uttara.scheduleDays,facilityNote:n.locations.uttara.facilitiesStatus,batches:["Dawn: 7:00 AM – 8:30 AM","Zenith: 8:45 AM – 10:15 AM","Prime: 3:30 PM – 5:00 PM","Vesper: 5:15 PM – 6:45 PM"]},{id:"patuatuli",name:"Patuatuli Center",city:"Dhaka-1100, Bangladesh",status:"CONFIRMED",addressRequired:n.locations.patuatuli.fullLocation,daysSchedule:n.locations.patuatuli.scheduleDays,facilityNote:n.locations.patuatuli.facilitiesStatus,batches:["Dawn: 7:00 AM – 8:30 AM","Zenith: 8:45 AM – 10:15 AM","Prime: 3:30 PM – 5:00 PM","Vesper: 5:15 PM – 6:45 PM"]}],standardTimings:[{name:"Dawn Batch",time:n.schedules.dawnTiming},{name:"Zenith Batch",time:n.schedules.zenithTiming},{name:"Prime Batch",time:n.schedules.primeTiming},{name:"Vesper Batch",time:n.schedules.vesperTiming}],mapNotice:{text:"Google Maps links have not yet been provided. Interactive map embeds will be activated once official links are supplied.",status:"PLACEHOLDER"},cta:{headline:"Secure Your Seat in an Upcoming Batch",primary:{label:"Apply for Admission",route:"/admission"},secondary:{label:"Explore Programs",route:"/programs"}}};function we(){const e=Se;return`
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${e.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4">${e.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto">${e.hero.supporting}</p>
        </div>
      </section>

      <!-- Shared Standards -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${e.sharedSystemPrinciples.eyebrow}</span>
            <h2 class="text-h2 mt-2">${e.sharedSystemPrinciples.headline}</h2>
          </div>

          <div class="grid grid-4 gap-4">
            ${e.sharedSystemPrinciples.points.map(t=>`
              <div class="card" style="padding: var(--space-4);">
                <h3 class="text-h4 mb-2" style="font-size: 17px; color: var(--color-primary);">${t.title}</h3>
                <p class="text-small text-muted">${t.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Location Hubs Grid -->
      <section class="section section-surface">
        <div class="container">
          <div class="grid grid-2 gap-8">
            ${e.locationsList.map(t=>`
              <div class="card" style="padding: var(--space-6);">
                <div class="flex items-center justify-between mb-3">
                  <div>
                    <h3 class="text-h3" style="font-size: 24px;">${t.name}</h3>
                    <span class="text-small text-muted">${t.city}</span>
                  </div>
                  <span class="status-tag confirmed">Confirmed Center</span>
                </div>

                <div class="flex flex-col gap-4 mt-4">
                  <!-- Address Box -->
                  <div class="p-3" style="background: var(--color-surface-muted); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                    <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 4px;">Official Location:</span>
                    <span style="font-size: 16px; font-weight: 600; color: var(--color-ink);">${t.addressRequired}</span>
                  </div>

                  <!-- Days Schedule -->
                  <div class="p-3" style="background: #F0FDF4; border-radius: var(--radius-sm); border: 1px solid #BBF7D0;">
                    <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 2px; color: #166534;">Class Days:</span>
                    <strong style="font-size: 15px; color: #15803D;">${t.daysSchedule}</strong>
                  </div>

                  <!-- Batch Timings -->
                  <div>
                    <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 6px;">Daily Batch Timings:</span>
                    <div class="grid grid-2 gap-2">
                      ${t.batches.map(a=>`
                        <div class="p-2" style="background: var(--color-surface-muted); border-radius: 4px; font-size: 13px; font-weight: 500;">
                          ${a}
                        </div>
                      `).join("")}
                    </div>
                  </div>

                  <!-- Facilities Notice -->
                  <div class="p-3" style="background: var(--color-surface-muted); border-radius: var(--radius-sm); font-size: 12px; color: var(--color-text-muted);">
                    <span class="text-label" style="font-size: 10px; display: block; margin-bottom: 2px;">Classroom Facility:</span>
                    Strict 15-student semicircular seating with direct line-of-sight engagement.
                  </div>
                </div>

                <div class="mt-6 pt-4" style="border-top: 1px solid var(--color-border);">
                  <a href="/admission?loc=${t.id}" class="btn btn-primary btn-sm w-full" data-route="/admission">
                    Apply for ${t.name} Placement &rarr;
                  </a>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Standard Batch Schedule Reference Table -->
      <section class="section">
        <div class="container container-narrow">
          <div class="card" style="padding: var(--space-6); background: #FFFFFF;">
            <span class="text-label mb-2" style="display: block;">STANDARDIZED TIME SLOTS</span>
            <h3 class="text-h3 mb-4" style="font-size: 20px;">Master Daily Schedule Across Batches</h3>
            <div class="grid grid-4 gap-3">
              ${e.standardTimings.map(t=>`
                <div class="p-3 text-center" style="background: var(--color-surface-muted); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                  <strong style="display: block; font-size: 14px; color: var(--color-primary);">${t.name}</strong>
                  <span style="font-size: 13px; color: var(--color-ink); font-weight: 600; margin-top: 4px; display: block;">${t.time}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </section>

      <!-- Map & Directions Placeholder -->
      <section class="section section-surface">
        <div class="container container-narrow">
          <div class="card" style="padding: var(--space-8); border: 2px dashed var(--color-border); text-align: center; background: #F8FAFC;">
            <div class="flex items-center justify-center gap-2 mb-3">
              <span class="text-label">MAPS & DIRECTIONS</span>
              ${M(e.mapNotice.status)}
            </div>
            <h3 class="text-h3 mb-3" style="font-size: 20px;">Google Maps Integration</h3>
            <p class="text-body text-muted max-w-prose mx-auto">
              ${e.mapNotice.text}
            </p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">${e.cta.headline}</h2>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${e.cta.primary.route}" class="btn btn-primary btn-lg" data-route="${e.cta.primary.route}">
              ${e.cta.primary.label}
            </a>
            <a href="${e.cta.secondary.route}" class="btn btn-outline-white btn-lg" data-route="${e.cta.secondary.route}">
              ${e.cta.secondary.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  `}const z={hero:{eyebrow:"APPLICATION & ENROLLMENT",headline:"Ready to Learn Differently?",supporting:"If you want to understand what you learn, work through your mistakes and develop more effective ways to study, start by telling us why you want to join SCIFINITY."},mindsetRequirement:{eyebrow:"WHO CAN APPLY",headline:"Anyone with the Right Mindset",description:"We do not select students solely based on top grades. The single non-negotiable requirement is a genuine willingness to understand, participate actively, complete homework, and embrace intellectual struggle."},processSteps:[{step:"01",title:"Application",desc:"Submit your details, preferred location, and personal motivation below."},{step:"02",title:"Evaluation & Dialogue",desc:"The mentor reviews your intent and discusses learning expectations with you and your guardians."},{step:"03",title:"Batch Allocation",desc:"Placement into an appropriate 15-student batch (Dawn, Zenith, Prime, or Vesper)."},{step:"04",title:"Initial Orientation",desc:"Setting baseline expectations, study habits, and personal academic goals."},{step:"05",title:"Learning & Diagnosis",desc:"Commence active classroom learning, debugging loops, and topic mastery tests."}],studentCommitments:["Attend all sessions punctually and prepared.","Complete all assigned homework and diagnostic practice tasks.","Participate voluntarily in explanation sessions and error debugging.","Take personal ownership of academic growth and intellectual honesty."],parentRole:{headline:"The Guardian’s Role",description:"Parents ensure home study environments are conducive to focus, verify homework completion, and support their student during challenging diagnostic revisions."},formSpecs:{programs:[{value:"SSC",label:"SSC Program (Classes 9–10)"},{value:"HSC",label:"HSC Program (Classes 11–12)"},{value:"Admission Test",label:"University / Engineering Admission Test"}],locations:[{value:"Uttara",label:"Uttara Center (Dhaka)"},{value:"Patuatuli",label:"Patuatuli Center (Dhaka)"}],batches:[{value:"Dawn",label:"Batch Dawn (Morning / Alternate Days)"},{value:"Zenith",label:"Batch Zenith (Mid-day / Alternate Days)"},{value:"Prime",label:"Batch Prime (Afternoon / Alternate Days)"},{value:"Vesper",label:"Batch Vesper (Evening / Alternate Days)"}]}};function Ce(){const e=z.formSpecs;return`
    <div class="card" style="padding: var(--space-8); box-shadow: var(--shadow-md); background: #FFFFFF; border: 1px solid var(--color-border);" id="admissionFormContainer">
      <div class="mb-6">
        <div class="flex items-center justify-between">
          <span class="badge badge-primary">Admission Application</span>
          <span class="status-tag placeholder" title="Submission endpoint pending owner backend configuration">[SUBMISSION ENDPOINT PENDING]</span>
        </div>
        <h3 class="text-h3" style="font-size: 24px; margin-top: 8px;">Apply for SCIFINITY Batch Placement</h3>
        <p class="text-body text-muted" style="font-size: 15px;">
          Small batches of 15 students ensure rigorous, personalized mentorship. Please complete all fields with sincerity.
        </p>
      </div>

      <form id="scifinityAdmissionForm" novalidate>
        <!-- Anti-Spam Honeypot Field (Hidden from humans) -->
        <div style="display: none !important;" aria-hidden="true">
          <label for="_website_hp">Leave this empty</label>
          <input type="text" id="_website_hp" name="_website_hp" tabindex="-1" autocomplete="off">
        </div>

        <!-- Full Name -->
        <div class="form-group">
          <label for="fullName" class="form-label">
            Full Name <span class="required-indicator">*</span>
          </label>
          <input type="text" id="fullName" name="fullName" class="form-input" placeholder="e.g. Tanvir Ahmed" required autocomplete="name">
          <div class="form-error-msg" id="fullNameError" style="display: none;"></div>
        </div>

        <!-- Academic Program -->
        <div class="form-group">
          <label for="currentProgram" class="form-label">
            Target Academic Program <span class="required-indicator">*</span>
          </label>
          <select id="currentProgram" name="currentProgram" class="form-select" required>
            <option value="">-- Select Target Program --</option>
            ${e.programs.map(t=>`<option value="${t.value}">${t.label}</option>`).join("")}
          </select>
          <div class="form-error-msg" id="currentProgramError" style="display: none;"></div>
        </div>

        <!-- Target Subjects (Checkbox Group) -->
        <div class="form-group">
          <label class="form-label">
            Target Subjects of Focus <span class="required-indicator">*</span>
          </label>
          <div class="grid grid-2 gap-2 mt-1">
            <label class="flex items-center gap-2" style="font-size: 15px; cursor: pointer;">
              <input type="checkbox" name="targetSubjects" value="Higher Mathematics" checked> Higher Mathematics
            </label>
            <label class="flex items-center gap-2" style="font-size: 15px; cursor: pointer;">
              <input type="checkbox" name="targetSubjects" value="Physics" checked> Physics
            </label>
            <label class="flex items-center gap-2" style="font-size: 15px; cursor: pointer;">
              <input type="checkbox" name="targetSubjects" value="Chemistry" checked> Chemistry
            </label>
            <label class="flex items-center gap-2" style="font-size: 15px; cursor: pointer;">
              <input type="checkbox" name="targetSubjects" value="General Mathematics"> General Mathematics (SSC only)
            </label>
          </div>
        </div>

        <!-- Phone Number -->
        <div class="form-group">
          <label for="phoneNumber" class="form-label">
            Contact Phone Number <span class="required-indicator">*</span>
          </label>
          <input type="tel" id="phoneNumber" name="phoneNumber" class="form-input" placeholder="e.g. +880 1712 345678" required autocomplete="tel">
          <div class="form-error-msg" id="phoneNumberError" style="display: none;"></div>
        </div>

        <div class="grid grid-2 gap-4">
          <!-- Preferred Location -->
          <div class="form-group">
            <label for="preferredLocation" class="form-label">
              Preferred Center <span class="required-indicator">*</span>
            </label>
            <select id="preferredLocation" name="preferredLocation" class="form-select" required>
              <option value="">-- Select Center --</option>
              ${e.locations.map(t=>`<option value="${t.value}">${t.label}</option>`).join("")}
            </select>
            <div class="form-error-msg" id="preferredLocationError" style="display: none;"></div>
          </div>

          <!-- Preferred Batch -->
          <div class="form-group">
            <label for="preferredBatch" class="form-label">
              Preferred Batch <span class="required-indicator">*</span>
            </label>
            <select id="preferredBatch" name="preferredBatch" class="form-select" required>
              <option value="">-- Select Batch --</option>
              ${e.batches.map(t=>`<option value="${t.value}">${t.label}</option>`).join("")}
            </select>
            <div class="form-error-msg" id="preferredBatchError" style="display: none;"></div>
          </div>
        </div>

        <!-- Reason for Applying -->
        <div class="form-group">
          <div class="flex items-center justify-between">
            <label for="reasonForApplying" class="form-label">
              Why do you want to study at SCIFINITY? <span class="required-indicator">*</span>
            </label>
            <span class="text-small text-muted" id="charCount">0 / 250 min</span>
          </div>
          <textarea id="reasonForApplying" name="reasonForApplying" rows="4" class="form-textarea" placeholder="Tell us about your learning goals, what you find difficult in current study routines, and why you want conceptual mentorship..." required></textarea>
          <div class="form-error-msg" id="reasonForApplyingError" style="display: none;"></div>
          <p class="form-help-text">We read every statement carefully to understand your mindset and motivation.</p>
        </div>

        <!-- Technical Endpoint Status Notice Box -->
        <div class="p-3 mb-6" style="background: var(--color-surface-muted); border: 1px dashed var(--color-border); border-radius: var(--radius-sm); font-size: 13px; color: var(--color-text-muted);">
          <strong>Submission Endpoint:</strong> <span class="status-tag placeholder">[PENDING OWNER BACKEND ENDPOINT CONFIGURATION]</span>
          <p class="text-small text-muted mt-1">Form inputs are strictly validated on client and prepared for webhook/API integration.</p>
        </div>

        <button type="submit" class="btn btn-primary btn-lg w-full" id="submitBtn">
          <span id="btnSpinner" style="display: none; width: 16px; height: 16px; border: 2px solid #FFFFFF; border-top-color: transparent; border-radius: 50%; animation: spin 0.8s linear infinite; margin-right: 8px;"></span>
          <span id="btnText">Submit Application for Evaluation</span>
        </button>
      </form>

      <!-- Success State Container -->
      <div id="formSuccessState" style="display: none; text-align: center; padding: var(--space-6);">
        <div style="width: 56px; height: 56px; border-radius: 50%; background: var(--color-success-bg); color: var(--color-success); display: inline-flex; align-items: center; justify-content: center; font-size: 28px; margin-bottom: var(--space-4);">
          ✓
        </div>
        <h3 class="text-h3" style="font-size: 22px; margin-bottom: 8px;">Application Validation Complete</h3>
        <p class="text-body text-muted mb-4" id="successApplicantText">
          Thank you. Your application details have been validated.
        </p>

        <div class="p-3 mb-6" style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: var(--radius-sm); font-size: 13px; color: #166534; text-align: left; max-width: 480px; margin-left: auto; margin-right: auto;">
          <div class="flex items-center justify-between mb-1">
            <strong>Application Reference:</strong>
            <code id="successRefCode" style="font-weight: 700; background: #DCFCE7; padding: 2px 6px; border-radius: 4px;">SCF-DEMO</code>
          </div>
          <p class="text-small" style="margin-top: 4px; color: #15803D;" id="successModeNotice">
            <strong>System Status:</strong> Validated in test prototype mode. Live submission endpoint will be activated once owner configures the backend destination.
          </p>
        </div>

        <button type="button" class="btn btn-secondary btn-sm" id="resetFormBtn">
          Submit Another Application
        </button>
      </div>
    </div>

    <style>
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    </style>
  `}function Ie(){const e=z;return`
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${e.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4">${e.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto">${e.hero.supporting}</p>
        </div>
      </section>

      <!-- Mindset & Selective Character -->
      <section class="section">
        <div class="container container-narrow">
          <div class="card" style="padding: var(--space-6); border-left: 4px solid var(--color-primary); background: #F8FAFC;">
            <span class="text-label">${e.mindsetRequirement.eyebrow}</span>
            <h2 class="text-h3 mt-2 mb-3">${e.mindsetRequirement.headline}</h2>
            <p class="text-lead text-muted">${e.mindsetRequirement.description}</p>
          </div>
        </div>
      </section>

      <!-- 5-Step Application Progression -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mx-auto text-center mb-8">
            <span class="text-label">PROCESS PROGRESSION</span>
            <h2 class="text-h2 mt-2 mb-3">How We Welcome New Students</h2>
          </div>

          <div class="grid grid-5 gap-3">
            ${e.processSteps.map(t=>`
              <div class="card" style="padding: var(--space-4); background: #FFFFFF; border-top: 3px solid var(--color-primary);">
                <span class="badge badge-primary mb-2">Stage ${t.step}</span>
                <h4 class="text-h4" style="font-size: 16px; margin-bottom: 4px;">${t.title}</h4>
                <p class="text-small text-muted">${t.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Main Form & Expectations Grid -->
      <section class="section">
        <div class="container">
          <div class="grid grid-sidebar gap-8 items-start">
            <!-- Sidebar: Commitments & Guardian Role -->
            <div class="flex flex-col gap-6">
              <div class="card" style="padding: var(--space-6);">
                <span class="text-label">STUDENT COMMITMENT</span>
                <h3 class="text-h4 mt-2 mb-3">What We Expect From You</h3>
                <ul class="flex flex-col gap-3">
                  ${e.studentCommitments.map(t=>`
                    <li class="text-small text-muted" style="display: flex; gap: 8px;">
                      <span style="color: var(--color-primary); font-weight: 700;">✓</span>
                      <span>${t}</span>
                    </li>
                  `).join("")}
                </ul>
              </div>

              <div class="card" style="padding: var(--space-6);">
                <span class="text-label">GUARDIAN PARTNERSHIP</span>
                <h3 class="text-h4 mt-2 mb-3">${e.parentRole.headline}</h3>
                <p class="text-small text-muted">${e.parentRole.description}</p>
              </div>
            </div>

            <!-- Form Container -->
            <div>
              ${Ce()}
            </div>
          </div>
        </div>
      </section>
    </main>
  `}function Ee(){const e=n.contact,t=n.locations.patuatuli,a=n.privacyPolicy;return`
    <main id="main-content">
      <section class="section section-hero">
        <div class="container container-prose text-center">
          <span class="text-label mb-2" style="display: inline-block;">INSTITUTIONAL GOVERNANCE</span>
          <h1 class="text-h1 display-title mb-3">Privacy Policy</h1>
          <div class="flex items-center justify-center gap-4 text-small text-muted flex-wrap">
            <span><strong>Effective Date:</strong> <span class="status-tag review">${a.effectiveDate}</span></span>
            <span>&bull;</span>
            <span><strong>Last Updated:</strong> ${a.lastUpdated}</span>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container container-prose">
          <div class="card" style="padding: var(--space-8); background: #FFFFFF; line-height: 1.8;">
            
            <h2 class="text-h3 mb-3" style="font-size: 22px;">1. Introduction & Scope</h2>
            <p class="text-body text-muted mb-6">
              SCIFINITY ("we", "our", or "the Institution") is committed to safeguarding the privacy and personal data of our students, prospective applicants, and their legal guardians. This Privacy Policy outlines the types of information we collect, how it is utilized to facilitate small-batch academic mentorship, and the strict security measures governing its storage.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 22px;">2. Information We Collect</h2>
            <p class="text-body text-muted mb-3">To process batch admissions and deliver tailored instruction, we collect:</p>
            <ul class="flex flex-col gap-2 mb-6" style="padding-left: 20px;">
              <li class="text-body text-muted">&bull; <strong>Applicant Identification:</strong> Student's full name, academic institution, target board/examination class (SSC, HSC, or Admission Test), and preferred center.</li>
              <li class="text-body text-muted">&bull; <strong>Contact Coordinates:</strong> Primary phone number, WhatsApp contact number, and guardian contact coordinates.</li>
              <li class="text-body text-muted">&bull; <strong>Academic Baseline & Motivation:</strong> Statements of intent, learning difficulties, and academic objectives submitted through our admission form.</li>
            </ul>

            <h2 class="text-h3 mb-3" style="font-size: 22px;">3. How We Use Your Information</h2>
            <p class="text-body text-muted mb-3">The personal information provided to SCIFINITY is used strictly for legitimate educational purposes, including:</p>
            <ul class="flex flex-col gap-2 mb-6" style="padding-left: 20px;">
              <li class="text-body text-muted">&bull; Evaluating applicant mindset and allocating 15-student cohort placements.</li>
              <li class="text-body text-muted">&bull; Facilitating direct mentor-student communication regarding batch schedules, diagnostic test results, and homework reviews.</li>
              <li class="text-body text-muted">&bull; Emergency contact and guardian notifications regarding student attendance and safety.</li>
              <li class="text-body text-muted">&bull; Evaluating eligibility for the Golden Seat tuition-free support initiative.</li>
            </ul>

            <h2 class="text-h3 mb-3" style="font-size: 22px;">4. Confidentiality & Non-Disclosure</h2>
            <p class="text-body text-muted mb-6">
              SCIFINITY does not sell, rent, lease, or commercially trade student or guardian contact details to third-party advertisers or commercial entities. Personal information is only disclosed if strictly required by applicable law, court order, or to protect the safety of students on our premises.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 22px;">5. Data Storage & Security Measures</h2>
            <p class="text-body text-muted mb-6">
              We implement industry-standard administrative, physical, and technical safeguards to protect collected data against unauthorized access, loss, alteration, or misuse. Access to applicant records is restricted strictly to the founder and authorized administrative personnel.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 22px;">6. Minor & Guardian Consent</h2>
            <p class="text-body text-muted mb-6">
              As SCIFINITY caters to secondary (SSC) and higher-secondary (HSC) learners, applications submitted by minor candidates are accepted on the condition that the candidate has obtained explicit consent from their parent or legal guardian. Guardians retain the right to review any information stored about their student.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 22px;">7. Data Retention Policy</h2>
            <p class="text-body text-muted mb-6">
              Student records are retained for the duration of the enrolled academic program and for an appropriate post-course evaluation period. Prospective applicant records that do not lead to enrollment are archived or purged in accordance with our administrative guidelines.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 22px;">8. Your Rights & Access Requests</h2>
            <p class="text-body text-muted mb-6">
              Students and guardians may request access to, correction of, or deletion of their submitted personal information by contacting our administrative team at the coordinates listed below.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 22px;">9. Official Contact Details</h2>
            <div class="p-4" style="background: var(--color-surface-muted); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
              <p class="text-body mb-2"><strong>SCIFINITY Educational Administration</strong></p>
              <p class="text-small text-muted mb-1"><strong>Official Email:</strong> <a href="mailto:${e.email}" style="color: var(--color-primary);">${e.email}</a></p>
              <p class="text-small text-muted mb-1"><strong>Official Telephone:</strong> <a href="tel:${e.phone}" style="color: var(--color-primary);">${e.phone}</a></p>
              <p class="text-small text-muted mb-1"><strong>WhatsApp:</strong> <a href="https://wa.me/88${e.whatsapp.replace(/\D/g,"")}" target="_blank" rel="noopener noreferrer" style="color: var(--color-primary);">${e.whatsapp}</a></p>
              <p class="text-small text-muted"><strong>Official Address:</strong> ${t.fullLocation}</p>
            </div>

            <div class="mt-8 pt-4" style="border-top: 1px solid var(--color-border);">
              <a href="/" class="btn btn-secondary btn-sm" data-route="/">
                &larr; Return to Home
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  `}function $e(){const e=n.contact,t=n.locations.patuatuli,a=n.termsOfAdmission;return`
    <main id="main-content">
      <section class="section section-hero">
        <div class="container container-prose text-center">
          <span class="text-label mb-2" style="display: inline-block;">INSTITUTIONAL GOVERNANCE</span>
          <h1 class="text-h1 display-title mb-3">Terms & Conditions</h1>
          <div class="flex items-center justify-center gap-4 text-small text-muted flex-wrap">
            <span><strong>Effective Date:</strong> <span class="status-tag review">${a.effectiveDate}</span></span>
            <span>&bull;</span>
            <span><strong>Last Updated:</strong> ${a.lastUpdated}</span>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container container-prose">
          <div class="card" style="padding: var(--space-8); background: #FFFFFF; line-height: 1.8;">
            
            <h2 class="text-h3 mb-3" style="font-size: 20px;">1. Introduction & Acceptance of Terms</h2>
            <p class="text-body text-muted mb-6">
              Welcome to SCIFINITY. These Terms & Conditions ("Terms") govern student application, enrollment, attendance, and code of conduct across our academic programs (SSC, HSC, and Admission Test). By submitting an application or enrolling in a SCIFINITY cohort, students and their legal guardians agree to be bound by these Terms.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px;">2. Eligibility & Application Process</h2>
            <p class="text-body text-muted mb-6">
              Admission into SCIFINITY is mindset-driven and selective. Meeting basic academic criteria does not guarantee batch placement. All shortlisted candidates are evaluated by the founder to ensure alignment with our rigorous, conceptual learning philosophy.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px;">3. Small-Batch Policy & Strict Seating (Max 15)</h2>
            <p class="text-body text-muted mb-6">
              To preserve individual attention and active error debugging, every SCIFINITY batch is strictly capped at a maximum of fifteen (15) students. Seats cannot be transferred, reserved for unverified candidates, or held indefinitely without confirmed enrollment.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px;">4. Batch Scheduling & Dual Centers</h2>
            <p class="text-body text-muted mb-6">
              Classes operate across two physical hubs: Uttara Center (Sector 9, Dhaka-1230 on Sat/Mon/Wed) and Patuatuli Center (Patuatuli Lane, Kotwali, Dhaka-1100 on Sun/Tue/Thu). Daily timings adhere to the standardized Dawn (7:00–8:30 AM), Zenith (8:45–10:15 AM), Prime (3:30–5:00 PM), and Vesper (5:15–6:45 PM) schedules.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px;">5. Academic Expectations & Student Conduct</h2>
            <p class="text-body text-muted mb-6">
              Enrolled students are expected to arrive punctually, complete assigned diagnostic problem sets, actively participate during oral explanation sessions, and treat batchmates and instructors with dignity and intellectual sincerity.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px;">6. Disciplinary Action & Termination</h2>
            <p class="text-body text-muted mb-6">
              SCIFINITY maintains a zero-tolerance policy for academic dishonesty, chronic unexcused absences, disruptive behavior in the semicircular classroom, or harassment of peers. Serious infractions may result in immediate suspension or expulsion without refund.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px;">7. Fee Structure & Payment Guidelines</h2>
            <p class="text-body text-muted mb-6">
              Tuition fees are structured on a per-program and per-session basis. Fees must be settled according to the established schedule prior to class commencement. Detailed fee schedules are provided directly to shortlisted candidates during the final admission interview.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px;">8. Cancellation & Refund Policy</h2>
            <p class="text-body text-muted mb-6">
              Because each batch is limited to 15 students, seat allocation directly impacts cohort planning. Fee refund requests prior to course commencement are handled according to institutional administrative guidelines. Fees paid for ongoing sessions are non-refundable once classes commence.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px;">9. The Golden Seat Programme</h2>
            <p class="text-body text-muted mb-6">
              One deserving student in every batch is awarded 100% tuition coverage under the Golden Seat initiative. To retain the Golden Seat, the student must achieve at least 80% marks in their first examination held three months after receiving the seat (conducted by SCIFINITY or the student’s institution) and maintain exemplary conduct. Significant behavioral or disciplinary issues may result in withdrawal of the seat.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px;">10. Intellectual Property & Course Materials</h2>
            <p class="text-body text-muted mb-6">
              All pedagogical frameworks, diagnostic worksheets, Vault notes, and examination materials provided by SCIFINITY are the exclusive intellectual property of SCIFINITY. Unauthorized copying, distribution, or commercial reuse is strictly prohibited.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px;">11. Student Safety & Supervision</h2>
            <p class="text-body text-muted mb-6">
              SCIFINITY ensures a safe, supervised physical environment during scheduled class hours. Parents and guardians are responsible for student transportation to and from the physical centers.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px;">12. Privacy & Data Handling</h2>
            <p class="text-body text-muted mb-6">
              Personal information gathered during application and enrollment is managed strictly under the terms of our Privacy Policy.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px;">13. Limitation of Liability</h2>
            <p class="text-body text-muted mb-6">
              While SCIFINITY provides systematic pedagogical mentorship to foster conceptual mastery, academic examination outcomes ultimately depend on individual student effort, discipline, and consistent independent study.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px;">14. Amendments & Policy Updates</h2>
            <p class="text-body text-muted mb-6">
              SCIFINITY reserves the right to amend these Terms and schedule allocations when operationally necessary. Any modifications will be posted to the website and communicated to active cohorts.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px;">15. Governing Law & Jurisdiction</h2>
            <p class="text-body text-muted mb-6">
              These Terms shall be governed by and construed in accordance with the applicable laws of the People's Republic of Bangladesh.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px;">16. Contact & Grievance Redressal</h2>
            <div class="p-4" style="background: var(--color-surface-muted); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
              <p class="text-body mb-2"><strong>SCIFINITY Academic Governance</strong></p>
              <p class="text-small text-muted mb-1"><strong>Email:</strong> <a href="mailto:${e.email}" style="color: var(--color-primary);">${e.email}</a></p>
              <p class="text-small text-muted mb-1"><strong>Phone:</strong> <a href="tel:${e.phone}" style="color: var(--color-primary);">${e.phone}</a></p>
              <p class="text-small text-muted mb-1"><strong>WhatsApp:</strong> <a href="https://wa.me/88${e.whatsapp.replace(/\D/g,"")}" target="_blank" rel="noopener noreferrer" style="color: var(--color-primary);">${e.whatsapp}</a></p>
              <p class="text-small text-muted"><strong>Address:</strong> ${t.fullLocation}</p>
            </div>

            <div class="mt-8 pt-4" style="border-top: 1px solid var(--color-border);">
              <a href="/" class="btn btn-secondary btn-sm" data-route="/">
                &larr; Return to Home
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  `}function Te(e,t){document.title=e.includes("SCIFINITY")?e:`${e} — SCIFINITY`;let a=document.querySelector('meta[name="description"]');a||(a=document.createElement("meta"),a.setAttribute("name","description"),document.head.appendChild(a)),a.setAttribute("content",t);let s=document.querySelector('meta[property="og:title"]');s&&s.setAttribute("content",document.title);let i=document.querySelector('meta[property="og:description"]');i&&i.setAttribute("content",t);let o=document.querySelector('link[rel="canonical"]');o||(o=document.createElement("link"),o.setAttribute("rel","canonical"),document.head.appendChild(o)),o.setAttribute("href",window.location.href.split("?")[0])}function Fe(e){const t={};(!e.fullName||e.fullName.trim().length<2)&&(t.fullName="Please enter your full name (minimum 2 characters)."),e.currentProgram||(t.currentProgram="Please select your target academic program.");const a=e.phoneNumber?e.phoneNumber.trim():"",s=a.replace(/\D/g,""),i=/^[+]?[0-9\s\-().]{7,20}$/.test(a)&&s.length>=7&&s.length<=15;return(!a||!i)&&(t.phoneNumber="Please enter a valid contact phone number (e.g. +880 1712 345678 or 01712345678)."),e.preferredLocation||(t.preferredLocation="Please select a preferred center (Uttara or Patuatuli)."),e.preferredBatch||(t.preferredBatch="Please select your preferred batch."),(!e.reasonForApplying||e.reasonForApplying.trim().length<15)&&(t.reasonForApplying="Please share your reason for applying (minimum 15 characters)."),{isValid:Object.keys(t).length===0,errors:t}}async function Ae(e,t=""){if(t&&t.trim().length>0)return console.warn("[Security] Honeypot trap triggered. Silent rejection."),{success:!1,mode:"LIVE_ENDPOINT",message:"Automated submission rejected.",error:"SPAM_DETECTED"};const a=`SCF-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random()*899+100)}`;return await new Promise(s=>setTimeout(s,600)),console.info("[SCIFINITY Diagnostic] Application submitted in prototype mode:",{referenceId:a,applicant:e.fullName,program:e.currentProgram,location:e.preferredLocation,batch:e.preferredBatch,subjects:e.targetSubjects,phone:e.phoneNumber}),{success:!0,mode:"UNCONFIGURED_PROTOTYPE",message:"Application captured in local prototype mode. The production submission endpoint is pending backend configuration by the owner.",applicantName:e.fullName,referenceId:a}}const j={"/":{title:"SCIFINITY — Where Learning Becomes Understanding",description:"SCIFINITY is a mentor-led educational ecosystem for SSC, HSC and Admission Test students—built to make learning meaningful, analytical and engaging.",render:te},"/why-scifinity":{title:"Why SCIFINITY — Educational Philosophy & Origin",description:"Learn why SCIFINITY was founded in 2014 to replace rote-learning routines with first-principles comprehension and direct mentorship.",render:se},"/system":{title:"Our System — Student-Centered Learning & Debugging",description:"Discover the 9-stage learning loop, 10-Minute Bridge, semicircular classroom architecture, and error debugging pedagogy at SCIFINITY.",render:re},"/programs":{title:"Academic Programs — SSC, HSC & Admission Test",description:"Structured small-batch preparation (max 15 students) in General Mathematics, Higher Mathematics, Physics, and Chemistry.",render:ce},"/programs/ssc":{title:"SSC Program (Classes 9–10) — SCIFINITY",description:"Build robust conceptual foundations behind the SSC syllabus instead of memorizing formulas blindly.",render:de},"/programs/hsc":{title:"HSC Program (Classes 11–12) — SCIFINITY",description:"Rigorous Higher Math, Physics, and Chemistry for HSC board excellence and early university admission integration.",render:pe},"/programs/admission":{title:"Admission Test Program — SCIFINITY",description:"Engineering university and university A-Unit admission preparation grounded in first-principles analytical intuition.",render:ue},"/founder":{title:"Founder & Mentor — Leadership & Teaching Background",description:"Meet the founder: BSc in EEE from IUT, mentoring Dhaka students since 2014 across core physics and mathematics.",render:he},"/success":{title:"Success & Stories — Evidence & Mastery Outcomes",description:"How SCIFINITY defines genuine student mastery beyond raw test scores through understanding, diagnosis, and long-term independence.",render:be},"/golden-seat":{title:"The Golden Seat — Tuition Support Opportunity",description:"Tuition support for one deserving, determined student in every batch through direct application or peer nomination.",render:ve},"/vault":{title:"The Vault — Free Study, Exam, Physics & Math Tips",description:"Free public repository of analytical frameworks, examination strategies, and problem-solving tips for secondary and higher-secondary learners.",render:xe},"/locations":{title:"Locations — Uttara & Patuatuli Centers (Dhaka)",description:"Explore SCIFINITY’s dual Dhaka hubs operating on shared alternate-day schedules with strict 15-student batch limits.",render:we},"/admission":{title:"Admission Application — Apply for SCIFINITY Cohorts",description:"Apply for a selective 15-student batch at our Uttara or Patuatuli centers. Mindset-driven application and evaluation.",render:Ie},"/privacy":{title:"Privacy Policy — SCIFINITY",description:"Information management and student data privacy practices at SCIFINITY.",render:Ee},"/terms":{title:"Terms of Admission — SCIFINITY",description:"Academic expectations, batch attendance, and code of conduct.",render:$e}};class Ne{constructor(t){C(this,"appElement");this.appElement=t,this.init()}init(){window.addEventListener("popstate",()=>this.handleRoute()),document.addEventListener("click",t=>this.handleLinkClick(t)),window.addEventListener("keydown",t=>{if(t.key==="Escape"&&l.isMobileNavOpen){l.setMobileNavOpen(!1);const a=document.getElementById("mobileDrawer");a&&a.classList.remove("open")}}),l.subscribe(()=>{this.render()}),this.handleRoute()}navigate(t){window.location.pathname+window.location.search!==t&&(window.history.pushState({},"",t),this.handleRoute())}handleLinkClick(t){var s;const a=t.target.closest("[data-route], [data-nav-link]");if(a&&a.getAttribute("href")&&!((s=a.getAttribute("href"))!=null&&s.startsWith("http"))){t.preventDefault();const i=a.getAttribute("data-route")||a.getAttribute("href")||"/";l.isMobileNavOpen&&l.setMobileNavOpen(!1),this.navigate(i)}}handleRoute(){window.scrollTo({top:0,behavior:"instant"}),this.render()}render(){const t=window.location.pathname||"/",a=j[t]||j["/"];Te(a.title,a.description),this.appElement.innerHTML=`
      ${Q(t)}
      ${Z(t)}
      ${a.render()}
      ${K()}
    `,this.attachEventListeners()}attachEventListeners(){document.querySelectorAll("[data-lang]").forEach(c=>{c.addEventListener("click",d=>{const u=d.currentTarget.getAttribute("data-lang");l.setLanguage(u)})});const t=document.getElementById("mobileNavToggle"),a=document.getElementById("mobileDrawerClose"),s=document.getElementById("mobileDrawer");t&&t.addEventListener("click",()=>{l.toggleMobileNav(),s&&s.classList.toggle("open",l.isMobileNavOpen)}),a&&a.addEventListener("click",()=>{l.setMobileNavOpen(!1),s&&s.classList.remove("open")}),s&&s.addEventListener("click",c=>{c.target===s&&(l.setMobileNavOpen(!1),s.classList.remove("open"))});const i=document.querySelectorAll(".flow-step-card");i.forEach(c=>{c.addEventListener("click",()=>{i.forEach(d=>d.classList.remove("selected")),c.classList.add("selected")})});const o=document.querySelectorAll(".vault-filter-btn");o.forEach(c=>{c.addEventListener("click",d=>{const u=d.currentTarget,v=u.getAttribute("data-category");o.forEach(h=>{h.classList.remove("btn-primary"),h.classList.add("btn-secondary")}),u.classList.remove("btn-secondary"),u.classList.add("btn-primary"),document.querySelectorAll("#vaultGrid .card").forEach(h=>{const g=h,x=g.getAttribute("data-category");v==="All Resources"||x===v?g.style.display="flex":g.style.display="none"})})});const r=document.getElementById("scifinityAdmissionForm");if(r){const c=new URLSearchParams(window.location.search),d=c.get("prog"),u=c.get("loc"),v=c.get("type"),f=document.getElementById("currentProgram"),h=document.getElementById("preferredLocation"),g=document.getElementById("reasonForApplying");d&&f&&(d==="ssc"?f.value="SSC":d==="hsc"?f.value="HSC":d==="admission"&&(f.value="Admission Test")),u&&h&&(u==="uttara"?h.value="Uttara":u==="patuatuli"&&(h.value="Patuatuli")),v==="golden-seat"&&g?g.placeholder="Please explain your financial context and personal passion for learning (Golden Seat Application)...":v==="nomination"&&g&&(g.placeholder="Please specify the name of the peer you are nominating, why they deserve the Golden Seat, and their academic diligence...");const x=document.getElementById("reasonForApplying"),S=document.getElementById("charCount");x&&S&&x.addEventListener("input",()=>{const E=x.value.length;S.textContent=`${E} / 250 min`,S.style.color=E>=25?"var(--color-success)":"var(--color-text-muted)"}),r.addEventListener("submit",async E=>{E.preventDefault();const b=new FormData(r),U=b.getAll("targetSubjects"),Y=b.get("_website_hp")||"",O={fullName:b.get("fullName")||"",currentProgram:b.get("currentProgram")||"",targetSubjects:U,phoneNumber:b.get("phoneNumber")||"",preferredLocation:b.get("preferredLocation")||"",preferredBatch:b.get("preferredBatch")||"",reasonForApplying:b.get("reasonForApplying")||""},{isValid:G,errors:W}=Fe(O);if(["fullName","currentProgram","phoneNumber","preferredLocation","preferredBatch","reasonForApplying"].forEach(m=>{const y=document.getElementById(`${m}Error`),p=document.getElementById(m);y&&(y.style.display="none"),p&&p.classList.remove("is-invalid")}),!G){Object.entries(W).forEach(([m,y])=>{const p=document.getElementById(`${m}Error`),w=document.getElementById(m);p&&y&&(p.textContent=y,p.style.display="block"),w&&w.classList.add("is-invalid")});return}const $=document.getElementById("submitBtn"),T=document.getElementById("btnSpinner"),F=document.getElementById("btnText");$&&T&&F&&($.disabled=!0,T.style.display="inline-block",F.textContent="Submitting Application...");try{const m=await Ae(O,Y),y=document.getElementById("admissionFormContainer"),p=document.getElementById("formSuccessState"),w=document.getElementById("successRefCode"),R=document.getElementById("successApplicantText");if(r&&p&&y){r.style.display="none",p.style.display="block",w&&m.referenceId&&(w.textContent=m.referenceId),R&&(R.textContent=`Thank you, ${m.applicantName||"Applicant"}. Your application has been logged.`);const B=document.getElementById("resetFormBtn");B&&B.addEventListener("click",()=>{r.reset(),S&&(S.textContent="0 / 250 min"),r.style.display="block",p.style.display="none"})}}finally{$&&T&&F&&($.disabled=!1,T.style.display="none",F.textContent="Submit Application for Evaluation")}})}}}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("app");e?new Ne(e):console.error("Root #app element not found")});
//# sourceMappingURL=index-DVBGuzWO.js.map

/* ==========================================================================
   LEGAL / PRIVACY POLICY VIEW CONTROLLER
   Source: SCIFINITY Official Content Configuration Update
   ========================================================================== */

import { SCIFINITY_OWNER_DATA } from '../content/placeholders.ts';

export function renderPrivacyPage(): string {
  const contact = SCIFINITY_OWNER_DATA.contact;
  const location = SCIFINITY_OWNER_DATA.locations.patuatuli;
  const policy = SCIFINITY_OWNER_DATA.privacyPolicy;

  return `
    <main id="main-content">
      <section class="section section-hero">
        <div class="container container-prose text-center">
          <span class="text-label mb-2" style="display: inline-block;">INSTITUTIONAL GOVERNANCE</span>
          <h1 class="text-h1 display-title mb-3">Privacy Policy</h1>
          <div class="flex items-center justify-center gap-4 text-small text-muted flex-wrap">
            <span><strong>Effective Date:</strong> <span class="status-tag review">${policy.effectiveDate}</span></span>
            <span>&bull;</span>
            <span><strong>Last Updated:</strong> ${policy.lastUpdated}</span>
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
              <p class="text-small text-muted mb-1"><strong>Official Email:</strong> <a href="mailto:${contact.email}" style="color: var(--color-primary);">${contact.email}</a></p>
              <p class="text-small text-muted mb-1"><strong>Official Telephone:</strong> <a href="tel:${contact.phone}" style="color: var(--color-primary);">${contact.phone}</a></p>
              <p class="text-small text-muted mb-1"><strong>WhatsApp:</strong> <a href="https://wa.me/88${contact.whatsapp.replace(/\D/g, '')}" target="_blank" rel="noopener noreferrer" style="color: var(--color-primary);">${contact.whatsapp}</a></p>
              <p class="text-small text-muted"><strong>Official Address:</strong> ${location.fullLocation}</p>
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
  `;
}

/* ==========================================================================
   LEGAL / TERMS & CONDITIONS VIEW CONTROLLER
   Source: SCIFINITY Official Content Configuration Update
   ========================================================================== */

import { SCIFINITY_OWNER_DATA } from '../content/placeholders.ts';

export function renderTermsPage(): string {
  const contact = SCIFINITY_OWNER_DATA.contact;
  const location = SCIFINITY_OWNER_DATA.locations.patuatuli;
  const terms = SCIFINITY_OWNER_DATA.termsOfAdmission;

  return `
    <main id="main-content">
      <section class="section section-hero">
        <div class="container container-prose text-center">
          <span class="text-label mb-2" style="display: inline-block;">INSTITUTIONAL GOVERNANCE</span>
          <h1 class="text-h1 display-title mb-3">Terms & Conditions</h1>
          <div class="flex items-center justify-center gap-4 text-small text-muted flex-wrap">
            <span><strong>Effective Date:</strong> <span class="status-tag review">${terms.effectiveDate}</span></span>
            <span>&bull;</span>
            <span><strong>Last Updated:</strong> ${terms.lastUpdated}</span>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container container-prose">
          <div class="card card-elevated" style="padding: var(--space-8); background: #FFFFFF; line-height: 1.8;">
            
            <h2 class="text-h3 mb-3" style="font-size: 20px; color: var(--color-ink);">1. Introduction & Acceptance of Terms</h2>
            <p class="text-body text-muted mb-6" style="line-height: 1.7;">
              Welcome to SCIFINITY. These Terms & Conditions ("Terms") govern student application, enrollment, attendance, and code of conduct across our academic programs (SSC, HSC, and Admission Test). By submitting an application or enrolling in a SCIFINITY cohort, students and their legal guardians agree to be bound by these Terms.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px; color: var(--color-ink);">2. Eligibility & Application Process</h2>
            <p class="text-body text-muted mb-6" style="line-height: 1.7;">
              Admission into SCIFINITY is mindset-driven and selective. Meeting basic academic criteria does not guarantee batch placement. All shortlisted candidates are evaluated by the founder to ensure alignment with our rigorous, conceptual learning philosophy.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px; color: var(--color-ink);">3. Small-Batch Policy & Strict Seating (Max 15)</h2>
            <p class="text-body text-muted mb-6" style="line-height: 1.7;">
              To preserve individual attention and active error debugging, every SCIFINITY batch is strictly capped at a maximum of fifteen (15) students. Seats cannot be transferred, reserved for unverified candidates, or held indefinitely without confirmed enrollment.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px; color: var(--color-ink);">4. Batch Scheduling & Dual Centers</h2>
            <p class="text-body text-muted mb-6" style="line-height: 1.7;">
              Classes operate across two physical hubs: Uttara Center (Sector 9, Dhaka-1230 on Sat/Mon/Wed) and Patuatuli Center (Patuatuli Lane, Kotwali, Dhaka-1100 on Sun/Tue/Thu). Daily timings adhere to the standardized Dawn (7:00–8:30 AM), Zenith (8:45–10:15 AM), Prime (3:30–5:00 PM), and Vesper (5:15–6:45 PM) schedules.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px; color: var(--color-ink);">5. Academic Expectations & Student Conduct</h2>
            <p class="text-body text-muted mb-6" style="line-height: 1.7;">
              Enrolled students are expected to arrive punctually, complete assigned diagnostic problem sets, actively participate during oral explanation sessions, and treat batchmates and instructors with dignity and intellectual sincerity.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px; color: var(--color-ink);">6. Disciplinary Action & Termination</h2>
            <p class="text-body text-muted mb-6" style="line-height: 1.7;">
              SCIFINITY maintains a zero-tolerance policy for academic dishonesty, chronic unexcused absences, disruptive behavior in the semicircular classroom, or harassment of peers. Serious infractions may result in immediate suspension or expulsion without refund.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px; color: var(--color-ink);">7. Fee Structure & Payment Guidelines</h2>
            <p class="text-body text-muted mb-6" style="line-height: 1.7;">
              Tuition fees are structured on a per-program and per-session basis. Fees must be settled according to the established schedule prior to class commencement. Detailed fee schedules are provided directly to shortlisted candidates during the final admission interview.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px; color: var(--color-ink);">8. Cancellation & Refund Policy</h2>
            <p class="text-body text-muted mb-6" style="line-height: 1.7;">
              Because each batch is limited to 15 students, seat allocation directly impacts cohort planning. Fee refund requests prior to course commencement are handled according to institutional administrative guidelines. Fees paid for ongoing sessions are non-refundable once classes commence.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px; color: var(--color-ink);">9. The Golden Seat Programme</h2>
            <p class="text-body text-muted mb-6" style="line-height: 1.7;">
              One deserving student in every batch is awarded 100% tuition coverage under the Golden Seat initiative. To retain the Golden Seat, the student must achieve at least 80% marks in their first examination held three months after receiving the seat (conducted by SCIFINITY or the student’s institution) and maintain exemplary conduct. Significant behavioral or disciplinary issues may result in withdrawal of the seat.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px; color: var(--color-ink);">10. Intellectual Property & Course Materials</h2>
            <p class="text-body text-muted mb-6" style="line-height: 1.7;">
              All pedagogical frameworks, diagnostic worksheets, Vault notes, and examination materials provided by SCIFINITY are the exclusive intellectual property of SCIFINITY. Unauthorized copying, distribution, or commercial reuse is strictly prohibited.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px; color: var(--color-ink);">11. Student Safety & Supervision</h2>
            <p class="text-body text-muted mb-6" style="line-height: 1.7;">
              SCIFINITY ensures a safe, supervised physical environment during scheduled class hours. Parents and guardians are responsible for student transportation to and from the physical centers.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px; color: var(--color-ink);">12. Privacy & Data Handling</h2>
            <p class="text-body text-muted mb-6" style="line-height: 1.7;">
              Personal information gathered during application and enrollment is managed strictly under the terms of our Privacy Policy.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px; color: var(--color-ink);">13. Limitation of Liability</h2>
            <p class="text-body text-muted mb-6" style="line-height: 1.7;">
              While SCIFINITY provides systematic pedagogical mentorship to foster conceptual mastery, academic examination outcomes ultimately depend on individual student effort, discipline, and consistent independent study.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px; color: var(--color-ink);">14. Amendments & Policy Updates</h2>
            <p class="text-body text-muted mb-6" style="line-height: 1.7;">
              SCIFINITY reserves the right to amend these Terms and schedule allocations when operationally necessary. Any modifications will be posted to the website and communicated to active cohorts.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px; color: var(--color-ink);">15. Governing Law & Jurisdiction</h2>
            <p class="text-body text-muted mb-6" style="line-height: 1.7;">
              These Terms shall be governed by and construed in accordance with the applicable laws of the People's Republic of Bangladesh.
            </p>

            <h2 class="text-h3 mb-3" style="font-size: 20px; color: var(--color-ink);">16. Contact & Grievance Redressal</h2>
            <div class="p-4" style="background: var(--color-surface-muted); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
              <p class="text-body mb-2" style="color: var(--color-ink);"><strong>SCIFINITY Academic Governance</strong></p>
              <p class="text-small text-muted mb-1"><strong>Email:</strong> <a href="mailto:${contact.email}" style="color: var(--color-primary); font-weight: 600;">${contact.email}</a></p>
              <p class="text-small text-muted mb-1"><strong>Phone:</strong> <a href="tel:${contact.phone}" style="color: var(--color-primary); font-weight: 600;">${contact.phone}</a></p>
              <p class="text-small text-muted mb-1"><strong>WhatsApp:</strong> <a href="https://wa.me/88${contact.whatsapp.replace(/\D/g, '')}" target="_blank" rel="noopener noreferrer" style="color: var(--color-primary); font-weight: 600;">${contact.whatsapp}</a></p>
              <p class="text-small text-muted"><strong>Address:</strong> ${location.fullLocation}</p>
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

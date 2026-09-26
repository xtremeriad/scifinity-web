/* ==========================================================================
   PAGE — SCIFINITY CONNECT VIEW CONTROLLER
   Student & Guardian Consultation
   ========================================================================== */

import { CONNECT_CONTENT } from '../content/en/connect.ts';
import { SCIFINITY_OWNER_DATA } from '../content/placeholders.ts';

export function renderConnectPage(): string {
  const c = CONNECT_CONTENT;
  const contact = SCIFINITY_OWNER_DATA.contact;
  const loc = SCIFINITY_OWNER_DATA.locations;

  return `
    <main id="main-content">
      <!-- ================================================================= -->
      <!-- HERO SECTION                                                      -->
      <!-- ================================================================= -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <div class="flex items-center justify-center gap-2 mb-3">
            <span class="text-label" style="display: inline-block;">
              ${c.identity.eyebrow}
            </span>
            <span class="badge badge-primary">${c.hero.appointmentLabel}</span>
          </div>

          <h1 class="text-h1 display-title mb-2" style="color: var(--color-ink); font-size: clamp(32px, 4.5vw, 52px);">
            ${c.identity.heading}
          </h1>
          <p class="text-lead mb-4" style="font-size: 20px; font-weight: 600; color: var(--color-primary);">
            ${c.identity.subheading}
          </p>

          <div class="card mb-6" style="padding: var(--space-6); background: #FFFFFF; border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); text-align: left;">
            <h2 class="text-h2 mb-4" style="font-size: 28px; color: var(--color-ink); line-height: 1.3;">
              ${c.hero.headline}
            </h2>
            <p class="text-body mb-4" style="font-size: 16px; line-height: 1.7; color: var(--color-text);">
              ${c.hero.supportingParagraphs[0]}
            </p>
            <p class="text-body mb-0" style="font-size: 16px; line-height: 1.7; color: var(--color-text);">
              ${c.hero.supportingParagraphs[1]}
            </p>
          </div>

          <div class="flex gap-4 justify-center items-center flex-wrap">
            <a href="#book-consultation" class="btn btn-primary btn-lg">
              ${c.hero.cta} &rarr;
            </a>
            <a href="https://wa.me/88${contact.whatsapp.replace(/\D/g, '')}?text=Hello%20SCIFINITY,%20I%20would%20like%20to%20request%20a%20Consultation%20Appointment" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg">
              💬 Direct WhatsApp Request
            </a>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- WHO CAN BOOK A CONSULTATION?                                      -->
      <!-- ================================================================= -->
      <section class="section">
        <div class="container">
          <div class="text-center max-w-prose mx-auto mb-8">
            <span class="text-label">ELIGIBILITY &amp; REACH</span>
            <h2 class="text-h2 mt-2 mb-3">${c.whoCanBook.heading}</h2>
          </div>

          <div class="grid grid-3 gap-6 mb-6">
            ${c.whoCanBook.cards.map(card => `
              <div class="card card-interactive" style="padding: var(--space-6); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <span class="badge badge-primary mb-3">${card.title}</span>
                  <h3 class="text-h4 mb-3" style="font-size: 19px; color: var(--color-ink);">${card.title}</h3>
                  <p class="text-body text-muted" style="font-size: 14.5px; line-height: 1.6;">
                    ${card.desc}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="p-4 max-w-prose mx-auto text-center" style="background: var(--color-surface-muted); border: 1px solid var(--color-border); border-radius: var(--radius-sm);">
            <p class="text-small text-muted" style="margin: 0; line-height: 1.55;">
              ${c.whoCanBook.eligibilityNote}
            </p>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- WHAT HAPPENS BEYOND THE CLASSROOM?                                -->
      <!-- ================================================================= -->
      <section class="section section-surface" id="beyond-classroom">
        <div class="container container-narrow">
          <div class="card" style="padding: var(--space-8); background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%); border: 1px solid var(--color-border); text-align: center;">
            <span class="text-label mb-3" style="color: var(--color-primary); display: inline-block;">
              OPENNESS &amp; EMOTIONAL REASSURANCE
            </span>
            <h2 class="text-h2 mb-4" style="font-size: 30px; color: var(--color-ink);">
              ${c.beyondTheClassroom.heading}
            </h2>

            <div class="p-4 mb-5" style="background: #EFF6FF; border-left: 4px solid var(--color-primary); border-radius: var(--radius-sm); text-align: left;">
              <p style="font-size: 19px; font-weight: 700; color: #1E3A8A; margin: 0; line-height: 1.5;">
                “${c.beyondTheClassroom.supportingLine}”
              </p>
            </div>

            <p class="text-body max-w-prose mx-auto" style="font-size: 16.5px; line-height: 1.7; color: var(--color-text);">
              ${c.beyondTheClassroom.body}
            </p>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- THE SCIFINITY CONNECT SUPPORT CYCLE                               -->
      <!-- ================================================================= -->
      <section class="section" id="support-cycle">
        <div class="container">
          <div class="text-center max-w-prose mx-auto mb-8">
            <span class="text-label">STRUCTURED METHODOLOGY</span>
            <h2 class="text-h2 mt-2 mb-3">${c.supportCycle.heading}</h2>
            <p class="text-lead" style="font-size: 16px;">
              An ongoing, mentor-led support process designed to identify root causes, adapt guidance, and monitor meaningful progress.
            </p>
          </div>

          <div class="grid grid-4 gap-4 mb-4">
            ${c.supportCycle.stages.slice(0, 4).map(stage => `
              <div class="card" style="padding: var(--space-5); background: #FFFFFF; border-top: 3px solid var(--color-primary);">
                <span class="badge badge-primary mb-2" style="font-size: 11px; padding: 2px 8px;">STAGE ${stage.step}</span>
                <h3 class="text-h4 mb-2" style="font-size: 17px; color: var(--color-ink);">${stage.title}</h3>
                <p class="text-body text-muted" style="font-size: 14px; line-height: 1.55; margin: 0;">
                  ${stage.desc}
                </p>
              </div>
            `).join('')}
          </div>

          <div class="grid grid-3 gap-4">
            ${c.supportCycle.stages.slice(4, 7).map(stage => `
              <div class="card" style="padding: var(--space-5); background: #FFFFFF; border-top: 3px solid #6366F1;">
                <span class="badge badge-accent mb-2" style="font-size: 11px; padding: 2px 8px;">STAGE ${stage.step}</span>
                <h3 class="text-h4 mb-2" style="font-size: 17px; color: var(--color-ink);">${stage.title}</h3>
                <p class="text-body text-muted" style="font-size: 14px; line-height: 1.55; margin: 0;">
                  ${stage.desc}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- THE SCIFINITY FEEDBACK LOOP                                       -->
      <!-- ================================================================= -->
      <section class="section section-surface" id="feedback-loop">
        <div class="container container-narrow">
          <div class="card" style="padding: var(--space-7); background: #FFFFFF; border: 1.5px solid var(--color-gold-border);">
            <div class="text-center mb-6">
              <span class="badge badge-gold mb-2">FOLLOW-THROUGH PEDAGOGY</span>
              <h2 class="text-h2 mt-1 mb-3" style="color: #78350F;">${c.feedbackLoop.heading}</h2>
            </div>

            <!-- Visual Flow Bar -->
            <div class="p-4 mb-6" style="background: #FFFBEB; border-radius: var(--radius-md); border: 1px solid var(--color-gold-border);">
              <div class="flex items-center justify-center gap-2 flex-wrap text-center" style="font-size: 14px; font-weight: 700; color: #92400E;">
                ${c.feedbackLoop.steps.map((step, idx) => `
                  <span class="p-2" style="background: #FFFFFF; border-radius: 4px; border: 1px solid var(--color-gold-border); box-shadow: var(--shadow-xs);">
                    ${step}
                  </span>
                  ${idx < c.feedbackLoop.steps.length - 1 ? '<span style="color: #D97706; font-size: 16px;">&rarr;</span>' : ''}
                `).join('')}
              </div>
            </div>

            <div class="flex flex-col gap-4 text-left">
              <p class="text-body" style="font-size: 15.5px; line-height: 1.7; color: var(--color-text); margin: 0;">
                ${c.feedbackLoop.explanation[0]}
              </p>
              <p class="text-body" style="font-size: 15.5px; line-height: 1.7; color: var(--color-text); margin: 0;">
                ${c.feedbackLoop.explanation[1]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- WHAT SCIFINITY MAY DO AFTER UNDERSTANDING A PROBLEM               -->
      <!-- ================================================================= -->
      <section class="section">
        <div class="container">
          <div class="text-center max-w-prose mx-auto mb-8">
            <span class="text-label">RESPONSIVE ACTION</span>
            <h2 class="text-h2 mt-2 mb-2">${c.practicalMeasures.heading}</h2>
            <p class="text-small text-muted">${c.practicalMeasures.subheading}</p>
          </div>

          <div class="grid grid-3 gap-4">
            ${c.practicalMeasures.measures.map(m => `
              <div class="card" style="padding: var(--space-5); background: #FFFFFF; border: 1px solid var(--color-border); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <h3 class="text-h4 mb-2" style="font-size: 16px; color: var(--color-primary);">${m.title}</h3>
                  <p class="text-body text-muted" style="font-size: 13.5px; line-height: 1.55; margin: 0;">
                    ${m.desc}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- A PRIVATE CONVERSATION                                            -->
      <!-- ================================================================= -->
      <section class="section section-surface" id="privacy">
        <div class="container container-narrow">
          <div class="card" style="padding: var(--space-7); background: #FFFFFF; border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);">
            <div class="flex items-center gap-2 mb-3">
              <span class="badge badge-accent">CONFIDENTIALITY &amp; TRUST</span>
            </div>
            <h2 class="text-h2 mb-3" style="font-size: 26px; color: var(--color-ink);">${c.privacy.heading}</h2>
            <p class="text-lead mb-3" style="font-size: 16.5px; line-height: 1.65; color: var(--color-text);">
              ${c.privacy.lead}
            </p>
            <p class="text-body text-muted" style="font-size: 15px; line-height: 1.65; margin: 0;">
              ${c.privacy.statement}
            </p>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- BOOK A CONSULTATION & LOCATIONS                                   -->
      <!-- ================================================================= -->
      <section class="section" id="book-consultation">
        <div class="container">
          <div class="grid grid-2 gap-8 items-start">
            <!-- Left Column: Appointment Details & Form CTA -->
            <div class="card" style="padding: var(--space-7); background: #FFFFFF; border: 1px solid var(--color-border);">
              <span class="text-label mb-2" style="display: block; color: var(--color-primary);">APPOINTMENT REQUEST</span>
              <h2 class="text-h2 mb-3" style="font-size: 28px;">${c.booking.heading}</h2>
              <p class="text-body mb-4" style="font-size: 15.5px; line-height: 1.6; color: var(--color-text);">
                ${c.booking.supporting}
              </p>

              <div class="p-4 mb-6" style="background: var(--color-surface-muted); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                <ul class="flex flex-col gap-2" style="list-style: none; padding: 0; margin: 0;">
                  ${c.booking.points.map(p => `
                    <li class="flex items-start gap-2" style="font-size: 13.5px; line-height: 1.5; color: var(--color-text);">
                      <span style="color: var(--color-primary); font-weight: 700;">✓</span>
                      <span>${p}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <div class="flex flex-col gap-3">
                <a href="/admission?type=consultation" class="btn btn-primary btn-md w-full text-center" data-route="/admission?type=consultation">
                  Open Consultation Booking Form &rarr;
                </a>
                <a href="https://wa.me/88${contact.whatsapp.replace(/\D/g, '')}?text=Hello%20SCIFINITY,%20I%20would%20like%20to%20request%20a%20Consultation%20Appointment" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-md w-full text-center">
                  💬 Request Appointment via WhatsApp: ${contact.whatsapp}
                </a>
              </div>
            </div>

            <!-- Right Column: Consultation Locations -->
            <div class="card" style="padding: var(--space-7); background: #FFFFFF; border: 1px solid var(--color-border);">
              <span class="text-label mb-2" style="display: block;">CAMPUS HUBS</span>
              <h2 class="text-h2 mb-3" style="font-size: 28px;">${c.locations.heading}</h2>
              <p class="text-body text-muted mb-5" style="font-size: 15px; line-height: 1.6;">
                ${c.locations.supporting}
              </p>

              <div class="flex flex-col gap-4 mb-6">
                <!-- Uttara Hub -->
                <div class="p-4" style="background: var(--color-surface-muted); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                  <div class="flex items-center justify-between mb-1">
                    <h3 class="text-h4" style="font-size: 18px; color: var(--color-ink);">Uttara Center</h3>
                    <span class="badge badge-primary">By appointment</span>
                  </div>
                  <p class="text-body text-muted mb-2" style="font-size: 14px;">📍 ${loc.uttara.fullLocation}</p>
                  <span class="text-small" style="color: var(--color-text-secondary); font-weight: 500;">
                    Class Days: ${loc.uttara.scheduleDays}
                  </span>
                </div>

                <!-- Patuatuli Hub -->
                <div class="p-4" style="background: var(--color-surface-muted); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                  <div class="flex items-center justify-between mb-1">
                    <h3 class="text-h4" style="font-size: 18px; color: var(--color-ink);">Patuatuli Center</h3>
                    <span class="badge badge-primary">By appointment</span>
                  </div>
                  <p class="text-body text-muted mb-2" style="font-size: 14px;">📍 ${loc.patuatuli.fullLocation}</p>
                  <span class="text-small" style="color: var(--color-text-secondary); font-weight: 500;">
                    Class Days: ${loc.patuatuli.scheduleDays}
                  </span>
                </div>
              </div>

              <div class="pt-4" style="border-top: 1px solid var(--color-border);">
                <p class="text-small text-muted" style="margin: 0; line-height: 1.5;">
                  For general questions before booking, you can also reach us via email at <a href="mailto:${contact.email}" style="color: var(--color-primary); font-weight: 600;">${contact.email}</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- FINAL DIRECT CONTACT CTA                                          -->
      <!-- ================================================================= -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">
            Have a Question or Concern to Discuss?
          </h2>
          <p class="text-lead mb-6 mx-auto" style="color: #94A3B8; max-width: 620px;">
            Consultations are open to students and guardians seeking thoughtful educational direction, academic debugging, and practical support.
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="/admission?type=consultation" class="btn btn-primary btn-lg" data-route="/admission?type=consultation">
              Book a Consultation
            </a>
            <a href="https://wa.me/88${contact.whatsapp.replace(/\D/g, '')}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-white btn-lg">
              💬 WhatsApp: ${contact.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </main>
  `;
}

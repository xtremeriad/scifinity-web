/* ==========================================================================
   PAGE 10 — GOLDEN SEAT VIEW CONTROLLER
   Source: 11_GOLDEN_SEAT.md
   Updated with official verified Golden Seat continuation criteria.
   ========================================================================== */

import { GOLDEN_SEAT_CONTENT } from '../content/en/golden-seat.ts';

export function renderGoldenSeatPage(): string {
  const c = GOLDEN_SEAT_CONTENT;

  return `
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero" style="background: linear-gradient(180deg, #FFFDF7 0%, var(--color-background) 100%);">
        <div class="container container-narrow text-center">
          <span class="badge badge-gold mb-3">${c.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4" style="color: #1F2937;">${c.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto" style="color: #4B5563;">${c.hero.supporting}</p>
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
            <span class="text-label" style="color: #B45309;">${c.principles.eyebrow}</span>
            <h2 class="text-h2 mt-2">${c.principles.headline}</h2>
            <p class="text-lead text-muted mt-2">${c.principles.description}</p>
          </div>

          <div class="grid grid-2 gap-6">
            ${c.principles.criteria.map(cr => `
              <div class="card card-gold">
                <h3 class="text-h3" style="font-size: 20px; color: #92400E; margin-bottom: 8px;">${cr.title}</h3>
                <p class="text-body text-muted">${cr.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Two Pathways to Apply -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mx-auto text-center mb-8">
            <span class="text-label">${c.applicationRoutes.eyebrow}</span>
            <h2 class="text-h2 mt-2">${c.applicationRoutes.headline}</h2>
          </div>

          <div class="grid grid-2 gap-8">
            ${c.applicationRoutes.pathways.map(p => `
              <div class="card card-interactive" style="padding: var(--space-6);">
                <span class="badge badge-primary mb-3">Pathway ${p.number}</span>
                <h3 class="text-h3" style="font-size: 22px; margin-bottom: 8px;">${p.title}</h3>
                <p class="text-body text-muted mb-6">${p.desc}</p>
                <a href="/admission?type=${p.number === '01' ? 'golden-seat' : 'nomination'}" class="btn btn-secondary btn-sm" data-route="/admission">
                  ${p.cta} &rarr;
                </a>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Application Schedule & Evaluation -->
      <section class="section">
        <div class="container">
          <div class="grid grid-3 gap-6">
            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">${c.applicationWindow.eyebrow}</span>
              <h3 class="text-h3 mt-2 mb-3" style="font-size: 20px;">${c.applicationWindow.headline}</h3>
              <p class="text-body text-muted">${c.applicationWindow.text}</p>
            </div>

            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">EVALUATION PROCESS</span>
              <h3 class="text-h3 mt-2 mb-3" style="font-size: 20px;">${c.evaluationAndCoverage.evaluator}</h3>
              <p class="text-body text-muted">${c.evaluationAndCoverage.evaluatorDesc}</p>
            </div>

            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">BENEFIT SCOPE</span>
              <h3 class="text-h3 mt-2 mb-3" style="font-size: 20px;">${c.evaluationAndCoverage.coverageTitle}</h3>
              <p class="text-body text-muted">${c.evaluationAndCoverage.coverageDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Accountability & Approved Continuation Criteria -->
      <section class="section section-surface">
        <div class="container container-narrow">
          <div class="card" style="padding: var(--space-8); border: 1px solid #FEDF89; background: #FFFAEB;">
            <div class="flex items-center justify-between mb-3">
              <span class="text-label" style="color: #B54708;">${c.accountability.eyebrow}</span>
              <span class="status-tag confirmed">Approved Policy</span>
            </div>
            <h3 class="text-h3 mb-3" style="font-size: 22px; color: #7A2E0E;">${c.accountability.headline}</h3>
            <p class="text-body mb-4" style="color: #7A2E0E;">
              ${c.accountability.description}
            </p>
            <ul class="flex flex-col gap-3">
              ${c.accountability.criteria.map(crit => `
                <li class="flex items-start gap-2" style="font-size: 15px; color: #7A2E0E;">
                  <span style="font-weight: 700; color: #B45309;">&bull;</span>
                  <span>${crit}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">${c.cta.headline}</h2>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${c.cta.primary.route}" class="btn btn-gold btn-lg" data-route="${c.cta.primary.route}">
              ${c.cta.primary.label}
            </a>
            <a href="${c.cta.secondary.route}" class="btn btn-outline-white btn-lg" data-route="${c.cta.secondary.route}">
              ${c.cta.secondary.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  `;
}

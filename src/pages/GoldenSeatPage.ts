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
      <section class="section section-hero" style="background: radial-gradient(circle at 50% 15%, rgba(214, 158, 46, 0.1) 0%, transparent 60%), linear-gradient(180deg, #FFFDF8 0%, var(--color-surface) 100%);">
        <div class="container container-narrow text-center">
          <span class="badge badge-gold mb-3" style="font-weight: 700; letter-spacing: 0.06em;">${c.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4" style="color: var(--color-ink);">${c.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto mb-6" style="color: var(--color-text-secondary);">${c.hero.supporting}</p>
          <div class="flex gap-4 justify-center flex-wrap">
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
            <span class="text-label" style="color: var(--color-gold-dark);">${c.principles.eyebrow}</span>
            <h2 class="text-h2 mt-2">${c.principles.headline}</h2>
            <p class="text-lead text-muted mt-2">${c.principles.description}</p>
          </div>

          <div class="grid grid-2 gap-6">
            ${c.principles.criteria.map((cr, idx) => `
              <div class="card card-interactive card-gold" style="padding: var(--space-6); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div class="flex items-center justify-between mb-3">
                    <span class="text-label" style="font-size: 11px; color: var(--color-gold-dark);">CRITERION 0${idx + 1}</span>
                    <span style="color: var(--color-gold-dark); font-size: 16px;">✦</span>
                  </div>
                  <h3 class="text-h3" style="font-size: 20px; color: var(--color-gold-dark); margin-bottom: 8px;">${cr.title}</h3>
                  <p class="text-body text-muted" style="line-height: 1.6;">${cr.desc}</p>
                </div>
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
              <div class="card card-interactive" style="padding: var(--space-7); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <div class="flex items-center justify-between mb-3">
                    <span class="badge badge-primary">Pathway ${p.number}</span>
                    <span class="text-label" style="font-size: 11px;">DIRECT ROUTE</span>
                  </div>
                  <h3 class="text-h3" style="font-size: 22px; margin-bottom: 10px; color: var(--color-ink);">${p.title}</h3>
                  <p class="text-body text-muted mb-6" style="line-height: 1.65;">${p.desc}</p>
                </div>
                <div>
                  <a href="/admission?type=${p.number === '01' ? 'golden-seat' : 'nomination'}" class="btn btn-secondary btn-sm" data-route="/admission">
                    ${p.cta} &rarr;
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Application Schedule & Evaluation -->
      <section class="section">
        <div class="container">
          <div class="grid grid-3 gap-6">
            <div class="card card-interactive" style="padding: var(--space-6);">
              <span class="text-label">${c.applicationWindow.eyebrow}</span>
              <h3 class="text-h3 mt-2 mb-3" style="font-size: 20px; color: var(--color-ink);">${c.applicationWindow.headline}</h3>
              <p class="text-body text-muted" style="line-height: 1.6;">${c.applicationWindow.text}</p>
            </div>

            <div class="card card-interactive" style="padding: var(--space-6);">
              <span class="text-label">EVALUATION PROCESS</span>
              <h3 class="text-h3 mt-2 mb-3" style="font-size: 20px; color: var(--color-ink);">${c.evaluationAndCoverage.evaluator}</h3>
              <p class="text-body text-muted" style="line-height: 1.6;">${c.evaluationAndCoverage.evaluatorDesc}</p>
            </div>

            <div class="card card-interactive" style="padding: var(--space-6);">
              <span class="text-label">BENEFIT SCOPE</span>
              <h3 class="text-h3 mt-2 mb-3" style="font-size: 20px; color: var(--color-ink);">${c.evaluationAndCoverage.coverageTitle}</h3>
              <p class="text-body text-muted" style="line-height: 1.6;">${c.evaluationAndCoverage.coverageDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Accountability & Approved Continuation Criteria -->
      <section class="section section-surface">
        <div class="container container-narrow">
          <div class="card card-elevated" style="padding: var(--space-8); border: 1.5px solid var(--color-gold-border); background: linear-gradient(180deg, #FFFCF2 0%, #FFF9E6 100%);">
            <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
              <span class="text-label" style="color: var(--color-gold-dark);">${c.accountability.eyebrow}</span>
              <span class="status-tag confirmed">Approved Policy</span>
            </div>
            <h3 class="text-h3 mb-3" style="font-size: 24px; color: #7A2E0E;">${c.accountability.headline}</h3>
            <p class="text-body mb-5" style="color: #7A2E0E; line-height: 1.65; font-size: 15.5px;">
              ${c.accountability.description}
            </p>
            <ul class="flex flex-col gap-3" style="list-style: none; padding: 0; margin: 0;">
              ${c.accountability.criteria.map(crit => `
                <li class="flex items-start gap-3" style="font-size: 15px; color: #7A2E0E; line-height: 1.6;">
                  <span style="font-weight: 800; color: #D97706; font-size: 18px; line-height: 1.2;">✦</span>
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

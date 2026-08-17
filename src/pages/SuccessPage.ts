/* ==========================================================================
   PAGE 09 — SUCCESS & STORIES VIEW CONTROLLER
   Source: 10_SUCCESS_AND_STORIES.md
   ========================================================================== */

import { SUCCESS_CONTENT } from '../content/en/success.ts';
import { renderStatusBadge } from '../components/global/StatusBadge.ts';

export function renderSuccessPage(): string {
  const c = SUCCESS_CONTENT;

  return `
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${c.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4">${c.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto">${c.hero.supporting}</p>
        </div>
      </section>

      <!-- 6 Dimensions of Success -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${c.dimensionsOfSuccess.eyebrow}</span>
            <h2 class="text-h2 mt-2">${c.dimensionsOfSuccess.headline}</h2>
          </div>

          <div class="grid grid-3 gap-6">
            ${c.dimensionsOfSuccess.dimensions.map((dim, i) => `
              <div class="card card-interactive">
                <span class="text-label" style="font-size: 11px;">Dimension 0${i + 1}</span>
                <h3 class="text-h4 mt-1 mb-2" style="font-size: 18px; color: var(--color-primary);">${dim.title}</h3>
                <p class="text-body text-muted">${dim.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Evidence Framework -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mx-auto text-center mb-8">
            <span class="text-label">${c.evidenceFramework.eyebrow}</span>
            <h2 class="text-h2 mt-2 mb-3">${c.evidenceFramework.headline}</h2>
          </div>

          <div class="grid grid-5 gap-3">
            ${c.evidenceFramework.steps.map(st => `
              <div class="card" style="padding: var(--space-4); background: #FFFFFF; border-top: 3px solid var(--color-accent);">
                <span class="badge badge-accent mb-2">Step ${st.step}</span>
                <h4 class="text-h4" style="font-size: 16px; margin-bottom: 4px;">${st.title}</h4>
                <p class="text-small text-muted">${st.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Verified Stories Notice & Policy -->
      <section class="section">
        <div class="container container-narrow">
          <div class="card" style="padding: var(--space-8); border: 2px dashed var(--color-border); background: #FAF5FF; text-align: center;">
            <div class="flex items-center justify-center gap-2 mb-3">
              <span class="text-label" style="color: #7E22CE;">${c.verificationNotice.eyebrow}</span>
              ${renderStatusBadge(c.verificationNotice.status)}
            </div>
            <h3 class="text-h3 mb-4" style="font-size: 24px;">${c.verificationNotice.headline}</h3>
            <p class="text-body text-muted max-w-prose mx-auto mb-6">
              ${c.verificationNotice.text}
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
            <span class="text-label">${c.guardianPerspective.eyebrow}</span>
            <h2 class="text-h2 mt-2">${c.guardianPerspective.headline}</h2>
          </div>

          <div class="grid grid-3 gap-6">
            ${c.guardianPerspective.observations.map(obs => `
              <div class="card">
                <h3 class="text-h4 mb-2" style="font-size: 18px; color: var(--color-ink);">${obs.focus}</h3>
                <p class="text-body text-muted">${obs.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">${c.cta.headline}</h2>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${c.cta.primary.route}" class="btn btn-primary btn-lg" data-route="${c.cta.primary.route}">
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

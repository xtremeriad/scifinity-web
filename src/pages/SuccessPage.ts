/* ==========================================================================
   PAGE 09 — SUCCESS & STORIES VIEW CONTROLLER
   Source: 10_SUCCESS_AND_STORIES.md
   SCIFINITY Design System V2.0 — Human & Storytelling Mastery Evidence
   ABSOLUTE CONTENT LOCK: All text, structure & links 100% exact
   ========================================================================== */

import { SUCCESS_CONTENT } from '../content/en/success.ts';
import { renderStatusBadge } from '../components/global/StatusBadge.ts';

export function renderSuccessPage(): string {
  const c = SUCCESS_CONTENT;

  return `
    <main id="main-content">
      <!-- ==================================================================
           Hero: Storytelling & Mastery Atmosphere
           ================================================================== -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="badge badge-primary mb-3" style="padding: 5px 12px; font-size: 12px;">${c.hero.eyebrow}</span>
          <h1 class="text-display mb-4" style="color: var(--color-ink);">${c.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto" style="color: var(--color-text-secondary);">${c.hero.supporting}</p>
        </div>
      </section>

      <!-- ==================================================================
           6 Dimensions of Success (3D Physical Cards)
           ================================================================== -->
      <section class="section section-atmosphere-system">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${c.dimensionsOfSuccess.eyebrow}</span>
            <h2 class="text-h2 mt-2" style="color: var(--color-ink);">${c.dimensionsOfSuccess.headline}</h2>
          </div>

          <div class="grid grid-3 gap-6">
            ${c.dimensionsOfSuccess.dimensions.map((dim, i) => `
              <div class="card card-interactive" style="background: #FFFFFF; border-top: 3.5px solid ${i % 3 === 0 ? 'var(--color-navy)' : i % 3 === 1 ? 'var(--color-teal)' : 'var(--color-purple)'};">
                <span class="badge ${i % 3 === 0 ? 'badge-primary' : i % 3 === 1 ? 'badge-teal' : 'badge-purple'} mb-2">Dimension 0${i + 1}</span>
                <h3 class="text-h4 mt-1 mb-2" style="font-size: 18.5px; color: var(--color-ink);">${dim.title}</h3>
                <p class="text-body text-muted" style="margin: 0; line-height: 1.65;">${dim.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Evidence Framework (5 Steps)
           ================================================================== -->
      <section class="section section-atmosphere-beliefs">
        <div class="container">
          <div class="max-w-prose mx-auto text-center mb-8">
            <span class="text-label">${c.evidenceFramework.eyebrow}</span>
            <h2 class="text-h2 mt-2 mb-3" style="color: var(--color-ink);">${c.evidenceFramework.headline}</h2>
          </div>

          <div class="grid grid-5 gap-4">
            ${c.evidenceFramework.steps.map((st, idx) => `
              <div class="card card-interactive" style="padding: var(--space-5); background: #FFFFFF; border-top: 3px solid ${idx % 2 === 0 ? 'var(--color-teal)' : 'var(--color-navy)'};">
                <span class="badge ${idx % 2 === 0 ? 'badge-teal' : 'badge-primary'} mb-2">Step ${st.step}</span>
                <h4 class="text-h4" style="font-size: 16px; margin-bottom: 6px; color: var(--color-ink);">${st.title}</h4>
                <p class="text-small text-muted" style="margin: 0; line-height: 1.55;">${st.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Verified Stories Notice & Integrity Policy
           ================================================================== -->
      <section class="section section-atmosphere-question">
        <div class="container container-narrow">
          <div class="card card-elevated" style="padding: var(--space-8); border: 1.5px dashed var(--color-purple); background: #FFFFFF; text-align: center; border-radius: var(--radius-lg);">
            <div class="flex items-center justify-center gap-2 mb-3">
              <span class="text-label" style="color: var(--color-purple);">${c.verificationNotice.eyebrow}</span>
              ${renderStatusBadge(c.verificationNotice.status)}
            </div>
            <h3 class="text-h3 mb-4" style="font-size: 24px; color: var(--color-ink);">${c.verificationNotice.headline}</h3>
            <p class="text-body text-muted max-w-prose mx-auto mb-6" style="line-height: 1.7;">
              ${c.verificationNotice.text}
            </p>
            <div class="p-3" style="background: var(--color-purple-subtle); border: 1px solid var(--color-purple-surface); border-radius: var(--radius-sm); display: inline-block;">
              <span class="text-small" style="color: var(--color-purple); font-weight: 700;">
                Integrity Rule: Zero fabricated student testimonials, AI headshots, or bought marketing rankings.
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Guardian Perspective
           ================================================================== -->
      <section class="section section-atmosphere-vault">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${c.guardianPerspective.eyebrow}</span>
            <h2 class="text-h2 mt-2" style="color: var(--color-ink);">${c.guardianPerspective.headline}</h2>
          </div>

          <div class="grid grid-3 gap-6">
            ${c.guardianPerspective.observations.map((obs, idx) => `
              <div class="card card-interactive" style="background: #FFFFFF; border-left: 4px solid ${idx === 0 ? 'var(--color-navy)' : idx === 1 ? 'var(--color-teal)' : 'var(--color-purple)'};">
                <h3 class="text-h4 mb-2" style="font-size: 18.5px; color: var(--color-ink);">${obs.focus}</h3>
                <p class="text-body text-muted" style="margin: 0; line-height: 1.65;">${obs.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           CTA
           ================================================================== -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">${c.cta.headline}</h2>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${c.cta.primary.route}" class="btn btn-primary btn-lg" data-route="${c.cta.primary.route}">
              ${c.cta.primary.label} &rarr;
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

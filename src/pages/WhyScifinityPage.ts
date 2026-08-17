/* ==========================================================================
   PAGE 02 — WHY SCIFINITY VIEW CONTROLLER
   Source: 03_WHY_SCIFINITY.md
   ========================================================================== */

import { WHY_SCIFINITY_CONTENT } from '../content/en/why-scifinity.ts';

export function renderWhyScifinityPage(): string {
  const c = WHY_SCIFINITY_CONTENT;

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

      <!-- The Beginning -->
      <section class="section">
        <div class="container container-prose">
          <span class="text-label">${c.beginning.eyebrow}</span>
          <h2 class="text-h2 mt-2 mb-6">${c.beginning.headline}</h2>
          
          <div class="quote-highlight mb-6">
            ${c.beginning.paragraphs.map(p => `<p class="mb-4 text-body" style="font-size: 18px;">${p}</p>`).join('')}
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
            <span class="text-label">${c.theProblem.eyebrow}</span>
            <h2 class="text-h2 mt-2">${c.theProblem.headline}</h2>
          </div>

          <div class="grid grid-2 gap-6">
            ${c.theProblem.points.map(pt => `
              <div class="card">
                <h3 class="text-h4 mb-2" style="color: var(--color-primary);">${pt.title}</h3>
                <p class="text-body text-muted">${pt.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- What We Believe -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${c.beliefs.eyebrow}</span>
            <h2 class="text-h2 mt-2">${c.beliefs.headline}</h2>
          </div>

          <div class="grid grid-3 gap-6">
            ${c.beliefs.items.map(item => `
              <div class="card">
                <span class="badge badge-accent mb-2">${item.topic}</span>
                <p class="text-body text-muted" style="margin-top: 8px;">${item.text}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- The Student We Develop -->
      <section class="section section-surface">
        <div class="container">
          <div class="grid grid-2 gap-8 items-center">
            <div>
              <span class="text-label">${c.targetStudent.eyebrow}</span>
              <h2 class="text-h2 mt-2 mb-4">${c.targetStudent.headline}</h2>
              <p class="text-body text-muted mb-4">
                We believe that education must cultivate independent thinkers who can navigate complex problems with poise.
              </p>
            </div>
            <div>
              <ul class="flex flex-col gap-3">
                ${c.targetStudent.qualities.map(q => `
                  <li class="card" style="padding: var(--space-3) var(--space-4); border-left: 3px solid var(--color-primary);">
                    <span class="text-body" style="font-weight: 500;">✓ ${q}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- What SCIFINITY Is Not (Anti-Vision) -->
      <section class="section section-dark">
        <div class="container container-narrow text-center">
          <span class="text-label" style="color: #F87171;">${c.antiVision.eyebrow}</span>
          <h2 class="text-h2 mt-2 mb-6" style="color: #FFFFFF;">${c.antiVision.headline}</h2>
          
          <div class="grid grid-2 gap-4 text-left">
            ${c.antiVision.refusals.map(r => `
              <div class="card" style="background: rgba(255, 255, 255, 0.05); border-color: rgba(239, 68, 68, 0.3); color: #F1F5F9;">
                <p class="text-body" style="color: #F87171; font-weight: 600;">✕ ${r}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Parent Expectations & National Reach -->
      <section class="section">
        <div class="container">
          <div class="grid grid-2 gap-8">
            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">${c.parentExpectations.eyebrow}</span>
              <h3 class="text-h3 mt-2 mb-3">${c.parentExpectations.headline}</h3>
              <p class="text-body text-muted">${c.parentExpectations.description}</p>
            </div>

            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">${c.nationalReach.eyebrow}</span>
              <h3 class="text-h3 mt-2 mb-3">${c.nationalReach.headline}</h3>
              <p class="text-body text-muted">${c.nationalReach.description}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Transition CTA -->
      <section class="section section-surface text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4">${c.nextCta.headline}</h2>
          <p class="text-lead mb-6">${c.nextCta.description}</p>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${c.nextCta.primary.route}" class="btn btn-primary btn-lg" data-route="${c.nextCta.primary.route}">
              ${c.nextCta.primary.label}
            </a>
            <a href="${c.nextCta.secondary.route}" class="btn btn-secondary btn-lg" data-route="${c.nextCta.secondary.route}">
              ${c.nextCta.secondary.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  `;
}

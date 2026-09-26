/* ==========================================================================
   PAGE 02 — WHY SCIFINITY VIEW CONTROLLER
   Source: 03_WHY_SCIFINITY.md
   SCIFINITY Design System V2.0 — Technical & Conceptual Philosophy Identity
   ABSOLUTE CONTENT LOCK: All text, structure & links 100% exact
   ========================================================================== */

import { WHY_SCIFINITY_CONTENT } from '../content/en/why-scifinity.ts';

export function renderWhyScifinityPage(): string {
  const c = WHY_SCIFINITY_CONTENT;

  return `
    <main id="main-content">
      <!-- ==================================================================
           Hero: Confident Conceptual Atmosphere
           ================================================================== -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="badge badge-primary mb-3" style="padding: 5px 12px; font-size: 12px;">${c.hero.eyebrow}</span>
          <h1 class="text-display mb-4" style="color: var(--color-ink);">${c.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto" style="color: var(--color-text-secondary);">${c.hero.supporting}</p>
        </div>
      </section>

      <!-- ==================================================================
           The Beginning: Founder Story with Signature Highlight
           ================================================================== -->
      <section class="section section-atmosphere-question">
        <div class="container container-prose">
          <div class="card card-elevated" style="padding: var(--space-8); background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-lg);">
            <span class="text-label mb-2" style="display: inline-flex;">${c.beginning.eyebrow}</span>
            <h2 class="text-h2 mt-1 mb-6" style="color: var(--color-ink);">${c.beginning.headline}</h2>
            
            <div class="quote-highlight mb-6" style="border-left-color: var(--color-navy); padding-left: var(--space-6);">
              ${c.beginning.paragraphs.map(p => `<p class="mb-4 text-body" style="font-size: 17.5px; line-height: 1.75; color: var(--color-ink);">${p}</p>`).join('')}
              <div class="mt-6 pt-4 flex items-center justify-between flex-wrap gap-3" style="border-top: 1px solid var(--color-border);">
                <span class="text-small" style="font-weight: 700; color: var(--color-navy);">Rashed-Uz-Zaman Noor &bull; Founder & Mentor</span>
                <img src="/assets/founder-signature.png" alt="Signature of Rashed-Uz-Zaman Noor" style="height: 38px; width: auto; object-fit: contain;" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           The Problem: Diagnostic Cards
           ================================================================== -->
      <section class="section section-atmosphere-beliefs">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${c.theProblem.eyebrow}</span>
            <h2 class="text-h2 mt-2" style="color: var(--color-ink);">${c.theProblem.headline}</h2>
          </div>

          <div class="grid grid-2 gap-6">
            ${c.theProblem.points.map(pt => `
              <div class="card card-interactive" style="border-left: 4px solid var(--color-navy); background: #FFFFFF;">
                <h3 class="text-h4 mb-2" style="color: var(--color-navy); font-size: 19px;">${pt.title}</h3>
                <p class="text-body text-muted" style="margin: 0; line-height: 1.65;">${pt.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           What We Believe: Core Belief Cards
           ================================================================== -->
      <section class="section section-atmosphere-system">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${c.beliefs.eyebrow}</span>
            <h2 class="text-h2 mt-2" style="color: var(--color-ink);">${c.beliefs.headline}</h2>
          </div>

          <div class="grid grid-3 gap-6">
            ${c.beliefs.items.map((item, idx) => `
              <div class="card card-interactive" style="background: #FFFFFF; border-top: 3.5px solid ${idx % 3 === 0 ? 'var(--color-navy)' : idx % 3 === 1 ? 'var(--color-purple)' : 'var(--color-teal)'};">
                <div class="mb-3">
                  <span class="badge ${idx % 3 === 0 ? 'badge-primary' : idx % 3 === 1 ? 'badge-purple' : 'badge-teal'}">${item.topic}</span>
                </div>
                <p class="text-body text-muted" style="margin: 0; line-height: 1.65;">${item.text}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           The Student We Develop: Structured Progression
           ================================================================== -->
      <section class="section section-atmosphere-bridge">
        <div class="container">
          <div class="grid grid-2 gap-8 items-center">
            <div>
              <span class="text-label">${c.targetStudent.eyebrow}</span>
              <h2 class="text-h2 mt-2 mb-4" style="color: var(--color-ink);">${c.targetStudent.headline}</h2>
              <p class="text-lead" style="color: var(--color-text-secondary); margin: 0; line-height: 1.7;">
                We believe that education must cultivate independent thinkers who can navigate complex problems with poise.
              </p>
            </div>
            <div>
              <ul class="flex flex-col gap-3" style="padding-left: 0; list-style: none; margin: 0;">
                ${c.targetStudent.qualities.map(q => `
                  <li class="card card-interactive" style="padding: var(--space-4) var(--space-5); border-left: 3.5px solid var(--color-teal); background: #FFFFFF;">
                    <span class="text-body flex items-center gap-2" style="font-weight: 600; color: var(--color-ink);">
                      <span style="color: var(--color-teal); font-weight: 800;">✓</span> ${q}
                    </span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           What SCIFINITY Is Not (Anti-Vision: Dark Theme)
           ================================================================== -->
      <section class="section section-atmosphere-founder">
        <div class="container container-narrow text-center">
          <span class="text-label" style="color: #FCA5A5;">${c.antiVision.eyebrow}</span>
          <h2 class="text-h2 mt-2 mb-6" style="color: #FFFFFF;">${c.antiVision.headline}</h2>
          
          <div class="grid grid-2 gap-4 text-left">
            ${c.antiVision.refusals.map(r => `
              <div class="card" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(239, 68, 68, 0.35); color: #F1F5F9; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);">
                <p class="text-body" style="color: #FCA5A5; font-weight: 600; margin: 0; line-height: 1.5;">✕ ${r}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Parent Expectations & National Reach
           ================================================================== -->
      <section class="section section-atmosphere-vault">
        <div class="container">
          <div class="grid grid-2 gap-8">
            <div class="card card-elevated" style="padding: var(--space-7); background: #FFFFFF;">
              <span class="text-label">${c.parentExpectations.eyebrow}</span>
              <h3 class="text-h3 mt-2 mb-3" style="color: var(--color-ink);">${c.parentExpectations.headline}</h3>
              <p class="text-body text-muted" style="margin: 0; line-height: 1.65;">${c.parentExpectations.description}</p>
            </div>

            <div class="card card-elevated" style="padding: var(--space-7); background: #FFFFFF;">
              <span class="text-label">${c.nationalReach.eyebrow}</span>
              <h3 class="text-h3 mt-2 mb-3" style="color: var(--color-ink);">${c.nationalReach.headline}</h3>
              <p class="text-body text-muted" style="margin: 0; line-height: 1.65;">${c.nationalReach.description}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Transition CTA Banner
           ================================================================== -->
      <section class="section section-surface text-center">
        <div class="container container-narrow">
          <div class="card card-elevated" style="padding: var(--space-8); background: #FFFFFF; border-radius: var(--radius-lg);">
            <h2 class="text-h2 mb-3" style="color: var(--color-ink);">${c.nextCta.headline}</h2>
            <p class="text-lead mb-6 max-w-prose mx-auto" style="color: var(--color-text-secondary);">${c.nextCta.description}</p>
            <div class="flex gap-4 justify-center flex-wrap">
              <a href="${c.nextCta.primary.route}" class="btn btn-primary btn-lg" data-route="${c.nextCta.primary.route}">
                ${c.nextCta.primary.label} &rarr;
              </a>
              <a href="${c.nextCta.secondary.route}" class="btn btn-secondary btn-lg" data-route="${c.nextCta.secondary.route}">
                ${c.nextCta.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

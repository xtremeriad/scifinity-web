/* ==========================================================================
   PAGE 08 — FOUNDER & MENTOR VIEW CONTROLLER
   Source: 09_FOUNDER_AND_MENTOR.md
   Updated with official founder portrait and authentic handwritten signature.
   ========================================================================== */

import { FOUNDER_CONTENT } from '../content/en/founder.ts';
import { SCIFINITY_OWNER_DATA } from '../content/placeholders.ts';

export function renderFounderPage(): string {
  const c = FOUNDER_CONTENT;
  const portraitUrl = SCIFINITY_OWNER_DATA.founder.portraitImagePath;
  const signatureUrl = SCIFINITY_OWNER_DATA.founder.signatureImagePath;

  return `
    <main id="main-content">
      <!-- Hero Section with Authentic Portrait -->
      <section class="section section-hero">
        <div class="container">
          <div class="grid grid-sidebar gap-8 items-center">
            <!-- Portrait Image -->
            <div class="text-center">
              <div class="card" style="padding: var(--space-3); background: #FFFFFF; box-shadow: var(--shadow-md); display: inline-block;">
                <img 
                  src="${portraitUrl}" 
                  alt="Rashed-Uz-Zaman Noor — Founder & Mentor, SCIFINITY" 
                  style="width: 100%; max-width: 320px; border-radius: var(--radius-sm); object-fit: cover; aspect-ratio: 4/5; display: block;" 
                />
              </div>
            </div>

            <!-- Profile Info -->
            <div>
              <span class="text-label mb-2" style="display: inline-block;">${c.hero.eyebrow}</span>
              <h1 class="text-h1 display-title mb-2">${c.hero.name}</h1>
              <p class="text-lead mb-3" style="color: var(--color-primary); font-weight: 600;">
                ${c.hero.headline}
              </p>
              <p class="text-lead max-w-prose" style="font-size: 18px; color: var(--color-ink); line-height: 1.6;">
                ${c.hero.credentials}
              </p>
              <p class="text-body text-muted mt-2">${c.hero.mentoringSpan}</p>
              
              <div class="mt-4">
                <img src="${signatureUrl}" alt="Signature of ${c.hero.name}" style="height: 52px; width: auto; object-fit: contain;" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Approved Statement Block with Authentic Signature -->
      <section class="section" style="padding-top: var(--space-6);">
        <div class="container container-prose">
          <div class="card" style="background: #F8FAFC; border: 1px solid var(--color-primary-surface); padding: var(--space-8); text-align: center; box-shadow: var(--shadow-sm);">
            <span class="text-label mb-3" style="color: var(--color-primary); display: inline-block;">${c.approvedStatement.eyebrow}</span>
            <blockquote class="text-h3" style="font-style: italic; font-weight: 500; line-height: 1.6; color: var(--color-ink); margin-bottom: var(--space-4);">
              ${c.approvedStatement.quote}
            </blockquote>
            <div class="flex items-center justify-center gap-4 flex-col mt-4">
              <img src="${signatureUrl}" alt="Signature of ${c.hero.name}" style="height: 44px; width: auto; object-fit: contain;" />
              <p class="text-small text-muted" style="font-weight: 600;">
                — ${c.hero.name}, Founder & Mentor
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Origin Story -->
      <section class="section section-surface">
        <div class="container container-prose">
          <span class="text-label">${c.originStory.eyebrow}</span>
          <h2 class="text-h2 mt-2 mb-6">${c.originStory.headline}</h2>

          <div class="quote-highlight mb-8">
            ${c.originStory.paragraphs.map(p => `<p class="mb-4 text-body" style="font-size: 18px;">${p}</p>`).join('')}
          </div>
        </div>
      </section>

      <!-- Philosophy Statement -->
      <section class="section section-dark">
        <div class="container container-narrow">
          <span class="text-label" style="color: #60A5FA;">${c.philosophyStatement.eyebrow}</span>
          <h2 class="text-h2 mt-2 mb-6" style="color: #FFFFFF;">${c.philosophyStatement.headline}</h2>

          <div class="flex flex-col gap-4">
            ${c.philosophyStatement.quote.map(q => `
              <div class="card" style="background: rgba(255, 255, 255, 0.05); border-color: rgba(255, 255, 255, 0.15); color: #F1F5F9; padding: var(--space-5);">
                <p class="text-lead" style="font-style: italic; color: #FFFFFF;">"${q}"</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Subjects Personally Mentored -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${c.subjectsTaught.eyebrow}</span>
            <h2 class="text-h2 mt-2">${c.subjectsTaught.headline}</h2>
            <p class="text-body text-muted mt-2">${c.subjectsTaught.description}</p>
          </div>

          <div class="grid grid-4 gap-4">
            ${c.subjectsTaught.subjects.map(s => `
              <div class="card" style="padding: var(--space-5); text-align: center;">
                <h3 class="text-h4" style="font-size: 18px; color: var(--color-primary);">${s.name}</h3>
                <p class="text-small text-muted mt-2">${s.level}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Credibility Standards -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${c.credibilityStandards.eyebrow}</span>
            <h2 class="text-h2 mt-2">${c.credibilityStandards.headline}</h2>
          </div>

          <div class="grid grid-3 gap-6">
            ${c.credibilityStandards.points.map(pt => `
              <div class="card">
                <h3 class="text-h4 mb-2" style="font-size: 18px; color: var(--color-ink);">${pt.title}</h3>
                <p class="text-body text-muted">${pt.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section section-surface text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4">${c.cta.headline}</h2>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${c.cta.primary.route}" class="btn btn-primary btn-lg" data-route="${c.cta.primary.route}">
              ${c.cta.primary.label}
            </a>
            <a href="${c.cta.secondary.route}" class="btn btn-secondary btn-lg" data-route="${c.cta.secondary.route}">
              ${c.cta.secondary.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  `;
}

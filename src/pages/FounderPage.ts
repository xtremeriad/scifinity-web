/* ==========================================================================
   PAGE 08 — FOUNDER & MENTOR VIEW CONTROLLER
   Source: 09_FOUNDER_AND_MENTOR.md
   SCIFINITY Design System V2.0 — Editorial & Premium Mentorship Identity
   ABSOLUTE CONTENT LOCK: All text, structure & links 100% exact
   ========================================================================== */

import { FOUNDER_CONTENT } from '../content/en/founder.ts';
import { SCIFINITY_OWNER_DATA } from '../content/placeholders.ts';

export function renderFounderPage(): string {
  const c = FOUNDER_CONTENT;
  const portraitUrl = SCIFINITY_OWNER_DATA.founder.portraitImagePath;
  const signatureUrl = SCIFINITY_OWNER_DATA.founder.signatureImagePath;

  return `
    <main id="main-content">
      <!-- ==================================================================
           Hero Section with Authentic Portrait & Editorial Layout
           ================================================================== -->
      <section class="section section-hero">
        <div class="container">
          <div class="grid grid-sidebar gap-8 items-center">
            <!-- Portrait Image with 3D Depth Frame -->
            <div class="text-center">
              <div style="position: relative; display: inline-block;">
                <div style="position: absolute; inset: -6px; border-radius: calc(var(--radius-md) + 6px); background: linear-gradient(135deg, rgba(22, 54, 107, 0.3), rgba(108, 63, 209, 0.25)); filter: blur(10px); opacity: 0.8;"></div>
                <div class="card card-elevated" style="position: relative; padding: var(--space-3); background: #FFFFFF; border-radius: var(--radius-md); display: inline-block;">
                  <img 
                    src="${portraitUrl}" 
                    alt="Rashed-Uz-Zaman Noor — Founder & Mentor, SCIFINITY" 
                    style="width: 100%; max-width: 320px; border-radius: var(--radius-sm); object-fit: cover; aspect-ratio: 4/5; display: block;" 
                  />
                </div>
              </div>
            </div>

            <!-- Profile Info -->
            <div>
              <span class="badge badge-primary mb-3">${c.hero.eyebrow}</span>
              <h1 class="text-display mb-2" style="color: var(--color-ink); font-size: clamp(30px, 3.8vw, 44px);">${c.hero.name}</h1>
              <p class="text-lead mb-3" style="color: var(--color-navy); font-weight: 700;">
                ${c.hero.headline}
              </p>
              <p class="text-lead max-w-prose" style="font-size: 17.5px; color: var(--color-ink); line-height: 1.65; margin-bottom: var(--space-3);">
                ${c.hero.credentials}
              </p>
              <p class="text-body text-muted mt-2" style="font-weight: 500;">${c.hero.mentoringSpan}</p>
              
              <div class="mt-5">
                <img src="${signatureUrl}" alt="Signature of ${c.hero.name}" style="height: 52px; width: auto; object-fit: contain;" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Approved Statement Block with Authentic Signature
           ================================================================== -->
      <section class="section section-atmosphere-question" style="padding-top: var(--space-6);">
        <div class="container container-prose">
          <div class="card card-elevated" style="background: #FFFFFF; border: 1.5px solid var(--color-border); padding: var(--space-8); text-align: center; border-radius: var(--radius-lg);">
            <span class="text-label mb-3" style="color: var(--color-navy); display: inline-flex;">${c.approvedStatement.eyebrow}</span>
            <blockquote class="text-h3" style="font-style: italic; font-weight: 600; line-height: 1.7; color: var(--color-ink); margin-bottom: var(--space-4); max-width: 700px; margin-left: auto; margin-right: auto;">
              ${c.approvedStatement.quote}
            </blockquote>
            <div class="flex items-center justify-center gap-4 flex-col mt-5">
              <img src="${signatureUrl}" alt="Signature of ${c.hero.name}" style="height: 46px; width: auto; object-fit: contain;" />
              <p class="text-small text-muted" style="font-weight: 700; color: var(--color-navy); margin: 0;">
                — ${c.hero.name}, Founder & Mentor
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Origin Story
           ================================================================== -->
      <section class="section section-atmosphere-beliefs">
        <div class="container container-prose">
          <div class="card card-elevated" style="padding: var(--space-8); background: #FFFFFF; border-radius: var(--radius-lg);">
            <span class="text-label">${c.originStory.eyebrow}</span>
            <h2 class="text-h2 mt-2 mb-6" style="color: var(--color-ink);">${c.originStory.headline}</h2>

            <div class="quote-highlight mb-4" style="border-left-color: var(--color-navy);">
              ${c.originStory.paragraphs.map(p => `<p class="mb-4 text-body" style="font-size: 17.5px; line-height: 1.75; color: var(--color-ink);">${p}</p>`).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Philosophy Statement: Editorial Dark Atmosphere
           ================================================================== -->
      <section class="section section-atmosphere-founder">
        <div class="container container-narrow">
          <div class="text-center mb-6">
            <span class="text-label" style="color: #93C5FD;">${c.philosophyStatement.eyebrow}</span>
            <h2 class="text-h2 mt-2 mb-6" style="color: #FFFFFF;">${c.philosophyStatement.headline}</h2>
          </div>

          <div class="flex flex-col gap-4">
            ${c.philosophyStatement.quote.map(q => `
              <div class="card card-dark" style="background: rgba(255, 255, 255, 0.06); border-color: rgba(255, 255, 255, 0.16); padding: var(--space-6); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);">
                <p class="text-lead" style="font-style: italic; color: #F8FAFC; margin: 0; line-height: 1.7;">"${q}"</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Subjects Personally Mentored
           ================================================================== -->
      <section class="section section-atmosphere-vault">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${c.subjectsTaught.eyebrow}</span>
            <h2 class="text-h2 mt-2" style="color: var(--color-ink);">${c.subjectsTaught.headline}</h2>
            <p class="text-body text-muted mt-2" style="line-height: 1.65;">${c.subjectsTaught.description}</p>
          </div>

          <div class="grid grid-4 gap-4">
            ${c.subjectsTaught.subjects.map((s, idx) => `
              <div class="card card-interactive" style="padding: var(--space-5); text-align: center; background: #FFFFFF; border-top: 3.5px solid ${idx === 0 ? 'var(--color-navy)' : idx === 1 ? 'var(--color-teal)' : idx === 2 ? 'var(--color-purple)' : 'var(--color-gold)'};">
                <span class="badge ${idx === 0 ? 'badge-primary' : idx === 1 ? 'badge-teal' : idx === 2 ? 'badge-purple' : 'badge-gold'} mb-2">Subject 0${idx + 1}</span>
                <h3 class="text-h4" style="font-size: 18px; color: var(--color-ink); margin: 0 0 6px 0;">${s.name}</h3>
                <p class="text-small text-muted mt-1" style="font-weight: 600; margin: 0;">${s.level}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Credibility Standards
           ================================================================== -->
      <section class="section section-atmosphere-system">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${c.credibilityStandards.eyebrow}</span>
            <h2 class="text-h2 mt-2" style="color: var(--color-ink);">${c.credibilityStandards.headline}</h2>
          </div>

          <div class="grid grid-3 gap-6">
            ${c.credibilityStandards.points.map((pt, idx) => `
              <div class="card card-interactive" style="padding: var(--space-6); background: #FFFFFF; border-left: 4px solid ${idx % 3 === 0 ? 'var(--color-navy)' : idx % 3 === 1 ? 'var(--color-teal)' : 'var(--color-purple)'};">
                <h3 class="text-h4 mb-2" style="font-size: 18.5px; color: var(--color-ink);">${pt.title}</h3>
                <p class="text-body text-muted" style="margin: 0; line-height: 1.65;">${pt.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           CTA
           ================================================================== -->
      <section class="section section-surface text-center">
        <div class="container container-narrow">
          <div class="card card-elevated" style="padding: var(--space-8); background: #FFFFFF; border-radius: var(--radius-lg);">
            <h2 class="text-h2 mb-4" style="color: var(--color-ink);">${c.cta.headline}</h2>
            <div class="flex gap-4 justify-center flex-wrap">
              <a href="${c.cta.primary.route}" class="btn btn-primary btn-lg" data-route="${c.cta.primary.route}">
                ${c.cta.primary.label} &rarr;
              </a>
              <a href="${c.cta.secondary.route}" class="btn btn-secondary btn-lg" data-route="${c.cta.secondary.route}">
                ${c.cta.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

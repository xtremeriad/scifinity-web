/* ==========================================================================
   PAGE 01 — HOME VIEW CONTROLLER
   SCIFINITY Design System V2.0 — Reference Implementation
   Modern Technology + Education Visual Identity with 3D Depth Hierarchy
   ABSOLUTE CONTENT LOCK: All text, data relationships & section order preserved
   ========================================================================== */

import { HOME_CONTENT } from '../content/en/home.ts';
import { BANGLA_CONTENT } from '../content/bn/index.ts';
import { renderLearningSystemFlow } from '../components/signature/LearningSystemFlow.ts';
import { renderTenMinuteBridge } from '../components/signature/TenMinuteBridge.ts';
import { renderStudentDevelopmentPath } from '../components/signature/StudentDevelopmentPath.ts';
import { renderHeroVisual } from '../components/signature/HeroVisual.ts';
import { store } from '../state/store.ts';

export function renderHomePage(): string {
  const c = HOME_CONTENT;
  const isBn = store.language === 'bn';
  const bn = BANGLA_CONTENT;

  return `
    <main id="main-content">
      ${isBn ? `
        <div class="container mt-4">
          <div class="p-3" style="background: #FFFBEB; border: 1px solid #FDE68A; border-radius: var(--radius-sm); font-size: 13px; color: #92400E; display: flex; align-items: center; justify-content: space-between; box-shadow: var(--shadow-lvl1);">
            <span><strong>বাংলা সংস্করণ:</strong> ${bn.global.translationNotice}</span>
            <span class="status-tag review">[TRANSLATION_REQUIRED]</span>
          </div>
        </div>
      ` : ''}

      <!-- ==================================================================
           Section 01: Hero (Technology + Education 3D Atmosphere)
           ================================================================== -->
      <section class="section section-hero">
        <div class="container">
          <div class="grid grid-hero items-center mb-8">
            <!-- Left: Hero Headline, Value Proposition & Actions -->
            <div class="hero-content-wrap">
              <div class="inline-flex items-center gap-2 mb-4">
                <span class="badge badge-primary" style="padding: 5px 12px; font-size: 12px; box-shadow: 0 2px 6px rgba(22, 54, 107, 0.08);">
                  ${isBn ? 'শিক্ষামূলক ইকোসিস্টেম &bull; প্রতিষ্ঠাকাল ২০১৪' : 'EDUCATIONAL ECOSYSTEM &bull; EST. 2014'}
                </span>
              </div>
              <h1 class="text-display hero-main-headline mb-4" style="color: var(--color-ink);">
                ${isBn ? bn.home.heroHeadline : c.hero.headline}
              </h1>
              <p class="text-lead hero-main-description mb-6" style="max-width: 600px; color: var(--color-text-secondary);">
                ${isBn ? bn.home.heroSupporting : c.hero.supporting}
              </p>
              <div class="flex gap-4 flex-wrap">
                <a href="${c.hero.primaryCta.route}" class="btn btn-primary btn-lg" data-route="${c.hero.primaryCta.route}">
                  ${isBn ? bn.global.applyCta : c.hero.primaryCta.label} &rarr;
                </a>
                <a href="${c.hero.secondaryCta.route}" class="btn btn-secondary btn-lg" data-route="${c.hero.secondaryCta.route}">
                  ${isBn ? bn.global.exploreSystemCta : c.hero.secondaryCta.label}
                </a>
              </div>
            </div>

            <!-- Right: 3D Modern Educational & Analytical Visual -->
            <div class="hero-visual-col text-center">
              ${renderHeroVisual()}
            </div>
          </div>

          <!-- Hero Pillars Grid (5 Physical 3D Information Cards) -->
          <div class="grid grid-5 gap-4 mt-8">
            ${c.hero.pillars.map((p, idx) => `
              <div class="card card-interactive" style="padding: var(--space-4); background: #FFFFFF; border-top: 3px solid ${idx === 0 ? 'var(--color-navy)' : idx === 1 ? 'var(--color-teal)' : idx === 2 ? 'var(--color-purple)' : idx === 3 ? 'var(--color-navy-light)' : 'var(--color-gold)'};">
                <span class="text-label" style="font-size: 11px; color: ${idx === 0 ? 'var(--color-navy)' : idx === 1 ? 'var(--color-teal)' : idx === 2 ? 'var(--color-purple)' : idx === 3 ? 'var(--color-navy-light)' : 'var(--color-gold-dark)'};">
                  ${p.label}
                </span>
                <p class="text-body" style="font-weight: 700; font-size: 14px; margin-top: 6px; margin-bottom: 0; color: var(--color-ink);">
                  ${p.detail}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Section 02: The Fundamental Question
           ================================================================== -->
      <section class="section section-atmosphere-question">
        <div class="container container-narrow text-center">
          <div class="card card-elevated" style="padding: var(--space-8); background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-lg);">
            <span class="text-label mb-3" style="display: inline-flex;">${c.fundamentalQuestion.eyebrow}</span>
            <h2 class="text-h2 mb-4" style="color: var(--color-ink); max-width: 720px; margin-left: auto; margin-right: auto;">
              "${isBn ? bn.home.fundamentalQuestion : c.fundamentalQuestion.headline}"
            </h2>
            <p class="text-lead mb-6 mx-auto" style="max-width: 680px;">
              ${c.fundamentalQuestion.description}
            </p>
            <div>
              <a href="${c.fundamentalQuestion.cta.route}" class="btn btn-secondary" data-route="${c.fundamentalQuestion.cta.route}">
                ${c.fundamentalQuestion.cta.label} &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Section 03: What SCIFINITY Believes
           ================================================================== -->
      <section class="section section-atmosphere-beliefs">
        <div class="container">
          <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span class="text-label">${c.beliefs.eyebrow}</span>
              <h2 class="text-h2 mt-2">${c.beliefs.headline}</h2>
            </div>
            <a href="${c.beliefs.cta.route}" class="btn btn-secondary btn-sm" data-route="${c.beliefs.cta.route}">
              ${c.beliefs.cta.label} &rarr;
            </a>
          </div>

          <div class="grid grid-2 gap-6">
            ${c.beliefs.principles.map((pr, idx) => `
              <div class="card card-interactive" style="padding: var(--space-6); border-left: 4px solid ${idx === 0 ? 'var(--color-navy)' : idx === 1 ? 'var(--color-purple)' : idx === 2 ? 'var(--color-teal)' : 'var(--color-gold)'};">
                <div class="flex items-center gap-2 mb-3">
                  <span class="badge ${idx === 0 ? 'badge-primary' : idx === 1 ? 'badge-purple' : idx === 2 ? 'badge-teal' : 'badge-gold'}">
                    Pillar 0${idx + 1}
                  </span>
                </div>
                <h3 class="text-h3" style="font-size: 20px; margin-bottom: 8px; color: var(--color-ink);">${pr.title}</h3>
                <p class="text-body text-muted" style="margin: 0; line-height: 1.65;">${pr.text}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Section 04: The SCIFINITY Learning System
           ================================================================== -->
      <section class="section section-atmosphere-system">
        <div class="container">
          <div class="text-center max-w-prose mx-auto mb-8">
            <span class="text-label">${c.learningSystem.eyebrow}</span>
            <h2 class="text-h2 mt-2 mb-3">${isBn ? bn.home.learningSystemHeadline : c.learningSystem.headline}</h2>
            <p class="text-lead">${c.learningSystem.description}</p>
          </div>

          ${renderLearningSystemFlow()}

          <div class="text-center mt-8">
            <a href="${c.learningSystem.cta.route}" class="btn btn-primary" data-route="${c.learningSystem.cta.route}">
              ${isBn ? bn.global.exploreSystemCta : c.learningSystem.cta.label} &rarr;
            </a>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Section 05: The 10-Minute Bridge
           ================================================================== -->
      <section class="section section-atmosphere-bridge">
        <div class="container">
          <div class="max-w-prose mx-auto text-center">
            <span class="text-label">${c.tenMinuteBridge.eyebrow}</span>
            <h2 class="text-h2 mt-2 mb-3">${isBn ? bn.home.bridgeHeadline : c.tenMinuteBridge.headline}</h2>
            <p class="text-lead">${c.tenMinuteBridge.description}</p>
          </div>

          ${renderTenMinuteBridge()}
        </div>
      </section>

      <!-- ==================================================================
           Section 06: Academic Programs
           ================================================================== -->
      <section class="section section-atmosphere-programs">
        <div class="container">
          <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span class="text-label">${c.programsSummary.eyebrow}</span>
              <h2 class="text-h2 mt-2">${c.programsSummary.headline}</h2>
            </div>
            <a href="${c.programsSummary.cta.route}" class="btn btn-secondary btn-sm" data-route="${c.programsSummary.cta.route}">
              ${isBn ? bn.global.exploreProgramsCta : c.programsSummary.cta.label} &rarr;
            </a>
          </div>

          <div class="grid grid-4 gap-6">
            ${c.programsSummary.programs.map((prog, idx) => `
              <div class="card card-interactive flex flex-col justify-between" style="border-top: 3.5px solid ${idx === 0 ? 'var(--color-navy)' : idx === 1 ? 'var(--color-purple)' : idx === 2 ? 'var(--color-teal)' : 'var(--color-gold)'};">
                <div>
                  <div class="flex items-center justify-between mb-3">
                    <span class="badge ${idx === 0 ? 'badge-primary' : idx === 1 ? 'badge-purple' : idx === 2 ? 'badge-teal' : 'badge-gold'}">${prog.classes}</span>
                  </div>
                  <h3 class="text-h3" style="font-size: 20px; margin-bottom: 8px; color: var(--color-ink);">${prog.title}</h3>
                  <p class="text-body text-muted mb-4" style="font-size: 14px; line-height: 1.6;">${prog.summary}</p>
                  
                  <div class="mb-6">
                    <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 8px;">${prog.id === 'final-sprint' ? 'Key Focus:' : 'Subjects Included:'}</span>
                    <ul class="flex flex-col gap-1" style="padding-left: 0; list-style: none; margin: 0;">
                      ${prog.subjects.map(s => `
                        <li class="text-small flex items-center gap-2" style="color: var(--color-ink); font-weight: 500;">
                          <span style="display: inline-block; width: 5px; height: 5px; border-radius: 50%; background: var(--color-navy);"></span>
                          ${s}
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>

                <a href="${prog.route}" class="btn btn-secondary btn-sm w-full" data-route="${prog.route}">
                  ${prog.id === 'final-sprint' ? 'Explore FINAL SPRINT &rarr;' : `Explore ${prog.title} &rarr;`}
                </a>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Section 07: Founder & Mentor (Leadership & Mentorship)
           ================================================================== -->
      <section class="section section-atmosphere-founder">
        <div class="container">
          <div class="grid grid-sidebar gap-8 items-center">
            <div class="text-center">
              <div style="position: relative; display: inline-block;">
                <div style="position: absolute; inset: -4px; border-radius: calc(var(--radius-md) + 4px); background: linear-gradient(135deg, rgba(108, 63, 209, 0.6), rgba(8, 126, 139, 0.6)); filter: blur(8px); opacity: 0.7;"></div>
                <img 
                  src="/assets/founder.png" 
                  alt="Rashed-Uz-Zaman Noor — Founder & Mentor, SCIFINITY" 
                  style="position: relative; width: 100%; max-width: 280px; border-radius: var(--radius-md); object-fit: cover; aspect-ratio: 4/5; box-shadow: var(--shadow-dark-card); border: 2px solid rgba(255, 255, 255, 0.2); display: block;" 
                />
              </div>
            </div>

            <div>
              <span class="text-label" style="color: #93C5FD;">${c.founderSummary.eyebrow}</span>
              <h2 class="text-h2 mt-2 mb-2" style="color: #FFFFFF;">${c.founderSummary.name}</h2>
              <p class="text-lead" style="color: #E2E8F0; font-weight: 600; margin-bottom: 4px;">
                ${isBn ? 'প্রতিষ্ঠাতা ও মেন্টর' : c.founderSummary.title}
              </p>
              <p class="text-small mb-4" style="color: #94A3B8;">
                ${c.founderSummary.credentials} &bull; ${c.founderSummary.experience}
              </p>
              
              <div class="card mb-6" style="background: rgba(255, 255, 255, 0.06); border-color: rgba(255, 255, 255, 0.15); padding: var(--space-6); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);">
                <blockquote class="text-lead" style="font-style: italic; color: #F8FAFC; line-height: 1.7; margin: 0 0 var(--space-3) 0;">
                  ${c.founderSummary.quote}
                </blockquote>
                <p class="text-small" style="color: #94A3B8; font-weight: 600; margin: 0;">
                  — ${c.founderSummary.name}, Founder & Mentor
                </p>
              </div>

              <a href="${c.founderSummary.cta.route}" class="btn btn-outline-white btn-sm" data-route="${c.founderSummary.cta.route}">
                ${isBn ? bn.global.meetFounderCta : c.founderSummary.cta.label} &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Section 08: Student Development Path
           ================================================================== -->
      <section class="section section-atmosphere-system">
        <div class="container">
          <div class="max-w-prose mx-auto text-center mb-8">
            <span class="text-label">${c.developmentPath.eyebrow}</span>
            <h2 class="text-h2 mt-2 mb-3">${c.developmentPath.headline}</h2>
            <p class="text-lead">${c.developmentPath.description}</p>
          </div>

          ${renderStudentDevelopmentPath()}
        </div>
      </section>

      <!-- ==================================================================
           Section 09: Evidence & Student Stories (Coming Soon)
           ================================================================== -->
      <section class="section section-atmosphere-beliefs">
        <div class="container">
          <div class="card card-elevated" style="padding: var(--space-8); border: 1.5px dashed var(--color-border); text-align: center; max-width: 840px; margin: 0 auto; background: #FFFFFF;">
            <div class="flex items-center justify-center gap-2 mb-3">
              <span class="text-label">${c.storiesNotice.eyebrow}</span>
              <span class="status-tag planned">COMING SOON</span>
            </div>
            <h3 class="text-h3 mb-3">${c.storiesNotice.headline}</h3>
            <p class="text-body text-muted mb-6 max-w-prose mx-auto" style="line-height: 1.65;">
              ${c.storiesNotice.text}
            </p>
            <div>
              <a href="${c.storiesNotice.cta.route}" class="btn btn-secondary btn-sm" data-route="${c.storiesNotice.cta.route}">
                ${c.storiesNotice.cta.label} &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Section 10: Golden Seat
           ================================================================== -->
      <section class="section">
        <div class="container">
          <div class="card card-gold" style="padding: var(--space-8); border-radius: var(--radius-lg);">
            <div class="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div>
                <span class="badge badge-gold mb-2">${c.goldenSeat.eyebrow}</span>
                <h2 class="text-h2" style="color: #452102;">${c.goldenSeat.headline}</h2>
              </div>
              <a href="${c.goldenSeat.cta.route}" class="btn btn-gold" data-route="${c.goldenSeat.cta.route}">
                ${isBn ? bn.global.exploreGoldenSeatCta : c.goldenSeat.cta.label} &rarr;
              </a>
            </div>
            <p class="text-lead max-w-prose" style="color: #582C03; margin: 0;">
              ${c.goldenSeat.description}
            </p>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Section 11: The Vault
           ================================================================== -->
      <section class="section section-atmosphere-vault">
        <div class="container">
          <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span class="text-label">${c.vaultSummary.eyebrow}</span>
              <h2 class="text-h2 mt-2">${c.vaultSummary.headline}</h2>
              <p class="text-body text-muted mt-1">${c.vaultSummary.description}</p>
            </div>
            <a href="${c.vaultSummary.cta.route}" class="btn btn-secondary btn-sm" data-route="${c.vaultSummary.cta.route}">
              ${isBn ? bn.global.enterVaultCta : c.vaultSummary.cta.label} &rarr;
            </a>
          </div>

          <div class="grid grid-4 gap-4">
            ${c.vaultSummary.categories.map((cat, idx) => `
              <div class="card card-interactive" style="padding: var(--space-5); background: #FFFFFF; border-left: 3.5px solid ${idx === 0 ? 'var(--color-navy)' : idx === 1 ? 'var(--color-purple)' : idx === 2 ? 'var(--color-teal)' : 'var(--color-gold)'};">
                <span class="badge ${idx === 0 ? 'badge-primary' : idx === 1 ? 'badge-purple' : idx === 2 ? 'badge-teal' : 'badge-gold'} mb-2">Free Resource</span>
                <h4 class="text-h4" style="font-size: 17px; margin: 0; color: var(--color-ink);">${cat}</h4>
              </div>
            `).join('')}
          </div>

          <div class="mt-6 p-4" style="background: #F0F9FF; border: 1px solid #BAE6FD; border-radius: var(--radius-sm); box-shadow: var(--shadow-lvl1);">
            <div class="flex items-center gap-2">
              <span class="status-tag planned">[PLANNED]</span>
              <span class="text-small" style="color: #0369A1; font-weight: 600;">${c.vaultSummary.plannedFeature}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Section: Collaboration Intro (Immediately before Connect & Locations)
           ================================================================== -->
      <section class="section section-atmosphere-collab">
        <div class="container container-narrow text-center">
          <div class="card card-elevated" style="padding: var(--space-8); background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-lg);">
            <span class="text-label mb-2" style="display: inline-flex; color: var(--color-purple);">
              ${c.collaborationIntro.eyebrow}
            </span>
            <h2 class="text-h2 mb-3" style="color: var(--color-ink);">
              ${c.collaborationIntro.headline}
            </h2>
            <p class="text-lead mb-4" style="font-size: 18px; font-weight: 600; color: var(--color-purple); line-height: 1.5;">
              ${c.collaborationIntro.supportingLine}
            </p>
            <p class="text-body max-w-prose mx-auto mb-6" style="font-size: 15.5px; line-height: 1.7; color: var(--color-text);">
              ${c.collaborationIntro.description}
            </p>
            <div>
              <a href="${c.collaborationIntro.cta.route}" class="btn btn-primary" data-route="${c.collaborationIntro.cta.route}">
                ${c.collaborationIntro.cta.label} &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Section: SCIFINITY Connect Intro (Immediately before Locations)
           ================================================================== -->
      <section class="section section-atmosphere-connect">
        <div class="container container-narrow text-center">
          <div class="card card-elevated" style="padding: var(--space-8); background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-lg);">
            <span class="text-label mb-2" style="display: inline-flex; color: var(--color-teal);">
              ${c.connectIntro.eyebrow}
            </span>
            <h2 class="text-h2 mb-3" style="color: var(--color-ink);">
              ${c.connectIntro.headline}
            </h2>
            <p class="text-lead mb-4" style="font-size: 18px; font-weight: 600; color: var(--color-teal); line-height: 1.5;">
              ${c.connectIntro.supportingLine}
            </p>
            <p class="text-body max-w-prose mx-auto mb-4" style="font-size: 15.5px; line-height: 1.7; color: var(--color-text);">
              ${c.connectIntro.body}
            </p>
            <p style="font-size: 17px; font-weight: 700; color: var(--color-ink); margin-bottom: var(--space-5);">
              ${c.connectIntro.subtext}
            </p>
            <div>
              <a href="${c.connectIntro.cta.route}" class="btn btn-primary" data-route="${c.connectIntro.cta.route}">
                ${c.connectIntro.cta.label} &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Section 12: Locations
           ================================================================== -->
      <section class="section section-atmosphere-locations">
        <div class="container">
          <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span class="text-label">${c.locationsSummary.eyebrow}</span>
              <h2 class="text-h2 mt-2">${c.locationsSummary.headline}</h2>
              <p class="text-body text-muted mt-1">${c.locationsSummary.description}</p>
            </div>
            <a href="${c.locationsSummary.cta.route}" class="btn btn-secondary btn-sm" data-route="${c.locationsSummary.cta.route}">
              ${isBn ? bn.global.viewLocationsCta : c.locationsSummary.cta.label} &rarr;
            </a>
          </div>

          <div class="grid grid-2 gap-6">
            ${c.locationsSummary.locations.map(loc => `
              <div class="card card-interactive" style="padding: var(--space-6); background: #FFFFFF;">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-h3" style="font-size: 20px; color: var(--color-ink);">${loc.name}</h3>
                  <span class="status-tag confirmed">Confirmed Hub</span>
                </div>
                <p class="text-small text-muted mb-4"><strong>Batches:</strong> ${loc.batches}</p>
                <div class="p-4" style="background: var(--color-surface-muted); border: 1px solid var(--color-border); border-radius: var(--radius-sm); font-size: 13.5px;">
                  <strong>Address:</strong> <span style="font-weight: 700; color: var(--color-ink);">${loc.address}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Section 13: Final CTA Banner (High-Impact Tech Gradient)
           ================================================================== -->
      <section class="section section-dark text-center" style="background: linear-gradient(180deg, #0D1B36 0%, #081020 100%); position: relative;">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF; font-size: clamp(26px, 3.4vw, 38px);">${c.finalCta.headline}</h2>
          <p class="text-lead mb-6 mx-auto" style="color: #94A3B8; max-width: 600px;">
            ${c.finalCta.description}
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${c.finalCta.primary.route}" class="btn btn-primary btn-lg" data-route="${c.finalCta.primary.route}">
              ${isBn ? bn.global.applyCta : c.finalCta.primary.label} &rarr;
            </a>
            <a href="${c.finalCta.secondary.route}" class="btn btn-outline-white btn-lg" data-route="${c.finalCta.secondary.route}">
              ${isBn ? bn.global.exploreSystemCta : c.finalCta.secondary.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  `;
}

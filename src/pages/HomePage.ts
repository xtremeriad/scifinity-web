/* ==========================================================================
   PAGE 01 — HOME VIEW CONTROLLER
   Source: 02_HOME.md
   Updated with verified founder details, approved statement, and center addresses.
   ========================================================================== */

import { HOME_CONTENT } from '../content/en/home.ts';
import { BANGLA_CONTENT } from '../content/bn/index.ts';
import { renderLearningSystemFlow } from '../components/signature/LearningSystemFlow.ts';
import { renderTenMinuteBridge } from '../components/signature/TenMinuteBridge.ts';
import { renderStudentDevelopmentPath } from '../components/signature/StudentDevelopmentPath.ts';
import { store } from '../state/store.ts';

export function renderHomePage(): string {
  const c = HOME_CONTENT;
  const isBn = store.language === 'bn';
  const bn = BANGLA_CONTENT;

  return `
    <main id="main-content">
      ${isBn ? `
        <div class="container mt-4">
          <div class="p-3" style="background: #FFFBEB; border: 1px solid #FDE68A; border-radius: var(--radius-sm); font-size: 13px; color: #92400E; display: flex; align-items: center; justify-content: space-between;">
            <span><strong>বাংলা সংস্করণ:</strong> ${bn.global.translationNotice}</span>
            <span class="status-tag review">[TRANSLATION_REQUIRED]</span>
          </div>
        </div>
      ` : ''}

      <!-- Section 01: Hero -->
      <section class="section section-hero">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label mb-3" style="display: inline-block;">
              ${isBn ? 'শিক্ষামূলক ইকোসিস্টেম &bull; প্রতিষ্ঠাকাল ২০১৪' : 'EDUCATIONAL ECOSYSTEM &bull; EST. 2014'}
            </span>
            <h1 class="text-h1 display-title mb-4">
              ${isBn ? bn.home.heroHeadline : c.hero.headline}
            </h1>
            <p class="text-lead mb-6">
              ${isBn ? bn.home.heroSupporting : c.hero.supporting}
            </p>
            <div class="flex gap-4 flex-wrap">
              <a href="${c.hero.primaryCta.route}" class="btn btn-primary btn-lg" data-route="${c.hero.primaryCta.route}">
                ${isBn ? bn.global.applyCta : c.hero.primaryCta.label}
              </a>
              <a href="${c.hero.secondaryCta.route}" class="btn btn-secondary btn-lg" data-route="${c.hero.secondaryCta.route}">
                ${isBn ? bn.global.exploreSystemCta : c.hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <!-- Hero Pillars Grid -->
          <div class="grid grid-4 gap-4 mt-8">
            ${c.hero.pillars.map(p => `
              <div class="card" style="padding: var(--space-4); background: #FFFFFF;">
                <span class="text-label" style="font-size: 11px;">${p.label}</span>
                <p class="text-body" style="font-weight: 600; font-size: 15px; margin-top: 4px;">${p.detail}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Section 02: The Fundamental Question -->
      <section class="section">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${c.fundamentalQuestion.eyebrow}</span>
          <h2 class="text-h2 mb-4">
            "${isBn ? bn.home.fundamentalQuestion : c.fundamentalQuestion.headline}"
          </h2>
          <p class="text-lead mb-6 mx-auto" style="max-width: 680px;">
            ${c.fundamentalQuestion.description}
          </p>
          <a href="${c.fundamentalQuestion.cta.route}" class="btn btn-secondary" data-route="${c.fundamentalQuestion.cta.route}">
            ${c.fundamentalQuestion.cta.label} &rarr;
          </a>
        </div>
      </section>

      <!-- Section 03: What SCIFINITY Believes -->
      <section class="section section-surface">
        <div class="container">
          <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span class="text-label">${c.beliefs.eyebrow}</span>
              <h2 class="text-h2 mt-2">${c.beliefs.headline}</h2>
            </div>
            <a href="${c.beliefs.cta.route}" class="btn btn-secondary btn-sm" data-route="${c.beliefs.cta.route}">
              ${c.beliefs.cta.label}
            </a>
          </div>

          <div class="grid grid-2 gap-6">
            ${c.beliefs.principles.map(pr => `
              <div class="card card-interactive">
                <h3 class="text-h4 mb-2" style="color: var(--color-primary);">${pr.title}</h3>
                <p class="text-body text-muted">${pr.text}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Section 04: The SCIFINITY Learning System -->
      <section class="section">
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

      <!-- Section 05: The 10-Minute Bridge -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mx-auto text-center">
            <span class="text-label">${c.tenMinuteBridge.eyebrow}</span>
            <h2 class="text-h2 mt-2 mb-3">${isBn ? bn.home.bridgeHeadline : c.tenMinuteBridge.headline}</h2>
            <p class="text-lead">${c.tenMinuteBridge.description}</p>
          </div>

          ${renderTenMinuteBridge()}
        </div>
      </section>

      <!-- Section 06: Academic Programs -->
      <section class="section">
        <div class="container">
          <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span class="text-label">${c.programsSummary.eyebrow}</span>
              <h2 class="text-h2 mt-2">${c.programsSummary.headline}</h2>
            </div>
            <a href="${c.programsSummary.cta.route}" class="btn btn-secondary btn-sm" data-route="${c.programsSummary.cta.route}">
              ${isBn ? bn.global.exploreProgramsCta : c.programsSummary.cta.label}
            </a>
          </div>

          <div class="grid grid-3 gap-6">
            ${c.programsSummary.programs.map(prog => `
              <div class="card card-interactive flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-3">
                    <span class="badge badge-primary">${prog.classes}</span>
                  </div>
                  <h3 class="text-h3" style="font-size: 22px; margin-bottom: 8px;">${prog.title}</h3>
                  <p class="text-body text-muted mb-4" style="font-size: 15px;">${prog.summary}</p>
                  
                  <div class="mb-6">
                    <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 6px;">Subjects Included:</span>
                    <ul class="flex flex-col gap-1">
                      ${prog.subjects.map(s => `<li class="text-small" style="color: var(--color-ink);">&bull; ${s}</li>`).join('')}
                    </ul>
                  </div>
                </div>

                <a href="${prog.route}" class="btn btn-secondary btn-sm w-full" data-route="${prog.route}">
                  Explore ${prog.title} &rarr;
                </a>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Section 07: Founder & Mentor -->
      <section class="section section-dark">
        <div class="container">
          <div class="grid grid-sidebar gap-8 items-center">
            <div class="text-center">
              <img 
                src="/assets/founder.png" 
                alt="Rashed-Uz-Zaman Noor — Founder & Mentor, SCIFINITY" 
                style="width: 100%; max-width: 280px; border-radius: var(--radius-md); object-fit: cover; aspect-ratio: 4/5; box-shadow: var(--shadow-lg); border: 2px solid rgba(255, 255, 255, 0.15); display: inline-block;" 
              />
            </div>

            <div>
              <span class="text-label" style="color: #60A5FA;">${c.founderSummary.eyebrow}</span>
              <h2 class="text-h2 mt-2 mb-2" style="color: #FFFFFF;">${c.founderSummary.name}</h2>
              <p class="text-lead" style="color: #CBD5E1; font-weight: 600; margin-bottom: 4px;">
                ${isBn ? 'প্রতিষ্ঠাতা ও মেন্টর' : c.founderSummary.title}
              </p>
              <p class="text-small mb-4" style="color: #94A3B8;">
                ${c.founderSummary.credentials} &bull; ${c.founderSummary.experience}
              </p>
              
              <div class="card mb-6" style="background: rgba(255, 255, 255, 0.05); border-color: rgba(255, 255, 255, 0.15); padding: var(--space-6);">
                <blockquote class="text-lead" style="font-style: italic; color: #F1F5F9; line-height: 1.7;">
                  "${c.founderSummary.quote}"
                </blockquote>
                <div class="flex items-center justify-between mt-4 pt-3 flex-wrap gap-2" style="border-top: 1px solid rgba(255, 255, 255, 0.1);">
                  <span class="text-small" style="color: #94A3B8; font-weight: 600;">— ${c.founderSummary.name}, Founder & Mentor</span>
                  <img src="/assets/founder-signature.png" alt="Signature of ${c.founderSummary.name}" style="height: 38px; width: auto; object-fit: contain; filter: brightness(0) invert(1); opacity: 0.9;" />
                </div>
              </div>

              <a href="${c.founderSummary.cta.route}" class="btn btn-outline-white btn-sm" data-route="${c.founderSummary.cta.route}">
                ${isBn ? bn.global.meetFounderCta : c.founderSummary.cta.label} &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 08: Student Development Path -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mx-auto text-center mb-8">
            <span class="text-label">${c.developmentPath.eyebrow}</span>
            <h2 class="text-h2 mt-2 mb-3">${c.developmentPath.headline}</h2>
            <p class="text-lead">${c.developmentPath.description}</p>
          </div>

          ${renderStudentDevelopmentPath()}
        </div>
      </section>

      <!-- Section 09: Evidence & Student Stories (Coming Soon) -->
      <section class="section section-surface">
        <div class="container">
          <div class="card" style="padding: var(--space-8); border: 1px dashed var(--color-border); text-align: center; max-width: 840px; margin: 0 auto;">
            <div class="flex items-center justify-center gap-2 mb-3">
              <span class="text-label">${c.storiesNotice.eyebrow}</span>
              <span class="status-tag planned">COMING SOON</span>
            </div>
            <h3 class="text-h3 mb-3">${c.storiesNotice.headline}</h3>
            <p class="text-body text-muted mb-6 max-w-prose mx-auto">
              ${c.storiesNotice.text}
            </p>
            <a href="${c.storiesNotice.cta.route}" class="btn btn-secondary btn-sm" data-route="${c.storiesNotice.cta.route}">
              ${c.storiesNotice.cta.label} &rarr;
            </a>
          </div>
        </div>
      </section>

      <!-- Section 10: Golden Seat -->
      <section class="section">
        <div class="container">
          <div class="card card-gold" style="padding: var(--space-8);">
            <div class="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div>
                <span class="badge badge-gold mb-2">${c.goldenSeat.eyebrow}</span>
                <h2 class="text-h2">${c.goldenSeat.headline}</h2>
              </div>
              <a href="${c.goldenSeat.cta.route}" class="btn btn-gold" data-route="${c.goldenSeat.cta.route}">
                ${isBn ? bn.global.exploreGoldenSeatCta : c.goldenSeat.cta.label} &rarr;
              </a>
            </div>
            <p class="text-lead max-w-prose" style="color: #4B5563;">
              ${c.goldenSeat.description}
            </p>
          </div>
        </div>
      </section>

      <!-- Section 11: The Vault -->
      <section class="section section-surface">
        <div class="container">
          <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span class="text-label">${c.vaultSummary.eyebrow}</span>
              <h2 class="text-h2 mt-2">${c.vaultSummary.headline}</h2>
              <p class="text-body text-muted mt-1">${c.vaultSummary.description}</p>
            </div>
            <a href="${c.vaultSummary.cta.route}" class="btn btn-secondary btn-sm" data-route="${c.vaultSummary.cta.route}">
              ${isBn ? bn.global.enterVaultCta : c.vaultSummary.cta.label}
            </a>
          </div>

          <div class="grid grid-4 gap-4">
            ${c.vaultSummary.categories.map(cat => `
              <div class="card" style="padding: var(--space-4); background: #FFFFFF;">
                <span class="badge badge-accent mb-2">Free Resource</span>
                <h4 class="text-h4" style="font-size: 17px;">${cat}</h4>
              </div>
            `).join('')}
          </div>

          <div class="mt-6 p-4" style="background: #F0F9FF; border: 1px solid #BAE6FD; border-radius: var(--radius-sm);">
            <div class="flex items-center gap-2">
              <span class="status-tag planned">[PLANNED]</span>
              <span class="text-small" style="color: #0369A1; font-weight: 500;">${c.vaultSummary.plannedFeature}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 12: Locations -->
      <section class="section">
        <div class="container">
          <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span class="text-label">${c.locationsSummary.eyebrow}</span>
              <h2 class="text-h2 mt-2">${c.locationsSummary.headline}</h2>
              <p class="text-body text-muted mt-1">${c.locationsSummary.description}</p>
            </div>
            <a href="${c.locationsSummary.cta.route}" class="btn btn-secondary btn-sm" data-route="${c.locationsSummary.cta.route}">
              ${isBn ? bn.global.viewLocationsCta : c.locationsSummary.cta.label}
            </a>
          </div>

          <div class="grid grid-2 gap-6">
            ${c.locationsSummary.locations.map(loc => `
              <div class="card">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-h3" style="font-size: 20px;">${loc.name}</h3>
                  <span class="status-tag confirmed">Confirmed Hub</span>
                </div>
                <p class="text-small text-muted mb-3"><strong>Batches:</strong> ${loc.batches}</p>
                <div class="p-3" style="background: var(--color-surface-muted); border-radius: var(--radius-sm); font-size: 13px;">
                  <strong>Address:</strong> <span style="font-weight: 600; color: var(--color-ink);">${loc.address}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Section 13: Final CTA Banner -->
      <section class="section section-dark text-center" style="background: linear-gradient(180deg, var(--color-ink) 0%, #0B1120 100%);">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">${c.finalCta.headline}</h2>
          <p class="text-lead mb-6 mx-auto" style="color: #94A3B8; max-width: 600px;">
            ${c.finalCta.description}
          </p>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${c.finalCta.primary.route}" class="btn btn-primary btn-lg" data-route="${c.finalCta.primary.route}">
              ${isBn ? bn.global.applyCta : c.finalCta.primary.label}
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

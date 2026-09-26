/* ==========================================================================
   PAGE 04 — PROGRAMS INDEX VIEW CONTROLLER
   Source: 05_PROGRAMS.md
   Updated with FINAL SPRINT Batch, exact batch timings, and campus schedules.
   ========================================================================== */

import { PROGRAMS_INDEX_CONTENT, SSC_PROGRAM_CONTENT, HSC_PROGRAM_CONTENT, ADMISSION_PROGRAM_CONTENT, FINAL_SPRINT_PROGRAM_CONTENT } from '../content/en/programs.ts';
import { BATCHES } from '../content/site-config.ts';

export function renderProgramsPage(): string {
  const c = PROGRAMS_INDEX_CONTENT;

  const programList = [
    {
      title: 'SSC Program (Classes 9–10)',
      target: SSC_PROGRAM_CONTENT.hero.target,
      positioning: SSC_PROGRAM_CONTENT.hero.positioning,
      subjects: SSC_PROGRAM_CONTENT.subjects.map(s => s.name),
      route: '/programs/ssc',
      buttonLabel: 'View Full Program Details &rarr;'
    },
    {
      title: 'HSC Program (Classes 11–12)',
      target: HSC_PROGRAM_CONTENT.hero.target,
      positioning: HSC_PROGRAM_CONTENT.hero.positioning,
      subjects: HSC_PROGRAM_CONTENT.subjects.map(s => s.name),
      route: '/programs/hsc',
      buttonLabel: 'View Full Program Details &rarr;'
    },
    {
      title: 'Admission Test Program',
      target: ADMISSION_PROGRAM_CONTENT.hero.target,
      positioning: ADMISSION_PROGRAM_CONTENT.hero.positioning,
      subjects: ADMISSION_PROGRAM_CONTENT.subjects.map(s => s.name),
      route: '/programs/admission',
      buttonLabel: 'View Full Program Details &rarr;'
    },
    {
      title: FINAL_SPRINT_PROGRAM_CONTENT.hero.headline,
      target: FINAL_SPRINT_PROGRAM_CONTENT.hero.target,
      positioning: FINAL_SPRINT_PROGRAM_CONTENT.hero.positioning,
      subjects: FINAL_SPRINT_PROGRAM_CONTENT.subjects.map(s => s.name),
      route: '/admission',
      buttonLabel: 'Explore FINAL SPRINT &rarr;'
    }
  ];

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

      <!-- Programs Grid (4 Core Programs) -->
      <section class="section">
        <div class="container">
          <div class="grid grid-4 gap-6">
            ${programList.map(prog => `
              <div class="card card-interactive flex flex-col justify-between" style="padding: var(--space-6);">
                <div>
                  <span class="badge badge-primary mb-3">${prog.target}</span>
                  <h2 class="text-h3" style="font-size: 21px; margin-bottom: 8px;">${prog.title}</h2>
                  <p class="text-body text-muted mb-4" style="font-size: 14.5px; line-height: 1.55;">${prog.positioning}</p>

                  <div class="mb-6">
                    <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 6px;">${prog.title.includes('FINAL SPRINT') ? 'Key Focus:' : 'Curriculum Subjects:'}</span>
                    <ul class="flex flex-col gap-1">
                      ${prog.subjects.map(s => `<li class="text-small" style="font-weight: 500;">&bull; ${s}</li>`).join('')}
                    </ul>
                  </div>
                </div>

                <a href="${prog.route}" class="btn btn-secondary btn-sm w-full" data-route="${prog.route}">
                  ${prog.buttonLabel}
                </a>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Coaching Integrity & Batch Schedules -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mx-auto text-center mb-8">
            <span class="text-label">COACHING INTEGRITY</span>
            <h2 class="text-h2 mt-2 mb-3">${c.batchInfo.headline}</h2>
            <p class="text-lead" style="font-weight: 600; color: var(--color-primary);">${c.batchInfo.maxSize}</p>
            <p class="text-body text-muted mt-2">${c.batchInfo.scheduleNote}</p>
          </div>

          <!-- 4 Batch Timing Cards -->
          <div class="grid grid-4 gap-4 mb-6">
            ${BATCHES.map(b => `
              <div class="card" style="text-align: center; padding: var(--space-5);">
                <h3 class="text-h3" style="font-size: 20px; color: var(--color-ink);">Batch ${b.name}</h3>
                <p class="text-lead" style="font-size: 16px; font-weight: 600; color: var(--color-primary); margin-top: var(--space-2);">${b.scheduleStatus}</p>
              </div>
            `).join('')}
          </div>

          <!-- 2 Campus Schedule Cards -->
          <div class="grid grid-2 gap-4">
            <div class="card" style="padding: var(--space-5); text-align: center; border-top: 3px solid var(--color-primary);">
              <h3 class="text-h3" style="font-size: 19px; margin-bottom: 6px;">Uttara Campus</h3>
              <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 4px;">Schedule</span>
              <p class="text-body" style="font-weight: 600; color: var(--color-ink);">Saturday / Monday / Wednesday</p>
            </div>
            <div class="card" style="padding: var(--space-5); text-align: center; border-top: 3px solid var(--color-primary);">
              <h3 class="text-h3" style="font-size: 19px; margin-bottom: 6px;">Patuatuli Campus</h3>
              <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 4px;">Schedule</span>
              <p class="text-body" style="font-weight: 600; color: var(--color-ink);">Sunday / Tuesday / Thursday</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Adyanta Ecosystem Distinction -->
      <section class="section">
        <div class="container container-narrow">
          <div class="card" style="border-left: 4px solid var(--color-accent); padding: var(--space-6); background: #F8FAFC;">
            <div class="flex items-center gap-2 mb-2">
              <span class="badge badge-accent">Publishing Ecosystem</span>
              <span class="status-tag confirmed">Separate Business</span>
            </div>
            <h3 class="text-h3" style="font-size: 20px; margin-bottom: 8px;">${c.adyantaDistinction.headline}</h3>
            <p class="text-body text-muted">${c.adyantaDistinction.text}</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">Ready to Experience Conceptual Learning?</h2>
          <p class="text-lead mb-6 mx-auto" style="color: #94A3B8;">Apply for an upcoming batch in Uttara or Patuatuli.</p>
          <a href="/admission" class="btn btn-primary btn-lg" data-route="/admission">
            Apply for Admission &rarr;
          </a>
        </div>
      </section>
    </main>
  `;
}

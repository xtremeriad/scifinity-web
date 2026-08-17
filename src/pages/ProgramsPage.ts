/* ==========================================================================
   PAGE 04 — PROGRAMS INDEX VIEW CONTROLLER
   Source: 05_PROGRAMS.md
   ========================================================================== */

import { PROGRAMS_INDEX_CONTENT, SSC_PROGRAM_CONTENT, HSC_PROGRAM_CONTENT, ADMISSION_PROGRAM_CONTENT } from '../content/en/programs.ts';
import { BATCHES } from '../content/site-config.ts';

export function renderProgramsPage(): string {
  const c = PROGRAMS_INDEX_CONTENT;

  const programList = [
    {
      title: 'SSC Program (Classes 9–10)',
      target: SSC_PROGRAM_CONTENT.hero.target,
      positioning: SSC_PROGRAM_CONTENT.hero.positioning,
      subjects: SSC_PROGRAM_CONTENT.subjects.map(s => s.name),
      route: '/programs/ssc'
    },
    {
      title: 'HSC Program (Classes 11–12)',
      target: HSC_PROGRAM_CONTENT.hero.target,
      positioning: HSC_PROGRAM_CONTENT.hero.positioning,
      subjects: HSC_PROGRAM_CONTENT.subjects.map(s => s.name),
      route: '/programs/hsc'
    },
    {
      title: 'Admission Test Program',
      target: ADMISSION_PROGRAM_CONTENT.hero.target,
      positioning: ADMISSION_PROGRAM_CONTENT.hero.positioning,
      subjects: ADMISSION_PROGRAM_CONTENT.subjects.map(s => s.name),
      route: '/programs/admission'
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

      <!-- Programs Grid -->
      <section class="section">
        <div class="container">
          <div class="grid grid-3 gap-6">
            ${programList.map(prog => `
              <div class="card card-interactive flex flex-col justify-between" style="padding: var(--space-6);">
                <div>
                  <span class="badge badge-primary mb-3">${prog.target}</span>
                  <h2 class="text-h3" style="font-size: 24px; margin-bottom: 8px;">${prog.title}</h2>
                  <p class="text-body text-muted mb-4" style="font-size: 15px;">${prog.positioning}</p>

                  <div class="mb-6">
                    <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 6px;">Curriculum Subjects:</span>
                    <ul class="flex flex-col gap-1">
                      ${prog.subjects.map(s => `<li class="text-small" style="font-weight: 500;">&bull; ${s}</li>`).join('')}
                    </ul>
                  </div>
                </div>

                <a href="${prog.route}" class="btn btn-primary btn-sm w-full" data-route="${prog.route}">
                  View Full Program Details &rarr;
                </a>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Batch Architecture -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mx-auto text-center mb-8">
            <span class="text-label">COACHING INTEGRITY</span>
            <h2 class="text-h2 mt-2 mb-3">${c.batchInfo.headline}</h2>
            <p class="text-lead" style="font-weight: 600; color: var(--color-primary);">${c.batchInfo.maxSize}</p>
            <p class="text-body text-muted mt-2">${c.batchInfo.scheduleNote}</p>
          </div>

          <div class="grid grid-4 gap-4">
            ${BATCHES.map(b => `
              <div class="card" style="text-align: center; padding: var(--space-5);">
                <span class="badge badge-neutral mb-2">Cohort</span>
                <h3 class="text-h3" style="font-size: 20px;">Batch ${b.name}</h3>
                <p class="text-small text-muted mt-2">Max ${b.maxStudents} Students</p>
                <p class="text-small text-muted">Uttara & Patuatuli</p>
              </div>
            `).join('')}
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

/* ==========================================================================
   PAGE 05 — SSC PROGRAM VIEW CONTROLLER
   Source: 06_PROGRAM_SSC.md
   ========================================================================== */

import { SSC_PROGRAM_CONTENT } from '../content/en/programs.ts';
import { BATCHES } from '../content/site-config.ts';

export function renderSscProgramPage(): string {
  const c = SSC_PROGRAM_CONTENT;

  return `
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${c.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4">${c.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto">${c.hero.positioning}</p>
          <div class="mt-6 flex gap-4 justify-center">
            <a href="/admission?prog=ssc" class="btn btn-primary" data-route="/admission">Apply for SSC Batch</a>
            <a href="/system" class="btn btn-secondary" data-route="/system">Explore Our System</a>
          </div>
        </div>
      </section>

      <!-- Subject Breakdown -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">SUBJECT FOCUS</span>
            <h2 class="text-h2 mt-2">Comprehensive 4-Subject Syllabus Mastery</h2>
          </div>

          <div class="grid grid-2 gap-6">
            ${c.subjects.map(s => `
              <div class="card card-interactive">
                <h3 class="text-h3" style="font-size: 20px; color: var(--color-primary); margin-bottom: 8px;">${s.name}</h3>
                <p class="text-body text-muted">${s.focus}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Methodology & Assessment -->
      <section class="section section-surface">
        <div class="container">
          <div class="grid grid-2 gap-8">
            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">TEACHING METHOD</span>
              <h3 class="text-h3 mt-2 mb-4">${c.methodology.headline}</h3>
              <ul class="flex flex-col gap-3">
                ${c.methodology.points.map(p => `
                  <li class="text-body text-muted" style="display: flex; gap: 8px;">
                    <span style="color: var(--color-primary); font-weight: 700;">&bull;</span>
                    <span>${p}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">STUDENT PROFILE</span>
              <h3 class="text-h3 mt-2 mb-4">${c.studentFit.headline}</h3>
              <p class="text-body text-muted mb-4">${c.studentFit.text}</p>
              <div class="p-4" style="background: var(--color-surface-muted); border-radius: var(--radius-sm);">
                <p class="text-small" style="font-weight: 600; color: var(--color-ink);">
                  Note: Prior weak marks do not disqualify a student. Sincerity and active participation in class debugging sessions are the sole prerequisites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Batch and Location Info -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-6">
            <span class="text-label">BATCH & LOCATION SPECS</span>
            <h2 class="text-h2 mt-2">Class Structure for SSC</h2>
          </div>

          <div class="grid grid-4 gap-4">
            ${BATCHES.map(b => `
              <div class="card" style="padding: var(--space-4);">
                <span class="badge badge-primary mb-2">SSC Cohort</span>
                <h4 class="text-h4" style="font-size: 18px;">Batch ${b.name}</h4>
                <p class="text-small text-muted mt-2">Max ${b.maxStudents} Students</p>
                <div class="mt-2">
                  <span class="status-tag placeholder">${c.batchLocations.scheduleStatus}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">Build a Strong Foundation for SSC</h2>
          <p class="text-lead mb-6 mx-auto" style="color: #94A3B8;">Reserve your place in a 15-student batch.</p>
          <a href="/admission" class="btn btn-primary btn-lg" data-route="/admission">
            Apply for SSC Admission &rarr;
          </a>
        </div>
      </section>
    </main>
  `;
}

/* ==========================================================================
   PAGE 06 — HSC PROGRAM VIEW CONTROLLER
   Source: 07_PROGRAM_HSC.md
   ========================================================================== */

import { HSC_PROGRAM_CONTENT } from '../content/en/programs.ts';
import { BATCHES } from '../content/site-config.ts';

export function renderHscProgramPage(): string {
  const c = HSC_PROGRAM_CONTENT;

  return `
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${c.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4">${c.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto">${c.hero.positioning}</p>
          <div class="mt-6 flex gap-4 justify-center">
            <a href="/admission?prog=hsc" class="btn btn-primary" data-route="/admission">Apply for HSC Batch</a>
            <a href="/system" class="btn btn-secondary" data-route="/system">Explore Our System</a>
          </div>
        </div>
      </section>

      <!-- Subject Breakdown -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">CORE SYLLABUS RIGOR</span>
            <h2 class="text-h2 mt-2">HSC Advanced Subject Coverage</h2>
          </div>

          <div class="grid grid-3 gap-6">
            ${c.subjects.map(s => `
              <div class="card card-interactive">
                <h3 class="text-h3" style="font-size: 20px; color: var(--color-primary); margin-bottom: 8px;">${s.name}</h3>
                <p class="text-body text-muted">${s.focus}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Admission Connection & Expectations -->
      <section class="section section-surface">
        <div class="container">
          <div class="grid grid-2 gap-8">
            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">PEDAGOGICAL SYNTHESIS</span>
              <h3 class="text-h3 mt-2 mb-4">${c.admissionConnection.headline}</h3>
              <p class="text-body text-muted">${c.admissionConnection.description}</p>
            </div>

            <div class="card" style="padding: var(--space-6);">
              <span class="text-label">EXPECTATIONS</span>
              <h3 class="text-h3 mt-2 mb-4">${c.studentExpectations.headline}</h3>
              <p class="text-body text-muted">${c.studentExpectations.text}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Batch Info -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-6">
            <span class="text-label">BATCH STRUCTURE</span>
            <h2 class="text-h2 mt-2">HSC Batch Availability</h2>
          </div>

          <div class="grid grid-4 gap-4">
            ${BATCHES.map(b => `
              <div class="card" style="padding: var(--space-4);">
                <span class="badge badge-primary mb-2">HSC Cohort</span>
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
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">Excel in HSC and Prepare for University</h2>
          <p class="text-lead mb-6 mx-auto" style="color: #94A3B8;">Join a mentor-led 15-student batch in Uttara or Patuatuli.</p>
          <a href="/admission" class="btn btn-primary btn-lg" data-route="/admission">
            Apply for HSC Admission &rarr;
          </a>
        </div>
      </section>
    </main>
  `;
}

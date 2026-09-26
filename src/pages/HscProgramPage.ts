/* ==========================================================================
   PAGE 06 — HSC PROGRAM VIEW CONTROLLER
   Source: 07_PROGRAM_HSC.md
   SCIFINITY Design System V2.0 — HSC Program Detail
   ABSOLUTE CONTENT LOCK: All text, structure & links 100% exact
   ========================================================================== */

import { HSC_PROGRAM_CONTENT } from '../content/en/programs.ts';
import { BATCHES } from '../content/site-config.ts';

export function renderHscProgramPage(): string {
  const c = HSC_PROGRAM_CONTENT;

  return `
    <main id="main-content">
      <!-- ==================================================================
           Hero
           ================================================================== -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="badge badge-primary mb-3" style="padding: 5px 12px; font-size: 12px;">${c.hero.eyebrow}</span>
          <h1 class="text-display mb-4" style="color: var(--color-ink);">${c.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto" style="color: var(--color-text-secondary);">${c.hero.positioning}</p>
          <div class="mt-6 flex gap-4 justify-center flex-wrap">
            <a href="/admission?prog=hsc" class="btn btn-primary btn-lg" data-route="/admission">Apply for HSC Batch &rarr;</a>
            <a href="/system" class="btn btn-secondary btn-lg" data-route="/system">Explore Our System</a>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Subject Breakdown
           ================================================================== -->
      <section class="section section-atmosphere-programs">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">CORE SYLLABUS RIGOR</span>
            <h2 class="text-h2 mt-2" style="color: var(--color-ink);">HSC Advanced Subject Coverage</h2>
          </div>

          <div class="grid grid-3 gap-6">
            ${c.subjects.map((s, idx) => `
              <div class="card card-interactive" style="padding: var(--space-6); background: #FFFFFF; border-left: 4px solid ${idx === 0 ? 'var(--color-navy)' : idx === 1 ? 'var(--color-purple)' : 'var(--color-teal)'};">
                <span class="badge ${idx === 0 ? 'badge-primary' : idx === 1 ? 'badge-purple' : 'badge-teal'} mb-2">Subject 0${idx + 1}</span>
                <h3 class="text-h3" style="font-size: 20px; color: var(--color-ink); margin-bottom: 8px;">${s.name}</h3>
                <p class="text-body text-muted" style="margin: 0; line-height: 1.65;">${s.focus}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Admission Connection & Expectations
           ================================================================== -->
      <section class="section section-atmosphere-beliefs">
        <div class="container">
          <div class="grid grid-2 gap-8">
            <div class="card card-elevated" style="padding: var(--space-7); background: #FFFFFF;">
              <span class="text-label">PEDAGOGICAL SYNTHESIS</span>
              <h3 class="text-h3 mt-2 mb-4" style="color: var(--color-ink);">${c.admissionConnection.headline}</h3>
              <p class="text-body text-muted" style="margin: 0; line-height: 1.65;">${c.admissionConnection.description}</p>
            </div>

            <div class="card card-elevated" style="padding: var(--space-7); background: #FFFFFF;">
              <span class="text-label">EXPECTATIONS</span>
              <h3 class="text-h3 mt-2 mb-4" style="color: var(--color-ink);">${c.studentExpectations.headline}</h3>
              <p class="text-body text-muted" style="margin: 0; line-height: 1.65;">${c.studentExpectations.text}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Batch Info
           ================================================================== -->
      <section class="section section-atmosphere-vault">
        <div class="container">
          <div class="max-w-prose mb-6">
            <span class="text-label">BATCH STRUCTURE</span>
            <h2 class="text-h2 mt-2" style="color: var(--color-ink);">HSC Batch Availability</h2>
          </div>

          <div class="grid grid-4 gap-4">
            ${BATCHES.map((b, idx) => `
              <div class="card card-interactive" style="padding: var(--space-5); background: #FFFFFF; border-top: 3px solid ${idx % 2 === 0 ? 'var(--color-navy)' : 'var(--color-purple)'};">
                <span class="badge ${idx % 2 === 0 ? 'badge-primary' : 'badge-purple'} mb-2">HSC Cohort</span>
                <h4 class="text-h4" style="font-size: 18px; margin: 0; color: var(--color-ink);">Batch ${b.name}</h4>
                <p class="text-small text-muted mt-2 mb-2" style="font-weight: 600;">Max ${b.maxStudents} Students</p>
                <div>
                  <span class="status-tag placeholder">${c.batchLocations.scheduleStatus}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Final CTA
           ================================================================== -->
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

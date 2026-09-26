/* ==========================================================================
   PAGE 05 — SSC PROGRAM VIEW CONTROLLER
   Source: 06_PROGRAM_SSC.md
   SCIFINITY Design System V2.0 — SSC Program Detail
   ABSOLUTE CONTENT LOCK: All text, structure & links 100% exact
   ========================================================================== */

import { SSC_PROGRAM_CONTENT } from '../content/en/programs.ts';
import { BATCHES } from '../content/site-config.ts';

export function renderSscProgramPage(): string {
  const c = SSC_PROGRAM_CONTENT;

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
            <a href="/admission?prog=ssc" class="btn btn-primary btn-lg" data-route="/admission">Apply for SSC Batch &rarr;</a>
            <a href="/system" class="btn btn-secondary btn-lg" data-route="/system">Explore Our System</a>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Subject Breakdown
           ================================================================== -->
      <section class="section section-atmosphere-system">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">SUBJECT FOCUS</span>
            <h2 class="text-h2 mt-2" style="color: var(--color-ink);">Comprehensive 4-Subject Syllabus Mastery</h2>
          </div>

          <div class="grid grid-2 gap-6">
            ${c.subjects.map((s, idx) => `
              <div class="card card-interactive" style="padding: var(--space-6); background: #FFFFFF; border-left: 4px solid ${idx === 0 ? 'var(--color-navy)' : idx === 1 ? 'var(--color-teal)' : idx === 2 ? 'var(--color-purple)' : 'var(--color-gold)'};">
                <span class="badge ${idx === 0 ? 'badge-primary' : idx === 1 ? 'badge-teal' : idx === 2 ? 'badge-purple' : 'badge-gold'} mb-2">Subject 0${idx + 1}</span>
                <h3 class="text-h3" style="font-size: 20px; color: var(--color-ink); margin-bottom: 8px;">${s.name}</h3>
                <p class="text-body text-muted" style="margin: 0; line-height: 1.65;">${s.focus}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Methodology & Assessment
           ================================================================== -->
      <section class="section section-atmosphere-beliefs">
        <div class="container">
          <div class="grid grid-2 gap-8">
            <div class="card card-elevated" style="padding: var(--space-7); background: #FFFFFF;">
              <span class="text-label">TEACHING METHOD</span>
              <h3 class="text-h3 mt-2 mb-4" style="color: var(--color-ink);">${c.methodology.headline}</h3>
              <ul class="flex flex-col gap-3" style="padding-left: 0; list-style: none; margin: 0;">
                ${c.methodology.points.map(p => `
                  <li class="text-body text-muted flex items-start gap-2" style="line-height: 1.6;">
                    <span style="color: var(--color-navy); font-weight: 800;">&bull;</span>
                    <span>${p}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="card card-elevated" style="padding: var(--space-7); background: #FFFFFF;">
              <span class="text-label">STUDENT PROFILE</span>
              <h3 class="text-h3 mt-2 mb-4" style="color: var(--color-ink);">${c.studentFit.headline}</h3>
              <p class="text-body text-muted mb-4" style="line-height: 1.65;">${c.studentFit.text}</p>
              <div class="p-4" style="background: var(--color-surface-muted); border: 1px solid var(--color-border); border-radius: var(--radius-sm); box-shadow: var(--shadow-lvl1);">
                <p class="text-small" style="font-weight: 600; color: var(--color-ink); margin: 0; line-height: 1.55;">
                  Note: Prior weak marks do not disqualify a student. Sincerity and active participation in class debugging sessions are the sole prerequisites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Batch and Location Info
           ================================================================== -->
      <section class="section section-atmosphere-vault">
        <div class="container">
          <div class="max-w-prose mb-6">
            <span class="text-label">BATCH & LOCATION SPECS</span>
            <h2 class="text-h2 mt-2" style="color: var(--color-ink);">Class Structure for SSC</h2>
          </div>

          <div class="grid grid-4 gap-4">
            ${BATCHES.map((b, idx) => `
              <div class="card card-interactive" style="padding: var(--space-5); background: #FFFFFF; border-top: 3px solid ${idx % 2 === 0 ? 'var(--color-navy)' : 'var(--color-teal)'};">
                <span class="badge ${idx % 2 === 0 ? 'badge-primary' : 'badge-teal'} mb-2">SSC Cohort</span>
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

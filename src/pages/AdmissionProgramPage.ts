/* ==========================================================================
   PAGE 07 — ADMISSION TEST PROGRAM VIEW CONTROLLER
   Source: 08_PROGRAM_ADMISSION_TEST.md
   SCIFINITY Design System V2.0 — Admission Test Program Detail
   ABSOLUTE CONTENT LOCK: All text, structure & links 100% exact
   ========================================================================== */

import { ADMISSION_PROGRAM_CONTENT } from '../content/en/programs.ts';
import { renderTenMinuteBridge } from '../components/signature/TenMinuteBridge.ts';

export function renderAdmissionProgramPage(): string {
  const c = ADMISSION_PROGRAM_CONTENT;

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
            <a href="/admission?prog=admission" class="btn btn-primary btn-lg" data-route="/admission">Apply for Admission Batch &rarr;</a>
            <a href="/system" class="btn btn-secondary btn-lg" data-route="/system">Explore Our System</a>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Subject Focus
           ================================================================== -->
      <section class="section section-atmosphere-system">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">ENGINEERING & A-UNIT PREPARATION</span>
            <h2 class="text-h2 mt-2" style="color: var(--color-ink);">Subjects Mentored at Admission Depth</h2>
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
           Foundation vs Shortcuts
           ================================================================== -->
      <section class="section section-atmosphere-beliefs">
        <div class="container container-narrow">
          <div class="card card-elevated" style="padding: var(--space-8); border-left: 4.5px solid var(--color-navy); background: #FFFFFF; border-radius: var(--radius-lg);">
            <span class="text-label">PHILOSOPHY OF ENTRANCE EXAMS</span>
            <h3 class="text-h3 mt-2 mb-4" style="color: var(--color-ink); font-size: 24px;">${c.foundationFirst.headline}</h3>
            <p class="text-lead text-muted max-w-prose" style="margin: 0; line-height: 1.7;">${c.foundationFirst.description}</p>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           10-Minute Bridge in Admission Context
           ================================================================== -->
      <section class="section section-atmosphere-bridge">
        <div class="container">
          <div class="max-w-prose mx-auto text-center">
            <span class="text-label">CONTINUOUS INTEGRATION</span>
            <h2 class="text-h2 mt-2 mb-3" style="color: var(--color-ink);">Connecting Board Foundations to Admission Testing</h2>
          </div>
          ${renderTenMinuteBridge()}
        </div>
      </section>

      <!-- ==================================================================
           Vault Resources Integration
           ================================================================== -->
      <section class="section section-atmosphere-vault">
        <div class="container container-narrow">
          <div class="card card-elevated" style="padding: var(--space-7); background: #FFFFFF; border-radius: var(--radius-md);">
            <div class="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div>
                <span class="badge badge-teal mb-2">Free Online Resources</span>
                <h3 class="text-h3" style="font-size: 21px; color: var(--color-ink);">Access The Vault</h3>
              </div>
              <a href="/vault" class="btn btn-secondary btn-sm" data-route="/vault">
                Enter The Vault &rarr;
              </a>
            </div>
            <p class="text-body text-muted mb-4" style="line-height: 1.65;">${c.resources.current}</p>
            <div class="p-3" style="background: #F0F9FF; border: 1px solid #BAE6FD; border-radius: var(--radius-sm); box-shadow: var(--shadow-lvl1);">
              <span class="status-tag planned">[PLANNED]</span>
              <span class="text-small" style="color: #0369A1; font-weight: 600; margin-left: 6px;">${c.resources.futureStatus}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Final CTA
           ================================================================== -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">Prepare with First-Principles Clarity</h2>
          <p class="text-lead mb-6 mx-auto" style="color: #94A3B8;">Apply for an upcoming Admission Test cohort.</p>
          <a href="/admission" class="btn btn-primary btn-lg" data-route="/admission">
            Apply for Admission &rarr;
          </a>
        </div>
      </section>
    </main>
  `;
}

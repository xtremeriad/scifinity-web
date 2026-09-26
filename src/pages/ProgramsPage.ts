/* ==========================================================================
   PAGE 04 — PROGRAMS INDEX VIEW CONTROLLER
   Source: 05_PROGRAMS.md
   SCIFINITY Design System V2.0 — Modern Academic & Technical Programs
   ABSOLUTE CONTENT LOCK: All text, structure & links 100% exact
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
      <!-- ==================================================================
           Hero: Academic & Technical Depth
           ================================================================== -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="badge badge-primary mb-3" style="padding: 5px 12px; font-size: 12px;">${c.hero.eyebrow}</span>
          <h1 class="text-display mb-4" style="color: var(--color-ink);">${c.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto" style="color: var(--color-text-secondary);">${c.hero.supporting}</p>
        </div>
      </section>

      <!-- ==================================================================
           Programs Grid (4 Dimensional Physical Cards)
           ================================================================== -->
      <section class="section section-atmosphere-programs">
        <div class="container">
          <div class="grid grid-4 gap-6">
            ${programList.map((prog, idx) => `
              <div class="card card-interactive flex flex-col justify-between" style="padding: var(--space-6); background: #FFFFFF; border-top: 3.5px solid ${idx === 0 ? 'var(--color-navy)' : idx === 1 ? 'var(--color-purple)' : idx === 2 ? 'var(--color-teal)' : 'var(--color-gold)'};">
                <div>
                  <div class="mb-3">
                    <span class="badge ${idx === 0 ? 'badge-primary' : idx === 1 ? 'badge-purple' : idx === 2 ? 'badge-teal' : 'badge-gold'}">${prog.target}</span>
                  </div>
                  <h2 class="text-h3" style="font-size: 20px; margin-bottom: 8px; color: var(--color-ink);">${prog.title}</h2>
                  <p class="text-body text-muted mb-4" style="font-size: 14px; line-height: 1.6;">${prog.positioning}</p>

                  <div class="mb-6">
                    <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 8px; color: var(--color-navy);">${prog.title.includes('FINAL SPRINT') ? 'Key Focus:' : 'Curriculum Subjects:'}</span>
                    <ul class="flex flex-col gap-1" style="padding-left: 0; list-style: none; margin: 0;">
                      ${prog.subjects.map(s => `
                        <li class="text-small flex items-center gap-2" style="font-weight: 600; color: var(--color-ink);">
                          <span style="display: inline-block; width: 5px; height: 5px; border-radius: 50%; background: var(--color-navy);"></span>
                          ${s}
                        </li>
                      `).join('')}
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

      <!-- ==================================================================
           Coaching Integrity & Batch Schedules
           ================================================================== -->
      <section class="section section-atmosphere-beliefs">
        <div class="container">
          <div class="max-w-prose mx-auto text-center mb-8">
            <span class="text-label">COACHING INTEGRITY</span>
            <h2 class="text-h2 mt-2 mb-3" style="color: var(--color-ink);">${c.batchInfo.headline}</h2>
            <p class="text-lead" style="font-weight: 700; color: var(--color-navy);">${c.batchInfo.maxSize}</p>
            <p class="text-body text-muted mt-2" style="margin: 0; line-height: 1.65;">${c.batchInfo.scheduleNote}</p>
          </div>

          <!-- 4 Batch Timing Cards -->
          <div class="grid grid-4 gap-4 mb-6">
            ${BATCHES.map((b, idx) => `
              <div class="card card-interactive" style="text-align: center; padding: var(--space-5); background: #FFFFFF; border-top: 3px solid ${idx % 2 === 0 ? 'var(--color-navy)' : 'var(--color-teal)'};">
                <span class="badge ${idx % 2 === 0 ? 'badge-primary' : 'badge-teal'} mb-2">Cohort</span>
                <h3 class="text-h3" style="font-size: 19px; color: var(--color-ink); margin: 0;">Batch ${b.name}</h3>
                <p class="text-lead" style="font-size: 15.5px; font-weight: 700; color: var(--color-navy); margin-top: var(--space-2); margin-bottom: 0;">${b.scheduleStatus}</p>
              </div>
            `).join('')}
          </div>

          <!-- 2 Campus Schedule Cards -->
          <div class="grid grid-2 gap-5">
            <div class="card card-elevated" style="padding: var(--space-6); text-align: center; background: #FFFFFF; border-top: 3.5px solid var(--color-navy);">
              <h3 class="text-h3" style="font-size: 19px; margin-bottom: 6px; color: var(--color-ink);">Uttara Campus</h3>
              <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 4px;">Schedule</span>
              <p class="text-body" style="font-weight: 700; color: var(--color-ink); margin: 0;">Saturday / Monday / Wednesday</p>
            </div>
            <div class="card card-elevated" style="padding: var(--space-6); text-align: center; background: #FFFFFF; border-top: 3.5px solid var(--color-teal);">
              <h3 class="text-h3" style="font-size: 19px; margin-bottom: 6px; color: var(--color-ink);">Patuatuli Campus</h3>
              <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 4px; color: var(--color-teal);">Schedule</span>
              <p class="text-body" style="font-weight: 700; color: var(--color-ink); margin: 0;">Sunday / Tuesday / Thursday</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Adyanta Ecosystem Distinction
           ================================================================== -->
      <section class="section section-atmosphere-vault">
        <div class="container container-narrow">
          <div class="card card-elevated" style="border-left: 4.5px solid var(--color-purple); padding: var(--space-6); background: #FFFFFF; border-radius: var(--radius-md);">
            <div class="flex items-center gap-2 mb-2">
              <span class="badge badge-purple">Publishing Ecosystem</span>
              <span class="status-tag confirmed">Separate Business</span>
            </div>
            <h3 class="text-h3" style="font-size: 20px; margin-bottom: 8px; color: var(--color-ink);">${c.adyantaDistinction.headline}</h3>
            <p class="text-body text-muted" style="margin: 0; line-height: 1.65;">${c.adyantaDistinction.text}</p>
          </div>
        </div>
      </section>

      <!-- ==================================================================
           CTA Banner
           ================================================================== -->
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

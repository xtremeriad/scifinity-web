/* ==========================================================================
   PAGE 13 — ADMISSION & APPLICATION VIEW CONTROLLER
   Source: 14_ADMISSION.md
   ========================================================================== */

import { ADMISSION_CONTENT } from '../content/en/admission.ts';
import { renderAdmissionForm } from '../components/functional/AdmissionForm.ts';

export function renderAdmissionPage(): string {
  const c = ADMISSION_CONTENT;

  return `
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${c.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4">${c.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto" style="color: var(--color-text-secondary);">${c.hero.supporting}</p>
        </div>
      </section>

      <!-- Mindset & Selective Character -->
      <section class="section">
        <div class="container container-narrow">
          <div class="card card-elevated" style="padding: var(--space-8); border-left: 4px solid var(--color-primary); background: #FFFFFF;">
            <span class="text-label">${c.mindsetRequirement.eyebrow}</span>
            <h2 class="text-h3 mt-2 mb-3" style="font-size: 24px; color: var(--color-ink);">${c.mindsetRequirement.headline}</h2>
            <p class="text-lead text-muted" style="font-size: 16px; line-height: 1.65; margin: 0;">${c.mindsetRequirement.description}</p>
          </div>
        </div>
      </section>

      <!-- 5-Step Application Progression -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mx-auto text-center mb-8">
            <span class="text-label">PROCESS PROGRESSION</span>
            <h2 class="text-h2 mt-2 mb-3">How We Welcome New Students</h2>
          </div>

          <div class="grid grid-5 gap-3">
            ${c.processSteps.map(st => `
              <div class="card card-interactive" style="padding: var(--space-5); background: #FFFFFF; border-top: 3px solid var(--color-primary);">
                <span class="badge badge-primary mb-2" style="font-size: 11px; padding: 2px 8px;">Stage ${st.step}</span>
                <h4 class="text-h4" style="font-size: 16px; margin-bottom: 4px; color: var(--color-ink);">${st.title}</h4>
                <p class="text-small text-muted" style="line-height: 1.45; margin: 0;">${st.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Main Form & Expectations Grid -->
      <section class="section">
        <div class="container">
          <div class="grid grid-sidebar gap-8 items-start">
            <!-- Sidebar: Commitments & Guardian Role -->
            <div class="flex flex-col gap-6">
              <div class="card card-elevated" style="padding: var(--space-6); background: #FFFFFF;">
                <span class="text-label">STUDENT COMMITMENT</span>
                <h3 class="text-h4 mt-2 mb-3" style="font-size: 20px; color: var(--color-ink);">What We Expect From You</h3>
                <ul class="flex flex-col gap-3" style="list-style: none; padding: 0; margin: 0;">
                  ${c.studentCommitments.map(cm => `
                    <li class="text-small text-muted" style="display: flex; gap: 8px; font-size: 13.5px; line-height: 1.5;">
                      <span style="color: var(--color-primary); font-weight: 700;">✓</span>
                      <span>${cm}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <div class="card card-elevated" style="padding: var(--space-6); background: #FFFFFF;">
                <span class="text-label">GUARDIAN PARTNERSHIP</span>
                <h3 class="text-h4 mt-2 mb-3" style="font-size: 20px; color: var(--color-ink);">${c.parentRole.headline}</h3>
                <p class="text-small text-muted" style="font-size: 13.5px; line-height: 1.55; margin: 0;">${c.parentRole.description}</p>
              </div>
            </div>

            <!-- Form Container -->
            <div>
              ${renderAdmissionForm()}
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

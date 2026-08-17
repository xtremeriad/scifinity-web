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
          <p class="text-lead max-w-prose mx-auto">${c.hero.supporting}</p>
        </div>
      </section>

      <!-- Mindset & Selective Character -->
      <section class="section">
        <div class="container container-narrow">
          <div class="card" style="padding: var(--space-6); border-left: 4px solid var(--color-primary); background: #F8FAFC;">
            <span class="text-label">${c.mindsetRequirement.eyebrow}</span>
            <h2 class="text-h3 mt-2 mb-3">${c.mindsetRequirement.headline}</h2>
            <p class="text-lead text-muted">${c.mindsetRequirement.description}</p>
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
              <div class="card" style="padding: var(--space-4); background: #FFFFFF; border-top: 3px solid var(--color-primary);">
                <span class="badge badge-primary mb-2">Stage ${st.step}</span>
                <h4 class="text-h4" style="font-size: 16px; margin-bottom: 4px;">${st.title}</h4>
                <p class="text-small text-muted">${st.desc}</p>
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
              <div class="card" style="padding: var(--space-6);">
                <span class="text-label">STUDENT COMMITMENT</span>
                <h3 class="text-h4 mt-2 mb-3">What We Expect From You</h3>
                <ul class="flex flex-col gap-3">
                  ${c.studentCommitments.map(cm => `
                    <li class="text-small text-muted" style="display: flex; gap: 8px;">
                      <span style="color: var(--color-primary); font-weight: 700;">✓</span>
                      <span>${cm}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <div class="card" style="padding: var(--space-6);">
                <span class="text-label">GUARDIAN PARTNERSHIP</span>
                <h3 class="text-h4 mt-2 mb-3">${c.parentRole.headline}</h3>
                <p class="text-small text-muted">${c.parentRole.description}</p>
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

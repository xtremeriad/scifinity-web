/* ==========================================================================
   PAGE 03 — OUR SYSTEM VIEW CONTROLLER
   Source: 04_OUR_SYSTEM.md
   ========================================================================== */

import { SYSTEM_CONTENT } from '../content/en/system.ts';
import { renderSemicircularClassroom } from '../components/signature/SemicircularClassroom.ts';
import { renderDebuggingFlow } from '../components/signature/DebuggingFlow.ts';
import { renderTenMinuteBridge } from '../components/signature/TenMinuteBridge.ts';

export function renderSystemPage(): string {
  const c = SYSTEM_CONTENT;

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

      <!-- System Mechanisms Grid -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">FOUNDATIONAL MECHANISMS</span>
            <h2 class="text-h2 mt-2">How We Mentor Every Day</h2>
          </div>

          <div class="grid grid-2 gap-6">
            ${c.sections.map(sec => `
              <div class="card card-interactive">
                <div class="flex items-center justify-between mb-3">
                  <span class="badge badge-primary">Mechanism ${sec.number}</span>
                </div>
                <h3 class="text-h3" style="font-size: 20px; margin-bottom: 8px;">${sec.title}</h3>
                <p class="text-body text-muted">${sec.description}</p>

                ${sec.flow ? `
                  <div class="mt-4 p-3" style="background: var(--color-surface-muted); border-radius: var(--radius-sm);">
                    <span class="text-label" style="font-size: 10px; display: block; margin-bottom: 4px;">Sequence Flow:</span>
                    <div class="flex items-center gap-2 flex-wrap text-small" style="font-weight: 600; color: var(--color-ink);">
                      ${sec.flow.map((f, i) => `<span>${f}</span>${i < sec.flow!.length - 1 ? '<span style="color: var(--color-primary);">&rarr;</span>' : ''}`).join('')}
                    </div>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Visualizer: Semicircular Classroom -->
      <section class="section section-surface">
        <div class="container container-narrow">
          ${renderSemicircularClassroom()}
        </div>
      </section>

      <!-- Visualizer: Debugging Flow -->
      <section class="section">
        <div class="container">
          ${renderDebuggingFlow()}
        </div>
      </section>

      <!-- Visualizer: 10-Minute Bridge -->
      <section class="section section-surface">
        <div class="container">
          <div class="max-w-prose mx-auto text-center">
            <span class="text-label">CONTINUOUS SYNTHESIS</span>
            <h2 class="text-h2 mt-2 mb-3">The 10-Minute Bridge Mechanism</h2>
            <p class="text-lead">
              Connecting past prerequisite intuition, today’s board lesson, and future competitive entrance requirements in every class.
            </p>
          </div>
          ${renderTenMinuteBridge()}
        </div>
      </section>

      <!-- Expected Development Lifecycle -->
      <section class="section">
        <div class="container">
          <div class="text-center max-w-prose mx-auto mb-8">
            <span class="text-label">${c.developmentCycle.eyebrow}</span>
            <h2 class="text-h2 mt-2 mb-3">${c.developmentCycle.headline}</h2>
          </div>

          <div class="grid grid-3 gap-4">
            ${c.developmentCycle.stages.map((st, i) => `
              <div class="card" style="padding: var(--space-4); border-top: 3px solid var(--color-primary);">
                <span class="text-label">Stage 0${i + 1}</span>
                <h4 class="text-h4 mt-1 mb-2">${st.name}</h4>
                <p class="text-small text-muted">${st.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- System CTA -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">${c.cta.headline}</h2>
          <p class="text-lead mb-6 mx-auto" style="color: #94A3B8; max-width: 600px;">${c.cta.description}</p>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${c.cta.primary.route}" class="btn btn-primary btn-lg" data-route="${c.cta.primary.route}">
              ${c.cta.primary.label}
            </a>
            <a href="${c.cta.secondary.route}" class="btn btn-outline-white btn-lg" data-route="${c.cta.secondary.route}">
              ${c.cta.secondary.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  `;
}

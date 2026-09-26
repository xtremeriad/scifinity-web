/* ==========================================================================
   PAGE 03 — OUR SYSTEM VIEW CONTROLLER
   Source: 04_OUR_SYSTEM.md
   SCIFINITY Design System V2.0 — Structured & Process-Oriented Pedagogical System
   ABSOLUTE CONTENT LOCK: All text, structure & links 100% exact
   ========================================================================== */

import { SYSTEM_CONTENT } from '../content/en/system.ts';
import { renderSemicircularClassroom } from '../components/signature/SemicircularClassroom.ts';
import { renderDebuggingFlow } from '../components/signature/DebuggingFlow.ts';
import { renderTenMinuteBridge } from '../components/signature/TenMinuteBridge.ts';

export function renderSystemPage(): string {
  const c = SYSTEM_CONTENT;

  return `
    <main id="main-content">
      <!-- ==================================================================
           Hero: Systematic & Process Atmosphere
           ================================================================== -->
      <section class="section section-hero">
        <div class="container container-narrow text-center">
          <span class="badge badge-primary mb-3" style="padding: 5px 12px; font-size: 12px;">${c.hero.eyebrow}</span>
          <h1 class="text-display mb-4" style="color: var(--color-ink);">${c.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto" style="color: var(--color-text-secondary);">${c.hero.supporting}</p>
        </div>
      </section>

      <!-- ==================================================================
           System Mechanisms Grid (14 Foundational Mechanisms)
           ================================================================== -->
      <section class="section section-atmosphere-system">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">FOUNDATIONAL MECHANISMS</span>
            <h2 class="text-h2 mt-2" style="color: var(--color-ink);">How We Mentor Every Day</h2>
          </div>

          <div class="grid grid-2 gap-6">
            ${c.sections.map((sec, idx) => `
              <div class="card card-interactive" style="background: #FFFFFF; border-top: 3.5px solid ${idx % 3 === 0 ? 'var(--color-navy)' : idx % 3 === 1 ? 'var(--color-teal)' : 'var(--color-purple)'};">
                <div class="flex items-center justify-between mb-3">
                  <span class="badge ${idx % 3 === 0 ? 'badge-primary' : idx % 3 === 1 ? 'badge-teal' : 'badge-purple'}">
                    Mechanism ${sec.number}
                  </span>
                </div>
                <h3 class="text-h3" style="font-size: 20px; margin-bottom: 8px; color: var(--color-ink);">${sec.title}</h3>
                <p class="text-body text-muted" style="margin: 0; line-height: 1.65;">${sec.description}</p>

                ${sec.flow ? `
                  <div class="mt-4 p-3" style="background: var(--color-surface-muted); border: 1px solid var(--color-border); border-radius: var(--radius-sm); box-shadow: var(--shadow-lvl1);">
                    <span class="text-label" style="font-size: 10px; display: block; margin-bottom: 4px; color: var(--color-navy);">Sequence Flow:</span>
                    <div class="flex items-center gap-2 flex-wrap text-small" style="font-weight: 700; color: var(--color-ink);">
                      ${sec.flow.map((f, i) => `<span>${f}</span>${i < sec.flow!.length - 1 ? '<span style="color: var(--color-navy);">&rarr;</span>' : ''}`).join('')}
                    </div>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           Visualizer: Semicircular Classroom
           ================================================================== -->
      <section class="section section-surface">
        <div class="container container-narrow">
          ${renderSemicircularClassroom()}
        </div>
      </section>

      <!-- ==================================================================
           Visualizer: Debugging Flow
           ================================================================== -->
      <section class="section section-atmosphere-beliefs">
        <div class="container">
          ${renderDebuggingFlow()}
        </div>
      </section>

      <!-- ==================================================================
           Visualizer: 10-Minute Bridge
           ================================================================== -->
      <section class="section section-atmosphere-bridge">
        <div class="container">
          <div class="max-w-prose mx-auto text-center">
            <span class="text-label">CONTINUOUS SYNTHESIS</span>
            <h2 class="text-h2 mt-2 mb-3" style="color: var(--color-ink);">The 10-Minute Bridge Mechanism</h2>
            <p class="text-lead" style="color: var(--color-text-secondary);">
              Connecting past prerequisite intuition, today’s board lesson, and future competitive entrance requirements in every class.
            </p>
          </div>
          ${renderTenMinuteBridge()}
        </div>
      </section>

      <!-- ==================================================================
           Expected Development Lifecycle
           ================================================================== -->
      <section class="section section-atmosphere-vault">
        <div class="container">
          <div class="text-center max-w-prose mx-auto mb-8">
            <span class="text-label">${c.developmentCycle.eyebrow}</span>
            <h2 class="text-h2 mt-2 mb-3" style="color: var(--color-ink);">${c.developmentCycle.headline}</h2>
          </div>

          <div class="grid grid-3 gap-5">
            ${c.developmentCycle.stages.map((st, i) => `
              <div class="card card-interactive" style="padding: var(--space-5); background: #FFFFFF; border-top: 3.5px solid ${i % 3 === 0 ? 'var(--color-navy)' : i % 3 === 1 ? 'var(--color-purple)' : 'var(--color-teal)'};">
                <span class="badge ${i % 3 === 0 ? 'badge-primary' : i % 3 === 1 ? 'badge-purple' : 'badge-teal'} mb-2">Stage 0${i + 1}</span>
                <h4 class="text-h4 mt-1 mb-2" style="font-size: 17px; color: var(--color-ink);">${st.name}</h4>
                <p class="text-small text-muted" style="margin: 0; line-height: 1.55;">${st.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- ==================================================================
           System CTA
           ================================================================== -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">${c.cta.headline}</h2>
          <p class="text-lead mb-6 mx-auto" style="color: #94A3B8; max-width: 600px;">${c.cta.description}</p>
          <div class="flex gap-4 justify-center flex-wrap">
            <a href="${c.cta.primary.route}" class="btn btn-primary btn-lg" data-route="${c.cta.primary.route}">
              ${c.cta.primary.label} &rarr;
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

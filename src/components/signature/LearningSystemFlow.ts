/* ==========================================================================
   SIGNATURE COMPONENT: 9-STAGE LEARNING SYSTEM FLOW
   Source: 02_HOME, 04_OUR_SYSTEM
   SCIFINITY Design System V2.0 — 3D Physical Cards & Interactive Flow
   ========================================================================== */

import { HOME_CONTENT } from '../../content/en/home.ts';

export function renderLearningSystemFlow(): string {
  const steps = HOME_CONTENT.learningSystem.steps;

  const stepsHtml = steps.map((s, idx) => `
    <div class="flow-step-card ${idx === 0 ? 'selected' : ''}" data-step="${s.step}">
      <div class="flex items-center justify-between mb-2">
        <span class="badge ${idx % 3 === 0 ? 'badge-primary' : idx % 3 === 1 ? 'badge-teal' : 'badge-purple'}">
          Stage ${s.step}
        </span>
        <span style="font-size: 11px; font-weight: 700; color: var(--color-text-subtle);">${idx + 1}/9</span>
      </div>
      <h4 class="text-h4" style="font-size: 17.5px; margin-top: 2px; margin-bottom: 6px; color: var(--color-ink);">${s.title}</h4>
      <p class="text-small text-muted" style="margin: 0; line-height: 1.55;">${s.desc}</p>
    </div>
  `).join('');

  return `
    <div class="learning-flow-container">
      <div class="learning-flow-grid">
        ${stepsHtml}
      </div>
    </div>
  `;
}

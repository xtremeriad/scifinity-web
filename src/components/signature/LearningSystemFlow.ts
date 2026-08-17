/* ==========================================================================
   SIGNATURE COMPONENT: 9-STAGE LEARNING SYSTEM FLOW
   Source: 02_HOME, 04_OUR_SYSTEM
   ========================================================================== */

import { HOME_CONTENT } from '../../content/en/home.ts';

export function renderLearningSystemFlow(): string {
  const steps = HOME_CONTENT.learningSystem.steps;

  const stepsHtml = steps.map(s => `
    <div class="flow-step-card" data-step="${s.step}">
      <div class="flex items-center justify-between">
        <span class="flow-step-badge">Stage ${s.step}</span>
      </div>
      <h4 class="text-h4" style="font-size: 18px; margin-top: 4px; margin-bottom: 4px;">${s.title}</h4>
      <p class="text-small text-muted">${s.desc}</p>
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

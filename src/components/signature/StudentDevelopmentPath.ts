/* ==========================================================================
   SIGNATURE COMPONENT: STUDENT DEVELOPMENT PROGRESSION
   Source: 02_HOME, 04_OUR_SYSTEM
   ========================================================================== */

import { HOME_CONTENT } from '../../content/en/home.ts';

export function renderStudentDevelopmentPath(): string {
  const milestones = HOME_CONTENT.developmentPath.milestones;

  return `
    <div style="margin-top: var(--space-6);">
      <div class="grid grid-4 gap-3">
        ${milestones.map((m, idx) => `
          <div class="card" style="padding: var(--space-4); border-left: 3px solid var(--color-accent); background: #FFFFFF;">
            <div class="flex items-center justify-between mb-2">
              <span class="text-label" style="color: var(--color-accent-hover);">Phase 0${idx + 1}</span>
            </div>
            <h4 class="text-h4" style="font-size: 16px;">${m}</h4>
          </div>
        `).join('')}
      </div>
      <p class="text-small text-muted mt-3" style="text-align: center;">
        Note: This reflects our intended pedagogical progression, not an artificial marketing guarantee.
      </p>
    </div>
  `;
}

/* ==========================================================================
   SIGNATURE COMPONENT: STUDENT DEVELOPMENT PROGRESSION
   Source: 02_HOME, 04_OUR_SYSTEM
   SCIFINITY Design System V2.0 — 8-Phase Developmental Progression
   ========================================================================== */

import { HOME_CONTENT } from '../../content/en/home.ts';

export function renderStudentDevelopmentPath(): string {
  const milestones = HOME_CONTENT.developmentPath.milestones;

  return `
    <div style="margin-top: var(--space-7);">
      <div class="grid grid-4 gap-4">
        ${milestones.map((m, idx) => `
          <div class="card card-interactive" style="padding: var(--space-5); border-left: 3.5px solid var(--color-teal); background: #FFFFFF;">
            <div class="flex items-center justify-between mb-2">
              <span class="badge badge-teal" style="font-size: 11px;">Phase 0${idx + 1}</span>
            </div>
            <h4 class="text-h4" style="font-size: 16px; margin: 0; color: var(--color-ink); line-height: 1.45;">${m}</h4>
          </div>
        `).join('')}
      </div>
      <p class="text-small text-muted mt-5" style="text-align: center; max-width: 640px; margin-left: auto; margin-right: auto;">
        Note: This reflects our intended pedagogical progression, not an artificial marketing guarantee.
      </p>
    </div>
  `;
}

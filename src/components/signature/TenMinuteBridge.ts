/* ==========================================================================
   SIGNATURE COMPONENT: THE 10-MINUTE BRIDGE
   Source: 02_HOME, 04_OUR_SYSTEM
   SCIFINITY Design System V2.0 — 3D Progressive Bridge Visualization
   ========================================================================== */

import { HOME_CONTENT } from '../../content/en/home.ts';

export function renderTenMinuteBridge(): string {
  const parts = HOME_CONTENT.tenMinuteBridge.parts;

  return `
    <div class="bridge-wrapper" style="margin-top: var(--space-7);">
      <div class="bridge-container">
        ${parts.map((p, idx) => `
          <div class="bridge-step ${idx === 1 ? 'active' : ''}">
            <div class="flex items-center justify-between mb-3">
              <span class="bridge-step-number">${p.stage}</span>
              <span class="badge ${idx === 1 ? 'badge-primary' : 'badge-neutral'}">Step 0${idx + 1}</span>
            </div>
            <h4 class="text-h4" style="font-size: 19px; margin-bottom: 6px; color: var(--color-ink);">${p.title}</h4>
            <p class="text-body text-muted" style="font-size: 14.5px; line-height: 1.6; margin: 0;">${p.desc}</p>
          </div>
        `).join('')}
      </div>
      <p class="text-small text-muted mt-5" style="text-align: center; font-style: italic; max-width: 680px; margin-left: auto; margin-right: auto;">
        ${HOME_CONTENT.tenMinuteBridge.note}
      </p>
    </div>
  `;
}

/* ==========================================================================
   PAGE 12 — LOCATIONS VIEW CONTROLLER
   Source: 13_LOCATIONS.md
   Updated with verified addresses and batch schedules.
   ========================================================================== */

import { LOCATIONS_CONTENT } from '../content/en/locations.ts';
import { renderStatusBadge } from '../components/global/StatusBadge.ts';

export function renderLocationsPage(): string {
  const c = LOCATIONS_CONTENT;

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

      <!-- Shared Standards -->
      <section class="section">
        <div class="container">
          <div class="max-w-prose mb-8">
            <span class="text-label">${c.sharedSystemPrinciples.eyebrow}</span>
            <h2 class="text-h2 mt-2">${c.sharedSystemPrinciples.headline}</h2>
          </div>

          <div class="grid grid-4 gap-4">
            ${c.sharedSystemPrinciples.points.map(p => `
              <div class="card" style="padding: var(--space-4);">
                <h3 class="text-h4 mb-2" style="font-size: 17px; color: var(--color-primary);">${p.title}</h3>
                <p class="text-small text-muted">${p.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Location Hubs Grid -->
      <section class="section section-surface">
        <div class="container">
          <div class="grid grid-2 gap-8">
            ${c.locationsList.map(loc => `
              <div class="card" style="padding: var(--space-6);">
                <div class="flex items-center justify-between mb-3">
                  <div>
                    <h3 class="text-h3" style="font-size: 24px;">${loc.name}</h3>
                    <span class="text-small text-muted">${loc.city}</span>
                  </div>
                  <span class="status-tag confirmed">Confirmed Center</span>
                </div>

                <div class="flex flex-col gap-4 mt-4">
                  <!-- Address Box -->
                  <div class="p-3" style="background: var(--color-surface-muted); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                    <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 4px;">Official Location:</span>
                    <span style="font-size: 16px; font-weight: 600; color: var(--color-ink);">${loc.addressRequired}</span>
                  </div>

                  <!-- Days Schedule -->
                  <div class="p-3" style="background: #F0FDF4; border-radius: var(--radius-sm); border: 1px solid #BBF7D0;">
                    <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 2px; color: #166534;">Class Days:</span>
                    <strong style="font-size: 15px; color: #15803D;">${loc.daysSchedule}</strong>
                  </div>

                  <!-- Batch Timings -->
                  <div>
                    <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 6px;">Daily Batch Timings:</span>
                    <div class="grid grid-2 gap-2">
                      ${loc.batches.map(b => `
                        <div class="p-2" style="background: var(--color-surface-muted); border-radius: 4px; font-size: 13px; font-weight: 500;">
                          ${b}
                        </div>
                      `).join('')}
                    </div>
                  </div>

                  <!-- Facilities Notice -->
                  <div class="p-3" style="background: var(--color-surface-muted); border-radius: var(--radius-sm); font-size: 12px; color: var(--color-text-muted);">
                    <span class="text-label" style="font-size: 10px; display: block; margin-bottom: 2px;">Classroom Facility:</span>
                    Strict 15-student semicircular seating with direct line-of-sight engagement.
                  </div>
                </div>

                <div class="mt-6 pt-4" style="border-top: 1px solid var(--color-border);">
                  <a href="/admission?loc=${loc.id}" class="btn btn-primary btn-sm w-full" data-route="/admission">
                    Apply for ${loc.name} Placement &rarr;
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Standard Batch Schedule Reference Table -->
      <section class="section">
        <div class="container container-narrow">
          <div class="card" style="padding: var(--space-6); background: #FFFFFF;">
            <span class="text-label mb-2" style="display: block;">STANDARDIZED TIME SLOTS</span>
            <h3 class="text-h3 mb-4" style="font-size: 20px;">Master Daily Schedule Across Batches</h3>
            <div class="grid grid-4 gap-3">
              ${c.standardTimings.map(st => `
                <div class="p-3 text-center" style="background: var(--color-surface-muted); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                  <strong style="display: block; font-size: 14px; color: var(--color-primary);">${st.name}</strong>
                  <span style="font-size: 13px; color: var(--color-ink); font-weight: 600; margin-top: 4px; display: block;">${st.time}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- Map & Directions Placeholder -->
      <section class="section section-surface">
        <div class="container container-narrow">
          <div class="card" style="padding: var(--space-8); border: 2px dashed var(--color-border); text-align: center; background: #F8FAFC;">
            <div class="flex items-center justify-center gap-2 mb-3">
              <span class="text-label">MAPS & DIRECTIONS</span>
              ${renderStatusBadge(c.mapNotice.status)}
            </div>
            <h3 class="text-h3 mb-3" style="font-size: 20px;">Google Maps Integration</h3>
            <p class="text-body text-muted max-w-prose mx-auto">
              ${c.mapNotice.text}
            </p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section section-dark text-center">
        <div class="container container-narrow">
          <h2 class="text-h2 mb-4" style="color: #FFFFFF;">${c.cta.headline}</h2>
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

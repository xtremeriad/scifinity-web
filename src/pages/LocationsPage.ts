/* ==========================================================================
   PAGE 12 — LOCATIONS VIEW CONTROLLER
   Source: 13_LOCATIONS.md
   Updated with verified addresses, batch schedules, narrative cards.
   ========================================================================== */

import { LOCATIONS_CONTENT } from '../content/en/locations.ts';

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
              <div class="card" style="padding: var(--space-6); display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                  <!-- Campus Header -->
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <h3 class="text-h3" style="font-size: 24px; margin-bottom: 2px;">${loc.name}</h3>
                      <span class="text-small text-muted">${loc.city}</span>
                    </div>
                    <span class="status-tag confirmed">Confirmed Center</span>
                  </div>

                  <div class="flex flex-col gap-4 mt-2">
                    <!-- Official Location Box -->
                    <div class="p-3" style="background: var(--color-surface-muted); border-radius: var(--radius-sm); border: 1px solid var(--color-border);">
                      <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 4px;">Official Location:</span>
                      <span style="font-size: 15.5px; font-weight: 600; color: var(--color-ink);">${loc.addressRequired}</span>
                    </div>

                    <!-- Class Days Schedule -->
                    <div class="p-3" style="background: #F0FDF4; border-radius: var(--radius-sm); border: 1px solid #BBF7D0;">
                      <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 2px; color: #166534;">Class Days:</span>
                      <strong style="font-size: 15px; color: #15803D;">${loc.daysSchedule}</strong>
                    </div>

                    <!-- Daily Batch Timings -->
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

                    <!-- The Story Card -->
                    <div class="card" style="background: #F8FAFC; border: 1px solid var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">
                      <p class="text-body" style="font-size: 13.5px; line-height: 1.6; color: var(--color-text); margin: 0;">
                        ${loc.story}
                      </p>
                    </div>

                    <!-- The Environment Card -->
                    <div class="card" style="background: #F8FAFC; border: 1px solid var(--color-border); padding: var(--space-4); border-radius: var(--radius-sm);">
                      <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 6px; color: var(--color-primary);">THE ENVIRONMENT</span>
                      <div style="display: flex; flex-direction: column; gap: 6px;">
                        ${loc.environment.map(item => `
                          <p class="text-body" style="font-size: 13.5px; line-height: 1.55; color: var(--color-text); margin: 0;">
                            ${item}
                          </p>
                        `).join('')}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Application button -->
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

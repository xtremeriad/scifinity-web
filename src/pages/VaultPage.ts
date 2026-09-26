/* ==========================================================================
   PAGE 11 — THE VAULT VIEW CONTROLLER
   Source: 12_THE_VAULT.md
   ========================================================================== */

import { VAULT_CONTENT } from '../content/en/vault.ts';
import { renderStatusBadge } from '../components/global/StatusBadge.ts';

export function renderVaultPage(): string {
  const c = VAULT_CONTENT;

  return `
    <main id="main-content">
      <!-- Hero -->
      <section class="section section-hero section-atmosphere-vault">
        <div class="container container-narrow text-center">
          <span class="text-label mb-3" style="display: inline-block;">${c.hero.eyebrow}</span>
          <h1 class="text-h1 display-title mb-4">${c.hero.headline}</h1>
          <p class="text-lead max-w-prose mx-auto mb-5" style="color: var(--color-text-secondary);">${c.hero.supporting}</p>
          <span class="badge badge-accent" style="font-weight: 600; padding: 6px 14px; font-size: 13.5px;">${c.hero.accessNotice}</span>
        </div>
      </section>

      <!-- Category Filter Pills & Resource Repository -->
      <section class="section">
        <div class="container">
          <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <span class="text-label">RESOURCE REPOSITORY</span>
              <h2 class="text-h2 mt-2">Analytical Tips & Frameworks</h2>
            </div>
            
            <div class="flex gap-2 flex-wrap" id="vaultCategoryFilters">
              ${c.categories.map((cat, i) => `
                <button type="button" class="btn btn-sm ${i === 0 ? 'btn-primary' : 'btn-secondary'} vault-filter-btn" data-category="${cat.name}">
                  ${cat.name}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Resource Cards Grid -->
          <div class="grid grid-3 gap-6" id="vaultGrid">
            ${c.resources.map(res => `
              <div class="card card-interactive flex flex-col justify-between" data-category="${res.category}" style="padding: var(--space-6);">
                <div>
                  <div class="flex items-center justify-between mb-3">
                    <span class="badge badge-accent" style="font-size: 11px;">${res.category}</span>
                    <span class="text-small text-muted" style="font-weight: 600;">${res.level}</span>
                  </div>
                  <h3 class="text-h4 mb-3" style="font-size: 19px; color: var(--color-ink); line-height: 1.4;">${res.title}</h3>
                  <p class="text-body text-muted mb-4" style="font-size: 14.5px; line-height: 1.6;">${res.description}</p>
                </div>
                <div class="flex items-center justify-between pt-4" style="border-top: 1px solid var(--color-border-subtle);">
                  <span class="text-small text-muted" style="font-weight: 500;">${res.readTime}</span>
                  <span class="text-small" style="color: var(--color-primary); font-weight: 700;">Free Access &rarr;</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Planned Expansion Notice -->
      <section class="section section-surface">
        <div class="container container-narrow">
          <div class="card card-elevated" style="padding: var(--space-8); border: 1.5px solid #BAE6FD; background: linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%); text-align: center;">
            <div class="flex items-center justify-center gap-2 mb-3 flex-wrap">
              <span class="text-label" style="color: #0284C7;">${c.plannedExpansion.eyebrow}</span>
              ${renderStatusBadge(c.plannedExpansion.status)}
            </div>
            <h3 class="text-h3 mb-3" style="color: #0369A1; font-size: 24px;">${c.plannedExpansion.headline}</h3>
            <p class="text-body max-w-prose mx-auto" style="color: #0C4A6E; line-height: 1.65; font-size: 15.5px;">
              ${c.plannedExpansion.description}
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

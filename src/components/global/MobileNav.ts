/* ==========================================================================
   MOBILE NAVIGATION DRAWER COMPONENT
   ========================================================================== */

import { NAVIGATION_ITEMS } from '../../content/site-config.ts';
import { SCIFINITY_OWNER_DATA } from '../../content/placeholders.ts';
import { store } from '../../state/store.ts';

export function renderMobileNav(currentRoute: string): string {
  const isBn = store.language === 'bn';
  const logoUrl = SCIFINITY_OWNER_DATA.assets.logoPath;

  const navLinksHtml = NAVIGATION_ITEMS.map(item => {
    const isActive = currentRoute === item.route;
    const label = isBn ? item.labelBn : item.labelEn;
    return `
      <a href="${item.route}" class="nav-link ${isActive ? 'active' : ''}" data-nav-link data-route="${item.route}" style="font-size: 17px; padding: 12px 16px;">
        ${label}
      </a>
    `;
  }).join('');

  return `
    <div class="mobile-drawer" id="mobileDrawer" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      <div class="mobile-drawer-content">
        <div class="flex items-center justify-between mb-6">
          <a href="/" class="brand-logo" data-route="/" aria-label="SCIFINITY Home">
            <img src="${logoUrl}" alt="SCIFINITY" style="height: 44px; width: auto; max-width: 150px; object-fit: contain;" />
          </a>
          <button type="button" id="mobileDrawerClose" class="btn btn-secondary btn-sm" aria-label="Close menu" style="padding: 6px 10px;">
            ✕
          </button>
        </div>

        <nav class="flex flex-col gap-1 mb-8" role="navigation" aria-label="Mobile Navigation Links">
          ${navLinksHtml}
        </nav>

        <div class="mt-auto flex flex-col gap-4">
          <div class="flex items-center justify-between p-3" style="background: var(--color-surface-muted); border-radius: var(--radius-sm);">
            <span class="text-small" style="font-weight: 600;">Language / ভাষা</span>
            <div class="lang-toggle">
              <button type="button" class="lang-btn ${!isBn ? 'active' : ''}" data-lang="en">EN</button>
              <button type="button" class="lang-btn ${isBn ? 'active' : ''}" data-lang="bn">বাংলা</button>
            </div>
          </div>

          <a href="/admission" class="btn btn-primary w-full" data-route="/admission">
            ${isBn ? 'ভর্তি আবেদন করুন' : 'Apply for Admission'}
          </a>
        </div>
      </div>
    </div>
  `;
}

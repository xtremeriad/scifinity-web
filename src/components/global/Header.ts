/* ==========================================================================
   HEADER & NAVIGATION COMPONENT
   Official Brand System v1.0
   ========================================================================== */

import { NAVIGATION_ITEMS } from '../../content/site-config.ts';
import { SCIFINITY_OWNER_DATA } from '../../content/placeholders.ts';
import { store } from '../../state/store.ts';

export function renderHeader(currentRoute: string): string {
  const isBn = store.language === 'bn';
  const logoUrl = SCIFINITY_OWNER_DATA.assets.logoPath;

  // Primary navigation links shown in header
  const navLinksHtml = NAVIGATION_ITEMS.map(item => {
    const isActive = currentRoute === item.route || (item.route !== '/' && currentRoute.startsWith(item.route));
    const label = isBn ? item.labelBn : item.labelEn;
    return `
      <a href="${item.route}" class="nav-link ${isActive ? 'active' : ''}" data-nav-link data-route="${item.route}">
        ${label}
      </a>
    `;
  }).join('');

  return `
    <header class="site-header" role="banner">
      <div class="container header-inner">
        <a href="/" class="brand-logo" data-route="/" aria-label="SCIFINITY Home">
          <img src="${logoUrl}" alt="SCIFINITY — Where Ingenuity Meets Curiosity" class="brand-logo-img" />
        </a>

        <nav class="nav-desktop" role="navigation" aria-label="Main Navigation">
          ${navLinksHtml}
        </nav>

        <div class="header-actions">
          <div class="lang-toggle" role="group" aria-label="Language selector">
            <button type="button" class="lang-btn ${!isBn ? 'active' : ''}" data-lang="en" aria-pressed="${!isBn}">EN</button>
            <button type="button" class="lang-btn ${isBn ? 'active' : ''}" data-lang="bn" aria-pressed="${isBn}">বাংলা</button>
          </div>

          <a href="/admission" class="btn btn-primary btn-sm" data-route="/admission">
            ${isBn ? 'ভর্তি আবেদন' : 'Apply Now'}
          </a>

          <button type="button" class="mobile-nav-toggle" id="mobileNavToggle" aria-label="Open Navigation Menu" aria-expanded="false">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  `;
}

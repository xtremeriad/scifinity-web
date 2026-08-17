/* ==========================================================================
   FOOTER COMPONENT
   Source: 15_GLOBAL_SHELL_COMPONENTS_AND_DESIGN.md
   Updated with official verified contact coordinates and social channels.
   ========================================================================== */

import { SITE_CONFIG } from '../../content/site-config.ts';
import { SCIFINITY_OWNER_DATA } from '../../content/placeholders.ts';
import { store } from '../../state/store.ts';

export function renderFooter(): string {
  const isBn = store.language === 'bn';
  const c = SCIFINITY_OWNER_DATA.contact;
  const loc = SCIFINITY_OWNER_DATA.locations;

  return `
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-top-grid">
          <!-- Identity Column -->
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="brand-symbol" style="background: #2563EB; color: #FFFFFF;" aria-hidden="true">S</div>
              <span class="brand-text" style="color: #FFFFFF;">${SITE_CONFIG.brandName}</span>
            </div>
            <p class="text-small" style="color: #94A3B8; margin-bottom: var(--space-4); max-width: 320px;">
              ${isBn ? 'এসএসসি, এইচএসসি এবং অ্যাডমিশন টেস্ট শিক্ষার্থীদের জন্য একটি মেন্টর-পরিচালিত শিক্ষামূলক ইকোসিস্টেম।' : 'A mentor-led educational ecosystem for SSC, HSC and Admission Test students—built to make learning meaningful, analytical and engaging.'}
            </p>
            <p class="text-small text-muted" style="font-size: 13px;">
              Est. 2014 &bull; Max 15 students per batch
            </p>
          </div>

          <!-- Explore Column -->
          <div>
            <h3 class="footer-col-title">${isBn ? 'অন্বেষণ' : 'Explore'}</h3>
            <ul class="footer-link-list">
              <li><a href="/why-scifinity" class="footer-link" data-route="/why-scifinity">${isBn ? 'কেন সাইফিনিটি' : 'Why SCIFINITY'}</a></li>
              <li><a href="/system" class="footer-link" data-route="/system">${isBn ? 'আমাদের পদ্ধতি' : 'Our System'}</a></li>
              <li><a href="/programs" class="footer-link" data-route="/programs">${isBn ? 'প্রোগ্রামসমূহ' : 'Programs'}</a></li>
              <li><a href="/founder" class="footer-link" data-route="/founder">${isBn ? 'প্রতিষ্ঠাতা ও মেন্টর' : 'Founder & Mentor'}</a></li>
              <li><a href="/success" class="footer-link" data-route="/success">${isBn ? 'সাফল্য ও গল্প' : 'Success & Stories'}</a></li>
            </ul>
          </div>

          <!-- Opportunities Column -->
          <div>
            <h3 class="footer-col-title">${isBn ? 'সুযোগ' : 'Opportunities'}</h3>
            <ul class="footer-link-list">
              <li><a href="/golden-seat" class="footer-link" data-route="/golden-seat">${isBn ? 'গোল্ডেন সিট' : 'Golden Seat'}</a></li>
              <li><a href="/admission" class="footer-link" data-route="/admission">${isBn ? 'ভর্তি আবেদন' : 'Admission'}</a></li>
              <li><a href="/programs/ssc" class="footer-link" data-route="/programs/ssc">${isBn ? 'এসএসসি প্রোগ্রাম' : 'SSC Batch'}</a></li>
              <li><a href="/programs/hsc" class="footer-link" data-route="/programs/hsc">${isBn ? 'এইচএসসি প্রোগ্রাম' : 'HSC Batch'}</a></li>
              <li><a href="/programs/admission" class="footer-link" data-route="/programs/admission">${isBn ? 'অ্যাডমিশন টেস্ট' : 'Admission Batch'}</a></li>
            </ul>
          </div>

          <!-- Resources Column -->
          <div>
            <h3 class="footer-col-title">${isBn ? 'রিসোর্স' : 'Resources'}</h3>
            <ul class="footer-link-list">
              <li><a href="/vault" class="footer-link" data-route="/vault">${isBn ? 'দ্য ভল্ট' : 'The Vault (Free)'}</a></li>
              <li><a href="/vault" class="footer-link" data-route="/vault">${isBn ? 'স্টাডি টিপস' : 'Study Tips'}</a></li>
              <li><a href="/vault" class="footer-link" data-route="/vault">${isBn ? 'ফিজিক্স টিপস' : 'Physics Tips'}</a></li>
              <li><a href="/vault" class="footer-link" data-route="/vault">${isBn ? 'ম্যাথ ট্রিকস' : 'Math Tricks'}</a></li>
            </ul>
          </div>

          <!-- Locations Column -->
          <div>
            <h3 class="footer-col-title">${isBn ? 'লোকেশন' : 'Locations'}</h3>
            <ul class="footer-link-list">
              <li>
                <a href="/locations" class="footer-link" data-route="/locations">
                  <strong>${isBn ? 'উত্তরা সেন্টার' : 'Uttara Center'}</strong>
                  <span style="display: block; font-size: 13px; color: #64748B;">${loc.uttara.fullLocation}</span>
                </a>
              </li>
              <li style="margin-top: 6px;">
                <a href="/locations" class="footer-link" data-route="/locations">
                  <strong>${isBn ? 'পাটুয়াটুলী সেন্টার' : 'Patuatuli Center'}</strong>
                  <span style="display: block; font-size: 13px; color: #64748B;">${loc.patuatuli.fullLocation}</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact & Official Channels Column -->
          <div>
            <h3 class="footer-col-title">${isBn ? 'যোগাযোগ' : 'Contact'}</h3>
            <ul class="footer-link-list">
              <li><a href="tel:${c.phone}" class="footer-link" style="color: #CBD5E1;">Phone: ${c.phone}</a></li>
              <li><a href="mailto:${c.email}" class="footer-link" style="color: #CBD5E1;">${c.email}</a></li>
              <li><a href="https://wa.me/88${c.whatsapp.replace(/\D/g, '')}" target="_blank" rel="noopener noreferrer" class="footer-link" style="color: #22C55E;">WhatsApp: ${c.whatsapp}</a></li>
              <li style="margin-top: 4px;">
                <a href="${c.facebookUrl}" target="_blank" rel="noopener noreferrer" class="footer-link" style="color: #60A5FA;">Facebook</a>
                <span style="color: #475569; margin: 0 4px;">&bull;</span>
                <a href="${c.instagramUrl}" target="_blank" rel="noopener noreferrer" class="footer-link" style="color: #F472B6;">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Adyanta Business Separation Notice -->
        <div class="adyanta-separation-box">
          <strong>Independent Ecosystem Notice:</strong> ${SITE_CONFIG.adyantaNotice.textEn}
        </div>

        <!-- Bottom Copyright & Legal -->
        <div class="footer-bottom">
          <div>
            &copy; 2014–2026 SCIFINITY. All rights reserved. Precision with Curiosity.
          </div>
          <div class="flex gap-4">
            <a href="/privacy" class="footer-link" style="font-size: 13px;" data-route="/privacy">Privacy Policy</a>
            <a href="/terms" class="footer-link" style="font-size: 13px;" data-route="/terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

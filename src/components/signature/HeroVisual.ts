/* ==========================================================================
   SCIFINITY DESIGN SYSTEM V2.0 — HERO VISUAL COMPONENT
   Modern Technology + Education Isometric & Orbital Pedagogical Graphic
   ========================================================================== */

export function renderHeroVisual(): string {
  return `
    <div class="hero-visual-wrapper" style="position: relative; width: 100%; max-width: 460px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
      <!-- Ambient Glow Orbs -->
      <div style="position: absolute; width: 280px; height: 280px; background: radial-gradient(circle, rgba(22, 54, 107, 0.18) 0%, rgba(108, 63, 209, 0.12) 50%, transparent 70%); filter: blur(32px); z-index: 0; pointer-events: none;" class="animate-pulse-glow"></div>
      
      <!-- Main Isometric / Orbital SVG Container -->
      <svg viewBox="0 0 460 420" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; z-index: 1; filter: drop-shadow(0 16px 32px rgba(22, 54, 107, 0.12));">
        <defs>
          <linearGradient id="heroNavyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#234D94" />
            <stop offset="100%" stop-color="#16366B" />
          </linearGradient>
          <linearGradient id="heroPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#895DF0" />
            <stop offset="100%" stop-color="#6C3FD1" />
          </linearGradient>
          <linearGradient id="heroTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0CA4B5" />
            <stop offset="100%" stop-color="#087E8B" />
          </linearGradient>
          <linearGradient id="heroGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F6E05E" />
            <stop offset="100%" stop-color="#D69E2E" />
          </linearGradient>
          <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="rgba(255, 255, 255, 0.95)" />
            <stop offset="100%" stop-color="rgba(240, 244, 250, 0.85)" />
          </linearGradient>
          <filter id="shadowCard" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#16366B" flood-opacity="0.12" />
          </filter>
        </defs>

        <!-- Base Isometric Analytical Plane -->
        <g transform="translate(0, 30)">
          <!-- Perspective Grid Lines -->
          <ellipse cx="230" cy="200" rx="190" ry="90" stroke="rgba(22, 54, 107, 0.12)" stroke-width="1.5" stroke-dasharray="4 4" />
          <ellipse cx="230" cy="200" rx="140" ry="65" stroke="rgba(108, 63, 209, 0.15)" stroke-width="1.5" />
          <ellipse cx="230" cy="200" rx="90" ry="40" stroke="rgba(8, 126, 139, 0.2)" stroke-width="1.5" stroke-dasharray="2 2" />

          <!-- Coordinate Axis Lines -->
          <path d="M 40 200 L 420 200" stroke="rgba(22, 54, 107, 0.1)" stroke-width="1" />
          <path d="M 230 110 L 230 290" stroke="rgba(22, 54, 107, 0.1)" stroke-width="1" />

          <!-- Floating Educational Nodes & Connections -->
          <path d="M 130 150 Q 230 90 330 140" stroke="url(#heroPurpleGrad)" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.6" />
          <path d="M 120 230 Q 230 260 340 220" stroke="url(#heroTealGrad)" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.6" />

          <!-- Center Pillar: Conceptual Understanding Hub -->
          <g transform="translate(195, 145)">
            <!-- Central Hexagon / Node Base -->
            <polygon points="35,0 70,20 70,60 35,80 0,60 0,20" fill="url(#heroNavyGrad)" filter="url(#shadowCard)" />
            <polygon points="35,5 65,22 65,58 35,75 5,58 5,22" fill="#FFFFFF" opacity="0.1" />
            <!-- Core Symbol: Dynamic Analytical Core -->
            <circle cx="35" cy="40" r="16" fill="url(#heroPurpleGrad)" />
            <circle cx="35" cy="40" r="8" fill="#FFFFFF" />
          </g>

          <!-- Floating Satellite Card 1: Physics & Mathematics Logic -->
          <g transform="translate(50, 95)" filter="url(#shadowCard)">
            <rect x="0" y="0" width="130" height="52" rx="10" fill="#FFFFFF" stroke="rgba(228, 231, 236, 0.9)" stroke-width="1" />
            <rect x="0" y="0" width="130" height="3" rx="1.5" fill="url(#heroNavyGrad)" />
            <circle cx="20" cy="28" r="8" fill="rgba(22, 54, 107, 0.1)" />
            <path d="M 16 28 L 24 28 M 20 24 L 20 32" stroke="#16366B" stroke-width="1.5" stroke-linecap="round" />
            <text x="36" y="24" font-family="'Manrope', sans-serif" font-size="11" font-weight="700" fill="#172033">Physics & Math</text>
            <text x="36" y="38" font-family="'Manrope', sans-serif" font-size="9" font-weight="600" fill="#667085">First Principles</text>
          </g>

          <!-- Floating Satellite Card 2: 1:15 Mentorship Ratio -->
          <g transform="translate(280, 75)" filter="url(#shadowCard)">
            <rect x="0" y="0" width="135" height="52" rx="10" fill="#FFFFFF" stroke="rgba(228, 231, 236, 0.9)" stroke-width="1" />
            <rect x="0" y="0" width="135" height="3" rx="1.5" fill="url(#heroTealGrad)" />
            <circle cx="20" cy="28" r="8" fill="rgba(8, 126, 139, 0.1)" />
            <circle cx="20" cy="28" r="4" fill="#087E8B" />
            <text x="36" y="24" font-family="'Manrope', sans-serif" font-size="11" font-weight="700" fill="#172033">Max 15 Students</text>
            <text x="36" y="38" font-family="'Manrope', sans-serif" font-size="9" font-weight="600" fill="#087E8B">Direct Mentorship</text>
          </g>

          <!-- Floating Satellite Card 3: Deep Debugging Loop -->
          <g transform="translate(250, 230)" filter="url(#shadowCard)">
            <rect x="0" y="0" width="145" height="52" rx="10" fill="#FFFFFF" stroke="rgba(228, 231, 236, 0.9)" stroke-width="1" />
            <rect x="0" y="0" width="145" height="3" rx="1.5" fill="url(#heroPurpleGrad)" />
            <circle cx="20" cy="28" r="8" fill="rgba(108, 63, 209, 0.1)" />
            <path d="M 16 26 L 20 30 L 25 24" stroke="#6C3FD1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <text x="36" y="24" font-family="'Manrope', sans-serif" font-size="11" font-weight="700" fill="#172033">Diagnostic Debug</text>
            <text x="36" y="38" font-family="'Manrope', sans-serif" font-size="9" font-weight="600" fill="#6C3FD1">Active Learning</text>
          </g>

          <!-- Orbital Particles & Markers -->
          <circle cx="100" cy="180" r="4" fill="#16366B" opacity="0.7" />
          <circle cx="360" cy="160" r="4" fill="#6C3FD1" opacity="0.7" />
          <circle cx="190" cy="240" r="3.5" fill="#087E8B" opacity="0.7" />
          <circle cx="270" cy="130" r="3" fill="#D69E2E" opacity="0.8" />
        </g>
      </svg>
    </div>
  `;
}

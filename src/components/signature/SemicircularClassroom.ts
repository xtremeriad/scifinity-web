/* ==========================================================================
   SIGNATURE COMPONENT: SEMICIRCULAR CLASSROOM DIAGRAM
   Source: 04_OUR_SYSTEM, 15_GLOBAL_SHELL
   SCIFINITY Design System V2.0 — Architectural Direct-Line-of-Sight Diagram
   ========================================================================== */

export function renderSemicircularClassroom(): string {
  return `
    <div class="card card-elevated" style="padding: var(--space-8); background: #FFFFFF; border-radius: var(--radius-lg);">
      <div class="flex items-center justify-between w-full mb-4 flex-wrap gap-2">
        <div>
          <span class="badge badge-primary mb-2">Classroom Architecture</span>
          <h3 class="text-h3" style="font-size: 22px; color: var(--color-ink);">Semicircular Seating Arrangement</h3>
        </div>
        <span class="badge badge-teal">Max 15 Students</span>
      </div>
      
      <p class="text-body text-muted mb-6" style="font-size: 15.5px; line-height: 1.65; max-width: 680px;">
        Traditional classroom rows create hidden backbenchers. Our semicircular curve ensures every student maintains direct eye contact, full visibility, and immediate dialogue with the mentor.
      </p>

      <div style="width: 100%; max-width: 540px; margin: 0 auto; padding: var(--space-6); background: #FAFBFD; border: 1px solid var(--color-border); border-radius: var(--radius-md); box-shadow: var(--shadow-lvl1); text-align: center;">
        <svg viewBox="0 0 400 200" width="100%" height="auto" style="max-height: 200px;">
          <!-- Mentor Center Podium -->
          <circle cx="200" cy="170" r="18" fill="#16366B" />
          <text x="200" y="174" fill="#FFFFFF" font-size="10" font-weight="700" text-anchor="middle" font-family="'Manrope', sans-serif">MENTOR</text>
          
          <!-- Semicircular Sightlines / Arc -->
          <path d="M 60 160 A 140 140 0 0 1 340 160" fill="none" stroke="#CBD5E1" stroke-width="2" stroke-dasharray="4 4" />
          
          <!-- 15 Student Desks Arranged on Semicircle -->
          <circle cx="65" cy="150" r="8" fill="#087E8B" />
          <circle cx="80" cy="120" r="8" fill="#087E8B" />
          <circle cx="102" cy="94" r="8" fill="#087E8B" />
          <circle cx="130" cy="74" r="8" fill="#087E8B" />
          <circle cx="162" cy="62" r="8" fill="#087E8B" />
          <circle cx="196" cy="58" r="8" fill="#087E8B" />
          <circle cx="230" cy="62" r="8" fill="#087E8B" />
          <circle cx="262" cy="74" r="8" fill="#087E8B" />
          <circle cx="290" cy="94" r="8" fill="#087E8B" />
          <circle cx="312" cy="120" r="8" fill="#087E8B" />
          <circle cx="327" cy="150" r="8" fill="#087E8B" />
        </svg>

        <div class="flex items-center justify-center gap-6 mt-4 flex-wrap">
          <div class="flex items-center gap-2">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #16366B; display: inline-block;"></span>
            <span class="text-small" style="font-weight: 600; color: var(--color-ink);">Mentor (Direct Sightline)</span>
          </div>
          <div class="flex items-center gap-2">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #087E8B; display: inline-block;"></span>
            <span class="text-small" style="font-weight: 600; color: var(--color-ink);">15 Student Workstations</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

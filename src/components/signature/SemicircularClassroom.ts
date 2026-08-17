/* ==========================================================================
   SIGNATURE COMPONENT: SEMICIRCULAR CLASSROOM DIAGRAM
   Source: 04_OUR_SYSTEM, 15_GLOBAL_SHELL
   ========================================================================== */

export function renderSemicircularClassroom(): string {
  return `
    <div class="semicircle-diagram">
      <div class="flex items-center justify-between w-full mb-4">
        <div>
          <span class="badge badge-primary mb-2">Classroom Architecture</span>
          <h3 class="text-h3" style="font-size: 20px;">Semicircular Seating Arrangement</h3>
        </div>
        <span class="badge badge-neutral">Max 15 Students</span>
      </div>
      
      <p class="text-body text-muted mb-6" style="font-size: 15px; text-align: center; max-width: 600px;">
        Traditional classroom rows create hidden backbenchers. Our semicircular curve ensures every student maintains direct eye contact, full visibility, and immediate dialogue with the mentor.
      </p>

      <div style="width: 100%; max-width: 500px; padding: var(--space-4); background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-md); text-align: center;">
        <svg viewBox="0 0 400 200" width="100%" height="auto" style="max-height: 200px;">
          <!-- Mentor Center Podium -->
          <circle cx="200" cy="170" r="18" fill="#2563EB" />
          <text x="200" y="174" fill="#FFFFFF" font-size="10" font-weight="700" text-anchor="middle" font-family="sans-serif">MENTOR</text>
          
          <!-- Semicircular Sightlines / Arc -->
          <path d="M 60 160 A 140 140 0 0 1 340 160" fill="none" stroke="#E4E7EC" stroke-width="2" stroke-dasharray="4 4" />
          
          <!-- 15 Student Desks Arranged on Semicircle -->
          <!-- Arc Points from angle 195 deg to 345 deg -->
          <circle cx="65" cy="150" r="8" fill="#06B6D4" />
          <circle cx="80" cy="120" r="8" fill="#06B6D4" />
          <circle cx="102" cy="94" r="8" fill="#06B6D4" />
          <circle cx="130" cy="74" r="8" fill="#06B6D4" />
          <circle cx="162" cy="62" r="8" fill="#06B6D4" />
          <circle cx="196" cy="58" r="8" fill="#06B6D4" />
          <circle cx="230" cy="62" r="8" fill="#06B6D4" />
          <circle cx="262" cy="74" r="8" fill="#06B6D4" />
          <circle cx="290" cy="94" r="8" fill="#06B6D4" />
          <circle cx="312" cy="120" r="8" fill="#06B6D4" />
          <circle cx="327" cy="150" r="8" fill="#06B6D4" />
        </svg>

        <div class="flex items-center justify-center gap-6 mt-3">
          <div class="flex items-center gap-2">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #2563EB; display: inline-block;"></span>
            <span class="text-small">Mentor (Direct Sightline)</span>
          </div>
          <div class="flex items-center gap-2">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #06B6D4; display: inline-block;"></span>
            <span class="text-small">15 Student Workstations</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

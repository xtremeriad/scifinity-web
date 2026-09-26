/* ==========================================================================
   SIGNATURE COMPONENT: DEBUGGING ERROR FLOW
   Source: 04_OUR_SYSTEM, 15_GLOBAL_SHELL
   SCIFINITY Design System V2.0 — Engineering Debugging Loop for Mistakes
   ========================================================================== */

export function renderDebuggingFlow(): string {
  const stages = [
    { title: '1. Independent Attempt', desc: 'Student tackles a non-routine problem without premature coaching.' },
    { title: '2. Error Detection', desc: 'Calculation or conceptual derailment is observed during work.' },
    { title: '3. Root Cause Isolation', desc: 'Mentor questions the student to find the exact line where reasoning failed.' },
    { title: '4. Conceptual Correction', desc: 'Re-deriving the underlying principle behind the breakdown.' },
    { title: '5. Diagnostic Retry', desc: 'Student re-solves the original problem and a fresh variant independently.' }
  ];

  return `
    <div class="card card-elevated" style="background: #FFFFFF; border-left: 4.5px solid var(--color-navy); padding: var(--space-8); border-radius: var(--radius-lg);">
      <span class="badge badge-primary mb-2">Error Mechanics</span>
      <h3 class="text-h3" style="font-size: 24px; margin-bottom: var(--space-3); color: var(--color-ink);">
        The Engineering Debugging Loop for Mistakes
      </h3>
      <p class="text-lead text-muted mb-6" style="max-width: 720px; line-height: 1.65;">
        When an engineering system fails, you don't guess—you isolate the faulty component. We treat student errors with the same objective precision.
      </p>

      <div class="grid grid-3 gap-4">
        ${stages.map((st, idx) => `
          <div class="card card-interactive" style="padding: var(--space-5); background: #FAFBFD; border-top: 3px solid ${idx === 0 ? 'var(--color-navy)' : idx === 1 ? 'var(--color-purple)' : idx === 2 ? 'var(--color-teal)' : idx === 3 ? 'var(--color-navy-light)' : 'var(--color-gold)'};">
            <span class="text-label" style="font-size: 11px; display: block; margin-bottom: 4px; color: ${idx === 0 ? 'var(--color-navy)' : idx === 1 ? 'var(--color-purple)' : idx === 2 ? 'var(--color-teal)' : idx === 3 ? 'var(--color-navy-light)' : 'var(--color-gold-dark)'};">Step 0${idx + 1}</span>
            <h4 class="text-h4" style="font-size: 16.5px; color: var(--color-ink); margin-bottom: 6px;">${st.title}</h4>
            <p class="text-small text-muted" style="margin: 0; line-height: 1.55;">${st.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

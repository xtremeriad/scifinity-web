/* ==========================================================================
   SIGNATURE COMPONENT: DEBUGGING ERROR FLOW
   Source: 04_OUR_SYSTEM, 15_GLOBAL_SHELL
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
    <div class="card" style="background: #F8FAFC; border-left: 4px solid var(--color-primary); padding: var(--space-6);">
      <h3 class="text-h3" style="font-size: 22px; margin-bottom: var(--space-4);">
        The Engineering Debugging Loop for Mistakes
      </h3>
      <p class="text-body text-muted mb-6">
        When an engineering system fails, you don't guess—you isolate the faulty component. We treat student errors with the same objective precision.
      </p>

      <div class="grid grid-3 gap-4">
        ${stages.map(st => `
          <div class="card" style="padding: var(--space-4); background: #FFFFFF;">
            <h4 class="text-h4" style="font-size: 16px; color: var(--color-primary); margin-bottom: 4px;">${st.title}</h4>
            <p class="text-small text-muted">${st.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

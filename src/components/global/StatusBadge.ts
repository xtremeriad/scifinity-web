/* ==========================================================================
   STATUS BADGE COMPONENT
   Renders clear visual indicators for content integrity states
   ========================================================================== */

import type { ContentStatus } from '../../content/types.ts';

export function renderStatusBadge(status: ContentStatus): string {
  switch (status) {
    case 'PLACEHOLDER':
      return `<span class="status-tag placeholder" title="Official institutional data required from owner">[PLACEHOLDER]</span>`;
    case 'REVIEW_REQUIRED':
      return `<span class="status-tag review" title="Policy condition pending final founder review">[REVIEW_REQUIRED]</span>`;
    case 'PLANNED':
      return `<span class="status-tag planned" title="Future capability currently in development">[PLANNED]</span>`;
    case 'TRANSLATION_REQUIRED':
      return `<span class="status-tag review" title="Official human translation pending approval">[TRANSLATION_REQUIRED]</span>`;
    case 'CONFIRMED':
    default:
      return '';
  }
}

/* ==========================================================================
   SCIFINITY WEB APPLICATION ENTRY POINT
   ========================================================================== */

import { Router } from './router/index.ts';

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app');
  if (appContainer) {
    new Router(appContainer);
  } else {
    console.error('Root #app element not found');
  }
});

/* ==========================================================================
   SEO & METADATA UTILITY
   Manages page titles, meta descriptions, OpenGraph properties, and canonical tags
   ========================================================================== */

export function updatePageSEO(title: string, description: string) {
  // 1. Page Title
  document.title = title.includes('SCIFINITY') ? title : `${title} — SCIFINITY`;

  // 2. Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', description);

  // 3. OpenGraph Title & Description
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', document.title);
  }

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', description);
  }

  // 4. Canonical URL Link Tag
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', window.location.href.split('?')[0]);
}

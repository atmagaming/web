// Prerender every route to static HTML so social/SEO crawlers receive the
// <svelte:head> meta tags (OG, Twitter, canonical) instead of an empty SPA shell.
export const prerender = true;
// Each page lands at <route>/index.html, which is what the edge serves for a path without a file.
export const trailingSlash = "always";

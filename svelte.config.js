import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { sveltePreprocess } from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), sveltePreprocess()],
  kit: {
    adapter: adapter({
      fallback: "200.html",
    }),
    alias: {
      "@": "./src",
    },
    files: {
      assets: "public",
    },
    // Absolute asset paths: a page is also served at its path without the trailing slash.
    paths: {
      relative: false,
    },
    prerender: {
      // Blobs are served by the edge, not by the build, so the crawler can't find them.
      handleHttpError: ({ path, message }) => {
        if (path.startsWith("/_blob/")) return;
        throw new Error(message);
      },
    },
  },
};

export default config;

import posthog from "posthog-js";
import { browser, dev } from "$app/environment";

const POSTHOG_KEY = "phc_uSXLSMECPzXB7UwquTQJzCgzj8eJSz6zce4DbCd6DBsw";
const POSTHOG_HOST = "https://eu.i.posthog.com";

let initialized = false;

export function initAnalytics() {
  if (!browser || initialized) return;
  initialized = true;

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: false, // SvelteKit handles route changes via afterNavigate
    capture_pageleave: true,
    loaded: (instance) => {
      if (dev) instance.opt_out_capturing();
    },
    person_profiles: "identified_only",
  });
}

export function capturePageview(url: URL) {
  if (!browser || !initialized) return;
  posthog.capture("$pageview", { $current_url: url.toString() });
}

export function captureEvent(name: string, properties?: Record<string, unknown>) {
  if (!browser || !initialized) return;
  posthog.capture(name, properties);
}

export { posthog };

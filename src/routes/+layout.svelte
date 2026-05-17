<script lang="ts">
import { onMount } from "svelte";
import Navbar from "@/components/Navbar.svelte";
import { capturePageview, initAnalytics } from "@/lib/analytics";
import { t } from "@/lib/i18n/t";
import { afterNavigate } from "$app/navigation";
import { page } from "$app/stores";
import "../app.css";

let { children } = $props();
let isDarkPage = $derived($page.url.pathname.startsWith("/games/") || $page.url.pathname.startsWith("/hypocrisy"));

const siteUrl = "https://atmagaming.com";
let isHypocrisy = $derived($page.url.pathname.startsWith("/hypocrisy"));
let canonicalUrl = $derived(siteUrl + $page.url.pathname.replace(/\/+$/, ""));
let pageTitle = $derived(isHypocrisy ? "Hypocrisy — ATMA" : t("meta.title"));
let pageDescription = $derived(
  isHypocrisy ? "Hypocrisy — shatter the mask of a hero. A game by ATMA." : t("meta.description"),
);
let ogDescription = $derived(isHypocrisy ? pageDescription : t("meta.ogDescription"));
let ogImage = $derived(`${siteUrl}/og/${isHypocrisy ? "hypocrisy" : "main"}.jpg`);
let manifestUrl = $derived(isHypocrisy ? "/hypocrisy.webmanifest" : "/site.webmanifest");
let themeColor = $derived(isDarkPage ? "#03050a" : "#ffffff");

onMount(() => {
  initAnalytics();
  capturePageview($page.url);
});

afterNavigate((navigation) => {
  if (navigation.to) capturePageview(navigation.to.url);
});
</script>

<svelte:head>
  <title>{pageTitle}</title>
  {@html `<style>body{background-color:${isDarkPage ? '#03050a' : '#ffffff'}}</style>`}
  <meta name="description" content={pageDescription} />
  <link rel="canonical" href={canonicalUrl} />
  <link rel="manifest" href={manifestUrl} />
  <meta name="theme-color" content={themeColor} />
  <meta property="og:site_name" content="ATMA" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={ogDescription} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={pageTitle} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={ogDescription} />
  <meta name="twitter:image" content={ogImage} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Anton&family=Cinzel:wght@700;900&family=DM+Mono:wght@400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="min-h-screen flex flex-col" style="background-color: {isDarkPage ? '#03050a' : '#ffffff'}">
  <Navbar />
  <main class="flex-1">
    {@render children()}
  </main>
</div>

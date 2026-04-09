<script lang="ts">
import Navbar from "@/components/Navbar.svelte";
import { t } from "@/lib/i18n/t";
import "../app.css";

let { children } = $props();
</script>

<svelte:head>
  <title>{t("meta.title")}</title>
  <meta name="description" content={t("meta.description")} />
  <meta property="og:title" content={t("meta.title")} />
  <meta property="og:description" content={t("meta.ogDescription")} />
  <meta property="og:type" content="website" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Anton&family=DM+Mono:wght@400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Navbar />
  <main class="flex-1">
    {@render children()}
  </main>
</div>

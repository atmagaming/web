<script lang="ts">
import Footer from "@/components/Footer.svelte";
import Navbar from "@/components/Navbar.svelte";
import "../app.css";

let { children } = $props();
</script>

<svelte:head>
  <title>ATMA Gaming</title>
  <meta name="description" content="ATMA Gaming — Igniting light within hearts through games" />
  <meta property="og:title" content="ATMA Gaming" />
  <meta property="og:description" content="Igniting light within hearts through games" />
  <meta property="og:type" content="website" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@100..900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Navbar />
  <main class="flex-1">
    {@render children()}
  </main>
  <Footer />
</div>

<script lang="ts">
import Footer from "@/components/Footer.svelte";
import Navbar from "@/components/Navbar.svelte";
import "../app.css";

let { children } = $props();
</script>

<svelte:head>
  <title>ATMA</title>
  <meta name="description" content="ATMA — Facilitate social moral evolution to promote the welfare of all" />
  <meta property="og:title" content="ATMA" />
  <meta property="og:description" content="Facilitate social moral evolution to promote the welfare of all" />
  <meta property="og:type" content="website" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Anton&family=DM+Mono:wght@400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Navbar />
<main>
  {@render children()}
</main>

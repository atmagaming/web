<script lang="ts">
import { ChevronDown, Menu, X } from "lucide-svelte";
import { onMount } from "svelte";
import { cn } from "@/lib/utils";
import { page } from "$app/stores";

const gamesSections = [
  { label: "About", id: "about" },
  { label: "Gameplay", id: "gameplay" },
  { label: "Universe", id: "universe" },
  { label: "Characters", id: "characters" },
  { label: "Art & Music", id: "art-music" },
  { label: "Roadmap", id: "roadmap" },
  { label: "Team", id: "team" },
];

let scrolled = $state(false);
let mobileOpen = $state(false);
let gamesOpen = $state(false);

let isHypocrisy = $derived($page.url.pathname === "/games/hypocrisy" || $page.url.pathname === "/games/hypocrisy/");

onMount(() => {
  const onScroll = () => {
    scrolled = window.scrollY > 50;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
});

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    mobileOpen = false;
  }
}
</script>

<nav
  class={cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    scrolled ? "bg-dark-950/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent",
  )}
>
  <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="font-display text-xl font-semibold tracking-[0.2em] text-white hover:text-accent-400 transition-colors">
      ATMA
    </a>

    <!-- Desktop Nav -->
    <div class="hidden md:flex items-center gap-8">
      <!-- Games Dropdown -->
      <!-- biome-ignore lint/a11y/noStaticElementInteractions: hover dropdown -->
      <div
        class="relative"
        onmouseenter={() => (gamesOpen = true)}
        onmouseleave={() => (gamesOpen = false)}
      >
        <button type="button" class="flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors">
          Games <ChevronDown class="w-3 h-3" />
        </button>
        {#if gamesOpen}
          <div
            class="absolute top-full left-0 mt-2 w-48 bg-dark-800/95 backdrop-blur-xl border border-white/10 rounded-lg py-2 shadow-2xl"
          >
            <a
              href="/games/hypocrisy"
              class="flex items-center gap-3 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              onclick={() => (gamesOpen = false)}
            >
              <img src="/assets/images/game-icon.jpeg" alt="" class="w-6 h-6 rounded" />
              Hypocrisy
            </a>
          </div>
        {/if}
      </div>

      {#if isHypocrisy}
        {#each gamesSections as s (s.id)}
          <button
            type="button"
            onclick={() => scrollToSection(s.id)}
            class="text-sm text-white/50 hover:text-white transition-colors"
          >
            {s.label}
          </button>
        {/each}
      {/if}

      {#if !isHypocrisy}
        <a href="/#about" class="text-sm text-white/70 hover:text-white transition-colors">About</a>
        <a href="/#contact" class="text-sm text-white/70 hover:text-white transition-colors">Contact</a>
      {/if}
    </div>

    <!-- Mobile Hamburger -->
    <button
      type="button"
      class="md:hidden text-white/70 hover:text-white"
      onclick={() => (mobileOpen = !mobileOpen)}
    >
      {#if mobileOpen}
        <X class="w-6 h-6" />
      {:else}
        <Menu class="w-6 h-6" />
      {/if}
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if mobileOpen}
    <div class="md:hidden bg-dark-950/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-3">
      <a
        href="/games/hypocrisy"
        class="flex items-center gap-3 text-sm text-white/70 hover:text-white"
        onclick={() => (mobileOpen = false)}
      >
        <img src="/assets/images/game-icon.jpeg" alt="" class="w-6 h-6 rounded" />
        Hypocrisy
      </a>
      {#if isHypocrisy}
        {#each gamesSections as s (s.id)}
          <button
            type="button"
            onclick={() => scrollToSection(s.id)}
            class="block text-sm text-white/50 hover:text-white"
          >
            {s.label}
          </button>
        {/each}
      {/if}
    </div>
  {/if}
</nav>

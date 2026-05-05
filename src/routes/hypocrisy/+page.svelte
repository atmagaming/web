<script lang="ts">
import Hero from "./1-Hero/index.svelte";
import TheGame from "./2-TheGame/index.svelte";
import Features from "./3-Features/index.svelte";
import Roadmap from "./4-Roadmap/index.svelte";
import DevProgress from "./5-DevProgress/index.svelte";
import JoinCTA from "./6-JoinCTA/index.svelte";
</script>

<div class="game-page">
  <div class="page-pattern" aria-hidden="true"></div>
  <Hero />
  <TheGame />
  <Features />
  <Roadmap />
  <DevProgress />
  <JoinCTA />
</div>

<style>
  .game-page {
    position: relative;
    isolation: isolate;
    color: rgba(255, 255, 255, 0.87);
    background-color: #03050a;

    --color-accent-400: #d4a017;
    --color-accent-500: #b8860b;
    --color-accent-600: #996f0a;
    --color-gold-400: #d4a017;
    --color-gold-500: #b8860b;
    --color-dark-950: #03050a;
    --color-dark-900: #080a10;
    --color-dark-800: #0e1018;
    --color-dark-700: #161820;
    --color-dark-600: #1e2028;

    /* Shared horizontal padding for every section. Components reference these. */
    --page-padding-x: 1.5rem;
  }

  @media (min-width: 1024px) {
    .game-page {
      --page-padding-x: 4rem;
    }
  }

  /* Subtle vertical-strata pattern + soft warm gradients — echoes the
     six stacked worlds and breaks up the flat black without ever fighting
     foreground content. */
  .page-pattern {
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background-image:
      radial-gradient(ellipse 90% 60% at 15% 5%, rgba(184, 134, 11, 0.11), transparent 55%),
      radial-gradient(ellipse 70% 50% at 85% 95%, rgba(184, 134, 11, 0.08), transparent 60%),
      radial-gradient(circle at 1px 1px, rgba(212, 160, 23, 0.09) 1px, transparent 1.2px),
      repeating-linear-gradient(
        90deg,
        transparent 0,
        transparent 159px,
        rgba(184, 134, 11, 0.06) 159px,
        rgba(184, 134, 11, 0.06) 160px
      );
    background-size:
      auto,
      auto,
      28px 28px,
      auto;
  }

  /* Film grain overlay */
  .game-page::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 100;
    pointer-events: none;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 256px;
  }

  /* Shared utility classes available to all section components inside .game-page */
  :global(.game-page .page-x) {
    padding-left: var(--page-padding-x);
    padding-right: var(--page-padding-x);
  }

  :global(.game-page .section-eyebrow) {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(184, 134, 11, 0.5);
    margin-bottom: 1rem;
  }
</style>

<script lang="ts">
import AboutGame from "@/sections/hypocrisy/AboutGame.svelte";
import ArtMusic from "@/sections/hypocrisy/ArtMusic.svelte";
import CallToAction from "@/sections/hypocrisy/CallToAction.svelte";
import Characters from "@/sections/hypocrisy/Characters.svelte";
import Gameplay from "@/sections/hypocrisy/Gameplay.svelte";
import Hero from "@/sections/hypocrisy/Hero.svelte";
import JoinUs from "@/sections/hypocrisy/JoinUs.svelte";
import Roadmap from "@/sections/hypocrisy/Roadmap.svelte";
import Team from "@/sections/hypocrisy/Team.svelte";
import Universe from "@/sections/hypocrisy/Universe.svelte";
</script>

<div class="game-page">
  <Hero />
  <AboutGame />
  <Gameplay />
  <Universe />
  <Characters />
  <ArtMusic />
  <Roadmap />
  <Team />
  <JoinUs />
  <CallToAction />
</div>

<style>
  .game-page {
    background-color: #050507;
    color: rgba(255, 255, 255, 0.87);
    --color-accent-400: #a78bfa;
    --color-accent-500: #8b5cf6;
    --color-accent-600: #7c3aed;
    --color-gold-400: #fbbf24;
    --color-gold-500: #f59e0b;
    --color-dark-950: #050507;
    --color-dark-900: #0a0a0f;
    --color-dark-800: #12121a;
    --color-dark-700: #1a1a25;
    --color-dark-600: #252530;
  }
</style>

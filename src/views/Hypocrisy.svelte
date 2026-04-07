<script lang="ts">
import AboutGame from "@/sections/AboutGame.svelte";
import ArtMusic from "@/sections/ArtMusic.svelte";
import CallToAction from "@/sections/CallToAction.svelte";
import Characters from "@/sections/Characters.svelte";
import Gameplay from "@/sections/Gameplay.svelte";
import Hero from "@/sections/Hero.svelte";
import JoinUs from "@/sections/JoinUs.svelte";
import Roadmap from "@/sections/Roadmap.svelte";
import Team from "@/sections/Team.svelte";
import Universe from "@/sections/Universe.svelte";
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

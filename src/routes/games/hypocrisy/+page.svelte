<script lang="ts">
import Characters from "./Characters.svelte";
import Combat from "./Combat.svelte";
import DevProgress from "./DevProgress.svelte";
import Hero from "./Hero.svelte";
import JoinCTA from "./JoinCTA.svelte";
import Mission from "./Mission.svelte";
import Premise from "./Premise.svelte";
import World from "./World.svelte";
</script>

<div class="game-page">
  <Hero />
  <Premise />
  <World />
  <Combat />
  <Characters />
  <Mission />
  <DevProgress />
  <JoinCTA />
</div>

<style>
  .game-page {
    background-color: #03050a;
    color: rgba(255, 255, 255, 0.87);
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
    position: relative;
  }

  /* Film grain overlay */
  .game-page::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 100;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 256px;
  }
</style>

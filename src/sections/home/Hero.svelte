<script lang="ts">
import Button from "@/components/ui/Button.svelte";
</script>

<section class="snap-section pt-[52px] min-h-screen flex flex-col justify-end pb-20 px-6 lg:px-16 relative overflow-hidden">
  <div
    class="absolute font-display text-[38vw] leading-[0.82] text-dark-950 opacity-[0.035] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[46%] whitespace-nowrap pointer-events-none select-none"
    aria-hidden="true"
  >ATMA</div>

  <div class="hero-slash absolute top-0 bottom-0 left-[2.2rem] w-[3px] bg-red origin-top"></div>

  <p class="hero-tag font-mono text-[0.68rem] tracking-[0.22em] uppercase text-gold mb-7">
    ATMA
  </p>

  <!-- TODO: Replace with final headline -->
  <h1 class="hero-title font-display text-[clamp(5rem,16vw,15rem)] leading-[0.86] tracking-[0.01em] text-dark-950 mb-6">
    SUFFERING IS<br>
    NOT <span class="text-red">INEVITABLE.</span>
  </h1>

  <p class="hero-mission max-w-[580px] text-[clamp(1.15rem,2vw,1.5rem)] font-light leading-[1.45] text-dark-950 mb-12">
    ATMA builds cultural products that shift how people think — about happiness, suffering, and each other.
    <strong class="font-medium">Starting with games. Scaling to everything.</strong>
  </p>

  <div class="hero-actions flex items-center gap-5 flex-wrap">
    <Button onclick={() => document.querySelector('#why')?.scrollIntoView({ behavior: 'smooth' })}>
      Why we exist &darr;
    </Button>
    <Button variant="outline" onclick={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })}>
      Get in Touch &darr;
    </Button>
  </div>

  <div class="absolute bottom-8 right-16 font-mono text-[0.6rem] tracking-[0.18em] uppercase text-border hidden lg:flex items-center gap-3">
    scroll
    <span class="block w-px h-8 bg-gradient-to-b from-border to-transparent"></span>
  </div>
</section>

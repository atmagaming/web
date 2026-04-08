<script lang="ts">
import SectionHeader from "@/components/ui/SectionHeader.svelte";
import { reasons } from "./reasons";

let { reasonIndex = 0 }: { reasonIndex?: number } = $props();
</script>

<section class="h-screen flex flex-col justify-center px-6 lg:px-16 relative overflow-hidden" id="what">
  <!-- Background counter -->
  <div class="absolute inset-0 flex items-center justify-end pr-[10%] pointer-events-none select-none">
    <span class="font-display text-[clamp(20rem,40vw,45rem)] leading-none text-dark-950/[0.04] tabular-nums">
      {String(reasonIndex + 1).padStart(2, "0")}
    </span>
  </div>

  <!-- Progress dots -->
  <div class="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
    {#each reasons as _, i}
      <div
        class="w-1.5 h-1.5 transition-all duration-300 {i === reasonIndex
          ? 'bg-red scale-150'
          : i < reasonIndex
            ? 'bg-dark-950/30'
            : 'bg-dark-950/10'}"
      ></div>
    {/each}
  </div>

  <SectionHeader number="03" label="What &middot; First Initiative" />

  <h2 class="font-display text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.88] tracking-[0.01em] text-dark-950 mb-4">
    ATMA<br><span class="text-gold">GAMING.</span>
  </h2>

  <p class="text-[1.15rem] leading-[1.65] text-text max-w-[640px] mb-12">
    Our first vehicle for cultural education is a <strong class="font-medium text-dark-950">video game studio</strong> — making story-rich, non-niche games that use storytelling as a tool for propagating ideas.
  </p>

  <div class="font-mono text-[0.63rem] tracking-[0.25em] uppercase text-text mb-6">
    Why games?
  </div>

  <div class="max-w-[700px]">
    <!-- Headline: static "GAMES" + animated suffix -->
    <div class="flex items-baseline gap-3 mb-4">
      <span class="font-display text-[clamp(1.6rem,3vw,2.8rem)] leading-[1.05] tracking-[0.02em] text-dark-950 uppercase shrink-0">GAMES</span>
      <div class="relative flex-1">
        {#each reasons as reason, i}
          <p class="{i === 0 ? 'relative' : 'absolute top-0 left-0 right-0'} font-display text-[clamp(1.6rem,3vw,2.8rem)] leading-[1.05] tracking-[0.02em] text-dark-950 uppercase whitespace-nowrap transition-all duration-500 {i === reasonIndex ? 'opacity-100 translate-y-0' : i < reasonIndex ? 'opacity-0 -translate-y-full' : 'opacity-0 translate-y-full'}">
            {reason.prefix}<span class="text-red">{reason.emphasis}</span>
          </p>
        {/each}
      </div>
    </div>

    <!-- Description: aligned with "GAMES", animated separately -->
    <div class="relative min-h-[80px]">
      {#each reasons as reason, i}
        <p class="absolute inset-0 text-[1.05rem] leading-[1.7] text-text max-w-[540px] transition-all duration-500 {i === reasonIndex ? 'opacity-100 translate-y-0' : i < reasonIndex ? 'opacity-0 -translate-y-4' : 'opacity-0 translate-y-4'}">
          {reason.text}
        </p>
      {/each}
    </div>
  </div>
</section>

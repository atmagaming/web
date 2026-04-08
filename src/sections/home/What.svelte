<script lang="ts">
import SectionHeader from "@/components/ui/SectionHeader.svelte";
import { reasons } from "./reasons";

let { slideIndex = 0 }: { slideIndex?: number } = $props();

const showingReasons = $derived(slideIndex < reasons.length);
</script>

<section
  class="h-screen flex flex-col justify-center px-6 lg:px-16 relative overflow-hidden"
  id="what"
>
  <!-- Background counter (only during reasons) -->
  <div
    class="absolute inset-0 flex items-center justify-end pr-[10%] pointer-events-none select-none transition-opacity duration-500 {showingReasons
      ? 'opacity-100'
      : 'opacity-0'}"
  >
    <span class="font-display text-[clamp(20rem,40vw,45rem)] leading-none text-dark-950/[0.04] tabular-nums">
      {String(Math.min(slideIndex + 1, reasons.length)).padStart(2, "0")}
    </span>
  </div>

  <!-- Progress dots (only during reasons) -->
  <div
    class="absolute right-6 lg:right-16 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10 transition-opacity duration-500 {showingReasons
      ? 'opacity-100'
      : 'opacity-0'}"
  >
    {#each reasons as _, i}
      <div
        class="w-1.5 h-1.5 transition-all duration-300 {i === slideIndex
          ? 'bg-red scale-150'
          : i < slideIndex
            ? 'bg-dark-950/30'
            : 'bg-dark-950/10'}"
      ></div>
    {/each}
  </div>

  <!-- Static header -->
  <SectionHeader number="03" label="What &middot; First Initiative" />

  <h2 class="font-display text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.88] tracking-[0.01em] text-dark-950 mb-4">
    ATMA<br /><span class="text-gold">GAMING.</span>
  </h2>

  <p class="text-[1.15rem] leading-[1.65] text-text max-w-[640px] mb-12">
    Our first vehicle for cultural education is a <strong class="font-medium text-dark-950">video game studio</strong> —
    making story-rich, non-niche games that use storytelling as a tool for propagating ideas.
  </p>

  <!-- Swappable area: reasons OR game block -->
  <div class="relative">
    <!-- Reasons -->
    <div
      class="transition-all duration-500 {showingReasons
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 -translate-y-8 pointer-events-none'}"
    >
      <div class="font-mono text-[0.63rem] tracking-[0.25em] uppercase text-text mb-6">Why games?</div>

      <div class="max-w-[700px]">
        <div class="flex items-baseline gap-3 mb-4">
          <span
            class="font-display text-[clamp(1.6rem,3vw,2.8rem)] leading-[1.05] tracking-[0.02em] text-dark-950 uppercase shrink-0"
            >GAMES</span
          >
          <div class="relative flex-1">
            {#each reasons as reason, i}
              <p
                class="{i === 0
                  ? 'relative'
                  : 'absolute top-0 left-0 right-0'} font-display text-[clamp(1.6rem,3vw,2.8rem)] leading-[1.05] tracking-[0.02em] text-dark-950 uppercase whitespace-nowrap transition-all duration-500 {i ===
                slideIndex
                  ? 'opacity-100 translate-y-0'
                  : i < slideIndex
                    ? 'opacity-0 -translate-y-full'
                    : 'opacity-0 translate-y-full'}"
              >
                {reason.prefix}<span class="text-red">{reason.emphasis}</span>
              </p>
            {/each}
          </div>
        </div>

        <div class="relative min-h-[80px]">
          {#each reasons as reason, i}
            <p
              class="absolute inset-0 text-[1.05rem] leading-[1.7] text-text max-w-[540px] transition-all duration-500 {i ===
              slideIndex
                ? 'opacity-100 translate-y-0'
                : i < slideIndex
                  ? 'opacity-0 -translate-y-4'
                  : 'opacity-0 translate-y-4'}"
            >
              {reason.text}
            </p>
          {/each}
        </div>
      </div>
    </div>

    <!-- Game block -->
    <div
      class="absolute inset-0 transition-all duration-500 {showingReasons
        ? 'opacity-0 translate-y-8 pointer-events-none'
        : 'opacity-100 translate-y-0'}"
    >
      <div class="bg-dark-950 relative overflow-hidden">
        <!-- Background image (right side) -->
        <img
          src="/assets/images/game-icon.jpeg"
          alt=""
          aria-hidden="true"
          class="absolute top-0 right-0 h-full w-2/3 object-cover object-center"
        />
        <!-- Gradient overlay: solid dark from left, fading to transparent -->
        <div class="absolute inset-0" style="background: linear-gradient(to right, #0a0a0a 30%, transparent), linear-gradient(30deg, #0a0a0a 30%, transparent)"></div>

        <div class="relative p-8 lg:p-12">
          <span class="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-gold block mb-6">First Title</span>

          <div class="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] tracking-[0.03em] text-white mb-4">
            HYPOCRISY
          </div>

          <p class="text-[1rem] italic font-light text-white/60 leading-[1.6] max-w-[520px] mb-6">
            A story about optimism in a heroic fight for freedom — defying inner hatred and finding peace in a world
            distorted by war.
          </p>

          <div class="flex gap-3 flex-wrap items-center mb-8">
            <span
              class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1"
              >Story-Rich</span
            >
            <span
              class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1"
              >Roguelike RPG</span
            >
            <span
              class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1"
              >Sci-Fantasy</span
            >
            <span
              class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1 inline-flex items-center gap-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="M11.979 0C5.678 0 .511 4.86.022 10.944l6.432 2.658a3.387 3.387 0 0 1 1.912-.588c.063 0 .125.002.188.006l2.861-4.142V8.83a4.528 4.528 0 0 1 4.524-4.524 4.528 4.528 0 0 1 4.524 4.524 4.528 4.528 0 0 1-4.524 4.524h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396a3.406 3.406 0 0 1-3.328-2.734L.533 15.26A12.018 12.018 0 0 0 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zM7.54 18.21l-1.473-.61a2.541 2.541 0 0 0 4.886-.862 2.542 2.542 0 0 0-2.54-2.541c-.127 0-.254.01-.378.028l1.523.63a1.868 1.868 0 0 1-1.432 3.45l-.586-.095zm8.399-6.238a3.02 3.02 0 0 0 3.016-3.016 3.023 3.023 0 0 0-3.016-3.016 3.023 3.023 0 0 0-3.016 3.016 3.02 3.02 0 0 0 3.016 3.016z"
                /></svg
              >
              Steam
            </span>
            <span
              class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1 inline-flex items-center gap-1.5"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                ><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line
                  x1="8"
                  y1="21"
                  x2="16"
                  y2="21"
                /><line x1="12" y1="17" x2="12" y2="21" /></svg
              >
              PC, Mac, Consoles
            </span>
          </div>

          <a
            href="/games/hypocrisy"
            class="font-mono text-[0.75rem] tracking-[0.12em] uppercase text-dark-950 bg-white px-8 py-3.5 hover:bg-gold hover:text-white transition-colors inline-flex items-center gap-2.5 no-underline"
            >Learn more &rarr;</a
          >
        </div>
      </div>
    </div>
  </div>
</section>

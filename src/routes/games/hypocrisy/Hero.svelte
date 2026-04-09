<script lang="ts">
import { onMount } from "svelte";

import ScrollPrompt from "@/components/ScrollPrompt.svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";
import { fitText } from "@/lib/utils";

let el: HTMLElement;
let videoEl: HTMLVideoElement;

onMount(() => {
  videoEl.play().catch(() => {});

  // const ctx = gsap.context(() => {
  //   const tl = gsap.timeline();
  //   tl.from(".hero-game-title", { y: 60, opacity: 0, duration: 1, ease: "expo.out" });
  //   tl.from(".hero-game-tagline", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");
  //   tl.from(".hero-game-chip", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out", stagger: 0.08 }, "-=0.5");
  // }, el);

  // return () => ctx.revert();
});
</script>

<section bind:this={el} class="min-h-screen flex items-center justify-start relative overflow-hidden">
  <video bind:this={videoEl} muted loop playsinline preload="none" src="/assets/videos/environment.mp4" class="absolute inset-0 w-full h-full object-cover"></video>
  <div class="absolute inset-0 bg-[#03050a]/75"></div>
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,_rgba(180,134,11,0.06)_0%,_transparent_60%)]"></div>

  <!-- Content -->
  <div class="relative z-10 flex flex-col justify-center py-20 px-6 lg:px-16 max-w-3xl">
    <h1 use:fitText class="hero-game-title font-display text-[clamp(5rem,13vw,15rem)] font-bold tracking-[0.01em] text-white leading-[0.92] mb-6">
      {t("hypocrisy.hero.title")}
    </h1>

    <p class="hero-game-tagline text-lg md:text-xl text-white/60 font-light leading-relaxed mb-8">
      {t("hypocrisy.hero.tagline")}
    </p>

    <!-- Chips -->
    <div class="flex gap-2 flex-wrap items-center">
      <span class="hero-game-chip font-mono text-[0.65rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1.5">
        {t("hypocrisy.hero.description")}
      </span>
      <span class="hero-game-chip font-mono text-[0.65rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1.5">
        {t("hypocrisy.hero.setting")}
      </span>
      <span class="hero-game-chip font-mono text-[0.65rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1.5 inline-flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.979 0C5.678 0 .511 4.86.022 10.944l6.432 2.658a3.387 3.387 0 0 1 1.912-.588c.063 0 .125.002.188.006l2.861-4.142V8.83a4.528 4.528 0 0 1 4.524-4.524 4.528 4.528 0 0 1 4.524 4.524 4.528 4.528 0 0 1-4.524 4.524h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396a3.406 3.406 0 0 1-3.328-2.734L.533 15.26A12.018 12.018 0 0 0 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zM7.54 18.21l-1.473-.61a2.541 2.541 0 0 0 4.886-.862 2.542 2.542 0 0 0-2.54-2.541c-.127 0-.254.01-.378.028l1.523.63a1.868 1.868 0 0 1-1.432 3.45l-.586-.095zm8.399-6.238a3.02 3.02 0 0 0 3.016-3.016 3.023 3.023 0 0 0-3.016-3.016 3.023 3.023 0 0 0-3.016 3.016 3.02 3.02 0 0 0 3.016 3.016z"/>
        </svg>
        Steam
      </span>
      <span class="hero-game-chip font-mono text-[0.65rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1.5 inline-flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
        PC, Mac
      </span>
      <span class="hero-game-chip font-mono text-[0.65rem] tracking-[0.12em] uppercase text-white/35 border border-white/10 px-3 py-1.5">
        {t("hypocrisy.hero.schedule")}
      </span>
    </div>
  </div>

  <ScrollPrompt textKey="hypocrisy.hero.scrollHint" color="rgba(212, 160, 23, 0.7)" position="bottom-right" />
</section>

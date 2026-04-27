<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";

let el: HTMLElement;

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".story-rail", {
      scrollTrigger: { trigger: el, start: "top 80%" },
      scaleY: 0,
      transformOrigin: "top center",
      duration: 1.4,
      ease: "power3.out",
    });

    gsap.from(".story-reveal", {
      scrollTrigger: { trigger: el, start: "top 72%" },
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.9,
      ease: "power3.out",
    });

    gsap.from(".story-cipher", {
      scrollTrigger: { trigger: el, start: "top 72%" },
      opacity: 0,
      scale: 0.94,
      duration: 1.6,
      ease: "power3.out",
    });

    gsap.from(".story-hair", {
      scrollTrigger: { trigger: el, start: "top 78%" },
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section id="about" bind:this={el} class="story-section relative overflow-hidden py-32 lg:py-48">
  <!-- Background cipher -->
  <div class="story-cipher pointer-events-none absolute select-none" aria-hidden="true">
    <span class="cipher-0">00</span>
  </div>

  <!-- Vertical rail -->
  <div class="story-rail pointer-events-none absolute left-6 lg:left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-500/35 to-transparent"></div>

  <!-- Header framing -->
  <div class="relative px-6 lg:px-16 mb-16 lg:mb-24">
    <div class="story-reveal flex items-center gap-4 mb-8">
      <span class="w-8 h-px bg-accent-500"></span>
      <span class="font-mono text-[10px] tracking-[0.4em] uppercase text-accent-500">
        {t("hypocrisy.premise.sectionLabel")} · Ch · 00
      </span>
      <span class="h-px flex-1 bg-gradient-to-r from-accent-500/50 to-transparent max-w-[160px]"></span>
    </div>

    <h2 class="story-reveal font-display text-5xl md:text-7xl lg:text-[8rem] text-white leading-[0.9] max-w-5xl">
      {t("hypocrisy.premise.title")}
    </h2>
  </div>

  <!-- Story body: asymmetric grid -->
  <div class="relative px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
    <!-- Margin notes -->
    <aside class="story-reveal lg:col-span-3 flex flex-col gap-6">
      <div class="flex items-start gap-3">
        <span class="mt-[6px] w-4 h-px bg-accent-500/50"></span>
        <div>
          <p class="font-mono text-[9px] tracking-[0.35em] uppercase text-white/40 mb-1">Transmission</p>
          <p class="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-400/80">Aria · Rebel Frame</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <span class="mt-[6px] w-4 h-px bg-accent-500/50"></span>
        <div>
          <p class="font-mono text-[9px] tracking-[0.35em] uppercase text-white/40 mb-1">Coordinates</p>
          <p class="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-400/80">06 Worlds · Vertical</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <span class="mt-[6px] w-4 h-px bg-accent-500/50"></span>
        <div>
          <p class="font-mono text-[9px] tracking-[0.35em] uppercase text-white/40 mb-1">Threat</p>
          <p class="font-mono text-[10px] tracking-[0.2em] uppercase text-accent-400/80">Enemies of the Soul</p>
        </div>
      </div>
    </aside>

    <!-- Main story column -->
    <div class="lg:col-span-9 lg:pl-6 relative">
      <span class="story-hair absolute -left-2 top-3 hidden lg:block h-px w-10 bg-accent-500/60"></span>

      <p class="story-reveal pitch-lead font-display text-2xl md:text-4xl lg:text-5xl text-white/95 leading-[1.15] mb-10 lg:mb-14">
        <span class="quote-mark text-accent-500">“</span>{t("hypocrisy.premise.pitch")}<span class="quote-mark text-accent-500">”</span>
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl">
        <p class="story-reveal text-base md:text-lg text-white/55 leading-relaxed border-t border-white/10 pt-5">
          <span class="block font-mono text-[9px] tracking-[0.4em] uppercase text-accent-500/70 mb-3">§ I · Outside</span>
          {t("hypocrisy.premise.paragraph1")}
        </p>
        <p class="story-reveal text-base md:text-lg text-white/55 leading-relaxed border-t border-white/10 pt-5">
          <span class="block font-mono text-[9px] tracking-[0.4em] uppercase text-accent-500/70 mb-3">§ II · Within</span>
          {t("hypocrisy.premise.paragraph2")}
        </p>
      </div>

      <!-- Sign-off -->
      <div class="story-reveal mt-16 flex items-center gap-4 text-white/30">
        <span class="h-px w-16 bg-white/15"></span>
        <span class="font-mono text-[10px] tracking-[0.4em] uppercase">End · Prologue</span>
        <span class="h-px flex-1 bg-white/10 max-w-[200px]"></span>
      </div>
    </div>
  </div>
</section>

<style>
  .story-section {
    isolation: isolate;
  }

  .story-cipher {
    top: 2rem;
    right: -4rem;
    font-family: var(--font-display);
    font-size: clamp(14rem, 38vw, 40rem);
    line-height: 0.8;
    color: transparent;
    -webkit-text-stroke: 1px rgba(212, 160, 23, 0.08);
    letter-spacing: -0.05em;
    z-index: 0;
  }

  @media (min-width: 1024px) {
    .story-cipher {
      right: -6rem;
    }
  }

  .cipher-0 {
    display: block;
  }

  .quote-mark {
    font-family: var(--font-display);
    display: inline-block;
    transform: translateY(0.1em);
  }

  .pitch-lead {
    text-wrap: balance;
  }
</style>

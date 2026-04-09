<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";

let el: HTMLElement;

onMount(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline();
    tl.from(".hero-icon", { scale: 0.8, opacity: 0, duration: 1, ease: "power3.out" });
    tl.from(".hero-game-title", { y: 60, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.5");
    tl.from(".hero-game-tagline", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");
    tl.from(".hero-buttons", { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3");
  }, el);

  return () => ctx.revert();
});
</script>

<section bind:this={el} class="min-h-screen flex items-center justify-center relative overflow-hidden">
  <!-- Background video -->
  <video autoplay muted loop playsinline src="/assets/videos/hero-bg.mp4" class="absolute inset-0 w-full h-full object-cover"
  ></video>
  <div class="absolute inset-0 bg-dark-950/60"></div>
  <div
    class="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_var(--color-accent-600)_0%,_transparent_50%)] opacity-15"
  ></div>

  <div class="relative z-10 text-center px-6">
    <!-- Game Icon -->
    <div class="hero-icon w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-accent-600/20">
      <img src="/assets/images/game-icon.jpeg" alt="Hypocrisy" class="w-full h-full object-cover" />
    </div>

    <h1 class="hero-game-title font-display text-7xl md:text-9xl font-bold tracking-[0.15em] text-white mb-4">
      {t("hypocrisy.hero.title")}
    </h1>
    <p class="hero-game-tagline text-xl md:text-2xl text-white/60 mb-12">{t("hypocrisy.hero.tagline")}</p>

    <div class="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="https://store.steampowered.com"
        target="_blank"
        rel="noopener noreferrer"
        class="px-8 py-3 bg-accent-600 hover:bg-accent-500 text-white rounded-lg transition-colors text-sm font-medium"
      >
        {t("hypocrisy.hero.wishlist")}
      </a>
      <a
        href="https://discord.gg/atmagaming"
        target="_blank"
        rel="noopener noreferrer"
        class="px-8 py-3 border border-white/20 hover:border-white/40 text-white rounded-lg transition-colors text-sm font-medium"
      >
        {t("hypocrisy.hero.discord")}
      </a>
    </div>
  </div>
</section>

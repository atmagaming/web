<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";

let el: HTMLElement;

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".mission-content > *", {
      scrollTrigger: { trigger: el, start: "top 75%" },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section bind:this={el} class="py-32 lg:py-48 px-6 lg:px-16 relative overflow-hidden">
  <!-- Subtle warm gradient to differentiate from other sections -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(180,134,11,0.04)_0%,_transparent_60%)]"></div>

  <div class="mission-content relative z-10 max-w-4xl mx-auto">
    <p class="text-xs text-accent-500 uppercase tracking-[0.25em] font-mono mb-4 flex items-center gap-4">
      <span class="w-8 h-px bg-accent-500"></span>
      {t("hypocrisy.mission.sectionLabel")}
    </p>
    <h2 class="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-10 leading-none">
      {t("hypocrisy.mission.title")}
    </h2>

    <p class="text-lg text-white/50 leading-relaxed mb-6">
      {t("hypocrisy.mission.paragraph1")}
    </p>
    <p class="text-lg text-white/50 leading-relaxed mb-12">
      {t("hypocrisy.mission.paragraph2")}
    </p>

    <!-- Founder -->
    <div class="flex items-center gap-4 mb-10 py-6 border-t border-white/5">
      <div class="w-12 h-12 rounded-full bg-gradient-to-br from-accent-500/20 to-transparent border border-accent-500/15 flex items-center justify-center shrink-0">
        <span class="font-display text-sm text-accent-400">VY</span>
      </div>
      <div>
        <p class="text-sm font-semibold text-white">{t("hypocrisy.mission.founderName")}</p>
        <p class="text-xs text-white/40">{t("hypocrisy.mission.founderRole")}</p>
      </div>
    </div>

    <a
      href="/"
      class="inline-flex items-center gap-3 text-sm text-accent-400 hover:text-accent-300 transition-colors font-mono uppercase tracking-wider group"
    >
      {t("hypocrisy.mission.discoverAtma")}
      <span class="w-6 h-px bg-accent-500 group-hover:w-10 transition-all"></span>
    </a>
  </div>
</section>

<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";

let el: HTMLElement;

const worldKeys = ["greed", "wrath", "sloth", "envy", "pride", "lust"] as const;
const colors = [
  "from-yellow-600/20 to-transparent",
  "from-red-600/20 to-transparent",
  "from-blue-600/20 to-transparent",
  "from-green-600/20 to-transparent",
  "from-purple-600/20 to-transparent",
  "from-pink-600/20 to-transparent",
];
const worlds = $derived(
  worldKeys.map((key, i) => ({
    ...translations[locale.value].hypocrisy.universe[key],
    color: colors[i],
  })),
);

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".world-card", {
      scrollTrigger: { trigger: el, start: "top 75%" },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section id="universe" bind:this={el} class="py-24 px-6">
  <div class="max-w-6xl mx-auto">
    <p class="text-sm text-accent-400 uppercase tracking-widest mb-4 text-center">{t("hypocrisy.universe.sectionLabel")}</p>
    <h2 class="font-display text-4xl md:text-5xl text-white mb-6 text-center">{t("hypocrisy.universe.title")}</h2>
    <p class="text-lg text-white/50 text-center max-w-2xl mx-auto mb-16">
      {t("hypocrisy.universe.description")}
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each worlds as w (w.name)}
        <div
          class="world-card relative p-6 rounded-xl bg-dark-800/50 border border-white/5 overflow-hidden hover:border-white/10 transition-colors"
        >
          <div class="absolute inset-0 bg-gradient-to-br {w.color} pointer-events-none"></div>
          <div class="relative z-10">
            <h3 class="text-lg font-semibold text-white mb-3">{w.name}</h3>
            <p class="text-sm text-white/50">{w.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

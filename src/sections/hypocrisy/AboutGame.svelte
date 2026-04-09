<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";

let el: HTMLElement;

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".about-content > *", {
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

const specKeys = ["specGenre", "specSetting", "specPerspective", "specPlatform"] as const;
const specs = $derived(
  specKeys.map((key) => ({
    label: translations[locale.value].hypocrisy.about[`${key}Label`],
    value: translations[locale.value].hypocrisy.about[`${key}Value`],
  })),
);
</script>

<section id="about" bind:this={el} class="py-24 px-6">
  <div class="about-content max-w-4xl mx-auto">
    <p class="text-sm text-accent-400 uppercase tracking-widest mb-4">{t("hypocrisy.about.sectionLabel")}</p>
    <h2 class="font-display text-4xl md:text-5xl text-white mb-8">{t("hypocrisy.about.title")}</h2>
    <p class="text-lg text-white/60 leading-relaxed mb-6">
      {t("hypocrisy.about.paragraph1")}
    </p>
    <p class="text-lg text-white/60 leading-relaxed mb-6">
      {t("hypocrisy.about.paragraph2")}
    </p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {#each specs as item (item.label)}
        <div class="p-4 rounded-lg bg-dark-800/50 border border-white/5">
          <p class="text-xs text-white/40 uppercase tracking-wider mb-1">{item.label}</p>
          <p class="text-sm text-white font-medium">{item.value}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

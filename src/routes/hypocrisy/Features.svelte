<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";
import FeatureRow from "./FeatureRow.svelte";
import SectionHeader from "./SectionHeader.svelte";

let el: HTMLElement;

const featureKeys = ["combat", "skills", "roguelite", "companions"] as const;
const features = $derived(featureKeys.map((key) => translations[locale.value].hypocrisy.combat[key]));
const romans = ["I", "II", "III", "IV"];
const tags = ["Core Loop", "Progression", "Legacy", "Bonds"];

onMount(() => {
  const ctx = gsap.context(() => {
    const rows = gsap.utils.toArray<HTMLElement>(".feature-row");
    for (const row of rows) {
      gsap.from(row.querySelector(".feature-numeral"), {
        scrollTrigger: { trigger: row, start: "top 82%" },
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(row.querySelectorAll<HTMLElement>(".feature-reveal"), {
        scrollTrigger: { trigger: row, start: "top 82%" },
        y: 28,
        opacity: 0,
        stagger: 0.08,
        duration: 0.85,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.from(row.querySelector(".feature-rule"), {
        scrollTrigger: { trigger: row, start: "top 82%" },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.1,
        delay: 0.3,
        ease: "power3.out",
      });
    }
  }, el);

  return () => ctx.revert();
});
</script>

<section id="features" bind:this={el} class="features-section relative overflow-hidden py-32 lg:py-48">
  <SectionHeader label={t("hypocrisy.combat.sectionLabel")} title={t("hypocrisy.combat.title")} />

  <div class="px-6 lg:px-16 mt-10 mb-20 lg:mb-28 max-w-3xl">
    <p class="feature-reveal text-lg md:text-xl text-white/55 leading-relaxed">
      {t("hypocrisy.combat.ariaDescription")}
    </p>
  </div>

  <div class="px-6 lg:px-16 mb-10">
    <div class="feature-reveal flex items-center gap-6 text-white/30">
      <span class="font-mono text-[10px] tracking-[0.4em] uppercase">Four Pillars</span>
      <span class="h-px flex-1 bg-white/10"></span>
      <span class="font-mono text-[10px] tracking-[0.4em] uppercase">01 — 04</span>
    </div>
  </div>

  <ol class="feature-list">
    {#each features as feature, i (i)}
      <FeatureRow index={i} roman={romans[i]} tag={tags[i]} title={feature.title} description={feature.description} />
    {/each}

    <div class="feature-rule absolute inset-x-6 lg:inset-x-16 h-px bg-linear-to-r from-accent-500/40 via-white/10 to-transparent"></div>
  </ol>

  <div class="mt-20 px-6 lg:px-16">
    <div class="flex items-center gap-4 text-white/25">
      <span class="h-px w-12 bg-white/10"></span>
      <span class="font-mono text-[10px] tracking-[0.4em] uppercase">End · Pillars</span>
      <span class="h-px flex-1 bg-white/10 max-w-50"></span>
    </div>
  </div>
</section>

<style>
  .features-section {
    isolation: isolate;
  }

  .feature-list {
    position: relative;
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>

<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";
import SectionHeader from "../_shared/SectionHeader.svelte";
import FeatureRow from "./FeatureRow.svelte";

const featureDefinitions = [
  { key: "combat", tagKey: "hypocrisy.combat.pillarTagCoreLoop" },
  { key: "skills", tagKey: "hypocrisy.combat.pillarTagProgression" },
  { key: "roguelite", tagKey: "hypocrisy.combat.pillarTagLegacy" },
  { key: "companions", tagKey: "hypocrisy.combat.pillarTagBonds" },
] as const;

const features = $derived(
  featureDefinitions.map(({ key, tagKey }) => ({
    tag: t(tagKey),
    title: t(`hypocrisy.combat.${key}.title`),
    description: t(`hypocrisy.combat.${key}.description`),
  })),
);
const totalPadded = $derived(String(features.length).padStart(2, "0"));

let sectionEl: HTMLElement;

onMount(() => {
  const ctx = gsap.context(() => {
    for (const row of gsap.utils.toArray<HTMLElement>(".feature-row", sectionEl)) {
      const trigger = { trigger: row, start: "top 82%" };

      gsap.from(row.querySelector(".feature-numeral"), {
        scrollTrigger: trigger,
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(row.querySelectorAll<HTMLElement>(".feature-reveal"), {
        scrollTrigger: trigger,
        y: 28,
        opacity: 0,
        stagger: 0.08,
        duration: 0.85,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.from(row.querySelector(".feature-rule"), {
        scrollTrigger: trigger,
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.1,
        delay: 0.3,
        ease: "power3.out",
      });
    }
  }, sectionEl);

  return () => ctx.revert();
});
</script>

<section id="features" bind:this={sectionEl} class="features-section">
  <SectionHeader label={t("hypocrisy.combat.sectionLabel")} title={t("hypocrisy.combat.title")} />

  <div class="lead page-x">
    <p class="feature-reveal lead-text">{t("hypocrisy.combat.ariaDescription")}</p>
  </div>

  <div class="meta-row page-x">
    <div class="feature-reveal meta-bar">
      <span class="meta-label">{t("hypocrisy.combat.pillarsLabel")}</span>
      <span class="meta-rule"></span>
      <span class="meta-label">01 — {totalPadded}</span>
    </div>
  </div>

  <div class="feature-list">
    {#each features as feature, i (i)}
      <FeatureRow
        index={i}
        total={features.length}
        tag={feature.tag}
        title={feature.title}
        description={feature.description}
      />
    {/each}

    <div class="feature-rule terminal-rule"></div>
  </div>

  <div class="signoff page-x">
    <span class="signoff-rule-short"></span>
    <span class="meta-label">{t("hypocrisy.combat.pillarsEnd")}</span>
    <span class="signoff-rule"></span>
  </div>
</section>

<style src="./Features.css"></style>

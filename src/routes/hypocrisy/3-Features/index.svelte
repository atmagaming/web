<script lang="ts">
import { onMount } from "svelte";
import SectionHeader from "@/components/SectionHeader.svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";
import FeatureRow from "./FeatureRow.svelte";

const featureDefinitions = [
  { key: "theme", tagKey: "hypocrisy.combat.pillarTagTheme" },
  { key: "narrative", tagKey: "hypocrisy.combat.pillarTagNarrative" },
  { key: "world", tagKey: "hypocrisy.combat.pillarTagWorld" },
  { key: "loop", tagKey: "hypocrisy.combat.pillarTagLoop" },
] as const;

const features = $derived(
  featureDefinitions.map(({ key, tagKey }) => ({
    tag: t(tagKey),
    title: t(`hypocrisy.combat.${key}.title`),
    description: t(`hypocrisy.combat.${key}.description`),
  })),
);

let sectionEl: HTMLElement;

onMount(() => {
  const context = gsap.context(() => {
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

  return () => context.revert();
});
</script>

<section id="features" bind:this={sectionEl} class="features-section">
  <SectionHeader label={t("hypocrisy.combat.sectionLabel")} title={t("hypocrisy.combat.title")} />

  <div class="feature-list">
    {#each features as feature, i (i)}
      <FeatureRow
        index={i}
        tag={feature.tag}
        title={feature.title}
        description={feature.description}
      />
    {/each}

    <div class="feature-rule terminal-rule"></div>
  </div>
</section>

<style src="./Features.css"></style>

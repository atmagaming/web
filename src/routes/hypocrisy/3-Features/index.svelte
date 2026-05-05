<script lang="ts">
import { onMount } from "svelte";
import SectionHeader from "@/components/SectionHeader.svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";
import { ROMAN_NUMERALS } from "@/lib/utils";

const points = $derived(t("hypocrisy.combat.points"));

let sectionEl: HTMLElement;

onMount(() => {
  const context = gsap.context(() => {
    gsap.from(sectionEl.querySelectorAll<HTMLElement>(".usp-row"), {
      scrollTrigger: { trigger: sectionEl, start: "top 80%" },
      y: 24,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
    });

    gsap.from(sectionEl.querySelector(".audience"), {
      scrollTrigger: { trigger: sectionEl, start: "top 65%" },
      y: 16,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: "power3.out",
    });
  }, sectionEl);

  return () => context.revert();
});
</script>

<section id="features" bind:this={sectionEl} class="features-section">
  <SectionHeader label={t("hypocrisy.combat.sectionLabel")} />

  <ul class="usp-list page-x">
    {#each points as point, i (i)}
      <li class="usp-row">
        <span class="usp-numeral font-display">{ROMAN_NUMERALS[i]}</span>
        <span class="usp-text font-display">{point}</span>
      </li>
    {/each}
  </ul>

  <div class="audience page-x">
    <span class="audience-label">{t("hypocrisy.combat.audienceLabel")}</span>
    <p class="audience-text">{t("hypocrisy.combat.audience")}</p>
  </div>
</section>

<style src="./Features.css"></style>

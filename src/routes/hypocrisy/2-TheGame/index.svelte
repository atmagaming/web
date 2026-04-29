<script lang="ts">
import { onMount } from "svelte";
import SectionHeader from "@/components/SectionHeader.svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";

let sectionEl: HTMLElement;
let hairEl: HTMLElement;

onMount(() => {
  const context = gsap.context(() => {
    gsap.from(".story-reveal", {
      scrollTrigger: { trigger: sectionEl, start: "top 72%" },
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.9,
      ease: "power3.out",
    });

    gsap.from(hairEl, {
      scrollTrigger: { trigger: sectionEl, start: "top 78%" },
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });
  }, sectionEl);

  return () => context.revert();
});
</script>

<section id="about" bind:this={sectionEl} class="story-section">
  <SectionHeader label={t("hypocrisy.premise.sectionLabel")} title={t("hypocrisy.premise.title")} />

  <div class="story-body page-x">
    <span bind:this={hairEl} class="story-hair"></span>

    <p class="story-reveal story-pitch font-display">
      {t("hypocrisy.premise.pitch")}
    </p>
  </div>
</section>

<style src="./TheGame.css"></style>

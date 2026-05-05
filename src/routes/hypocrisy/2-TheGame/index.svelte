<script lang="ts">
import { onMount } from "svelte";
import SectionHeader from "@/components/SectionHeader.svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";

const lines = $derived(t("hypocrisy.premise.lines"));

let sectionEl: HTMLElement;

onMount(() => {
  const context = gsap.context(() => {
    for (const line of gsap.utils.toArray<HTMLElement>(".story-line", sectionEl)) {
      gsap.from(line, {
        scrollTrigger: { trigger: line, start: "top 85%" },
        y: 24,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
      });
    }
  }, sectionEl);

  return () => context.revert();
});
</script>

<section id="about" bind:this={sectionEl} class="story-section">
  <SectionHeader label={t("hypocrisy.premise.sectionLabel")} />

  <div class="story-body page-x">
    <div class="story-lines">
      {#each lines as line, i (i)}
        <p class="story-line">{line}</p>
      {/each}
    </div>
  </div>
</section>

<style src="./TheGame.css"></style>

<script lang="ts">
import { onMount } from "svelte";
import SectionHeader from "@/components/SectionHeader.svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";
import Gallery from "./Gallery.svelte";
import Soundtrack from "./Soundtrack.svelte";

const stats = $derived([
  { value: "9", label: t("hypocrisy.devProgress.statCollaborators") },
  { value: "6", label: t("hypocrisy.devProgress.statOstTracks") },
  { value: "18+", label: t("hypocrisy.devProgress.statConceptPieces") },
  { value: "Q4 '26", label: t("hypocrisy.devProgress.statEarlyAccess") },
]);

let sectionEl: HTMLElement;
let headerEl: HTMLElement;
let statsEl: HTMLElement;

onMount(() => {
  const context = gsap.context(() => {
    gsap.from(headerEl.children, {
      scrollTrigger: { trigger: sectionEl, start: "top 75%" },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
    });

    gsap.from(statsEl.children, {
      scrollTrigger: { trigger: statsEl, start: "top 85%" },
      y: 24,
      opacity: 0,
      stagger: 0.08,
      duration: 0.6,
      ease: "power3.out",
    });
  }, sectionEl);

  return () => context.revert();
});
</script>

<section id="development" bind:this={sectionEl} class="dev-section">
  <div bind:this={headerEl} class="dev-header">
    <SectionHeader label={t("hypocrisy.devProgress.sectionLabel")} title={t("hypocrisy.devProgress.title")} />
    <p class="lead page-x">{t("hypocrisy.devProgress.subtitle")}</p>
  </div>

  <div bind:this={statsEl} class="stats page-x">
    {#each stats as stat (stat.label)}
      <div class="stat">
        <span class="stat-value font-display">{stat.value}</span>
        <span class="stat-label">{stat.label}</span>
      </div>
    {/each}
  </div>

  <div class="gallery-wrapper">
    <Gallery />
  </div>

  <Soundtrack />
</section>

<style src="./DevProgress.css"></style>

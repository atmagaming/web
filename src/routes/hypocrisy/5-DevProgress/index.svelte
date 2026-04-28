<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";
import SectionHeader from "../_shared/SectionHeader.svelte";
import Gallery from "./Gallery.svelte";
import Soundtrack from "./Soundtrack.svelte";

let sectionEl: HTMLElement;
let headerEl: HTMLElement;

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
  }, sectionEl);

  return () => context.revert();
});
</script>

<section id="development" bind:this={sectionEl} class="dev-section">
  <div bind:this={headerEl} class="dev-header">
    <SectionHeader label={t("hypocrisy.devProgress.sectionLabel")} title={t("hypocrisy.devProgress.title")} />
    <p class="lead page-x">{t("hypocrisy.devProgress.subtitle")}</p>
  </div>

  <div class="gallery-wrapper">
    <Gallery />
  </div>

  <Soundtrack />
</section>

<style src="./DevProgress.css"></style>

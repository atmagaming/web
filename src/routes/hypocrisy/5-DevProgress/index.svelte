<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";
import SectionHeader from "../_shared/SectionHeader.svelte";
import Gallery from "./Gallery.svelte";
import Soundtrack from "./Soundtrack.svelte";

let sectionEl: HTMLElement;

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".dev-header > *", {
      scrollTrigger: { trigger: sectionEl, start: "top 75%" },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
    });
  }, sectionEl);

  return () => ctx.revert();
});
</script>

<section id="development" bind:this={sectionEl} class="dev-section">
  <div class="dev-header">
    <SectionHeader label={t("hypocrisy.devProgress.sectionLabel")} title={t("hypocrisy.devProgress.title")}>
      <p class="lead">{t("hypocrisy.devProgress.subtitle")}</p>
    </SectionHeader>
  </div>

  <div class="gallery-wrapper">
    <Gallery />
  </div>

  <Soundtrack />
</section>

<style>
  .dev-section {
    padding: 8rem 0;

    @media (min-width: 1024px) {
      padding: 12rem 0;
    }
  }

  .lead {
    margin-bottom: 4rem;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.25);
  }

  .gallery-wrapper {
    margin-bottom: 8rem;
  }
</style>

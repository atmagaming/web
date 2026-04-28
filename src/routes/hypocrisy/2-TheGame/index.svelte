<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";
import MarginNote from "./MarginNote.svelte";

const marginNoteKeys = [
  { labelKey: "hypocrisy.premise.transmissionLabel", valueKey: "hypocrisy.premise.transmissionValue" },
  { labelKey: "hypocrisy.premise.coordinatesLabel", valueKey: "hypocrisy.premise.coordinatesValue" },
  { labelKey: "hypocrisy.premise.threatLabel", valueKey: "hypocrisy.premise.threatValue" },
] as const;

let sectionEl: HTMLElement;
let railEl: HTMLElement;
let cipherEl: HTMLElement;
let hairEl: HTMLElement;

onMount(() => {
  const context = gsap.context(() => {
    gsap.from(railEl, {
      scrollTrigger: { trigger: sectionEl, start: "top 80%" },
      scaleY: 0,
      transformOrigin: "top center",
      duration: 1.4,
      ease: "power3.out",
    });

    gsap.from(".story-reveal", {
      scrollTrigger: { trigger: sectionEl, start: "top 72%" },
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.9,
      ease: "power3.out",
    });

    gsap.from(cipherEl, {
      scrollTrigger: { trigger: sectionEl, start: "top 72%" },
      opacity: 0,
      scale: 0.94,
      duration: 1.6,
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
  <div bind:this={cipherEl} class="story-cipher" aria-hidden="true">00</div>
  <div bind:this={railEl} class="story-rail"></div>

  <header class="story-header page-x">
    <div class="story-reveal story-eyebrow">
      <span class="hairline"></span>
      <span class="eyebrow-text">{t("hypocrisy.premise.sectionLabel")} · {t("hypocrisy.premise.chapterMarker")}</span>
      <span class="hairline hairline-fade"></span>
    </div>

    <h2 class="story-reveal story-title font-display">
      {t("hypocrisy.premise.title")}
    </h2>
  </header>

  <div class="story-grid page-x">
    <aside class="story-reveal story-aside">
      {#each marginNoteKeys as note (note.labelKey)}
        <MarginNote label={t(note.labelKey)} value={t(note.valueKey)} />
      {/each}
    </aside>

    <div class="story-body">
      <span bind:this={hairEl} class="story-hair"></span>

      <p class="story-reveal story-quote font-display">
        <span class="quote-mark">“</span>{t("hypocrisy.premise.pitch")}<span class="quote-mark">”</span>
      </p>

      <div class="story-paragraphs">
        <p class="story-reveal story-paragraph">
          <span class="paragraph-marker">{t("hypocrisy.premise.paragraph1Marker")}</span>
          {t("hypocrisy.premise.paragraph1")}
        </p>
        <p class="story-reveal story-paragraph">
          <span class="paragraph-marker">{t("hypocrisy.premise.paragraph2Marker")}</span>
          {t("hypocrisy.premise.paragraph2")}
        </p>
      </div>

      <div class="story-reveal story-signoff">
        <span class="hairline-short"></span>
        <span class="eyebrow-text">{t("hypocrisy.premise.endMarker")}</span>
        <span class="hairline hairline-fade-soft"></span>
      </div>
    </div>
  </div>
</section>

<style src="./TheGame.css"></style>

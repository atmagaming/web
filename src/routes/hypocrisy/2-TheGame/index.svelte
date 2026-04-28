<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";
import MarginNote from "./MarginNote.svelte";

const marginNotes = [
  { label: "Transmission", value: "Aria · Rebel Frame" },
  { label: "Coordinates", value: "06 Worlds · Vertical" },
  { label: "Threat", value: "Enemies of the Soul" },
] as const;

let sectionEl: HTMLElement;

onMount(() => {
  const ctx = gsap.context(() => {
    const trigger = { trigger: sectionEl, start: "top 80%" };

    gsap.from(".story-rail", {
      scrollTrigger: trigger,
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

    gsap.from(".story-cipher", {
      scrollTrigger: { trigger: sectionEl, start: "top 72%" },
      opacity: 0,
      scale: 0.94,
      duration: 1.6,
      ease: "power3.out",
    });

    gsap.from(".story-hair", {
      scrollTrigger: { trigger: sectionEl, start: "top 78%" },
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
    });
  }, sectionEl);

  return () => ctx.revert();
});
</script>

<section id="about" bind:this={sectionEl} class="story-section">
  <div class="story-cipher" aria-hidden="true">00</div>
  <div class="story-rail"></div>

  <header class="story-header">
    <div class="story-reveal section-eyebrow">
      <span class="hairline"></span>
      <span class="eyebrow-text">{t("hypocrisy.premise.sectionLabel")} · Ch · 00</span>
      <span class="hairline hairline-fade"></span>
    </div>

    <h2 class="story-reveal story-title font-display">
      {t("hypocrisy.premise.title")}
    </h2>
  </header>

  <div class="story-grid">
    <aside class="story-reveal story-aside">
      {#each marginNotes as note (note.label)}
        <MarginNote label={note.label} value={note.value} />
      {/each}
    </aside>

    <div class="story-body">
      <span class="story-hair"></span>

      <p class="story-reveal story-quote font-display">
        <span class="quote-mark">“</span>{t("hypocrisy.premise.pitch")}<span class="quote-mark">”</span>
      </p>

      <div class="story-paragraphs">
        <p class="story-reveal story-paragraph">
          <span class="paragraph-marker">§ I · Outside</span>
          {t("hypocrisy.premise.paragraph1")}
        </p>
        <p class="story-reveal story-paragraph">
          <span class="paragraph-marker">§ II · Within</span>
          {t("hypocrisy.premise.paragraph2")}
        </p>
      </div>

      <div class="story-reveal story-signoff">
        <span class="hairline-short"></span>
        <span class="eyebrow-text">End · Prologue</span>
        <span class="hairline hairline-fade-soft"></span>
      </div>
    </div>
  </div>
</section>

<style>
  .story-section {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    padding: 8rem 0;

    @media (min-width: 1024px) {
      padding: 12rem 0;
    }
  }

  .story-cipher {
    position: absolute;
    pointer-events: none;
    user-select: none;
    z-index: 0;
    top: 2rem;
    right: -4rem;
    font-family: var(--font-display);
    font-size: clamp(14rem, 38vw, 40rem);
    line-height: 0.8;
    letter-spacing: -0.05em;
    color: transparent;
    -webkit-text-stroke: 1px rgba(212, 160, 23, 0.08);

    @media (min-width: 1024px) {
      right: -6rem;
    }
  }

  .story-rail {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1.5rem;
    width: 1px;
    pointer-events: none;
    background: linear-gradient(to bottom, transparent, rgba(184, 134, 11, 0.35), transparent);

    @media (min-width: 1024px) {
      left: 4rem;
    }
  }

  .story-header {
    position: relative;
    margin-bottom: 4rem;
    padding: 0 1.5rem;

    @media (min-width: 1024px) {
      margin-bottom: 6rem;
      padding: 0 4rem;
    }
  }

  .section-eyebrow {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .hairline {
    width: 2rem;
    height: 1px;
    background: var(--color-accent-500);
  }

  .hairline-fade {
    flex: 1;
    max-width: 10rem;
    background: linear-gradient(to right, rgba(184, 134, 11, 0.5), transparent);
  }

  .hairline-fade-soft {
    flex: 1;
    max-width: 12.5rem;
    background: rgba(255, 255, 255, 0.1);
  }

  .hairline-short {
    width: 4rem;
    height: 1px;
    background: rgba(255, 255, 255, 0.15);
  }

  .eyebrow-text {
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.4em;
    color: var(--color-accent-500);
  }

  .story-signoff .eyebrow-text {
    color: rgba(255, 255, 255, 0.3);
  }

  .story-title {
    max-width: 64rem;
    color: white;
    font-size: 3rem;
    line-height: 0.9;

    @media (min-width: 768px) {
      font-size: 4.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 8rem;
    }
  }

  .story-grid {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 0 1.5rem;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(12, minmax(0, 1fr));
      gap: 4rem;
      padding: 0 4rem;
    }
  }

  .story-aside {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 1024px) {
      grid-column: span 3;
    }
  }

  .story-body {
    position: relative;

    @media (min-width: 1024px) {
      grid-column: span 9;
      padding-left: 1.5rem;
    }
  }

  .story-hair {
    display: none;
    position: absolute;
    top: 0.75rem;
    left: -0.5rem;
    width: 2.5rem;
    height: 1px;
    background: rgba(184, 134, 11, 0.6);

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .story-quote {
    margin-bottom: 2.5rem;
    color: rgba(255, 255, 255, 0.95);
    font-size: 1.5rem;
    line-height: 1.15;
    text-wrap: balance;

    @media (min-width: 768px) {
      font-size: 2.25rem;
    }

    @media (min-width: 1024px) {
      margin-bottom: 3.5rem;
      font-size: 3rem;
    }
  }

  .quote-mark {
    display: inline-block;
    transform: translateY(0.1em);
    color: var(--color-accent-500);
  }

  .story-paragraphs {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 56rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
      gap: 3rem;
    }
  }

  .story-paragraph {
    padding-top: 1.25rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.55);
    font-size: 1rem;
    line-height: 1.625;

    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  }

  .paragraph-marker {
    display: block;
    margin-bottom: 0.75rem;
    font-family: var(--font-mono);
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.4em;
    color: rgba(184, 134, 11, 0.7);
  }

  .story-signoff {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 4rem;
  }
</style>

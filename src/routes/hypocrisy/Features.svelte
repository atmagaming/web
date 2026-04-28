<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";
import FeatureRow from "./FeatureRow.svelte";
import SectionHeader from "./SectionHeader.svelte";

const featureKeys = ["combat", "skills", "roguelite", "companions"] as const;
const romans = ["I", "II", "III", "IV"] as const;
const tags = ["Core Loop", "Progression", "Legacy", "Bonds"] as const;

const features = $derived(featureKeys.map((key) => translations[locale.value].hypocrisy.combat[key]));

let sectionEl: HTMLElement;

onMount(() => {
  const ctx = gsap.context(() => {
    const rows = gsap.utils.toArray<HTMLElement>(".feature-row");
    for (const row of rows) {
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

  <div class="lead">
    <p class="feature-reveal lead-text">{t("hypocrisy.combat.ariaDescription")}</p>
  </div>

  <div class="meta-row">
    <div class="feature-reveal meta-bar">
      <span class="meta-label">Four Pillars</span>
      <span class="meta-rule"></span>
      <span class="meta-label">01 — 04</span>
    </div>
  </div>

  <ol class="feature-list">
    {#each features as feature, i (i)}
      <FeatureRow index={i} roman={romans[i]} tag={tags[i]} title={feature.title} description={feature.description} />
    {/each}

    <div class="feature-rule terminal-rule"></div>
  </ol>

  <div class="signoff">
    <span class="signoff-rule-short"></span>
    <span class="meta-label">End · Pillars</span>
    <span class="signoff-rule"></span>
  </div>
</section>

<style>
  .features-section {
    position: relative;
    isolation: isolate;
    overflow: hidden;
    padding: 8rem 0;

    @media (min-width: 1024px) {
      padding: 12rem 0;
    }
  }

  .lead {
    max-width: 48rem;
    margin: 2.5rem 0 5rem;
    padding: 0 1.5rem;

    @media (min-width: 1024px) {
      margin-bottom: 7rem;
      padding: 0 4rem;
    }
  }

  .lead-text {
    color: rgba(255, 255, 255, 0.55);
    font-size: 1.125rem;
    line-height: 1.625;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }

  .meta-row {
    margin-bottom: 2.5rem;
    padding: 0 1.5rem;

    @media (min-width: 1024px) {
      padding: 0 4rem;
    }
  }

  .meta-bar {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: rgba(255, 255, 255, 0.3);
  }

  .meta-label {
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.4em;
  }

  .meta-rule {
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
  }

  .feature-list {
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .terminal-rule {
    position: absolute;
    left: 1.5rem;
    right: 1.5rem;
    height: 1px;
    background: linear-gradient(to right, rgba(184, 134, 11, 0.4), rgba(255, 255, 255, 0.1), transparent);

    @media (min-width: 1024px) {
      left: 4rem;
      right: 4rem;
    }
  }

  .signoff {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 5rem;
    padding: 0 1.5rem;
    color: rgba(255, 255, 255, 0.25);

    @media (min-width: 1024px) {
      padding: 0 4rem;
    }
  }

  .signoff-rule-short {
    width: 3rem;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
  }

  .signoff-rule {
    flex: 1;
    max-width: 12.5rem;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
  }
</style>

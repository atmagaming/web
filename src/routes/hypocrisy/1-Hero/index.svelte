<script lang="ts">
import ScrollPrompt from "@/components/ScrollPrompt.svelte";
import { t } from "@/lib/i18n/t";
import AnimatedTitle from "./AnimatedTitle.svelte";
import Tag from "./Tag.svelte";

const platformTags = [
  { text: "Steam", iconSrc: "/assets/icons/platforms/steam.svg" },
  { text: "PC • Mac", iconSrc: "/assets/icons/platforms/pc-mac.svg" },
  { text: "Unity", iconSrc: "/assets/icons/platforms/unity.svg" },
] as const;
</script>

<section class="hero">
  <video
    autoplay
    muted
    loop
    playsinline
    preload="none"
    poster="/assets/images/environment-poster.webp"
    src="/assets/videos/environment.webm"
    class="hero-video"
  ></video>

  <AnimatedTitle text={t("hypocrisy.hero.title")} />

  <div class="hero-overlay">
    <p class="tagline">{t("hypocrisy.hero.tagline")}</p>

    <div class="tags">
      <Tag translationKey="hypocrisy.hero.description" />
      <Tag translationKey="hypocrisy.hero.setting" />
      {#each platformTags as platform (platform.text)}
        <Tag text={platform.text} iconSrc={platform.iconSrc} />
      {/each}
      <Tag translationKey="hypocrisy.hero.schedule" variant="muted" />
    </div>

    <a href="#join" class="join-link">
      {t("hypocrisy.joinCta.sectionLabel")}
    </a>
  </div>

  <ScrollPrompt textKey="hypocrisy.hero.scrollHint" color="rgba(212, 160, 23, 0.7)" position="bottom-right" />
</section>

<style>
  .hero {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden;
    background: #03050a;
  }

  .hero-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-overlay {
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
    z-index: 10;
    box-sizing: border-box;
    padding: 0 1.5rem;

    @media (min-width: 768px) {
      bottom: 3rem;
    }

    @media (min-width: 1024px) {
      padding: 0 4rem;
    }
  }

  .tagline {
    max-width: 36rem;
    margin-bottom: 1.5rem;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 1.625;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  .join-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    padding: 0.625rem 1.25rem;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    text-decoration: none;
    cursor: pointer;
    color: var(--color-accent-500);
    border: 1.5px solid rgba(184, 134, 11, 0.3);
    transition: all 200ms ease;

    &:hover {
      color: var(--color-accent-400);
      border-color: var(--color-accent-500);
    }
  }
</style>

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

  <div class="hero-overlay page-x">
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

<style src="./Hero.css"></style>

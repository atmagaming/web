<script lang="ts">
import { onMount } from "svelte";
import ScrollPrompt from "@/components/ScrollPrompt.svelte";
import { blob } from "@/lib/assets";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";
import AnimatedTitle from "./AnimatedTitle.svelte";
import Tag from "./Tag.svelte";

const platformTags = [
  { text: "Steam", iconSrc: "/assets/icons/platforms/steam.svg" },
  { text: "PC • Mac", iconSrc: "/assets/icons/platforms/pc-mac.svg" },
  { text: "Unity", iconSrc: "/assets/icons/platforms/unity.svg" },
] as const;

let overlayEl: HTMLElement;

const heroIntroDelay = 1.4;
const scrollPromptDelay = 4.3;

const taglineWords = $derived(t("hypocrisy.hero.tagline").split(/\s+/));

onMount(() => {
  const context = gsap.context(() => {
    const words = overlayEl.querySelectorAll<HTMLElement>(".tagline-word");
    const tags = overlayEl.querySelectorAll<HTMLElement>(".tags > *");
    const join = overlayEl.querySelector(".join-link");

    gsap.set(words, { opacity: 0, y: 8 });
    gsap.set(tags, { opacity: 0, y: 8 });
    gsap.set(join, { opacity: 0, y: 10 });

    const timeline = gsap.timeline({ delay: heroIntroDelay });

    timeline.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.out",
    });

    timeline.to(tags, { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" }, "-=0.1");

    timeline.to(join, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
  }, overlayEl);

  return () => context.revert();
});
</script>

<section class="hero">
  <video
    autoplay
    muted
    loop
    playsinline
    preload="none"
    poster="/assets/images/environment-poster.webp"
    src={blob("videos/environment.webm")}
    class="hero-video"
  ></video>
  <div class="hero-darken" aria-hidden="true"></div>

  <div class="hero-title-cell">
    <AnimatedTitle text={t("hypocrisy.hero.title")} />
  </div>

  <div bind:this={overlayEl} class="hero-overlay page-x">
    <p class="tagline">
      {#each taglineWords as word, i (i)}
        <span class="tagline-word">{word}</span>{" "}
      {/each}
    </p>

    <div class="tags">
      <Tag translationKey="hypocrisy.hero.description" />
      <Tag translationKey="hypocrisy.hero.setting" />
      {#each platformTags as platform (platform.text)}
        <Tag text={platform.text} iconSrc={platform.iconSrc} />
      {/each}
      <Tag translationKey="hypocrisy.hero.schedule" variant="muted" />
    </div>

    <a href="#join" class="join-link">
      {t("hypocrisy.joinCta.title")}
    </a>
  </div>

  <ScrollPrompt
    textKey="hypocrisy.hero.scrollHint"
    color="rgba(212, 160, 23, 0.7)"
    position="bottom-right"
    delay={scrollPromptDelay}
  />
</section>

<style src="./Hero.css"></style>

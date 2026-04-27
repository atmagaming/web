<script lang="ts">
import ScrollPrompt from "@/components/ScrollPrompt.svelte";
import { t } from "@/lib/i18n/t";
import AnimatedTitle from "./AnimatedTitle.svelte";
import Tag from "./Tag.svelte";
</script>

<section class="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#03050a]">
  <video autoplay muted loop playsinline preload="none" poster="/assets/images/environment-poster.webp" src="/assets/videos/environment.webm" class="absolute inset-0 w-full h-full object-cover"></video>

  <AnimatedTitle text={t("hypocrisy.hero.title")} />

  <div class="absolute bottom-8 md:bottom-12 left-0 right-0 z-10 px-6 lg:px-16 box-border">
    <p class="text-lg md:text-xl text-white/50 font-light leading-relaxed mb-6 max-w-xl">
      {t("hypocrisy.hero.tagline")}
    </p>

    <div class="flex gap-2 flex-wrap items-center mb-8">
      <Tag translationKey="hypocrisy.hero.description" />
      <Tag translationKey="hypocrisy.hero.setting" />
      <Tag text="Steam" iconSrc="/assets/icons/platforms/steam.svg" />
      <Tag text="PC • Mac" iconSrc="/assets/icons/platforms/pc-mac.svg" />
      <Tag text="Unity" iconSrc="/assets/icons/platforms/unity.svg" />
      <Tag translationKey="hypocrisy.hero.schedule" variant="muted" />
    </div>

    <a
      href="#join"
      class="font-mono text-[0.65rem] tracking-[0.15em] uppercase px-5 py-2.5 inline-flex items-center gap-2 transition-all no-underline cursor-pointer text-accent-500 border-[1.5px] border-accent-500/30 hover:border-accent-500 hover:text-accent-400 mt-2"
    >
      {t("hypocrisy.joinCta.sectionLabel")}
    </a>
  </div>

  <ScrollPrompt textKey="hypocrisy.hero.scrollHint" color="rgba(212, 160, 23, 0.7)" position="bottom-right" />
</section>

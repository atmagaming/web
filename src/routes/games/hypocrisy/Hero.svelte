<script lang="ts">
import ScrollPrompt from "@/components/ScrollPrompt.svelte";
import { t } from "@/lib/i18n/t";
import AnimatedTitle from "./AnimatedTitle.svelte";
import Tag from "./Tag.svelte";
</script>

<section class="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#03050a]">
  <video autoplay muted loop playsinline poster="/assets/images/environment-poster.webp" src="/assets/videos/environment.webm" class="absolute inset-0 w-full h-full object-cover"></video>

  <div class="knockout-mask absolute inset-0 w-full h-full bg-[#03050a] flex flex-col items-center justify-center px-6 lg:px-16 box-border">
    <AnimatedTitle text={t("hypocrisy.hero.title")} />
  </div>

  <div class="absolute bottom-8 md:bottom-12 left-0 right-0 z-10 px-6 lg:px-16 box-border">
    <p class="text-lg md:text-xl text-white/50 font-light leading-relaxed mb-6 max-w-xl">
      {t("hypocrisy.hero.tagline")}
    </p>

    <div class="flex gap-2 flex-wrap items-center mb-8">
      <Tag translationKey="hypocrisy.hero.description" />
      <Tag translationKey="hypocrisy.hero.setting" />
      <Tag
        text="Steam"
        icon='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.979 0C5.678 0 .511 4.86.022 10.944l6.432 2.658a3.387 3.387 0 0 1 1.912-.588c.063 0 .125.002.188.006l2.861-4.142V8.83a4.528 4.528 0 0 1 4.524-4.524 4.528 4.528 0 0 1 4.524 4.524 4.528 4.528 0 0 1-4.524 4.524h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396a3.406 3.406 0 0 1-3.328-2.734L.533 15.26A12.018 12.018 0 0 0 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zM7.54 18.21l-1.473-.61a2.541 2.541 0 0 0 4.886-.862 2.542 2.542 0 0 0-2.54-2.541c-.127 0-.254.01-.378.028l1.523.63a1.868 1.868 0 0 1-1.432 3.45l-.586-.095zm8.399-6.238a3.02 3.02 0 0 0 3.016-3.016 3.023 3.023 0 0 0-3.016-3.016 3.023 3.023 0 0 0-3.016 3.016 3.02 3.02 0 0 0 3.016 3.016z"/>
        </svg>'
      />
      <Tag
        text="PC • Mac"
        icon='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>'
      />
      <Tag
        text="Unity"
        icon='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="m12.9288 4.2939 3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0Z"/>
        </svg>'
      />
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

<style>
  .knockout-mask {
    mix-blend-mode: multiply;
  }

</style>

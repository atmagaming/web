<script lang="ts">
import Button from "@/components/ui/Button.svelte";
import { t } from "@/lib/i18n/t";

let {
  onScrollToWhy,
  onScrollToJoin,
}: {
  onScrollToWhy?: () => void;
  onScrollToJoin?: () => void;
} = $props();
</script>

<section class="pt-13 min-h-screen flex flex-col justify-end pb-20 px-6 lg:px-16 relative overflow-hidden">
  <div
    class="absolute font-display text-[38vw] leading-[0.82] text-dark-950 opacity-[0.035] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[46%] whitespace-nowrap pointer-events-none select-none"
    aria-hidden="true"
  >ATMA</div>

  <div class="hero-slash absolute top-0 bottom-0 left-[1vw] w-0.75 bg-red origin-top"></div>

  <p class="hero-tag font-mono text-[0.68rem] tracking-[0.22em] uppercase text-gold my-7">
    {t("home.hero.tag")}
  </p>

  <h1 class="hero-title font-display text-[clamp(4rem,12vw,12rem)] leading-[0.88] tracking-[0.01em] text-dark-950 mb-6">
    {t("home.hero.title1")}<br>
    <span class="text-red">{t("home.hero.title2")}</span><br>
    {t("home.hero.title3")}
  </h1>

  <p class="hero-mission max-w-145 text-[clamp(1.15rem,2vw,1.5rem)] font-light leading-[1.45] text-dark-950 mb-6">
    {t("home.hero.mission")}
    <strong class="font-medium">{t("home.hero.startingWithGames")}</strong>
  </p>

  <div class="hero-actions flex items-center gap-2 flex-wrap">
   <Button onclick={onScrollToWhy}>
      {t("home.hero.whyWeExist")} &darr;
    </Button>
    <Button
      variant="outline"
      href="https://atmagaming.notion.site/Vision-dc4f14be61f741c38881701ac9c2ab74"
      target="_blank"
      rel="noopener noreferrer"
    >{t("home.hero.missionStatement")} &nearr;</Button>
  </div>

  <div class="absolute bottom-8 right-16 font-mono text-[0.6rem] tracking-[0.18em] uppercase text-border hidden lg:flex items-center gap-3">
    {t("home.hero.scroll")}
    <span class="block w-px h-8 bg-gradient-to-b from-border to-transparent"></span>
  </div>
</section>

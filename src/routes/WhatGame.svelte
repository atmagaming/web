<script lang="ts">
import SectionHeader from "@/components/ui/SectionHeader.svelte";
import { t } from "@/lib/i18n/t";

let { standalone = false }: { standalone?: boolean } = $props();
</script>

{#if standalone}
  <section class="px-6 lg:px-16 pb-12">
    {@render gameBlock()}
  </section>
{:else}
  {@render gameBlock()}
{/if}

{#snippet gameBlock()}
  <SectionHeader label={t("home.whatGame.label")} />
  <div class="bg-dark-950 relative overflow-hidden">
    <!-- Background video (right side) -->
    <video
      src="/assets/videos/environment.mp4"
      autoplay
      muted
      loop
      playsinline
      preload="none"
      aria-hidden="true"
      class="absolute top-0 right-0 h-full w-2/3 object-cover object-center"
    ></video>
    <!-- Gradient overlay: solid dark from left, fading to transparent -->
    <div
      class="absolute inset-0"
      style="background: linear-gradient(to right, #0a0a0a 30%, transparent), linear-gradient(30deg, #0a0a0a 30%, transparent)"
    ></div>

    <div class="relative p-5 lg:p-12">
      <div
        class="font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-[0.9] tracking-[0.03em] text-white my-3 lg:mb-4"
      >
        {t("home.whatGame.title")}
      </div>

      <p
        class="text-[0.9rem] lg:text-[1rem] italic font-light text-white/60 leading-[1.5] max-w-[520px] mb-4 lg:mb-6"
      >
        {t("home.whatGame.tagline")}
      </p>

      <div class="flex gap-2 lg:gap-3 flex-wrap items-center mb-5 lg:mb-8">
        <span
          class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1"
          >{t("home.whatGame.tagStoryRich")}</span
        >
        <span
          class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1"
          >{t("home.whatGame.tagRoguelike")}</span
        >
        <span
          class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1"
          >{t("home.whatGame.tagSciFan")}</span
        >
        <span
          class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1 inline-flex items-center gap-1.5"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M11.979 0C5.678 0 .511 4.86.022 10.944l6.432 2.658a3.387 3.387 0 0 1 1.912-.588c.063 0 .125.002.188.006l2.861-4.142V8.83a4.528 4.528 0 0 1 4.524-4.524 4.528 4.528 0 0 1 4.524 4.524 4.528 4.528 0 0 1-4.524 4.524h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396a3.406 3.406 0 0 1-3.328-2.734L.533 15.26A12.018 12.018 0 0 0 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zM7.54 18.21l-1.473-.61a2.541 2.541 0 0 0 4.886-.862 2.542 2.542 0 0 0-2.54-2.541c-.127 0-.254.01-.378.028l1.523.63a1.868 1.868 0 0 1-1.432 3.45l-.586-.095zm8.399-6.238a3.02 3.02 0 0 0 3.016-3.016 3.023 3.023 0 0 0-3.016-3.016 3.023 3.023 0 0 0-3.016 3.016 3.02 3.02 0 0 0 3.016 3.016z"
            /></svg
          >
          Steam
        </span>
        <span
          class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1 inline-flex items-center gap-1.5"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            ><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line
              x1="12"
              y1="17"
              x2="12"
              y2="21"
            /></svg
          >
          PC, Mac
        </span>
      </div>

      <a
        href="/games/hypocrisy"
        class="font-mono text-[0.7rem] lg:text-[0.75rem] tracking-[0.12em] uppercase text-dark-950 bg-white px-6 py-2.5 lg:px-8 lg:py-3.5 hover:bg-gold hover:text-white transition-colors inline-flex items-center gap-2.5 no-underline"
        >{t("home.whatGame.learnMore")} &rarr;</a
      >
    </div>
  </div>
{/snippet}

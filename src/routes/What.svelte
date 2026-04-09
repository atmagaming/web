<script lang="ts">
import { fade } from "svelte/transition";
import SectionHeader from "@/components/ui/SectionHeader.svelte";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";
import { fitText } from "@/lib/utils";
import WhatGame from "./WhatGame.svelte";

let { slideIndex = $bindable(0), pinned = false }: { slideIndex?: number; pinned?: boolean } = $props();

const reasons = $derived(translations[locale.value].home.reasons);
const showingReasons = $derived(slideIndex < reasons.length);
</script>

{#if pinned}
  <!-- Desktop: pinned scroll with fade transitions -->
  <section
    class="min-h-screen flex flex-col justify-center px-6 lg:px-16 relative overflow-hidden border-t-[1.5px] border-dark-950"
    id="what"
  >
    <!-- Background counter -->
    <div class="absolute inset-0 flex items-center justify-end pr-[10%] pointer-events-none select-none">
      {#key slideIndex}
        <span
          class="absolute font-display text-[clamp(20rem,40vw,45rem)] leading-none text-dark-950/[0.04] tabular-nums"
          transition:fade={{ duration: 300 }}
        >
          {showingReasons ? String(slideIndex + 1).padStart(2, "0") : t("home.what.firstGameBg")}
        </span>
      {/key}
    </div>

    <!-- Progress dots -->
    <div class="absolute right-16 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
      {#each reasons as _, i}
        <div
          class="w-1.5 h-1.5 transition-all duration-300 {i === slideIndex
            ? 'bg-red scale-150'
            : i < slideIndex
              ? 'bg-dark-950/30'
              : 'bg-dark-950/10'}"
        ></div>
      {/each}
      <div
        class="w-1.5 h-1.5 transition-all duration-300 {!showingReasons ? 'bg-red scale-150' : 'bg-dark-950/10'}"
      ></div>
    </div>

    <!-- Static header -->
    <div>
      <SectionHeader number={t("home.what.number")} label={t("home.what.label")} />

      <h2
        use:fitText
        class="font-display text-[clamp(2.2rem,7.5vw,7.5rem)] leading-[0.88] tracking-[0.01em] text-dark-950 mb-2 lg:mb-4"
      >
        {t("home.what.title1")}<br /><span class="text-gold">{t("home.what.title2")}</span>
      </h2>

      <p class="text-[1.15rem] leading-[1.65] text-text max-w-[640px] mb-12">
        {t("home.what.description")} <strong class="font-medium text-dark-950">{t("home.what.descriptionBold")}</strong>
        {t("home.what.descriptionSuffix")}
      </p>
    </div>

    <!-- Swappable area: reasons OR game block -->
    <div class="relative">
      <div
        class="transition-all duration-500 {showingReasons
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-8 pointer-events-none'}"
      >
        <div class="font-mono text-[0.63rem] tracking-[0.25em] uppercase text-text mb-6">{t("home.what.whyGames")}</div>

        <div class="max-w-[700px]">
          <div class="flex items-baseline gap-3 mb-4">
            <span
              class="font-display text-[clamp(1.6rem,3vw,2.8rem)] leading-[1.05] tracking-[0.02em] text-dark-950 uppercase shrink-0"
              >{t("home.what.gamesPrefix")}</span
            >
            <div class="relative flex-1">
              {#each reasons as reason, i}
                <p
                  class="{i === 0
                    ? 'relative'
                    : 'absolute top-0 left-0 right-0'} font-display text-[clamp(1.6rem,3vw,2.8rem)] leading-[1.05] tracking-[0.02em] text-dark-950 uppercase whitespace-nowrap transition-all duration-500 {i ===
                  slideIndex
                    ? 'opacity-100 translate-y-0'
                    : i < slideIndex
                      ? 'opacity-0 -translate-y-full'
                      : 'opacity-0 translate-y-full'}"
                >
                  {reason.prefix}<span class="text-red">{reason.emphasis}</span>
                </p>
              {/each}
            </div>
          </div>

          <div class="relative min-h-[80px]">
            {#each reasons as reason, i}
              <p
                class="absolute inset-0 text-[1.05rem] leading-[1.7] text-text max-w-[540px] transition-all duration-500 {i ===
                slideIndex
                  ? 'opacity-100 translate-y-0'
                  : i < slideIndex
                    ? 'opacity-0 -translate-y-4'
                    : 'opacity-0 translate-y-4'}"
              >
                {reason.text}
              </p>
            {/each}
          </div>
        </div>
      </div>

      <div
        class="absolute inset-0 transition-all duration-500 {showingReasons
          ? 'opacity-0 translate-y-8 pointer-events-none'
          : 'opacity-100 translate-y-0'}"
      >
        <WhatGame />
      </div>
    </div>
  </section>
{:else}
  <!-- Mobile: static layout, all reasons visible -->
  <section class="px-6 py-12 border-t-[1.5px] border-dark-950" id="what">
    <SectionHeader number={t("home.what.number")} label={t("home.what.label")} />

    <h2 use:fitText class="font-display text-[clamp(2.2rem,7.5vw,7.5rem)] leading-[0.88] tracking-[0.01em] text-dark-950 mb-2">
      ATMA<br /><span class="text-gold">GAMING.</span>
    </h2>

    <p class="text-[0.95rem] leading-[1.55] text-text max-w-[640px] mb-8">
      {t("home.what.description")} <strong class="font-medium text-dark-950">{t("home.what.descriptionBold")}</strong>
      {t("home.what.descriptionSuffix")}
    </p>

    <div class="font-mono text-[0.63rem] tracking-[0.25em] uppercase text-text mb-6">Why games?</div>

    <div class="flex flex-col gap-6">
      {#each reasons as reason}
        <div>
          <p class="font-display text-[1.3rem] leading-[1.1] tracking-[0.02em] text-dark-950 uppercase mb-2">
            {t("home.what.gamesPrefix")} {reason.prefix}<span class="text-red">{reason.emphasis}</span>
          </p>
          <p class="text-[0.9rem] leading-[1.6] text-text">
            {reason.text}
          </p>
        </div>
      {/each}
    </div>
  </section>
{/if}

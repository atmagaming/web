<script lang="ts">
import { Music, Palette } from "lucide-svelte";
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";

let el: HTMLElement;

const trackKeys = ["trackMainTheme", "trackGreed", "trackBattle", "trackReflection"] as const;
const tracks = $derived(trackKeys.map((key) => translations[locale.value].hypocrisy.artMusic[key]));

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".art-section > *", {
      scrollTrigger: { trigger: el, start: "top 75%" },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section id="art-music" bind:this={el} class="py-24 px-6">
  <div class="art-section max-w-6xl mx-auto">
    <p class="text-sm text-accent-400 uppercase tracking-widest mb-4 text-center">{t("hypocrisy.artMusic.sectionLabel")}</p>
    <h2 class="font-display text-4xl md:text-5xl text-white mb-16 text-center">{t("hypocrisy.artMusic.title")}</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <div class="flex items-center gap-3 mb-6">
          <Palette class="w-6 h-6 text-accent-400" />
          <h3 class="text-xl font-semibold text-white">{t("hypocrisy.artMusic.artTitle")}</h3>
        </div>
        <p class="text-white/50 mb-6 leading-relaxed">
          {t("hypocrisy.artMusic.artDescription")}
        </p>
        <div class="grid grid-cols-2 gap-3">
          {#each [1, 2, 3, 4] as i (i)}
            <div
              class="aspect-video rounded-lg bg-gradient-to-br from-dark-700 to-dark-800 border border-white/5 flex items-center justify-center"
            >
              <span class="text-xs text-white/20">{t("hypocrisy.artMusic.conceptArt")} {i}</span>
            </div>
          {/each}
        </div>
      </div>

      <div>
        <div class="flex items-center gap-3 mb-6">
          <Music class="w-6 h-6 text-accent-400" />
          <h3 class="text-xl font-semibold text-white">{t("hypocrisy.artMusic.soundtrackTitle")}</h3>
        </div>
        <p class="text-white/50 mb-6 leading-relaxed">
          {t("hypocrisy.artMusic.soundtrackDescription")}
        </p>
        <!-- Music placeholder -->
        <div class="space-y-3">
          {#each tracks as track (track)}
            <div class="flex items-center gap-4 p-4 rounded-lg bg-dark-800/50 border border-white/5">
              <div class="w-8 h-8 rounded-full bg-accent-600/20 flex items-center justify-center shrink-0">
                <Music class="w-4 h-4 text-accent-400" />
              </div>
              <div>
                <p class="text-sm text-white">{track}</p>
                <p class="text-xs text-white/30">{t("hypocrisy.artMusic.comingSoon")}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

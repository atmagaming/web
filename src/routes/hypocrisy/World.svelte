<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";
import SectionHeader from "./SectionHeader.svelte";

let el: HTMLElement;

const worldKeys = ["wrath", "desire", "greed", "obsession", "envy", "pride"] as const;
const worldColors = [
  "#dc2626", // wrath - red
  "#ec4899", // desire - pink
  "#eab308", // greed - yellow/gold
  "#8b5cf6", // obsession - violet
  "#22c55e", // envy - green
  "#f97316", // pride - orange
];

const worlds = $derived(
  worldKeys.map((key, i) => ({
    ...translations[locale.value].hypocrisy.world[key],
    color: worldColors[i],
    index: i + 1,
  })),
);

onMount(() => {
  const ctx = gsap.context(() => {
    const layers = gsap.utils.toArray<HTMLElement>(".world-layer");
    for (const layer of layers) {
      gsap.from(layer, {
        scrollTrigger: {
          trigger: layer,
          start: "top 85%",
          end: "top 50%",
          scrub: 0.5,
        },
        y: 60,
        opacity: 0,
      });
    }
  }, el);

  return () => ctx.revert();
});
</script>

<section id="universe" bind:this={el} class="py-32 lg:py-48">
  <SectionHeader label={t("hypocrisy.world.sectionLabel")} title={t("hypocrisy.world.title")}>
    <p class="text-lg text-white/50 max-w-2xl mb-20">
      {t("hypocrisy.world.description")}
    </p>
  </SectionHeader>

  <div class="px-6 lg:px-16">
    <!-- Vertical world stack: bottom to top -->
    <div class="relative flex flex-col-reverse gap-0">
      <!-- Vertical connecting line -->
      <div class="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-t from-white/5 via-white/10 to-white/5"></div>

      {#each worlds as world (world.name)}
        <div class="world-layer relative pl-16 md:pl-20 py-8 group">
          <!-- Layer indicator -->
          <div
            class="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-125"
            style="border-color: {world.color}; background: {world.color}15;"
          >
            <span class="text-[10px] font-mono font-bold" style="color: {world.color}">{world.index}</span>
          </div>

          <div class="relative py-4">
            <div class="flex items-baseline gap-3 mb-2">
              <span class="text-[10px] uppercase tracking-[0.2em] font-mono" style="color: {world.color}80">{world.layer}</span>
            </div>
            <h3 class="font-display text-3xl md:text-4xl text-white mb-3 transition-colors duration-300" style="--hover-color: {world.color}">
              {world.name}
            </h3>
            <p class="text-sm text-white/50 leading-relaxed max-w-xl group-hover:text-white/60 transition-colors duration-300">
              {world.description}
            </p>
          </div>

          <!-- Subtle color glow on hover -->
          <div
            class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
            style="background: radial-gradient(ellipse at 30% 50%, {world.color}08, transparent 70%);"
          ></div>
        </div>
      {/each}
    </div>

    <!-- Arrow pointing up -->
    <div class="flex justify-center mt-8">
      <div class="flex flex-col items-center gap-2 text-white/20">
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" class="rotate-180">
          <path d="M8 0L8 20M8 20L1 13M8 20L15 13" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        <span class="text-[10px] uppercase tracking-[0.2em] font-mono">Ascend</span>
      </div>
    </div>
  </div>
</section>

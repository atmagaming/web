<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";

let el: HTMLElement;
let activeTab = $state<"visuals" | "soundtrack" | "roadmap">("visuals");
let lightboxSrc = $state<string | null>(null);
let lightboxCaption = $state("");
let marqueeHovered = $state(false);

const galleryItems = [
  { src: "/assets/images/concepts/phoenix/polished.jpeg", key: "phoenixPolished" as const },
  { src: "/assets/images/concepts/phoenix/shapes.jpeg", key: "phoenixShapes" as const },
  { src: "/assets/images/concepts/world/buildings.jpeg", key: "worldBuildings" as const },
  { src: "/assets/images/concepts/world/plants.jpeg", key: "worldPlants" as const },
  { src: "/assets/images/concepts/world/world-1.jpeg", key: "worldEnvironment" as const },
  { src: "/assets/images/screenshots/character.png", key: "character" as const },
  { src: "/assets/images/screenshots/circle-platform.png", key: "circlePlatform" as const },
  { src: "/assets/images/screenshots/level-design.png", key: "levelDesign" as const },
  { src: "/assets/images/ui/death.png", key: "deathScreen" as const },
  { src: "/assets/images/ui/early-ui-concept.jpg", key: "earlyUi" as const },
  { src: "/assets/images/ui/hud.jpeg", key: "hud" as const },
  { src: "/assets/images/ui/main-menu.jpeg", key: "mainMenu" as const },
  { src: "/assets/images/ui/upgrades.png", key: "upgrades" as const },
];

const gallery = $derived(
  galleryItems.map((item) => ({
    ...item,
    caption: translations[locale.value].hypocrisy.devProgress.galleryItems[item.key],
  })),
);

const trackList = [
  { file: "/assets/music/main-mystery.mp3", key: "mainMystery" as const },
  { file: "/assets/music/krodha-2.mp3", key: "krodha" as const },
  { file: "/assets/music/moha-attachment.mp3", key: "mohaAttachment" as const },
  { file: "/assets/music/drf.mp3", key: "drf" as const },
  { file: "/assets/music/reflection.wav", key: "reflection" as const },
];

const tracks = $derived(
  trackList.map((track) => ({
    ...track,
    name: translations[locale.value].hypocrisy.devProgress.tracks[track.key],
  })),
);

let playingTrack = $state<string | null>(null);
let audioElement = $state<HTMLAudioElement | null>(null);

function toggleTrack(file: string) {
  if (playingTrack === file) {
    audioElement?.pause();
    playingTrack = null;
    return;
  }
  if (audioElement) audioElement.pause();
  audioElement = new Audio(file);
  audioElement.play();
  audioElement.addEventListener("ended", () => {
    playingTrack = null;
  });
  playingTrack = file;
}

function openLightbox(src: string, caption: string) {
  lightboxSrc = src;
  lightboxCaption = caption;
}

function closeLightbox() {
  lightboxSrc = null;
}

const phaseKeys = ["phase1", "phase2", "phase3"] as const;
const statuses = ["current", "upcoming", "future"] as const;
const phases = $derived(
  phaseKeys.map((key, i) => ({
    ...translations[locale.value].hypocrisy.devProgress[key],
    status: statuses[i],
  })),
);

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".dev-header > *", {
      scrollTrigger: { trigger: el, start: "top 75%" },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
    });
  }, el);

  return () => {
    ctx.revert();
    if (audioElement) audioElement.pause();
  };
});
</script>

<section id="development" bind:this={el} class="py-32 lg:py-48">
  <div class="max-w-6xl mx-auto px-6 lg:px-16">
    <div class="dev-header">
      <p class="text-xs text-accent-500 uppercase tracking-[0.25em] font-mono mb-4 flex items-center gap-4">
        <span class="w-8 h-px bg-accent-500"></span>
        {t("hypocrisy.devProgress.sectionLabel")}
      </p>
      <h2 class="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-none">
        {t("hypocrisy.devProgress.title")}
      </h2>
      <p class="text-base text-white/35 mb-12">
        {t("hypocrisy.devProgress.subtitle")}
      </p>
    </div>

    <!-- Tab nav -->
    <div class="flex gap-1 mb-12 border-b border-white/5 pb-px">
      {#each [
        { id: "visuals" as const, label: t("hypocrisy.devProgress.visualsTab") },
        { id: "soundtrack" as const, label: t("hypocrisy.devProgress.soundtrackTab") },
        { id: "roadmap" as const, label: t("hypocrisy.devProgress.roadmapTab") },
      ] as tab (tab.id)}
        <button
          type="button"
          class="px-5 py-3 text-xs uppercase tracking-[0.15em] font-mono transition-all border-b-2 -mb-px bg-transparent cursor-pointer {activeTab === tab.id ? 'text-accent-400 border-accent-500' : 'text-white/30 border-transparent hover:text-white/50'}"
          onclick={() => { activeTab = tab.id; }}
        >
          {tab.label}
        </button>
      {/each}
    </div>
  </div>

  <!-- Visuals tab — full-bleed infinite marquee -->
  {#if activeTab === "visuals"}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="marquee-container overflow-hidden"
      onmouseenter={() => { marqueeHovered = true; }}
      onmouseleave={() => { marqueeHovered = false; }}
    >
      <div class="marquee-track" class:paused={marqueeHovered}>
        {#each [0, 1] as _copy (_copy)}
          <div class="marquee-set">
            {#each gallery as item (item.src + _copy)}
              <button
                type="button"
                class="marquee-item relative h-48 md:h-64 aspect-video rounded-sm overflow-hidden bg-dark-900 group cursor-pointer border-none p-0 shrink-0"
                onclick={() => openLightbox(item.src, item.caption)}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <span class="absolute bottom-2.5 left-3 text-[10px] text-white/70 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.caption}</span>
              </button>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Soundtrack & Roadmap tabs — padded -->
  <div class="max-w-6xl mx-auto px-6 lg:px-16">
    <!-- Soundtrack tab -->
    {#if activeTab === "soundtrack"}
      <div class="max-w-xl space-y-2">
        {#each tracks as track (track.file)}
          <button
            type="button"
            class="w-full flex items-center gap-4 p-4 rounded-sm bg-white/[0.02] border border-white/5 hover:border-accent-500/20 transition-colors cursor-pointer text-left"
            onclick={() => toggleTrack(track.file)}
          >
            <div class="w-10 h-10 rounded-full border border-accent-500/30 flex items-center justify-center shrink-0 {playingTrack === track.file ? 'bg-accent-500/20' : ''}">
              {#if playingTrack === track.file}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="1" width="4" height="10" fill="currentColor" class="text-accent-400"/>
                  <rect x="7" y="1" width="4" height="10" fill="currentColor" class="text-accent-400"/>
                </svg>
              {:else}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 0L12 6L2 12V0Z" fill="currentColor" class="text-accent-400"/>
                </svg>
              {/if}
            </div>
            <div>
              <p class="text-sm text-white">{track.name}</p>
              <p class="text-[10px] text-white/25 font-mono uppercase tracking-wider">WIP</p>
            </div>
          </button>
        {/each}
      </div>
    {/if}

    <!-- Roadmap tab -->
    {#if activeTab === "roadmap"}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {#each phases as phase (phase.phase)}
          <div class="relative p-6 rounded-sm border transition-colors {phase.status === 'current' ? 'bg-accent-500/[0.06] border-accent-500/25' : 'bg-white/[0.02] border-white/5'}">
            {#if phase.status === "current"}
              <span class="absolute top-4 right-4 text-[9px] uppercase tracking-wider text-accent-400 bg-accent-500/15 px-2 py-0.5 rounded-full font-mono">
                {t("hypocrisy.devProgress.current")}
              </span>
            {/if}
            <p class="text-[10px] text-white/30 uppercase tracking-wider font-mono mb-2">{phase.phase}</p>
            <h3 class="text-lg font-semibold text-white mb-3">{phase.title}</h3>
            <p class="text-sm text-white/40 mb-4">{phase.description}</p>
            <ul class="space-y-2">
              {#each phase.items as item (item)}
                <li class="flex items-center gap-2 text-sm text-white/35">
                  <span class="w-1 h-1 rounded-full {phase.status === 'current' ? 'bg-accent-400' : 'bg-white/20'}"></span>
                  {item}
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>

<!-- Lightbox -->
{#if lightboxSrc}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-[600] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
    onclick={closeLightbox}
    onkeydown={(e) => { if (e.key === "Escape") closeLightbox(); }}
  >
    <div class="relative max-w-[90vw] max-h-[90vh]">
      <img src={lightboxSrc} alt={lightboxCaption} class="max-w-full max-h-[85vh] object-contain rounded-sm" />
      <p class="text-center text-xs text-white/50 font-mono mt-3">{lightboxCaption}</p>
    </div>
  </div>
{/if}

<style>
  .marquee-container {
    width: 100%;
    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  }

  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 40s linear infinite;
  }

  .marquee-track.paused {
    animation-play-state: paused;
  }

  .marquee-set {
    display: flex;
    gap: 0.75rem;
    padding-right: 0.75rem;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
</style>

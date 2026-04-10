<script lang="ts">
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";

let lightboxSrc = $state<string | null>(null);
let lightboxCaption = $state("");

type GalleryItem =
  | { type: "image"; src: string; key: keyof (typeof translations)["en"]["hypocrisy"]["devProgress"]["galleryItems"] }
  | { type: "video"; src: string; label: string };

const row1: GalleryItem[] = [
  { type: "image", src: "/assets/images/concepts/phoenix/polished.webp", key: "phoenixPolished" },
  { type: "video", src: "/assets/videos/environment.webm", label: "Environment" },
  { type: "image", src: "/assets/images/concepts/world/world-1.webp", key: "worldEnvironment" },
  { type: "image", src: "/assets/images/ui/main-menu.webp", key: "mainMenu" },
  { type: "video", src: "/assets/videos/new character.webm", label: "Character" },
  { type: "image", src: "/assets/images/concepts/world/plants.webp", key: "worldPlants" },
];

const row2: GalleryItem[] = [
  { type: "image", src: "/assets/images/concepts/world/buildings.webp", key: "worldBuildings" },
  { type: "image", src: "/assets/images/screenshots/character.webp", key: "character" },
  { type: "video", src: "/assets/videos/old-fighting-concept.webm", label: "Combat Prototype" },
  { type: "image", src: "/assets/images/concepts/game-early.webp", key: "gameEarly" },
  { type: "image", src: "/assets/images/concepts/phoenix/shapes.webp", key: "phoenixShapes" },
  { type: "image", src: "/assets/images/ui/hud.webp", key: "hud" },
  { type: "image", src: "/assets/images/screenshots/level-design.webp", key: "levelDesign" },
];

const row3: GalleryItem[] = [
  { type: "video", src: "/assets/videos/old-foes.webm", label: "Enemies" },
  { type: "image", src: "/assets/images/screenshots/circle-platform.webp", key: "circlePlatform" },
  { type: "image", src: "/assets/images/ui/death.webp", key: "deathScreen" },
  { type: "video", src: "/assets/videos/old-environment.webm", label: "World Exploration" },
  { type: "image", src: "/assets/images/ui/upgrades.webp", key: "upgrades" },
  { type: "image", src: "/assets/images/ui/early-ui-concept.webp", key: "earlyUi" },
];

const rows = [row1, row2, row3];
// Pixel offsets for staggered look
const rowPixelOffsets = [0, 180, 90];

function getCaption(item: GalleryItem): string {
  if (item.type === "video") return item.label;
  return translations[locale.value].hypocrisy.devProgress.galleryItems[item.key];
}

const rowElements: HTMLElement[] = [];
let scrollPos = 0;

function registerRow(node: HTMLElement, index: number) {
  rowElements[index] = node;
}

let autoScrollId: number;
const autoScrollSpeed = 0.3; // pixels per frame

function initGallery(wrapper: HTMLElement) {
  requestAnimationFrame(() => {
    const basePos = (rowElements[0]?.scrollWidth ?? 0) / 4;
    scrollPos = basePos;
    applyScroll();
  });

  // Only intercept horizontal wheel; let vertical scroll pass through
  wrapper.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      scrollPos += e.deltaX;
      applyScroll();
    },
    { passive: false },
  );

  // Touch drag (horizontal only)
  let touchStartX = 0;
  let touchStartScroll = 0;
  wrapper.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartScroll = scrollPos;
    },
    { passive: true },
  );

  wrapper.addEventListener(
    "touchmove",
    (e) => {
      const deltaX = touchStartX - e.touches[0].clientX;
      scrollPos = touchStartScroll + deltaX;
      applyScroll();
    },
    { passive: true },
  );

  // Slow continuous auto-scroll
  function tick() {
    scrollPos += autoScrollSpeed;
    applyScroll();
    autoScrollId = requestAnimationFrame(tick);
  }
  autoScrollId = requestAnimationFrame(tick);

  return { destroy: () => cancelAnimationFrame(autoScrollId) };
}

function applyScroll() {
  for (let i = 0; i < rowElements.length; i++) {
    const row = rowElements[i];
    if (!row) continue;
    const halfScroll = row.scrollWidth / 2;

    let pos = scrollPos + rowPixelOffsets[i];
    // Wrap around for infinite loop
    pos = ((pos % halfScroll) + halfScroll) % halfScroll;
    row.scrollLeft = pos;
  }
}

function openLightbox(src: string, caption: string) {
  lightboxSrc = src;
  lightboxCaption = caption;
}

function closeLightbox() {
  lightboxSrc = null;
}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="space-y-3" use:initGallery>
  <div class="px-6 lg:px-16 mb-5">
    <h3 class="text-xs uppercase tracking-[0.2em] font-mono text-accent-500/50">{t("hypocrisy.devProgress.visualsTab")}</h3>
  </div>

  {#each rows as row, rowIndex (rowIndex)}
    <div
      class="gallery-row overflow-x-hidden"
      use:registerRow={rowIndex}
    >
      <div class="flex gap-3 w-max">
        {#each [0, 1] as copy (copy)}
          {#each row as item (item.src + copy)}
            {#if item.type === "video"}
              <button
                type="button"
                class="relative shrink-0 h-[220px] md:h-[280px] w-[360px] md:w-[460px] rounded-sm overflow-hidden bg-dark-900 group cursor-pointer border border-white/5 hover:border-accent-500/20 transition-all duration-300 p-0"
                onclick={() => openLightbox(item.src, getCaption(item))}
              >
                <video src={item.src} autoplay muted loop playsinline preload="none" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"></video>
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                <span class="absolute bottom-2.5 left-3 text-[10px] text-white/50 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">{getCaption(item)}</span>
              </button>
            {:else}
              <button
                type="button"
                class="relative shrink-0 h-[220px] md:h-[280px] w-[360px] md:w-[460px] rounded-sm overflow-hidden bg-dark-900 group cursor-pointer border border-white/5 hover:border-accent-500/20 transition-all duration-300 p-0"
                onclick={() => openLightbox(item.src, getCaption(item))}
              >
                <img src={item.src} alt={getCaption(item)} class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500" loading="lazy" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <span class="absolute bottom-2.5 left-3 text-[10px] text-white/50 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">{getCaption(item)}</span>
              </button>
            {/if}
          {/each}
        {/each}
      </div>
    </div>
  {/each}
</div>

<!-- Lightbox -->
{#if lightboxSrc}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 z-[600] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
    onclick={closeLightbox}
    onkeydown={(e) => { if (e.key === "Escape") closeLightbox(); }}
  >
    <div class="relative max-w-[90vw] max-h-[90vh]">
      {#if lightboxSrc.endsWith(".webm")}
        <video src={lightboxSrc} autoplay loop muted controls class="max-w-full max-h-[85vh] object-contain rounded-sm"></video>
      {:else}
        <img src={lightboxSrc} alt={lightboxCaption} class="max-w-full max-h-[85vh] object-contain rounded-sm" />
      {/if}
      <p class="text-center text-xs text-white/50 font-mono mt-3">{lightboxCaption}</p>
    </div>
  </div>
{/if}

<style>
  .gallery-row {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .gallery-row::-webkit-scrollbar {
    display: none;
  }
</style>

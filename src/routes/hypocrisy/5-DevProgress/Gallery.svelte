<script lang="ts">
import { t } from "@/lib/i18n/t";
import type { translations } from "@/lib/i18n/translations";
import { localized } from "../_shared/i18n";
import GalleryItem from "./GalleryItem.svelte";
import Lightbox from "./Lightbox.svelte";

type GalleryItemKey = keyof (typeof translations)["en"]["hypocrisy"]["devProgress"]["galleryItems"];
type GalleryEntry = { type: "image"; src: string; key: GalleryItemKey } | { type: "video"; src: string; label: string };

const rows: GalleryEntry[][] = [
  [
    { type: "image", src: "/assets/images/concepts/phoenix/polished.webp", key: "phoenixPolished" },
    { type: "video", src: "/assets/videos/environment.webm", label: "Environment" },
    { type: "image", src: "/assets/images/concepts/world/world-1.webp", key: "worldEnvironment" },
    { type: "image", src: "/assets/images/ui/main-menu.webp", key: "mainMenu" },
    { type: "video", src: "/assets/videos/new character.webm", label: "Character" },
    { type: "image", src: "/assets/images/concepts/world/plants.webp", key: "worldPlants" },
  ],
  [
    { type: "image", src: "/assets/images/concepts/world/buildings.webp", key: "worldBuildings" },
    { type: "image", src: "/assets/images/screenshots/character.webp", key: "character" },
    { type: "video", src: "/assets/videos/old-fighting-concept.webm", label: "Combat Prototype" },
    { type: "image", src: "/assets/images/concepts/game-early.webp", key: "gameEarly" },
    { type: "image", src: "/assets/images/concepts/phoenix/shapes.webp", key: "phoenixShapes" },
    { type: "image", src: "/assets/images/ui/hud.webp", key: "hud" },
    { type: "image", src: "/assets/images/screenshots/level-design.webp", key: "levelDesign" },
  ],
  [
    { type: "video", src: "/assets/videos/old-foes.webm", label: "Enemies" },
    { type: "image", src: "/assets/images/screenshots/circle-platform.webp", key: "circlePlatform" },
    { type: "image", src: "/assets/images/ui/death.webp", key: "deathScreen" },
    { type: "video", src: "/assets/videos/old-environment.webm", label: "World Exploration" },
    { type: "image", src: "/assets/images/ui/upgrades.webp", key: "upgrades" },
  ],
];

const rowOffsets = [0, 180, 90];
const autoScrollSpeed = 0.3;

function captionFor(entry: GalleryEntry): string {
  if (entry.type === "video") return entry.label;
  return localized("devProgress").galleryItems[entry.key];
}

let lightboxSrc = $state<string | null>(null);
let lightboxCaption = $state("");

function initGallery(wrapper: HTMLElement) {
  const rowElements = Array.from(wrapper.querySelectorAll<HTMLElement>(".gallery-row"));
  let scrollPos = 0;
  let frameId = 0;
  let paused = document.hidden;
  let touchStartX = 0;
  let touchStartScroll = 0;

  function applyScroll() {
    for (let index = 0; index < rowElements.length; index++) {
      const row = rowElements[index];
      const halfScroll = row.scrollWidth / 2;
      const raw = scrollPos + rowOffsets[index];
      row.scrollLeft = ((raw % halfScroll) + halfScroll) % halfScroll;
    }
  }

  function tick() {
    if (!paused) scrollPos += autoScrollSpeed;
    applyScroll();
    frameId = requestAnimationFrame(tick);
  }

  function onVisibilityChange() {
    paused = document.hidden;
  }

  requestAnimationFrame(() => {
    scrollPos = (rowElements[0]?.scrollWidth ?? 0) / 4;
    applyScroll();
  });

  wrapper.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      event.preventDefault();
      scrollPos += event.deltaX;
      applyScroll();
    },
    { passive: false },
  );

  wrapper.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.touches[0].clientX;
      touchStartScroll = scrollPos;
    },
    { passive: true },
  );

  wrapper.addEventListener(
    "touchmove",
    (event) => {
      scrollPos = touchStartScroll + (touchStartX - event.touches[0].clientX);
      applyScroll();
    },
    { passive: true },
  );

  document.addEventListener("visibilitychange", onVisibilityChange);
  frameId = requestAnimationFrame(tick);

  return {
    destroy: () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    },
  };
}

function openLightbox(src: string, caption: string) {
  lightboxSrc = src;
  lightboxCaption = caption;
}

function closeLightbox() {
  lightboxSrc = null;
}
</script>

<div class="gallery" use:initGallery>
  <div class="gallery-heading page-x">
    <h3 class="section-eyebrow">{t("hypocrisy.devProgress.visualsTab")}</h3>
  </div>

  {#each rows as row, rowIndex (rowIndex)}
    <div class="gallery-row">
      <div class="gallery-track">
        {#each [0, 1] as copy (copy)}
          {#each row as entry (entry.src + copy)}
            <GalleryItem
              src={entry.src}
              caption={captionFor(entry)}
              isVideo={entry.type === "video"}
              onOpen={() => openLightbox(entry.src, captionFor(entry))}
            />
          {/each}
        {/each}
      </div>
    </div>
  {/each}
</div>

{#if lightboxSrc}
  <Lightbox src={lightboxSrc} caption={lightboxCaption} onClose={closeLightbox} />
{/if}

<style>
  .gallery {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .gallery-heading {
    margin-bottom: 1.25rem;
  }

  .gallery-row {
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .gallery-track {
    display: flex;
    gap: 0.75rem;
    width: max-content;
  }
</style>

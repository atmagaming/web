<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";
import SectionHeader from "../_shared/SectionHeader.svelte";
import Phase from "./Phase.svelte";
import type { PhaseStatus } from "./phase-types";

const phaseDefinitions = [
  { key: "phase1", status: "current" as PhaseStatus, width: 45 },
  { key: "phase2", status: "upcoming" as PhaseStatus, width: 30 },
  { key: "phase3", status: "future" as PhaseStatus, width: 25 },
] as const;

function localizedPhase(key: "phase1" | "phase2" | "phase3" | "phase4") {
  return translations[locale.value].hypocrisy.devProgress[key] ?? translations.en.hypocrisy.devProgress[key];
}

const phases = $derived(phaseDefinitions.map(({ key, status, width }) => ({ ...localizedPhase(key), status, width })));

const releasePhase = $derived(localizedPhase("phase4"));

let sectionEl: HTMLElement;
let timelineEl: HTMLElement;
let timelineLine: HTMLElement;
let timelineTrack: HTMLElement;
let releaseNode: HTMLElement;

function updateTrackHeight() {
  if (!timelineTrack || !releaseNode) return;
  const trackRect = timelineTrack.getBoundingClientRect();
  const nodeRect = releaseNode.getBoundingClientRect();
  timelineTrack.style.height = `${nodeRect.top + nodeRect.height / 2 - trackRect.top}px`;
}

function animatePhase(node: HTMLElement) {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: node, start: "top 75%", toggleActions: "play none none none" },
  });
  tl.from(node.querySelector(".phase-node"), { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(2)" });
  tl.from(node.querySelector(".phase-glow"), { scale: 0, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");
  tl.from(node.querySelector(".phase-card"), { x: -60, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.4");
  tl.from(node.querySelector(".duration-fill"), { scaleX: 0, duration: 0.8, ease: "power2.out" }, "-=0.5");
  tl.from(
    node.querySelectorAll(".phase-item"),
    { y: 15, opacity: 0, stagger: 0.08, duration: 0.4, ease: "power2.out" },
    "-=0.4",
  );
}

onMount(() => {
  updateTrackHeight();

  let resizeFrame = 0;
  function onResize() {
    if (resizeFrame) return;
    resizeFrame = requestAnimationFrame(() => {
      resizeFrame = 0;
      updateTrackHeight();
    });
  }
  window.addEventListener("resize", onResize);

  const ctx = gsap.context(() => {
    gsap.fromTo(
      timelineLine,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: timelineEl, start: "top 70%", end: "bottom 60%", scrub: 0.8 },
      },
    );

    for (const node of gsap.utils.toArray<HTMLElement>(".phase-entry", sectionEl)) animatePhase(node);
  }, sectionEl);

  return () => {
    ctx.revert();
    cancelAnimationFrame(resizeFrame);
    window.removeEventListener("resize", onResize);
  };
});
</script>

<section id="roadmap" bind:this={sectionEl} class="roadmap-section">
  <div class="roadmap-glow"></div>

  <SectionHeader label={t("hypocrisy.devProgress.roadmapTab")} title={t("hypocrisy.roadmap.title")} />

  <div bind:this={timelineEl} class="roadmap-timeline page-x">
    <div bind:this={timelineTrack} class="timeline-track">
      <div class="timeline-bg"></div>
      <div bind:this={timelineLine} class="timeline-fill"></div>
    </div>

    <div class="phases">
      {#each phases as phase (phase.phase)}
        <Phase
          status={phase.status}
          phase={phase.phase}
          title={phase.title}
          date={phase.date}
          description={phase.description}
          width={phase.width}
          items={phase.items}
        />
      {/each}
    </div>

    <div class="release-endpoint">
      <div class="release-marker">
        <div bind:this={releaseNode} class="release-node"></div>
      </div>
      <div>
        <h3 class="release-title font-display">{releasePhase.title}</h3>
        <p class="release-date">{releasePhase.date}</p>
      </div>
    </div>
  </div>
</section>

<style src="./Roadmap.css"></style>

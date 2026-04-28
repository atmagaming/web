<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";
import Phase, { type PhaseStatus } from "./Phase.svelte";
import SectionHeader from "./SectionHeader.svelte";

const phaseKeys = ["phase1", "phase2", "phase3"] as const;
const phaseStatuses: PhaseStatus[] = ["current", "upcoming", "future"];
const phaseWidths = [45, 30, 25] as const;

const phases = $derived(
  phaseKeys.map((key, index) => ({
    ...translations[locale.value].hypocrisy.devProgress[key],
    status: phaseStatuses[index],
    width: phaseWidths[index],
  })),
);

const releasePhase = $derived(translations[locale.value].hypocrisy.devProgress.phase4);

let sectionEl: HTMLElement;
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
  window.addEventListener("resize", updateTrackHeight);

  const ctx = gsap.context(() => {
    gsap.fromTo(
      timelineLine,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: ".roadmap-timeline", start: "top 70%", end: "bottom 60%", scrub: 0.8 },
      },
    );

    for (const node of gsap.utils.toArray<HTMLElement>(".phase-entry")) animatePhase(node);
  }, sectionEl);

  return () => {
    ctx.revert();
    window.removeEventListener("resize", updateTrackHeight);
  };
});
</script>

<section id="roadmap" bind:this={sectionEl} class="roadmap-section">
  <div class="roadmap-glow"></div>

  <SectionHeader label={t("hypocrisy.devProgress.roadmapTab")} title={t("hypocrisy.roadmap.title")} />

  <div class="roadmap-timeline">
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

<style>
  .roadmap-section {
    position: relative;
    overflow: hidden;
    padding: 8rem 0;

    @media (min-width: 1024px) {
      padding: 12rem 0;
    }
  }

  .roadmap-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 20% 30%, rgba(180, 134, 11, 0.03) 0%, transparent 60%);
  }

  .roadmap-timeline {
    position: relative;
    margin-top: 5rem;
    padding: 0 1.5rem;

    @media (min-width: 1024px) {
      padding: 0 4rem;
    }
  }

  .timeline-track {
    position: absolute;
    top: 0;
    left: 31px;
    width: 1px;

    @media (min-width: 1024px) {
      left: 71px;
    }
  }

  .timeline-bg {
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.04);
  }

  .timeline-fill {
    position: absolute;
    inset: 0;
    transform-origin: top;
    background: linear-gradient(
      to bottom,
      rgba(212, 160, 23, 0.5) 0%,
      rgba(212, 160, 23, 0.25) 40%,
      rgba(255, 255, 255, 0.08) 100%
    );
  }

  .phases {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 6rem;

    @media (min-width: 768px) {
      gap: 8rem;
    }
  }

  .release-endpoint {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 6rem;

    @media (min-width: 768px) {
      margin-top: 8rem;
    }
  }

  .release-marker {
    flex-shrink: 0;
    width: 14px;
    margin-right: 2.5rem;
  }

  .release-node {
    width: 14px;
    height: 14px;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 9999px;
    background: var(--color-dark-800);
  }

  .release-title {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.875rem;
    line-height: 1.25;

    @media (min-width: 768px) {
      font-size: 2.25rem;
    }
  }

  .release-date {
    margin-top: 0.25rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.25);
  }
</style>

<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";
import SectionHeader from "./SectionHeader.svelte";

let el: HTMLElement;
let timelineLine: HTMLElement;
let timelineTrack: HTMLElement;
let releaseNode: HTMLElement;

const phaseKeys = ["phase1", "phase2", "phase3"] as const;
const statuses = ["current", "upcoming", "future"] as const;
const phaseWidths = [45, 30, 25];
const phases = $derived(
  phaseKeys.map((key, i) => ({
    ...translations[locale.value].hypocrisy.devProgress[key],
    status: statuses[i],
    width: phaseWidths[i],
  })),
);

function updateTrackHeight() {
  if (!timelineTrack || !releaseNode) return;
  const trackRect = timelineTrack.getBoundingClientRect();
  const nodeRect = releaseNode.getBoundingClientRect();
  const height = nodeRect.top + nodeRect.height / 2 - trackRect.top;
  timelineTrack.style.height = `${height}px`;
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
        scrollTrigger: {
          trigger: ".roadmap-timeline",
          start: "top 70%",
          end: "bottom 60%",
          scrub: 0.8,
        },
      },
    );

    const nodes = gsap.utils.toArray<HTMLElement>(".phase-entry");
    for (const node of nodes) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: node,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(node.querySelector(".phase-node"), {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(2)",
      });

      tl.from(node.querySelector(".phase-glow"), { scale: 0, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3");

      tl.from(node.querySelector(".phase-card"), { x: -60, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.4");

      tl.from(node.querySelector(".duration-fill"), { scaleX: 0, duration: 0.8, ease: "power2.out" }, "-=0.5");

      tl.from(
        node.querySelectorAll(".phase-item"),
        { y: 15, opacity: 0, stagger: 0.08, duration: 0.4, ease: "power2.out" },
        "-=0.4",
      );
    }
  }, el);

  return () => {
    ctx.revert();
    window.removeEventListener("resize", updateTrackHeight);
  };
});
</script>

<section id="roadmap" bind:this={el} class="roadmap-section py-32 lg:py-48 relative overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,_rgba(180,134,11,0.03)_0%,_transparent_60%)]"></div>

  <SectionHeader label={t("hypocrisy.devProgress.roadmapTab")} title={t("hypocrisy.roadmap.title")} />

  <div class="roadmap-timeline relative mt-20 px-6 lg:px-16">
    <!-- Vertical line — always left, height set by JS to end at release node -->
    <div bind:this={timelineTrack} class="timeline-track absolute left-[31px] lg:left-[71px] top-0 w-px">
      <div class="absolute inset-0 bg-white/[0.04]"></div>
      <div bind:this={timelineLine} class="absolute inset-0 origin-top timeline-drawn"></div>
    </div>

    <!-- Phases -->
    <div class="relative space-y-24 md:space-y-32">
      {#each phases as phase (phase.phase)}
        <div class="phase-entry relative flex items-start">
          <!-- Node -->
          <div class="relative shrink-0 w-[14px] mr-10 mt-1">
            <div
              class="phase-glow absolute -inset-4 rounded-full"
              style="background: radial-gradient(circle, {phase.status === 'current' ? 'rgba(212, 160, 23, 0.15)' : 'rgba(255,255,255,0.03)'} 0%, transparent 70%);"
            ></div>
            <div
              class="phase-node relative w-[14px] h-[14px] rounded-full border-2 {phase.status === 'current'
                ? 'bg-accent-500 border-accent-400 shadow-[0_0_12px_rgba(212,160,23,0.4)]'
                : 'bg-dark-800 border-white/15'}"
            >
              {#if phase.status === "current"}
                <div class="absolute -inset-1 rounded-full border border-accent-500/30 animate-ping-slow"></div>
              {/if}
            </div>
          </div>

          <!-- Card -->
          <div class="phase-card flex-1 min-w-0">
            <div class="flex items-center gap-3 mb-3">
              <span
                class="text-[10px] uppercase tracking-[0.2em] font-mono {phase.status === 'current'
                  ? 'text-accent-400'
                  : 'text-white/25'}"
              >
                {phase.phase}
              </span>
              {#if phase.status === "current"}
                <span class="text-[10px] uppercase tracking-[0.2em] text-accent-400 bg-accent-500/15 px-2 py-0.5 rounded-full font-mono">
                  {t("hypocrisy.devProgress.current")}
                </span>
              {/if}
            </div>

            <h3
              class="font-display text-3xl md:text-4xl mb-2 leading-tight {phase.status === 'current'
                ? 'text-white'
                : 'text-white/50'}"
            >
              {phase.title}
            </h3>

            <p
              class="text-xs font-mono mb-4 {phase.status === 'current'
                ? 'text-accent-500/50'
                : 'text-white/25'}"
            >
              {phase.date}
            </p>

            <div class="mb-5" style="max-width: {phase.width * 2.5}px;">
              <div class="h-1 rounded-full bg-white/[0.04] overflow-hidden">
                <div
                  class="duration-fill h-full rounded-full origin-left {phase.status === 'current'
                    ? 'bg-gradient-to-r from-accent-600 to-accent-400'
                    : 'bg-white/10'}"
                  style="width: 100%;"
                ></div>
              </div>
            </div>

            <p
              class="text-sm leading-relaxed mb-5 max-w-md {phase.status === 'current'
                ? 'text-white/50'
                : 'text-white/25'}"
            >
              {phase.description}
            </p>

            <ul class="space-y-2 max-w-md">
              {#each phase.items as item (item)}
                <li
                  class="phase-item flex items-center gap-2.5 text-sm {phase.status === 'current' ? 'text-white/50' : 'text-white/25'}"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full shrink-0 {phase.status === 'current'
                      ? 'bg-accent-400'
                      : 'bg-white/15'}"
                  ></span>
                  {item}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>

    <!-- Release endpoint -->
    <div class="release-endpoint relative flex items-center mt-24 md:mt-32">
      <div class="relative shrink-0 w-[14px] mr-10">
        <div bind:this={releaseNode} class="phase-node relative w-[14px] h-[14px] rounded-full border-2 bg-dark-800 border-white/15"></div>
      </div>
      <div class="phase-card">
        <h3 class="font-display text-3xl md:text-4xl leading-tight text-white/50">
          {translations[locale.value].hypocrisy.devProgress.phase4.title}
        </h3>
        <p class="text-xs font-mono text-white/25 mt-1">
          {translations[locale.value].hypocrisy.devProgress.phase4.date}
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .timeline-drawn {
    background: linear-gradient(
      to bottom,
      rgba(212, 160, 23, 0.5) 0%,
      rgba(212, 160, 23, 0.25) 40%,
      rgba(255, 255, 255, 0.08) 100%
    );
  }

  @keyframes ping-slow {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .animate-ping-slow {
    animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
</style>

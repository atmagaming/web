<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";

let el: HTMLElement;

const phases = [
  {
    phase: "Phase 1",
    title: "Prototype",
    status: "current",
    description:
      "Core combat mechanics, first playable world, companion system foundation. Building the soul of the game.",
    items: ["Core combat loop", "First world prototype", "Base companion AI", "Art style exploration"],
  },
  {
    phase: "Phase 2",
    title: "Early Access Prep",
    status: "upcoming",
    description: "Expanding content, polishing systems, and preparing for community feedback.",
    items: ["3 playable worlds", "Full skill tree", "Rogue-lite progression", "Steam Early Access launch"],
  },
  {
    phase: "Phase 3",
    title: "Full Release",
    status: "future",
    description: "Complete vision with all worlds, companions, and the full narrative experience.",
    items: ["All 6 worlds", "8 companions", "Full story campaign", "Original soundtrack"],
  },
];

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".roadmap-card", {
      scrollTrigger: { trigger: el, start: "top 75%" },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section id="roadmap" bind:this={el} class="py-24 px-6 bg-dark-900/50">
  <div class="max-w-5xl mx-auto">
    <p class="text-sm text-accent-400 uppercase tracking-widest mb-4 text-center">Roadmap</p>
    <h2 class="font-display text-4xl md:text-5xl text-white mb-16 text-center">Development Journey</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each phases as p (p.phase)}
        <div
          class="roadmap-card relative p-6 rounded-xl border transition-colors {p.status === 'current'
            ? 'bg-accent-600/10 border-accent-500/30'
            : 'bg-dark-800/50 border-white/5'}"
        >
          {#if p.status === "current"}
            <span
              class="absolute top-4 right-4 text-[10px] uppercase tracking-wider text-accent-400 bg-accent-600/20 px-2 py-1 rounded-full"
            >
              Current
            </span>
          {/if}
          <p class="text-xs text-white/40 uppercase tracking-wider mb-2">{p.phase}</p>
          <h3 class="text-xl font-semibold text-white mb-3">{p.title}</h3>
          <p class="text-sm text-white/50 mb-4">{p.description}</p>
          <ul class="space-y-2">
            {#each p.items as item (item)}
              <li class="flex items-center gap-2 text-sm text-white/40">
                <span class="w-1.5 h-1.5 rounded-full {p.status === 'current' ? 'bg-accent-400' : 'bg-white/20'}"></span>
                {item}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>

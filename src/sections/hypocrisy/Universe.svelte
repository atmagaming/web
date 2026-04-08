<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";

let el: HTMLElement;

const worlds = [
  {
    name: "World of Greed",
    description: "A realm of excess where materialism consumes all. Golden towers hide hollow souls.",
    color: "from-yellow-600/20 to-transparent",
  },
  {
    name: "World of Wrath",
    description: "Burning landscapes of uncontrolled rage. Destruction is the only language spoken here.",
    color: "from-red-600/20 to-transparent",
  },
  {
    name: "World of Sloth",
    description: "A decaying paradise where apathy reigns. Beauty fades as ambition withers.",
    color: "from-blue-600/20 to-transparent",
  },
  {
    name: "World of Envy",
    description: "Mirrors and illusions everywhere. Nothing is real, nothing is ever enough.",
    color: "from-green-600/20 to-transparent",
  },
  {
    name: "World of Pride",
    description: "Towering monuments to ego. The higher you climb, the further you fall.",
    color: "from-purple-600/20 to-transparent",
  },
  {
    name: "World of Lust",
    description: "A seductive labyrinth of desire. Pleasure masks the emptiness beneath.",
    color: "from-pink-600/20 to-transparent",
  },
];

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".world-card", {
      scrollTrigger: { trigger: el, start: "top 75%" },
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section id="universe" bind:this={el} class="py-24 px-6">
  <div class="max-w-6xl mx-auto">
    <p class="text-sm text-accent-400 uppercase tracking-widest mb-4 text-center">Universe & Worlds</p>
    <h2 class="font-display text-4xl md:text-5xl text-white mb-6 text-center">Six Worlds. Six Enemies.</h2>
    <p class="text-lg text-white/50 text-center max-w-2xl mx-auto mb-16">
      Each world represents an enemy of the soul — a fundamental flaw that the regime exploits to maintain control.
      Conquer them to reclaim your true self.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each worlds as w (w.name)}
        <div
          class="world-card relative p-6 rounded-xl bg-dark-800/50 border border-white/5 overflow-hidden hover:border-white/10 transition-colors"
        >
          <div class="absolute inset-0 bg-gradient-to-br {w.color} pointer-events-none"></div>
          <div class="relative z-10">
            <h3 class="text-lg font-semibold text-white mb-3">{w.name}</h3>
            <p class="text-sm text-white/50">{w.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

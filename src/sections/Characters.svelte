<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";

let el: HTMLElement;

const companions = [
  {
    name: "Helios",
    role: "The Radiant Warrior",
    description: "A former soldier of the regime who defected after witnessing its true nature.",
  },
  {
    name: "Kai",
    role: "The Shadow Trickster",
    description: "A cunning infiltrator who uses deception as a weapon against the corrupt.",
  },
  {
    name: "Iris",
    role: "The Seer",
    description: "A mystic who can perceive the threads of fate and guide others through darkness.",
  },
  {
    name: "Kira",
    role: "The Alchemist",
    description: "A brilliant inventor who transforms raw elements into powerful tools of rebellion.",
  },
  {
    name: "Darius",
    role: "The Guardian",
    description: "An unyielding protector whose strength comes from his unshakable convictions.",
  },
  {
    name: "Ronin",
    role: "The Wanderer",
    description: "A masterless blade seeking purpose in a world that has lost its way.",
  },
  {
    name: "Lucy",
    role: "The Healer",
    description: "A compassionate soul who mends both wounds and spirits with equal care.",
  },
  {
    name: "Nellie",
    role: "The Chronicler",
    description: "A keeper of forbidden knowledge who preserves the truth the regime tries to erase.",
  },
];

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".char-card", {
      scrollTrigger: { trigger: el, start: "top 75%" },
      y: 50,
      opacity: 0,
      stagger: 0.08,
      duration: 0.6,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section id="characters" bind:this={el} class="py-24 px-6 bg-dark-900/50">
  <div class="max-w-6xl mx-auto">
    <p class="text-sm text-accent-400 uppercase tracking-widest mb-4 text-center">Characters</p>
    <h2 class="font-display text-4xl md:text-5xl text-white mb-6 text-center">Your Companions</h2>
    <p class="text-lg text-white/50 text-center max-w-2xl mx-auto mb-16">
      Allies who join your fight, each carrying their own scars, strengths, and stories.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each companions as c (c.name)}
        <div
          class="char-card p-6 rounded-xl bg-dark-800/50 border border-white/5 hover:border-accent-500/20 transition-all group"
        >
          <!-- Avatar placeholder -->
          <div
            class="w-16 h-16 rounded-full bg-gradient-to-br from-accent-500/30 to-accent-600/10 border border-accent-500/20 flex items-center justify-center mb-4 group-hover:border-accent-500/40 transition-colors"
          >
            <span class="font-display text-lg text-accent-400">{c.name[0]}</span>
          </div>
          <h3 class="text-base font-semibold text-white mb-1">{c.name}</h3>
          <p class="text-xs text-accent-400 mb-3">{c.role}</p>
          <p class="text-sm text-white/40">{c.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

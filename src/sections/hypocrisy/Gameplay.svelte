<script lang="ts">
import { RotateCcw, Swords, Users, Zap } from "lucide-svelte";
import { onMount } from "svelte";
import gsap from "@/lib/gsap";

let el: HTMLElement;

const features = [
  {
    icon: Swords,
    title: "Visceral 2D Combat",
    description: "Fast-paced melee and ranged combat with fluid combo systems and dodging mechanics.",
  },
  {
    icon: Zap,
    title: "Skills & Abilities",
    description: "Unlock and upgrade a diverse skill tree. Combine abilities for devastating synergies.",
  },
  {
    icon: RotateCcw,
    title: "Rogue-lite Progression",
    description: "Each run is unique. Carry forward knowledge and key upgrades as you grow stronger.",
  },
  {
    icon: Users,
    title: "Companions",
    description: "Recruit allies with unique abilities and stories. Build bonds that shape your journey.",
  },
];

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".gameplay-card", {
      scrollTrigger: { trigger: el, start: "top 75%" },
      y: 50,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section id="gameplay" bind:this={el} class="py-24 px-6 bg-dark-900/50">
  <div class="max-w-6xl mx-auto">
    <p class="text-sm text-accent-400 uppercase tracking-widest mb-4 text-center">Gameplay</p>
    <h2 class="font-display text-4xl md:text-5xl text-white mb-16 text-center">Core Mechanics</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each features as f (f.title)}
        <div
          class="gameplay-card p-6 rounded-xl bg-dark-800/50 border border-white/5 hover:border-accent-500/20 transition-colors"
        >
          <svelte:component this={f.icon} class="w-8 h-8 text-accent-400 mb-4" />
          <h3 class="text-lg font-semibold text-white mb-2">{f.title}</h3>
          <p class="text-sm text-white/50">{f.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<script lang="ts">
import { Briefcase } from "lucide-svelte";
import { onMount } from "svelte";
import gsap from "@/lib/gsap";

let el: HTMLElement;

const roles = [
  { title: "Game Developer", type: "Full-time / Remote", description: "Build core gameplay systems in Unity/Godot." },
  { title: "2D Artist", type: "Full-time / Remote", description: "Create characters, environments, and UI art." },
  { title: "Sound Designer", type: "Contract / Remote", description: "Craft immersive soundscapes and effects." },
  { title: "Community Manager", type: "Part-time / Remote", description: "Grow and nurture our player community." },
];

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".join-card", {
      scrollTrigger: { trigger: el, start: "top 75%" },
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section bind:this={el} class="py-24 px-6 bg-dark-900/50">
  <div class="max-w-4xl mx-auto">
    <p class="text-sm text-accent-400 uppercase tracking-widest mb-4 text-center">Careers</p>
    <h2 class="font-display text-4xl md:text-5xl text-white mb-6 text-center">Join the Team</h2>
    <p class="text-lg text-white/50 text-center max-w-2xl mx-auto mb-16">
      We're looking for passionate individuals who share our vision. If you want to create games that matter, we'd love
      to hear from you.
    </p>

    <div class="space-y-4">
      {#each roles as r (r.title)}
        <div
          class="join-card flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl bg-dark-800/50 border border-white/5 hover:border-accent-500/20 transition-colors gap-4"
        >
          <div class="flex items-start gap-4">
            <Briefcase class="w-5 h-5 text-accent-400 mt-0.5 shrink-0" />
            <div>
              <h3 class="text-base font-semibold text-white">{r.title}</h3>
              <p class="text-sm text-white/40 mt-1">{r.description}</p>
            </div>
          </div>
          <span class="text-xs text-white/30 uppercase tracking-wider whitespace-nowrap">{r.type}</span>
        </div>
      {/each}
    </div>

    <div class="mt-10 text-center">
      <a
        href="mailto:ceo@atmagaming.com?subject=Job Application"
        class="inline-flex items-center gap-2 px-8 py-3 bg-accent-600 hover:bg-accent-500 text-white rounded-lg transition-colors text-sm font-medium"
      >
        Apply Now
      </a>
    </div>
  </div>
</section>

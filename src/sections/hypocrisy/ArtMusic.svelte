<script lang="ts">
import { Music, Palette } from "lucide-svelte";
import { onMount } from "svelte";
import gsap from "@/lib/gsap";

let el: HTMLElement;

const tracks = ["Main Theme", "World of Greed", "Battle Anthem", "Reflection"];

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".art-section > *", {
      scrollTrigger: { trigger: el, start: "top 75%" },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section id="art-music" bind:this={el} class="py-24 px-6">
  <div class="art-section max-w-6xl mx-auto">
    <p class="text-sm text-accent-400 uppercase tracking-widest mb-4 text-center">Art & Music</p>
    <h2 class="font-display text-4xl md:text-5xl text-white mb-16 text-center">Crafted with Soul</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Art Style -->
      <div>
        <div class="flex items-center gap-3 mb-6">
          <Palette class="w-6 h-6 text-accent-400" />
          <h3 class="text-xl font-semibold text-white">Art Direction</h3>
        </div>
        <p class="text-white/50 mb-6 leading-relaxed">
          A distinctive blend of dark, atmospheric environments with vibrant energy effects. Hand-crafted pixel art
          meets modern lighting — creating a visual language that is both nostalgic and fresh.
        </p>
        <!-- Art placeholder grid -->
        <div class="grid grid-cols-2 gap-3">
          {#each [1, 2, 3, 4] as i (i)}
            <div
              class="aspect-video rounded-lg bg-gradient-to-br from-dark-700 to-dark-800 border border-white/5 flex items-center justify-center"
            >
              <span class="text-xs text-white/20">Concept Art {i}</span>
            </div>
          {/each}
        </div>
      </div>

      <!-- Music -->
      <div>
        <div class="flex items-center gap-3 mb-6">
          <Music class="w-6 h-6 text-accent-400" />
          <h3 class="text-xl font-semibold text-white">Soundtrack</h3>
        </div>
        <p class="text-white/50 mb-6 leading-relaxed">
          An original soundtrack that weaves orchestral grandeur with electronic textures. Each world has its own sonic
          identity — from haunting ambient pieces to pulse-pounding battle themes.
        </p>
        <!-- Music placeholder -->
        <div class="space-y-3">
          {#each tracks as track (track)}
            <div class="flex items-center gap-4 p-4 rounded-lg bg-dark-800/50 border border-white/5">
              <div class="w-8 h-8 rounded-full bg-accent-600/20 flex items-center justify-center shrink-0">
                <Music class="w-4 h-4 text-accent-400" />
              </div>
              <div>
                <p class="text-sm text-white">{track}</p>
                <p class="text-xs text-white/30">Coming soon</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

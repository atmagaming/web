<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";

let el: HTMLElement;

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".cta-content > *", {
      scrollTrigger: { trigger: el, start: "top 80%" },
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section bind:this={el} class="py-32 px-6 relative overflow-hidden">
  <div
    class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent-600)_0%,_transparent_70%)] opacity-10"
  ></div>

  <div class="cta-content relative z-10 max-w-3xl mx-auto text-center">
    <h2 class="font-display text-4xl md:text-6xl text-white mb-6">Begin Your Journey</h2>
    <p class="text-lg text-white/50 mb-10">
      Wishlist Hypocrisy on Steam and join our community to stay updated on development.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="https://store.steampowered.com"
        target="_blank"
        rel="noopener noreferrer"
        class="px-8 py-3 bg-accent-600 hover:bg-accent-500 text-white rounded-lg transition-colors text-sm font-medium"
      >
        Wishlist on Steam
      </a>
      <a
        href="https://discord.gg/atmagaming"
        target="_blank"
        rel="noopener noreferrer"
        class="px-8 py-3 border border-white/20 hover:border-white/40 text-white rounded-lg transition-colors text-sm font-medium"
      >
        Join Discord
      </a>
      <a
        href="mailto:ceo@atmagaming.com"
        class="px-8 py-3 border border-white/10 hover:border-white/20 text-white/60 hover:text-white rounded-lg transition-all text-sm"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>

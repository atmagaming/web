<script lang="ts">
import { ArrowRight, ChevronDown, Eye, Heart, Lightbulb, Mail, Shield, Sparkles, Users } from "lucide-svelte";
import { onMount } from "svelte";
import gsap from "@/lib/gsap";

const values = [
  { icon: Heart, label: "Love", description: "The foundation of everything we create" },
  { icon: Sparkles, label: "Kindness", description: "Reflected in every interaction" },
  { icon: Eye, label: "Honesty", description: "Truth in storytelling and craft" },
  { icon: Lightbulb, label: "Wisdom", description: "Meaningful choices, lasting impact" },
  { icon: Shield, label: "Courage", description: "Bold ideas, fearless creation" },
  { icon: Users, label: "Unity", description: "Together we build worlds" },
];

let missionEl: HTMLElement;
let valuesEl: HTMLElement;
let gameEl: HTMLElement;
let contactEl: HTMLElement;

function setupReveal(el: HTMLElement, threshold = 0.15) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("revealed");
        observer.unobserve(el);
      }
    },
    { threshold },
  );
  observer.observe(el);
  return observer;
}

onMount(() => {
  const observers = [setupReveal(missionEl), setupReveal(valuesEl), setupReveal(gameEl), setupReveal(contactEl)];

  const ctx = gsap.context(() => {
    gsap.from(".hero-title", { y: 40, opacity: 0, duration: 1, ease: "power3.out" });
    gsap.from(".hero-tagline", { y: 30, opacity: 0, duration: 1, delay: 0.3, ease: "power3.out" });
    gsap.from(".hero-cta", { y: 20, opacity: 0, duration: 0.8, delay: 0.6, ease: "power3.out" });
    gsap.from(".hero-scroll", { opacity: 0, duration: 0.8, delay: 1, ease: "power3.out" });
  });

  return () => {
    for (const obs of observers) obs.disconnect();
    ctx.revert();
  };
});
</script>

<div>
  <!-- Hero -->
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-accent-600)_0%,transparent_70%)] opacity-[0.08]"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent-500)_0%,transparent_50%)] opacity-[0.05]"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-gold-500)_0%,transparent_50%)] opacity-[0.03]"
    ></div>

    <div class="text-center px-6 relative z-10">
      <h1 class="hero-title font-display text-7xl md:text-9xl font-bold tracking-[0.15em] text-white mb-6">ATMA</h1>
      <p class="hero-tagline text-xl md:text-2xl text-white/60 max-w-xl mx-auto mb-12 font-light">
        Igniting light within hearts through games
      </p>
      <a
        href="/games/hypocrisy"
        class="hero-cta inline-flex items-center gap-2 px-8 py-3.5 bg-accent-600 hover:bg-accent-500 text-white rounded-lg transition-colors text-sm font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
      >
        Explore Hypocrisy <ArrowRight class="w-4 h-4" />
      </a>
    </div>

    <div class="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
      <span class="text-xs tracking-widest uppercase">Scroll</span>
      <ChevronDown class="w-4 h-4 animate-bounce" />
    </div>
  </section>

  <!-- Mission -->
  <section id="about" class="py-32 px-6">
    <div bind:this={missionEl} class="reveal-section max-w-3xl mx-auto text-center">
      <h2 class="font-display text-3xl md:text-4xl text-white mb-8">Our Mission</h2>
      <p class="text-lg text-white/60 leading-relaxed">
        At ATMA, we believe games have the power to transform. We craft experiences that challenge players to look
        within, confront their shadows, and discover the light that resides in every soul. Through compelling narratives
        and meaningful gameplay, we aim to ignite a spark of self-awareness and compassion.
      </p>
    </div>
  </section>

  <!-- Values -->
  <section class="py-32 px-6 relative">
    <div class="absolute inset-0 bg-linear-to-b from-dark-900/50 via-dark-900/30 to-transparent"></div>
    <div bind:this={valuesEl} class="reveal-section max-w-5xl mx-auto relative z-10">
      <h2 class="font-display text-3xl md:text-4xl text-white text-center mb-16">Our Values</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each values as v, i (v.label)}
          <div
            class="reveal-child p-8 rounded-2xl bg-dark-800/40 border border-white/6 hover:border-accent-500/30 transition-all duration-300 hover:bg-dark-800/60 group"
            style="transition-delay: {i * 80}ms"
          >
            <div
              class="w-12 h-12 rounded-xl bg-accent-600/10 flex items-center justify-center mb-5 group-hover:bg-accent-600/20 transition-colors"
            >
              <svelte:component this={v.icon} class="w-6 h-6 text-accent-400" />
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{v.label}</h3>
            <p class="text-sm text-white/50 leading-relaxed">{v.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Game Highlight -->
  <section class="py-32 px-6 relative overflow-hidden">
    <div
      class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--color-accent-600)_0%,transparent_70%)] opacity-[0.06]"
    ></div>
    <div bind:this={gameEl} class="reveal-section max-w-6xl mx-auto relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div class="reveal-child lg:w-1/2 shrink-0">
          <div
            class="relative rounded-2xl overflow-hidden shadow-2xl shadow-accent-600/10 border border-white/6"
          >
            <img src="/assets/images/game-icon.jpeg" alt="Hypocrisy" class="w-full aspect-square object-cover" />
            <div class="absolute inset-0 bg-linear-to-t from-dark-950/60 to-transparent"></div>
          </div>
        </div>

        <div class="reveal-child lg:w-1/2 text-center lg:text-left" style="transition-delay: 150ms">
          <p class="text-sm text-accent-400 uppercase tracking-widest mb-4 font-medium">Featured Game</p>
          <h2 class="font-display text-4xl md:text-5xl text-white mb-6">HYPOCRISY</h2>
          <p class="text-lg text-white/50 mb-8 leading-relaxed">
            Fight the regime. Confront your soul. An action-adventure rogue-lite set in a dark Science Fantasy world.
          </p>
          <a
            href="/games/hypocrisy"
            class="inline-flex items-center gap-2 px-8 py-3.5 border border-accent-500/50 text-accent-400 hover:bg-accent-600 hover:text-white hover:border-accent-600 rounded-lg transition-all text-sm font-medium"
          >
            Learn More <ArrowRight class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section id="contact" class="py-32 px-6 relative">
    <div class="absolute inset-0 bg-linear-to-b from-transparent via-dark-900/50 to-dark-900/30"></div>
    <div bind:this={contactEl} class="reveal-section max-w-3xl mx-auto text-center relative z-10">
      <div class="inline-flex w-14 h-14 rounded-2xl bg-accent-600/10 items-center justify-center mb-8">
        <Mail class="w-6 h-6 text-accent-400" />
      </div>
      <h2 class="font-display text-3xl md:text-4xl text-white mb-6">Get in Touch</h2>
      <p class="text-white/50 mb-10 text-lg">Interested in collaborating or have questions? Reach out to us.</p>
      <a
        href="mailto:ceo@atmagaming.com"
        class="inline-flex items-center gap-3 px-8 py-3.5 bg-dark-700/80 hover:bg-dark-600 text-white rounded-lg transition-all text-sm border border-white/6 hover:border-white/10"
      >
        <Mail class="w-4 h-4 text-white/50" />
        ceo@atmagaming.com
      </a>
    </div>
  </section>
</div>

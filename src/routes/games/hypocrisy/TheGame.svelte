<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";
import SectionHeader from "./SectionHeader.svelte";

let el: HTMLElement;

const featureKeys = ["combat", "skills", "roguelite", "companions"] as const;
const features = $derived(featureKeys.map((key) => translations[locale.value].hypocrisy.combat[key]));

const companionImages = [
  "/assets/images/concepts/characters/Helios.webp",
  "/assets/images/concepts/characters/kai.webp",
  "/assets/images/concepts/characters/Lucy.webp",
  "/assets/images/concepts/characters/darius.webp",
  "/assets/images/concepts/characters/nellie.webp",
];

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".pitch-text", {
      scrollTrigger: { trigger: el, start: "top 70%" },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    const cards = gsap.utils.toArray<HTMLElement>(".feature-showcase");
    for (const [i, card] of cards.entries()) {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out",
      });
    }
  }, el);

  return () => ctx.revert();
});
</script>

<section id="about" bind:this={el} class="py-32 lg:py-48">
  <SectionHeader label={t("hypocrisy.premise.sectionLabel")} title={t("hypocrisy.premise.title")} />

  <div class="px-6 lg:px-16">
    <!-- Punchy pitch -->
    <p class="pitch-text text-lg md:text-xl text-white/50 leading-relaxed mb-16 max-w-3xl">
      {t("hypocrisy.premise.pitch")}
    </p>

    <!-- Feature showcase grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- 1: Combat — video -->
      <div class="feature-showcase group relative rounded-sm overflow-hidden h-[320px] md:h-[380px] cursor-default">
        <video
          autoplay muted loop playsinline
          src="/assets/videos/combat-loop.mp4"
          class="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
        ></video>
        <div class="absolute inset-0 bg-gradient-to-t from-[#03050a] via-[#03050a]/40 to-transparent"></div>
        <!-- Accent edge -->
        <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-accent-500/40 via-accent-500/10 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span class="text-[10px] uppercase tracking-[0.2em] font-mono text-accent-500/50 mb-2 block">01</span>
          <h3 class="font-display text-2xl md:text-3xl text-white mb-2 group-hover:text-accent-400 transition-colors duration-300">
            {features[0].title}
          </h3>
          <p class="text-sm text-white/50 leading-relaxed max-w-sm transition-colors duration-300">
            {features[0].description}
          </p>
        </div>
      </div>

      <!-- 2: Skills — image -->
      <div class="feature-showcase group relative rounded-sm overflow-hidden h-[320px] md:h-[380px] cursor-default">
        <img
          src="/assets/images/ui/upgrades.webp"
          alt={features[1].title}
          class="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#03050a] via-[#03050a]/40 to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-accent-500/40 via-accent-500/10 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span class="text-[10px] uppercase tracking-[0.2em] font-mono text-accent-500/50 mb-2 block">02</span>
          <h3 class="font-display text-2xl md:text-3xl text-white mb-2 group-hover:text-accent-400 transition-colors duration-300">
            {features[1].title}
          </h3>
          <p class="text-sm text-white/50 leading-relaxed max-w-sm transition-colors duration-300">
            {features[1].description}
          </p>
        </div>
      </div>

      <!-- 3: Roguelike — image -->
      <div class="feature-showcase group relative rounded-sm overflow-hidden h-[320px] md:h-[380px] cursor-default">
        <img
          src="/assets/images/ui/death.webp"
          alt={features[2].title}
          class="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#03050a] via-[#03050a]/40 to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-accent-500/40 via-accent-500/10 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span class="text-[10px] uppercase tracking-[0.2em] font-mono text-accent-500/50 mb-2 block">03</span>
          <h3 class="font-display text-2xl md:text-3xl text-white mb-2 group-hover:text-accent-400 transition-colors duration-300">
            {features[2].title}
          </h3>
          <p class="text-sm text-white/50 leading-relaxed max-w-sm transition-colors duration-300">
            {features[2].description}
          </p>
        </div>
      </div>

      <!-- 4: Companions — portrait strip -->
      <div class="feature-showcase group relative rounded-sm overflow-hidden h-[320px] md:h-[380px] cursor-default">
        <!-- Companion portrait strip -->
        <div class="absolute inset-0 flex">
          {#each companionImages as src, i (src)}
            <div
              class="relative flex-1 overflow-hidden"
              style="transition-delay: {i * 50}ms;"
            >
              <img
                {src}
                alt="Companion"
                class="absolute inset-0 w-full h-full object-cover object-top opacity-70 group-hover:opacity-90 scale-105 group-hover:scale-110 transition-all duration-700"
              />
              <!-- Individual portrait divider -->
              {#if i > 0}
                <div class="absolute left-0 top-0 bottom-0 w-px bg-black/40"></div>
              {/if}
            </div>
          {/each}
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#03050a] via-[#03050a]/30 to-transparent"></div>
        <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-accent-500/40 via-accent-500/10 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <span class="text-[10px] uppercase tracking-[0.2em] font-mono text-accent-500/50 mb-2 block">04</span>
          <h3 class="font-display text-2xl md:text-3xl text-white mb-2 group-hover:text-accent-400 transition-colors duration-300">
            {features[3].title}
          </h3>
          <p class="text-sm text-white/50 leading-relaxed max-w-sm transition-colors duration-300">
            {features[3].description}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

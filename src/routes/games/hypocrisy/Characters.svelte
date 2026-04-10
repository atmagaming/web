<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";
import SectionHeader from "./SectionHeader.svelte";

let el: HTMLElement;

const companionKeys = ["helios", "kai", "iris", "kira", "darius", "ronin", "lucy", "nellie"] as const;
const companions = $derived(companionKeys.map((key) => translations[locale.value].hypocrisy.characters[key]));

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".char-card", {
      scrollTrigger: { trigger: el, start: "top 75%" },
      x: 40,
      opacity: 0,
      stagger: 0.08,
      duration: 0.6,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section id="characters" bind:this={el} class="py-32 lg:py-48">
  <SectionHeader label={t("hypocrisy.characters.sectionLabel")} title={t("hypocrisy.characters.title")}>
    <p class="text-lg text-white/50 max-w-2xl mb-12">
      {t("hypocrisy.characters.description")}
    </p>
  </SectionHeader>

  <div>
    <!-- Horizontal scroll container -->
    <div class="overflow-x-auto pb-4 px-6 lg:px-16 scrollbar-hide">
      <div class="flex gap-5 min-w-max">
        {#each companions as companion (companion.name)}
          <div
            class="char-card w-56 shrink-0 p-6 rounded-sm bg-white/[0.02] border border-white/5 hover:border-accent-500/20 transition-all duration-300 group"
          >
            <div
              class="w-14 h-14 rounded-full bg-gradient-to-br from-accent-500/20 to-transparent border border-accent-500/15 flex items-center justify-center mb-4 group-hover:border-accent-500/40 transition-colors"
            >
              <span class="font-display text-lg text-accent-400">{companion.name[0]}</span>
            </div>
            <h3 class="text-base font-semibold text-white mb-1">{companion.name}</h3>
            <p class="text-xs text-accent-500 mb-3 font-mono">{companion.role}</p>
            <p class="text-sm text-white/25 leading-relaxed">{companion.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
</style>

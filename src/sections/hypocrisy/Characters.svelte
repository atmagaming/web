<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";

let el: HTMLElement;

const companionKeys = ["helios", "kai", "iris", "kira", "darius", "ronin", "lucy", "nellie"] as const;
const companions = $derived(companionKeys.map((key) => translations[locale.value].hypocrisy.characters[key]));

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
    <p class="text-sm text-accent-400 uppercase tracking-widest mb-4 text-center">{t("hypocrisy.characters.sectionLabel")}</p>
    <h2 class="font-display text-4xl md:text-5xl text-white mb-6 text-center">{t("hypocrisy.characters.title")}</h2>
    <p class="text-lg text-white/50 text-center max-w-2xl mx-auto mb-16">
      {t("hypocrisy.characters.description")}
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

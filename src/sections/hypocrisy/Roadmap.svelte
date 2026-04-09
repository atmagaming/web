<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";

let el: HTMLElement;

const phaseKeys = ["phase1", "phase2", "phase3"] as const;
const statuses = ["current", "upcoming", "future"] as const;
const phases = $derived(
  phaseKeys.map((key, i) => ({
    ...translations[locale.value].hypocrisy.roadmap[key],
    status: statuses[i],
  })),
);

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".roadmap-card", {
      scrollTrigger: { trigger: el, start: "top 75%" },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section id="roadmap" bind:this={el} class="py-24 px-6 bg-dark-900/50">
  <div class="max-w-5xl mx-auto">
    <p class="text-sm text-accent-400 uppercase tracking-widest mb-4 text-center">{t("hypocrisy.roadmap.sectionLabel")}</p>
    <h2 class="font-display text-4xl md:text-5xl text-white mb-16 text-center">{t("hypocrisy.roadmap.title")}</h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each phases as p (p.phase)}
        <div
          class="roadmap-card relative p-6 rounded-xl border transition-colors {p.status === 'current'
            ? 'bg-accent-600/10 border-accent-500/30'
            : 'bg-dark-800/50 border-white/5'}"
        >
          {#if p.status === "current"}
            <span
              class="absolute top-4 right-4 text-[10px] uppercase tracking-wider text-accent-400 bg-accent-600/20 px-2 py-1 rounded-full"
            >
              {t("hypocrisy.roadmap.current")}
            </span>
          {/if}
          <p class="text-xs text-white/40 uppercase tracking-wider mb-2">{p.phase}</p>
          <h3 class="text-xl font-semibold text-white mb-3">{p.title}</h3>
          <p class="text-sm text-white/50 mb-4">{p.description}</p>
          <ul class="space-y-2">
            {#each p.items as item (item)}
              <li class="flex items-center gap-2 text-sm text-white/40">
                <span class="w-1.5 h-1.5 rounded-full {p.status === 'current' ? 'bg-accent-400' : 'bg-white/20'}"></span>
                {item}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>

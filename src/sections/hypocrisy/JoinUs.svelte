<script lang="ts">
import { Briefcase } from "lucide-svelte";
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";

let el: HTMLElement;

const roleKeys = ["roleDev", "roleArtist", "roleSound", "roleCommunity"] as const;
const roles = $derived(roleKeys.map((key) => translations[locale.value].hypocrisy.joinUs[key]));

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

<section id="join" bind:this={el} class="py-24 px-6 bg-dark-900/50">
  <div class="max-w-4xl mx-auto">
    <p class="text-sm text-accent-400 uppercase tracking-widest mb-4 text-center">{t("hypocrisy.joinUs.sectionLabel")}</p>
    <h2 class="font-display text-4xl md:text-5xl text-white mb-6 text-center">{t("hypocrisy.joinUs.title")}</h2>
    <p class="text-lg text-white/50 text-center max-w-2xl mx-auto mb-16">
      {t("hypocrisy.joinUs.description")}
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
        {t("hypocrisy.joinUs.applyNow")}
      </a>
    </div>
  </div>
</section>

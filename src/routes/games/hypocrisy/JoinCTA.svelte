<script lang="ts">
import { Briefcase } from "lucide-svelte";
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";

let el: HTMLElement;

const roleKeys = ["roleDev", "roleArtist", "roleSound", "roleCommunity"] as const;
const roles = $derived(roleKeys.map((key) => translations[locale.value].hypocrisy.joinCta[key]));

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".join-content > *", {
      scrollTrigger: { trigger: el, start: "top 75%" },
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section id="join" bind:this={el} class="py-32 lg:py-48 px-6 lg:px-16 relative overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(180,134,11,0.06)_0%,_transparent_70%)]"></div>

  <div class="join-content relative z-10 max-w-4xl mx-auto">
    <!-- Join the team -->
    <p class="text-xs text-accent-500 uppercase tracking-[0.25em] font-mono mb-4 flex items-center gap-4">
      <span class="w-8 h-px bg-accent-500"></span>
      {t("hypocrisy.joinCta.sectionLabel")}
    </p>
    <h2 class="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-none">
      {t("hypocrisy.joinCta.title")}
    </h2>
    <p class="text-lg text-white/40 max-w-2xl mb-12">
      {t("hypocrisy.joinCta.description")}
    </p>

    <!-- Roles -->
    <div class="space-y-3 mb-16">
      {#each roles as role (role.title)}
        <div class="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-sm bg-white/[0.02] border border-white/5 hover:border-accent-500/20 transition-colors gap-3">
          <div class="flex items-start gap-4">
            <Briefcase class="w-4 h-4 text-accent-500 mt-1 shrink-0" />
            <div>
              <h3 class="text-sm font-semibold text-white">{role.title}</h3>
              <p class="text-xs text-white/35 mt-0.5">{role.description}</p>
            </div>
          </div>
          <span class="text-[10px] text-white/25 uppercase tracking-wider whitespace-nowrap font-mono">{role.type}</span>
        </div>
      {/each}
    </div>

    <div class="mb-20">
      <a
        href="mailto:ceo@atmagaming.com?subject=Job Application"
        class="inline-flex items-center gap-2 px-8 py-3 bg-accent-600 hover:bg-accent-500 text-white rounded-sm transition-colors text-sm font-medium"
      >
        {t("hypocrisy.joinCta.applyNow")}
      </a>
    </div>

    <!-- Divider -->
    <div class="w-16 h-px bg-white/10 mb-16"></div>

    <!-- CTA -->
    <h3 class="font-display text-3xl md:text-5xl text-white mb-4">
      {t("hypocrisy.joinCta.ctaTitle")}
    </h3>
    <p class="text-base text-white/40 mb-10">
      {t("hypocrisy.joinCta.ctaDescription")}
    </p>

    <div class="flex flex-col sm:flex-row gap-4">
      <a
        href="https://store.steampowered.com"
        target="_blank"
        rel="noopener noreferrer"
        class="px-8 py-3 bg-accent-600 hover:bg-accent-500 text-white rounded-sm transition-colors text-sm font-medium text-center"
      >
        {t("hypocrisy.joinCta.wishlist")}
      </a>
      <a
        href="https://discord.gg/atmagaming"
        target="_blank"
        rel="noopener noreferrer"
        class="px-8 py-3 border border-white/15 hover:border-white/30 text-white rounded-sm transition-colors text-sm font-medium text-center"
      >
        {t("hypocrisy.joinCta.discord")}
      </a>
      <a
        href="mailto:ceo@atmagaming.com"
        class="px-8 py-3 border border-white/8 hover:border-white/15 text-white/50 hover:text-white rounded-sm transition-all text-sm text-center"
      >
        {t("hypocrisy.joinCta.contact")}
      </a>
    </div>
  </div>
</section>

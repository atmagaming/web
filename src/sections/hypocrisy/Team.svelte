<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";

let el: HTMLElement;

const team = $derived.by(() => {
  const tr = translations[locale.value].hypocrisy.team;
  return [
    { name: tr.founderName, role: tr.founderRole, initials: "VY" },
    { name: tr.memberName, role: tr.roleDev, initials: "TM" },
    { name: tr.memberName, role: tr.roleArtist, initials: "TM" },
    { name: tr.memberName, role: tr.roleSound, initials: "TM" },
  ];
});

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".team-card", {
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

<section id="team" bind:this={el} class="py-24 px-6">
  <div class="max-w-5xl mx-auto">
    <p class="text-sm text-accent-400 uppercase tracking-widest mb-4 text-center">{t("hypocrisy.team.sectionLabel")}</p>
    <h2 class="font-display text-4xl md:text-5xl text-white mb-6 text-center">{t("hypocrisy.team.title")}</h2>
    <p class="text-lg text-white/50 text-center max-w-2xl mx-auto mb-16">
      {t("hypocrisy.team.description")}
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each team as m, i (`${m.name}-${i}`)}
        <div class="team-card text-center p-6 rounded-xl bg-dark-800/50 border border-white/5">
          <div
            class="w-20 h-20 rounded-full bg-gradient-to-br from-accent-500/20 to-dark-700 border border-white/10 flex items-center justify-center mx-auto mb-4"
          >
            <span class="font-display text-lg text-accent-400">{m.initials}</span>
          </div>
          <h3 class="text-base font-semibold text-white mb-1">{m.name}</h3>
          <p class="text-sm text-white/40">{m.role}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

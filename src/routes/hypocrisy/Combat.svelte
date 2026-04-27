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

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".combat-text > *", {
      scrollTrigger: { trigger: el, start: "top 75%" },
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section id="gameplay" bind:this={el} class="py-32 lg:py-48">
  <div class="combat-text">
    <SectionHeader label={t("hypocrisy.combat.sectionLabel")} title={t("hypocrisy.combat.title")}>
      <p class="text-lg text-white/50 leading-relaxed mb-12 max-w-2xl">
        {t("hypocrisy.combat.ariaDescription")}
      </p>
    </SectionHeader>

    <div class="px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      {#each features as feature (feature.title)}
        <div class="group">
          <div class="flex items-start gap-4">
            <span class="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2.5 shrink-0 group-hover:scale-150 transition-transform"></span>
            <div>
              <h3 class="text-base font-semibold text-white mb-1">{feature.title}</h3>
              <p class="text-sm text-white/50 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

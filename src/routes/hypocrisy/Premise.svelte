<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";
import SectionHeader from "./SectionHeader.svelte";

let el: HTMLElement;

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".premise-content > *", {
      scrollTrigger: { trigger: el, start: "top 75%" },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section id="about" bind:this={el} class="py-32 lg:py-48">
  <div class="premise-content">
    <SectionHeader label={t("hypocrisy.premise.sectionLabel")} title={t("hypocrisy.premise.title")} />
    <div class="px-6 lg:px-16">
      <p class="text-lg text-white/50 leading-relaxed mb-6 max-w-2xl">
        {t("hypocrisy.premise.paragraph1")}
      </p>
      <p class="text-lg text-white/50 leading-relaxed mb-10 max-w-2xl">
        {t("hypocrisy.premise.paragraph2")}
      </p>
    </div>
  </div>
</section>

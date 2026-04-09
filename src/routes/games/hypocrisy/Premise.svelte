<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";

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

<section id="about" bind:this={el} class="py-32 lg:py-48 px-6 lg:px-16">
  <div class="premise-content max-w-4xl mx-auto">
    <p class="text-xs text-accent-500 uppercase tracking-[0.25em] font-mono mb-4 flex items-center gap-4">
      <span class="w-8 h-px bg-accent-500"></span>
      {t("hypocrisy.premise.sectionLabel")}
    </p>
    <h2 class="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-10 leading-none">
      {t("hypocrisy.premise.title")}
    </h2>
    <p class="text-lg text-white/50 leading-relaxed mb-6 max-w-2xl">
      {t("hypocrisy.premise.paragraph1")}
    </p>
    <p class="text-lg text-white/50 leading-relaxed mb-10 max-w-2xl">
      {t("hypocrisy.premise.paragraph2")}
    </p>
  </div>
</section>

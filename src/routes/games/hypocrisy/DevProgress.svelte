<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";
import Gallery from "./Gallery.svelte";
import SectionHeader from "./SectionHeader.svelte";
import Soundtrack from "./Soundtrack.svelte";

let el: HTMLElement;

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".dev-header > *", {
      scrollTrigger: { trigger: el, start: "top 75%" },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
    });
  }, el);

  return () => ctx.revert();
});
</script>

<section id="development" bind:this={el} class="py-32 lg:py-48">
  <div class="dev-header">
    <SectionHeader label={t("hypocrisy.devProgress.sectionLabel")} title={t("hypocrisy.devProgress.title")}>
      <p class="text-base text-white/25 mb-16">
        {t("hypocrisy.devProgress.subtitle")}
      </p>
    </SectionHeader>
  </div>

  <div class="mb-32">
    <Gallery />
  </div>

  <Soundtrack />
</section>

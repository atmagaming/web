<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { fitText } from "@/lib/utils";

let { text }: { text: string } = $props();

const letters = $derived(text.split(""));

let titleEl: HTMLElement;

onMount(() => {
  const letterEls = titleEl?.querySelectorAll<HTMLElement>(".hero-letter");
  if (!letterEls?.length) return;

  for (const el of letterEls) {
    const fadeDelay = Math.random() * 1.2;
    const drift = 2 + Math.random() * 3;
    const speed = 2 + Math.random() * 3;

    gsap.to(el, {
      opacity: 1,
      duration: 0.8,
      delay: fadeDelay,
      ease: "power2.out",
    });

    gsap.to(el, {
      y: drift,
      duration: speed,
      ease: "quad.inOut",
      yoyo: true,
      repeat: -1,
      delay: fadeDelay + Math.random() * 1.5,
    });
  }
});
</script>

<div
  class="knockout-mask absolute inset-0 w-full h-full bg-[#03050a] flex flex-col items-center justify-center px-6 lg:px-16 box-border"
>
  <h1
    bind:this={titleEl}
    use:fitText={{ mode: "exact" }}
    style="--chars: {letters.length}"
    class="animated-title font-display font-bold leading-[0.85] tracking-[-0.02em] text-center select-none text-white whitespace-nowrap"
  >
    {#each letters as letter, i (i)}
      <span class="hero-letter">{letter}</span>
    {/each}
  </h1>
</div>

<style>
  .animated-title {
    font-size: clamp(3rem, calc(100cqi / var(--chars) * 1.55), 20rem);
  }

  .hero-letter {
    display: inline-block;
    will-change: transform, opacity;
    opacity: 0;
  }

  .knockout-mask {
    mix-blend-mode: multiply;
    container-type: inline-size;
  }
</style>

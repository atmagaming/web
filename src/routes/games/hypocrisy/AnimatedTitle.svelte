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
    const drift = 2 + Math.random() * 3;
    const speed = 2 + Math.random() * 3;

    gsap.to(el, {
      y: drift,
      duration: speed,
      ease: "quad.inOut",
      yoyo: true,
      repeat: -1,
      delay: Math.random() * 2,
    });
  }
});
</script>

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

<style>
  .animated-title {
    font-size: clamp(3rem, calc(100cqi / var(--chars) * 1.55), 20rem);
  }

  .hero-letter {
    display: inline-block;
    will-change: transform;
  }
</style>

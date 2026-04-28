<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { fitText } from "@/lib/utils";

const { text }: { text: string } = $props();

const letters = $derived(text.split(""));

let titleEl: HTMLElement;

onMount(() => {
  const ctx = gsap.context(() => {
    const letterEls = titleEl.querySelectorAll<HTMLElement>(".hero-letter");

    for (const el of letterEls) {
      const fadeDelay = Math.random() * 1.2;
      const drift = 2 + Math.random() * 3;
      const speed = 2 + Math.random() * 3;

      gsap.to(el, { opacity: 1, duration: 0.8, delay: fadeDelay, ease: "power2.out" });
      gsap.to(el, {
        y: drift,
        duration: speed,
        ease: "quad.inOut",
        yoyo: true,
        repeat: -1,
        delay: fadeDelay + Math.random() * 1.5,
      });
    }
  }, titleEl);

  return () => ctx.revert();
});
</script>

<div class="knockout-mask">
  <h1
    bind:this={titleEl}
    use:fitText={{ mode: "exact" }}
    style="--chars: {letters.length}"
    class="animated-title font-display"
  >
    {#each letters as letter, i (i)}
      <span class="hero-letter">{letter}</span>
    {/each}
  </h1>
</div>

<style>
  .knockout-mask {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: #03050a;
    mix-blend-mode: multiply;
    container-type: inline-size;
    box-sizing: border-box;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1024px) {
      padding: 0 4rem;
    }
  }

  .animated-title {
    font-weight: 700;
    line-height: 0.85;
    letter-spacing: -0.02em;
    text-align: center;
    user-select: none;
    color: white;
    white-space: nowrap;
    font-size: clamp(3rem, calc(100cqi / var(--chars) * 1.55), 20rem);
  }

  .hero-letter {
    display: inline-block;
    will-change: transform, opacity;
    opacity: 0;
  }
</style>

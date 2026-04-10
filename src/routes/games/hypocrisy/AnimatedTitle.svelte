<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";

let { text }: { text: string } = $props();

const letters = $derived(text.split(""));

let titleEl: HTMLElement;

function fitWidth(node: HTMLElement) {
  function resize() {
    const parent = node.parentElement;
    if (!parent) return;
    const parentStyle = getComputedStyle(parent);
    const available = parent.clientWidth - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight);

    node.style.fontSize = "10px";
    node.style.width = "auto";
    const textWidth = node.offsetWidth;
    node.style.width = "";

    if (textWidth > 0 && available > 0) node.style.fontSize = `${10 * (available / textWidth)}px`;
  }

  resize();
  const observer = new ResizeObserver(resize);
  observer.observe(node.parentElement ?? node);
  return { destroy: () => observer.disconnect() };
}

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
  use:fitWidth
  class="font-display font-bold leading-[0.85] tracking-[-0.02em] text-center select-none text-white whitespace-nowrap"
>
  {#each letters as letter, i (i)}
    <span class="hero-letter">{letter}</span>
  {/each}
</h1>

<style>
  .hero-letter {
    display: inline-block;
    will-change: transform;
  }
</style>

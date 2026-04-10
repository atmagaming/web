<script lang="ts">
import gsap from "@/lib/gsap";

let { text, onready }: { text: string; onready?: (el: HTMLElement) => void } = $props();

const letters = $derived(text.split(""));

let titleEl: HTMLElement;
let fitted = false;

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

    if (!fitted) {
      fitted = true;
      onready?.(node);
      animateLetters();
    }
  }
  requestAnimationFrame(resize);
  const observer = new ResizeObserver(resize);
  observer.observe(node.parentElement ?? node);
  return { destroy: () => observer.disconnect() };
}

function animateLetters() {
  const letterEls = titleEl?.querySelectorAll<HTMLElement>(".hero-letter");
  if (!letterEls?.length) return;

  // Scale all offsets relative to the font size so the effect looks consistent across viewports
  const fontSize = parseFloat(getComputedStyle(titleEl).fontSize);
  const scale = fontSize / 1000; // normalize around ~100px baseline, 10x reduced

  for (const el of letterEls) {
    const offsetY = (Math.random() - 0.5) * 400 * scale;
    const randomDelay = Math.random() * 0.8;
    const duration = 1.5 + Math.random() * 1.5;
    const restY = (Math.random() - 0.5) * 12 * scale;

    gsap.set(el, { opacity: 0, y: offsetY });
    gsap.to(el, {
      opacity: 1,
      y: restY,
      duration,
      delay: 0.3 + randomDelay,
      ease: "power3.out",
      onComplete() {
        const drift = (18 + Math.random() * 27) * scale;
        const speed = 1.5 + Math.random() * 4;
        gsap.to(el, {
          y: restY + drift,
          duration: speed,
          ease: "quad.inOut",
          yoyo: true,
          repeat: -1,
        });
      },
    });
  }
}
</script>

<h1
  bind:this={titleEl}
  use:fitWidth
  class="font-display font-bold leading-[0.85] tracking-[-0.02em] text-center select-none text-white whitespace-nowrap"
>
  {#each letters as letter, i (i)}
    <span class="hero-letter" style="opacity: 0;">{letter}</span>
  {/each}
</h1>

<style>
  .hero-letter {
    display: inline-block;
    will-change: transform, opacity;
  }
</style>

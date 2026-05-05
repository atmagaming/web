<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";

interface Props {
  textKey: string;
  color?: string;
  position?: "bottom-right" | "bottom-center";
  hidden?: boolean;
  delay?: number;
}

let {
  textKey,
  color = "rgba(255, 255, 255, 0.4)",
  position = "bottom-center",
  hidden = false,
  delay = 0,
}: Props = $props();

let el = $state<HTMLElement | undefined>(undefined);

onMount(() => {
  if (!el) return;

  const ctx = gsap.context(() => {
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 20 });

    const timeline = gsap.timeline({ delay });
    timeline.to(el, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" });
    timeline.to(el, { y: 8, repeat: -1, yoyo: true, duration: 1.5, ease: "sine.inOut" });
  }, el);

  return () => ctx.revert();
});

const positionClass = $derived(
  position === "bottom-right"
    ? "absolute bottom-8 right-16 z-20 hidden lg:flex"
    : "absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex",
);
</script>

{#if !hidden}
  <div bind:this={el} class="{positionClass} flex-col items-center gap-3" style="color: {color};">
    <span class="text-xs uppercase tracking-[0.2em] font-mono">{t(textKey as Parameters<typeof t>[0])}</span>
    <div class="w-px h-8 bg-linear-to-b from-current to-transparent"></div>
  </div>
{/if}

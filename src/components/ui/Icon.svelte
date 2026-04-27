<script lang="ts">
import { onMount } from "svelte";

interface Props {
  src: string;
  width?: number | string;
  height?: number | string;
  class?: string;
}

let { src, width = 14, height = 14, class: className = "" }: Props = $props();

let markup = $state("");

onMount(() => {
  let cancelled = false;

  const load = async () => {
    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error(`Failed to load icon ${src}: ${response.status}`);
      const svg = await response.text();
      if (!cancelled) markup = svg;
    } catch (e) {
      console.error("Icon load failed:", e);
    }
  };

  const idle = (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
  const handle = idle ? idle(load) : window.setTimeout(load, 200);

  return () => {
    cancelled = true;
    const cancelIdle = (window as unknown as { cancelIdleCallback?: (h: number) => void }).cancelIdleCallback;
    if (cancelIdle && idle) cancelIdle(handle as number);
    else window.clearTimeout(handle as number);
  };
});
</script>

<span
  class="icon-slot {className}"
  class:is-loaded={markup !== ""}
  style:--icon-w={typeof width === "number" ? `${width}px` : width}
  style:--icon-h={typeof height === "number" ? `${height}px` : height}
  aria-hidden="true"
>
  {#if markup}
    {@html markup}
  {/if}
</span>

<style>
  .icon-slot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--icon-w);
    height: var(--icon-h);
    opacity: 0;
    transition: opacity 400ms ease;
  }

  .icon-slot.is-loaded {
    opacity: 1;
  }

  .icon-slot :global(svg) {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>

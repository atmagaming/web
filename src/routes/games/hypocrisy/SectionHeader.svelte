<script lang="ts">
import type { Snippet } from "svelte";

let {
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: Snippet;
} = $props();
</script>

<div class="px-6 lg:px-16">
  <p class="text-xs text-accent-500 uppercase tracking-[0.2em] font-mono mb-4 flex items-center gap-4">
    <span class="w-8 h-px bg-accent-500"></span>
    {label}
  </p>
  <h2 class="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-none">
    {title}
  </h2>
  {#if children}
    {@render children()}
  {/if}
</div>

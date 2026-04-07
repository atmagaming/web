<script lang="ts">
import { slide } from "svelte/transition";

let {
  claim,
  children,
}: {
  claim: string;
  children?: import("svelte").Snippet;
} = $props();

let open = $state(false);
</script>

<div class="grid gap-8 items-start py-8 border-b border-border" style="grid-template-columns: 1fr auto;">
  <div>
    <p class="text-[1.1rem] font-normal leading-[1.5] text-dark-950 max-w-[640px]">
      {@html claim}
    </p>
    {#if open && children}
      <div transition:slide={{ duration: 200 }} class="pt-4 mt-4 border-t border-dashed border-border text-[0.93rem] leading-[1.7] text-text max-w-[640px]">
        {@render children()}
      </div>
    {/if}
  </div>
  {#if children}
    <button
      type="button"
      class="font-mono text-[0.63rem] tracking-[0.15em] uppercase border-[1.5px] px-3.5 py-1.5 mt-1 shrink-0 transition-colors cursor-pointer"
      class:border-gold={!open}
      class:text-gold={!open}
      class:bg-gold={open}
      class:text-white={open}
      onclick={() => (open = !open)}
      aria-expanded={open}
    >Why?</button>
  {:else}
    <div class="w-[60px]"></div>
  {/if}
</div>

<style>
  div:first-of-type {
    border-top: none;
  }
</style>

<script lang="ts">
import type { Snippet } from "svelte";

const { label, title, children }: { label: string; title: string; children?: Snippet } = $props();
</script>

<div class="section-header">
  <p class="eyebrow">
    <span class="hairline"></span>
    {label}
  </p>
  <h2 class="title font-display">{title}</h2>
  {#if children}
    {@render children()}
  {/if}
</div>

<style>
  .section-header {
    padding: 0 1.5rem;

    @media (min-width: 1024px) {
      padding: 0 4rem;
    }
  }

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--color-accent-500);
  }

  .hairline {
    display: inline-block;
    width: 2rem;
    height: 1px;
    background: var(--color-accent-500);
  }

  .title {
    margin-bottom: 1.5rem;
    color: white;
    font-size: 3rem;
    line-height: 1;

    @media (min-width: 768px) {
      font-size: 4.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 6rem;
    }
  }
</style>

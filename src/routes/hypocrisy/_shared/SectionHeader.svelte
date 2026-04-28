<script lang="ts">
import type { Snippet } from "svelte";

const { label, title, children }: { label: string; title: string; children?: Snippet } = $props();
</script>

<div class="section-header page-x">
  <p class="eyebrow">
    <span class="hairline"></span>
    {label}
  </p>
  <h2 class="title font-display">{title}</h2>
  {#if children}
    {@render children()}
  {/if}
</div>

<style src="./SectionHeader.css"></style>

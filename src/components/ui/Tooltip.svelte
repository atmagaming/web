<script lang="ts">
import { t } from "@/lib/i18n/t";

let {
  label,
  description,
  href,
}: {
  label: string;
  description: string;
  href?: string;
} = $props();
</script>

<span class="tooltip-trigger relative inline-block">
  <span class="font-medium border-b border-gold border-dashed cursor-default">{label}</span>
  <!-- Invisible hit area: extends around the visible tooltip so mouse doesn't lose hover -->
  <span class="tooltip-box absolute left-1/2 -translate-x-1/2 top-full opacity-0 pointer-events-none transition-opacity duration-150 z-10 p-6 -m-3">
    <span class="block w-64 bg-dark-950 text-white text-[0.82rem] leading-[1.5] p-4">
      {description}
      {#if href}
        <a
          {href}
          target="_blank"
          rel="noopener noreferrer"
          class="block mt-2 font-mono text-[0.6rem] tracking-[0.1em] uppercase text-gold hover:text-white transition-colors no-underline"
        >{t("tooltip.readMore")} &nearr;</a>
      {/if}
    </span>
  </span>
</span>

<style>
  .tooltip-trigger:hover .tooltip-box {
    opacity: 1;
    pointer-events: auto;
  }
</style>

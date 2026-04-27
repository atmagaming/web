<script lang="ts">
import type { Component } from "svelte";

interface Props {
  title: string;
  description: string;
  type: string;
  icon: Component<{ class?: string }>;
}

const { title, description, type, icon: Icon }: Props = $props();
</script>

<div class="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-sm bg-white/[0.02] border border-white/5 hover:border-accent-500/20 transition-colors gap-3">
  <div class="flex items-start gap-4">
    <Icon class="w-4 h-4 text-accent-500 mt-1 shrink-0" />
    <div>
      <h3 class="text-sm font-semibold text-white">{title}</h3>
      <p class="text-xs text-white/25 mt-0.5">{description}</p>
    </div>
  </div>
  <span class="text-[10px] text-white/25 uppercase tracking-[0.2em] whitespace-nowrap font-mono">{type}</span>
</div>

<script lang="ts">
let {
  stats,
}: {
  stats: { value: string; unit: string; label: string }[];
} = $props();
</script>

<div class="stat-row flex flex-col md:flex-row border-[1.5px] border-dark-950">
  {#each stats as stat, i}
    <div class="stat-cell flex-1 px-8 py-10 text-center{i < stats.length - 1 ? ' border-b-[1.5px] md:border-b-0 md:border-r-[1.5px] border-dark-950' : ''}">
      <span class="font-display text-[3.8rem] leading-none text-dark-950 block">{stat.value}<span class="text-[2rem] text-gold">{stat.unit}</span></span>
      <span class="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-text mt-2 block">{stat.label}</span>
    </div>
  {/each}
</div>

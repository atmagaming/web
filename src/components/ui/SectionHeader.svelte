<script lang="ts">
let {
  number,
  label,
}: {
  number: string;
  label: string;
} = $props();
</script>

<div class="font-mono text-[0.63rem] tracking-[0.25em] uppercase text-text mb-5 flex items-center gap-3">
  <span class="font-display text-[0.85rem] text-red tracking-[0.05em]">{number}</span>
  {@html label}
</div>

<script lang="ts">
let {
  prefix,
  emphasis,
  text,
}: {
  prefix: string;
  emphasis: string;
  text: string;
} = $props();
</script>

<div class="py-8">
  <p class="font-display leading-[1.1] tracking-[0.02em] text-dark-950 uppercase mb-3">
    {prefix} <span class="text-red text-[clamp(1.4rem,2.5vw,2rem)]">{emphasis}</span>
  </p>
  <p class="text-[0.97rem] leading-[1.7] text-text max-w-135">
    {text}
  </p>
</div>

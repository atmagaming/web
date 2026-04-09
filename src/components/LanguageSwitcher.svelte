<script lang="ts">
import { locale, localeLabels, locales } from "@/lib/i18n";
</script>

<div class="flex items-center gap-1">
  {#each locales as loc}
    <button
      type="button"
      class="font-mono text-[0.6rem] tracking-[0.08em] uppercase px-1.5 py-0.5 transition-colors cursor-pointer border-none bg-transparent {loc === locale.value ? 'text-red font-medium' : 'text-text/50 hover:text-text'}"
      onclick={() => (locale.value = loc)}
    >
      {localeLabels[loc]}
    </button>
  {/each}
</div>

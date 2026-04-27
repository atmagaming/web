<script lang="ts">
import Icon from "@/components/ui/Icon.svelte";
import { t } from "@/lib/i18n/t";

interface Props {
  translationKey?: Parameters<typeof t>[0];
  text?: string;
  iconSrc?: string;
  variant?: "default" | "muted";
}

let { translationKey, text, iconSrc, variant = "default" }: Props = $props();

const textColor = $derived(variant === "muted" ? "text-white/25" : "text-white/50");
const borderColor = $derived(variant === "muted" ? "border-white/10" : "border-white/15");
</script>

<span class="font-mono text-[10px] tracking-[0.2em] uppercase {textColor} border {borderColor} px-3 py-1.5 inline-flex items-center gap-1.5">
  {#if iconSrc}
    <Icon src={iconSrc} />
  {/if}
  {translationKey ? t(translationKey) : text}
</span>

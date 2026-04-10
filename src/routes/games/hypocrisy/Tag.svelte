<script lang="ts">
interface Props {
  translationKey?: string;
  text?: string;
  icon?: string;
  variant?: "default" | "muted";
}

let { translationKey, text, icon, variant = "default" }: Props = $props();

import { t } from "@/lib/i18n/t";

const textColor = variant === "muted" ? "text-white/25" : "text-white/50";
const borderColor = variant === "muted" ? "border-white/10" : "border-white/15";
</script>

<span class="font-mono text-[10px] tracking-[0.2em] uppercase {textColor} border {borderColor} px-3 py-1.5 inline-flex items-center gap-1.5">
  {#if icon}
    {@html icon}
  {/if}
  {translationKey ? t(translationKey) : text}
</span>

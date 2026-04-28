<script lang="ts">
import Icon from "@/components/ui/Icon.svelte";
import { type TranslationKey, t } from "@/lib/i18n/t";

type Props =
  | { translationKey: TranslationKey; text?: never; iconSrc?: string; variant?: "default" | "muted" }
  | { translationKey?: never; text: string; iconSrc?: string; variant?: "default" | "muted" };

const { translationKey, text, iconSrc, variant = "default" }: Props = $props();

const label = $derived(translationKey ? t(translationKey) : text);
</script>

<span class="hero-tag" class:muted={variant === "muted"}>
  {#if iconSrc}
    <Icon src={iconSrc} />
  {/if}
  {label}
</span>

<style>
  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.375rem 0.75rem;
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.15);

    &.muted {
      color: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.1);
    }
  }
</style>

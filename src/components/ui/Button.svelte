<script lang="ts">
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outline-light";

let {
  variant = "primary",
  href,
  class: className,
  children,
  ...rest
}: {
  variant?: Variant;
  href?: string;
  class?: string;
  children: import("svelte").Snippet;
  [key: string]: unknown;
} = $props();

const base =
  "font-mono text-[0.75rem] tracking-[0.12em] uppercase px-8 py-3.5 inline-flex items-center gap-2.5 transition-all no-underline cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "text-white bg-dark-950 border-[1.5px] border-dark-950 hover:bg-red hover:border-red",
  outline: "text-dark-950 border-[1.5px] border-border hover:border-dark-950",
  "outline-light": "text-white/50 border-[1.5px] border-white/15 hover:border-white/40 hover:text-white",
};
</script>

{#if href}
  <a {href} class={cn(base, variants[variant], className)} {...rest}>
    {@render children()}
  </a>
{:else}
  <button type="button" class={cn(base, variants[variant], className)} {...rest}>
    {@render children()}
  </button>
{/if}

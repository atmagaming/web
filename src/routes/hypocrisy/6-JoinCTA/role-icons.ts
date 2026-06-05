import CodeIcon from "lucide-svelte/icons/code";
import PaletteIcon from "lucide-svelte/icons/palette";
import PlayIcon from "lucide-svelte/icons/play";
import SparklesIcon from "lucide-svelte/icons/sparkles";
import type { ComponentType, SvelteComponent } from "svelte";

export type RoleIcon = ComponentType<SvelteComponent<{ class?: string }>>;

export const roleIcons = {
  roleArtLead: PaletteIcon,
  roleUnityDeveloper: CodeIcon,
  role3dAnimator: PlayIcon,
  roleVfx: SparklesIcon,
} satisfies Record<string, RoleIcon>;

export type RoleKey = keyof typeof roleIcons;

export const roleKeys = Object.keys(roleIcons) as RoleKey[];

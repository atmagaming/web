import BookOpenIcon from "lucide-svelte/icons/book-open";
import BoxIcon from "lucide-svelte/icons/box";
import PaletteIcon from "lucide-svelte/icons/palette";
import PlayIcon from "lucide-svelte/icons/play";
import SparklesIcon from "lucide-svelte/icons/sparkles";
import UsersIcon from "lucide-svelte/icons/users";
import Volume2Icon from "lucide-svelte/icons/volume-2";
import type { ComponentType, SvelteComponent } from "svelte";

export type RoleIcon = ComponentType<SvelteComponent<{ class?: string }>>;

export const roleIcons = {
  roleConceptArtist: PaletteIcon,
  role3dArtist: BoxIcon,
  role3dAnimator: PlayIcon,
  roleVfx: SparklesIcon,
  roleSfx: Volume2Icon,
  roleNarrative: BookOpenIcon,
  roleProjectManager: UsersIcon,
} satisfies Record<string, RoleIcon>;

export type RoleKey = keyof typeof roleIcons;

export const roleKeys = Object.keys(roleIcons) as RoleKey[];

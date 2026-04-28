import BookOpenIcon from "lucide-svelte/icons/book-open";
import BoxIcon from "lucide-svelte/icons/box";
import PaletteIcon from "lucide-svelte/icons/palette";
import PlayIcon from "lucide-svelte/icons/play";
import SparklesIcon from "lucide-svelte/icons/sparkles";
import UsersIcon from "lucide-svelte/icons/users";
import Volume2Icon from "lucide-svelte/icons/volume-2";
import type { Component } from "svelte";

export type IconComponent = Component<{ class?: string }>;

export const roleIcons = {
  roleConceptArtist: PaletteIcon as unknown as IconComponent,
  role3dArtist: BoxIcon as unknown as IconComponent,
  role3dAnimator: PlayIcon as unknown as IconComponent,
  roleVfx: SparklesIcon as unknown as IconComponent,
  roleSfx: Volume2Icon as unknown as IconComponent,
  roleNarrative: BookOpenIcon as unknown as IconComponent,
  roleProjectManager: UsersIcon as unknown as IconComponent,
};

export const roleKeys = Object.keys(roleIcons) as (keyof typeof roleIcons)[];

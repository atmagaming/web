<script lang="ts">
import type { ComponentType } from "svelte";

import { t } from "@/lib/i18n/t";
import RoleCard from "./RoleCard.svelte";

interface Role {
  title: string;
  description: string;
  type: string;
  icon: ComponentType;
}

interface Props {
  roles: Role[];
}

const { roles }: Props = $props();
</script>

<div>
  <h3 class="text-xs uppercase tracking-[0.2em] font-mono text-accent-500/50 mb-4">
    {t("hypocrisy.joinCta.openRolesLabel")}
  </h3>
  <p class="text-[10px] md:text-xs text-white/25 tracking-[0.2em] uppercase font-mono mb-8">
    {t("hypocrisy.joinCta.disclaimer")}
  </p>
  <div class="space-y-3">
    {#each roles as role (role.title)}
      <RoleCard
        title={role.title}
        description={role.description}
        type={role.type}
        icon={role.icon}
      />
    {/each}
  </div>
</div>

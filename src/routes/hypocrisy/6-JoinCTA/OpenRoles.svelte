<script lang="ts">
import { t } from "@/lib/i18n/t";
import RoleCard from "./RoleCard.svelte";
import type { RoleIcon } from "./role-icons";

interface Role {
  title: string;
  description: string;
  type: string;
  icon: RoleIcon;
}

const { roles }: { roles: Role[] } = $props();
</script>

<div class="open-roles">
  <h3 class="section-eyebrow">{t("hypocrisy.joinCta.openRolesLabel")}</h3>
  <p class="disclaimer">{t("hypocrisy.joinCta.disclaimer")}</p>
  <div class="role-list">
    {#each roles as role (role.title)}
      <RoleCard title={role.title} description={role.description} type={role.type} icon={role.icon} />
    {/each}
  </div>
</div>

<style>
  .disclaimer {
    margin-bottom: 2rem;
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(255, 255, 255, 0.25);

    @media (min-width: 768px) {
      font-size: 0.75rem;
    }
  }

  .role-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
</style>

<script lang="ts">
import type { Component } from "svelte";
import { t } from "@/lib/i18n/t";
import RoleCard from "./RoleCard.svelte";

interface Role {
  title: string;
  description: string;
  type: string;
  icon: Component<{ class?: string }>;
}

const { roles }: { roles: Role[] } = $props();
</script>

<div class="open-roles">
  <h3 class="eyebrow">{t("hypocrisy.joinCta.openRolesLabel")}</h3>
  <p class="disclaimer">{t("hypocrisy.joinCta.disclaimer")}</p>
  <div class="role-list">
    {#each roles as role (role.title)}
      <RoleCard title={role.title} description={role.description} type={role.type} icon={role.icon} />
    {/each}
  </div>
</div>

<style>
  .eyebrow {
    margin-bottom: 1rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(184, 134, 11, 0.5);
  }

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

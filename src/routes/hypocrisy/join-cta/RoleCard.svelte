<script lang="ts">
import type { Component } from "svelte";

interface Props {
  title: string;
  description: string;
  type: string;
  icon: Component<{ class?: string }>;
}

const { title, description, type, icon: Icon }: Props = $props();
</script>

<div class="role-card">
  <div class="role-info">
    <Icon class="role-icon" />
    <div>
      <h3 class="role-title">{title}</h3>
      <p class="role-description">{description}</p>
    </div>
  </div>
  <span class="role-type">{type}</span>
</div>

<style>
  .role-card {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.02);
    transition: border-color 200ms ease;

    @media (min-width: 640px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    &:hover {
      border-color: rgba(184, 134, 11, 0.2);
    }
  }

  .role-info {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  :global(.role-icon) {
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    margin-top: 0.25rem;
    color: var(--color-accent-500);
  }

  .role-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: white;
  }

  .role-description {
    margin-top: 0.125rem;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.25);
  }

  .role-type {
    flex-shrink: 0;
    white-space: nowrap;
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(255, 255, 255, 0.25);
  }
</style>

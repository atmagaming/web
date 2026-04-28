<script lang="ts">
import { t } from "@/lib/i18n/t";

export type PhaseStatus = "current" | "upcoming" | "future";

interface Props {
  status: PhaseStatus;
  phase: string;
  title: string;
  date: string;
  description?: string;
  width?: number;
  items?: readonly string[];
}

const { status, phase, title, date, description, width, items }: Props = $props();
</script>

<div class="phase-entry phase-{status}">
  <div class="phase-marker">
    <div class="phase-glow"></div>
    <div class="phase-node">
      {#if status === "current"}
        <div class="phase-ping"></div>
      {/if}
    </div>
  </div>

  <div class="phase-card">
    <div class="phase-header">
      <span class="phase-label">{phase}</span>
      {#if status === "current"}
        <span class="phase-pill">{t("hypocrisy.devProgress.current")}</span>
      {/if}
    </div>

    <h3 class="phase-title font-display">{title}</h3>
    <p class="phase-date">{date}</p>

    {#if width !== undefined}
      <div class="duration" style="max-width: {width * 2.5}px;">
        <div class="duration-track">
          <div class="duration-fill"></div>
        </div>
      </div>
    {/if}

    {#if description}
      <p class="phase-description">{description}</p>
    {/if}

    {#if items}
      <ul class="phase-items">
        {#each items as item (item)}
          <li class="phase-item">
            <span class="phase-bullet"></span>
            {item}
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>

<style>
  .phase-entry {
    position: relative;
    display: flex;
    align-items: flex-start;
  }

  .phase-marker {
    position: relative;
    flex-shrink: 0;
    width: 14px;
    margin-top: 0.25rem;
    margin-right: 2.5rem;
  }

  .phase-glow {
    position: absolute;
    inset: -1rem;
    border-radius: 9999px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%);
  }

  .phase-current .phase-glow {
    background: radial-gradient(circle, rgba(212, 160, 23, 0.15) 0%, transparent 70%);
  }

  .phase-node {
    position: relative;
    width: 14px;
    height: 14px;
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 9999px;
    background: var(--color-dark-800);
  }

  .phase-current .phase-node {
    border-color: var(--color-accent-400);
    background: var(--color-accent-500);
    box-shadow: 0 0 12px rgba(212, 160, 23, 0.4);
  }

  .phase-ping {
    position: absolute;
    inset: -0.25rem;
    border: 1px solid rgba(184, 134, 11, 0.3);
    border-radius: 9999px;
    animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .phase-card {
    flex: 1;
    min-width: 0;
  }

  .phase-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .phase-label {
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(255, 255, 255, 0.25);
  }

  .phase-current .phase-label {
    color: var(--color-accent-400);
  }

  .phase-pill {
    padding: 0.125rem 0.5rem;
    font-family: var(--font-mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--color-accent-400);
    background: rgba(184, 134, 11, 0.15);
    border-radius: 9999px;
  }

  .phase-title {
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.875rem;
    line-height: 1.25;

    @media (min-width: 768px) {
      font-size: 2.25rem;
    }
  }

  .phase-current .phase-title {
    color: white;
  }

  .phase-date {
    margin-bottom: 1rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.25);
  }

  .phase-current .phase-date {
    color: rgba(184, 134, 11, 0.5);
  }

  .duration {
    margin-bottom: 1.25rem;
  }

  .duration-track {
    height: 4px;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.04);
    overflow: hidden;
  }

  .duration-fill {
    transform-origin: left;
    width: 100%;
    height: 100%;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.1);
  }

  .phase-current .duration-fill {
    background: linear-gradient(to right, var(--color-accent-600), var(--color-accent-400));
  }

  .phase-description {
    max-width: 28rem;
    margin-bottom: 1.25rem;
    color: rgba(255, 255, 255, 0.25);
    font-size: 0.875rem;
    line-height: 1.625;
  }

  .phase-current .phase-description {
    color: rgba(255, 255, 255, 0.5);
  }

  .phase-items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 28rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .phase-item {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    color: rgba(255, 255, 255, 0.25);
    font-size: 0.875rem;
  }

  .phase-current .phase-item {
    color: rgba(255, 255, 255, 0.5);
  }

  .phase-bullet {
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.15);
  }

  .phase-current .phase-bullet {
    background: var(--color-accent-400);
  }

  @keyframes ping-slow {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
</style>

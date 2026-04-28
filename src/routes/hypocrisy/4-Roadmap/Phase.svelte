<script lang="ts">
import { t } from "@/lib/i18n/t";
import type { PhaseStatus } from "./phase-types";

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

<style src="./Phase.css"></style>

<script lang="ts">
import type { Action } from "svelte/action";

interface Props {
  numeral: string;
  conceptLabel: string;
  duration: number | undefined;
  currentTime: number | undefined;
  isPlaying: boolean;
  onToggle: () => void;
  waveformAction: Action<HTMLElement>;
}

const { numeral, conceptLabel, duration, currentTime, isPlaying, onToggle, waveformAction }: Props = $props();

const progress = $derived(duration ? ((currentTime ?? 0) / duration) * 100 : 0);

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
}
</script>

<div class="track" class:playing={isPlaying}>
  <div class="numeral" aria-hidden="true">{numeral}</div>

  <div class="track-body">
    <div class="track-header">
      <span class="concept">{conceptLabel}</span>
      <span class="time">
        {#if duration}
          {formatTime(currentTime ?? 0)} / {formatTime(duration)}
        {/if}
      </span>
    </div>

    <div class="waveform" use:waveformAction></div>

    <div class="controls">
      <button type="button" class="play-button" onclick={onToggle} aria-label={isPlaying ? "Pause" : "Play"}>
        {#if isPlaying}
          <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
            <rect x="1" y="1" width="4" height="10" />
            <rect x="7" y="1" width="4" height="10" />
          </svg>
        {:else}
          <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
            <path d="M3 0L12 6L3 12V0Z" />
          </svg>
        {/if}
      </button>

      <div class="progress">
        {#if duration}
          <div class="progress-fill" style="width: {progress}%"></div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .track {
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 2px;
    background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.03), transparent);
    transition: border-color 300ms ease;

    &:hover {
      border-color: rgba(184, 134, 11, 0.2);

      .play-icon-static {
        color: var(--color-accent-400);
      }
    }
  }

  .numeral {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    pointer-events: none;
    user-select: none;
    font-weight: 700;
    font-size: 4.5rem;
    line-height: 1;
    color: rgba(255, 255, 255, 0.04);
  }

  .track-body {
    position: relative;
    padding: 1.25rem;
  }

  .track-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.25rem;
  }

  .concept {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(184, 134, 11, 0.5);
  }

  .time {
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
    color: rgba(255, 255, 255, 0.25);
  }

  .waveform {
    height: 64px;
    margin: 0.75rem 0;
    cursor: pointer;
  }

  .waveform :global(wave) {
    overflow: hidden !important;
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .play-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    padding: 0;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 9999px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
    transition: all 200ms ease;

    &:hover {
      border-color: rgba(184, 134, 11, 0.3);
      color: var(--color-accent-400);
    }
  }

  .track.playing .play-button {
    background: rgba(184, 134, 11, 0.2);
    border-color: rgba(184, 134, 11, 0.5);
    box-shadow: 0 0 12px rgba(212, 160, 23, 0.15);
    color: var(--color-accent-400);
  }

  .progress {
    flex: 1;
    height: 2px;
    overflow: hidden;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.04);
  }

  .progress-fill {
    height: 100%;
    border-radius: 9999px;
    background: rgba(184, 134, 11, 0.4);
    transition: width 100ms linear;
  }
</style>

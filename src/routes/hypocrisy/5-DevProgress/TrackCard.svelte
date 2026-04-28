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
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
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

<style src="./TrackCard.css"></style>

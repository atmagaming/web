<script lang="ts">
import { onMount } from "svelte";
import WaveSurfer from "wavesurfer.js";
import { locale } from "@/lib/i18n";
import { translations } from "@/lib/i18n/translations";

const trackList = [
  { file: "/assets/music/main-mystery.mp3", key: "mainMystery" as const, concept: "concept1" as const },
  { file: "/assets/music/krodha-2.mp3", key: "krodha" as const, concept: "concept2" as const },
  { file: "/assets/music/moha-attachment.mp3", key: "mohaAttachment" as const, concept: "concept3" as const },
  { file: "/assets/music/drf.mp3", key: "drf" as const, concept: "concept4" as const },
  { file: "/assets/music/reflection.mp3", key: "reflection" as const, concept: "concept5" as const },
  { file: "/assets/music/KrodhaS5.mp3", key: "krodhaS5" as const, concept: "concept6" as const },
];

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const tracks = $derived(
  trackList.map((track, index) => ({
    ...track,
    numeral: romanNumerals[index],
    name: translations[locale.value].hypocrisy.devProgress.tracks[track.key],
    conceptLabel: translations[locale.value].hypocrisy.devProgress.trackConcepts[track.concept],
  })),
);

let playingTrack = $state<string | null>(null);
const wavesurfers = new Map<string, WaveSurfer>();
const readyFiles = new Set<string>();
const playOnReady = new Set<string>();
const trackDurations = $state<Record<string, number>>({});
const trackCurrentTimes = $state<Record<string, number>>({});

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

const waveformContainers = new Map<string, HTMLElement>();

function initWaveSurfer(file: string): WaveSurfer | undefined {
  if (wavesurfers.has(file)) return wavesurfers.get(file);

  const container = waveformContainers.get(file);
  if (!container) return;

  const ws = WaveSurfer.create({
    container,
    waveColor: "rgba(212, 160, 23, 0.2)",
    progressColor: "rgba(212, 160, 23, 0.65)",
    cursorColor: "transparent",
    barWidth: 3,
    barGap: 2,
    barRadius: 2,
    height: 64,
    url: file,
    backend: "WebAudio",
  });

  ws.on("ready", () => {
    trackDurations[file] = ws.getDuration();
    readyFiles.add(file);
    if (playOnReady.has(file)) {
      playOnReady.delete(file);
      ws.play();
      playingTrack = file;
    }
  });

  ws.on("audioprocess", () => {
    trackCurrentTimes[file] = ws.getCurrentTime();
  });

  ws.on("seeking", () => {
    trackCurrentTimes[file] = ws.getCurrentTime();
  });

  ws.on("finish", () => {
    playingTrack = null;
    trackCurrentTimes[file] = 0;
  });

  wavesurfers.set(file, ws);
  return ws;
}

function pauseCurrent() {
  if (!playingTrack) return;
  const current = wavesurfers.get(playingTrack);
  current?.pause();
  playOnReady.delete(playingTrack);
}

function toggleTrack(file: string) {
  const ws = wavesurfers.get(file);

  if (!ws || !readyFiles.has(file)) {
    pauseCurrent();
    playOnReady.add(file);
    if (!ws) initWaveSurfer(file);
    return;
  }

  if (playingTrack === file) {
    ws.pause();
    playingTrack = null;
    return;
  }

  pauseCurrent();
  ws.play();
  playingTrack = file;
}

function waveformAction(node: HTMLElement, file: string) {
  waveformContainers.set(file, node);
}

onMount(() => {
  for (const track of trackList) initWaveSurfer(track.file);
  return () => {
    for (const ws of wavesurfers.values()) ws.destroy();
    wavesurfers.clear();
  };
});
</script>

<div class="px-6 lg:px-16">
  <h3 class="text-xs uppercase tracking-[0.2em] font-mono text-accent-500/50 mb-4">Music</h3>
  <p class="text-sm text-white/25 mb-10 max-w-lg">Original compositions — early concepts exploring the emotional landscape of each world.</p>

  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
    {#each tracks as track (track.file)}
      <div class="music-track group relative rounded-sm overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] hover:border-accent-500/20 transition-all duration-300">
        <!-- Track number background -->
        <div class="absolute top-2 right-4 text-[4.5rem] leading-none text-white/[0.04] select-none pointer-events-none font-bold">
          {track.numeral}
        </div>

        <div class="relative p-5">
          <!-- Header -->
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs text-accent-500/50 font-mono uppercase tracking-[0.2em]">{track.conceptLabel}</span>
            <span class="text-[10px] text-white/25 font-mono tabular-nums">
              {#if trackDurations[track.file]}
                {formatTime(trackCurrentTimes[track.file] ?? 0)} / {formatTime(trackDurations[track.file])}
              {/if}
            </span>
          </div>

          <!-- Waveform -->
          <div class="my-3">
            <div use:waveformAction={track.file} class="waveform-container"></div>
          </div>

          <!-- Play bar -->
          <div class="flex items-center gap-3">
            <button
              type="button"
              class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-transparent cursor-pointer transition-all duration-200
                {playingTrack === track.file
                  ? 'bg-accent-500/20 border border-accent-500/50 shadow-[0_0_12px_rgba(212,160,23,0.15)]'
                  : 'border border-white/10 hover:border-accent-500/30'}"
              onclick={() => toggleTrack(track.file)}
            >
              {#if playingTrack === track.file}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="1" width="4" height="10" fill="currentColor" class="text-accent-400"/>
                  <rect x="7" y="1" width="4" height="10" fill="currentColor" class="text-accent-400"/>
                </svg>
              {:else}
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M3 0L12 6L3 12V0Z" fill="currentColor" class="text-white/50 group-hover:text-accent-400 transition-colors"/>
                </svg>
              {/if}
            </button>

            <!-- Progress bar -->
            <div class="flex-1 h-0.5 rounded-full bg-white/[0.04] overflow-hidden">
              {#if trackDurations[track.file]}
                <div
                  class="h-full rounded-full bg-accent-500/40 transition-all duration-100"
                  style="width: {((trackCurrentTimes[track.file] ?? 0) / trackDurations[track.file]) * 100}%"
                ></div>
              {/if}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .waveform-container {
    cursor: pointer;
    height: 64px;
  }

  .waveform-container :global(wave) {
    overflow: hidden !important;
  }
</style>

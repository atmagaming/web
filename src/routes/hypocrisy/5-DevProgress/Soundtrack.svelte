<script lang="ts">
import { onMount } from "svelte";
import WaveSurfer from "wavesurfer.js";
import { t } from "@/lib/i18n/t";
import { localized } from "../_shared/i18n";
import { ROMAN_NUMERALS } from "../_shared/roman-numerals";
import TrackCard from "./TrackCard.svelte";

const trackList = [
  { file: "/assets/music/main-mystery.mp3", key: "mainMystery", concept: "concept1" },
  { file: "/assets/music/krodha-2.mp3", key: "krodha", concept: "concept2" },
  { file: "/assets/music/moha-attachment.mp3", key: "mohaAttachment", concept: "concept3" },
  { file: "/assets/music/drf.mp3", key: "drf", concept: "concept4" },
  { file: "/assets/music/reflection.mp3", key: "reflection", concept: "concept5" },
  { file: "/assets/music/KrodhaS5.mp3", key: "krodhaS5", concept: "concept6" },
] as const;

if (trackList.length > ROMAN_NUMERALS.length)
  throw new Error(`Soundtrack has ${trackList.length} tracks but only ${ROMAN_NUMERALS.length} roman numerals`);

const tracks = $derived(
  trackList.map((track, index) => ({
    ...track,
    numeral: ROMAN_NUMERALS[index],
    conceptLabel: localized("devProgress").trackConcepts[track.concept],
  })),
);

const wavesurfers = new Map<string, WaveSurfer>();
const containers = new Map<string, HTMLElement>();
const readyFiles = new Set<string>();
const playOnReady = new Set<string>();

let playingTrack = $state<string | null>(null);
const trackDurations = $state<Record<string, number>>({});
const trackCurrentTimes = $state<Record<string, number>>({});

function initWaveSurfer(file: string) {
  if (wavesurfers.has(file)) return wavesurfers.get(file);
  const container = containers.get(file);
  if (!container) return undefined;

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
  wavesurfers.get(playingTrack)?.pause();
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
  containers.set(file, node);
  return {
    destroy: () => {
      containers.delete(file);
      wavesurfers.get(file)?.destroy();
      wavesurfers.delete(file);
      readyFiles.delete(file);
      playOnReady.delete(file);
    },
  };
}

onMount(() => {
  for (const track of trackList) initWaveSurfer(track.file);
});
</script>

<div class="soundtrack page-x">
  <h3 class="section-eyebrow">{t("hypocrisy.devProgress.soundtrackTab")}</h3>
  <p class="lead">{t("hypocrisy.devProgress.soundtrackSubtitle")}</p>

  <div class="grid">
    {#each tracks as track (track.file)}
      <TrackCard
        numeral={track.numeral}
        conceptLabel={track.conceptLabel}
        duration={trackDurations[track.file]}
        currentTime={trackCurrentTimes[track.file]}
        isPlaying={playingTrack === track.file}
        onToggle={() => toggleTrack(track.file)}
        waveformAction={(node) => waveformAction(node, track.file)}
      />
    {/each}
  </div>
</div>

<style>
  .lead {
    max-width: 32rem;
    margin-bottom: 2.5rem;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.25);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1280px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>

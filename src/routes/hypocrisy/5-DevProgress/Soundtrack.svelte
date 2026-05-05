<script lang="ts">
import { onMount, tick } from "svelte";
import WaveSurfer from "wavesurfer.js";
import { t } from "@/lib/i18n/t";
import { ROMAN_NUMERALS } from "@/lib/utils";
import TrackCard from "./TrackCard.svelte";

const trackList = [
  { file: "/assets/music/main-mystery.mp3", concept: "concept1" },
  { file: "/assets/music/krodha-2.mp3", concept: "concept2" },
  { file: "/assets/music/moha-attachment.mp3", concept: "concept3" },
  { file: "/assets/music/drf.mp3", concept: "concept4" },
  { file: "/assets/music/reflection.mp3", concept: "concept5" },
  { file: "/assets/music/KrodhaS5.mp3", concept: "concept6" },
] as const;

if (trackList.length > ROMAN_NUMERALS.length)
  throw new Error(`Soundtrack has ${trackList.length} tracks but only ${ROMAN_NUMERALS.length} roman numerals`);

const tracks = $derived(
  trackList.map((track, index) => ({
    ...track,
    numeral: ROMAN_NUMERALS[index],
    conceptLabel: t(`hypocrisy.devProgress.trackConcepts.${track.concept}`),
  })),
);

const waveSurfers = new Map<string, WaveSurfer>();
const containers = new Map<string, HTMLElement>();
const readyFiles = new Set<string>();
const playOnReady = new Set<string>();

let playingTrack = $state<string | null>(null);
const trackDurations = $state<Record<string, number>>({});
const trackCurrentTimes = $state<Record<string, number>>({});

function startPlayback(waveSurfer: WaveSurfer, file: string) {
  playingTrack = file;
  waveSurfer.play().catch((error: unknown) => {
    if (playingTrack === file) playingTrack = null;
    console.error(`WaveSurfer failed to play ${file}:`, error);
  });
}

function initWaveSurfer(file: string) {
  const existing = waveSurfers.get(file);
  if (existing) return existing;
  const container = containers.get(file);
  if (!container) return undefined;

  const waveSurfer = WaveSurfer.create({
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

  waveSurfer.on("ready", () => {
    trackDurations[file] = waveSurfer.getDuration();
    readyFiles.add(file);
    if (playOnReady.has(file)) {
      playOnReady.delete(file);
      startPlayback(waveSurfer, file);
    }
  });

  waveSurfer.on("audioprocess", () => {
    trackCurrentTimes[file] = waveSurfer.getCurrentTime();
  });

  waveSurfer.on("seeking", () => {
    trackCurrentTimes[file] = waveSurfer.getCurrentTime();
  });

  waveSurfer.on("finish", () => {
    playingTrack = null;
    trackCurrentTimes[file] = 0;
  });

  waveSurfers.set(file, waveSurfer);
  return waveSurfer;
}

function pauseCurrent() {
  if (!playingTrack) return;
  waveSurfers.get(playingTrack)?.pause();
  playOnReady.delete(playingTrack);
}

function toggleTrack(file: string) {
  const waveSurfer = waveSurfers.get(file);
  const isReady = waveSurfer && readyFiles.has(file);

  if (playingTrack === file) {
    if (isReady) waveSurfer.pause();
    playOnReady.delete(file);
    playingTrack = null;
    return;
  }

  pauseCurrent();

  if (!isReady) {
    playOnReady.add(file);
    playingTrack = file;
    if (!waveSurfer) initWaveSurfer(file);
    return;
  }

  startPlayback(waveSurfer, file);
}

function waveformAction(node: HTMLElement, file: string) {
  containers.set(file, node);
  return {
    destroy: () => {
      containers.delete(file);
      waveSurfers.get(file)?.destroy();
      waveSurfers.delete(file);
      readyFiles.delete(file);
      playOnReady.delete(file);
    },
  };
}

let soundtrackEl: HTMLElement;

onMount(() => {
  // Initialize each WaveSurfer (and start fetching the audio) only when
  // the soundtrack section scrolls into view. Eager-init on mount caused
  // mobile browsers to reload the tab from memory pressure (six WebAudio
  // contexts + six MP3 fetches at once).
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      void tick().then(() => {
        for (const track of trackList) initWaveSurfer(track.file);
      });
    },
    { rootMargin: "200px 0px" },
  );
  observer.observe(soundtrackEl);
  return () => observer.disconnect();
});
</script>

<div bind:this={soundtrackEl} class="soundtrack page-x">
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

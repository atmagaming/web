<script lang="ts">
import { onMount } from "svelte";

const { src, caption, onClose }: { src: string; caption: string; onClose: () => void } = $props();

const isVideo = $derived(src.endsWith(".webm"));

let dialogEl: HTMLDialogElement;

onMount(() => {
  dialogEl.showModal();
});
</script>

<dialog bind:this={dialogEl} class="lightbox" onclose={onClose}>
  <button type="button" class="backdrop" aria-label="Close" onclick={onClose}></button>
  <div class="frame">
    {#if isVideo}
      <video {src} autoplay loop muted controls class="media"></video>
    {:else}
      <img {src} alt={caption} class="media" />
    {/if}
    <p class="caption">{caption}</p>
  </div>
</dialog>

<style src="./Lightbox.css"></style>

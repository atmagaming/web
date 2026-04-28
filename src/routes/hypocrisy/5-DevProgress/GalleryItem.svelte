<script lang="ts">
interface Props {
  src: string;
  caption: string;
  isVideo: boolean;
  onOpen: () => void;
}

const { src, caption, isVideo, onOpen }: Props = $props();
</script>

<button type="button" class="card" onclick={onOpen}>
  {#if isVideo}
    <video {src} autoplay muted loop playsinline preload="none" class="media"></video>
  {:else}
    <img {src} alt={caption} class="media media-image" loading="lazy" />
  {/if}
  <div class="overlay"></div>
  <span class="caption">{caption}</span>
</button>

<style src="./GalleryItem.css"></style>

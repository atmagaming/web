<script lang="ts">
interface Props {
  src: string;
  caption: string;
  onClose: () => void;
}

const { src, caption, onClose }: Props = $props();

const isVideo = $derived(src.endsWith(".webm"));
</script>

<svelte:window
  onkeydown={(event) => {
    if (event.key === "Escape") onClose();
  }}
/>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="lightbox" onclick={onClose}>
  <div class="frame">
    {#if isVideo}
      <video {src} autoplay loop muted controls class="media"></video>
    {:else}
      <img {src} alt={caption} class="media" />
    {/if}
    <p class="caption">{caption}</p>
  </div>
</div>

<style>
  .lightbox {
    position: fixed;
    inset: 0;
    z-index: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(4px);
  }

  .frame {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
  }

  .media {
    max-width: 100%;
    max-height: 85vh;
    object-fit: contain;
    border-radius: 2px;
  }

  .caption {
    margin-top: 0.75rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
  }
</style>

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

<style>
  .card {
    position: relative;
    flex-shrink: 0;
    width: 360px;
    height: 220px;
    padding: 0;
    overflow: hidden;
    cursor: pointer;
    background: var(--color-dark-900);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 2px;
    transition: border-color 300ms ease;

    @media (min-width: 768px) {
      width: 460px;
      height: 280px;
    }

    &:hover {
      border-color: rgba(184, 134, 11, 0.2);

      .media {
        opacity: 1;
      }

      .media-image {
        transform: scale(1.03);
      }

      .caption {
        opacity: 1;
      }
    }
  }

  .media {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    transition: opacity 500ms ease;
  }

  .media-image {
    transition: opacity 500ms ease, transform 500ms ease;
  }

  .overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
  }

  .caption {
    position: absolute;
    bottom: 0.625rem;
    left: 0.75rem;
    font-family: var(--font-mono);
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
    opacity: 0;
    transition: opacity 300ms ease;
  }
</style>

<script lang="ts">
import SocialIcon from "./SocialIcon.svelte";

interface Props {
  name: string;
  role: string;
  image: string | null;
  link: string | null;
  linkType: "linkedin" | "artstation" | null;
}

const { name, role, image, link, linkType }: Props = $props();

const initials = $derived(
  name
    .split(" ")
    .map((part) => part[0])
    .join(""),
);
</script>

<div class="team-member" class:has-link={link}>
  {#snippet avatar()}
    <div class="avatar">
      {#if image}
        <img src={image} alt={name} loading="lazy" />
      {:else}
        <div class="avatar-fallback">
          <span class="initials font-display">{initials}</span>
        </div>
      {/if}
    </div>
    <p class="name">{name}</p>
    <div class="role-row">
      <p class="role">{role}</p>
      {#if linkType}
        <SocialIcon type={linkType} />
      {/if}
    </div>
  {/snippet}

  {#if link}
    <a href={link} target="_blank" rel="noopener noreferrer">
      {@render avatar()}
    </a>
  {:else}
    {@render avatar()}
  {/if}
</div>

<style>
  .team-member a {
    display: block;
    text-decoration: none;
  }

  .avatar {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    margin-bottom: 0.75rem;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 2px;
    background: var(--color-dark-800);
    transition: border-color 200ms ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.8;
      transition: opacity 300ms ease;
    }
  }

  .avatar-fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, rgba(184, 134, 11, 0.1), transparent);
  }

  .initials {
    font-size: 1.875rem;
    color: rgba(212, 160, 23, 0.5);
  }

  .name {
    font-size: 0.75rem;
    line-height: 1.25;
    color: white;
    transition: color 200ms ease;
  }

  .role-row {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    margin-top: 0.125rem;
  }

  .role {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.25);
  }

  .has-link:hover {
    .avatar {
      border-color: rgba(184, 134, 11, 0.25);
    }

    .avatar img {
      opacity: 1;
    }

    .name {
      color: var(--color-accent-400);
    }

    :global(.social-icon) {
      color: rgba(184, 134, 11, 0.5);
    }
  }
</style>

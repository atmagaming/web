<script lang="ts">
import SocialIcon from "./SocialIcon.svelte";
import type { TeamMember } from "./team-data";

const { name, role, image, link, linkType }: TeamMember = $props();

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

<style src="./TeamMember.css"></style>

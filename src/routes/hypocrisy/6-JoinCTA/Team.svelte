<script lang="ts">
import TeamMember from "./TeamMember.svelte";
import type { TeamMember as TeamMemberType } from "./team-data";

const { members, label }: { members: ReadonlyArray<TeamMemberType>; label: string } = $props();
</script>

<div class="team">
  <h3 class="section-eyebrow">{label}</h3>
  <div class="team-grid">
    {#each members as member (member.name)}
      <TeamMember {...member} />
    {/each}
  </div>
</div>

<style>
  .team-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    margin-bottom: 5rem;

    @media (min-width: 640px) {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
  }
</style>

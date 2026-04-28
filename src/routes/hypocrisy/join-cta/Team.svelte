<script lang="ts">
import { t } from "@/lib/i18n/t";
import TeamMember from "./TeamMember.svelte";

interface Member {
  name: string;
  role: string;
  image: string | null;
  link: string | null;
  linkType: "linkedin" | "artstation" | null;
}

const { members }: { members: Member[] } = $props();
</script>

<div class="team">
  <h3 class="eyebrow">{t("hypocrisy.joinCta.teamLabel")}</h3>
  <div class="team-grid">
    {#each members as member (member.name)}
      <TeamMember {...member} />
    {/each}
  </div>
</div>

<style>
  .eyebrow {
    margin-bottom: 2rem;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(184, 134, 11, 0.5);
  }

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

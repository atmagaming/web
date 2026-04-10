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

interface Props {
  members: Member[];
}

const { members }: Props = $props();
</script>

<div>
  <h3 class="text-xs uppercase tracking-[0.2em] font-mono text-accent-500/50 mb-8">
    {t("hypocrisy.joinCta.teamLabel")}
  </h3>
  <div class="team-grid grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-4 mb-20">
    {#each members as member (member.name)}
      <TeamMember
        name={member.name}
        role={member.role}
        image={member.image}
        link={member.link}
        linkType={member.linkType}
      />
    {/each}
  </div>
</div>

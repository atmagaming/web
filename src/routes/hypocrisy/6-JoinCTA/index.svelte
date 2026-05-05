<script lang="ts">
import SendIcon from "lucide-svelte/icons/send";
import { onMount } from "svelte";
import ContactFormModal from "@/components/ContactFormModal.svelte";
import SectionHeader from "@/components/SectionHeader.svelte";
import gsap from "@/lib/gsap";
import { t } from "@/lib/i18n/t";
import Closing from "../../Closing.svelte";
import OpenRoles from "./OpenRoles.svelte";
import { roleIcons, roleKeys } from "./role-icons";
import Team from "./Team.svelte";
import { teamMembers } from "./team-data";

let modalOpen = $state(false);
let sectionEl: HTMLElement;
let contentEl: HTMLElement;

const roles = $derived(
  roleKeys.map((key) => ({
    title: t(`hypocrisy.joinCta.${key}.title`),
    type: t(`hypocrisy.joinCta.${key}.type`),
    description: t(`hypocrisy.joinCta.${key}.description`),
    icon: roleIcons[key],
  })),
);

onMount(() => {
  const context = gsap.context(() => {
    gsap.from(contentEl.children, {
      scrollTrigger: { trigger: sectionEl, start: "top 75%" },
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: "power3.out",
    });

    const teamGrid = sectionEl.querySelector(".team-grid");
    if (teamGrid)
      gsap.from(sectionEl.querySelectorAll(".team-member"), {
        scrollTrigger: { trigger: teamGrid, start: "top 80%" },
        y: 30,
        opacity: 0,
        stagger: 0.06,
        duration: 0.5,
        ease: "power3.out",
      });
  }, sectionEl);

  return () => context.revert();
});
</script>

<section id="join" bind:this={sectionEl} class="join-section">
  <div class="join-glow"></div>

  <div bind:this={contentEl} class="join-content">
    <SectionHeader title={t("hypocrisy.joinCta.title")} />

    <div class="join-body page-x">
      <Team members={teamMembers} />

      <div class="mission">
        <p class="mission-excerpt">{t("hypocrisy.joinCta.missionExcerpt")}</p>
        <a href="/" class="vision-link">{t("hypocrisy.joinCta.readVision")} &rarr;</a>
      </div>

      <div class="open-roles-wrapper">
        <OpenRoles {roles} />
      </div>

      <div class="contact-grid">
        <div class="contact-card">
          <h4 class="contact-eyebrow">{t("hypocrisy.joinCta.teamCardEyebrow")}</h4>
          <p class="contact-description">{t("hypocrisy.joinCta.teamCardDescription")}</p>
          <button type="button" class="contact-button" onclick={() => (modalOpen = true)}>
            <SendIcon class="contact-icon" />
            {t("hypocrisy.joinCta.contactButton")}
          </button>
        </div>

        <div class="contact-card">
          <h4 class="contact-eyebrow">{t("hypocrisy.joinCta.investorLabel")}</h4>
          <p class="contact-description">{t("hypocrisy.joinCta.investorDescription")}</p>
          <button type="button" class="contact-button" onclick={() => (modalOpen = true)}>
            <SendIcon class="contact-icon" />
            {t("hypocrisy.joinCta.investorContact")}
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<Closing showMissionButton={false} />

<ContactFormModal open={modalOpen} onClose={() => (modalOpen = false)} />

<style src="./JoinCTA.css"></style>

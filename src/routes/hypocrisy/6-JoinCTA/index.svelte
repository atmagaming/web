<script lang="ts">
import SendIcon from "lucide-svelte/icons/send";
import { onMount } from "svelte";
import ContactFormModal from "@/components/ContactFormModal.svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";
import Closing from "../../Closing.svelte";
import SectionHeader from "../_shared/SectionHeader.svelte";
import OpenRoles from "./OpenRoles.svelte";
import { roleIcons, roleKeys } from "./role-icons";
import Team from "./Team.svelte";
import { teamMembers } from "./team-data";

let modalOpen = $state(false);
let sectionEl: HTMLElement;
let contentEl: HTMLElement;

const roles = $derived(
  roleKeys.map((key) => {
    const roleData = translations[locale.value].hypocrisy.joinCta[key] ?? translations.en.hypocrisy.joinCta[key];
    return { ...roleData, icon: roleIcons[key] };
  }),
);

onMount(() => {
  const ctx = gsap.context(() => {
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

  return () => ctx.revert();
});
</script>

<section id="join" bind:this={sectionEl} class="join-section">
  <div class="join-glow"></div>

  <div bind:this={contentEl} class="join-content">
    <SectionHeader label={t("hypocrisy.joinCta.sectionLabel")} title={t("hypocrisy.joinCta.title")}>
      <p class="lead">{t("hypocrisy.joinCta.description")}</p>
    </SectionHeader>

    <div class="join-body page-x">
      <p class="mission-excerpt">{t("hypocrisy.joinCta.missionExcerpt")}</p>
      <a href="/" class="vision-link">{t("hypocrisy.joinCta.readVision")} &rarr;</a>

      <Team members={teamMembers} />

      <div class="divider"></div>

      <div class="open-roles-wrapper">
        <OpenRoles {roles} />
      </div>

      <div class="contact">
        <button type="button" class="contact-button" onclick={() => (modalOpen = true)}>
          <SendIcon class="contact-icon" />
          {t("hypocrisy.joinCta.contactButton")}
        </button>
      </div>
    </div>
  </div>
</section>

<Closing showMissionButton={false} />

<ContactFormModal open={modalOpen} onClose={() => (modalOpen = false)} />

<style src="./JoinCTA.css"></style>

<script lang="ts">
import SendIcon from "lucide-svelte/icons/send";
import { onMount } from "svelte";
import ContactFormModal from "@/components/ContactFormModal.svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";
import Closing from "../../Closing.svelte";
import SectionHeader from "../SectionHeader.svelte";
import OpenRoles from "./OpenRoles.svelte";
import { roleIcons, roleKeys } from "./role-icons";
import Team from "./Team.svelte";
import { teamMembers } from "./team-data";

let modalOpen = $state(false);
let sectionEl: HTMLElement;

const roles = $derived(
  roleKeys.map((key) => ({
    ...translations[locale.value].hypocrisy.joinCta[key],
    icon: roleIcons[key],
  })),
);

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".join-content > *", {
      scrollTrigger: { trigger: sectionEl, start: "top 75%" },
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: "power3.out",
    });

    gsap.from(".team-member", {
      scrollTrigger: { trigger: ".team-grid", start: "top 80%" },
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

  <div class="join-content">
    <SectionHeader label={t("hypocrisy.joinCta.sectionLabel")} title={t("hypocrisy.joinCta.title")}>
      <p class="lead">{t("hypocrisy.joinCta.description")}</p>
    </SectionHeader>

    <div class="join-body">
      <p class="mission-excerpt">{translations[locale.value].hypocrisy.joinCta.missionExcerpt}</p>
      <a href="/" class="vision-link">{t("hypocrisy.joinCta.readVision")} &rarr;</a>

      <Team members={teamMembers} />

      <div class="divider"></div>

      <div class="open-roles-wrapper">
        <OpenRoles {roles} />
      </div>

      <div class="contact">
        <button type="button" class="contact-button" onclick={() => (modalOpen = true)}>
          <SendIcon class="contact-icon" />
          Get in Touch
        </button>
      </div>
    </div>
  </div>
</section>

<Closing showMissionButton={false} />

<ContactFormModal open={modalOpen} onClose={() => (modalOpen = false)} />

<style>
  .join-section {
    position: relative;
    overflow: hidden;
    padding: 8rem 0;

    @media (min-width: 1024px) {
      padding: 12rem 0;
    }
  }

  .join-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, rgba(180, 134, 11, 0.06) 0%, transparent 70%);
  }

  .join-content {
    position: relative;
    z-index: 10;
  }

  .lead {
    max-width: 32rem;
    margin-bottom: 3rem;
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.5);
  }

  .join-body {
    padding: 0 1.5rem;

    @media (min-width: 1024px) {
      padding: 0 4rem;
    }
  }

  .mission-excerpt {
    max-width: 32rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.625;
    color: rgba(255, 255, 255, 0.5);
  }

  .vision-link {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    margin-bottom: 4rem;
    font-family: var(--font-mono);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-accent-500);
    transition: color 200ms ease;

    &:hover {
      color: var(--color-accent-400);
    }
  }

  .divider {
    width: 4rem;
    height: 1px;
    margin-bottom: 4rem;
    background: rgba(255, 255, 255, 0.1);
  }

  .open-roles-wrapper {
    margin-bottom: 4rem;
  }

  .contact {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .contact-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.25rem;
    cursor: pointer;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--color-accent-500);
    background: transparent;
    border: 1.5px solid rgba(184, 134, 11, 0.3);
    transition: all 200ms ease;

    &:hover {
      color: var(--color-accent-400);
      border-color: var(--color-accent-500);
    }
  }

  :global(.contact-icon) {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.25rem;
  }
</style>

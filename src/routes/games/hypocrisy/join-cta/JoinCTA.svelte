<script lang="ts">
import ContactFormModal from "@/components/ContactFormModal.svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";
import { BookOpen, Box, Palette, Play, Send, Sparkles, Users, Volume2 } from "lucide-svelte";
import { onMount } from "svelte";
import Closing from "../../../Closing.svelte";
import SectionHeader from "../SectionHeader.svelte";
import OpenRoles from "./OpenRoles.svelte";
import Team from "./Team.svelte";

let modalOpen = $state(false);

function openModal() {
  modalOpen = true;
}

let el: HTMLElement;

const roleKeys = [
  "roleConceptArtist",
  "role3dArtist",
  "role3dAnimator",
  "roleVfx",
  "roleSfx",
  "roleNarrative",
  "roleProjectManager",
] as const;

const roleIcons = {
  roleConceptArtist: Palette,
  role3dArtist: Box,
  role3dAnimator: Play,
  roleVfx: Sparkles,
  roleSfx: Volume2,
  roleNarrative: BookOpen,
  roleProjectManager: Users,
} as const;

const team = [
  {
    name: "Vladyslav Yazykov",
    role: "Founder, CEO, Creative Lead",
    image: "/assets/images/team/vlad-y.webp",
    link: "https://linkedin.com/in/elumixor",
    linkType: "linkedin" as const,
  },
  {
    name: "George Kobiakov",
    role: "Art Lead",
    image: "/assets/images/team/george-k.webp",
    link: "https://www.linkedin.com/in/george-kobiakov-a3591295/",
    linkType: "linkedin" as const,
  },
  {
    name: "Yevhenii Kolisnyk",
    role: "Unity Developer",
    image: "/assets/images/team/yevhenii-k.webp",
    link: "https://www.linkedin.com/in/yevhenii-kolisnyk-528487343/",
    linkType: "linkedin" as const,
  },
  {
    name: "Yehor Mir",
    role: "Unity Developer",
    image: "/assets/images/team/yehor-m.webp",
    link: "https://www.linkedin.com/in/yehor-mir-full-stack/",
    linkType: "linkedin" as const,
  },
  {
    name: "Oleksandr Nosov",
    role: "Game Designer",
    image: "/assets/images/team/oleksander-n.webp",
    link: "https://www.linkedin.com/in/oleksandr--nosov/",
    linkType: "linkedin" as const,
  },
  {
    name: "Kseniia Piddubna",
    role: "UI Designer",
    image: "/assets/images/team/kseniia-p.webp",
    link: "https://artstation.com/kseniia_piddubna/",
    linkType: "artstation" as const,
  },
  {
    name: "Maryia Kostsina",
    role: "QA Lead",
    image: "/assets/images/team/maryia-k.webp",
    link: "https://www.linkedin.com/in/maryia-kostsina/",
    linkType: "linkedin" as const,
  },
  {
    name: "Jakub Bartušek",
    role: "Unity Developer",
    image: null,
    link: "https://www.linkedin.com/in/jakub-bartu%C5%A1ek-6a6892329/",
    linkType: "linkedin" as const,
  },
  {
    name: "Mike Yazykov",
    role: "Composer",
    image: null,
    link: null,
    linkType: null,
  },
];

const roles = $derived(
  roleKeys.map((key) => ({
    ...translations[locale.value].hypocrisy.joinCta[key],
    icon: roleIcons[key],
  })),
);

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".join-content > *", {
      scrollTrigger: { trigger: el, start: "top 75%" },
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
  }, el);

  return () => ctx.revert();
});
</script>

<section id="join" bind:this={el} class="py-32 lg:py-48 relative overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(180,134,11,0.06)_0%,_transparent_70%)]"></div>

  <div class="join-content relative z-10">
    <SectionHeader label={t("hypocrisy.joinCta.sectionLabel")} title={t("hypocrisy.joinCta.title")}>
      <p class="text-lg text-white/50 max-w-2xl mb-12">
        {t("hypocrisy.joinCta.description")}
      </p>
    </SectionHeader>

    <div class="px-6 lg:px-16">
      <!-- Mission context -->
      <p class="text-base text-white/50 leading-relaxed mb-4 max-w-2xl">
        {translations[locale.value].hypocrisy.joinCta.missionExcerpt}
      </p>
      <a
        href="/"
        class="inline-flex items-center gap-1.5 text-sm text-accent-500 hover:text-accent-400 transition-colors font-mono tracking-wider uppercase mb-16"
      >
        {t("hypocrisy.joinCta.readVision")} &rarr;
      </a>

      <!-- Team -->
      <Team members={team} />

      <!-- Divider -->
      <div class="w-16 h-px bg-white/10 mb-16"></div>

      <!-- Open Roles -->
      <div class="mb-16">
        <OpenRoles {roles} />
      </div>

      <!-- Contact -->
      <div class="flex justify-center mt-8">
        <button
          type="button"
          onclick={() => openModal()}
          class="font-mono text-[0.65rem] tracking-[0.15em] uppercase px-5 py-2.5 inline-flex items-center gap-2 transition-all cursor-pointer text-accent-500 border-[1.5px] border-accent-500/30 hover:border-accent-500 hover:text-accent-400"
        >
          <Send class="w-3.5 h-3.5 mr-1" />
          Get in Touch
        </button>
      </div>
    </div>
  </div>
</section>

<Closing showMissionButton={false} />

<ContactFormModal open={modalOpen} onClose={() => modalOpen = false} />

<script lang="ts">
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import { locale } from "@/lib/i18n";
import { t } from "@/lib/i18n/t";
import { translations } from "@/lib/i18n/translations";
import SectionHeader from "./SectionHeader.svelte";

let el: HTMLElement;

const featureKeys = ["combat", "skills", "roguelite", "companions"] as const;
const features = $derived(featureKeys.map((key) => translations[locale.value].hypocrisy.combat[key]));

const companionImages = [
  "/assets/images/concepts/characters/Helios.webp",
  "/assets/images/concepts/characters/kai.webp",
  "/assets/images/concepts/characters/Lucy.webp",
  "/assets/images/concepts/characters/darius.webp",
  "/assets/images/concepts/characters/nellie.webp",
];

type Media = { kind: "video"; src: string } | { kind: "image"; src: string } | { kind: "companions" };

const chapters: { media: Media; tag: string }[] = [
  { media: { kind: "video", src: "/assets/videos/combat-loop.webm" }, tag: "Combat Loop" },
  { media: { kind: "image", src: "/assets/images/ui/upgrades.webp" }, tag: "Progression" },
  { media: { kind: "image", src: "/assets/images/ui/death.webp" }, tag: "Legacy" },
  { media: { kind: "companions" }, tag: "Allies" },
];

onMount(() => {
  const ctx = gsap.context(() => {
    gsap.from(".pitch-text", {
      scrollTrigger: { trigger: el, start: "top 72%" },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    const chaps = gsap.utils.toArray<HTMLElement>(".chapter");
    for (const [i, c] of chaps.entries()) {
      gsap.from(c.querySelector(".media-strip"), {
        scrollTrigger: { trigger: c, start: "top 80%" },
        clipPath: "inset(0 50% 0 50%)",
        duration: 1.3,
        ease: "power3.out",
      });

      gsap.from(c.querySelectorAll<HTMLElement>(".chapter-reveal"), {
        scrollTrigger: { trigger: c, start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.09,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(c.querySelectorAll<HTMLElement>(".letterbox-line"), {
        scrollTrigger: { trigger: c, start: "top 80%" },
        scaleX: 0,
        transformOrigin: i % 2 === 0 ? "left center" : "right center",
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
      });
    }
  }, el);

  return () => ctx.revert();
});
</script>

<section id="about" bind:this={el} class="py-32 lg:py-48 relative overflow-hidden">
  <SectionHeader label={t("hypocrisy.premise.sectionLabel")} title={t("hypocrisy.premise.title")} />

  <div class="px-6 lg:px-16 mb-32">
    <p class="pitch-text text-lg md:text-xl text-white/50 leading-relaxed max-w-3xl">
      {t("hypocrisy.premise.pitch")}
    </p>
  </div>

  <div class="space-y-36 lg:space-y-52">
    {#each features as feature, i (i)}
      {@const chapter = chapters[i]}
      {@const num = String(i + 1).padStart(2, "0")}
      {@const reverse = i % 2 === 1}

      <article class="chapter relative">
        <!-- Chapter marker -->
        <div class="px-6 lg:px-16 mb-5">
          <div class="chapter-reveal flex items-center gap-4 {reverse ? 'justify-end flex-row-reverse' : ''}">
            <span class="font-mono text-[10px] tracking-[0.4em] uppercase text-accent-500">CH · {num}</span>
            <span class="letterbox-line h-px w-24 bg-gradient-to-r from-accent-500/70 via-accent-500/30 to-transparent {reverse ? 'rotate-180' : ''}"></span>
            <span class="font-mono text-[10px] tracking-[0.4em] uppercase text-white/35">{chapter.tag}</span>
          </div>
        </div>

        <!-- Full-bleed cinematic strip -->
        <div class="relative">
          <!-- Letterbox hairlines -->
          <div class="letterbox-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/35 to-transparent z-10"></div>
          <div class="letterbox-line absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-500/35 to-transparent z-10"></div>

          <div class="media-strip relative w-full overflow-hidden aspect-[21/10] md:aspect-[21/8] lg:aspect-[21/7]">
            {#if chapter.media.kind === "video"}
              <video
                autoplay muted loop playsinline preload="none"
                src={chapter.media.src}
                class="absolute inset-0 w-full h-full object-cover"
              ></video>
            {:else if chapter.media.kind === "image"}
              <img
                src={chapter.media.src}
                alt={feature.title}
                class="absolute inset-0 w-full h-full object-cover"
              />
            {:else}
              <div class="absolute inset-0 grid grid-cols-5">
                {#each companionImages as src, idx (src)}
                  <div class="relative overflow-hidden">
                    <img
                      {src}
                      alt="Companion"
                      class="absolute inset-0 w-full h-full object-cover object-top"
                    />
                    {#if idx > 0}
                      <div class="absolute left-0 top-0 bottom-0 w-px bg-accent-500/25 z-10"></div>
                    {/if}
                    <div class="absolute inset-0 bg-gradient-to-t from-[#03050a]/70 via-transparent to-transparent"></div>
                  </div>
                {/each}
              </div>
            {/if}

            <!-- Atmospheric gradients -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#03050a] via-[#03050a]/15 to-transparent pointer-events-none"></div>
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(3,5,10,0.5)_100%)] pointer-events-none"></div>
            <!-- Scanline texture -->
            <div class="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none" style="background-image: repeating-linear-gradient(0deg, rgba(255,255,255,.5) 0, rgba(255,255,255,.5) 1px, transparent 1px, transparent 3px);"></div>
          </div>

          <!-- Side margin tick marks -->
          <div class="letterbox-line absolute top-1/2 -translate-y-1/2 hidden lg:block {reverse ? 'right-0 w-16' : 'left-0 w-16'} h-px bg-accent-500/30 z-10"></div>
        </div>

        <!-- Caption beneath media -->
        <div class="mt-8 lg:mt-10 px-6 lg:px-16">
          <div class="max-w-2xl {reverse ? 'lg:ml-auto lg:text-right' : ''}">
            <h3 class="chapter-reveal font-display text-3xl md:text-5xl lg:text-6xl text-white leading-[0.95] mb-4 lg:mb-5">
              {feature.title}
            </h3>
            <p class="chapter-reveal text-base md:text-lg text-white/55 leading-relaxed max-w-xl {reverse ? 'lg:ml-auto' : ''}">
              {feature.description}
            </p>
          </div>
        </div>
      </article>
    {/each}
  </div>

  <!-- End reel marker -->
  <div class="mt-32 px-6 lg:px-16">
    <div class="flex items-center gap-4">
      <span class="h-px flex-1 bg-white/10"></span>
      <span class="font-mono text-[10px] tracking-[0.4em] uppercase text-white/30">End Reel · 04 / 04</span>
      <span class="h-px w-12 bg-white/10"></span>
    </div>
  </div>
</section>


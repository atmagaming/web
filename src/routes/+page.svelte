<script lang="ts">
import { onMount } from "svelte";

import gsap from "@/lib/gsap";
import { browser } from "$app/environment";
import Closing from "./Closing.svelte";
import Hero from "./Hero.svelte";
import How from "./How.svelte";
import Join from "./Join.svelte";
import { reasons } from "./reasons";
import What from "./What.svelte";
import WhatGame from "./WhatGame.svelte";
import Why from "./Why.svelte";

const LG_BREAKPOINT = 1024;

const whatSteps = reasons.length + 1;
const sectionSteps = [1, 1, 1, whatSteps, 1, 1];
const totalSteps = sectionSteps.reduce((sum, s) => sum + s, 0);

let container = $state<HTMLDivElement | undefined>(undefined);
let currentStep = $state(0);
let isDesktop = $state(browser && window.innerWidth >= LG_BREAKPOINT);

const activeSection = $derived.by(() => {
  let step = currentStep;
  for (let i = 0; i < sectionSteps.length; i++) {
    if (step < sectionSteps[i]) return { index: i, subStep: step };
    step -= sectionSteps[i];
  }
  return { index: sectionSteps.length - 1, subStep: 0 };
});

function sectionClass(index: number) {
  if (index === activeSection.index) return "opacity-100 translate-y-0";
  if (index < activeSection.index) return "opacity-0 -translate-y-12 pointer-events-none";
  return "opacity-0 translate-y-12 pointer-events-none";
}

function sectionStartStep(sectionIndex: number) {
  let step = 0;
  for (let i = 0; i < sectionIndex; i++) step += sectionSteps[i];
  return step;
}

function scrollToStep(step: number) {
  const progress = (step + 0.5) / totalSteps;
  const scrollDistance = totalSteps * window.innerHeight;
  window.scrollTo({ top: progress * scrollDistance, behavior: "smooth" });
}

function scrollToSectionByName(name: string) {
  const map: Record<string, number> = { hero: 0, why: 1, how: 2, what: 3, join: 4, closing: 5 };
  const index = map[name];
  if (index !== undefined) scrollToStep(sectionStartStep(index));
}

onMount(() => {
  // Hero entrance
  gsap.from(".hero-tag", { y: 18, opacity: 0, duration: 0.6, delay: 0.3, ease: "power3.out" });
  gsap.from(".hero-title", { y: 18, opacity: 0, duration: 0.7, delay: 0.45, ease: "expo.out" });
  gsap.from(".hero-mission", { y: 18, opacity: 0, duration: 0.6, delay: 0.65, ease: "power3.out" });
  gsap.from(".hero-actions", { y: 18, opacity: 0, duration: 0.6, delay: 0.8, ease: "power3.out" });
  gsap.from(".hero-slash", {
    scaleY: 0,
    duration: 0.7,
    delay: 0.1,
    ease: "expo.out",
    transformOrigin: "top",
  });

  if (!isDesktop) {
    // Mobile: simple scroll-triggered fade-ins
    for (const s of [".why-inner", ".how-inner", ".join-inner", ".closing-inner"]) {
      gsap.from(s, {
        scrollTrigger: { trigger: s, start: "top 85%" },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    }

    gsap.from(".track-card", {
      scrollTrigger: { trigger: ".track-grid", start: "top 85%" },
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
    });

    const handleMobileScrollTo = (e: Event) => {
      const name = (e as CustomEvent).detail;
      const selector = name === "join" ? "#join-button" : `#${name}`;
      document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("scrollto", handleMobileScrollTo);

    return () => {
      window.removeEventListener("scrollto", handleMobileScrollTo);
    };
  }

  // Desktop: master scroll pin
  const trigger = gsap.to(
    {},
    {
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${totalSteps * 100}%`,
        pin: true,
        scrub: 0.3,
        onUpdate: (self: { progress: number }) => {
          const raw = self.progress * totalSteps;
          currentStep = Math.min(Math.floor(raw), totalSteps - 1);
        },
      },
    },
  );

  const handleScrollTo = (e: Event) => scrollToSectionByName((e as CustomEvent).detail);
  window.addEventListener("scrollto", handleScrollTo);

  return () => {
    trigger.scrollTrigger?.kill();
    trigger.kill();
    window.removeEventListener("scrollto", handleScrollTo);
  };
});
</script>

{#if isDesktop}
  <div bind:this={container} class="relative h-screen overflow-hidden">
    <div class="absolute inset-0 transition-all duration-700 ease-out {sectionClass(0)}">
      <Hero
        onScrollToWhy={() => scrollToStep(sectionStartStep(1))}
        onScrollToJoin={() => scrollToStep(sectionStartStep(4))}
      />
    </div>

    <div class="absolute inset-0 transition-all duration-700 ease-out {sectionClass(1)}">
      <Why />
    </div>

    <div class="absolute inset-0 transition-all duration-700 ease-out {sectionClass(2)}">
      <How />
    </div>

    <div class="absolute inset-0 transition-all duration-700 ease-out {sectionClass(3)}">
      <What slideIndex={activeSection.subStep} pinned />
    </div>

    <div class="absolute inset-0 transition-all duration-700 ease-out {sectionClass(4)}">
      <Join />
    </div>

    <div class="absolute inset-0 transition-all duration-700 ease-out {sectionClass(5)}">
      <Closing />
    </div>
  </div>
{:else}
  <Hero
    onScrollToWhy={() => document.querySelector('#why')?.scrollIntoView({ behavior: 'smooth' })}
    onScrollToJoin={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })}
  />
  <Why />
  <How />
  <What />
  <WhatGame standalone />
  <Join />
  <Closing />
{/if}

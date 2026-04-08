<script lang="ts">
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMount } from "svelte";
import gsap from "@/lib/gsap";
import Closing from "@/sections/home/Closing.svelte";
import Gaming from "@/sections/home/Gaming.svelte";
import Hero from "@/sections/home/Hero.svelte";
import How from "@/sections/home/How.svelte";
import Join from "@/sections/home/Join.svelte";
import Why from "@/sections/home/Why.svelte";

onMount(() => {
  const ctx = gsap.context(() => {
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

    // Scroll-triggered section fade-ins
    for (const s of [".why-inner", ".how-inner", ".what-inner", ".join-inner", ".closing-inner"]) {
      gsap.from(s, {
        scrollTrigger: { trigger: s, start: "top 85%" },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    }

    gsap.from(".stat-cell", {
      scrollTrigger: { trigger: ".stat-row", start: "top 85%" },
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out",
    });

    gsap.from(".track-card", {
      scrollTrigger: { trigger: ".track-grid", start: "top 85%" },
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Smooth snap to sections using GSAP ScrollTrigger
    const sections = gsap.utils.toArray<HTMLElement>(".snap-section");
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const snapPoints = sections.map((section) => section.offsetTop / maxScroll);

    ScrollTrigger.create({
      snap: {
        snapTo: snapPoints,
        duration: { min: 0.3, max: 0.7 },
        delay: 0.1,
        ease: "power1.inOut",
      },
    });
  });

  return () => ctx.revert();
});
</script>

<Hero />
<Why />
<How />
<Gaming />
<Join />
<Closing />

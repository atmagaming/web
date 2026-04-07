<script lang="ts">
import { onMount } from "svelte";
import ClaimRow from "@/components/ClaimRow.svelte";
import gsap from "@/lib/gsap";

onMount(() => {
  const ctx = gsap.context(() => {
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

    for (const s of [".why-inner", ".how-inner", ".what-inner", ".closing-inner"]) {
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
  });

  return () => ctx.revert();
});
</script>

<!-- HERO -->
<section class="pt-[52px] min-h-screen flex flex-col justify-end pb-20 px-6 lg:px-12 relative overflow-hidden">
  <div
    class="absolute font-display text-[38vw] leading-[0.82] text-dark-950 opacity-[0.035] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[46%] whitespace-nowrap pointer-events-none select-none"
    aria-hidden="true"
  >ATMA</div>

  <div class="hero-slash absolute top-0 bottom-0 left-[2.2rem] w-[3px] bg-red origin-top"></div>

  <p class="hero-tag font-mono text-[0.68rem] tracking-[0.22em] uppercase text-gold mb-7">
    ATMA Gaming — Company Vision
  </p>

  <h1 class="hero-title font-display text-[clamp(5rem,16vw,15rem)] leading-[0.86] tracking-[0.01em] text-dark-950 mb-6">
    ART<br>
    CAN <span class="text-red">CHANGE</span><br>
    THE WORLD.
  </h1>

  <p class="hero-mission max-w-[580px] text-[clamp(1.15rem,2vw,1.5rem)] font-light leading-[1.45] text-dark-950 mb-12">
    We build story-rich games that propagate moral ideas at civilizational scale.
    <strong class="font-medium">Not because it's trendy. Because it's necessary.</strong>
  </p>

  <div class="hero-actions flex items-center gap-5 flex-wrap">
    <button
      type="button"
      class="font-mono text-[0.75rem] tracking-[0.12em] uppercase text-white bg-dark-950 px-8 py-3.5 hover:bg-red transition-colors inline-flex items-center gap-2.5 cursor-pointer border-none"
      onclick={() => document.querySelector('#why')?.scrollIntoView({ behavior: 'smooth' })}
    >Read the Vision &darr;</button>
    <a
      href="https://atmagaming.notion.site/Vision-dc4f14be61f741c38881701ac9c2ab74"
      target="_blank"
      rel="noopener noreferrer"
      class="font-mono text-[0.75rem] tracking-[0.12em] uppercase text-dark-950 border-[1.5px] border-border px-8 py-3.5 hover:border-dark-950 transition-colors inline-flex items-center gap-2.5 no-underline"
    >Full Vision in Notion &nearr;</a>
  </div>

  <div class="absolute bottom-8 right-12 font-mono text-[0.6rem] tracking-[0.18em] uppercase text-border hidden lg:flex items-center gap-3">
    scroll
    <span class="block w-px h-8 bg-gradient-to-b from-border to-transparent"></span>
  </div>
</section>

<!-- WHY -->
<section class="px-6 lg:px-12 py-24 border-t-[1.5px] border-dark-950" id="why">
  <div class="why-inner max-w-[1080px] mx-auto">
    <div class="font-mono text-[0.63rem] tracking-[0.25em] uppercase text-text mb-5 flex items-center gap-3">
      <span class="font-display text-[0.85rem] text-red tracking-[0.05em]">01</span>
      Why &middot; The Problem
    </div>

    <h2 class="font-display text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.88] tracking-[0.01em] text-dark-950 mb-12">
      THE ROOT<br>IS <span class="text-red">IDEOLOGICAL.</span>
    </h2>

    <ClaimRow claim="Poverty, war, mental health crises, environmental collapse — these share a common root: a culture built on <strong class='font-medium'>misunderstanding human nature</strong>.">
      Over a billion people live with a mental health disorder. Depression and anxiety alone cost the global economy $1 trillion/year
      (<a href="https://www.who.int/news/item/02-09-2025-over-a-billion-people-living-with-mental-health-conditions-services-require-urgent-scale-up" target="_blank" rel="noopener noreferrer" class="text-gold underline underline-offset-2">WHO, 2025</a>).
      Wars rage, oppressive regimes persist, ecosystems degrade. These are symptoms — not the disease itself.
      The real cause: the attempt to satisfy an infinite longing for happiness through finite material means.
      This naturally produces exploitation, suffering, and destruction.
    </ClaimRow>

    <ClaimRow claim="Structural fixes — policy, economics, institutions — are necessary but not sufficient. <strong class='font-medium'>You cannot sustainably fix behavior without changing values.</strong>">
      Every structural solution rests on the values of those who implement and maintain it.
      Transparent governance requires honest people. Fair economies require a culture that condemns exploitation.
      Without ideological foundation, reforms are temporary — reversed by the next generation with different incentives.
    </ClaimRow>

    <ClaimRow claim="Humanity <em class='italic text-text'>has</em> progressed morally: slavery abolished, human rights codified, environmental consciousness emerged. <strong class='font-medium'>We can go further.</strong>" />
  </div>
</section>

<!-- HOW -->
<section class="px-6 lg:px-12 py-24 border-t-[1.5px] border-dark-950 bg-surface">
  <div class="how-inner max-w-[1080px] mx-auto">
    <div class="font-mono text-[0.63rem] tracking-[0.25em] uppercase text-text mb-5 flex items-center gap-3">
      <span class="font-display text-[0.85rem] text-red tracking-[0.05em]">02</span>
      How &middot; The Approach
    </div>

    <h2 class="font-display text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.88] tracking-[0.01em] text-dark-950 mb-12">
      CHANGE<br>MINDS.<br><span class="text-gold">THEN</span> SYSTEMS.
    </h2>

    <div class="track-grid grid grid-cols-1 lg:grid-cols-2 border-[1.5px] border-dark-950 mt-12">
      <!-- Track 1: Ideological Education -->
      <div class="track-card p-8 lg:p-12 relative">
        <span class="absolute top-6 right-8 font-display text-[6rem] leading-none text-dark-950 opacity-[0.06] select-none pointer-events-none">1</span>
        <h3 class="font-display text-[1.8rem] tracking-[0.04em] text-dark-950 mb-4">Ideological Education</h3>
        <div class="text-[0.97rem] leading-[1.7] text-text space-y-4">
          <p>
            Make <a href="/morality" class="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-gold border-b-[1.5px] border-current pb-px hover:text-dark-950 transition-colors no-underline">morality principles &rarr;</a>
            the standard norm. Non-harm, non-exploitation, truthfulness — leading to fair compensation,
            equitable distribution, transparent governance.
          </p>
          <p>
            Defeat groupism by extending moral consideration to all beings —
            <a href="/universalism" class="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-gold border-b-[1.5px] border-current pb-px hover:text-dark-950 transition-colors no-underline">universalism &rarr;</a>.
            Everything in the universe treated with equal respect, not exploited.
          </p>
          <p>
            Educate on the
            <a href="/philosophy" class="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-gold border-b-[1.5px] border-current pb-px hover:text-dark-950 transition-colors no-underline">fundamental philosophy &rarr;</a>
            — replacing dogmatic thinking with clear reasoning grounded in observable human experience.
          </p>
        </div>
      </div>

      <!-- Track 2: Immediate Relief -->
      <div class="track-card p-8 lg:p-12 relative border-t-[1.5px] lg:border-t-0 lg:border-l-[1.5px] border-dark-950">
        <span class="absolute top-6 right-8 font-display text-[6rem] leading-none text-dark-950 opacity-[0.06] select-none pointer-events-none">2</span>
        <h3 class="font-display text-[1.8rem] tracking-[0.04em] text-dark-950 mb-4">Immediate Relief</h3>
        <div class="text-[0.97rem] leading-[1.7] text-text space-y-4">
          <p>Revenue from commercial products funds direct aid — refugees, under-resourced communities, environmental projects.</p>
          <p><strong class="font-medium text-dark-950">Working within the market</strong>, not against it. Sustainable impact model.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- WHAT -->
<section class="px-6 lg:px-12 py-24 border-t-[1.5px] border-dark-950" id="what">
  <div class="what-inner max-w-[1080px] mx-auto">
    <div class="font-mono text-[0.63rem] tracking-[0.25em] uppercase text-text mb-5 flex items-center gap-3">
      <span class="font-display text-[0.85rem] text-red tracking-[0.05em]">03</span>
      What &middot; The Medium
    </div>

    <h2 class="font-display text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.88] tracking-[0.01em] text-dark-950 mb-12">
      3.6 BILLION<br>PEOPLE<br><span class="text-gold">PLAY GAMES.</span>
    </h2>

    <ClaimRow claim="Games are the most powerful ideological medium alive — <strong class='font-medium'>larger than film and music combined</strong>, and uniquely interactive.">
      The gaming market hit $189B in 2025 — more than the global film box office ($33B) and recorded music ($32B) combined.
      3.6 billion players. 42% of the global population. Average gamer has played for 18 years. This isn't a niche.
      (<a href="https://newzoo.com/resources/trend-reports/newzoo-global-games-market-report-2025" target="_blank" rel="noopener noreferrer" class="text-gold underline underline-offset-2">Newzoo, 2025</a>)
    </ClaimRow>

    <ClaimRow claim="Stories change beliefs without triggering resistance. <em class='italic text-text'>Research confirms it.</em> Players adopt characters' perspectives — increasing empathy, reducing prejudice.">
      Research on narrative transportation
      (<a href="https://doi.org/10.1037/0022-3514.79.5.701" target="_blank" rel="noopener noreferrer" class="text-gold underline underline-offset-2">Green &amp; Brock, 2000</a>;
      <a href="https://doi.org/10.1037/a0018251" target="_blank" rel="noopener noreferrer" class="text-gold underline underline-offset-2">Greitemeyer et al., 2010</a>)
      shows that story absorption produces measurable attitudinal and behavioral change: increased empathy, reduced prejudice,
      greater prosocial concern. Unlike direct persuasion, stories bypass psychological resistance.
    </ClaimRow>

    <ClaimRow claim="Unlike passive media, games let players <strong class='font-medium'>inhabit alternative worlds</strong> — making decisions, embodying characters, experiencing consequences firsthand." />

    <!-- Stats -->
    <div class="stat-row flex flex-col md:flex-row border-[1.5px] border-dark-950 my-16">
      <div class="stat-cell flex-1 px-8 py-10 text-center border-b-[1.5px] md:border-b-0 md:border-r-[1.5px] border-dark-950">
        <span class="font-display text-[3.8rem] leading-none text-dark-950 block">3.6<span class="text-[2rem] text-gold">B</span></span>
        <span class="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-text mt-2 block">Gamers worldwide</span>
      </div>
      <div class="stat-cell flex-1 px-8 py-10 text-center border-b-[1.5px] md:border-b-0 md:border-r-[1.5px] border-dark-950">
        <span class="font-display text-[3.8rem] leading-none text-dark-950 block">$189<span class="text-[2rem] text-gold">B</span></span>
        <span class="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-text mt-2 block">Market 2025</span>
      </div>
      <div class="stat-cell flex-1 px-8 py-10 text-center border-b-[1.5px] md:border-b-0 md:border-r-[1.5px] border-dark-950">
        <span class="font-display text-[3.8rem] leading-none text-dark-950 block">42<span class="text-[2rem] text-gold">%</span></span>
        <span class="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-text mt-2 block">Of global population</span>
      </div>
      <div class="stat-cell flex-1 px-8 py-10 text-center">
        <span class="font-display text-[3.8rem] leading-none text-dark-950 block">18<span class="text-[2rem] text-gold">yr</span></span>
        <span class="font-mono text-[0.62rem] tracking-[0.14em] uppercase text-text mt-2 block">Avg. player tenure</span>
      </div>
    </div>

    <!-- Game block -->
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] border-[1.5px] border-dark-950 my-12">
      <div class="bg-dark-950 p-10 lg:p-14 flex flex-col justify-between gap-8">
        <span class="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-gold">First Title &middot; ATMA Gaming</span>
        <div class="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] tracking-[0.03em] text-white">
          HYPO-<br>CRISY
        </div>
      </div>
      <div class="p-10 lg:p-14 flex flex-col justify-center border-t-[1.5px] lg:border-t-0 lg:border-l-[1.5px] border-dark-950">
        <p class="text-[1.1rem] italic font-light text-text leading-[1.6]">
          A story about optimism in a heroic fight for freedom — defying inner hatred and finding peace in a world distorted by war.
        </p>
        <div class="flex gap-2.5 flex-wrap mt-8">
          <span class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-dark-950 border border-border px-3 py-1">Story-Rich</span>
          <span class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-dark-950 border border-border px-3 py-1">Non-Niche</span>
          <span class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-dark-950 border border-border px-3 py-1">Purpose-Driven</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CLOSING -->
<div class="closing-inner bg-dark-950 px-6 lg:px-12 py-24 text-center border-t-[1.5px] border-dark-950">
  <p class="font-display text-[clamp(2rem,5vw,5rem)] leading-none text-white tracking-[0.02em] max-w-[900px] mx-auto mb-10">
    GAMES ARE <span class="text-gold">ART.</span><br>
    ART CHANGES PEOPLE.<br>
    PEOPLE CHANGE THE WORLD.
  </p>
  <div class="flex gap-4 justify-center flex-wrap">
    <a
      href="https://atmagaming.notion.site/Vision-dc4f14be61f741c38881701ac9c2ab74"
      target="_blank"
      rel="noopener noreferrer"
      class="font-mono text-[0.75rem] tracking-[0.12em] uppercase text-dark-950 bg-white px-8 py-3.5 hover:bg-gold hover:text-white transition-colors inline-flex items-center gap-2.5 no-underline"
    >Read the Full Vision &nearr;</a>
    <a
      href="mailto:ceo@atmagaming.com"
      class="font-mono text-[0.75rem] tracking-[0.12em] uppercase text-white/50 border-[1.5px] border-white/15 px-8 py-3.5 hover:border-white/40 hover:text-white transition-all inline-flex items-center gap-2.5 no-underline"
    >Get in Touch &rarr;</a>
  </div>
</div>

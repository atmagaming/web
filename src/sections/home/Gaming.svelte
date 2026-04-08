<script lang="ts">
import ClaimRow from "@/components/ClaimRow.svelte";
import SectionHeader from "@/components/ui/SectionHeader.svelte";
</script>

<section class="snap-section px-6 lg:px-16 py-24 border-t-[1.5px] border-dark-950" id="what">
  <div class="what-inner w-full">
    <SectionHeader number="03" label="What &middot; First Initiative" />

    <h2 class="font-display text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.88] tracking-[0.01em] text-dark-950 mb-4">
      ATMA<br><span class="text-gold">GAMING.</span>
    </h2>

    <p class="text-[1.1rem] leading-[1.7] text-text max-w-[640px] mb-12">
      Our first vehicle for cultural education is a <strong class="font-medium text-dark-950">video game studio</strong> — making story-rich, non-niche games that use storytelling as a tool for propagating ideas.
    </p>

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
        <span class="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-gold">First Title</span>
        <div>
          <div class="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] tracking-[0.03em] text-white">
            HYPO-<br>CRISY
          </div>
          <a
            href="/games/hypocrisy"
            class="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-white/50 hover:text-white transition-colors mt-6 inline-block no-underline"
          >Learn more &rarr;</a>
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

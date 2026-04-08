<script lang="ts">
import SectionHeader from "@/components/ui/SectionHeader.svelte";
</script>

<section class="snap-section min-h-screen flex items-center px-6 lg:px-16 py-24 border-t-[1.5px] border-dark-950 bg-surface" id="join">
  <div class="join-inner w-full">
    <SectionHeader number="04" label="Join &middot; Work With Us" />

    <h2 class="font-display text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.88] tracking-[0.01em] text-dark-950 mb-12">
      BUILD THIS<br><span class="text-gold">WITH US.</span>
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 border-[1.5px] border-dark-950">
      <div class="p-8 lg:p-10">
        <h3 class="font-display text-[1.4rem] tracking-[0.04em] text-dark-950 mb-3">Partners</h3>
        <p class="text-[0.92rem] leading-[1.65] text-text mb-6">
          Organizations, NGOs, and creators aligned with our mission. Let's amplify each other.
        </p>
        <a href="mailto:ceo@atmagaming.com?subject=Partnership" class="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-gold hover:text-dark-950 transition-colors no-underline">Reach out &rarr;</a>
      </div>
      <div class="p-8 lg:p-10 border-t-[1.5px] md:border-t-0 md:border-l-[1.5px] border-dark-950">
        <h3 class="font-display text-[1.4rem] tracking-[0.04em] text-dark-950 mb-3">Investors</h3>
        <p class="text-[0.92rem] leading-[1.65] text-text mb-6">
          Impact-driven capital for a $189B market with a civilizational thesis. Commercial returns, real-world change.
        </p>
        <a href="mailto:ceo@atmagaming.com?subject=Investment" class="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-gold hover:text-dark-950 transition-colors no-underline">Let's talk &rarr;</a>
      </div>
      <div class="p-8 lg:p-10 border-t-[1.5px] md:border-t-0 md:border-l-[1.5px] border-dark-950">
        <h3 class="font-display text-[1.4rem] tracking-[0.04em] text-dark-950 mb-3">Team</h3>
        <p class="text-[0.92rem] leading-[1.65] text-text mb-6">
          Developers, artists, writers, designers — people who want their work to mean something beyond the product.
        </p>
        <a href="/games/hypocrisy#careers" class="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-gold hover:text-dark-950 transition-colors no-underline">Open roles &rarr;</a>
      </div>
    </div>
  </div>
</section>

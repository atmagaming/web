<script lang="ts">
import SectionHeader from "@/components/ui/SectionHeader.svelte";
import Tooltip from "@/components/ui/Tooltip.svelte";
</script>

<section class="min-h-screen flex items-center px-6 lg:px-16 py-24 border-t-[1.5px] border-dark-950 bg-surface">
  <div class="how-inner w-full">
    <SectionHeader number="02" label="How &middot; The Approach" />

    <h2 class="font-display text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.88] tracking-[0.01em] text-dark-950 mb-12">
      CHANGE<br>MINDS.<br><span class="text-gold">THEN</span> SYSTEMS.
    </h2>

    <div class="track-grid grid grid-cols-1 lg:grid-cols-2 border-[1.5px] border-dark-950 mt-12">
      <div class="track-card p-8 lg:p-12 relative">
        <span class="absolute top-6 right-8 font-display text-[6rem] leading-none text-dark-950 opacity-[0.06] select-none pointer-events-none">1</span>
        <h3 class="font-display text-[1.8rem] tracking-[0.04em] text-dark-950 mb-4">Ideological Education</h3>
        <div class="text-[0.97rem] leading-[1.7] text-text space-y-4">
          <p>
            Make <Tooltip label="morality principles" description="Non-harm, non-exploitation, non-accumulation, and truthfulness — leading to fair compensation, equitable distribution, and transparent governance." href="https://atmagaming.notion.site/Morality-Principles-33b26381fbfd80aebd6bf04a29f18d34" />
            the standard norm for all human beings.
          </p>
          <p>
            Defeat groupism by extending moral consideration to all beings —
            <Tooltip label="universalism" description="Extending the humanistic approach to animals, nature, and the whole universe. Everything treated with equal respect, not exploited." href="https://atmagaming.notion.site/Universalism-Neohumanism-33b26381fbfd807e9de6d2d677ceedb6" />.
          </p>
          <p>
            Educate on the <Tooltip label="fundamental philosophy" description="The underlying nature of human desire, happiness, and suffering. Replacing dogmatic thinking with clear reasoning grounded in observable experience." href="https://atmagaming.notion.site/Fundamental-Philosophy-33926381fbfd80eaa2a2dabc1a2c57a0" />
            — providing the intellectual foundation for lasting change.
          </p>
        </div>
      </div>

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

<script lang="ts">
import SectionHeader from "@/components/ui/SectionHeader.svelte";
import Tooltip from "@/components/ui/Tooltip.svelte";
</script>

<section class="min-h-screen flex items-center px-6 lg:px-16 py-24 border-t-[1.5px] border-dark-950" id="why">
  <div class="why-inner w-full">
    <SectionHeader number="01" label="Why &middot; The Problem" />

    <h2 class="font-display text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.88] tracking-[0.01em] text-dark-950 mb-12">
      THE ROOT<br>IS <span class="text-red">IDEOLOGICAL.</span>
    </h2>

    <div class="text-[1.1rem] leading-[1.7] text-text max-w-[640px] space-y-4">
      <p>
        Poverty, war, mental health crises, environmental collapse — these share a common root: a culture built on
        <Tooltip label="misunderstanding human nature" description="Over a billion people live with a mental health disorder. Depression and anxiety alone cost the global economy $1 trillion/year. The real cause: the attempt to satisfy an infinite longing for happiness through finite material means." href="https://www.who.int/news/item/02-09-2025-over-a-billion-people-living-with-mental-health-conditions-services-require-urgent-scale-up" />.
      </p>
      <p>
        Structural fixes — policy, economics, institutions — are necessary but not sufficient.
        <Tooltip label="You cannot sustainably fix behavior without changing values" description="Every structural solution rests on the values of those who implement it. Transparent governance requires honest people. Fair economies require a culture that condemns exploitation. Without ideological foundation, reforms are temporary — reversed by the next generation with different incentives." />.
      </p>
      <p>
        Humanity <em class="italic">has</em> progressed morally: slavery abolished, human rights codified, environmental consciousness emerged. <strong class="font-medium text-dark-950">We can go further.</strong>
      </p>
    </div>
  </div>
</section>

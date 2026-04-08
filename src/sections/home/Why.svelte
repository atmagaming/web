<script lang="ts">
import ClaimRow from "@/components/ClaimRow.svelte";
import SectionHeader from "@/components/ui/SectionHeader.svelte";
</script>

<section class="snap-section min-h-screen flex items-center px-6 lg:px-16 py-24 border-t-[1.5px] border-dark-950" id="why">
  <div class="why-inner w-full">
    <SectionHeader number="01" label="Why &middot; The Problem" />

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

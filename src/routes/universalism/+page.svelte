<script lang="ts">
import ClaimRow from "@/components/ClaimRow.svelte";
</script>

<!-- Subpage Hero -->
<div class="pt-[52px] px-6 lg:px-12 pb-16 bg-dark-950 border-b-[1.5px] border-dark-950 grid grid-cols-1 lg:grid-cols-[auto_1fr] items-end min-h-[50vh]">
  <div class="hidden lg:block font-display text-[20vw] leading-[0.85] text-white/[0.06] pr-8 select-none" aria-hidden="true">II</div>
  <div class="pt-20 lg:pt-[52px] pb-2">
    <p class="font-mono text-[0.63rem] tracking-[0.22em] uppercase text-gold mb-5">Beyond Self &middot; Beyond Species</p>
    <h1 class="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.88] tracking-[0.01em] text-white mb-6">
      UNIVERSALISM &amp;<br>NEOHUMANISM
    </h1>
    <p class="text-[1.05rem] font-light leading-[1.55] text-white/45 max-w-[500px]">
      Moral consideration must extend to all beings — not only those who share our nationality, language, religion, or species.
    </p>
  </div>
</div>

<section class="px-6 lg:px-12 py-20">
  <div class="max-w-[1080px] mx-auto">
    <a href="/" class="inline-flex items-center gap-2 font-mono text-[0.67rem] tracking-[0.12em] uppercase text-text hover:text-dark-950 transition-colors mb-12">
      &larr; Back to Vision
    </a>

    <ClaimRow claim="Humans form groups. The problem arises when group identity becomes the basis for moral distinction — <em class='italic text-text'>&ldquo;us&rdquo;</em> receives compassion, <em class='italic text-text'>&ldquo;them&rdquo;</em> does not.">
      This operates at every scale: nationalism, sectarianism, racism. Even well-intentioned movements fall into it when they draw the circle of concern too narrowly.
      The common thread is sentiment — emotional attachment to a group that unconsciously limits moral consideration to those inside it.
      Geosentiment, sociosentiment: natural tendencies, but when left unexamined, they produce most organized exploitation and cruelty.
    </ClaimRow>

    <ClaimRow claim="<strong class='font-medium'>A sentiment cannot be defeated by suppression — only by a stronger sentiment.</strong> The solution is to expand moral feeling until it includes all beings." />

    <ClaimRow claim="Humanism was a step forward. But its boundary — the human species — still permits industrial exploitation of animals and ecosystems. <strong class='font-medium'>Environmental destruction and social justice are the same issue at different scales.</strong>">
      All living beings share the capacity for suffering. Human wellbeing cannot be separated from the ecosystems we inhabit.
      The scientific consensus on ecological interdependence reinforces what ethical reasoning reaches independently:
      we cannot draw moral boundaries at the species level without contradiction.
    </ClaimRow>

    <p class="mt-10 text-[0.97rem] text-text">
      For the deeper philosophical foundation:
      <a href="/philosophy" class="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-gold border-b-[1.5px] border-current pb-px hover:text-dark-950 transition-colors no-underline">Fundamental Philosophy &rarr;</a>.
    </p>
  </div>
</section>

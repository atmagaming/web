<script lang="ts">
import ClaimRow from "@/components/ClaimRow.svelte";
</script>

<!-- Subpage Hero -->
<div class="pt-[52px] px-6 lg:px-12 pb-16 bg-dark-950 border-b-[1.5px] border-dark-950 grid grid-cols-1 lg:grid-cols-[auto_1fr] items-end min-h-[50vh]">
  <div class="hidden lg:block font-display text-[20vw] leading-[0.85] text-white/[0.06] pr-8 select-none" aria-hidden="true">I</div>
  <div class="pt-20 lg:pt-[52px] pb-2">
    <p class="font-mono text-[0.63rem] tracking-[0.22em] uppercase text-gold mb-5">Foundation &middot; Behavioral Code</p>
    <h1 class="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.88] tracking-[0.01em] text-white mb-6">
      MORALITY<br>PRINCIPLES
    </h1>
    <p class="text-[1.05rem] font-light leading-[1.55] text-white/45 max-w-[500px]">
      A small set of universal behavioral norms — the practical conditions for a society that produces wellbeing for everyone.
    </p>
  </div>
</div>

<section class="px-6 lg:px-12 py-20">
  <div class="max-w-[1080px] mx-auto">
    <a href="/" class="inline-flex items-center gap-2 font-mono text-[0.67rem] tracking-[0.12em] uppercase text-text hover:text-dark-950 transition-colors mb-12">
      &larr; Back to Vision
    </a>

    <!-- Principle grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-[1.5px] border-dark-950 my-12">
      <div class="p-8 lg:p-10 border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-dark-950 relative overflow-hidden">
        <span class="absolute -bottom-2 right-2 font-display text-[7rem] text-dark-950 opacity-[0.04] leading-none select-none">I</span>
        <span class="font-display text-[1rem] tracking-[0.12em] text-gold block mb-3">I</span>
        <h3 class="font-display text-[1.5rem] tracking-[0.05em] text-dark-950 mb-4">Non-Harm</h3>
        <p class="text-[0.9rem] leading-[1.65] text-text">No intentional harm — physical, psychological, or structural. Non-harm is not passivity: when harm is occurring, inaction is complicity.</p>
      </div>
      <div class="p-8 lg:p-10 border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-dark-950 relative overflow-hidden">
        <span class="absolute -bottom-2 right-2 font-display text-[7rem] text-dark-950 opacity-[0.04] leading-none select-none">II</span>
        <span class="font-display text-[1rem] tracking-[0.12em] text-gold block mb-3">II</span>
        <h3 class="font-display text-[1.5rem] tracking-[0.05em] text-dark-950 mb-4">Non-Exploitation</h3>
        <p class="text-[0.9rem] leading-[1.65] text-text">No one should take what belongs to others. Unlimited accumulation alongside mass deprivation is itself a form of extraction.</p>
      </div>
      <div class="p-8 lg:p-10 border-b-[1.5px] sm:border-b-0 lg:border-r-[1.5px] border-dark-950 relative overflow-hidden">
        <span class="absolute -bottom-2 right-2 font-display text-[7rem] text-dark-950 opacity-[0.04] leading-none select-none">III</span>
        <span class="font-display text-[1rem] tracking-[0.12em] text-gold block mb-3">III</span>
        <h3 class="font-display text-[1.5rem] tracking-[0.05em] text-dark-950 mb-4">Truthfulness</h3>
        <p class="text-[0.9rem] leading-[1.65] text-text">Alignment of words, intentions, and actions. No gap between what you say, what you mean, and what you do.</p>
      </div>
      <div class="p-8 lg:p-10 relative overflow-hidden">
        <span class="absolute -bottom-2 right-2 font-display text-[7rem] text-dark-950 opacity-[0.04] leading-none select-none">IV</span>
        <span class="font-display text-[1rem] tracking-[0.12em] text-gold block mb-3">IV</span>
        <h3 class="font-display text-[1.5rem] tracking-[0.05em] text-dark-950 mb-4">Optimism</h3>
        <p class="text-[0.9rem] leading-[1.65] text-text">Cynicism asks nothing of you. The belief that &ldquo;this is just how things are&rdquo; removes the motivation to act. Optimism is a discipline.</p>
      </div>
    </div>

    <div class="mt-8">
      <ClaimRow claim="These principles form a compressed application of classical Yama & Niyama ethics — grounded in observable human experience, not dogma.">
        Yama & Niyama are the first two limbs of classical Ashtanga yoga — a behavioral code predating modern ethics by millennia.
        We don't invoke tradition as authority. We invoke it because these patterns hold up under empirical scrutiny:
        societies that embody these norms produce more wellbeing. See
        <a href="/philosophy" class="text-gold underline underline-offset-2 hover:no-underline">Fundamental Philosophy</a>
        for the underlying reasoning.
      </ClaimRow>
    </div>

    <p class="mt-10 text-[0.97rem] text-text">
      Without <a href="/universalism" class="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-gold border-b-[1.5px] border-current pb-px hover:text-dark-950 transition-colors no-underline">Universalism &rarr;</a>,
      even principled moral frameworks serve only a narrow group. The two must be developed together.
    </p>
  </div>
</section>

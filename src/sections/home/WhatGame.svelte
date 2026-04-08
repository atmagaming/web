<script lang="ts">
import StatRow from "@/components/ui/StatRow.svelte";
</script>

<section class="h-screen flex flex-col justify-center px-6 lg:px-16">
  <StatRow
    stats={[
      { value: "3.6", unit: "B", label: "Gamers worldwide" },
      { value: "$189", unit: "B", label: "Market 2025" },
      { value: "42", unit: "%", label: "Of global population" },
      { value: "18", unit: "yr", label: "Avg. player tenure" },
    ]}
  />

  <!-- Game block -->
  <div class="bg-dark-950 p-10 lg:p-14 mt-16">
    <span class="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-gold block mb-8">First Title</span>

    <div class="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.9] tracking-[0.03em] text-white mb-6">
      HYPOCRISY
    </div>

    <p class="text-[1.1rem] italic font-light text-white/60 leading-[1.6] max-w-[580px] mb-8">
      A story about optimism in a heroic fight for freedom — defying inner hatred and finding peace in a world distorted
      by war.
    </p>

    <div class="flex gap-3 flex-wrap items-center mb-10">
      <span
        class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1"
        >Story-Rich</span
      >
      <span
        class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1"
        >Roguelike RPG</span
      >
      <span
        class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1"
        >Sci-Fantasy</span
      >
      <span
        class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1 inline-flex items-center gap-1.5"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M11.979 0C5.678 0 .511 4.86.022 10.944l6.432 2.658a3.387 3.387 0 0 1 1.912-.588c.063 0 .125.002.188.006l2.861-4.142V8.83a4.528 4.528 0 0 1 4.524-4.524 4.528 4.528 0 0 1 4.524 4.524 4.528 4.528 0 0 1-4.524 4.524h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396a3.406 3.406 0 0 1-3.328-2.734L.533 15.26A12.018 12.018 0 0 0 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zM7.54 18.21l-1.473-.61a2.541 2.541 0 0 0 4.886-.862 2.542 2.542 0 0 0-2.54-2.541c-.127 0-.254.01-.378.028l1.523.63a1.868 1.868 0 0 1-1.432 3.45l-.586-.095zm8.399-6.238a3.02 3.02 0 0 0 3.016-3.016 3.023 3.023 0 0 0-3.016-3.016 3.023 3.023 0 0 0-3.016 3.016 3.02 3.02 0 0 0 3.016 3.016z"
          /></svg
        >
        Steam
      </span>
      <span
        class="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/40 border border-white/15 px-3 py-1 inline-flex items-center gap-1.5"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          ><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line
            x1="8"
            y1="21"
            x2="16"
            y2="21"
          /><line x1="12" y1="17" x2="12" y2="21" /></svg
        >
        PC, Mac, Consoles
      </span>
    </div>

    <a
      href="/games/hypocrisy"
      class="font-mono text-[0.75rem] tracking-[0.12em] uppercase text-dark-950 bg-white px-8 py-3.5 hover:bg-gold hover:text-white transition-colors inline-flex items-center gap-2.5 no-underline"
      >Learn more &rarr;</a
    >
  </div>
</section>

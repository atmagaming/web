<script lang="ts">
interface Props {
  index: number;
  roman: string;
  tag: string;
  title: string;
  description: string;
}

let { index, roman, tag, title, description }: Props = $props();

const padded = $derived(String(index + 1).padStart(2, "0"));
</script>

<article class="feature-row group relative">
  <div class="feature-rule absolute inset-x-6 lg:inset-x-16 top-0 h-px bg-linear-to-r from-accent-500/60 via-white/10 to-transparent"></div>

  <div class="row-grid px-6 lg:px-16 py-10 lg:py-14 grid grid-cols-[auto_1fr] lg:grid-cols-[9rem_1fr] gap-6 lg:gap-12 items-start">
    <div class="feature-numeral relative select-none">
      <span class="numeral-glyph font-display text-7xl md:text-8xl lg:text-[9rem] leading-[0.8] text-accent-500/90">
        {roman}
      </span>
    </div>

    <div class="min-w-0">
      <div class="feature-reveal flex items-center gap-3 mb-4 lg:mb-5">
        <span class="font-mono text-[9px] tracking-[0.4em] uppercase text-accent-500/80">{tag}</span>
        <span class="h-px w-8 bg-accent-500/40"></span>
        <span class="font-mono text-[9px] tracking-[0.35em] uppercase text-white/35">
          Pillar · {padded} / 04
        </span>
      </div>
      <h3 class="feature-reveal font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[0.95] mb-5 lg:mb-6 max-w-3xl">
        {title}
      </h3>
      <p class="feature-reveal text-base md:text-lg text-white/55 leading-relaxed max-w-2xl">
        {description}
      </p>
    </div>
  </div>
</article>

<style>
  .feature-row {
    transition: background-color 400ms ease;

    &:hover {
      background-color: rgba(212, 160, 23, 0.1);

      .numeral-glyph {
        color: rgb(212, 160, 23);
      }
    }
  }

  .numeral-glyph {
    display: inline-block;
    transition: transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1), color 400ms ease;
  }
</style>

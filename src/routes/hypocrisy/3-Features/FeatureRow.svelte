<script lang="ts">
const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"] as const;

interface Props {
  index: number;
  total: number;
  tag: string;
  title: string;
  description: string;
}

const { index, total, tag, title, description }: Props = $props();

const roman = $derived(ROMAN_NUMERALS[index]);
const padded = $derived(String(index + 1).padStart(2, "0"));
const totalPadded = $derived(String(total).padStart(2, "0"));
</script>

<article class="feature-row">
  <div class="feature-rule"></div>

  <div class="row-grid page-x">
    <div class="feature-numeral">
      <span class="numeral-glyph font-display">{roman}</span>
    </div>

    <div class="feature-content">
      <div class="feature-reveal feature-meta">
        <span class="tag">{tag}</span>
        <span class="rule-short"></span>
        <span class="pillar-index">Pillar · {padded} / {totalPadded}</span>
      </div>
      <h3 class="feature-reveal feature-title font-display">{title}</h3>
      <p class="feature-reveal feature-description">{description}</p>
    </div>
  </div>
</article>

<style src="./FeatureRow.css"></style>

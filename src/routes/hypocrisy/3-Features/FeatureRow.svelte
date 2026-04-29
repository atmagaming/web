<script lang="ts">
import { ROMAN_NUMERALS } from "@/lib/utils";

const { index, tag, title, description }: { index: number; tag: string; title: string; description: string } = $props();

if (index < 0 || index >= ROMAN_NUMERALS.length)
  throw new Error(`FeatureRow index ${index} out of range (0-${ROMAN_NUMERALS.length - 1})`);

const roman = $derived(ROMAN_NUMERALS[index]);
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
      </div>
      <h3 class="feature-reveal feature-title font-display">{title}</h3>
      <p class="feature-reveal feature-description">{description}</p>
    </div>
  </div>
</article>

<style src="./FeatureRow.css"></style>

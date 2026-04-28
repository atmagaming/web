<script lang="ts">
interface Props {
  index: number;
  roman: string;
  tag: string;
  title: string;
  description: string;
}

const { index, roman, tag, title, description }: Props = $props();

const padded = $derived(String(index + 1).padStart(2, "0"));
</script>

<article class="feature-row">
  <div class="feature-rule"></div>

  <div class="row-grid">
    <div class="feature-numeral">
      <span class="numeral-glyph font-display">{roman}</span>
    </div>

    <div class="feature-content">
      <div class="feature-reveal feature-meta">
        <span class="tag">{tag}</span>
        <span class="rule-short"></span>
        <span class="pillar-index">Pillar · {padded} / 04</span>
      </div>
      <h3 class="feature-reveal feature-title font-display">{title}</h3>
      <p class="feature-reveal feature-description">{description}</p>
    </div>
  </div>
</article>

<style>
  .feature-row {
    position: relative;
    transition: background-color 400ms ease;

    &:hover {
      background-color: rgba(212, 160, 23, 0.1);

      .numeral-glyph {
        color: rgb(212, 160, 23);
      }
    }
  }

  .feature-rule {
    position: absolute;
    top: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 1px;
    background: linear-gradient(to right, rgba(184, 134, 11, 0.6), rgba(255, 255, 255, 0.1), transparent);

    @media (min-width: 1024px) {
      left: 4rem;
      right: 4rem;
    }
  }

  .row-grid {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: start;
    gap: 1.5rem;
    padding: 2.5rem 1.5rem;

    @media (min-width: 1024px) {
      grid-template-columns: 9rem 1fr;
      gap: 3rem;
      padding: 3.5rem 4rem;
    }
  }

  .feature-numeral {
    position: relative;
    user-select: none;
  }

  .numeral-glyph {
    display: inline-block;
    color: rgba(184, 134, 11, 0.9);
    font-size: 4.5rem;
    line-height: 0.8;
    transition: transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1), color 400ms ease;

    @media (min-width: 768px) {
      font-size: 6rem;
    }

    @media (min-width: 1024px) {
      font-size: 9rem;
    }
  }

  .feature-content {
    min-width: 0;
  }

  .feature-meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    font-family: var(--font-mono);
    text-transform: uppercase;

    @media (min-width: 1024px) {
      margin-bottom: 1.25rem;
    }
  }

  .tag {
    font-size: 9px;
    letter-spacing: 0.4em;
    color: rgba(184, 134, 11, 0.8);
  }

  .rule-short {
    width: 2rem;
    height: 1px;
    background: rgba(184, 134, 11, 0.4);
  }

  .pillar-index {
    font-size: 9px;
    letter-spacing: 0.35em;
    color: rgba(255, 255, 255, 0.35);
  }

  .feature-title {
    max-width: 48rem;
    margin-bottom: 1.25rem;
    color: white;
    font-size: 2.25rem;
    line-height: 0.95;

    @media (min-width: 768px) {
      font-size: 3rem;
    }

    @media (min-width: 1024px) {
      margin-bottom: 1.5rem;
      font-size: 3.75rem;
    }
  }

  .feature-description {
    max-width: 32rem;
    color: rgba(255, 255, 255, 0.55);
    font-size: 1rem;
    line-height: 1.625;

    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  }
</style>

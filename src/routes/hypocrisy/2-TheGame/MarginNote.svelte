<script lang="ts">
const { label, value }: { label: string; value: string } = $props();
</script>

<div class="margin-note">
  <span class="dash"></span>
  <div>
    <p class="label">{label}</p>
    <p class="value">{value}</p>
  </div>
</div>

<style>
  .margin-note {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .dash {
    margin-top: 6px;
    width: 1rem;
    height: 1px;
    background: rgba(184, 134, 11, 0.5);
  }

  .label,
  .value {
    font-family: var(--font-mono);
    text-transform: uppercase;
  }

  .label {
    margin-bottom: 0.25rem;
    font-size: 9px;
    letter-spacing: 0.35em;
    color: rgba(255, 255, 255, 0.4);
  }

  .value {
    font-size: 10px;
    letter-spacing: 0.2em;
    color: rgba(212, 160, 23, 0.8);
  }
</style>

<script lang="ts">
import SectionHeader from "@/components/ui/SectionHeader.svelte";
import Tooltip from "@/components/ui/Tooltip.svelte";
import { t } from "@/lib/i18n/t";
</script>

<section class="min-h-screen flex items-center px-6 lg:px-16 py-24 border-t-[1.5px] border-dark-950" id="why">
  <div class="why-inner w-full">
    <SectionHeader number={t("home.why.number")} label={t("home.why.label")} />

    <h2 class="font-display text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.88] tracking-[0.01em] text-dark-950 mb-12">
      {t("home.why.title1")}<br>{t("home.why.title2")} <span class="text-red">{t("home.why.title3")}</span>
    </h2>

    <div class="text-[1.1rem] leading-[1.7] text-text max-w-[640px] space-y-4">
      <p>
        {t("home.why.paragraph1prefix")}
        <Tooltip label={t("home.why.tooltipMisunderstanding.label")} description={t("home.why.tooltipMisunderstanding.description")} href="https://www.who.int/news/item/02-09-2025-over-a-billion-people-living-with-mental-health-conditions-services-require-urgent-scale-up" />{t("home.why.paragraph1suffix")}
      </p>
      <p>
        {t("home.why.paragraph2prefix")}
        <Tooltip label={t("home.why.tooltipValues.label")} description={t("home.why.tooltipValues.description")} />.
      </p>
      <p>
        {t("home.why.paragraph3prefix")} <em class="italic">{t("home.why.paragraph3has")}</em> {t("home.why.paragraph3middle")} <strong class="font-medium text-dark-950">{t("home.why.paragraph3bold")}</strong>
      </p>
    </div>
  </div>
</section>

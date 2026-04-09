<script lang="ts">
import SectionHeader from "@/components/ui/SectionHeader.svelte";
import Tooltip from "@/components/ui/Tooltip.svelte";
import { t } from "@/lib/i18n/t";
</script>

<section class="min-h-screen flex items-center px-6 lg:px-16 py-24 border-t-[1.5px] border-dark-950 bg-surface">
  <div class="how-inner w-full">
    <SectionHeader number={t("home.how.number")} label={t("home.how.label")} />

    <h2 class="font-display text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.88] tracking-[0.01em] text-dark-950 mb-12">
      {t("home.how.title1")}<br>{t("home.how.title2")}<br><span class="text-gold">{t("home.how.title3")}</span> {t("home.how.title4")}
    </h2>

    <div class="track-grid grid grid-cols-1 lg:grid-cols-2 border-[1.5px] border-dark-950 mt-12">
      <div class="track-card p-8 lg:p-12 relative">
        <span class="absolute top-6 right-8 font-display text-[6rem] leading-none text-dark-950 opacity-[0.06] select-none pointer-events-none">1</span>
        <h3 class="font-display text-[1.8rem] tracking-[0.04em] text-dark-950 mb-4">{t("home.how.track1title")}</h3>
        <div class="text-[0.97rem] leading-[1.7] text-text space-y-4">
          <p>
            {t("home.how.track1morality.prefix")} <Tooltip label={t("home.how.track1morality.label")} description={t("home.how.track1morality.description")} href="https://atmagaming.notion.site/Morality-Principles-33b26381fbfd80aebd6bf04a29f18d34" />
            {t("home.how.track1morality.suffix")}
          </p>
          <p>
            {t("home.how.track1universalism.prefix")}
            <Tooltip label={t("home.how.track1universalism.label")} description={t("home.how.track1universalism.description")} href="https://atmagaming.notion.site/Universalism-Neohumanism-33b26381fbfd807e9de6d2d677ceedb6" />.
          </p>
          <p>
            {t("home.how.track1philosophy.prefix")} <Tooltip label={t("home.how.track1philosophy.label")} description={t("home.how.track1philosophy.description")} href="https://atmagaming.notion.site/Fundamental-Philosophy-33926381fbfd80eaa2a2dabc1a2c57a0" />
            {t("home.how.track1philosophy.suffix")}
          </p>
        </div>
      </div>

      <div class="track-card p-8 lg:p-12 relative border-t-[1.5px] lg:border-t-0 lg:border-l-[1.5px] border-dark-950">
        <span class="absolute top-6 right-8 font-display text-[6rem] leading-none text-dark-950 opacity-[0.06] select-none pointer-events-none">2</span>
        <h3 class="font-display text-[1.8rem] tracking-[0.04em] text-dark-950 mb-4">{t("home.how.track2title")}</h3>
        <div class="text-[0.97rem] leading-[1.7] text-text space-y-4">
          <p>{t("home.how.track2text")}</p>
          <p><strong class="font-medium text-dark-950">{t("home.how.track2bold")}</strong>{t("home.how.track2suffix")}</p>
        </div>
      </div>
    </div>
  </div>
</section>

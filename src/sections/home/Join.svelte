<script lang="ts">
import ContactForm from "@/components/ContactForm.svelte";
import SectionHeader from "@/components/ui/SectionHeader.svelte";
import { t } from "@/lib/i18n/t";

let activeCategory: "partner" | "investor" | "team" | null = $state(null);

function toggleCategory(category: "partner" | "investor" | "team") {
  activeCategory = activeCategory === category ? null : category;
}
</script>

<section class="min-h-screen flex items-center px-6 lg:px-16 py-24 border-t-[1.5px] border-dark-950 bg-surface" id="join">
  <div class="join-inner w-full">
    <SectionHeader number={t("home.join.number")} label={t("home.join.label")} />

    <h2 class="font-display text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.88] tracking-[0.01em] text-dark-950 mb-12">
      {t("home.join.title1")}<br><span class="text-gold">{t("home.join.title2")}</span>
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div class="grid grid-cols-1 md:grid-cols-3 border-[1.5px] border-dark-950">
        <div class="p-8 lg:p-10">
          <h3 class="font-display text-[1.4rem] tracking-[0.04em] text-dark-950 mb-3">{t("home.join.partners.title")}</h3>
          <p class="text-[0.92rem] leading-[1.65] text-text mb-6">
            {t("home.join.partners.text")}
          </p>
          <button onclick={() => toggleCategory("partner")} class="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-gold hover:text-dark-950 transition-colors bg-none border-none p-0 cursor-pointer">{t("home.join.partners.cta")} &rarr;</button>
        </div>
        <div class="p-8 lg:p-10 border-t-[1.5px] md:border-t-0 md:border-l-[1.5px] border-dark-950">
          <h3 class="font-display text-[1.4rem] tracking-[0.04em] text-dark-950 mb-3">{t("home.join.investors.title")}</h3>
          <p class="text-[0.92rem] leading-[1.65] text-text mb-6">
            {t("home.join.investors.text")}
          </p>
          <button onclick={() => toggleCategory("investor")} class="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-gold hover:text-dark-950 transition-colors bg-none border-none p-0 cursor-pointer">{t("home.join.investors.cta")} &rarr;</button>
        </div>
        <div class="p-8 lg:p-10 border-t-[1.5px] md:border-t-0 md:border-l-[1.5px] border-dark-950">
          <h3 class="font-display text-[1.4rem] tracking-[0.04em] text-dark-950 mb-3">{t("home.join.team.title")}</h3>
          <p class="text-[0.92rem] leading-[1.65] text-text mb-6">
            {t("home.join.team.text")}
          </p>
          <a href="/games/hypocrisy#careers" class="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-gold hover:text-dark-950 transition-colors no-underline">{t("home.join.team.cta")} &rarr;</a>
        </div>
      </div>

      {#if activeCategory && activeCategory !== "team"}
        <div class="border-[1.5px] border-dark-950 p-8 lg:p-10">
          <ContactForm category={activeCategory} />
        </div>
      {/if}
    </div>
  </div>
</section>

<script lang="ts">
import ContactFormModal from "@/components/ContactFormModal.svelte";
import Button from "@/components/ui/Button.svelte";
import SectionHeader from "@/components/ui/SectionHeader.svelte";
import { t } from "@/lib/i18n/t";

let modalOpen = $state(false);

function openModal() {
  modalOpen = true;
}

function closeModal() {
  modalOpen = false;
}
</script>

<section class="min-h-screen flex items-center px-6 lg:px-16 py-24 border-t-[1.5px] border-dark-950 bg-surface" id="join">
  <div class="join-inner w-full">
    <SectionHeader number={t("home.join.number")} label={t("home.join.label")} />

    <h2 class="font-display text-[clamp(3rem,7.5vw,7.5rem)] leading-[0.88] tracking-[0.01em] text-dark-950 mb-12">
      {t("home.join.title1")}<br><span class="text-gold">{t("home.join.title2")}</span>
    </h2>

    <div class="space-y-8">
      <div class="grid grid-cols-1 md:grid-cols-3 border-[1.5px] border-dark-950">
        <div class="p-8 lg:p-10">
          <h3 class="font-display text-[1.4rem] tracking-[0.04em] text-dark-950 mb-3">{t("home.join.partners.title")}</h3>
          <p class="text-[0.92rem] leading-[1.65] text-text">
            {t("home.join.partners.text")}
          </p>
        </div>
        <div class="p-8 lg:p-10 border-t-[1.5px] md:border-t-0 md:border-l-[1.5px] border-dark-950">
          <h3 class="font-display text-[1.4rem] tracking-[0.04em] text-dark-950 mb-3">{t("home.join.investors.title")}</h3>
          <p class="text-[0.92rem] leading-[1.65] text-text">
            {t("home.join.investors.text")}
          </p>
        </div>
        <div class="p-8 lg:p-10 border-t-[1.5px] md:border-t-0 md:border-l-[1.5px] border-dark-950">
          <h3 class="font-display text-[1.4rem] tracking-[0.04em] text-dark-950 mb-3">{t("home.join.team.title")}</h3>
          <p class="text-[0.92rem] leading-[1.65] text-text">
            {t("home.join.team.text")}
          </p>
        </div>
      </div>

      <div class="flex justify-center">
        <Button type="button" onclick={openModal} variant="outline">
          Get in Touch
        </Button>
      </div>
    </div>
  </div>
</section>

<ContactFormModal open={modalOpen} onClose={closeModal} />


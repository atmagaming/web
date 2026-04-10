<script lang="ts">
import Footer from "@/components/Footer.svelte";
import Button from "@/components/ui/Button.svelte";
import { t } from "@/lib/i18n/t";
import { fitText } from "@/lib/utils";

interface Props {
  showMissionButton?: boolean;
}

const { showMissionButton = true }: Props = $props();
</script>

<section class="min-h-screen flex flex-col closing-inner bg-dark-950 px-6 lg:px-16 border-t-[1.5px] border-dark-950">
  <div class="flex-1 flex flex-col items-center justify-center py-24 text-center">
    <p use:fitText class="font-display text-[clamp(2rem,5vw,5rem)] leading-none text-white tracking-[0.02em] max-w-[900px] mx-auto mb-10">
      {t("home.closing.line1")} <span class="text-gold">{t("home.closing.line1accent")}</span><br>
      {t("home.closing.line2")}<br>
      {t("home.closing.line3")}
    </p>
    {#if showMissionButton}
      <div class="flex gap-4 justify-center flex-wrap">
        <Button
          variant="primary"
          href="https://atmagaming.notion.site/Vision-dc4f14be61f741c38881701ac9c2ab74"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white text-dark-950 border-white hover:bg-gold hover:text-white hover:border-gold"
        >{t("home.closing.missionStatement")} &nearr;</Button>
      </div>
    {/if}
  </div>

  <Footer />
</section>

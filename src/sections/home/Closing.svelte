<script lang="ts">
import Button from "@/components/ui/Button.svelte";
import { t } from "@/lib/i18n/t";
</script>

<section class="min-h-screen flex flex-col closing-inner bg-dark-950 px-6 lg:px-16 border-t-[1.5px] border-dark-950">
  <div class="flex-1 flex flex-col items-center justify-center py-24 text-center">
    <p class="font-display text-[clamp(2rem,5vw,5rem)] leading-none text-white tracking-[0.02em] max-w-[900px] mx-auto mb-10">
      {t("home.closing.line1")} <span class="text-gold">{t("home.closing.line1accent")}</span><br>
      {t("home.closing.line2")}<br>
      {t("home.closing.line3")}
    </p>
    <div class="flex gap-4 justify-center flex-wrap">
      <Button
        variant="primary"
        href="https://atmagaming.notion.site/Vision-dc4f14be61f741c38881701ac9c2ab74"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-white text-dark-950 border-white hover:bg-gold hover:text-white hover:border-gold"
      >{t("home.closing.missionStatement")} &nearr;</Button>
    </div>
  </div>

  <footer class="py-8 flex flex-col md:flex-row items-center justify-between gap-3 border-white/10">
    <span class="font-display text-2xl tracking-[0.15em] text-white">ATMA</span>
    <span class="font-mono text-[0.6rem] tracking-widest uppercase text-white/40">
      {t("home.closing.footer")}
    </span>
  </footer>
</section>

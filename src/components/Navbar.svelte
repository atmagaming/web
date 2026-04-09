<script lang="ts">
import LanguageSwitcher from "@/components/LanguageSwitcher.svelte";
import { t } from "@/lib/i18n/t";
import { cn } from "@/lib/utils";
import { page } from "$app/stores";

let isGamePage = $derived($page.url.pathname.startsWith("/games/"));
</script>

<nav
  class={cn(
    "fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-6 lg:px-16 h-[52px] backdrop-blur-sm",
    isGamePage
      ? "bg-[#050507]/80 border-b border-white/10"
      : "bg-white/[0.96] border-b-[1.5px] border-dark-950",
  )}
>
  <a
    href="/"
    class={cn(
      "font-display text-[1.4rem] tracking-[0.18em] transition-colors no-underline",
      isGamePage ? "text-white hover:text-gold" : "text-dark-950 hover:text-gold",
    )}
  >ATMA</a>

  <div class="hidden md:flex items-center gap-1">
    {#if isGamePage}
      <a href="/" class="font-mono text-[0.67rem] tracking-[0.1em] uppercase text-white/50 px-3.5 py-1.5 hover:text-white transition-colors no-underline">&larr; {t("nav.backAbout")}</a>
    {:else}
      <a href="/" class={cn("font-mono text-[0.67rem] tracking-[0.1em] uppercase px-3.5 py-1.5 transition-all no-underline", $page.url.pathname === '/' ? 'text-white bg-dark-950' : 'text-text hover:text-dark-950 hover:bg-surface')}>{t("nav.about")}</a>
      <a href="/games/hypocrisy" class={cn("font-mono text-[0.67rem] tracking-[0.1em] uppercase px-3.5 py-1.5 transition-all no-underline", $page.url.pathname.startsWith('/games') ? 'text-white bg-dark-950' : 'text-text hover:text-dark-950 hover:bg-surface')}>{t("nav.ourGames")}</a>
    {/if}
    <div class={isGamePage ? "[&_button]:text-white/50 [&_button]:hover:text-white [&_button.text-red]:text-red" : ""}>
      <LanguageSwitcher />
    </div>
    <button
      type="button"
      class="font-mono text-[0.67rem] tracking-[0.1em] uppercase text-white bg-red px-4 py-1.5 ml-3 hover:bg-[#9e1400] transition-colors cursor-pointer border-none"
      onclick={() => {
        window.dispatchEvent(new CustomEvent('scrollto', { detail: 'join' }));
      }}
    >{t("nav.getInTouch")} &darr;</button>
  </div>
</nav>

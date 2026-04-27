<script lang="ts">
import { onMount } from "svelte";
// import LanguageSwitcher from "@/components/LanguageSwitcher.svelte";
import { t } from "@/lib/i18n/t";
import { modalOpen } from "@/lib/stores";
import { cn } from "@/lib/utils";
import { page } from "$app/stores";

let isGamePage = $derived($page.url.pathname.startsWith("/hypocrisy"));
let mobileOpen = $state(false);
let scrollHidden = $state(false);
let lastScrollY = 0;
let programmaticScroll = false;
let programmaticTimeout: ReturnType<typeof setTimeout> | undefined;

let hidden = $derived(scrollHidden || $modalOpen);

function closeMobile() {
  mobileOpen = false;
}

function scrollToId(id: string) {
  const target = document.querySelector(`#${id}`);
  if (!target) return;

  programmaticScroll = true;
  if (programmaticTimeout) clearTimeout(programmaticTimeout);

  const finish = () => {
    programmaticScroll = false;
    lastScrollY = window.scrollY;
    window.removeEventListener("scrollend", finish);
  };

  window.addEventListener("scrollend", finish, { once: true });
  programmaticTimeout = setTimeout(finish, 1500);

  target.scrollIntoView({ behavior: "smooth" });
}

onMount(() => {
  function onScroll() {
    const y = window.scrollY;
    if (programmaticScroll) {
      lastScrollY = y;
      return;
    }
    if (y < 52) scrollHidden = false;
    else scrollHidden = y > lastScrollY;
    lastScrollY = y;
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
});
</script>

<nav
  class={cn(
    "fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-6 lg:px-16 h-[52px] backdrop-blur-sm transition-transform duration-300",
    hidden && !mobileOpen && "-translate-y-full",
    isGamePage
      ? "bg-[#03050a]/30 border-b border-white/5 backdrop-blur-md"
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

  <!-- Desktop nav -->
  <div class="hidden md:flex items-center gap-1">
    {#if isGamePage}
      {#each [{ id: "about", label: t("nav.about") }, { id: "roadmap", label: t("nav.roadmap") }, { id: "development", label: t("nav.development") }] as link (link.id)}
        <button type="button" class="font-mono text-[0.67rem] tracking-[0.1em] uppercase text-white/50 px-3.5 py-1.5 hover:text-white transition-colors no-underline bg-transparent border-none cursor-pointer" onclick={() => scrollToId(link.id)}>{link.label}</button>
      {/each}
      <button
        type="button"
        class="font-mono text-[0.67rem] tracking-[0.1em] uppercase text-white bg-red px-4 py-1.5 ml-3 hover:bg-[#9e1400] transition-colors cursor-pointer border-none"
        onclick={() => scrollToId('join')}
      >{t("nav.join")}</button>
    {:else}
      <a href="/" class={cn("font-mono text-[0.67rem] tracking-[0.1em] uppercase px-3.5 py-1.5 transition-all no-underline", $page.url.pathname === '/' ? 'text-white bg-dark-950' : 'text-text hover:text-dark-950 hover:bg-surface')}>{t("nav.about")}</a>
      <a href="/hypocrisy" class={cn("font-mono text-[0.67rem] tracking-[0.1em] uppercase px-3.5 py-1.5 transition-all no-underline", $page.url.pathname.startsWith('/games') ? 'text-white bg-dark-950' : 'text-text hover:text-dark-950 hover:bg-surface')}>{t("nav.ourGames")}</a>
    {/if}
    <!-- Temporarily hide language -->
    <!-- <div class={isGamePage ? "[&_button]:text-white/50 [&_button]:hover:text-white [&_button.text-red]:text-red" : ""}>
      <LanguageSwitcher />
    </div> -->
    {#if !isGamePage}
      <button
        type="button"
        class="font-mono text-[0.67rem] tracking-[0.1em] uppercase text-white bg-red px-4 py-1.5 ml-3 hover:bg-[#9e1400] transition-colors cursor-pointer border-none"
        onclick={() => {
          window.dispatchEvent(new CustomEvent('scrollto', { detail: 'join' }));
        }}
      >{t("nav.getInTouch")} &darr;</button>
    {/if}
  </div>

  <!-- Mobile hamburger -->
  <button
    type="button"
    class={cn(
      "md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 bg-transparent border-none cursor-pointer p-0",
    )}
    onclick={() => (mobileOpen = !mobileOpen)}
    aria-label="Toggle menu"
  >
    <span class={cn("block w-5 h-[1.5px] transition-all origin-center", isGamePage ? "bg-white" : "bg-dark-950", mobileOpen && "translate-y-[6.5px] rotate-45")}></span>
    <span class={cn("block w-5 h-[1.5px] transition-all", isGamePage ? "bg-white" : "bg-dark-950", mobileOpen && "opacity-0")}></span>
    <span class={cn("block w-5 h-[1.5px] transition-all origin-center", isGamePage ? "bg-white" : "bg-dark-950", mobileOpen && "-translate-y-[6.5px] -rotate-45")}></span>
  </button>
</nav>

<!-- Mobile menu overlay -->
{#if mobileOpen}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class={cn(
      "fixed inset-0 top-[52px] z-[499] md:hidden flex flex-col items-center pt-8 gap-4 backdrop-blur-md",
      isGamePage ? "bg-[#050507]/95" : "bg-white/95",
    )}
    onclick={closeMobile}
    onkeydown={(e) => { if (e.key === "Escape") closeMobile(); }}
  >
    {#if isGamePage}
      {#each [{ id: "about", label: t("nav.about") }, { id: "roadmap", label: t("nav.roadmap") }, { id: "development", label: t("nav.development") }] as link (link.id)}
        <button type="button" class="font-mono text-[0.8rem] tracking-[0.1em] uppercase text-white/70 px-4 py-2 hover:text-white transition-colors bg-transparent border-none cursor-pointer" onclick={() => { closeMobile(); scrollToId(link.id); }}>{link.label}</button>
      {/each}
      <button
        type="button"
        class="font-mono text-[0.8rem] tracking-[0.1em] uppercase text-white bg-red px-6 py-2.5 hover:bg-[#9e1400] transition-colors cursor-pointer border-none"
        onclick={() => {
          closeMobile();
          scrollToId('join');
        }}
      >{t("nav.join")}</button>
    {:else}
      <a href="/" onclick={closeMobile} class={cn("font-mono text-[0.8rem] tracking-[0.1em] uppercase px-4 py-2 transition-all no-underline", $page.url.pathname === '/' ? 'text-white bg-dark-950' : 'text-text hover:text-dark-950')}>{t("nav.about")}</a>
      <a href="/games/hypocrisy" onclick={closeMobile} class={cn("font-mono text-[0.8rem] tracking-[0.1em] uppercase px-4 py-2 transition-all no-underline", $page.url.pathname.startsWith('/games') ? 'text-white bg-dark-950' : 'text-text hover:text-dark-950')}>{t("nav.ourGames")}</a>
      <!-- Temporarily hide language switcher -->
      <!-- <div class={isGamePage ? "[&_button]:text-white/50 [&_button]:hover:text-white [&_button.text-red]:text-red" : ""}>
        <LanguageSwitcher />
      </div> -->
      <button
        type="button"
        class="font-mono text-[0.8rem] tracking-[0.1em] uppercase text-white bg-red px-6 py-2.5 mt-2 hover:bg-[#9e1400] transition-colors cursor-pointer border-none"
        onclick={() => {
          closeMobile();
          window.dispatchEvent(new CustomEvent('scrollto', { detail: 'join' }));
        }}
      >{t("nav.getInTouch")} &darr;</button>
    {/if}
  </div>
{/if}

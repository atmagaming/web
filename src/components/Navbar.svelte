<script lang="ts">
import { cn } from "@/lib/utils";
import { page } from "$app/stores";

let isGamePage = $derived($page.url.pathname.startsWith("/games/"));
</script>

<nav
  class={cn(
    "fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-6 lg:px-12 h-[52px] backdrop-blur-sm",
    isGamePage
      ? "bg-[#050507]/80 border-b border-white/10"
      : "bg-white/[0.96] border-b-[1.5px] border-dark-950",
  )}
>
  <a
    href="/"
    class={cn(
      "font-display text-[1.4rem] tracking-[0.18em] transition-colors",
      isGamePage ? "text-white hover:text-gold" : "text-dark-950 hover:text-gold",
    )}
  >ATMA</a>

  <div class="hidden md:flex items-center gap-0.5">
    {#if isGamePage}
      <a href="/" class="font-mono text-[0.67rem] tracking-[0.1em] uppercase text-white/50 px-3.5 py-1.5 hover:text-white transition-colors">&larr; Vision</a>
    {:else}
      <a href="/" class={cn("font-mono text-[0.67rem] tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-sm transition-all", $page.url.pathname === '/' ? 'text-white bg-dark-950' : 'text-text hover:text-dark-950 hover:bg-surface')}>Vision</a>
      <a href="/morality" class={cn("font-mono text-[0.67rem] tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-sm transition-all", $page.url.pathname === '/morality' ? 'text-white bg-dark-950' : 'text-text hover:text-dark-950 hover:bg-surface')}>Morality</a>
      <a href="/universalism" class={cn("font-mono text-[0.67rem] tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-sm transition-all", $page.url.pathname === '/universalism' ? 'text-white bg-dark-950' : 'text-text hover:text-dark-950 hover:bg-surface')}>Universalism</a>
      <a href="/philosophy" class={cn("font-mono text-[0.67rem] tracking-[0.1em] uppercase px-3.5 py-1.5 rounded-sm transition-all", $page.url.pathname === '/philosophy' ? 'text-white bg-dark-950' : 'text-text hover:text-dark-950 hover:bg-surface')}>Philosophy</a>
    {/if}
    <a
      href="https://atmagaming.notion.site/Vision-dc4f14be61f741c38881701ac9c2ab74"
      target="_blank"
      rel="noopener noreferrer"
      class="font-mono text-[0.67rem] tracking-[0.1em] uppercase text-white bg-red px-4 py-1.5 ml-3 hover:bg-[#9e1400] transition-colors"
    >Full Vision &nearr;</a>
  </div>
</nav>

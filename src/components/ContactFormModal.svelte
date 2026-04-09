<script lang="ts">
import Button from "@/components/ui/Button.svelte";
import { cn } from "@/lib/utils";

let {
  open = false,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
} = $props();

let loading = $state(false);
let submitted = $state(false);
let error = $state<string | null>(null);

let formData = $state({
  name: "",
  email: "",
  message: "",
});

async function handleSubmit(e: Event) {
  e.preventDefault();
  loading = true;
  error = null;

  try {
    const response = await fetch("https://api.atmagaming.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.message ?? "Failed to submit form");
    }

    submitted = true;
    setTimeout(() => {
      formData = { name: "", email: "", message: "" };
      submitted = false;
      onClose();
    }, 1500);
  } catch (e) {
    error = e instanceof Error ? e.message : "Something went wrong";
  } finally {
    loading = false;
  }
}

function handleBackdropClick(e: MouseEvent) {
  if (e.target === e.currentTarget) onClose();
}
</script>

<!-- Backdrop -->
<div
  class={cn(
    "fixed inset-0 z-40 transition-all duration-500 ease-out",
    open
      ? "bg-black/50 backdrop-blur-sm"
      : "bg-black/0 backdrop-blur-none pointer-events-none",
  )}
  onclick={handleBackdropClick}
/>

<!-- Modal -->
<div
  class={cn(
    "fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-300 ease-out pointer-events-none",
    open ? "opacity-100 pointer-events-auto" : "opacity-0",
  )}
>
  <div
    class={cn(
      "w-full max-w-2xl bg-surface border-[1.5px] border-dark-950 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden transition-transform duration-300 ease-out",
      open ? "scale-100" : "scale-95",
    )}
  >
    <!-- Header with close button -->
    <div class="flex items-center justify-between px-8 py-6">
      <h2 class="font-display text-2xl tracking-[0.04em] text-dark-950">
        Get in Touch
      </h2>
      <button
        onclick={onClose}
        type="button"
        class="text-dark-950/60 hover:text-dark-950 transition-colors text-3xl leading-none font-thin p-2 cursor-pointer"
        aria-label="Close"
      >
        ×
      </button>
    </div>

    <!-- Contact Links -->
    <div class="flex items-center gap-6 px-8 py-4 border-b-[1.5px] border-dark-950/20">
      <a
        href="mailto:ceo@atmagaming.com"
        class="flex items-center gap-2 text-dark-950/60 hover:text-gold transition-colors cursor-pointer"
        title="Email: ceo@atmagaming.com"
      >
        <svg
          class="w-5 h-5 transition-colors"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        <span class="text-xs font-mono tracking-[0.1em] uppercase">Email</span>
      </a>

      <a
        href="https://t.me/elumixor"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 text-dark-950/60 hover:text-gold transition-colors cursor-pointer"
        title="Telegram: @elumixor"
      >
        <svg
          class="w-5 h-5 transition-colors"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
        <span class="text-xs font-mono tracking-[0.1em] uppercase">Telegram</span>
      </a>
    </div>

    <!-- Content -->
    <div class="flex-1 overflow-y-auto">
      {#if submitted}
        <div
          class="h-full flex flex-col items-center justify-center gap-6 px-8 py-12"
        >
          <div class="text-6xl font-light text-gold">✓</div>
          <div class="text-center">
            <p class="font-display text-2xl text-dark-950 mb-2">
              Message Received
            </p>
            <p class="text-sm text-dark-950/60">
              We'll get back to you within 48 hours.
            </p>
          </div>
        </div>
      {:else}
        <div class="px-8 pb-12 pt-6 space-y-3">
          <!-- Form -->
          <form onsubmit={handleSubmit} class="space-y-6">
            {#if error}
              <div
                class="p-4 bg-red-50 border-[1.5px] border-red-300 text-red-900 text-sm"
              >
                <p class="font-mono text-xs uppercase tracking-widest mb-1">
                  Error
                </p>
                <p>{error}</p>
              </div>
            {/if}

            <div>
              <label
                for="name"
                class="block text-xs font-mono tracking-[0.12em] uppercase text-dark-950/60 mb-3"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                bind:value={formData.name}
                required
                disabled={loading}
                class="w-full px-4 py-3 border-[1.5px] border-dark-950/30 bg-white text-dark-950 placeholder-dark-950/30 text-sm disabled:opacity-50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-xs font-mono tracking-[0.12em] uppercase text-dark-950/60 mb-3"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                disabled={loading}
                class="w-full px-4 py-3 border-[1.5px] border-dark-950/30 bg-white text-dark-950 placeholder-dark-950/30 text-sm disabled:opacity-50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-xs font-mono tracking-[0.12em] uppercase text-dark-950/60 mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                bind:value={formData.message}
                required
                disabled={loading}
                rows={5}
                class="w-full px-4 py-3 border-[1.5px] border-dark-950/30 bg-white text-dark-950 placeholder-dark-950/30 text-sm disabled:opacity-50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all resize-none"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <Button
              disabled={loading}
              type="submit"
              variant="primary"
              class="w-full justify-center"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  input:disabled,
  textarea:disabled {
    cursor: not-allowed;
    background-color: rgb(250, 250, 250);
  }
</style>

<script lang="ts">
import Button from "@/components/ui/Button.svelte";
import { cn } from "@/lib/utils";

type Category = "partner" | "investor";

let {
  open = false,
  category = "partner",
  onClose,
}: {
  open: boolean;
  category?: Category;
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

const categorySubjects: Record<Category, string> = {
  partner: "Partnership Inquiry",
  investor: "Investment Inquiry",
};

async function handleSubmit(e: Event) {
  e.preventDefault();
  loading = true;
  error = null;

  try {
    const response = await fetch("https://api.atmagaming.com/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        message: `[${categorySubjects[category]}]\n\n${formData.message}`,
      }),
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
{#if open}
	<div
		class="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
		onclick={handleBackdropClick}
		style="opacity: 1;"
	></div>
{/if}

<!-- Modal -->
<div
	class={cn(
		"fixed right-0 top-0 h-screen w-full sm:max-w-lg bg-surface border-l-[1.5px] border-dark-950 shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-out",
		open ? "translate-x-0" : "translate-x-full",
	)}
>
	<!-- Header -->
	<div class="flex items-center justify-between px-8 py-6 border-b-[1.5px] border-dark-950">
		<h2 class="font-display text-xl tracking-[0.04em] text-dark-950">Get in Touch</h2>
		<button
			onclick={onClose}
			class="text-dark-950/60 hover:text-dark-950 transition-colors text-2xl leading-none"
			aria-label="Close"
		>
			×
		</button>
	</div>

	<!-- Content -->
	<div class="flex-1 overflow-y-auto px-8 py-6">
		{#if submitted}
			<div class="flex flex-col items-center justify-center h-full gap-4 text-center">
				<div class="text-4xl">✓</div>
				<p class="font-display text-lg text-dark-950">Thank you!</p>
				<p class="text-sm text-text">We'll get back to you soon.</p>
			</div>
		{:else}
			<form onsubmit={handleSubmit} class="space-y-5">
				{#if error}
					<div class="p-4 bg-red-50 border-[1.5px] border-red-200 rounded text-red-900 text-sm">
						{error}
					</div>
				{/if}

				<div>
					<label for="name" class="block text-xs font-mono tracking-[0.12em] uppercase text-dark-950/70 mb-2">
						Name
					</label>
					<input
						type="text"
						id="name"
						bind:value={formData.name}
						required
						disabled={loading}
						class="w-full px-4 py-3 border-[1.5px] border-dark-950 bg-white text-dark-950 placeholder-text/40 text-sm disabled:opacity-50 focus:outline-none focus:ring-1 focus:ring-gold transition-all"
						placeholder="Your name"
					/>
				</div>

				<div>
					<label for="email" class="block text-xs font-mono tracking-[0.12em] uppercase text-dark-950/70 mb-2">
						Email
					</label>
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						required
						disabled={loading}
						class="w-full px-4 py-3 border-[1.5px] border-dark-950 bg-white text-dark-950 placeholder-text/40 text-sm disabled:opacity-50 focus:outline-none focus:ring-1 focus:ring-gold transition-all"
						placeholder="your@email.com"
					/>
				</div>

				<div>
					<label for="message" class="block text-xs font-mono tracking-[0.12em] uppercase text-dark-950/70 mb-2">
						Message
					</label>
					<textarea
						id="message"
						bind:value={formData.message}
						required
						disabled={loading}
						rows={6}
						class="w-full px-4 py-3 border-[1.5px] border-dark-950 bg-white text-dark-950 placeholder-text/40 text-sm disabled:opacity-50 focus:outline-none focus:ring-1 focus:ring-gold transition-all resize-none"
						placeholder="Tell us more..."
					></textarea>
				</div>

				<div class="pt-4">
					<Button disabled={loading} type="submit" variant="primary" class="w-full justify-center">
						{loading ? "Sending..." : "Send"}
					</Button>
				</div>
			</form>
		{/if}
	</div>
</div>

<style>
	input:disabled,
	textarea:disabled {
		cursor: not-allowed;
		background-color: rgb(245, 245, 245);
	}
</style>

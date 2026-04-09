<script lang="ts">
import Button from "@/components/ui/Button.svelte";
import { cn } from "@/lib/utils";

type Category = "partner" | "investor";

let {
  open = false,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
} = $props();

let category = $state<Category>("partner");
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
		class="fixed inset-0 bg-black/50 backdrop-blur-md z-40 transition-opacity duration-300"
		onclick={handleBackdropClick}
		style="opacity: 1;"
	></div>
{/if}

<!-- Modal -->
<div
	class={cn(
		"fixed right-0 top-0 h-screen w-full sm:max-w-2xl bg-surface border-l-[1.5px] border-dark-950 shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-out overflow-hidden",
		open ? "translate-x-0" : "translate-x-full",
	)}
>
	<!-- Header with close button -->
	<div class="flex items-center justify-between px-8 py-6 border-b-[1.5px] border-dark-950/20">
		<div>
			<h2 class="font-display text-2xl tracking-[0.04em] text-dark-950">Get in Touch</h2>
			<p class="text-xs font-mono tracking-[0.1em] uppercase text-dark-950/50 mt-1">
				{category === "partner" ? "Partnership Inquiry" : "Investment Inquiry"}
			</p>
		</div>
		<button
			onclick={onClose}
			class="text-dark-950/60 hover:text-dark-950 transition-colors text-3xl leading-none font-thin p-2"
			aria-label="Close"
		>
			×
		</button>
	</div>

	<!-- Content -->
	<div class="flex-1 overflow-y-auto">
		{#if submitted}
			<div class="h-full flex flex-col items-center justify-center gap-6 px-8 py-12">
				<div class="text-6xl font-light text-gold">✓</div>
				<div class="text-center">
					<p class="font-display text-2xl text-dark-950 mb-2">Message Received</p>
					<p class="text-sm text-dark-950/60">We'll get back to you within 48 hours.</p>
				</div>
			</div>
		{:else}
			<div class="px-8 py-12 space-y-12">
				<!-- Category Selection with visual divider -->
				<div class="space-y-4">
					<p class="text-xs font-mono tracking-[0.12em] uppercase text-dark-950/50">Inquiry Type</p>
					<div class="flex gap-4">
						<label class="flex items-center cursor-pointer group">
							<input
								type="radio"
								name="category"
								value="partner"
								bind:group={category}
								class="sr-only"
							/>
							<span
								class={cn(
									"w-5 h-5 border-[1.5px] border-dark-950 flex items-center justify-center transition-all",
									category === "partner"
										? "bg-dark-950 border-dark-950"
										: "bg-white group-hover:border-gold",
								)}
							>
								{#if category === "partner"}
									<span class="w-2 h-2 bg-surface rounded-full"></span>
								{/if}
							</span>
							<span class="ml-3 text-sm font-display text-dark-950 group-hover:text-gold transition-colors">
								Partnership
							</span>
						</label>
						<label class="flex items-center cursor-pointer group">
							<input
								type="radio"
								name="category"
								value="investor"
								bind:group={category}
								class="sr-only"
							/>
							<span
								class={cn(
									"w-5 h-5 border-[1.5px] border-dark-950 flex items-center justify-center transition-all",
									category === "investor"
										? "bg-dark-950 border-dark-950"
										: "bg-white group-hover:border-gold",
								)}
							>
								{#if category === "investor"}
									<span class="w-2 h-2 bg-surface rounded-full"></span>
								{/if}
							</span>
							<span class="ml-3 text-sm font-display text-dark-950 group-hover:text-gold transition-colors">
								Investment
							</span>
						</label>
					</div>
				</div>

				<!-- Divider -->
				<div class="h-[1.5px] bg-gradient-to-r from-dark-950 via-dark-950/30 to-transparent"></div>

				<!-- Form -->
				<form onsubmit={handleSubmit} class="space-y-6">
					{#if error}
						<div class="p-4 bg-red-50 border-[1.5px] border-red-300 text-red-900 text-sm">
							<p class="font-mono text-xs uppercase tracking-widest mb-1">Error</p>
							<p>{error}</p>
						</div>
					{/if}

					<div>
						<label for="name" class="block text-xs font-mono tracking-[0.12em] uppercase text-dark-950/60 mb-3">
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
						<label for="email" class="block text-xs font-mono tracking-[0.12em] uppercase text-dark-950/60 mb-3">
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
						<label for="message" class="block text-xs font-mono tracking-[0.12em] uppercase text-dark-950/60 mb-3">
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

					<div class="pt-4">
						<Button disabled={loading} type="submit" variant="primary" class="w-full justify-center">
							{loading ? "Sending..." : "Send Message"}
						</Button>
					</div>
				</form>

				<!-- Divider -->
				<div class="h-[1.5px] bg-gradient-to-r from-dark-950 via-dark-950/30 to-transparent"></div>

				<!-- Alternative Contact Options -->
				<div class="space-y-4">
					<p class="text-xs font-mono tracking-[0.12em] uppercase text-dark-950/50">Quick Contact</p>
					<div class="grid grid-cols-2 gap-4">
						<a
							href="mailto:ceo@atmagaming.com"
							class="group p-4 border-[1.5px] border-dark-950/20 hover:border-gold transition-all flex items-start gap-3"
						>
							<svg
								class="w-5 h-5 text-dark-950 group-hover:text-gold transition-colors flex-shrink-0 mt-0.5"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
							>
								<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							<div>
								<p class="text-xs font-mono tracking-[0.1em] uppercase text-dark-950/70 group-hover:text-gold transition-colors">
									Email
								</p>
								<p class="text-xs text-dark-950/50 group-hover:text-dark-950 transition-colors break-all">
									ceo@atmagaming.com
								</p>
							</div>
						</a>
						<a
							href="https://t.me/elumixor"
							target="_blank"
							rel="noopener noreferrer"
							class="group p-4 border-[1.5px] border-dark-950/20 hover:border-gold transition-all flex items-start gap-3"
						>
							<svg
								class="w-5 h-5 text-dark-950 group-hover:text-gold transition-colors flex-shrink-0 mt-0.5"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
							</svg>
							<div>
								<p class="text-xs font-mono tracking-[0.1em] uppercase text-dark-950/70 group-hover:text-gold transition-colors">
									Telegram
								</p>
								<p class="text-xs text-dark-950/50 group-hover:text-dark-950 transition-colors">
									@elumixor
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	input:disabled,
	textarea:disabled {
		cursor: not-allowed;
		background-color: rgb(250, 250, 250);
	}
</style>

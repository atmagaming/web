<script lang="ts">
import Button from "@/components/ui/Button.svelte";
import { cn } from "@/lib/utils";

type Category = "partner" | "investor" | "team";

let {
  category = "partner",
  class: className = "",
}: {
  category?: Category;
  class?: string;
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
  team: "Team Application",
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
    formData = { name: "", email: "", message: "" };
  } catch (e) {
    error = e instanceof Error ? e.message : "Something went wrong";
  } finally {
    loading = false;
  }
}
</script>

<form on:submit={handleSubmit} class={cn("space-y-6", className)}>
	{#if submitted}
		<div class="p-6 bg-green-50 border-[1.5px] border-green-200 rounded">
			<p class="text-green-900 font-medium">Thank you! We'll be in touch soon.</p>
		</div>
	{:else}
		{#if error}
			<div class="p-6 bg-red-50 border-[1.5px] border-red-200 rounded">
				<p class="text-red-900 font-medium">{error}</p>
			</div>
		{/if}

		<div>
			<label for="name" class="block text-sm font-medium text-dark-950 mb-2">Name</label>
			<input
				type="text"
				id="name"
				bind:value={formData.name}
				required
				disabled={loading}
				class="w-full px-4 py-3 border-[1.5px] border-dark-950 rounded bg-white text-dark-950 placeholder-text disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-gold"
				placeholder="Your name"
			/>
		</div>

		<div>
			<label for="email" class="block text-sm font-medium text-dark-950 mb-2">Email</label>
			<input
				type="email"
				id="email"
				bind:value={formData.email}
				required
				disabled={loading}
				class="w-full px-4 py-3 border-[1.5px] border-dark-950 rounded bg-white text-dark-950 placeholder-text disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-gold"
				placeholder="your@email.com"
			/>
		</div>

		<div>
			<label for="message" class="block text-sm font-medium text-dark-950 mb-2">Message</label>
			<textarea
				id="message"
				bind:value={formData.message}
				required
				disabled={loading}
				rows={5}
				class="w-full px-4 py-3 border-[1.5px] border-dark-950 rounded bg-white text-dark-950 placeholder-text disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
				placeholder="Tell us more about your inquiry..."
			></textarea>
		</div>

		<div class="flex justify-end">
			<Button disabled={loading} type="submit">
				{loading ? "Sending..." : "Send"}
			</Button>
		</div>
	{/if}
</form>

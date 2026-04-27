<script lang="ts">
interface Props {
  name: string;
  role: string;
  image: string | null;
  link: string | null;
  linkType: "linkedin" | "artstation" | null;
}

const { name, role, image, link, linkType }: Props = $props();
</script>

<div class="team-member group">
  {#if link}
    <a href={link} target="_blank" rel="noopener noreferrer" class="block no-underline">
      <div
        class="relative w-full aspect-square rounded-sm overflow-hidden mb-3 bg-dark-800 border border-white/5 group-hover:border-accent-500/25 transition-colors"
      >
        {#if image}
          <img
            src={image}
            alt={name}
            class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
          />
        {:else}
          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-500/10 to-transparent">
            <span class="font-display text-3xl text-accent-400/50">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        {/if}
      </div>
      <p class="text-xs text-white group-hover:text-accent-400 transition-colors leading-tight">{name}</p>
      <div class="flex items-center gap-1.5 mt-0.5">
        <p class="text-[10px] text-white/25">{role}</p>
        {#if linkType === "linkedin"}
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="text-white/20 group-hover:text-accent-500/50 transition-colors shrink-0"
          >
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        {:else if linkType === "artstation"}
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="text-white/20 group-hover:text-accent-500/50 transition-colors shrink-0"
          >
            <path
              d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 002.164 1.333c.599 0 1.144-.234 1.551-.617L0 17.723zm24-1.641a2.42 2.42 0 00-.535-1.524l-7.258-12.544a2.422 2.422 0 00-2.103-1.22 2.408 2.408 0 00-2.082 1.199L0 21.228h4.985l8.16-14.116 5.403 9.363H13.55l-1.978 3.42h10.278a2.424 2.424 0 002.15-1.333 2.42 2.42 0 00 0-2.48z"
            />
          </svg>
        {/if}
      </div>
    </a>
  {:else}
    <div>
      <div class="relative w-full aspect-square rounded-sm overflow-hidden mb-3 bg-dark-800 border border-white/5">
        {#if image}
          <img
            src={image}
            alt={name}
            class="w-full h-full object-cover opacity-80"
            loading="lazy"
          />
        {:else}
          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent-500/10 to-transparent">
            <span class="font-display text-3xl text-accent-400/50">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        {/if}
      </div>
      <p class="text-xs text-white leading-tight">{name}</p>
      <p class="text-[10px] text-white/25 mt-0.5">{role}</p>
    </div>
  {/if}
</div>

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"] as const;

/**
 * Svelte action that fits text to its parent width.
 * - `shrink` (default): only shrink if overflow. Pairs with CSS clamp for initial size.
 * - `exact`: scale to exactly fill parent width, respecting parent padding.
 */
export function fitText(node: HTMLElement, options?: { mode?: "shrink" | "exact"; padding?: number }) {
  const mode = options?.mode ?? "shrink";
  const padding = options?.padding ?? 50;

  function available() {
    const parent = node.parentElement;
    if (!parent) return 0;
    if (mode === "exact") {
      const style = getComputedStyle(parent);
      return parent.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    }
    return parent.clientWidth - padding;
  }

  function resize() {
    const parent = node.parentElement;
    if (!parent) return;

    if (mode === "exact") {
      node.style.fontSize = "10px";
      node.style.width = "auto";
      const textWidth = node.offsetWidth;
      node.style.width = "";
      const room = available();
      if (textWidth > 0 && room > 0) node.style.fontSize = `${10 * (room / textWidth)}px`;
      return;
    }

    node.style.fontSize = "";
    const natural = node.scrollWidth;
    const room = available();
    if (natural > room) {
      const current = parseFloat(getComputedStyle(node).fontSize);
      node.style.fontSize = `${current * (room / natural)}px`;
    }
  }

  resize();

  let tries = 0;
  const interval = setInterval(() => {
    resize();
    if (++tries >= 10) clearInterval(interval);
  }, 300);

  const observer = new ResizeObserver(resize);
  observer.observe(node.parentElement ?? node);
  return {
    destroy: () => {
      observer.disconnect();
      clearInterval(interval);
    },
  };
}

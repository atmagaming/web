import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Svelte action that shrinks font-size so the element never overflows its parent width. */
export function fitText(node: HTMLElement) {
  function resize() {
    node.style.fontSize = "";
    const parent = node.parentElement;
    if (!parent) return;
    const available = parent.clientWidth - 50;
    const natural = node.scrollWidth;
    if (natural > available) {
      const current = parseFloat(getComputedStyle(node).fontSize);
      node.style.fontSize = `${current * (available / natural)}px`;
    }
  }
  resize();
  const observer = new ResizeObserver(resize);
  observer.observe(node.parentElement ?? node);
  return { destroy: () => observer.disconnect() };
}

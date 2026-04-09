import { browser } from "$app/environment";

export type Locale = "en" | "ua" | "ru";
export const locales: Locale[] = ["en", "ua", "ru"];
export const localeLabels: Record<Locale, string> = { en: "EN", ua: "UA", ru: "RU" };

const STORAGE_KEY = "atma-locale";

function getInitialLocale(): Locale {
  if (!browser) return "en";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && locales.includes(stored as Locale)) return stored as Locale;
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("uk")) return "ua";
  if (lang.startsWith("ru")) return "ru";
  return "en";
}

let current = $state<Locale>(getInitialLocale());

export const locale = {
  get value() {
    return current;
  },
  set value(v: Locale) {
    current = v;
    if (browser) localStorage.setItem(STORAGE_KEY, v);
  },
};

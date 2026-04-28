import { locale } from "@/lib/i18n";
import { translations } from "@/lib/i18n/translations";

type Hypocrisy = (typeof translations)["en"]["hypocrisy"];

export function localized<K extends keyof Hypocrisy>(section: K): Hypocrisy[K] {
  return (translations[locale.value].hypocrisy[section] ?? translations.en.hypocrisy[section]) as Hypocrisy[K];
}

export function localizedAt<S extends keyof Hypocrisy, K extends keyof Hypocrisy[S]>(
  section: S,
  key: K,
): Hypocrisy[S][K] {
  const localeTree = translations[locale.value].hypocrisy[section] as Hypocrisy[S];
  const enTree = translations.en.hypocrisy[section];
  return (localeTree?.[key] ?? enTree[key]) as Hypocrisy[S][K];
}

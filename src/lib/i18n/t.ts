import type { Locale } from "./locale.svelte";
import { locale } from "./locale.svelte";
import { translations } from "./translations";

type Translations = typeof translations.en;
type Path = FlatKeys<Translations>;

type FlatKeys<T, Prefix extends string = ""> = T extends string
  ? Prefix
  : { [K in keyof T & string]: FlatKeys<T[K], Prefix extends "" ? K : `${Prefix}.${K}`> }[keyof T & string];

function get(object: Record<string, unknown>, path: string): string {
  let result: unknown = object;
  for (const key of path.split(".")) result = (result as Record<string, unknown>)[key];
  return result as string;
}

export function t(path: Path): string {
  return (
    get(translations[locale.value] as unknown as Record<string, unknown>, path) ??
    get(translations.en as unknown as Record<string, unknown>, path) ??
    path
  );
}

export function tt(localeTranslations: Record<Locale, string>): string {
  return localeTranslations[locale.value] ?? localeTranslations.en;
}

export type TranslationKey = Parameters<typeof t>[0];

import type { Locale } from "./locale.svelte";
import { locale } from "./locale.svelte";
import { translations } from "./translations";

type Translations = typeof translations.en;
type Leaf = string | readonly string[];

type FlatKeys<T, Prefix extends string = ""> = T extends Leaf
  ? Prefix
  : { [K in keyof T & string]: FlatKeys<T[K], Prefix extends "" ? K : `${Prefix}.${K}`> }[keyof T & string];

type ValueAt<T, P extends string> = P extends `${infer Head}.${infer Tail}`
  ? Head extends keyof T
    ? ValueAt<T[Head], Tail>
    : never
  : P extends keyof T
    ? T[P]
    : never;

type Path = FlatKeys<Translations>;

function get(object: Record<string, unknown>, path: string): unknown {
  let result: unknown = object;
  for (const key of path.split(".")) result = (result as Record<string, unknown>)[key];
  return result;
}

export function t<P extends Path>(path: P): ValueAt<Translations, P> {
  const value = get(translations[locale.value] as unknown as Record<string, unknown>, path);
  if (value !== undefined) return value as ValueAt<Translations, P>;
  return get(translations.en as unknown as Record<string, unknown>, path) as ValueAt<Translations, P>;
}

export function tt(localeTranslations: Record<Locale, string>): string {
  return localeTranslations[locale.value] ?? localeTranslations.en;
}

export type TranslationKey = Parameters<typeof t>[0];

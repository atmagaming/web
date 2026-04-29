export type Locale = "en";
export const locales: Locale[] = ["en"];
export const localeLabels: Record<Locale, string> = { en: "EN" };

export const locale = {
  get value(): Locale {
    return "en";
  },
  set value(_v: Locale) {},
};

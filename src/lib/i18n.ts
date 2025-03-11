import { createTranslator } from "next-intl";

export const locales = ["en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export async function getTranslations(locale: Locale) {
  try {
    const messages = (await import(`../../public/locales/${locale}/common.json`)).default;
    return messages
  } catch (error) {
    console.error(`Error loading translations for "${locale}"`, error);
    throw new Error(`Messages for locale "${locale}" could not be loaded.`);
  }
}
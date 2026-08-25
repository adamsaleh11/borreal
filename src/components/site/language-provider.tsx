"use client";

/**
 * Locale state for the site. React context is unavailable in Server Components,
 * so this provider is a Client Component that wraps the page content and the
 * nav — both the toggle and the copy it switches have to sit inside it.
 *
 * The locale is deliberately *not* persisted. Every load starts in English:
 * that also keeps the server-rendered HTML and the first client render
 * identical, so there is no hydration mismatch and no flash of Spanish.
 */

import * as React from "react";

import {
  DEFAULT_LOCALE,
  DICTIONARIES,
  HTML_LANG,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Copy for the active locale. */
  t: Dictionary;
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = React.useState<Locale>(DEFAULT_LOCALE);

  // Keep <html lang> honest for screen readers and translation tooling. The
  // server already renders the default, so this only runs on a real switch.
  React.useEffect(() => {
    document.documentElement.lang = HTML_LANG[locale];
  }, [locale]);

  const value = React.useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, t: DICTIONARIES[locale] }),
    [locale]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a <LanguageProvider>");
  }
  return ctx;
}

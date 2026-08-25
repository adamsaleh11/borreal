"use client";

/**
 * EN / ES segmented control. Two `aria-pressed` buttons rather than a
 * radiogroup, so it needs no arrow-key handling to stay accessible, and the
 * pressed state is announced on the control the user actually activated.
 */

import { LOCALE_LABEL, LOCALE_NAME, LOCALES } from "@/lib/i18n";
import { useLanguage } from "@/components/site/language-provider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={cn(
        "border-border bg-background/60 inline-flex items-center rounded-full border p-0.5",
        className
      )}
    >
      {LOCALES.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            // The visible label is a two-letter abbreviation; give assistive
            // tech the language's own name instead.
            aria-label={LOCALE_NAME[code]}
            className={cn(
              "rule-label focus-visible:ring-copper-500 rounded-full px-2.5 py-1 transition-colors focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:outline-none",
              active
                ? "bg-boreal-800 text-bone-100"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {LOCALE_LABEL[code]}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageToggle;

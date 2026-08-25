import { HomeContent } from "@/components/site/home-content";
import { LanguageProvider } from "@/components/site/language-provider";

/**
 * The provider wraps the page rather than the document so the static shell in
 * `layout.tsx` stays a Server Component; the nav's toggle and the copy it
 * switches both live under `HomeContent`.
 */
export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}

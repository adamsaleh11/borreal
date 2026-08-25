"use client";

import { Hero05 } from "@/components/ui/hero-05";
import { SiteNav } from "@/components/site/site-nav";
import { FernMark } from "@/components/site/fern-mark";
import { useLanguage } from "@/components/site/language-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------- primitives */

function Label({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("rule-label text-muted-foreground", className)}>{children}</p>
  );
}

function Section({
  id,
  children,
  className,
  tone = "paper",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "paper" | "card" | "forest";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full scroll-mt-20",
        tone === "paper" && "bg-background",
        tone === "card" && "bg-bone-50",
        tone === "forest" && "bg-boreal-900 text-bone-100",
        className
      )}
    >
      {tone === "forest" && (
        <div
          aria-hidden
          className="grid-field text-bone-100 pointer-events-none absolute inset-0 opacity-60"
        />
      )}
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">{children}</div>
    </section>
  );
}

/** Two-column editorial header: label rail on the left, statement on the right. */
function SectionHead({
  label,
  title,
  lede,
  invert,
}: {
  label: string;
  title: string;
  lede?: string;
  invert?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-4">
        <Label className={invert ? "text-sage-300" : undefined}>{label}</Label>
      </div>
      <div className="lg:col-span-8">
        <h2 className="font-serif text-2xl font-normal tracking-tight text-balance sm:text-3xl md:text-4xl">
          {title}
        </h2>
        {lede && (
          <p
            className={cn(
              "mt-5 max-w-2xl leading-relaxed",
              invert ? "text-sage-300" : "text-muted-foreground"
            )}
          >
            {lede}
          </p>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- content */

/** Corridor codes and roadmap quarters are structural — they read the same in
 *  both languages, so only the names and prose come from the dictionary. */
const CORRIDOR_CODES = ["CA", "CL", "AR", "CN"] as const;
const QUARTERS = ["Q1", "Q2", "Q3–Q4"] as const;

/* ---------------------------------------------------------------------- page */

export function HomeContent() {
  const { t } = useLanguage();

  return (
    <main id="top" className="flex flex-col">
      <SiteNav />

      {/* 21st.dev — Editorial Hero (hero-05) by felipemenezes098 */}
      <Hero05
        animation="subtle"
        tagline={t.hero.tagline}
        title={t.hero.title}
        description={t.hero.description}
        landscapeImage="/hero-corridor.svg"
        landscapeAlt={t.hero.landscapeAlt}
        primaryCTA={{
          ctaEnabled: true,
          text: t.hero.primaryCta,
          link: "#contact",
          variant: "default",
        }}
        secondaryCTA={{
          ctaEnabled: true,
          text: t.hero.secondaryCta,
          link: "#sectors",
          variant: "link",
        }}
      />

      {/* Corridor rail */}
      <div className="border-border bg-bone-50 border-y">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 lg:grid-cols-4">
          {CORRIDOR_CODES.map((code, i) => (
            <div
              key={code}
              className={cn(
                "border-border py-6 lg:py-7",
                i !== 0 && "lg:border-l lg:pl-7",
                i % 2 === 1 && "border-l pl-6 lg:pl-7",
                i > 1 && "border-t lg:border-t-0"
              )}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-copper-500 text-xs">{code}</span>
                <span className="font-serif text-lg tracking-tight">
                  {t.corridors[code].name}
                </span>
              </div>
              <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                {t.corridors[code].role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Who we are */}
      <Section id="platform">
        <SectionHead
          label={t.platform.label}
          title={t.platform.title}
          lede={t.platform.lede}
        />

        <div className="mt-14 grid grid-cols-1 gap-px sm:grid-cols-3">
          {t.platform.valueProp.map((v, i) => (
            <div
              key={v.title}
              className={cn(
                "border-border py-8 sm:px-8 sm:py-0",
                i !== 0 && "border-t sm:border-t-0 sm:border-l",
                i === 0 && "sm:pl-0"
              )}
            >
              <span className="font-mono text-copper-500 text-xs">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif mt-3 text-xl font-normal tracking-tight">
                {v.title}
              </h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Sectors */}
      <Section id="sectors" tone="forest">
        <SectionHead
          invert
          label={t.sectors.label}
          title={t.sectors.title}
          lede={t.sectors.lede}
        />

        <ul className="mt-14 grid grid-cols-1 gap-px">
          {t.sectors.items.map((s, i) => (
            <li
              key={s.title}
              className="group border-bone-100/15 grid grid-cols-1 gap-4 border-t py-7 last:border-b lg:grid-cols-12 lg:items-baseline lg:gap-10"
            >
              <span className="text-copper-400 font-mono text-xs lg:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl font-normal tracking-tight lg:col-span-5">
                {s.title}
              </h3>
              <p className="text-sage-300 text-sm leading-relaxed lg:col-span-6">
                {s.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* First corridor — legumes & pulses */}
      <Section id="corridor" tone="card">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Label>{t.corridor.label}</Label>
            <h2 className="font-serif mt-4 text-2xl font-normal tracking-tight text-balance sm:text-3xl md:text-4xl">
              {t.corridor.title}
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              {t.corridor.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full px-5">
                <a href="#contact">{t.corridor.cta}</a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <dl className="grid grid-cols-1 gap-px sm:grid-cols-2">
              {t.corridor.facts.map((row, i) => (
                <div
                  key={row.k}
                  className={cn(
                    "border-border border-t py-6",
                    i % 2 === 1 && "sm:border-l sm:pl-6"
                  )}
                >
                  <dt className="rule-label text-muted-foreground">{row.k}</dt>
                  <dd className="font-serif mt-2 text-xl tracking-tight">{row.v}</dd>
                  <dd className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                    {row.d}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="text-muted-foreground/80 mt-6 text-xs leading-relaxed">
              {t.corridor.footnote}
            </p>
          </div>
        </div>
      </Section>

      {/* Business model */}
      <Section>
        <SectionHead label={t.model.label} title={t.model.title} />
        <div className="mt-14 grid grid-cols-1 gap-px md:grid-cols-3">
          {t.model.items.map((m, i) => (
            <div
              key={m.title}
              className={cn(
                "border-border border-t py-8 md:px-8",
                i !== 0 && "md:border-l",
                i === 0 && "md:pl-0"
              )}
            >
              <h3 className="font-serif text-xl font-normal tracking-tight">
                {m.title}
              </h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Governance */}
      <Section id="governance" tone="forest">
        <SectionHead
          invert
          label={t.governance.label}
          title={t.governance.title}
          lede={t.governance.lede}
        />
        <div className="mt-14 grid grid-cols-1 gap-px sm:grid-cols-2">
          {t.governance.items.map((g, i) => (
            <div
              key={g.title}
              className={cn(
                "border-bone-100/15 border-t py-8",
                i % 2 === 1 && "sm:border-l sm:pl-8"
              )}
            >
              <h3 className="font-serif text-xl font-normal tracking-tight">
                {g.title}
              </h3>
              <p className="text-sage-300 mt-3 text-sm leading-relaxed">{g.body}</p>
            </div>
          ))}
        </div>

        <div className="border-bone-100/15 mt-14 border-t pt-10">
          <Label className="text-sage-300">{t.governance.ecosystemLabel}</Label>
          <p className="mt-4 max-w-3xl leading-relaxed">
            {t.governance.ecosystemBody}
          </p>
        </div>
      </Section>

      {/* Roadmap + status */}
      <Section id="roadmap" tone="card">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Label>{t.roadmap.label}</Label>
            <h2 className="font-serif mt-4 text-2xl font-normal tracking-tight text-balance sm:text-3xl md:text-4xl">
              {t.roadmap.title}
            </h2>
            <ul className="mt-8 space-y-3">
              {t.roadmap.status.map((s) => (
                <li key={s} className="flex gap-4 text-sm leading-relaxed">
                  <span
                    aria-hidden
                    className="bg-copper-500 mt-2.5 h-px w-4 shrink-0"
                  />
                  <span className="text-muted-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <ol className="lg:col-span-6 lg:col-start-7">
            {t.roadmap.phases.map((r, i) => (
              <li
                key={QUARTERS[i]}
                className="border-border grid grid-cols-1 gap-3 border-t py-7 last:border-b sm:grid-cols-12 sm:items-baseline sm:gap-6"
              >
                <span className="text-copper-500 font-mono text-xs sm:col-span-2">
                  {QUARTERS[i]}
                </span>
                <h3 className="font-serif text-lg font-normal tracking-tight sm:col-span-3">
                  {r.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed sm:col-span-7">
                  {r.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Closing / contact */}
      <Section id="contact">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Label>{t.contact.label}</Label>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl font-normal tracking-tight text-balance sm:text-4xl md:text-5xl">
              {t.contact.title}
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              {t.contact.body}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="mailto:info@boreallfern.com">{t.contact.cta}</a>
              </Button>
              <a
                href="mailto:info@boreallfern.com"
                className="font-mono text-copper-600 text-sm underline-offset-4 hover:underline"
              >
                info@boreallfern.com
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-boreal-950 text-bone-100">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <FernMark className="text-bone-100 h-7 w-7" />
                <span className="font-serif text-lg tracking-tight">
                  Boreall Fern Inc.
                </span>
              </div>
              <p className="text-sage-300 mt-4 max-w-sm text-sm leading-relaxed">
                {t.footer.tagline}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {CORRIDOR_CODES.map((code) => (
                <span key={code} className="font-mono text-sage-300 text-xs">
                  {code} &nbsp;{t.corridors[code].name}
                </span>
              ))}
            </div>
          </div>

          <div className="border-bone-100/15 mt-12 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sage-300 font-mono text-[0.6875rem]">
              {t.footer.copyright.replace(
                "{year}",
                String(new Date().getFullYear())
              )}
            </p>
            <p className="text-sage-300/70 font-mono text-[0.6875rem]">
              {t.footer.registered}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default HomeContent;

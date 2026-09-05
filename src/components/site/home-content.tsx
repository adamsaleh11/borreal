"use client";

import Image from "next/image";

import { Hero05 } from "@/components/ui/hero-05";
import { SiteNav } from "@/components/site/site-nav";
import { FernMark } from "@/components/site/fern-mark";
import { useLanguage } from "@/components/site/language-provider";
import { Button } from "@/components/ui/button";
import { CREDITS, IMAGES } from "@/lib/images";
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

/**
 * A photograph with its frame. `sizes` is passed per use site because the same
 * component runs full-bleed and at a half-column width.
 */
function Figure({
  image,
  alt,
  sizes,
  className,
  imgClassName,
}: {
  image: (typeof IMAGES)[keyof typeof IMAGES];
  alt: string;
  sizes: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
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

/** The rail keys and roadmap quarters are structural — they read the same in
 *  both languages, so only the prose behind them comes from the dictionary. */
const ROUTE_KEYS = ["origin", "destination", "product", "unit"] as const;
const FOOTER_CODES = ["CA", "CL"] as const;
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
        landscapeImage={IMAGES.prairieCanola.src}
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
          link: "#pulses",
          variant: "link",
        }}
      />

      {/* Route rail — the trade in four facts, before any prose */}
      <div className="border-border bg-bone-50 border-y">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 lg:grid-cols-4">
          {ROUTE_KEYS.map((key, i) => {
            const row = t.route[key];
            return (
              <div
                key={key}
                className={cn(
                  "border-border py-6 lg:py-7",
                  i !== 0 && "lg:border-l lg:pl-7",
                  i % 2 === 1 && "border-l pl-6 lg:pl-7",
                  i > 1 && "border-t lg:border-t-0"
                )}
              >
                <p className="rule-label text-copper-500">{row.k}</p>
                <p className="font-serif mt-2 text-lg tracking-tight">{row.v}</p>
                <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                  {row.d}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* What we ship — the flagship section, first thing after the hero */}
      <Section id="pulses" tone="forest">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Label className="text-sage-300">{t.pulses.label}</Label>
            <h2 className="font-serif mt-4 text-2xl font-normal tracking-tight text-balance sm:text-3xl md:text-4xl">
              {t.pulses.title}
            </h2>
            <p className="text-sage-300 mt-5 leading-relaxed">{t.pulses.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-bone-100 text-boreal-900 hover:bg-bone-200 rounded-full px-5"
              >
                <a href="#contact">{t.pulses.cta}</a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Label className="text-sage-300">{t.pulses.ladderLabel}</Label>
            <ol className="mt-4">
              {t.pulses.ladder.map((rung) => (
                <li
                  key={rung.title}
                  className="border-bone-100/15 grid grid-cols-1 gap-2 border-t py-6 last:border-b sm:grid-cols-12 sm:gap-6"
                >
                  <span className="text-copper-400 font-mono text-xs sm:col-span-4">
                    {rung.stage}
                  </span>
                  <div className="sm:col-span-8">
                    <h3 className="font-serif text-xl font-normal tracking-tight">
                      {rung.title}
                    </h3>
                    <p className="text-sage-300 mt-2 text-sm leading-relaxed">
                      {rung.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-sage-300/70 mt-6 text-xs leading-relaxed">
              {t.pulses.footnote}
            </p>
          </div>
        </div>

        {/* The product itself, run as a band so the section ends on the crop
            rather than on more prose. */}
        <figure className="mt-16">
          <Figure
            image={IMAGES.redLentils}
            alt={t.media.alt.lentils}
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="aspect-[16/5] rounded-sm"
          />
          <figcaption className="text-sage-300/70 mt-3 font-mono text-xs">
            {t.media.pulsesCaption}
          </figcaption>
        </figure>
      </Section>

      {/* Who we are */}
      <Section id="platform">
        <SectionHead
          label={t.platform.label}
          title={t.platform.title}
          lede={t.platform.lede}
        />

        {/* Equal halves, deliberately: the two ends of the lane get the same
            frame, the same size and the same caption weight. */}
        <figure className="mt-14">
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2">
            {(
              [
                ["CA", IMAGES.prairieHarvest, t.media.alt.harvest],
                ["CL", IMAGES.chileRapeseed, t.media.alt.rapeseed],
              ] as const
            ).map(([code, image, alt]) => (
              <div key={code}>
                <Figure
                  image={image}
                  alt={alt}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="aspect-[3/2] rounded-sm"
                />
                <p className="text-copper-500 mt-3 font-mono text-xs">
                  {code}&nbsp;&nbsp;{t.corridors[code]}
                </p>
              </div>
            ))}
          </div>
          <figcaption className="border-border mt-6 border-t pt-5">
            <Label>{t.media.pairLabel}</Label>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed">
              {t.media.pairNote}
            </p>
          </figcaption>
        </figure>

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

      {/* Governance */}
      <Section id="governance" tone="card">
        <SectionHead
          label={t.governance.label}
          title={t.governance.title}
          lede={t.governance.lede}
        />
        <div className="mt-14 grid grid-cols-1 gap-px sm:grid-cols-2">
          {t.governance.items.map((g, i) => (
            <div
              key={g.title}
              className={cn(
                "border-border border-t py-8",
                i % 2 === 1 && "sm:border-l sm:pl-8"
              )}
            >
              <h3 className="font-serif text-xl font-normal tracking-tight">
                {g.title}
              </h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {g.body}
              </p>
            </div>
          ))}
        </div>

        <div className="border-border mt-14 border-t pt-10">
          <Label>{t.governance.ecosystemLabel}</Label>
          <p className="text-muted-foreground mt-4 max-w-3xl leading-relaxed">
            {t.governance.ecosystemBody}
          </p>
        </div>

        {/* The receiving end of the paper trail: Chilean ground, Chilean port. */}
        <figure className="mt-14">
          <div className="grid grid-cols-1 gap-px sm:grid-cols-2">
            <Figure
              image={IMAGES.chileLimari}
              alt={t.media.alt.limari}
              sizes="(min-width: 640px) 50vw, 100vw"
              className="aspect-[3/2] rounded-sm"
            />
            <Figure
              image={IMAGES.valparaisoPort}
              alt={t.media.alt.port}
              sizes="(min-width: 640px) 50vw, 100vw"
              className="aspect-[3/2] rounded-sm"
            />
          </div>
          <figcaption className="border-border mt-6 border-t pt-5">
            <Label>{t.media.corridorLabel}</Label>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed">
              {t.media.corridorNote}
            </p>
          </figcaption>
        </figure>
      </Section>

      {/* Roadmap + status */}
      <Section id="roadmap">
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
      <Section id="contact" tone="card">
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
            {/* The one soft mention of anything beyond pulses. */}
            <p className="text-muted-foreground/70 mt-10 max-w-2xl text-xs leading-relaxed">
              {t.contact.expansion}
            </p>
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
              {FOOTER_CODES.map((code) => (
                <span key={code} className="font-mono text-sage-300 text-xs">
                  {code} &nbsp;{t.corridors[code]}
                </span>
              ))}
            </div>
          </div>

          {/* Attribution is a licence condition on the CC BY / CC BY-SA frames,
              not a courtesy — see src/lib/images.ts. Collapsed so it stays out
              of the way without being buried. */}
          <details className="border-bone-100/15 mt-12 border-t pt-6">
            <summary className="text-sage-300 cursor-pointer font-mono text-[0.6875rem] tracking-wide">
              {t.media.creditsLabel}
            </summary>
            <p className="text-sage-300/70 mt-4 max-w-2xl text-xs leading-relaxed">
              {t.media.creditsNote}
            </p>
            <ul className="mt-4 space-y-2">
              {CREDITS.map((c) => (
                <li
                  key={c.src}
                  className="text-sage-300/70 font-mono text-[0.6875rem] leading-relaxed"
                >
                  <a
                    href={c.source}
                    rel="noreferrer"
                    target="_blank"
                    className="underline-offset-4 hover:underline"
                  >
                    {c.subject}
                  </a>{" "}
                  — {c.photographer},{" "}
                  <a
                    href={c.licenseUrl}
                    rel="license noreferrer"
                    target="_blank"
                    className="underline-offset-4 hover:underline"
                  >
                    {c.license}
                  </a>
                </li>
              ))}
            </ul>
          </details>

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

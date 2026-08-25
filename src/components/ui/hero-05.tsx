"use client";

/**
 * Editorial Hero (hero-05) — by felipemenezes098, via 21st.dev
 * https://21st.dev/@felipemenezes098/components/hero-05
 *
 * Left tagline / right-aligned serif headline + copy / full-width image below.
 */

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import Balancer from "react-wrap-balancer";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CtaVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

export type HeroCta = {
  ctaEnabled?: boolean;
  text?: string;
  link?: string;
  variant?: CtaVariant;
  size?: "default" | "sm" | "lg" | "icon";
};

export type Hero05Props = {
  tagline?: string;
  title?: string;
  description?: string;
  landscapeImage?: string;
  landscapeAlt?: string;
  animation?: "none" | "subtle";
  primaryCTA?: HeroCta;
  secondaryCTA?: HeroCta;
  variant?: "standard" | "compact";
};

const VARIANTS = {
  standard: {
    copy: "pt-20 pb-10 sm:pt-28 sm:pb-12 lg:pt-32",
    tagline: "text-sm sm:text-base",
    title: "text-3xl sm:text-4xl md:text-5xl",
    description: "text-sm sm:text-base",
    header: "gap-6 sm:gap-8",
    grid: "gap-10",
  },
  compact: {
    copy: "pt-14 pb-8 sm:pt-20 sm:pb-10 lg:pt-24",
    tagline: "text-sm",
    title: "text-2xl sm:text-3xl md:text-4xl",
    description: "text-sm",
    header: "gap-4 sm:gap-5",
    grid: "gap-8",
  },
} as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
};

const media: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
};

function Reveal({
  active,
  variants,
  className,
  children,
}: {
  active: boolean;
  variants?: Variants;
  className?: string;
  children: React.ReactNode;
}) {
  if (!active) return <div className={className}>{children}</div>;
  return (
    <motion.div variants={variants ?? item} className={className}>
      {children}
    </motion.div>
  );
}

function Cta({ cta, className }: { cta?: HeroCta; className?: string }) {
  if (!cta?.ctaEnabled) return null;
  const variant = cta.variant ?? "default";
  const classes = cn("w-fit rounded-full px-5", className);

  if (cta.link) {
    return (
      <Button
        className={classes}
        variant={variant}
        size={cta.size ?? "default"}
        asChild
      >
        <a href={cta.link} aria-label={cta.text}>
          {cta.text}
        </a>
      </Button>
    );
  }

  return (
    <Button
      className={classes}
      variant={variant}
      size={cta.size ?? "default"}
      aria-label={cta.text}
      type="button"
    >
      {cta.text}
    </Button>
  );
}

export function Hero05({
  tagline,
  title,
  description,
  landscapeImage,
  landscapeAlt = "",
  animation = "none",
  primaryCTA,
  secondaryCTA,
  variant = "standard",
}: Hero05Props) {
  const reduced = useReducedMotion();
  const animate = animation === "subtle" && !reduced;
  const v = VARIANTS[variant];

  const taglineEl = tagline && (
    <p
      className={cn(
        "text-muted-foreground max-w-xs leading-relaxed tracking-tight",
        v.tagline
      )}
    >
      <Balancer>{tagline}</Balancer>
    </p>
  );

  const titleEl = title && (
    <h1
      className={cn(
        "text-foreground font-serif font-normal tracking-tight text-balance",
        v.title
      )}
    >
      <Balancer>{title}</Balancer>
    </h1>
  );

  const descriptionEl = description && (
    <p className={cn("text-muted-foreground max-w-xl leading-relaxed", v.description)}>
      <Balancer>{description}</Balancer>
    </p>
  );

  const ctas = (primaryCTA?.ctaEnabled || secondaryCTA?.ctaEnabled) && (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
      <Cta cta={primaryCTA} />
      <Cta
        cta={secondaryCTA && { ...secondaryCTA, variant: secondaryCTA.variant ?? "link" }}
      />
    </div>
  );

  const image = landscapeImage && (
    <div className="relative w-full overflow-hidden">
      <div
        className={cn(
          "relative overflow-hidden rounded-b-sm",
          "mask-t-from-80% mask-t-to-95%"
        )}
      >
        <div
          aria-hidden
          className="bg-background/15 dark:bg-background/30 pointer-events-none absolute inset-0 z-10 mix-blend-overlay"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={landscapeImage}
          alt={landscapeAlt}
          decoding="async"
          className="aspect-[2/1] w-full object-cover object-center outline outline-black/10 sm:aspect-[9/4] dark:outline-white/10 dark:brightness-[0.97] dark:saturate-[0.92]"
        />
      </div>
    </div>
  );

  return (
    <section className="bg-background relative isolate w-full overflow-hidden">
      <motion.div
        className={cn(
          "relative z-10 mx-auto grid max-w-7xl grid-cols-1 px-6 lg:grid-cols-12",
          v.copy,
          v.grid
        )}
        variants={animate ? container : undefined}
        initial={animate ? "hidden" : false}
        whileInView={animate ? "visible" : undefined}
        viewport={{ once: true, margin: "-80px" }}
      >
        <Reveal
          active={animate}
          className="flex lg:col-span-4 lg:col-start-1 lg:items-end lg:self-stretch"
        >
          {taglineEl}
        </Reveal>
        <Reveal
          active={animate}
          className={cn(
            "flex flex-col items-start lg:col-span-6 lg:col-start-7",
            v.header
          )}
        >
          {titleEl}
          {descriptionEl}
          {ctas}
        </Reveal>
      </motion.div>
      <Reveal active={animate} variants={media} className="w-full">
        {image}
      </Reveal>
    </section>
  );
}

export default Hero05;

"use client";

import * as React from "react";
import { FernMark } from "@/components/site/fern-mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#platform", label: "Platform" },
  { href: "#sectors", label: "Sectors" },
  { href: "#corridor", label: "First corridor" },
  { href: "#governance", label: "Governance" },
  { href: "#roadmap", label: "2026" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "bg-background/85 border-border border-b backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="group flex items-center gap-2.5">
          <FernMark className="text-boreal-800 h-7 w-7" />
          <span className="leading-none">
            <span className="font-serif text-[1.05rem] tracking-tight">
              Boreall Fern
            </span>
            <span className="rule-label text-muted-foreground ml-1.5 align-middle">
              Inc.
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rule-label text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden rounded-full px-5 sm:inline-flex"
          >
            <a href="#contact">Request an introduction</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="border-border text-foreground grid h-9 w-9 place-items-center rounded-full border md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
              <path
                d={open ? "M3 3 L13 13 M13 3 L3 13" : "M2.5 5 H13.5 M2.5 11 H13.5"}
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-border bg-background border-t md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rule-label text-muted-foreground hover:text-foreground py-2 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-3 w-fit rounded-full px-5">
              <a href="#contact" onClick={() => setOpen(false)}>
                Request an introduction
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default SiteNav;

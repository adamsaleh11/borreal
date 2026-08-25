import { Hero05 } from "@/components/ui/hero-05";
import { SiteNav } from "@/components/site/site-nav";
import { FernMark } from "@/components/site/fern-mark";
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

const CORRIDORS = [
  { code: "CA", name: "Canada", role: "Operational & governance base" },
  { code: "CL", name: "Chile", role: "Primary gateway to South America" },
  { code: "AR", name: "Argentina", role: "Secondary regional extension" },
  { code: "CN", name: "China", role: "Benchmark & sourcing comparison" },
];

const SECTORS = [
  {
    n: "01",
    title: "Mining & critical minerals",
    body: "Copper, lithium, and rare minerals — the backbone of the Canada–Chile industrial relationship.",
  },
  {
    n: "02",
    title: "Water infrastructure",
    body: "Desalination, pumping, filtration, and industrial pipeline systems for arid-region operations.",
  },
  {
    n: "03",
    title: "Agri-food & fisheries",
    body: "Dairy, food processing, fisheries and salmon farming, plus agro-industrial machinery.",
  },
  {
    n: "04",
    title: "Telecom, manufacturing & construction",
    body: "Industrial machinery, equipment, and the critical spare parts that keep it running.",
  },
  {
    n: "05",
    title: "Energy transition & circular economy",
    body: "Electric vehicles, charging infrastructure, recycling and composting technologies.",
  },
];

const VALUE_PROP = [
  {
    title: "A platform, not a broker",
    body: "We do not simply introduce two parties and step away. We stay through regulatory clearance, financing, logistics, and scaling.",
  },
  {
    title: "Entry risk, reduced",
    body: "Regulatory, institutional, and market intelligence gathered before capital is committed — so the first shipment is not the first test.",
  },
  {
    title: "Identification through execution",
    body: "We support clients from market identification to execution and scaling, rather than handing off at the contract.",
  },
];

const GOVERNANCE = [
  {
    title: "Integrity & transparency",
    body: "Zero tolerance for corruption, bribery, or undue influence. Contract-based relationships only.",
  },
  {
    title: "Rule of law & compliance",
    body: "Operating under Canadian legal and ethical standards, and respecting international trade rules.",
  },
  {
    title: "Accountability & stewardship",
    body: "Clear roles, external legal and accounting oversight, and documented, auditable decisions.",
  },
  {
    title: "Risk & financial discipline",
    body: "Transaction-by-transaction exposure, trade finance and insurance tools, and no speculative leverage.",
  },
];

const ROADMAP = [
  {
    q: "Q1",
    title: "Foundation",
    body: "Legal, banking, branding, and institutional engagement.",
  },
  {
    q: "Q2",
    title: "Validation",
    body: "Trade missions, fairs, lead generation, and market validation.",
  },
  {
    q: "Q3–Q4",
    title: "Execution",
    body: "First contracts, revenue generation, and gradual scaling.",
  },
];

const STATUS = [
  "Federally incorporated and registered with the Canada Revenue Agency",
  "Corporate name, email systems, and legal structure in place",
  "Banking relationships and credit facilities in progress",
  "Initial institutional focus on Quebec and Ontario",
];

/* ---------------------------------------------------------------------- page */

export default function Home() {
  return (
    <main id="top" className="flex flex-col">
      <SiteNav />

      {/* 21st.dev — Editorial Hero (hero-05) by felipemenezes098 */}
      <Hero05
        animation="subtle"
        tagline="A Canadian, family-owned company enabling strategic industrial trade between Canada and South America."
        title="Opening durable industrial corridors between Canada and South America."
        description="Boreall Fern Inc. connects Canadian capability with South American demand — beginning with Chile. We integrate trade, regulation, financing, and public–private collaboration so that market entry is structured, compliant, and built to hold."
        landscapeImage="/hero-corridor.svg"
        landscapeAlt="Stylised topographic corridor running from the Canadian boreal to the Chilean Andes"
        primaryCTA={{
          ctaEnabled: true,
          text: "Request an introduction",
          link: "#contact",
          variant: "default",
        }}
        secondaryCTA={{
          ctaEnabled: true,
          text: "Explore sectors",
          link: "#sectors",
          variant: "link",
        }}
      />

      {/* Corridor rail */}
      <div className="border-border bg-bone-50 border-y">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 lg:grid-cols-4">
          {CORRIDORS.map((c, i) => (
            <div
              key={c.code}
              className={cn(
                "border-border py-6 lg:py-7",
                i !== 0 && "lg:border-l lg:pl-7",
                i % 2 === 1 && "border-l pl-6 lg:pl-7",
                i > 1 && "border-t lg:border-t-0"
              )}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-copper-500 text-xs">{c.code}</span>
                <span className="font-serif text-lg tracking-tight">{c.name}</span>
              </div>
              <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                {c.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Who we are */}
      <Section id="platform">
        <SectionHead
          label="Who we are"
          title="A trade enablement platform, built on a Canadian governance base."
          lede="Global supply chains are fragmenting and becoming less predictable. Over-reliance on single markets creates strategic and operational risk. What is missing is not intermediaries — it is trusted platforms that can open and diversify markets, and remain accountable once they are open."
        />

        <div className="mt-14 grid grid-cols-1 gap-px sm:grid-cols-3">
          {VALUE_PROP.map((v, i) => (
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
          label="Strategic sectors"
          title="Five sectors where Canadian capability meets South American demand."
          lede="Our products and services span industrial machinery and critical spare parts, water and desalination systems, agro-industrial and food processing solutions, circular-economy technologies, and commercial representation for market entry."
        />

        <ul className="mt-14 grid grid-cols-1 gap-px">
          {SECTORS.map((s) => (
            <li
              key={s.n}
              className="group border-bone-100/15 grid grid-cols-1 gap-4 border-t py-7 last:border-b lg:grid-cols-12 lg:items-baseline lg:gap-10"
            >
              <span className="text-copper-400 font-mono text-xs lg:col-span-1">
                {s.n}
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
            <Label>First active corridor</Label>
            <h2 className="font-serif mt-4 text-2xl font-normal tracking-tight text-balance sm:text-3xl md:text-4xl">
              Legumes &amp; pulses, from the Prairies to Chile.
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Our first structured product line moves soybeans, lentils, chickpeas
              and dry peas from Saskatchewan and Alberta producers to Chilean
              distributors and food processors — a containerised, repeatable model
              that proves the corridor before it scales.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full px-5">
                <a href="#contact">Discuss this corridor</a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <dl className="grid grid-cols-1 gap-px sm:grid-cols-2">
              {[
                {
                  k: "Origin",
                  v: "Saskatchewan & Alberta",
                  d: "Bulk contracts direct with Canadian producers.",
                },
                {
                  k: "Destination",
                  v: "Chile",
                  d: "Distributors and food processors, with diversified buyers.",
                },
                {
                  k: "Unit",
                  v: "21 t container",
                  d: "Containerised shipment as the repeatable unit of scale.",
                },
                {
                  k: "Products",
                  v: "Four pulses",
                  d: "Soybeans, lentils, chickpeas, dry peas.",
                },
              ].map((row, i) => (
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
              Growth is deliberately conservative: pre-negotiated purchase
              agreements, currency monitoring on CAD–CLP exposure, export
              compliance and insurance coverage, and reinvestment of profits
              through the initial phase.
            </p>
          </div>
        </div>
      </Section>

      {/* Business model */}
      <Section>
        <SectionHead
          label="Business model"
          title="Commercial where it should be commercial; institutional where it must be."
        />
        <div className="mt-14 grid grid-cols-1 gap-px md:grid-cols-3">
          {[
            {
              t: "B2B & B2P",
              b: "Business-to-business and business-to-public operations, serving private industry and public institutions alike.",
            },
            {
              t: "Public–private partnerships",
              b: "PPP structures for infrastructure and industrial projects that neither side can carry alone.",
            },
            {
              t: "Three revenue lines",
              b: "Product margins, commercial representation, and advisory services — no reliance on any single stream.",
            },
          ].map((m, i) => (
            <div
              key={m.t}
              className={cn(
                "border-border border-t py-8 md:px-8",
                i !== 0 && "md:border-l",
                i === 0 && "md:pl-0"
              )}
            >
              <h3 className="font-serif text-xl font-normal tracking-tight">{m.t}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {m.b}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Governance */}
      <Section id="governance" tone="forest">
        <SectionHead
          invert
          label="Governance & values"
          title="Discipline is the product."
          lede="Boreall Fern operates under Canadian legal and ethical standards, with external legal and accounting oversight and decisions that are documented and auditable. In cross-border industrial trade, that is not overhead — it is the thing being sold."
        />
        <div className="mt-14 grid grid-cols-1 gap-px sm:grid-cols-2">
          {GOVERNANCE.map((g, i) => (
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
          <Label className="text-sage-300">Institutional ecosystem</Label>
          <p className="mt-4 max-w-3xl leading-relaxed">
            We engage federal, provincial, and municipal institutions — including
            EDC and Global Affairs Canada — alongside banks and financial
            institutions, lawyers, accountants and insurers, and export and
            economic development agencies.
          </p>
        </div>
      </Section>

      {/* Roadmap + status */}
      <Section id="roadmap" tone="card">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Label>2026 roadmap</Label>
            <h2 className="font-serif mt-4 text-2xl font-normal tracking-tight text-balance sm:text-3xl md:text-4xl">
              Intentional and disciplined execution.
            </h2>
            <ul className="mt-8 space-y-3">
              {STATUS.map((s) => (
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
            {ROADMAP.map((r) => (
              <li
                key={r.q}
                className="border-border grid grid-cols-1 gap-3 border-t py-7 last:border-b sm:grid-cols-12 sm:items-baseline sm:gap-6"
              >
                <span className="text-copper-500 font-mono text-xs sm:col-span-2">
                  {r.q}
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
            <Label>Contact</Label>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl font-normal tracking-tight text-balance sm:text-4xl md:text-5xl">
              Built on trust, diversification, and long-term value creation.
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              We are speaking with Canadian manufacturers and producers seeking
              South American demand, Chilean distributors seeking Canadian supply,
              and the banks, insurers, and trade agencies that make those corridors
              work.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="mailto:info@boreallfern.com">Start a conversation</a>
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
                Industrial &amp; strategic trade enablement. Canada · Chile ·
                South America · China.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {CORRIDORS.map((c) => (
                <span key={c.code} className="font-mono text-sage-300 text-xs">
                  {c.code} &nbsp;{c.name}
                </span>
              ))}
            </div>
          </div>

          <div className="border-bone-100/15 mt-12 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sage-300 font-mono text-[0.6875rem]">
              © {new Date().getFullYear()} Boreall Fern Inc. — Federally
              incorporated in Canada.
            </p>
            <p className="text-sage-300/70 font-mono text-[0.6875rem]">
              Registered with the Canada Revenue Agency
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

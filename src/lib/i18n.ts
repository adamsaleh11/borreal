/**
 * Site copy, keyed by locale.
 *
 * `en` is the source of truth: its shape defines `Dictionary`, so a missing or
 * misspelled key in `es` is a type error rather than a blank spot on the page.
 * Structural values that are not language (section ids, corridor codes, the
 * quarter labels, the sector numerals) stay in the components — only prose
 * lives here.
 */

export const LOCALES = ["en", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** `lang` attribute per locale — the Chilean corridor is the Spanish audience. */
export const HTML_LANG: Record<Locale, string> = {
  en: "en-CA",
  es: "es-CL",
};

/** Short label shown on the toggle itself. */
export const LOCALE_LABEL: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

/** Name of each locale in its own language, for the toggle's accessible name. */
export const LOCALE_NAME: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

const en = {
  nav: {
    links: {
      platform: "Platform",
      sectors: "Sectors",
      corridor: "First corridor",
      governance: "Governance",
      roadmap: "2026",
    },
    cta: "Request an introduction",
    toggleNav: "Toggle navigation",
    menu: "Menu",
    language: "Language",
  },

  hero: {
    tagline:
      "A Canadian, family-owned company enabling strategic industrial trade between Canada and South America.",
    title:
      "Opening durable industrial corridors between Canada and South America.",
    description:
      "Boreall Fern Inc. connects Canadian capability with South American demand — beginning with Chile. We integrate trade, regulation, financing, and public–private collaboration so that market entry is structured, compliant, and built to hold.",
    landscapeAlt:
      "Stylised topographic corridor running from the Canadian boreal to the Chilean Andes",
    primaryCta: "Request an introduction",
    secondaryCta: "Explore sectors",
  },

  corridors: {
    CA: { name: "Canada", role: "Operational & governance base" },
    CL: { name: "Chile", role: "Primary gateway to South America" },
    AR: { name: "Argentina", role: "Secondary regional extension" },
    CN: { name: "China", role: "Benchmark & sourcing comparison" },
  },

  platform: {
    label: "Who we are",
    title: "A trade enablement platform, built on a Canadian governance base.",
    lede: "Global supply chains are fragmenting and becoming less predictable. Over-reliance on single markets creates strategic and operational risk. What is missing is not intermediaries — it is trusted platforms that can open and diversify markets, and remain accountable once they are open.",
    valueProp: [
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
    ],
  },

  sectors: {
    label: "Strategic sectors",
    title: "Five sectors where Canadian capability meets South American demand.",
    lede: "Our products and services span industrial machinery and critical spare parts, water and desalination systems, agro-industrial and food processing solutions, circular-economy technologies, and commercial representation for market entry.",
    items: [
      {
        title: "Mining & critical minerals",
        body: "Copper, lithium, and rare minerals — the backbone of the Canada–Chile industrial relationship.",
      },
      {
        title: "Water infrastructure",
        body: "Desalination, pumping, filtration, and industrial pipeline systems for arid-region operations.",
      },
      {
        title: "Agri-food & fisheries",
        body: "Dairy, food processing, fisheries and salmon farming, plus agro-industrial machinery.",
      },
      {
        title: "Telecom, manufacturing & construction",
        body: "Industrial machinery, equipment, and the critical spare parts that keep it running.",
      },
      {
        title: "Energy transition & circular economy",
        body: "Electric vehicles, charging infrastructure, recycling and composting technologies.",
      },
    ],
  },

  corridor: {
    label: "First active corridor",
    title: "Legumes & pulses, from the Prairies to Chile.",
    body: "Our first structured product line moves soybeans, lentils, chickpeas and dry peas from Saskatchewan and Alberta producers to Chilean distributors and food processors — a containerised, repeatable model that proves the corridor before it scales.",
    cta: "Discuss this corridor",
    facts: [
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
    ],
    footnote:
      "Growth is deliberately conservative: pre-negotiated purchase agreements, currency monitoring on CAD–CLP exposure, export compliance and insurance coverage, and reinvestment of profits through the initial phase.",
  },

  model: {
    label: "Business model",
    title:
      "Commercial where it should be commercial; institutional where it must be.",
    items: [
      {
        title: "B2B & B2P",
        body: "Business-to-business and business-to-public operations, serving private industry and public institutions alike.",
      },
      {
        title: "Public–private partnerships",
        body: "PPP structures for infrastructure and industrial projects that neither side can carry alone.",
      },
      {
        title: "Three revenue lines",
        body: "Product margins, commercial representation, and advisory services — no reliance on any single stream.",
      },
    ],
  },

  governance: {
    label: "Governance & values",
    title: "Discipline is the product.",
    lede: "Boreall Fern operates under Canadian legal and ethical standards, with external legal and accounting oversight and decisions that are documented and auditable. In cross-border industrial trade, that is not overhead — it is the thing being sold.",
    items: [
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
    ],
    ecosystemLabel: "Institutional ecosystem",
    ecosystemBody:
      "We engage federal, provincial, and municipal institutions — including EDC and Global Affairs Canada — alongside banks and financial institutions, lawyers, accountants and insurers, and export and economic development agencies.",
  },

  roadmap: {
    label: "2026 roadmap",
    title: "Intentional and disciplined execution.",
    status: [
      "Federally incorporated and registered with the Canada Revenue Agency",
      "Corporate name, email systems, and legal structure in place",
      "Banking relationships and credit facilities in progress",
      "Initial institutional focus on Quebec and Ontario",
    ],
    phases: [
      {
        title: "Foundation",
        body: "Legal, banking, branding, and institutional engagement.",
      },
      {
        title: "Validation",
        body: "Trade missions, fairs, lead generation, and market validation.",
      },
      {
        title: "Execution",
        body: "First contracts, revenue generation, and gradual scaling.",
      },
    ],
  },

  contact: {
    label: "Contact",
    title: "Built on trust, diversification, and long-term value creation.",
    body: "We are speaking with Canadian manufacturers and producers seeking South American demand, Chilean distributors seeking Canadian supply, and the banks, insurers, and trade agencies that make those corridors work.",
    cta: "Start a conversation",
  },

  footer: {
    tagline:
      "Industrial & strategic trade enablement. Canada · Chile · South America · China.",
    /** `{year}` is substituted at render time. */
    copyright: "© {year} Boreall Fern Inc. — Federally incorporated in Canada.",
    registered: "Registered with the Canada Revenue Agency",
  },
};

/** Widened from `en` (no `as const`), so translations are strings, not literals. */
export type Dictionary = typeof en;

/**
 * Spanish for the Chilean corridor — formal commercial register, the one the
 * counterparties in Santiago actually read contracts in.
 */
const es: Dictionary = {
  nav: {
    links: {
      platform: "Plataforma",
      sectors: "Sectores",
      corridor: "Primer corredor",
      governance: "Gobernanza",
      roadmap: "2026",
    },
    cta: "Solicitar una presentación",
    toggleNav: "Alternar navegación",
    menu: "Menú",
    language: "Idioma",
  },

  hero: {
    tagline:
      "Una empresa canadiense de propiedad familiar que habilita el comercio industrial estratégico entre Canadá y Sudamérica.",
    title:
      "Abrimos corredores industriales duraderos entre Canadá y Sudamérica.",
    description:
      "Boreall Fern Inc. conecta la capacidad industrial canadiense con la demanda sudamericana, comenzando por Chile. Integramos comercio, regulación, financiamiento y colaboración público-privada para que la entrada al mercado sea estructurada, conforme a la norma y construida para perdurar.",
    landscapeAlt:
      "Corredor topográfico estilizado que va desde el bosque boreal canadiense hasta los Andes chilenos",
    primaryCta: "Solicitar una presentación",
    secondaryCta: "Explorar sectores",
  },

  corridors: {
    CA: { name: "Canadá", role: "Base operativa y de gobernanza" },
    CL: { name: "Chile", role: "Puerta de entrada principal a Sudamérica" },
    AR: { name: "Argentina", role: "Extensión regional secundaria" },
    CN: { name: "China", role: "Referencia y comparación de abastecimiento" },
  },

  platform: {
    label: "Quiénes somos",
    title:
      "Una plataforma de habilitación comercial, construida sobre una base de gobernanza canadiense.",
    lede: "Las cadenas de suministro globales se están fragmentando y son cada vez menos predecibles. La dependencia excesiva de un solo mercado genera riesgo estratégico y operativo. Lo que falta no son intermediarios: son plataformas confiables capaces de abrir y diversificar mercados, y de responder por ellos una vez abiertos.",
    valueProp: [
      {
        title: "Una plataforma, no un intermediario",
        body: "No nos limitamos a presentar a dos partes y retirarnos. Acompañamos la habilitación regulatoria, el financiamiento, la logística y el escalamiento.",
      },
      {
        title: "Riesgo de entrada, reducido",
        body: "Inteligencia regulatoria, institucional y de mercado levantada antes de comprometer capital, para que el primer embarque no sea la primera prueba.",
      },
      {
        title: "De la identificación a la ejecución",
        body: "Acompañamos a nuestros clientes desde la identificación del mercado hasta la ejecución y el escalamiento, en lugar de desvincularnos al firmar el contrato.",
      },
    ],
  },

  sectors: {
    label: "Sectores estratégicos",
    title:
      "Cinco sectores donde la capacidad canadiense se encuentra con la demanda sudamericana.",
    lede: "Nuestros productos y servicios abarcan maquinaria industrial y repuestos críticos, sistemas de agua y desalinización, soluciones agroindustriales y de procesamiento de alimentos, tecnologías de economía circular y representación comercial para la entrada al mercado.",
    items: [
      {
        title: "Minería y minerales críticos",
        body: "Cobre, litio y minerales raros: la columna vertebral de la relación industrial entre Canadá y Chile.",
      },
      {
        title: "Infraestructura hídrica",
        body: "Desalinización, bombeo, filtración y sistemas de tuberías industriales para operaciones en zonas áridas.",
      },
      {
        title: "Agroalimentos y pesca",
        body: "Lácteos, procesamiento de alimentos, pesca y salmonicultura, además de maquinaria agroindustrial.",
      },
      {
        title: "Telecomunicaciones, manufactura y construcción",
        body: "Maquinaria industrial, equipos y los repuestos críticos que los mantienen operativos.",
      },
      {
        title: "Transición energética y economía circular",
        body: "Vehículos eléctricos, infraestructura de carga, tecnologías de reciclaje y compostaje.",
      },
    ],
  },

  corridor: {
    label: "Primer corredor activo",
    title: "Legumbres y leguminosas, de las Praderas a Chile.",
    body: "Nuestra primera línea de productos estructurada traslada soya, lentejas, garbanzos y arvejas secas desde productores de Saskatchewan y Alberta hacia distribuidores y procesadores de alimentos chilenos: un modelo contenedorizado y repetible que valida el corredor antes de escalarlo.",
    cta: "Conversemos sobre este corredor",
    facts: [
      {
        k: "Origen",
        v: "Saskatchewan y Alberta",
        d: "Contratos a granel directamente con productores canadienses.",
      },
      {
        k: "Destino",
        v: "Chile",
        d: "Distribuidores y procesadores de alimentos, con una base de compradores diversificada.",
      },
      {
        k: "Unidad",
        v: "Contenedor de 21 t",
        d: "El embarque en contenedor como unidad repetible de escala.",
      },
      {
        k: "Productos",
        v: "Cuatro leguminosas",
        d: "Soya, lentejas, garbanzos, arvejas secas.",
      },
    ],
    footnote:
      "El crecimiento es deliberadamente conservador: acuerdos de compra prenegociados, monitoreo de la exposición cambiaria CAD–CLP, cumplimiento de exportación y cobertura de seguros, y reinversión de utilidades durante la fase inicial.",
  },

  model: {
    label: "Modelo de negocio",
    title: "Comercial donde debe ser comercial; institucional donde tiene que serlo.",
    items: [
      {
        title: "B2B y B2P",
        body: "Operaciones de empresa a empresa y de empresa a sector público, al servicio tanto de la industria privada como de las instituciones públicas.",
      },
      {
        title: "Alianzas público-privadas",
        body: "Estructuras APP para proyectos industriales y de infraestructura que ninguna de las partes puede sostener por sí sola.",
      },
      {
        title: "Tres líneas de ingreso",
        body: "Márgenes de producto, representación comercial y servicios de asesoría: sin dependencia de una sola fuente.",
      },
    ],
  },

  governance: {
    label: "Gobernanza y valores",
    title: "La disciplina es el producto.",
    lede: "Boreall Fern opera bajo estándares legales y éticos canadienses, con supervisión legal y contable externa y decisiones documentadas y auditables. En el comercio industrial transfronterizo, eso no es un costo administrativo: es precisamente lo que se ofrece.",
    items: [
      {
        title: "Integridad y transparencia",
        body: "Cero tolerancia a la corrupción, el soborno o la influencia indebida. Únicamente relaciones basadas en contratos.",
      },
      {
        title: "Estado de derecho y cumplimiento",
        body: "Operamos bajo estándares legales y éticos canadienses, respetando las normas del comercio internacional.",
      },
      {
        title: "Rendición de cuentas y responsabilidad",
        body: "Roles claros, supervisión legal y contable externa, y decisiones documentadas y auditables.",
      },
      {
        title: "Riesgo y disciplina financiera",
        body: "Exposición evaluada transacción por transacción, instrumentos de financiamiento comercial y seguros, y sin apalancamiento especulativo.",
      },
    ],
    ecosystemLabel: "Ecosistema institucional",
    ecosystemBody:
      "Nos vinculamos con instituciones federales, provinciales y municipales —incluidas EDC y Global Affairs Canada— junto a bancos e instituciones financieras, abogados, contadores y aseguradoras, y agencias de exportación y desarrollo económico.",
  },

  roadmap: {
    label: "Hoja de ruta 2026",
    title: "Ejecución intencionada y disciplinada.",
    status: [
      "Constituida federalmente e inscrita ante la Agencia Tributaria de Canadá (CRA)",
      "Razón social, sistemas de correo y estructura legal ya establecidos",
      "Relaciones bancarias y líneas de crédito en curso",
      "Foco institucional inicial en Quebec y Ontario",
    ],
    phases: [
      {
        title: "Fundación",
        body: "Aspectos legales, bancarios, de marca y vinculación institucional.",
      },
      {
        title: "Validación",
        body: "Misiones comerciales, ferias, generación de oportunidades y validación de mercado.",
      },
      {
        title: "Ejecución",
        body: "Primeros contratos, generación de ingresos y escalamiento gradual.",
      },
    ],
  },

  contact: {
    label: "Contacto",
    title:
      "Construido sobre la confianza, la diversificación y la creación de valor a largo plazo.",
    body: "Conversamos con fabricantes y productores canadienses que buscan demanda sudamericana, con distribuidores chilenos que buscan oferta canadiense, y con los bancos, aseguradoras y agencias de comercio que hacen posibles esos corredores.",
    cta: "Iniciar una conversación",
  },

  footer: {
    tagline:
      "Habilitación de comercio industrial y estratégico. Canadá · Chile · Sudamérica · China.",
    copyright: "© {year} Boreall Fern Inc. — Constituida federalmente en Canadá.",
    registered: "Inscrita ante la Agencia Tributaria de Canadá",
  },
};

export const DICTIONARIES: Record<Locale, Dictionary> = { en, es };

/**
 * Site copy, keyed by locale.
 *
 * `en` is the source of truth: its shape defines `Dictionary`, so a missing or
 * misspelled key in `es` is a type error rather than a blank spot on the page.
 * Structural values that are not language (section ids, the route keys, the
 * quarter labels, the numerals) stay in the components — only prose lives here.
 */

export const LOCALES = ["en", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** `lang` attribute per locale — the Chilean buyers are the Spanish audience. */
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
      pulses: "What we ship",
      platform: "Who we are",
      governance: "Governance",
      roadmap: "2026",
    },
    cta: "Request a quote",
    toggleNav: "Toggle navigation",
    menu: "Menu",
    language: "Language",
  },

  hero: {
    tagline:
      "A Canadian, family-owned pulse exporter. Prairie growers to Chilean buyers, under direct contract.",
    title: "Canadian pulses for Chile.",
    description:
      "We move lentils from Saskatchewan and Alberta farms to distributors and food processors in Chile — contracted direct with the grower, inspected to Chilean import standard, shipped by the container. Chickpeas, dry peas, soybeans and grain travel the same lane as demand builds.",
    landscapeAlt:
      "Stylised topographic corridor running from the Canadian Prairies to the Chilean coast",
    primaryCta: "Request a quote for a container",
    secondaryCta: "See how a shipment works",
  },

  /** The four facts that sit in the rail directly under the hero. */
  route: {
    origin: {
      k: "Origin",
      v: "Saskatchewan & Alberta",
      d: "Bought under contract, direct from the grower.",
    },
    destination: {
      k: "Destination",
      v: "Chile",
      d: "Distributors and food processors, diversified buyers.",
    },
    product: {
      k: "Shipping now",
      v: "Lentils",
      d: "Pulses and grains follow the same lane.",
    },
    unit: {
      k: "Unit",
      v: "21 t container",
      d: "The repeatable unit we price and scale on.",
    },
  },

  pulses: {
    label: "What we ship",
    title: "Lentils today, on a lane built to carry grain.",
    body: "Lentils are what moves right now: contracted with growers in Saskatchewan and Alberta, inspected against the sample before loading, and shipped in 21-tonne containers to buyers in Chile. Everything standing behind that container — the grower contracts, the phytosanitary and origin paperwork, the freight, the insurance, the buyer relationships — is commodity-agnostic. Adding a pulse or a grain is a purchase order, not a new business.",
    ladderLabel: "Product ladder",
    ladder: [
      {
        stage: "Shipping now",
        title: "Lentils",
        body: "Red and green, contracted at origin and containerised for Chilean distributors and processors.",
      },
      {
        stage: "Next",
        title: "Chickpeas & dry peas",
        body: "Same growing regions, same buyers, same documentation. Added as buyer demand is confirmed.",
      },
      {
        stage: "As volume builds",
        title: "Soybeans & grains",
        body: "The lane was built for grain rather than for a single pulse, and widens without being rebuilt.",
      },
    ],
    cta: "Request a quote for a container",
    footnote:
      "Growth is deliberately conservative: pre-negotiated purchase agreements, currency monitoring on CAD–CLP exposure, export compliance and cargo insurance on every shipment, and reinvestment of margin through the initial phase.",
  },

  platform: {
    label: "Who we are",
    title: "A Canadian family business built around one trade lane.",
    lede: "Boreall Fern Inc. is a federally incorporated, family-owned Canadian exporter. We buy pulses under direct contract from Prairie growers and sell them to distributors and food processors in Chile. One origin, one destination, one set of relationships — held long enough to be worth something at both ends.",
    valueProp: [
      {
        title: "Why Saskatchewan & Alberta",
        body: "Canada is the world's largest lentil exporter and the Prairies grow nearly all of it. Buying at origin, under contract with the grower, settles grade and price before a container is ever booked.",
      },
      {
        title: "Why Chile",
        body: "Pulses are a staple of the Chilean table and domestic production covers only part of the demand. Canada–Chile trade runs duty-free under the CCFTA, and Chilean import controls reward supply that arrives documented.",
      },
      {
        title: "What we solve",
        body: "Cargo that matches the sample, a paper trail that runs from the field to the port, and contracts held directly with producers instead of a chain of resellers between the farm and the buyer.",
      },
    ],
  },

  governance: {
    label: "Governance & risk",
    title: "Discipline is the product.",
    lede: "Agri-export goes wrong on paperwork, cargo and currency far more often than on price. We run each of those as a named control, under Canadian legal and accounting standards with external oversight.",
    items: [
      {
        title: "Export compliance",
        body: "CFIA phytosanitary certification, Chilean SAG import requirements and CCFTA origin documentation prepared per shipment — not once a year.",
      },
      {
        title: "Cargo & counterparty cover",
        body: "Marine cargo insurance on every container and receivables cover on the buyer side. Nothing leaves the terminal uninsured.",
      },
      {
        title: "CAD–CLP exposure",
        body: "Contracts priced and covered against the currency movement between purchase in Canada and payment in Chile. No speculative positions.",
      },
      {
        title: "Contracts, not handshakes",
        body: "Zero tolerance for facilitation payments or undue influence, under Canada's foreign-bribery law. Every relationship at both ends is written down.",
      },
    ],
    ecosystemLabel: "Institutional ecosystem",
    ecosystemBody:
      "We work alongside EDC, the Trade Commissioner Service, and the Canadian banks, insurers, customs brokers and freight forwarders that stand behind an export before the first container moves.",
  },

  roadmap: {
    label: "2026 roadmap",
    title: "One container at a time.",
    status: [
      "Federally incorporated and registered with the Canada Revenue Agency",
      "Grower relationships in Saskatchewan and Alberta being contracted",
      "Banking, trade finance and cargo insurance arrangements in progress",
    ],
    phases: [
      {
        title: "Foundation",
        body: "Grower contracts, export registrations, banking and trade finance.",
      },
      {
        title: "First containers",
        body: "Buyer qualification in Chile, sample shipments, quality confirmed against contract.",
      },
      {
        title: "Repeat volume",
        body: "Recurring container volume, a second pulse line, margin reinvested.",
      },
    ],
  },

  contact: {
    label: "Contact",
    title: "Let's talk about a container.",
    body: "We are speaking with Chilean distributors and food processors looking for contracted Canadian supply, and with Prairie growers and grain handlers who want a direct lane south.",
    /** The single soft mention of anything beyond pulses — deliberately one line. */
    expansion:
      "Other Canadian goods will follow this corridor in time. Pulses are what we run today.",
    cta: "Request a quote for a container",
  },

  /** Footer route stamp. */
  corridors: {
    CA: "Canada",
    CL: "Chile",
  },

  footer: {
    tagline:
      "Canadian pulses for Chile. Contracted at the farm, delivered by the container.",
    /** `{year}` is substituted at render time. */
    copyright: "© {year} Boreall Fern Inc. — Federally incorporated in Canada.",
    registered: "Registered with the Canada Revenue Agency",
  },
};

/** Widened from `en` (no `as const`), so translations are strings, not literals. */
export type Dictionary = typeof en;

/**
 * Spanish for the Chilean buyers — formal commercial register, the one the
 * counterparties in Santiago actually read contracts in. Note "legumbres",
 * which is the word the trade uses in Chile, where English says "pulses".
 */
const es: Dictionary = {
  nav: {
    links: {
      pulses: "Qué exportamos",
      platform: "Quiénes somos",
      governance: "Gobernanza",
      roadmap: "2026",
    },
    cta: "Solicitar cotización",
    toggleNav: "Alternar navegación",
    menu: "Menú",
    language: "Idioma",
  },

  hero: {
    tagline:
      "Exportadora canadiense de legumbres, de propiedad familiar. Del productor de las Praderas al comprador chileno, mediante contrato directo.",
    title: "Legumbres canadienses para Chile.",
    description:
      "Trasladamos lentejas desde predios de Saskatchewan y Alberta hasta distribuidores y procesadores de alimentos en Chile: contratadas directamente con el productor, inspeccionadas conforme a la norma de importación chilena y embarcadas por contenedor. Garbanzos, arvejas secas, soya y granos recorren la misma ruta a medida que crece la demanda.",
    landscapeAlt:
      "Corredor topográfico estilizado que va desde las Praderas canadienses hasta la costa chilena",
    primaryCta: "Solicitar cotización por contenedor",
    secondaryCta: "Cómo funciona un embarque",
  },

  route: {
    origin: {
      k: "Origen",
      v: "Saskatchewan y Alberta",
      d: "Compra bajo contrato, directamente al productor.",
    },
    destination: {
      k: "Destino",
      v: "Chile",
      d: "Distribuidores y procesadores de alimentos, con compradores diversificados.",
    },
    product: {
      k: "En embarque hoy",
      v: "Lentejas",
      d: "Legumbres y granos siguen la misma ruta.",
    },
    unit: {
      k: "Unidad",
      v: "Contenedor de 21 t",
      d: "La unidad repetible sobre la que cotizamos y escalamos.",
    },
  },

  pulses: {
    label: "Qué exportamos",
    title: "Lentejas hoy, sobre una ruta construida para granos.",
    body: "Las lentejas son lo que se mueve actualmente: contratadas con productores de Saskatchewan y Alberta, inspeccionadas contra la muestra antes de la carga y embarcadas en contenedores de 21 toneladas hacia compradores en Chile. Todo lo que respalda ese contenedor —los contratos con productores, la documentación fitosanitaria y de origen, el flete, los seguros, las relaciones con los compradores— es independiente del producto. Incorporar una legumbre o un grano es una orden de compra, no un negocio nuevo.",
    ladderLabel: "Escalera de productos",
    ladder: [
      {
        stage: "En embarque hoy",
        title: "Lentejas",
        body: "Rojas y verdes, contratadas en origen y contenedorizadas para distribuidores y procesadores chilenos.",
      },
      {
        stage: "A continuación",
        title: "Garbanzos y arvejas secas",
        body: "Mismas zonas de cultivo, mismos compradores, misma documentación. Se incorporan al confirmarse la demanda.",
      },
      {
        stage: "Al crecer el volumen",
        title: "Soya y granos",
        body: "La ruta fue construida para granos y no para una sola legumbre: se amplía sin tener que rehacerla.",
      },
    ],
    cta: "Solicitar cotización por contenedor",
    footnote:
      "El crecimiento es deliberadamente conservador: acuerdos de compra prenegociados, monitoreo de la exposición cambiaria CAD–CLP, cumplimiento de exportación y seguro de carga en cada embarque, y reinversión del margen durante la fase inicial.",
  },

  platform: {
    label: "Quiénes somos",
    title: "Una empresa familiar canadiense construida en torno a una sola ruta comercial.",
    lede: "Boreall Fern Inc. es una exportadora canadiense de propiedad familiar, constituida federalmente. Compramos legumbres bajo contrato directo a productores de las Praderas y las vendemos a distribuidores y procesadores de alimentos en Chile. Un origen, un destino y un conjunto de relaciones sostenidas el tiempo suficiente para que valgan algo en ambos extremos.",
    valueProp: [
      {
        title: "Por qué Saskatchewan y Alberta",
        body: "Canadá es el mayor exportador mundial de lentejas y las Praderas concentran casi toda su producción. Comprar en origen, bajo contrato con el productor, define calidad y precio antes de reservar un contenedor.",
      },
      {
        title: "Por qué Chile",
        body: "Las legumbres son parte esencial de la mesa chilena y la producción nacional cubre solo parte de la demanda. El comercio Canadá–Chile opera libre de aranceles bajo el TLC, y el control de importaciones chileno premia el abastecimiento que llega documentado.",
      },
      {
        title: "Qué resolvemos",
        body: "Carga que corresponde a la muestra, una trazabilidad que va del predio al puerto, y contratos sostenidos directamente con los productores en lugar de una cadena de revendedores entre el campo y el comprador.",
      },
    ],
  },

  governance: {
    label: "Gobernanza y riesgo",
    title: "La disciplina es el producto.",
    lede: "La agroexportación falla por documentación, carga y tipo de cambio mucho más que por precio. Gestionamos cada uno de esos frentes como un control definido, bajo estándares legales y contables canadienses con supervisión externa.",
    items: [
      {
        title: "Cumplimiento de exportación",
        body: "Certificación fitosanitaria de la CFIA, requisitos de importación del SAG chileno y documentación de origen del TLC preparados por embarque, no una vez al año.",
      },
      {
        title: "Cobertura de carga y contraparte",
        body: "Seguro marítimo de carga en cada contenedor y cobertura de cuentas por cobrar del lado del comprador. Nada sale del terminal sin asegurar.",
      },
      {
        title: "Exposición CAD–CLP",
        body: "Contratos cotizados y cubiertos frente a la variación cambiaria entre la compra en Canadá y el pago en Chile. Sin posiciones especulativas.",
      },
      {
        title: "Contratos, no acuerdos de palabra",
        body: "Cero tolerancia a pagos de facilitación o influencia indebida, conforme a la ley canadiense contra el soborno transnacional. Toda relación queda por escrito en ambos extremos.",
      },
    ],
    ecosystemLabel: "Ecosistema institucional",
    ecosystemBody:
      "Trabajamos junto a EDC, el Servicio de Delegados Comerciales de Canadá y los bancos, aseguradoras, agentes de aduana y transitarios canadienses que respaldan una exportación antes de que se mueva el primer contenedor.",
  },

  roadmap: {
    label: "Hoja de ruta 2026",
    title: "Un contenedor a la vez.",
    status: [
      "Constituida federalmente e inscrita ante la Agencia Tributaria de Canadá (CRA)",
      "Relaciones con productores de Saskatchewan y Alberta en proceso de contratación",
      "Acuerdos bancarios, de financiamiento comercial y de seguro de carga en curso",
    ],
    phases: [
      {
        title: "Fundación",
        body: "Contratos con productores, registros de exportación, banca y financiamiento comercial.",
      },
      {
        title: "Primeros contenedores",
        body: "Calificación de compradores en Chile, embarques de muestra y calidad verificada contra contrato.",
      },
      {
        title: "Volumen recurrente",
        body: "Volumen periódico de contenedores, una segunda línea de legumbres y margen reinvertido.",
      },
    ],
  },

  contact: {
    label: "Contacto",
    title: "Conversemos sobre un contenedor.",
    body: "Conversamos con distribuidores y procesadores de alimentos chilenos que buscan abastecimiento canadiense contratado, y con productores y acopiadores de las Praderas que quieren una ruta directa hacia el sur.",
    expansion:
      "Con el tiempo, otros bienes canadienses seguirán este corredor. Hoy lo que movemos son legumbres.",
    cta: "Solicitar cotización por contenedor",
  },

  corridors: {
    CA: "Canadá",
    CL: "Chile",
  },

  footer: {
    tagline:
      "Legumbres canadienses para Chile. Contratadas en el predio, entregadas por contenedor.",
    copyright: "© {year} Boreall Fern Inc. — Constituida federalmente en Canadá.",
    registered: "Inscrita ante la Agencia Tributaria de Canadá",
  },
};

export const DICTIONARIES: Record<Locale, Dictionary> = { en, es };

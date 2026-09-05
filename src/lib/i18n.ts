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
      "We are building a direct lane for lentils from Saskatchewan, Alberta and Manitoba farms to distributors and food processors in Chile — contracted direct with the grower, inspected to Chilean import standard, shipped by the container. Chickpeas, dry peas, soybeans and grain will follow the same lane as demand builds.",
    landscapeAlt:
      "Canola in flower stretching to the horizon under a towering bank of cloud at sunset, on the Canadian Prairies",
    primaryCta: "Request a quote for a container",
    secondaryCta: "See how a shipment works",
  },

  /** The four facts that sit in the rail directly under the hero. */
  route: {
    origin: {
      k: "Origin",
      v: "Saskatchewan, Alberta & Manitoba",
      d: "Contracted direct with the grower, not through resellers.",
    },
    destination: {
      k: "Destination",
      v: "Chile",
      d: "Distributors and food processors, diversified buyers.",
    },
    product: {
      k: "Lead product",
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
    title: "Lentils first, on a lane built to carry grain.",
    body: "Lentils are our lead product: being contracted with growers in Saskatchewan, Alberta and Manitoba, inspected against the sample before loading, and shipped in 21-tonne containers to buyers in Chile. Everything standing behind that container — the grower contracts, the phytosanitary and origin paperwork, the freight, the insurance, the buyer relationships — is commodity-agnostic. Adding a pulse or a grain is a purchase order, not a new business.",
    ladderLabel: "Product ladder",
    ladder: [
      {
        stage: "Lead product",
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
        title: "Why Saskatchewan, Alberta & Manitoba",
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
      "We are establishing relationships with the financial, logistics and trade-support institutions that back Canadian businesses and their products into international markets — banks, insurers, customs brokers and freight forwarders.",
  },

  roadmap: {
    label: "2026 roadmap",
    title: "One container at a time.",
    status: [
      "Federally incorporated and registered with the Canada Revenue Agency",
      "Grower relationships in Saskatchewan, Alberta and Manitoba being contracted",
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
      "Other Canadian goods will follow this corridor in time. Pulses are where we start.",
    cta: "Request a quote for a container",
  },

  /**
   * Photography. `alt` is what a screen reader hears; the visible captions
   * carry the argument the pairing is there to make.
   */
  media: {
    pairLabel: "Two harvests, one lane",
    pairNote:
      "Canada and Chile sit in opposite hemispheres and harvest half a year apart. That offset is the reason a single lane between them is worth building.",
    corridorLabel: "Field to port",
    corridorNote:
      "The documentation we are putting in place has to hold from the grower's field all the way to the receiving port.",
    pulsesCaption: "Split red lentils — the lead product.",
    creditsLabel: "Photography",
    creditsNote:
      "Documentary photographs by the photographers named, used under the licence shown against each. No AI-generated imagery.",
    alt: {
      lentils: "Split red lentils filling the frame",
      harvest:
        "A line of combine harvesters cutting a grain field in a haze of dust on the Canadian Prairies",
      rapeseed:
        "A field of rapeseed in full yellow flower under a clear sky in southern Chile",
      limari:
        "Irrigated smallholdings and green fields patterned across the Limarí valley in Chile, with dry hills behind",
      port: "Container gantry cranes and moored fishing boats at the port of Valparaíso, Chile",
    },
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
      "Estamos construyendo una ruta directa para llevar lentejas desde predios de Saskatchewan, Alberta y Manitoba hasta distribuidores y procesadores de alimentos en Chile: contratadas directamente con el productor, inspeccionadas conforme a la norma de importación chilena y embarcadas por contenedor. Garbanzos, arvejas secas, soya y granos seguirán la misma ruta a medida que crezca la demanda.",
    landscapeAlt:
      "Canola en flor que se extiende hasta el horizonte bajo un gran banco de nubes al atardecer, en las Praderas canadienses",
    primaryCta: "Solicitar cotización por contenedor",
    secondaryCta: "Cómo funciona un embarque",
  },

  route: {
    origin: {
      k: "Origen",
      v: "Saskatchewan, Alberta y Manitoba",
      d: "Contratación directa con el productor, sin revendedores.",
    },
    destination: {
      k: "Destino",
      v: "Chile",
      d: "Distribuidores y procesadores de alimentos, con compradores diversificados.",
    },
    product: {
      k: "Producto principal",
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
    title: "Lentejas primero, sobre una ruta construida para granos.",
    body: "Las lentejas son nuestro producto principal: en proceso de contratación con productores de Saskatchewan, Alberta y Manitoba, inspeccionadas contra la muestra antes de la carga y embarcadas en contenedores de 21 toneladas hacia compradores en Chile. Todo lo que respalda ese contenedor —los contratos con productores, la documentación fitosanitaria y de origen, el flete, los seguros, las relaciones con los compradores— es independiente del producto. Incorporar una legumbre o un grano es una orden de compra, no un negocio nuevo.",
    ladderLabel: "Escalera de productos",
    ladder: [
      {
        stage: "Producto principal",
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
        title: "Por qué Saskatchewan, Alberta y Manitoba",
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
      "Estamos estableciendo relaciones con las instituciones financieras, logísticas y de apoyo al comercio que respaldan a las empresas canadienses y sus productos en los mercados internacionales: bancos, aseguradoras, agentes de aduana y transitarios.",
  },

  roadmap: {
    label: "Hoja de ruta 2026",
    title: "Un contenedor a la vez.",
    status: [
      "Constituida federalmente e inscrita ante la Agencia Tributaria de Canadá (CRA)",
      "Relaciones con productores de Saskatchewan, Alberta y Manitoba en proceso de contratación",
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
      "Con el tiempo, otros bienes canadienses seguirán este corredor. Las legumbres son nuestro punto de partida.",
    cta: "Solicitar cotización por contenedor",
  },

  media: {
    pairLabel: "Dos cosechas, una misma ruta",
    pairNote:
      "Canadá y Chile se ubican en hemisferios opuestos y cosechan con medio año de diferencia. Ese desfase es la razón por la que vale la pena construir una ruta única entre ambos.",
    corridorLabel: "Del campo al puerto",
    corridorNote:
      "La documentación que estamos implementando debe sostenerse desde el predio del productor hasta el puerto de destino.",
    pulsesCaption: "Lenteja roja partida: nuestro producto principal.",
    creditsLabel: "Fotografía",
    creditsNote:
      "Fotografías documentales de los autores indicados, utilizadas bajo la licencia señalada en cada caso. Sin imágenes generadas por inteligencia artificial.",
    alt: {
      lentils: "Lentejas rojas partidas que cubren todo el encuadre",
      harvest:
        "Una hilera de cosechadoras trabajando un campo de granos entre una nube de polvo en las Praderas canadienses",
      rapeseed:
        "Un campo de raps en plena floración amarilla bajo un cielo despejado en el sur de Chile",
      limari:
        "Pequeñas parcelas de riego y campos verdes distribuidos en el valle del Limarí, en Chile, con cerros áridos al fondo",
      port: "Grúas pórtico de contenedores y botes de pesca amarrados en el puerto de Valparaíso, Chile",
    },
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

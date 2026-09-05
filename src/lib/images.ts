/**
 * Photography manifest.
 *
 * Every photograph on the site is a real, documentary photograph with a
 * verifiable licence — no AI-generated imagery, no rights-managed stock. Each
 * entry records the licence of record (the Wikimedia Commons file page), the
 * photographer, and what the frame actually shows, so the credit block in the
 * footer is generated from the same data an audit would be checked against.
 *
 * CC BY and CC BY-SA both oblige us to name the photographer and the licence
 * wherever the image appears. That obligation is why `CREDITS` is rendered and
 * not just filed: dropping the footer block would put the site out of licence.
 *
 * Files live in `public/images/`, pre-cropped to the aspect ratio they are used
 * at so `next/image` is resizing rather than re-framing. `width`/`height` are
 * the intrinsic dimensions of the file on disk.
 */

export type SiteImage = {
  /** Path under `public/`. */
  src: string;
  width: number;
  height: number;
  /** What the photograph shows, including where it was taken. */
  subject: string;
  photographer: string;
  license: string;
  licenseUrl: string;
  /** Wikimedia Commons file page — the licence of record. */
  source: string;
};

const CC_BY_2 = "https://creativecommons.org/licenses/by/2.0/";
const CC_BY_SA_3 = "https://creativecommons.org/licenses/by-sa/3.0/";
const CC_BY_SA_4 = "https://creativecommons.org/licenses/by-sa/4.0/";
const CC0 = "https://creativecommons.org/publicdomain/zero/1.0/";

export const IMAGES = {
  /** Hero. Shot near Saskatoon, so the origin end of the lane is the real thing. */
  prairieCanola: {
    src: "/images/prairie-canola-sk.jpg",
    width: 2400,
    height: 1067,
    subject: "Canola in flower at sunset, Saskatchewan (2016)",
    photographer: "Cory Denton",
    license: "CC BY 2.0",
    licenseUrl: CC_BY_2,
    source:
      "https://commons.wikimedia.org/wiki/File:Canola_Sky_(29620758675).jpg",
  },

  /** Canada half of the two-harvest pair. */
  prairieHarvest: {
    src: "/images/prairie-harvest.jpg",
    width: 1800,
    height: 1200,
    subject: "Combines harvesting on the Canadian Prairies (2012)",
    photographer: "Tony Hisgett",
    license: "CC BY 2.0",
    licenseUrl: CC_BY_2,
    source:
      "https://commons.wikimedia.org/wiki/File:Harvesting_2_(8032913111).jpg",
  },

  /** Chile half of the pair — rapeseed, the same crop as the hero, six months out of phase. */
  chileRapeseed: {
    src: "/images/chile-rapeseed.jpg",
    width: 1800,
    height: 1200,
    subject: "Rapeseed in flower, Panguipulli, Chile (2012)",
    photographer: "Cristián Carrere",
    license: "CC BY 2.0",
    licenseUrl: CC_BY_2,
    source:
      "https://commons.wikimedia.org/wiki/File:Plantaciones_de_raps._-_Flickr_-_cristian.carrere.jpg",
  },

  /** The product. CC0, so this one carries no attribution obligation at all. */
  redLentils: {
    src: "/images/red-lentils.jpg",
    width: 2400,
    height: 750,
    subject: "Split red lentils (2024)",
    photographer: "Fumikas Sagisavas",
    license: "CC0",
    licenseUrl: CC0,
    source: "https://commons.wikimedia.org/wiki/File:Red_lentils_(1).jpg",
  },

  chileLimari: {
    src: "/images/chile-limari-valley.jpg",
    width: 1800,
    height: 1200,
    subject: "Irrigated farmland in the Limarí valley, Coquimbo, Chile (2005)",
    photographer: "Bachelot Pierre J-P",
    license: "CC BY-SA 3.0",
    licenseUrl: CC_BY_SA_3,
    source:
      "https://commons.wikimedia.org/wiki/File:Vall%C3%A9e_du_Rio_Limari.jpg",
  },

  valparaisoPort: {
    src: "/images/valparaiso-port.jpg",
    width: 1800,
    height: 1200,
    subject: "Container cranes at the port of Valparaíso, Chile (2020)",
    photographer: "Corsario CL",
    license: "CC BY-SA 4.0",
    licenseUrl: CC_BY_SA_4,
    source:
      "https://commons.wikimedia.org/wiki/File:Puerto_de_Valpara%C3%ADso_0.jpg",
  },
} satisfies Record<string, SiteImage>;

/** Rendered in the footer. Required by CC BY / CC BY-SA — see the note above. */
export const CREDITS: SiteImage[] = Object.values(IMAGES);

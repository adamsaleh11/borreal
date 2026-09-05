/**
 * Copy invariants for the public site.
 *
 * The client iterates on wording, and the constraints that matter are not
 * about phrasing but about claims: which provinces we say we buy from, whether
 * the site describes the business as running or as being built, and which
 * institutions may be named. Those are asserted here so a future copy edit
 * cannot quietly reintroduce a claim we have retired.
 *
 * Run with: npm test
 */

import { test } from "node:test";
import assert from "node:assert/strict";

import { DICTIONARIES, LOCALES, type Locale } from "./i18n.ts";

/** Every string in a locale's dictionary, with a dotted path for the message. */
function entries(value: unknown, path = ""): Array<[string, string]> {
  if (typeof value === "string") return [[path, value]];
  if (Array.isArray(value)) {
    return value.flatMap((item, i) => entries(item, `${path}[${i}]`));
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([k, v]) =>
      entries(v, path ? `${path}.${k}` : k),
    );
  }
  return [];
}

function strings(locale: Locale) {
  return entries(DICTIONARIES[locale]);
}

/** Assert no copy anywhere in the site matches `pattern`. */
function forbid(pattern: RegExp, why: string) {
  for (const locale of LOCALES) {
    for (const [path, text] of strings(locale)) {
      assert.ok(
        !pattern.test(text),
        `${locale}.${path} matches ${pattern} — ${why}\n  ${text}`,
      );
    }
  }
}

// --- Growing regions -------------------------------------------------------
// Manitoba joined Saskatchewan and Alberta. Any copy that lists the growing
// provinces must list all three, or the site contradicts itself screen to
// screen.

test("copy that names growing provinces names all three", () => {
  for (const locale of LOCALES) {
    for (const [path, text] of strings(locale)) {
      if (!/Saskatchewan/.test(text)) continue;
      assert.match(
        text,
        /Manitoba/,
        `${locale}.${path} names Saskatchewan without Manitoba\n  ${text}`,
      );
      assert.match(
        text,
        /Alberta/,
        `${locale}.${path} names Saskatchewan without Alberta\n  ${text}`,
      );
    }
  }
});

// --- Formation stage, not operations ---------------------------------------
// The roadmap says grower contracts and banking are still in progress. Copy
// elsewhere must not claim shipments or institutional relationships are
// already active, or a reader lands on the gap.

test("no copy claims shipments are already moving", () => {
  forbid(/Shipping now/i, "implies containers are already moving");
  forbid(/what moves right now/i, "implies containers are already moving");
  forbid(/En embarque hoy/i, "implies containers are already moving");
  forbid(/lo que se mueve actualmente/i, "implies containers are already moving");
  forbid(/what we run today/i, "implies the lane is already running");
});

test("hero frames the lane as being built", () => {
  assert.match(DICTIONARIES.en.hero.description, /^We are building a direct lane/);
  assert.match(DICTIONARIES.es.hero.description, /^Estamos construyendo/);
});

test("lead product is framed as being contracted, not contracted", () => {
  assert.match(DICTIONARIES.en.pulses.body, /lead product/i);
  assert.match(DICTIONARIES.en.pulses.body, /being contracted/i);
  assert.match(DICTIONARIES.es.pulses.body, /en proceso de contratación/i);
});

test("institutional relationships are framed as being established", () => {
  assert.match(
    DICTIONARIES.en.governance.ecosystemBody,
    /^We are establishing relationships/,
  );
  assert.match(
    DICTIONARIES.es.governance.ecosystemBody,
    /^Estamos estableciendo relaciones/,
  );
});

// --- Institutions are not named individually -------------------------------
// Named programmes imply an endorsement or an existing relationship we do not
// have yet. They are described by category instead.

test("no individual institution is named", () => {
  forbid(/\bEDC\b/, "individual institutions are described by category only");
  forbid(/Trade Commissioner/i, "individual institutions are described by category only");
  forbid(
    /Delegados Comerciales/i,
    "individual institutions are described by category only",
  );
});

// --- Locale parity ---------------------------------------------------------

test("es mirrors the structure of en", () => {
  const paths = (locale: Locale) => strings(locale).map(([p]) => p);
  assert.deepEqual(paths("es"), paths("en"));
});

test("no copy is left empty", () => {
  for (const locale of LOCALES) {
    for (const [path, text] of strings(locale)) {
      assert.ok(text.trim().length > 0, `${locale}.${path} is empty`);
    }
  }
});

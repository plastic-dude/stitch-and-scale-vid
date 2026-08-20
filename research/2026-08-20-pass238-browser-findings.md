# Pass 238 wide-research findings — `normalization-state`

**Research date:** 2026-08-20 08:54 WAT  
**Pass:** 238  
**Angle under consideration:** `normalization-state`  
**Researcher:** Manus AI, Director/Planner  
**Campaign assumption:** Founding-tester recruitment through the free demo and early-access cohort, because no active brief was present in the refreshed repository. The audience is independent knitwear designers and pattern publishers handling raw notes, abbreviations, units, sizes, symbols, charts, schematics, and destination-specific submissions. The proposed form is a 40–45 second organic 9:16 founder short for Instagram Reels, TikTok, and YouTube Shorts. Tone is quiet, precise, craft-respecting, local-first, and explicit about raw source, normalization rule, canonical display, exceptions, and human review. No paid placement is assumed. This is a planning assumption, not a confirmed campaign brief.

## Fresh question

**When the same craft concept appears as an abbreviation, full phrase, symbol, unit, size label, or region-specific term, how can a canonical display preserve the raw source, normalization rule, scope, and exception without changing meaning or hiding what still needs review?**

The question is distinct from pass 237 `crosswalk-state`, which maps a source vocabulary to a target vocabulary. Pass 238 focuses on **normalizing variants within a vocabulary or record into a canonical display while preserving the raw source and rule**. It is distinct from `qualifier-state`, which labels one value; `relationship-state`, which connects records; `translation-state` and `locale-drift`, which concern language and locale; `chart-parity`, which concerns chart/text equivalence; `unit-state`, which concerns units; `schema-state`, which concerns record structure; `input-state`, which concerns how a value entered a record; and `crosswalk-state`, which compares source and target systems.

## Evidence gathered

### 1. CYC provides common abbreviations but preserves special definitions and regional differences

The Craft Yarn Council’s current knitting-abbreviation page says its list contains common abbreviations used by industry designers and publishers, but designers and publishers may use special abbreviations not on the list. It says definitions for special abbreviations are generally given at the beginning of a book or pattern, and that the listed definitions reflect U.S. knitting terminology. The page also shows term and measurement variants such as `BO`/bind off, `g`/gram, `cm`/centimeter, `mm`/millimeter, and U.S./Canada differences such as bind off/cast off and gauge/tension. [1]

This supports a bounded raw-to-canonical display: preserve the raw term, show the canonical term only with its system/scope, and surface a special-definition or regional exception rather than silently replacing it. A canonical display is not proof that the underlying pattern instruction is correct.

### 2. CYC charts require keys and can contain project-specific symbol variations

The current CYC knit-chart-symbol page says stitch charts are increasingly used in addition to or instead of words. It presents standardized symbols but explicitly says there are many symbol variations, especially for cables, and that viewers should always refer to the pattern key for variations. The same symbol can correspond to different right-side/wrong-side operations, and cable symbols have multiple versions. [2]

This is a strong visual opportunity: a fictional raw card `1/1 RC`, a canonical display `RIGHT CROSS`, and a visible exception `PATTERN KEY OVERRIDES`. The film must not claim automatic symbol recognition, chart parsing, or semantic correction.

### 3. CYC sizing guidance distinguishes body measurements, garment measurements, and ease

CYC’s current body-sizing guidance distinguishes actual body measurements, finished garment measurements, ease, and detailed schematics. It says sizing charts are guidelines, and individual changes can alter the appearance of a garment. [3] A normalization display must therefore preserve the measurement type and scope; `40 in`, `40 cm`, `finished chest`, and `body chest` are not interchangeable simply because they are formatted consistently. A canonical display without measurement type could erase a material distinction.

### 4. Knitty demonstrates destination-specific style and file conventions

Knitty’s current June 17, 2026 submission guidance requires its latest style guide, standard abbreviations, specified size ranges using CYC sizing, imperial and metric measurements, separate pattern and image files, individual charts and schematics where needed, and an originality/rights statement. It says work will be edited to match its style. It also distinguishes technical editing, optional test knitting, and publication. [4]

The destination-specific style rule supports a distinction between a local canonical display and a destination display. Normalization does not make a file compliant, accepted, technically edited, test-knit, rights-cleared, or published.

### 5. Unicode normalization is a narrow technical analogy, not product proof

Unicode Standard Annex #15 describes canonical and compatibility equivalence for character sequences and warns that normalization forms have different implications; canonical equivalence preserves abstract character identity, while compatibility mappings can lose distinctions. [5] This is an analogy for the film’s core boundary: a display transform may be safe for one purpose but unsafe for another. It does not prove that Stitch & Scale normalizes craft text or protects pattern semantics.

### 6. Accessibility and mobile presentation

WCAG 2.1 requires labels or instructions when content requires user input and requires information and relationships conveyed through presentation to remain available in text or programmatically determinable. [6] Use explicit `RAW`, `CANONICAL`, `SYSTEM`, `SCOPE`, `EXCEPTION`, `SOURCE`, and `HUMAN REVIEW` labels; do not rely on color or a symbol alone. Review caption-on and caption-free versions, use one narrator family, human-verify captions, and keep captions away from raw/canonical terms, units, numbers, cards, hands, faces, tables, logos, controls, menus, and primary actions.

The visual opportunity is a three-row card: `RAW: BO`, `CANONICAL: BIND OFF`, `SYSTEM: U.S.`, followed by `RAW: CAST OFF`, `CANONICAL: BIND OFF`, `SYSTEM: CANADA`, and an exception row `RAW: 1/1 RC / CANONICAL: RIGHT CROSS / PATTERN KEY OVERRIDES`. A measurement row shows `RAW: 40 / CANONICAL: 40 cm? / TYPE: UNKNOWN`, preventing a number from becoming a false canonical fact.

## Uncertainty and limits

CYC and Knitty document craft terminology, style, sizing, and submission practices, not Stitch & Scale functionality. Unicode normalization is a character-encoding analogy, not a claim about pattern semantics or product behavior. A canonical label can be wrong if the source, system, unit, scope, size, pattern key, or measurement type is wrong. Normalization cannot prove math, gauge, fit, chart readability, schematic scale, technical editing, test knitting, accessibility conformance, rights, destination compliance, acceptance, publication, or user outcome.

No source supports claims about revenue, adoption, accuracy, customer outcomes, final pricing, credentials, testimonials, urgency, or unverified product capabilities. David is a developer whose late mother knitted; he must not be presented as a knitter, knitwear designer, pattern designer, technical editor, tester, publisher, accountant, lawyer, or tax adviser.

## Decision changed by research

Research changed the concept from a generic “canonical labels” idea into the narrower **normalization-state** angle. The film will show raw terms and canonical displays only when system and scope are visible, preserve a regional or pattern-key exception, and keep an unknown measurement type visibly unresolved. The final state is `CANONICAL DISPLAY ≠ MEANING VERIFIED / HUMAN REVIEW REQUIRED`.

The selected angle is materially different from pass 237: it is not about mapping source and target vocabularies; it is about representing variants within one record or vocabulary without erasing raw input, scope, exceptions, or ambiguity. It does not reopen the imported `false-completion` or `release-gate-roster` reservations.

## Research references

[1]: https://www.craftyarncouncil.com/standards/knitting-abbreviations "Craft Yarn Council — Knitting Abbreviations Master List"
[2]: https://www.craftyarncouncil.com/standards/knit-chart-symbols "Craft Yarn Council — Knit Chart Symbols"
[3]: https://www.craftyarncouncil.com/standards/body-sizing "Craft Yarn Council — Standard Body Measurements/Sizing"
[4]: https://knitty.com/subguide.php "Knitty — Design Or Write For Knitty; updated June 17, 2026"
[5]: https://unicode.org/reports/tr15/ "Unicode Standard Annex #15 — Unicode Normalization Forms"
[6]: https://www.w3.org/TR/WCAG21/ "W3C — Web Content Accessibility Guidelines 2.1 Recommendation"

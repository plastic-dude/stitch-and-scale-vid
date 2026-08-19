# Pass 118 browser findings — unit-state — 2026-08-19

## Sources checked

| Source | Checked | Findings used | Limits |
|---|---|---|---|
| NIST SP 811, Chapter 7 — Expressing values of quantities | 2026-08-19 | A quantity value is a number multiplied by a unit; tables and axes should make the unit unambiguous. Numerical-value equations depend on the units used, and values should be clear about which unit each number belongs to. | Metrology/style guidance; not a Stitch & Scale product claim. |
| NIST — SI Units | 2026-08-19 | SI uses defined base and derived units; values are expressed with Arabic numerals paired with unit symbols. Clear SI writing helps prevent miscommunication, misinterpretation, and calculation errors. | General measurement literacy; no product behavior evidence. |
| BIPM — SI Brochure | 2026-08-19 | The SI Brochure is the authoritative international reference for the International System of Units. | The extracted landing page was brief; no Stitch & Scale evidence. |
| W3C WCAG 2.2 — Labels or Instructions | 2026-08-19 | Inputs need visible labels or instructions so people know what information and format are expected; labels should identify the control and instructions should avoid confusion. | Accessibility guidance; does not establish exact unit controls in the product. |
| Stitch & Scale local QA, craft-business, mobile-maker, and publishing/export contracts | Re-read 2026-08-19 | Measurement capture, gauge, grading, localization, charts, schematics, exports, and human review must preserve their own evidence boundaries; conversions and formatting are not proof of the underlying measurement. | Internal contracts, not current product behavior. |

## Research synthesis and decision shift

The fresh question is: **When a numeric knitwear measurement moves from capture to grading to chart, schematic, or export, what proves its unit, scale, reference basis, conversion state, and display label stayed attached to the number?** The research changes the creative from generic conversion risk to a unit-bound value card that names `VALUE / UNIT / SCALE / REFERENCE / CONVERSION / DISPLAY / ENTERED AS / USED AS`, explicitly illustrative until product proof verifies exact labels. Candidate angle: `unit-state` — **“A number without a unit is unfinished.”** Visual metaphor: the number travels alone until a unit tag, scale, and reference basis lock to it; an unlabeled number stops before grading/export. Emotional turn: number confusion becomes measurement clarity. Final line: “Carry the unit with the number.”

The candidate is distinct from `quantity-basis`, which concerns what quantity a number represents; `conversion-trace`, which follows a conversion operation; `measurement-provenance`, which records where/how a measurement was obtained; `locale-number-format`, which concerns separators and display conventions; `rounding-rule`, which concerns precision changes; `gauge-reality`, which concerns a gauge observation; `measure-point`, which identifies where a measure is taken; and `schematic-scale`, which concerns drawing scale. `unit-state` focuses on the unit, scale, and reference attachment traveling with a value across capture, grading, chart, schematic, and export.

## Product truth and blocker

No current product-proof registry or approved capture verifies unit-aware fields, unit selectors, scale/reference labels, conversion state, unit-preserving grading, chart/schematic unit display, or export behavior. Therefore no current unit handling, conversion correctness, localization, or calculation capability may be claimed. The package must remain `blocked` with one next action: provide a versioned, non-private approved capture or registry entry showing one exact measurement field with its unit/reference, one grading use, and one chart/schematic/export display, then rerun all gates.

## Planned campaign framing

Assumption: no active brief was supplied, so classify as a blocked `founder-proof` micro-explainer for knitwear designers, technical editors, test knitters, and craft-business operators; objective is to show why a numeric measurement without an attached unit and reference basis cannot safely travel through grading or publication; tone is precise, calm, non-alarmist; distribution is organic-first Instagram Reels, TikTok, and YouTube Shorts; tier is blocked proof-led planning. David remains a developer whose late mother knitted, never a knitter, designer, pattern designer, technical editor, or tester.

## References

[669] [NIST SP 811 — Rules and Style Conventions for Expressing Values of Quantities](https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-7-rules-and-style-conventions-expressing-values)
[670] [NIST — SI Units](https://www.nist.gov/pml/owm/metric-si/si-units)
[671] [BIPM — SI Brochure](https://www.bipm.org/en/publications/si-brochure)
[672] [W3C — Understanding Success Criterion 3.3.2: Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)
[673] [Stitch & Scale local skill contracts — QA, craft-business, mobile-maker, and publishing/export workflows](file:///home/ubuntu/skills/mobile-maker-workflows/SKILL.md)

## Research limit

These sources establish measurement and labeling principles, not Stitch & Scale product behavior. The candidate does not claim that the app currently exposes unit-aware fields, conversion controls, unit-preserving grading, or unit-labeled exports. Product truth remains unverified until a versioned approved capture or registry entry supplies the exact surface and behavior.

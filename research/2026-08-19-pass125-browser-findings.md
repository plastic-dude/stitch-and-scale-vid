# Pass 125 browser findings — locale-state — 2026-08-19

## Sources checked

| Source | Checked | Findings used | Limits |
|---|---|---|---|
| W3C — Number, currency, and unit formatting | 2026-08-19 | Number, currency, and unit formats vary by locale; decimal and grouping separators, numeral systems, symbols, spacing, unit names, and rounding can differ; hardcoded formats are brittle. | W3C internationalization guidance; not a Stitch & Scale product claim. |
| Unicode UTS #35 — LDML / CLDR | 2026-08-19 | Locale data covers language, region, number, date/time, measurement units, and other formatting; locale identifiers and data should be versioned for stability; language-neutral data should be stored and formatted for the client. | Unicode standard reference; no product behavior evidence. |
| W3C WCAG 2.2 — Language of Page | 2026-08-19 | The default language should be programmatically determinable so assistive technologies, browsers, and caption systems can use correct language and pronunciation behavior. | Accessibility guidance; no product behavior evidence. |
| W3C WCAG 2.2 — Language of Parts | 2026-08-19 | Language changes within content should be programmatically identified so assistive technologies can use correct pronunciation, braille, and language behavior. | Accessibility guidance; no product behavior evidence. |
| Stitch & Scale local QA, craft-business, mobile-maker, and publishing/export contracts | Re-read 2026-08-19 | Localization, unit/measurement meaning, chart/schematic readability, exports, captions, and human reviews remain separate evidence boundaries; translated text is not proof that numeric and measurement semantics survived. | Internal contracts, not current product behavior. |

## Research synthesis and decision shift

The fresh question is: **When a measurement, size label, date, or number crosses locales, what proves that the language, decimal/grouping format, unit, rounding, label, and export meaning stayed attached?** The research changes the creative from generic translation to a locale evidence card naming `LOCALE / LANGUAGE / NUMBER FORMAT / UNIT DISPLAY / ROUNDING / LABEL / DATE FORMAT / EXPORT REVIEWED`, explicitly illustrative until product proof verifies exact labels. Candidate angle: `locale-state` — **“Translated is not localized.”** Visual metaphor: one measurement passes through locale settings and splits into different displays before a meaning check. Emotional turn: translation uncertainty becomes semantic continuity. Final line: “Name the locale before you trust the number.”

The candidate is distinct from `unit-state`, which concerns unit and scale attached to a measurement; `input-state`, which concerns value origin; `version-lock`, which concerns exact artifact identity; `selection-state`, which concerns selected context propagation; `accessibility-state`, which concerns accessibility settings; `context-state`, if present, which concerns surrounding context; and `conversion-trace`, which concerns conversion steps. `locale-state` focuses on **language/locale-sensitive display and meaning across records, screens, charts, schematics, captions, and exports**.

## Product truth and blocker

No current product-proof registry or approved capture verifies locale identifiers, language metadata, decimal/grouping rules, unit display localization, rounding semantics, label translation, date formatting, right-to-left behavior, text expansion, caption language, or locale-aware export. Therefore no current localization, locale-preserving measurement semantics, or translated export capability may be claimed. The package must remain `blocked` with one next action: provide a versioned, non-private approved capture or registry entry showing one locale change across a measurement, a chart or schematic label, a caption or accessible name, and an export, then rerun all gates.

## Planned campaign framing

Assumption: no active brief was supplied, so classify as a blocked `founder-proof` micro-explainer for knitwear designers, technical editors, test knitters, and craft-business operators; objective is to show why translated labels and numbers are not enough unless locale-sensitive measurement and export meaning are checked; tone is precise, calm, non-alarmist; distribution is organic-first Instagram Reels, TikTok, and YouTube Shorts; tier is blocked proof-led planning. David remains a developer whose late mother knitted, never a knitter, designer, pattern designer, technical editor, or tester.

## References

[715] [W3C — Number, currency, and unit formatting](https://w3c.github.io/i18n-drafts/questions/qa-number-format.en.html)
[716] [Unicode — UTS #35: Unicode Locale Data Markup Language](https://www.unicode.org/reports/tr35/)
[717] [W3C — Understanding Success Criterion 3.1.1: Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html)
[718] [W3C — Understanding Success Criterion 3.1.2: Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html)
[719] [Stitch & Scale local skill contracts — QA, craft-business, mobile-maker, and publishing/export workflows](file:///home/ubuntu/skills/mobile-maker-workflows/SKILL.md)

## Research limit

These sources establish locale-sensitive formatting, identifier/data versioning, accessible language metadata, and localization principles, not Stitch & Scale product behavior. The candidate does not claim that the app currently exposes locale identifiers, language metadata, locale-aware number/unit/date formats, RTL handling, localized labels, caption language, or locale-aware export. Product truth remains unverified until a versioned approved capture or registry entry supplies the exact surface and behavior.

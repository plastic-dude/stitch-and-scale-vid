# Pass 259 Wide Research — Meaning Preservation State

**Research date:** 2026-08-20
**Pass:** 259
**Question:** When the same pattern moves through source data, PDF, phone preview, and print, which properties must remain meaningful for the reader, and what does a successful render fail to prove?

## Decision summary

The research changes the concept from generic export or preview readiness to a sharper **meaning-preservation boundary**. A file can render and still lose a property that matters: a chart symbol may lose its key relationship, a schematic may lose scale or labels, a heading may lose reading order, a link may lose purpose, a locale label may remain untranslated, or a dense table may become unusable on a phone. “It rendered” is an observation; it is not proof that the reader can identify, print, zoom, navigate, or follow every required instruction.

The planned illustrative proof surface is a `MEANING PRESERVATION` card with `SOURCE PROPERTY`, `RENDERED PROPERTY`, `MEDIUM`, `SIGNIFICANT PROPERTY`, `READER TEST`, `PHONE`, `PRINT`, `CHART / SCHEMATIC`, `LOCALE`, and `STATUS`. This is not a current Stitch & Scale export UI or an accessibility-conformance claim. It will carry `ILLUSTRATIVE — NOT PRODUCT UI` and remain blocked.

## Evidence table

| Source and access | Evidence | Uncertainty or limit | Planning decision changed |
|---|---|---|---|
| [Craft Yarn Council, Schematics](https://www.craftyarncouncil.com/standards/schematics) — accessed 2026-08-20; page date not stated | CYC defines a schematic as a visual rendering with relevant measurements and says it provides an overview of piece shape and size, a fit reference, and a modification template. It recommends reviewing the schematic before starting a project. | CYC guidance does not prove a particular schematic is accurate, to scale, readable on a phone, or preserved in an export. | Make `CHART / SCHEMATIC` a separate meaning-preservation check; do not treat a rendered image as proof of scale or fit usefulness. |
| [Craft Yarn Council, Reading Instructions & Other Basics](https://www.craftyarncouncil.com/read_instructions.html) — accessed 2026-08-20; page date not stated | CYC advises reading the relevant section, actually doing what the pattern says, and having a friend read the pattern aloud while working. It calls gauge important to producing a successful project and recommends a gauge swatch. | This is reader guidance, not technical-editing proof or a Stitch & Scale feature specification. It does not prove all sizes, charts, or translations are correct. | The visual turn becomes reader-path validation rather than “PDF rendered”; include `READER TEST` and keep physical/test-knit gates separate. |
| [W3C, PDF Techniques for WCAG](https://www.w3.org/TR/WCAG20-TECHS/pdf) — original techniques document is no longer maintained; it points to current WCAG 2.2 techniques; accessed 2026-08-20 | W3C explains that PDF accessibility depends on logical structure, reading order, tagged content, text alternatives, table structure, headings, language, and links. It states that visual output alone can lose semantics and that tagged structure supports extraction, reflow, and assistive technology. | This technology-specific techniques document is old and not a conformance decision by itself; the current WCAG 2.2 standard and actual human evaluation remain authoritative. | Add `READING ORDER`, `TEXT ALTERNATIVE`, `TABLE / CHART STRUCTURE`, and `LOCALE` as separate checks. Do not claim a rendered PDF is accessible. |
| [Digital Preservation Coalition, File formats and standards](https://www.dpconline.org/handbook/technical-solutions-and-tools/file-formats-and-standards) — accessed 2026-08-20; handbook page date not stated | DPC says preservation planning should identify what matters in the content and discusses “significant properties” as the essence or qualities to preserve. It distinguishes appearance, structure, metadata, format validation, migration, and rendition, and recommends acceptance criteria for transformations. | Preservation guidance is not a pattern-publication specification. Significant properties depend on the designated user community and content purpose. | Use `SIGNIFICANT PROPERTY` and `READER TEST`; show that format conversion or rendering can preserve appearance while losing structure, scale, meaning, or metadata. |
| [U.S. National Archives, About the Digital Preservation Program](https://www.archives.gov/preservation/digital-preservation/about) — accessed 2026-08-20; page references the 2022–2026 strategy | NARA preserves authenticity, accuracy, and functionality as feasible qualities, records fixities, tracks actions, validates formats, creates manifests and logs, and audits preserved records. | NARA is an archival institution; its controls are evidence of preservation concerns, not proof that Stitch & Scale has these controls. | Include `SOURCE VERSION`, `ACTION / PREVIEW`, and `STATUS` in the illustrative record; keep acceptance as a human gate. |
| [W3C, Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) — Recommendation dated 2024-12-12; accessed 2026-08-20 | WCAG 2.2 covers content across devices and expects text alternatives, captions, and a combination of automated testing and human evaluation. | WCAG does not prove a pattern is technically correct, print-ready, test-knit, or readable in every locale. | Require mobile, print, caption-on, caption-free, and human reader checks without claiming conformance. |
| [YouTube Help, Add subtitles & captions](https://support.google.com/youtube/answer/2734796?hl=en) — accessed 2026-08-20 | YouTube explains that subtitles and captions broaden access and can be added or edited. | Platform help does not define the video’s proof region or guarantee caption accuracy. | Use human-reviewed captions and a caption-free master; do not let captions replace readable proof. |
| [TikTok Creative Best Practices](https://ads.tiktok.com/help/article/creative-best-practices) — last updated June 2025; accessed 2026-08-20 | TikTok recommends vertical 9:16 creative, UI safe-zone visibility, early hooks, captions/text overlays, and clear CTAs. | Advertiser guidance is not a guarantee of organic performance or fixed behavior for every account or placement. | Start on the meaning-loss contradiction, keep the card central, and recheck platform behavior before approval. |

## Audience and craft-workflow interpretation

For an independent designer, the pain is not simply that an export has a bug. It is that the output can look finished while a maker loses the relationship that makes an instruction usable: a chart symbol to its key, a measurement to its schematic, a heading to its section, a link to its purpose, a unit to its locale, or a table to its readable scale. The craft workflow makes these relationships operational: readers inspect schematics for shape and fit, read instructions while working, verify gauge, and may use more than one representation of the same pattern.

The standing campaign objective remains recruiting founding testers through the free demo and early-access cohort. No event, seasonal deadline, shipping cutoff, market trend, competitor weakness, or urgency hook is adopted. The research does not support any customer outcome, adoption, accuracy, accessibility-conformance, or publication-readiness claim about Stitch & Scale.

## Product-truth reconciliation

No current Stitch & Scale product-proof registry entry or approved non-private capture verifies a meaning-preservation record, source-to-render property mapping, PDF reading order, text alternative, chart/key relation, schematic scale, locale completeness, phone/print parity, or reader-test surface. Therefore the package is **blocked**. The paper card is not current product UI and must not be presented as an export preflight result.

The concept must not claim that Stitch & Scale automatically preserves meaning, validates accessible PDFs, proves chart readability, guarantees schematic scale, verifies every locale, or makes a pattern test-knit. Calculation, record, technical edit, publication preflight, physical print review, chart readability, schematic scale, localization review, and test knitting remain separate evidence gates.

## Rights, visual opportunity, and asset decisions

Use an original paper card, one neutral page, one blank chart-like grid with no real pattern content, and one blank schematic outline with no dimensions. Do not use a real pattern, chart, schematic, customer document, PDF screenshot, private export, third-party logo, copyrighted music, or generated technical instruction. If a current product capture is ever supplied, verify version, destination, privacy, owner, rights, exact labels, source property, rendered property, and acceptance status before use.

The visual opportunity is a split card: a source-side property points to a rendered-side property, then a red gap appears beside `READER TEST: UNKNOWN`. The emotional turn is from visual completion to reader meaning. No fake PDF viewer, accessibility badge, green “pass,” or dense technical table is needed.

## Platform, caption, audio, and acceptance decisions

Use a mobile-native 9:16 master under 45 seconds with one founder narrator, one microphone family, one room tone, and one paper-placement sound motif. Captions may not cover the card, grid, schematic outline, hands, labels, chart key, measurements, buttons, menus, or CTA. Review caption-on and caption-free versions independently. The source/render relationship must remain understandable with audio muted and captions disabled. Reject mixed voices, doubled words, overlaps, room-tone jumps, stale UI, unsupported accessibility or publication claims, unlicensed audio, and dense overlays.

## Research conclusion

The evidence supports the materially distinct angle `meaning-preservation-state`: show that a successful render can still leave a reader-facing property unverified, then name the reader test and human gate. It does not authorize any Stitch & Scale export preflight, PDF accessibility, chart, schematic, localization, or publication-readiness capability claim. The package remains blocked until current product proof, rights, platform, caption, audio, and acceptance evidence exist.

## References

[1]: https://www.craftyarncouncil.com/standards/schematics "Craft Yarn Council — Schematics"
[2]: https://www.craftyarncouncil.com/read_instructions.html "Craft Yarn Council — Reading Instructions & Other Basics"
[3]: https://www.w3.org/TR/WCAG20-TECHS/pdf "W3C — PDF Techniques for WCAG 2.0"
[4]: https://www.dpconline.org/handbook/technical-solutions-and-tools/file-formats-and-standards "Digital Preservation Coalition — File formats and standards"
[5]: https://www.archives.gov/preservation/digital-preservation/about "U.S. National Archives — About the Digital Preservation Program"
[6]: https://www.w3.org/TR/WCAG22/ "W3C — Web Content Accessibility Guidelines 2.2"
[7]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Add subtitles & captions"
[8]: https://ads.tiktok.com/help/article/creative-best-practices "TikTok — Creative Best Practices"

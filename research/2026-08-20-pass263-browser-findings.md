# Pass 263 Wide Research — Recalculation Trigger State

**Research date:** 2026-08-20
**Pass:** 263
**Question:** When a source record, gauge, size, or assumption changes, what derived outputs should be named, refreshed, and human-checked before trusting them?

## Decision summary

The research changes the concept from generic stale-value freshness to a sharper **recalculation-trigger boundary**. A derived value is not trustworthy merely because it is displayed or because a source record changed. The workflow should name the source change, affected derived outputs, expected recalculation trigger, last recompute state, and human acceptance boundary.

The planned illustrative proof surface is a `RECALCULATION TRIGGER` card with `SOURCE CHANGE`, `EXPECTED TRIGGER`, `AFFECTED OUTPUTS`, `LAST RECOMPUTE`, `DISPLAYED / STORED`, `HUMAN CHECK`, and `STATUS`. This is not a current Stitch & Scale propagation engine or product UI. It will carry `ILLUSTRATIVE — NOT PRODUCT UI` and remain blocked.

## Evidence table

| Source and access | Evidence | Uncertainty or limit | Planning decision changed |
|---|---|---|---|
| [Microsoft Support, Change formula recalculation, iteration, or precision in Excel](https://support.microsoft.com/en-us/excel/change-formula-recalculation-iteration-or-precision-in-excel) — accessed 2026-08-20; page date not stated | Excel recalculates formulas when dependent cells change by default, while manual calculation can defer updates. Microsoft distinguishes recalculating changed formulas and dependents, recalculating all formulas, and iterative calculation for circular references. It warns that a linked worksheet may not be completely recalculated and a stored linked value might not be correct. | Excel-specific behavior, not a Stitch & Scale implementation or product proof. | Show source change, affected outputs, expected trigger, last recompute, displayed/stored distinction, and human check; prohibit automatic-propagation claims. |
| [Sister Mountain, How to Grade Knitting Patterns Using a Spreadsheet](https://www.sistermountain.com/blog/grade-knitting-patterns-spreadsheet) — published 2025-05-28; accessed 2026-08-20 | The practitioner workflow separates size-chart inputs, gauge, ease, body measurements, garment measurements, formulas, conversions, and stitch/row counts. It notes that displayed decimal formatting does not change underlying data and that some values are formula-derived while others are design decisions. It recommends a structured spreadsheet and consistent units. | Practitioner tutorial, not a standard or Stitch & Scale proof; example ease values are not adopted. | Show a source input change and impacted-output list without real size, gauge, count, price, or fit data; keep design decisions separate from formula outputs. |
| [W3C, Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) — Recommendation dated 2024-12-12; accessed 2026-08-20 | WCAG 2.2 applies to web content on devices and is designed to be testable with automated and human evaluation. It includes text alternatives, captions, structure, relationships, and readable presentation. | WCAG does not prove derived-value correctness, grading correctness, publication readiness, or Stitch & Scale capability. | Require caption-on and caption-free review and keep the source/output relationship legible without claiming conformance. |
| [YouTube Help, Add subtitles & captions](https://support.google.com/youtube/answer/2734796?hl=en) — accessed 2026-08-20 | YouTube says captions and subtitles expand access and can be added or edited; automatic captions may be available in the default language. | Platform help does not guarantee caption accuracy or define the video proof region. | Use human-reviewed captions and a caption-free master; captions cannot replace source/derived labels. |
| [TikTok Creative Best Practices](https://ads.tiktok.com/help/article/creative-best-practices) — last updated June 2025; accessed 2026-08-20 | Current guidance supports vertical 9:16 framing, safe-zone visibility, early hooks, captions/text overlays, and clear calls to action. | Advertiser guidance is not a guarantee of organic performance or fixed account behavior. | Open on a changed source input, keep the impacted-output chain central, and recheck platform behavior before approval. |

## Audience and craft-workflow interpretation

The audience pain is not simply that a number is stale. It is that a source change can make the dependency chain ambiguous: a gauge, size chart, ease assumption, material quantity, recorded expense, or design decision changes, but the reader cannot tell which derived outputs should move, whether a recalculation occurred, whether the displayed value is stored or formatted, or where a human decision remains.

The standing campaign objective remains recruiting founding testers through the free demo and early-access cohort. No event, seasonal deadline, competitor comparison, testimonial, urgency hook, adoption statement, customer outcome, price, wage, margin, fit, accuracy, or product-performance claim is adopted. The research does not support a claim that Stitch & Scale automatically propagates source changes or refreshes derived values.

## Product-truth reconciliation

No current Stitch & Scale product-proof registry entry or approved non-private capture verifies a recalculation-trigger record, source-change event, affected-output list, expected trigger, last recompute, displayed/stored distinction, human check, or propagation state. Therefore the package is **blocked**. The paper card is not current product UI and must not be presented as a grading engine, spreadsheet, formula engine, automatic recalculation tool, or product capability.

The concept must not claim that Stitch & Scale automatically propagates gauge, size, ease, cost, sale, or pattern changes; recalculates every dependent output; detects circular references; guarantees stored/displayed precision; or replaces deterministic QA, technical editing, physical print review, chart readability, schematic scale, localization review, or test knitting. Those remain separate technical or human gates.

## Rights, visual opportunity, and asset decisions

Use an original paper `RECALCULATION TRIGGER` card, one blank source-change strip, one blank affected-output strip, and one neutral pencil with no real size, gauge, count, price, wage, expense, customer, or product data. Do not use a real spreadsheet, pattern model, formula, chart, schematic, customer record, platform screenshot, third-party logo, or copyrighted music. If a current product capture is ever supplied, verify version, destination, privacy, owner, rights, exact labels, source/derived semantics, and last recompute evidence before use.

The visual opportunity is a blank source value changing from `SOURCE: ?` to `SOURCE: CHANGED`, while an output card remains still. A pencil draws an arrow toward `AFFECTED OUTPUTS: ?`; the hand stops and writes `EXPECTED TRIGGER: ?`, `LAST RECOMPUTE: ?`, `HUMAN CHECK: REQUIRED`. The emotional turn is from “the source changed” to “show me what should have moved.”

## Platform, caption, audio, and acceptance decisions

Use a mobile-native 9:16 master under 45 seconds with one founder narrator, one microphone family, one room tone, and one pencil-on-paper sound motif. Captions may not cover the card, source strip, output strip, arrows, hands, or CTA. Review caption-on and caption-free versions independently. The source change, affected outputs, recompute state, and human-check boundary must remain understandable with audio muted and captions disabled. Reject mixed voices, doubled words, overlaps, room-tone jumps, stale UI, unsupported propagation or accuracy claims, unlicensed audio, and dense overlays.

## Research conclusion

The evidence supports the materially distinct angle `recalculation-trigger-state`: show that trust requires naming the dependency and refresh trigger after a source change, not merely displaying a new-looking value. It does not authorize a Stitch & Scale propagation engine, grading engine, spreadsheet, automatic recalculation, precision guarantee, or product capability claim. The package remains blocked until current product proof, rights, platform, caption, audio, and acceptance evidence exist.

## References

[1]: https://support.microsoft.com/en-us/excel/change-formula-recalculation-iteration-or-precision-in-excel "Microsoft Support — Change formula recalculation, iteration, or precision in Excel"
[2]: https://www.sistermountain.com/blog/grade-knitting-patterns-spreadsheet "Sister Mountain — How to Grade Knitting Patterns Using a Spreadsheet"
[3]: https://www.w3.org/TR/WCAG22/ "W3C — Web Content Accessibility Guidelines 2.2"
[4]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Add subtitles & captions"
[5]: https://ads.tiktok.com/help/article/creative-best-practices "TikTok — Creative Best Practices"

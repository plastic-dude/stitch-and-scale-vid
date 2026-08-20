# Pass 256 Wide Research — Size Exception State

**Research date:** 2026-08-20
**Pass:** 256
**Question:** When a graded knitwear pattern reaches an edge case—where a default size rule no longer preserves the intended fit or relationship between body points—what should be recorded so the exception is visible and reviewable instead of silently extending the rule?

## Decision summary

The research changes the concept from a generic “check the size range” reminder to a sharper **default-rule versus exception boundary**. A pattern can list many sizes and still hide the moment where a body, sleeve, neckline, armhole, length, ease, or shaping relationship stops behaving like the default grade. The planned illustrative proof surface is a `SIZE EXCEPTION` card with separate fields for `SIZE`, `BODY POINT`, `DEFAULT RULE`, `EXCEPTION`, `AFFECTED PIECES`, `WHY`, `MAKER NOTE`, `TECHNICAL EDIT`, `TEST KNIT`, and `STATUS`.

This is a planning and evidence-discipline proposal, not grading advice for a particular garment. It will not calculate, approve, or repair a real pattern. The card remains labeled `ILLUSTRATIVE — NOT PRODUCT UI`; technical editing, chart readability, schematic scale, physical print review, and test knitting remain distinct human gates.

## Evidence table

| Source and access | Evidence | Uncertainty or limit | Planning decision changed |
|---|---|---|---|
| [Craft Yarn Council, Standard Body Measurements/Sizing](https://www.craftyarncouncil.com/standards/body-sizing) — accessed 2026-08-20; page date not stated | CYC says fit starts from body measurements and ease, that patterns often provide completed-garment measurements and schematics, and that makers should review all sizing information before beginning. It states its charts are actual body measurements and that length and fit charts are guidelines; individual changes may be made, but changes can alter a project’s appearance. | CYC charts are reference standards and general guidance, not a verdict for one construction, designer’s intent, or grading system. “Guideline” does not mean optional proof or that every exception is safe. | Add `BODY POINT`, `DEFAULT RULE`, and `EXCEPTION` as separate fields. Add a visible maker note that a length or fit exception can alter the intended appearance and requires review. |
| [Craft Yarn Council, Standards and Guidelines](https://www.craftyarncouncil.com/standards) — accessed 2026-08-20; page date not stated | CYC says its standards were developed with publishers, manufacturers, designers, and consumers to bring uniformity to labeling and patterns and make consumer-facing products easier to prepare and use. | Adoption is urged, not proof that every pattern or product follows the standards. The page does not define a Stitch & Scale data model. | The story will distinguish a standard baseline from a design-specific exception. It will not claim conformance or automatic standards enforcement. |
| [The Tech Editor Hub, “Pattern Grading for Larger Sizes”](https://www.thetecheditorhub.com/blog/pattern-grading-for-larger-sizes) — accessed 2026-08-20; page date not stated | The guide describes grading as determining key body points, grade rules or design ease, target measurements, and the stitches, rows, rounds, and shaping for all sizes. It advises using body-size charts, studying how proportions change, and not making assumptions about bodies or ease. | This is an educational industry source, not a universal formula and not current Stitch & Scale product proof. Its examples focus on larger-size grading and do not cover every construction. | Use a single breakpoint where the default rule stops being self-explanatory, then show the affected body point and construction pieces. Do not present a simplistic “multiply the grade” animation as product truth. |
| [Brambles and Bindweed, “Technical Editing”](https://bramblesandbindweed.com/technical-editing/) — accessed 2026-08-20; page date not stated | The technical editor describes the work as collaboration in which the designer retains control. The service can include grading, charts, schematics, and accessibility advice, and may return suggested changes or queries for the designer to accept or ignore. | This is one editor’s service description and should not be generalized to every technical editor or contract. It does not establish product capabilities. | Keep `TECHNICAL EDIT` as a human review field, not an automatic pass/fail or product-complete badge. Preserve the designer’s decision and the reviewer’s evidence separately. |
| [W3C, Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) — Recommendation dated 2024-12-12; accessed 2026-08-20 | WCAG 2.2 applies across devices and includes text alternatives for non-text content, captions for prerecorded synchronized media, and testable success criteria combined with human evaluation. It emphasizes perceivable, operable, understandable, and robust content. | WCAG conformance is not equivalent to pattern correctness, chart readability, technical editing, or a product feature. The recommendation does not specify social-video overlay geometry. | The video must make the exception card readable without captions, provide synchronized captions without covering proof, and keep acceptance of a grading exception separate from accessibility review. |
| [W3C, Guidance on Applying WCAG 2.2 to Mobile Applications](https://www.w3.org/TR/wcag2mobile-22/) — Group Draft Note dated 2025-05-06; accessed 2026-08-20 | The note is informative and work in progress, but maps WCAG 2.2 concepts to mobile screens and calls out reflow, orientation, pointer alternatives, target size, and mobile evaluation boundaries. | It is not normative, does not cover every device, and is not sufficient alone to ensure mobile-app accessibility. | Keep the illustrative card within a conservative mobile proof area, use one field family per close shot, and validate both mobile readability and a caption-free version. Do not claim WCAG conformance. |
| [Knitty, “Design or Write For Knitty”](https://knitty.com/subguide.php) — last update shown 2026-06-17 in pass-255 research; accessed again 2026-08-20 but the page returned a transient database connection failure | The current guide reviewed in pass 255 asks for requested size ranges, measurements in imperial and metric, schematics where relevant, and careful grading; it separates the designer’s work from editorial and technical-editing stages. | The page could not be re-extracted during this run because of a transient database connection error. The prior captured evidence remains in `research/2026-08-20-pass255-browser-findings.md`; it is not treated as fresh verification of product state. | Keep publication and technical-editor requirements in the claim ledger as context only. Do not claim that Stitch & Scale follows Knitty’s workflow or size range. |

## Audience and craft workflow interpretation

The audience pain is the hidden breakpoint, not simply the existence of a size table. A size range can look comprehensive while one dimension changes differently from another: a sleeve may require a different relationship to upper-arm circumference, a neckline may need a construction exception, a length choice may change appearance, or a shaping rule may stop being interpretable at an edge. The sources support recording body points, grade rules, target measurements, affected pieces, and human queries rather than hiding the decision inside a finished-looking row.

The dramatic contradiction is: **the pattern can have more sizes while the rule has fewer explanations**. The short will not show a real size or numeric claim. It will use a paper ruler and abstract labels to show the moment where `DEFAULT RULE` becomes `EXCEPTION: HUMAN REVIEW`.

## Product-truth reconciliation

No current Stitch & Scale product-proof registry entry or approved non-private capture verifies a size-exception record, breakpoint marker, affected-piece field, maker note, technical-edit state, test-knit state, or human exception review surface. Therefore the package is **blocked**. The paper card is not a current interface, and no generated number, size label, warning, grade rule, or approval state may be presented as product truth.

The concept must not claim that Stitch & Scale automatically detects grading failures, repairs exceptions, guarantees fit, validates every size, or replaces technical editing or test knitting. Technical editing, physical print review, chart readability, schematic scale, and test knitting remain distinct human evidence gates.

## Platform, accessibility, and audio decisions

The standing production lessons remain binding. Use one narrator family, one tabletop, original paper props, and a strict field-by-field visual rhythm. Captions may not cover the ruler, card, hands, numbers, labels, or final status. The exception must be legible with captions disabled. The platform matrix will adapt the hook and pacing for Instagram Reels, TikTok, and YouTube Shorts without presenting a cropped horizontal master as a vertical-native cut. Current platform UI and safe-zone behavior must be rechecked before any future approval.

No real pattern text, chart, schematic, size number, screenshot, tester identity, customer result, or third-party media is cleared. Any music must be original or cleared. The production will not use an event or seasonal deadline; August context is not treated as urgency.

## Research conclusion

The research supports the materially distinct angle `size-exception-state`: make the hidden breakpoint between a default grading rule and a design-specific exception visible, then stop at a human review boundary. The evidence supports a structured exception record and a mobile-readable paper treatment. It does not authorize a Stitch & Scale grading feature claim, numerical calculation, fit guarantee, automatic correction, or generation.

## References

[1]: https://www.craftyarncouncil.com/standards/body-sizing "Craft Yarn Council — Standard Body Measurements/Sizing"
[2]: https://www.craftyarncouncil.com/standards "Craft Yarn Council — Standards and Guidelines"
[3]: https://www.thetecheditorhub.com/blog/pattern-grading-for-larger-sizes "The Tech Editor Hub — Pattern Grading for Larger Sizes"
[4]: https://bramblesandbindweed.com/technical-editing/ "Brambles and Bindweed — Technical Editing"
[5]: https://www.w3.org/TR/WCAG22/ "W3C — Web Content Accessibility Guidelines 2.2"
[6]: https://www.w3.org/TR/wcag2mobile-22/ "W3C — Guidance on Applying WCAG 2.2 to Mobile Applications"
[7]: https://knitty.com/subguide.php "Knitty — Design or Write For Knitty"

# Pass 115 browser findings — authority state — 2026-08-19

## Sources checked

| Source | Checked | Findings used | Limits |
|---|---|---|---|
| W3C PROV-DM | 2026-08-19 | Provenance describes entities, activities, and agents involved in producing or delivering data; the model distinguishes usage, generation, derivation, attribution, and responsibility. A derivation requires more than a superficial connection: the generated entity must be influenced by the used entity. | Domain-agnostic standard; not a Stitch & Scale data model or product claim. |
| Snowflake — Data Lineage: Essential Guide | 2026-08-19 | Lineage tracks origin, transformations, downstream dependencies, usage, ownership, definitions, and quality context. A lineage record must be maintained as schemas and dependencies change; stale lineage reduces trust. | Vendor guidance for enterprise data estates; no evidence Stitch & Scale exposes lineage. |
| OpenLineage — Facets & Extensibility and Dataset Facets | 2026-08-19 | Lineage events distinguish runs, jobs, input datasets, output datasets, and attached facets; input and output facets can carry different context. Versioned custom facets need collision-safe names and immutable schema pointers. | OpenLineage specification context; not a product implementation or required architecture for Stitch & Scale. |
| Atlassian — Building a true Single Source of Truth | 2026-08-19 | Duplicate or conflicting locations create confusion; a maintained source of truth needs an owner, consistent templates, update responsibility, and ongoing review rather than a one-time consolidation. | Product/vendor guidance and organizational example; no product claim. |
| Sister Mountain — grading patterns with a spreadsheet | 2026-08-19 | A practical grading workflow keeps body measurements, ease, finished measurements, gauges, formulas, and design decisions visible, with values referenced or calculated across sizes. | Practitioner tutorial; not a Stitch & Scale specification. |
| W3C WCAG 2.2 — Error Identification | 2026-08-19 | If an input error is detected, the affected item and the error must be identified in text; visual treatment alone is insufficient. | Accessibility guidance; not proof of current product validation or conformance. |
| Stitch & Scale local QA, craft-business, and mobile-maker contracts | 2026-08-19 | QA separates canonical inputs from derived output checks; records separate recorded facts, derived values, estimates, and plans; mobile workflows require visible validation and safe handling of dense data. | Internal workflow contracts, not product-proof evidence. |

## Research synthesis and decision shift

The fresh question is: **When the same measurement or business fact appears in multiple places, what proves which value is authoritative, which is derived, which is only displayed, and whether an override is permitted?** The research changes the creative from “show the source” into an authority map that makes `INPUT`, `TRANSFORM`, `OUTPUT`, `DISPLAY`, `OVERRIDE`, and `OWNER` explicit before a downstream number is trusted.

Candidate angle: `authority-state` — **“Displayed is not controlling.”** Proof surface: `SOURCE / DERIVED FROM / TRANSFORM / DISPLAYED AS / OVERRIDE / OWNER / LAST REVIEWED / AFFECTED OUTPUT`, explicitly illustrative until current product proof verifies exact labels. Visual metaphor: one source card fans into a derived measurement, display card, and downstream formula; an unlabelled duplicate is stopped at a red “which one controls?” gate. Emotional turn: duplicate-data anxiety becomes accountable dependency clarity. Final line: “Name what controls the number.”

The candidate is distinct from `absence-state`, which concerns the meaning of non-values before calculation. It is also distinct from `provenance-chain`, which focuses on source lineage broadly; `source-note`, which focuses on a note attached to a source; `measurement-provenance`, which focuses on the context of a measurement; `value-state`, which distinguishes recorded, derived, estimated, and planned business values; `decision-ledger`, which classifies a number before a business decision; `conversion-trace`, which follows a conversion; `grade-transparency`, which exposes grading math; `comparison-basis`, which bounds comparisons; and `conflict-state`, which concerns conflicting changes. `authority-state` focuses on the **control relationship** among one canonical input, its transformations, displays, permitted overrides, owner, review, and downstream impact.

## Product truth and blocker

No current product-proof registry or approved capture verifies canonical-source markers, derived-from links, transformation labels, display-versus-control semantics, override permissions, owners, last-reviewed state, or affected-output mapping. Therefore no current UI, data lineage, override behavior, data quality, accuracy, or governance capability may be claimed. The package must remain `blocked` with one next action: supply a versioned, non-private approved capture or proof-registry entry for the exact authority surface and one representative downstream output, then rerun all gates.

## Planned campaign framing

Assumption: no active brief was supplied, so classify as a blocked `founder-proof` micro-explainer for knitwear designers, technical editors, test knitters, and craft-business operators; objective is to show why a displayed number is not automatically the controlling number; tone is precise, calm, non-alarmist; distribution is organic-first Instagram Reels, TikTok, and YouTube Shorts; tier is blocked proof-led planning. David remains a developer whose late mother knitted, never a knitter, designer, pattern designer, technical editor, or tester.

## References

[633] [W3C — PROV-DM: The PROV Data Model](https://www.w3.org/TR/prov-dm/)
[634] [Snowflake — Data Lineage: Essential Guide for Enterprise Data Management](https://www.snowflake.com/en/data-governance/data-lineage/)
[635] [OpenLineage — Facets & Extensibility](https://openlineage.io/docs/spec/facets/)
[636] [OpenLineage — Dataset Facets](https://openlineage.io/docs/spec/facets/dataset-facets/)
[637] [Atlassian — Building a true Single Source of Truth](https://www.atlassian.com/work-management/knowledge-sharing/documentation/building-a-single-source-of-truth-ssot-for-your-team)
[638] [Sister Mountain — How to Grade Knitting Patterns Using a Spreadsheet](https://www.sistermountain.com/blog/grade-knitting-patterns-spreadsheet)
[639] [W3C — Understanding Success Criterion 3.3.1: Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
[640] [Stitch & Scale local skill contracts — pattern QA, craft-business, mobile-maker, and publishing/export workflows](file:///home/ubuntu/skills/knitwear-pattern-qa/SKILL.md)

## Research limit

These sources establish provenance, lineage, dependency, and maintenance principles, not Stitch & Scale product behavior. The candidate does not claim that the app currently exposes a source-of-truth registry, lineage graph, override controls, or affected-output map. Product truth remains unverified until a versioned approved capture or registry entry supplies the exact surface and behavior.

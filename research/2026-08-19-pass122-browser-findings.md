# Pass 122 browser findings — selection-state — 2026-08-19

## Sources checked

| Source | Checked | Findings used | Limits |
|---|---|---|---|
| W3C WAI-ARIA 1.3 | 2026-08-19 | Accessible interfaces need semantic roles, states, properties, values, relationships, and notifications of state changes; selection and current state must be conveyed to assistive technologies. | Working draft/specification context; not Stitch & Scale product evidence. |
| W3C WCAG 2.2 — On Input | 2026-08-19 | Selecting or changing a control setting should have predictable effects; users should be advised before a change causes a change of context. | Accessibility guidance; no product behavior evidence. |
| W3C WCAG 2.2 — Name, Role, Value | 2026-08-19 | User-settable states and values must be programmatically determinable and changes must be available to user agents and assistive technologies. | Accessibility guidance; no product behavior evidence. |
| Sister Mountain — How to Grade Knitting Patterns Using a Spreadsheet | 2026-08-19 | Grading workflows make sizing, body measurements, ease, gauge, formulas, and finished measurements distinct inputs or decisions; changing the selected size or gauge can affect downstream calculations. | Practitioner education, not a standard and not Stitch & Scale evidence. |
| Stitch & Scale local QA, craft-business, mobile-maker, and publishing/export contracts | Re-read 2026-08-19 | Size, gauge, measurements, grading, charts, schematics, exports, and human reviews are separate evidence boundaries; a visible selection cannot be treated as downstream proof without current capture. | Internal contracts, not current product behavior. |

## Research synthesis and decision shift

The fresh question is: **When a maker selects a size, gauge, scenario, or variant, what proves that the selection is actually applied through grading, chart, schematic, and export rather than only highlighted in one control?** The research changes the creative from generic selection feedback to an applied-context card naming `SELECTED / APPLIED TO / CURRENT CONTEXT / DOWNSTREAM VIEWS / LAST UPDATED / CONFIRMED? / EXPORT USE`, explicitly illustrative until product proof verifies exact labels. Candidate angle: `selection-state` — **“Selected is not applied.”** Visual metaphor: a selected size chip remains separate from a downstream calculation until an `APPLIED TO` path is confirmed. Emotional turn: visible choice becomes accountable context. Final line: “Name what the selection changes.”

The candidate is distinct from `dependency-state`, which concerns downstream impact and recheck obligation after an upstream change; `input-state`, which concerns how a value entered the record; `authority-state`, which concerns which populated field controls an output; `unit-state`, which concerns measurement-unit attachment; `tolerance-state`, which concerns target/observed decision boundaries; `context-state`, if present, which concerns contextual metadata; `applicability-scope`, which concerns whether a rule applies; and `commit-state`, which concerns save acknowledgement. `selection-state` focuses on **a user-visible selected context being carried into downstream calculations and views**.

## Product truth and blocker

No current product-proof registry or approved capture verifies selected size/gauge/scenario/variant controls, applied-context indicators, downstream selection propagation, selection-change notifications, or export behavior. Therefore no current selection propagation, selected-context accuracy, or downstream application capability may be claimed. The package must remain `blocked` with one next action: provide a versioned, non-private approved capture or registry entry showing one selection change and its applied effect across one grading output plus one chart, schematic, or export view, then rerun all gates.

## Planned campaign framing

Assumption: no active brief was supplied, so classify as a blocked `founder-proof` micro-explainer for knitwear designers, technical editors, test knitters, and craft-business operators; objective is to show why a highlighted selection is not enough unless its applied downstream context is visible; tone is precise, calm, non-alarmist; distribution is organic-first Instagram Reels, TikTok, and YouTube Shorts; tier is blocked proof-led planning. David remains a developer whose late mother knitted, never a knitter, designer, pattern designer, technical editor, or tester.

## References

[699] [W3C — WAI-ARIA 1.3](https://www.w3.org/TR/wai-aria-1.3/)
[700] [W3C — Understanding Success Criterion 3.2.2: On Input](https://www.w3.org/WAI/WCAG22/Understanding/on-input.html)
[701] [W3C — Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
[702] [Sister Mountain — How to Grade Knitting Patterns Using a Spreadsheet](https://www.sistermountain.com/blog/grade-knitting-patterns-spreadsheet)
[703] [Stitch & Scale local skill contracts — QA, craft-business, mobile-maker, and publishing/export workflows](file:///home/ubuntu/skills/mobile-maker-workflows/SKILL.md)

## Research limit

These sources establish selection semantics, predictable context changes, accessible state/value notification, and knitwear grading workflow principles, not Stitch & Scale product behavior. The candidate does not claim that the app currently exposes selected-context markers, applied-to paths, downstream propagation, selection-change notifications, or selection-aware export. Product truth remains unverified until a versioned approved capture or registry entry supplies the exact surface and behavior.

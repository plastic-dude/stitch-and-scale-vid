# Pass 119 browser findings — input-state — 2026-08-19

## Sources checked

| Source | Checked | Findings used | Limits |
|---|---|---|---|
| WHATWG HTML Living Standard — Form control infrastructure | 2026-08-19; living standard last updated 2026-08-18 | A control has internal value state that may differ from the user's current input; default value and user-edited “dirty value” are distinct, and controls may be automatically prefilled. A value can be changed by a user edit or by script. | Web-platform semantics; not a Stitch & Scale product claim. |
| W3C WCAG 2.2 — Identify Input Purpose | 2026-08-19 | Input purpose should be programmatically determinable where applicable; visible labels and machine-readable purpose help users, including people with cognitive or memory-related disabilities, understand and complete fields. Autofill can reduce manual entry but still needs confirmation/change ability. | Accessibility guidance; no product behavior evidence. |
| W3C ACT Rule — Autocomplete attribute | 2026-08-19 | Autocomplete semantics require valid, ordered tokens; user agents can offer autofill even when a control’s type is not appropriate, so visible purpose and semantic metadata can diverge. | HTML/autocomplete conformance rule; not a product capability claim. |
| W3C HTML 5.1 forms guidance | 2026-08-19 | Form controls need labels, validation, and explicit input purpose; automatic filling and mobile input modes are separate concerns from control type and submitted value. | Older working-draft material; used for conceptual distinctions, not current browser support claims. |
| Stitch & Scale local QA, craft-business, mobile-maker, and publishing/export contracts | Re-read 2026-08-19 | Recorded, derived, estimated, planned, and human-reviewed values remain distinct; mobile capture must survive interruptions; grading/export evidence must not be inferred from a displayed value. | Internal contracts, not current product behavior. |

## Research synthesis and decision shift

The fresh question is: **What proves whether a value was manually entered, inherited, copied, defaulted, autofilled, estimated, or system-derived before it feeds grading or export?** The research changes the creative from value semantics alone to an origin card that names `ORIGIN / ENTERED BY / DEFAULTED? / COPIED FROM / INHERITED FROM / ESTIMATED? / REVIEWED? / USED IN`, explicitly illustrative until product proof verifies exact labels. Candidate angle: `input-state` — **“Entered is not intended.”** Visual metaphor: a numeric field shows a value, then its origin branches into manual, default, copied, inherited, estimated, or derived; downstream use pauses until origin is understood. Emotional turn: silent assumption becomes accountable capture. Final line: “Name how the value got here.”

The candidate is distinct from `value-state`, which classifies recorded, derived, estimated, planned, or target values; `default-state`, which concerns behavior when a field is not specified; `inherited-thread`, which concerns context carried from prior work; `authority-state`, which maps which populated field controls an output; `absence-state`, which distinguishes blank/zero/not-applicable/unknown/not-checked; `unit-state`, which preserves units and reference; and `reproducibility-state`, which documents reruns. `input-state` focuses on **interaction and origin provenance at capture**, before semantic classification, control authority, unit attachment, or replay.

## Product truth and blocker

No current product-proof registry or approved capture verifies manual/default/inherited/copied/autofilled/estimated/derived origin markers, dirty/untouched state, user-versus-system change records, input-purpose metadata, confirmation controls, or downstream use mapping. Therefore no current input provenance, autofill behavior, default semantics, or origin-aware grading/export capability may be claimed. The package must remain `blocked` with one next action: provide a versioned, non-private approved capture or registry entry for one field showing exact origin, user/system change state, confirmation, and one downstream use, then rerun all gates.

## Planned campaign framing

Assumption: no active brief was supplied, so classify as a blocked `founder-proof` micro-explainer for knitwear designers, technical editors, test knitters, and craft-business operators; objective is to show why a visible value is not enough without knowing how it entered the record; tone is precise, calm, non-alarmist; distribution is organic-first Instagram Reels, TikTok, and YouTube Shorts; tier is blocked proof-led planning. David remains a developer whose late mother knitted, never a knitter, designer, pattern designer, technical editor, or tester.

## References

[679] [WHATWG — Form control infrastructure](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html)
[680] [W3C — Understanding Success Criterion 1.3.5: Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)
[681] [W3C — ACT Rule: Autocomplete attribute has valid value](https://www.w3.org/WAI/standards-guidelines/act/rules/73f2c2/)
[682] [W3C — HTML 5.1 Forms](https://www.w3.org/TR/2016/WD-html51-20160412/sec-forms.html)
[683] [Stitch & Scale local skill contracts — QA, craft-business, mobile-maker, and publishing/export workflows](file:///home/ubuntu/skills/mobile-maker-workflows/SKILL.md)

## Research limit

These sources establish form-state, input-purpose, autofill, and data-origin principles, not Stitch & Scale product behavior. The candidate does not claim that the app currently exposes origin markers, dirty flags, autofill semantics, input-purpose metadata, or origin-aware grading/export. Product truth remains unverified until a versioned approved capture or registry entry supplies the exact surface and behavior.

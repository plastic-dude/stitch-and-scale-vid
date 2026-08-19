# Pass 124 browser findings — intent-state — 2026-08-19

## Sources checked

| Source | Checked | Findings used | Limits |
|---|---|---|---|
| W3C WCAG 2.2 — Error Prevention (Legal, Financial, Data) | 2026-08-19 | Important submissions should be reversible, checked with correction, or confirmed before finalization; the guidance distinguishes serious irreversible data modification from ordinary save/edit actions. | WCAG guidance; not a Stitch & Scale product claim. |
| W3C WCAG 2.2 — Error Prevention (All) | 2026-08-19 | For submitted information, a mechanism should allow reversal, error checking/correction, or review and confirmation before finalizing. | Level AAA guidance; no product behavior evidence. |
| Apple HIG — Alerts | 2026-08-19 | Alerts should be used sparingly; uncommon destructive actions that cannot be undone merit an opportunity to confirm; titles and buttons should describe the actual result, and Cancel should clearly cancel. | Apple platform guidance; not a Stitch & Scale product claim. |
| Apple HIG — Action sheets | 2026-08-19 | Action sheets are appropriate for choices related to an intentional action, such as delete/save/return-to-edit; destructive choices and Cancel should be clear without overusing interruption. | Apple platform guidance; no Android/product behavior evidence. |
| Sister Mountain — How to Grade Knitting Patterns Using a Spreadsheet | 2026-08-19 | A grading workflow combines sizes, measurements, ease, gauge, formulas, and finished measurements; actions that modify or export a pattern can carry scope and downstream consequences. | Practitioner education, not a standard and not Stitch & Scale evidence. |
| Stitch & Scale local QA, craft-business, mobile-maker, and publishing/export contracts | Re-read 2026-08-19 | Destructive actions, exports, rights, local-first records, grading, charts, schematics, and human reviews remain separate evidence boundaries; a confirmation affordance cannot be assumed from a generic button or generated text. | Internal contracts, not current product behavior. |

## Research synthesis and decision shift

The fresh question is: **Before a consequential action changes, deletes, or exports work, what proves the user’s intended scope, the exact consequence, the available reversal, and the final confirmation?** The research changes the creative from generic confirmation to a bounded intent card naming `ACTION / TARGET / SCOPE / CONSEQUENCE / REVERSIBLE? / REVIEWED / CONFIRMED / RESULT`, explicitly illustrative until product proof verifies exact labels. Candidate angle: `intent-state` — **“Tapped is not intended.”** Visual metaphor: a tap fans into target/scope/consequence/reversal paths before a final confirmation. Emotional turn: accidental action anxiety becomes explicit intent. Final line: “Name what will change before you confirm.”

The candidate is distinct from `consent-state`, which concerns permission and withdrawal; `commit-state`, which concerns save acknowledgement; `selection-state`, which concerns selected context propagation; `response-state`, which concerns planned versus enacted response; `acceptance-criteria`, which concerns pass conditions; `resume-state`, which concerns interruption return state; `backup-state`, which concerns backup/restore testing; and `release-gate-roster`, which remains an imported blocked concept. `intent-state` focuses on **the exact user intention and consequence before an irreversible or consequential action**.

## Product truth and blocker

No current product-proof registry or approved capture verifies destructive/export actions, target and scope summaries, consequence text, reversal/undo behavior, review steps, confirmation labels, keyboard or assistive-technology state, or final result notices. Therefore no current intent-confirmation, undo, deletion protection, export safety, or action-scope capability may be claimed. The package must remain `blocked` with one next action: provide a versioned, non-private approved capture or registry entry showing one consequential action from target through scope review, consequence, reversal/undo path, confirmation, and result notice, then rerun all gates.

## Planned campaign framing

Assumption: no active brief was supplied, so classify as a blocked `founder-proof` micro-explainer for knitwear designers, technical editors, test knitters, and craft-business operators; objective is to show why a tap or generic confirmation is not proof that the intended target and scope will change; tone is precise, calm, non-alarmist; distribution is organic-first Instagram Reels, TikTok, and YouTube Shorts; tier is blocked proof-led planning. David remains a developer whose late mother knitted, never a knitter, designer, pattern designer, technical editor, or tester.

## References

[709] [W3C — Understanding Success Criterion 3.3.4: Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html)
[710] [W3C — Understanding Success Criterion 3.3.6: Error Prevention (All)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-all.html)
[711] [Apple Developer — Human Interface Guidelines: Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts)
[712] [Apple Developer — Human Interface Guidelines: Action sheets](https://developer.apple.com/design/human-interface-guidelines/action-sheets)
[713] [Sister Mountain — How to Grade Knitting Patterns Using a Spreadsheet](https://www.sistermountain.com/blog/grade-knitting-patterns-spreadsheet)
[714] [Stitch & Scale local skill contracts — QA, craft-business, mobile-maker, and publishing/export workflows](file:///home/ubuntu/skills/mobile-maker-workflows/SKILL.md)

## Research limit

These sources establish error-prevention, confirmation, reversal, action-sheet, and knitwear workflow principles, not Stitch & Scale product behavior. The candidate does not claim that the app currently exposes target/scope summaries, consequence text, undo, review/confirmation, result notices, or accessible intent state. Product truth remains unverified until a versioned approved capture or registry entry supplies the exact surface and behavior.

# Pass 123 browser findings — resume-state — 2026-08-19

## Sources checked

| Source | Checked | Findings used | Limits |
|---|---|---|---|
| Apple — Preserving your app’s UI across launches | 2026-08-19 | iOS interruptions can terminate apps; state preservation/restoration aims to return the UI to its previous state; UI restoration is not a substitute for persistent data storage, and temporary unsaved input may be separately preserved or discarded. | Apple UIKit guidance; not a Stitch & Scale product claim. |
| Android — Save UI states | 2026-08-19; page dated 2026-04-22 | Users expect UI state to remain through system-initiated destruction and temporary app switches; saved UI state, ViewModel, and local persistence have different lifetimes and guarantees; transient UI state is not the same as long-term app data. | Android architecture guidance; not product behavior evidence. |
| W3C WCAG 2.2 — Interruptions | 2026-08-19 | Users should be able to postpone or suppress non-emergency interruptions so updates do not disrupt focus or cause discontinuity. | Accessibility guidance; no product behavior evidence. |
| Sister Mountain — How to Grade Knitting Patterns Using a Spreadsheet | 2026-08-19 | Grading workflows combine size, measurements, ease, gauge, formulas, and finished measurements; continuity after leaving work matters because the workflow depends on the relationship among these choices. | Practitioner education, not a standard and not Stitch & Scale evidence. |
| Stitch & Scale local QA, craft-business, mobile-maker, and publishing/export contracts | Re-read 2026-08-19 | Interruption-safe capture, local-first persistence, grading, charts, schematics, exports, and human reviews are separate evidence boundaries; reopening a view is not proof that the complete working state was restored. | Internal contracts, not current product behavior. |

## Research synthesis and decision shift

The fresh question is: **After a mobile interruption or process restart, what proves the draft, selected context, pending action, and resume point were restored rather than merely reopening the screen?** The research changes the creative from generic persistence to a bounded resume card naming `LAST OPENED / DRAFT STATE / SELECTED CONTEXT / PENDING ACTION / RESUME POINT / RESTORED? / UNSAVED INPUT / VERIFY BEFORE CONTINUE`, explicitly illustrative until product proof verifies exact labels. Candidate angle: `resume-state` — **“Reopened is not resumed.”** Visual metaphor: a reopened screen splits into `RESTORED` and `RECONSTRUCTED` paths before allowing continuation. Emotional turn: comeback uncertainty becomes named continuation. Final line: “Name what came back before you continue.”

The candidate is distinct from `commit-state`, which concerns save acknowledgement; `backup-state`, which concerns backup and restore testing; `selection-state`, which concerns selected context being applied downstream; `retention-state`, which concerns retention policy; `reproducibility-state`, which concerns rerun consistency; `withdrawal-state`, which concerns removal after withdrawal; and `interruptions` as a platform/accessibility concern. `resume-state` focuses on **the user’s return point and whether the complete working context was restored after interruption**.

## Product truth and blocker

No current product-proof registry or approved capture verifies restored draft state, selected-context restoration, pending actions, resume points, unsaved-input handling, restore notices, or verification-before-continue controls. Therefore no current interruption-safe restoration, resume accuracy, local persistence guarantee, or restored-context capability may be claimed. The package must remain `blocked` with one next action: provide a versioned, non-private approved capture or registry entry showing one interruption/restart and the restored draft, selected context, pending action, resume point, unsaved-input state, and verification path, then rerun all gates.

## Planned campaign framing

Assumption: no active brief was supplied, so classify as a blocked `founder-proof` micro-explainer for knitwear designers, technical editors, test knitters, and craft-business operators; objective is to show why a reopened screen is not proof that the work resumed with the same draft and context; tone is precise, calm, non-alarmist; distribution is organic-first Instagram Reels, TikTok, and YouTube Shorts; tier is blocked proof-led planning. David remains a developer whose late mother knitted, never a knitter, designer, pattern designer, technical editor, or tester.

## References

[704] [Apple Developer — Preserving your app’s UI across launches](https://developer.apple.com/documentation/uikit/preserving-your-app-s-ui-across-launches)
[705] [Android Developers — Save UI states](https://developer.android.com/topic/libraries/architecture/saving-states)
[706] [W3C — Understanding Success Criterion 2.2.4: Interruptions](https://www.w3.org/WAI/WCAG22/Understanding/interruptions.html)
[707] [Sister Mountain — How to Grade Knitting Patterns Using a Spreadsheet](https://www.sistermountain.com/blog/grade-knitting-patterns-spreadsheet)
[708] [Stitch & Scale local skill contracts — QA, craft-business, mobile-maker, and publishing/export workflows](file:///home/ubuntu/skills/mobile-maker-workflows/SKILL.md)

## Research limit

These sources establish mobile state restoration, transient-versus-persistent state, interruption control, and knitwear workflow continuity principles, not Stitch & Scale product behavior. The candidate does not claim that the app currently exposes restore notices, resume points, selected-context restoration, pending-action markers, unsaved-input handling, or verification-before-continue. Product truth remains unverified until a versioned approved capture or registry entry supplies the exact surface and behavior.

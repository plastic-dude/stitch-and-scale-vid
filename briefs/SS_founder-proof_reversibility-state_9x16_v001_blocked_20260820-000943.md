# Director Brief — Founder Proof / Reversibility State

| Field | Value |
|---|---|
| Brief ID | `BRF-founder-proof-reversibility-state-9x16-v001` |
| Campaign | `founder-proof` |
| Objective | Show why a user needs to understand and review a change's reversibility before it becomes final |
| Audience | Independent knitwear designers, founding testers, and reviewers who need honest change boundaries |
| Form / tone | 45-second 9:16 social explainer; quiet, precise, consequence-led reveal |
| Distribution | TikTok, Instagram Reels, YouTube Shorts, and internal review |
| Brief tier | Standard production brief; blocked Director/Planner package |
| Angle | `reversibility-state` |
| Working title | Changed is not undoable |
| Format / version | 9:16 / v001 |
| Status | **blocked** |
| Reserved filename | `SS_founder-proof_reversibility-state_9x16_v001_blocked_20260820-000943.mp4` |
| Director pass | 169 |
| Research record | `research/2026-08-19-wide-director-research.md`, pass 169, refs [876]–[879] |
| Source findings | `research/2026-08-20-pass169-browser-findings.md` |

## Concept and claim boundary

> “Changed is not undoable.”

A fictional action changes a record. The first view shows only the new state. The second view makes the before-state, consequence, preview, reversibility window, undo result, and irreversible disclosure inspectable. The story is about a **reversibility contract before finality**, not a product feature announcement, undo promise, version-history claim, autosave promise, rollback guarantee, deletion-protection claim, or accessibility-conformance claim.

Apple's Human Interface Guidelines discuss helping users predict and see the results of undo and redo [876]. W3C's SC 3.3.4 guidance describes reversibility, checking, or review/confirmation for certain high-consequence pages and data operations [877]. Material Design uses an Undo action in a snackbar example and warns that transient web feedback should also be communicated inline and must not obscure focused controls [878]. The VA Design System ADR emphasizes explicit destructive labels and friction rather than color alone [879]. These sources inform the fictional treatment and production review only; none proves that Stitch & Scale implements any of these features.

All action labels, values, consequences, durations, and dispositions are fictional. Generated text is not UI truth. Exact product labels, controls, warnings, history behavior, reversal windows, and finality semantics require a current approved product capture or proof-registry entry. David is a developer whose late mother knitted; he is not described as a knitter, knitwear designer, pattern designer, technical editor, or tester.

## Dramatic engine

| Element | Director decision |
|---|---|
| Subject | One fictional action card moving from before-state to finality boundary |
| Desire | Make a necessary change without losing control of its consequence |
| Obstacle | The new state appears before the user can see what changed or whether it can be undone |
| Stakes | A final change may alter work that cannot be reconstructed from memory |
| Change | The card exposes preview, consequence, reversibility window, undo result, irreversible disclosure, review, and disposition |
| Contradiction | A visible new state is not proof that the old state can return |
| Escalation | The `REVERSIBLE_UNTIL` field empties; red `REVERSAL UNVERIFIED` appears rather than a fake undo success |
| Final image | A before/after card with an explicit unresolved reversal boundary and human review required |

## Treatment and beat sheet

Use a neutral evidence board with a fictional `ACTION A-001`. A single field changes from `BEFORE` to `CHANGE`. The new state expands while the before-state slips behind it. A thin reversible window appears, then is marked unverified. The final card shows what is known, what is not, and what must be reviewed; it never shows a green success state.

| Beat | Time | Story action | Proof hold |
|---|---:|---|---|
| 1. New state | 0:00–0:04 | `ACTION A-001` and `CHANGE` appear; only the after-state is visible | Hook readable; no real UI |
| 2. Before-state | 0:04–0:10 | `BEFORE` slides into view beside `CHANGE` | Keep both states central |
| 3. Consequence | 0:10–0:17 | `CONSEQUENCE` and `PREVIEW` appear; amber marker indicates incomplete review | Do not imply a universal consequence |
| 4. Reversal window | 0:17–0:24 | `REVERSIBLE_UNTIL: UNVERIFIED` appears; a timeline stops | No invented duration |
| 5. Undo result | 0:24–0:32 | `UNDO_RESULT: NOT VERIFIED` appears instead of a fake restored state | Do not claim undo or history |
| 6. Irreversible disclosure | 0:32–0:40 | `IRREVERSIBLE_DISCLOSURE: REQUIRED`, `REVIEWED: PENDING`, and disposition appear | No completion or approval cue |
| 7. Close | 0:40–0:45 | Before/after card remains visible with reversal unresolved | Final line unobstructed |

## Visual grammar and coverage plan

Use original abstract cards, a neutral evidence board, and one before/after split. The visual metaphor is a change crossing a reversible window toward finality. Amber marks an unverified consequence or reversal boundary. Red marks only `REVERSAL UNVERIFIED`. There is no green undo success, approved, saved, or completed state. Captions occupy a fixed lane away from `ACTION`, `BEFORE`, `CHANGE`, `CONSEQUENCE`, `PREVIEW`, `REVERSIBLE_UNTIL`, `UNDO_RESULT`, `IRREVERSIBLE_DISCLOSURE`, `REVIEWED`, `DISPOSITION`, tables, numbers, labels, buttons, menus, hands, and primary actions.

Coverage: locked overhead master; action card insert; before-state reveal; consequence/preview close hold; reversible-window timeline; undo-result close hold; irreversible-disclosure hold; review/disposition hold; caption-free clean master; caption-on review master; mobile crop review; accessibility review frame. Alternative coverage is a static before/after diptych with the unresolved reversibility window centered if motion weakens legibility. Reject stale UI, caption collision, false undo, unverified duration, mixed voices, doubled words, overlaps, room-tone jumps, unreadable fields, and unsupported claims.

## Locations, arrangements, sound motif, and approved-assets plan

Location is a controlled desk or studio surface with no private material. Arrangement is original abstract cards, cleared type, one cleared narrator, and original or cleared audio. Sound motif: one soft change tone, a short preview tick, silence at `REVERSAL UNVERIFIED`, and a neutral review tone. No success chime, alarm, urgency cue, or loss simulation. No final asset is approved.

## Claim and rights ledgers

| Category | Permitted | Prohibited / unresolved |
|---|---|---|
| Product | Conceptual language about before-state, consequence, review, and reversal boundaries | Claiming undo, redo, history, autosave, rollback, restore, deletion protection, confirmation dialog, safe reversal, or data-loss prevention |
| Apple / W3C / Material / VA guidance | Use sources as design and production-review boundaries [876] [877] [878] [879] | Claiming platform compliance, WCAG conformance, or product implementation |
| Craft | Fictional `SIZE NOTE` may motivate consequence stakes | Claiming calculation correctness, fit, grading accuracy, publication readiness, or tester outcomes |
| Founder | David is a developer whose late mother knitted | Calling David a knitter, designer, pattern designer, technical editor, or tester |
| Outcome | None | Revenue, adoption, accuracy, customer success, savings, final pricing, credentials, testimonials, urgency |
| Rights | Original cards, cleared type, cleared narrator, original/cleared audio | Private records, identifiable people, copyrighted patterns, customer data, unlicensed music/clips/artwork, current UI without approval |

## Risk register and acceptance gates

| Risk | Mitigation | State |
|---|---|---|
| Undo is mistaken for a product capability | Fictional labels, no current UI, `UNDO_RESULT: NOT VERIFIED` | Enforced |
| Reversal window implies an invented time limit | Use `UNVERIFIED`; do not show duration | Enforced |
| Red state becomes fear or urgency | Neutral sound, restrained red, no alarm or countdown | Pending review |
| Snackbar research is overgeneralized | Use it only for mobile feedback and caption placement | Enforced |
| Captions obscure before/after proof | Reserve caption lane; review caption-on and caption-free versions | Pending |
| Mobile crop hides consequence or disclosure | Keep critical fields central; verify current platform profiles before release | Pending |
| Human-gate collapse | Preserve calculation, technical edit, physical print review, chart readability, schematic scale, and test knitting separately | Enforced |
| Product proof absent | Keep blocked until current registry entry or approved capture verifies exact behavior | Blocking |

**Director disposition: BLOCKED — do not generate, upload, or approve.**

## Next action

Provide one versioned, non-private, rights-cleared product capture or proof-registry entry showing a real change with its before-state, consequence, preview, reversal availability or irreversible disclosure, undo/restore result, review, and disposition. Then rerun product/data, claims, rights/privacy, caption, audio, platform, continuity, and Director gates.

## References

[876]: https://developer.apple.com/design/human-interface-guidelines/undo-and-redo "Apple Human Interface Guidelines — Undo and Redo"
[877]: https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html "W3C Understanding SC 3.3.4: Error Prevention (Legal, Financial, Data)"
[878]: https://m3.material.io/components/snackbar/guidelines "Material Design 3 — Snackbar Guidelines"
[879]: https://design.va.gov/components/button/design-decisions/ "VA Design System — Button Design Decisions"

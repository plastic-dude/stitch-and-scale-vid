# Director Brief — Founder Proof / Interruptibility State

| Field | Value |
|---|---|
| Brief ID | `BRF-founder-proof-interruptibility-state-9x16-v001` |
| Campaign | `founder-proof` |
| Objective | Show why a stopped workflow must leave an inspectable state before anyone decides whether to continue |
| Audience | Independent knitwear designers, founding testers, and reviewers who need truthful workflow boundaries |
| Form / tone | 45-second 9:16 social explainer; quiet, precise, suspenseful reveal |
| Distribution | TikTok, Instagram Reels, YouTube Shorts, and internal review |
| Brief tier | Standard production brief; blocked Director/Planner package |
| Angle | `interruptibility-state` |
| Working title | Started is not interruptible |
| Format / version | 9:16 / v001 |
| Status | **blocked** |
| Reserved filename | `SS_founder-proof_interruptibility-state_9x16_v001_blocked_20260820-000310.mp4` |
| Director pass | 168 |
| Research record | `research/2026-08-19-wide-director-research.md`, pass 168, refs [873]–[875] |
| Source findings | `research/2026-08-20-pass168-browser-findings.md` |

## Concept and claim boundary

> “Started is not interruptible.”

A fictional workflow is running. It stops, but the first card cannot tell whether the current step was saved, what remains unsaved, whether the stop is safe, or who can authorize continuation. A second card names the interruption state without pretending that the operation completed. The story is about **inspectability at the stop boundary**, not a product feature announcement, autosave promise, rollback guarantee, recovery guarantee, AI-oversight claim, accessibility conformance claim, or transaction-safety claim.

W3C's Pause, Stop, Hide guidance concerns automatically started moving, blinking, scrolling, or auto-updating information and says users need a mechanism to pause, stop, or hide it in the stated circumstances [874]. It does not prove that a workflow has checkpoints or a safe resume protocol. NIST's human-AI interaction appendix discusses clearly defined human roles and oversight, but it does not prove that Stitch & Scale uses AI or exposes override controls [875]. WCAG 2.2's caption and human-evaluation requirements inform production review, not product capability [873].

All workflow labels are fictional. Generated text is not UI truth. Exact current product labels, controls, warnings, persistence behavior, and state transitions require a current approved product capture or proof-registry entry. David is a developer whose late mother knitted; he is not described as a knitter, knitwear designer, pattern designer, technical editor, or tester.

## Dramatic engine

| Element | Director decision |
|---|---|
| Subject | One fictional workflow card and its interruption record |
| Desire | Stop a started operation without lying about its state |
| Obstacle | The stop signal appears, but saved/unsaved state and continuation conditions are absent |
| Stakes | A stopped operation can be mistaken for completion or resumed without knowing what survived |
| Change | The record names current step, safe state, saved/unsaved boundary, resume conditions, owner, review, and disposition |
| Contradiction | A stop is not the same thing as a safe state |
| Escalation | `PAUSE_REQUESTED` appears; the card freezes at `SAFE_STATE: UNDEFINED` and turns amber/red |
| Final image | The stop is explicit, continuation remains human-reviewed, and no completion badge appears |

## Treatment and beat sheet

Use a neutral evidence board with one fictional workflow card for `RUN R-001`. A thin progress line moves through a single step, then pauses. The card splits into `SAVED` and `UNSAVED` zones. A second card shows the inspectable interruption record. The final state is `DISPOSITION: HUMAN REVIEW REQUIRED`, not `COMPLETED` and not `RESUME AUTHORIZED`.

| Beat | Time | Story action | Proof hold |
|---|---:|---|---|
| 1. Start | 0:00–0:04 | `RUN R-001` and `CURRENT_STEP: SIZE CHECK` appear; progress begins | Hook readable; no real UI |
| 2. Stop request | 0:04–0:10 | `PAUSE_REQUESTED` appears and the line stops | Do not imply a platform control |
| 3. Ambiguous stop | 0:10–0:17 | Card shows `SAFE_STATE: UNDEFINED`, with amber marker | Stopped is not completed |
| 4. Saved boundary | 0:17–0:24 | `SAVED: CURRENT_STEP` and `UNSAVED: NEXT TRANSFORM` separate visually | Fictional labels only |
| 5. Resume boundary | 0:24–0:32 | `RESUME_CONDITIONS` and `OWNER` appear; no authorization is granted | Do not imply recovery or autosave |
| 6. Review | 0:32–0:40 | `REVIEWED: PENDING` and `DISPOSITION: HUMAN REVIEW REQUIRED` appear | No green approval state |
| 7. Close | 0:40–0:45 | The card stays stopped, with one clear unresolved boundary | Final line unobstructed |

## Visual grammar and coverage plan

Use a controlled desk or studio surface with original abstract cards, neutral typography, and no recognizable private material. The visual metaphor is a progress line crossing a stop boundary and then splitting into saved and unsaved evidence. Amber marks an undefined safe state. Red marks only `INTERRUPTION STATE INCOMPLETE`. There is no green completion, recovery, approval, or resume-authorized state. Captions occupy a fixed lane away from the workflow card, table fields, numbers, labels, buttons, menus, hands, and primary actions.

Coverage: locked overhead master; progress-line insert; stop-request close hold; undefined-safe-state close hold; saved/unsaved split hold; resume-condition and owner hold; review/disposition hold; caption-free clean master; caption-on review master; mobile crop review; accessibility review frame. Alternative coverage is a static before-stop/after-stop diptych if motion weakens field legibility. Reject stale UI, caption collision, implied autosave, false completion, mixed voices, doubled words, overlaps, room-tone jumps, unreadable labels, and unsupported claims.

## Locations, arrangements, sound motif, and approved-assets plan

Location is a controlled desk or studio surface. Arrangement is original abstract cards, cleared type, one cleared narrator, and original or cleared sound. Sound motif: one restrained start tone, a soft stop click, silence while `SAFE_STATE` is undefined, then a low neutral review tone. No alarm, urgency, completion chime, or AI/automation cue. No final asset is approved.

## Claim and rights ledgers

| Category | Permitted | Prohibited / unresolved |
|---|---|---|
| Product | Conceptual language about an inspectable interruption record | Claiming pause, stop, checkpoint, autosave, rollback, recovery, persistence, safe resume, human override, AI oversight, or zero-loss behavior |
| Accessibility | Use WCAG references as production-review boundaries [873] [874] | Claiming WCAG conformance or that the product meets SC 2.2.2 |
| Human oversight | Use NIST as conceptual support for explicit human roles [875] | Claiming NIST adoption, AI use, governance implementation, or oversight controls |
| Craft | Fictional `SIZE CHECK` may motivate workflow stakes | Claiming calculation correctness, fit, grading accuracy, publication readiness, or tester outcomes |
| Founder | David is a developer whose late mother knitted | Calling David a knitter, designer, pattern designer, technical editor, or tester |
| Outcome | None | Revenue, adoption, accuracy, customer success, savings, final pricing, credentials, testimonials, urgency |
| Rights | Original cards, cleared type, cleared narrator, original/cleared audio | Private records, identifiable people, copyrighted patterns, customer data, unlicensed music/clips/artwork, current UI without approval |

## Risk register and acceptance gates

| Risk | Mitigation | State |
|---|---|---|
| Stop looks like completion | Use amber/red incomplete state; never show green or completed badge | Enforced |
| Fictional card resembles current UI | Abstract geometry, fictional labels, no screenshot or product logo | Pending review |
| Accessibility source is overclaimed | Cite WCAG only as production-review guidance; no conformance claim | Enforced |
| NIST source is overclaimed | Describe human-role concept only; no AI/product assertion | Enforced |
| Captions obscure proof | Reserve caption lane; review caption-on and caption-free versions | Pending |
| Mobile crop hides saved/unsaved boundary | Keep critical fields central; verify current platform profiles before release | Pending |
| Human-gate collapse | Preserve calculation, technical edit, physical print review, chart readability, schematic scale, and test knitting separately | Enforced |
| Product proof absent | Keep blocked until a current registry entry or approved capture verifies exact behavior | Blocking |

**Director disposition: BLOCKED — do not generate, upload, or approve.**

## Next action

Provide one versioned, non-private, rights-cleared product capture or proof-registry entry showing a real interrupted workflow with exact current labels for current step, stop/pause request, safe state, saved/unsaved boundary, resume conditions, owner, review, and disposition. Then rerun product/data, claims, rights/privacy, caption, audio, platform, continuity, and Director gates.

## References

[873]: https://www.w3.org/TR/WCAG22/ "W3C Web Content Accessibility Guidelines (WCAG) 2.2"
[874]: https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html "W3C Understanding SC 2.2.2: Pause, Stop, Hide"
[875]: https://airc.nist.gov/airmf-resources/airmf/appendices/app-c-ai-risk-management-and-human-ai-interaction/ "NIST AI RMF Appendix C: AI Risk Management and Human-AI Interaction"

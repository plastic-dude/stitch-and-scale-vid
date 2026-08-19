# Pass 113 browser findings — commit state — 2026-08-19

## Sources checked

| Source | Checked | Findings used | Limits |
|---|---|---|---|
| Nielsen Norman Group, “Visibility of System Status” | 2026-08-19 | Users need continuous, understandable feedback about current system state; feedback for an action should communicate whether it succeeded and help users decide what to do next. Missing feedback increases uncertainty and repeated actions. | Usability guidance, not a Stitch & Scale product finding and not a measure of user outcomes. |
| W3C WCAG 2.2, SC 4.1.3 Understanding Status Messages | 2026-08-19 | Status messages communicate success/results, waiting, progress, or errors without unnecessarily moving focus. W3C gives “saved” and “busy” examples and says programmatic status can be surfaced to assistive technology without focus changes. | Web accessibility guidance; does not prove the product has an accessible save-status implementation. |
| W3C WCAG2Mobile editor’s draft | 2026-08-19 | The draft maps mobile-app evaluation to screens and highlights orientation, reflow, target size, focus, redundant entry, and status messages. It is informative and explicitly work in progress. | Not normative; avoid presenting it as certification or product compliance. |
| Kleppmann et al., “Local-first software: you own your data, in spite of the cloud” (ACM, 2019) | 2026-08-19 | Local-first principles connect offline capability, ownership, privacy, preservation, and user control; data model and UI tradeoffs still matter. | Research framing, not evidence that Stitch & Scale syncs, backs up, restores, or preserves data beyond its documented local-first behavior. |
| Apple Human Interface Guidelines, “Progress indicators” | 2026-08-19 | Progress feedback should be accurate, consistently located, and explain what is happening; stalled processes need feedback about the problem and possible action; cancellation can need a loss warning. | Apple-platform guidance; not a general guarantee and not proof of a product implementation. |
| Android Developers, “Saving UI state” and “Save UI state in Compose” | 2026-08-19 | Users expect UI state to survive common interruptions such as rotation, background return, and system process recreation; persistent local storage and transient saved state have different lifetime and complexity boundaries; restoration should be verified. | Android architecture guidance, not direct evidence for the web app and not proof of successful Stitch & Scale restoration. |
| W3C Web Sustainability Guidelines draft | 2026-08-19 | The draft emphasizes honest, user-controlled, resilient systems and transparent, dated claims; it warns against treating partial improvements as proof of a broader outcome. | Group Note Draft, not endorsed normative guidance; not a product or campaign claim. |
| Stitch & Scale local skills | 2026-08-19 | Mobile-maker workflow requires visible saved/unsaved/pending/error feedback, interruption testing, local-first persistence, explicit recovery, and no hidden network assumptions; craft-business records separate stored facts from derived summaries and require restoration testing before calling a workflow durable. | Internal workflow contracts, not external product proof. |

## Research synthesis and proposed decision shift

The fresh question is: **When a maker is interrupted after editing a pattern or record, what evidence distinguishes “edited,” “save in progress,” “saved locally,” “save failed,” and “restored after return,” without implying sync, backup, or recovery guarantees?** The research supports a visual story about the visibility and accessibility of a save/commit state, not a generic persistence or backup promise.

Candidate angle: `commit-state` — **“Saved is not a green check.”** Proof surface: `EDITED AT / SAVE REQUESTED / SAVED LOCALLY AT / SAVE FAILED / LAST VERIFIED / UNSAVED CHANGES / RETURN ACTION`, explicitly illustrative until current product proof verifies exact labels. The visual metaphor changes from backup/copy returning through a restore test to a single interrupted edit whose state is narrated in a visible timeline. The emotional turn is from confidence theater to calm agency: the maker can decide whether to continue, retry, or recover because the state is named.

The candidate is distinct from `backup-state` and `recovery-proof` because it concerns immediate edit acknowledgement and interruption feedback, not copies, restore tests, or backup evidence. It is distinct from `offline-continuity` because it does not focus on signal loss or synchronization; from `resume-point` because it does not focus on where construction resumes; from `first-record` because it is not initial record capture; from `artifact-status` because it is not a general asset lifecycle label; from `repair-state` because it is not remediation; from `default-state` because it is not initial configuration; and from `status`/`response` concepts because it centers a user’s last save action and the explicit next choice.

## Product truth and blocker

No current product-proof registry or approved capture verifies the exact `EDITED AT`, save-progress, local-save, failure, last-verified, unsaved-change, restored-state, or retry controls. Therefore no UI labels, persistence semantics, offline behavior, restoration behavior, sync, backup, durability, data-loss prevention, accessibility compliance, or user outcomes may be claimed. The package must remain `blocked` with one next action: supply a versioned, non-private approved capture or registry entry for the exact current save-state surface and its interruption behavior, then rerun all gates.

## Planned campaign framing

Assumption: no active brief was supplied, so classify as a blocked `founder-proof` micro-explainer for knitwear designers, technical editors, test knitters, and craft-business operators; objective is to teach a reliable distinction between an edit and an acknowledged save state; tone is precise, calm, and non-alarmist; distribution is organic-first Instagram Reels, TikTok, and YouTube Shorts; tier is blocked proof-led planning. David remains a developer whose late mother knitted, never a knitter, designer, pattern designer, technical editor, or test knitter.

## Research references

[1] [Nielsen Norman Group — Visibility of System Status](https://www.nngroup.com/articles/visibility-system-status/)
[2] [W3C — Understanding Success Criterion 4.1.3: Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
[3] [W3C — Guidance on Applying WCAG 2.2 to Mobile Applications](https://w3c.github.io/matf/)
[4] [Kleppmann et al. — Local-first software: you own your data, in spite of the cloud](https://dl.acm.org/doi/abs/10.1145/3359591.3359737)
[5] [Apple Developer — Progress indicators](https://developer.apple.com/design/human-interface-guidelines/progress-indicators)
[6] [Android Developers — Save UI state](https://developer.android.com/topic/libraries/architecture/saving-states)
[7] [Android Developers — Save UI state in Compose](https://developer.android.com/develop/ui/compose/state-saving)
[8] [W3C — Web Sustainability Guidelines](https://www.w3.org/TR/web-sustainability-guidelines/)
[9] [Stitch & Scale local skill contracts — mobile-maker, craft-business, QA, and publishing/export workflows](file:///home/ubuntu/skills/mobile-maker-workflows/SKILL.md)

## Research limit

The external sources provide principles and platform-specific guidance, not evidence of Stitch & Scale’s actual UI, data persistence, save timing, restoration, sync, backup, or accessibility implementation. The candidate is a planning hypothesis only and remains blocked pending current product proof.

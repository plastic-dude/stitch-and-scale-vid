# Director Brief — Founder Proof / Status History State

| Field | Value |
|---|---|
| Brief ID | `BRF-founder-proof-status-history-state-9x16-v001` |
| Campaign | `founder-proof` |
| Objective | Show why a current status is not trustworthy without the prior states, events, actor/time, reason, affected gate, next state, and disclosed gaps that explain how it was reached |
| Audience | Independent knitwear designers, founding testers, and reviewers who need honest status-transition boundaries |
| Form / tone | 45-second 9:16 social explainer; quiet, precise, transition-centered reveal |
| Distribution | TikTok, Instagram Reels, YouTube Shorts, and internal review |
| Brief tier | Standard production brief; blocked Director/Planner package |
| Angle | `status-history-state` |
| Working title | Current status is not transition history |
| Format / version | 9:16 / v001 |
| Status | **blocked** |
| Reserved filename | `SS_founder-proof_status-history-state_9x16_v001_blocked_20260820-005148.mp4` |
| Director pass | 175 |
| Research record | `research/2026-08-19-wide-director-research.md`, pass 175, refs [900]–[902] |
| Source findings | `research/2026-08-20-pass175-browser-findings.md` |

## Concept and claim boundary

> “Current status is not transition history.”

A fictional workflow displays `CURRENT STATUS: READY`. The card then opens into prior status, event, actor, time, reason, affected gate, next state, and one missing transition. The story is about a **reconstructable status path**, not a product log, audit trail, version history, event-retention system, decision record, or governance feature.

NIST SP 800-92 provides high-level guidance on sound computer-security log management and maintaining log-management processes [900]. W3C treats version indicators and version history as distinct best practices alongside provenance, data quality, identifiers, and metadata [901]. GOV.UK's ADR framework emphasizes visibility, traceability, scope, stakeholders, context, decisions, consequences, review, and updates [902]. These sources motivate the fictional transition rail and production review only; none proves that Stitch & Scale implements logs, status history, audit trails, version history, transition tracking, decision records, or governance compliance.

All statuses, events, actor names, times, reasons, affected gates, next states, gaps, reviews, and dispositions are fictional. Generated text is not UI truth. Exact product labels, events, timestamps, warnings, and controls require a current approved product capture or proof-registry entry. David is a developer whose late mother knitted; he is not described as a knitter, knitwear designer, pattern designer, technical editor, or tester.

## Dramatic engine

| Element | Director decision |
|---|---|
| Subject | One fictional current-status card opening into its transition history |
| Desire | Know whether the present state was reached through an understandable, reviewed path |
| Obstacle | A current label hides skipped transitions, missing context, and an unreviewed next state |
| Stakes | A status can look ready while the path that produced it is incomplete or unexplained |
| Change | The card exposes prior status, event, actor/time, reason, affected gate, next state, gap, review, and disposition |
| Contradiction | A current status is not proof of a trustworthy transition path |
| Escalation | `GAP: EVENT-02` and `NEXT_STATUS: UNVERIFIED` turn amber/red |
| Final image | Transition rail remains visible with a missing event held for review |

## Treatment and beat sheet

Use a neutral evidence board with fictional `STATUS_HISTORY H-001`. A current `READY` card opens backward into prior states. The first event is clear; the second transition is missing; an affected human gate and next state remain unverified. No green approval or completion state appears.

| Beat | Time | Story action | Proof hold |
|---|---:|---|---|
| 1. Current label | 0:00–0:04 | `CURRENT STATUS: READY` appears | Hook readable; no real UI |
| 2. Open history | 0:04–0:10 | `PRIOR_STATUS: DRAFT` and `EVENT: SUBMITTED` appear | Do not imply actual log |
| 3. Actor and time | 0:10–0:17 | `ACTOR: UNVERIFIED` and `AT: UNVERIFIED` appear | No invented identity/time |
| 4. Reason and gate | 0:17–0:24 | `REASON: UNVERIFIED` and `AFFECTED_GATE: UNKNOWN` appear | Keep uncertainty visible |
| 5. Missing transition | 0:24–0:32 | `GAP: EVENT-02` appears; rail stops | No invented failure cause |
| 6. Next state and review | 0:32–0:40 | `NEXT_STATUS: UNVERIFIED`, `REVIEWED: PENDING`, and `DISPOSITION: HOLD FOR REVIEW` appear; red `HISTORY INCOMPLETE` | No approval or audit cue |
| 7. Close | 0:40–0:45 | Current status and incomplete rail remain visible | Final line unobstructed |

## Visual grammar and coverage plan

Use original abstract status cards, a vertical transition rail, and a neutral evidence board. Amber marks unverified actor/time/reason/gate/next state. Red marks only `HISTORY INCOMPLETE`. There is no green ready, complete, approved, audited, or trusted state. Captions occupy a fixed lane away from `CURRENT STATUS`, `STATUS_HISTORY`, `PRIOR_STATUS`, `EVENT`, `ACTOR`, `AT`, `REASON`, `AFFECTED_GATE`, `NEXT_STATUS`, `GAP`, `REVIEWED`, `DISPOSITION`, tables, numbers, labels, buttons, menus, hands, and primary actions.

Coverage: locked overhead master; current-status insert; history-open reveal; actor/time hold; reason/gate hold; missing-transition hold; next-state/review/disposition hold; caption-free clean master; caption-on review master; mobile crop review; accessibility review frame. Alternative coverage is a static status-transition rail with the missing event centered if motion weakens legibility. Reject stale UI, caption collision, fake logging, invented event cause, mixed voices, doubled words, overlaps, room-tone jumps, and unreadable fields.

## Locations, arrangements, sound motif, and approved-assets plan

Location is a controlled desk or studio surface with no private material. Arrangement is original abstract status cards and transition rail, cleared type, one cleared narrator, and original or cleared audio. Sound motif: one current-status tick, restrained transition ticks for fictional events, silence at `GAP: EVENT-02`, and a neutral review tone. No audit alarm, success chime, approval fanfare, urgency cue, or security-monitoring cue. No final asset is approved.

## Claim and rights ledgers

| Category | Permitted | Prohibited / unresolved |
|---|---|---|
| Product | Conceptual language about prior status, event, actor/time, reason, affected gate, next state, gap, review, and disposition | Claiming logs, event retention, audit trails, version history, transition tracking, decision records, governance compliance, or product trustworthiness |
| NIST / W3C / GOV.UK guidance | Use sources as logging, version-history, decision-record, and production-review boundaries [900] [901] [902] | Claiming adoption, certification, compliance, or product implementation |
| Craft | A fictional readiness status may motivate history stakes | Claiming calculation correctness, fit, grading accuracy, publication readiness, or tester outcomes |
| Founder | David is a developer whose late mother knitted | Calling David a knitter, designer, pattern designer, technical editor, or tester |
| Outcome | None | Revenue, adoption, accuracy, customer success, savings, final pricing, credentials, testimonials, urgency |
| Rights | Original cards, cleared type, cleared narrator, original/cleared audio | Private records, identifiable people, copyrighted patterns, customer data, unlicensed music/clips/artwork, current UI without approval |

## Risk register and acceptance gates

| Risk | Mitigation | State |
|---|---|---|
| Current status is mistaken for verified history | Open the card into prior state, events, missing gap, review, and disposition | Enforced |
| Logging guidance is overclaimed | Label NIST as high-level research only; no security or audit claim | Enforced |
| Current status implies publication approval | Use fictional `READY` only as a displayed label, then expose `HISTORY INCOMPLETE` | Enforced |
| Captions obscure transition proof | Reserve caption lane; review caption-on and caption-free versions | Pending |
| Mobile crop hides the gap | Keep the vertical rail and missing event central; verify current platform profiles before release | Pending |
| Product proof absent | Keep blocked until current registry entry or approved capture verifies exact behavior | Blocking |

**Director disposition: BLOCKED — do not generate, upload, or approve.**

## Next action

Provide one versioned, non-private, rights-cleared product capture or proof-registry entry showing a real status history with prior status, event, actor, time, reason, affected gate, next state, gap handling, review, and disposition. Then rerun product/data, claims, rights/privacy, caption, audio, platform, continuity, and Director gates.

## References

[900]: https://csrc.nist.gov/pubs/sp/800/92/final "NIST SP 800-92: Guide to Computer Security Log Management"
[901]: https://www.w3.org/TR/dwbp/ "W3C Data on the Web Best Practices"
[902]: https://www.gov.uk/government/publications/architectural-decision-record-framework/architectural-decision-record-framework "GOV.UK Architectural Decision Record Framework"

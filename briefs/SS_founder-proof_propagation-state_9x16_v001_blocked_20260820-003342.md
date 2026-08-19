# Director Brief — Founder Proof / Propagation State

| Field | Value |
|---|---|
| Brief ID | `BRF-founder-proof-propagation-state-9x16-v001` |
| Campaign | `founder-proof` |
| Objective | Show why recording an upstream change is not enough unless each dependent output shows whether the change arrived |
| Audience | Independent knitwear designers, founding testers, and reviewers who need honest change propagation |
| Form / tone | 45-second 9:16 social explainer; quiet, precise, chain-of-change reveal |
| Distribution | TikTok, Instagram Reels, YouTube Shorts, and internal review |
| Brief tier | Standard production brief; blocked Director/Planner package |
| Angle | `propagation-state` |
| Working title | Changed upstream is not changed downstream |
| Format / version | 9:16 / v001 |
| Status | **blocked** |
| Reserved filename | `SS_founder-proof_propagation-state_9x16_v001_blocked_20260820-003342.mp4` |
| Director pass | 172 |
| Research record | `research/2026-08-19-wide-director-research.md`, replacement pass 172, refs [891]–[893] |
| Source findings | `research/2026-08-20-pass172-browser-findings.md` |

## Concept and claim boundary

> “Changed upstream is not changed downstream.”

A fictional source record changes from version 01 to version 02. Downstream nodes appear in sequence. One node updates, one remains stale, and one reports an unverified state. The proof card identifies source, version, expected update, observed update, propagation gap, stale value, review, and disposition. The story is about a **chain-of-change record**, not data lineage, provenance, version history, integrity protection, automatic update, stale-value detection, or product correctness.

W3C's Data on the Web Best Practices identifies provenance, data quality, version indicators, version history, persistent identifiers, and stable references as separate practices that aid understanding and reuse [891]. OpenLineage describes metadata around dataset, job, and run entities [892]. NIST's data-integrity guidance addresses identifying and protecting assets against integrity attacks [893]. These sources inform the fictional record and production review only; none proves that Stitch & Scale implements lineage, provenance, versioning, or integrity controls.

All source names, versions, downstream nodes, expected/observed updates, gaps, stale values, review states, and dispositions are fictional. Generated text is not UI truth. Exact product labels, version numbers, warnings, and controls require a current approved product capture or proof-registry entry. David is a developer whose late mother knitted; he is not described as a knitter, knitwear designer, pattern designer, technical editor, or tester.

## Dramatic engine

| Element | Director decision |
|---|---|
| Subject | One fictional change moving from a source record through dependent nodes |
| Desire | Know whether every downstream artifact reflects the new source state |
| Obstacle | The source is updated, but downstream values do not expose update status |
| Stakes | A stale downstream value can look current and be trusted by the next reviewer |
| Change | The chain names expected update, observed update, first propagation gap, stale value, review, and disposition |
| Contradiction | A new source version is not proof that every output changed |
| Escalation | `PROPAGATION_GAP: NODE-02` and `STALE_VALUE: POSSIBLE` turn amber/red |
| Final image | Source and downstream chain remain visible with human review required |

## Treatment and beat sheet

Use a neutral evidence board with fictional `CHANGE C-001`. A source card updates from `VERSION 01` to `VERSION 02`; a line travels through three downstream nodes. The first node reports updated, the second shows an unresolved gap, and the third remains held. No real UI and no numeric craft result appear.

| Beat | Time | Story action | Proof hold |
|---|---:|---|---|
| 1. Source change | 0:00–0:04 | `CHANGE C-001`, `SOURCE`, and `VERSION 02` appear | Hook readable; no real UI |
| 2. Expected update | 0:04–0:10 | `DOWNSTREAM_NODE 01` shows `EXPECTED_UPDATE: YES` | Do not imply actual propagation |
| 3. Observed update | 0:10–0:17 | Node 01 shows updated; Node 02 shows `OBSERVED_UPDATE: UNVERIFIED` | Hold both statuses |
| 4. Propagation gap | 0:17–0:24 | `PROPAGATION_GAP: NODE-02` appears | No invented failure cause |
| 5. Stale value | 0:24–0:32 | `STALE_VALUE: POSSIBLE` appears; chain pauses | No data-loss or security claim |
| 6. Review | 0:32–0:40 | `REVIEWED: PENDING` and `DISPOSITION: HOLD FOR REVIEW` appear | No approval or completion cue |
| 7. Close | 0:40–0:45 | Source and downstream chain remain visible | Final line unobstructed |

## Visual grammar and coverage plan

Use original abstract source and downstream cards, a neutral evidence board, and one chain line that visibly stops at the first unresolved node. Amber marks unverified update; red marks only `PROPAGATION INCOMPLETE`. There is no green updated, complete, secure, or approved state. Captions occupy a fixed lane away from `CHANGE`, `SOURCE`, `VERSION`, `DOWNSTREAM_NODE`, `EXPECTED_UPDATE`, `OBSERVED_UPDATE`, `PROPAGATION_GAP`, `STALE_VALUE`, `REVIEWED`, `DISPOSITION`, tables, numbers, labels, buttons, menus, hands, and primary actions.

Coverage: locked overhead master; source-version insert; downstream node reveal; expected/observed update close hold; gap marker; stale-value hold; review/disposition hold; caption-free clean master; caption-on review master; mobile crop review; accessibility review frame. Alternative coverage is a static source-to-downstream chain with the unresolved node centered if motion weakens legibility. Reject stale UI, caption collision, fake propagation, invented failure cause, mixed voices, doubled words, overlaps, room-tone jumps, and unreadable fields.

## Locations, arrangements, sound motif, and approved-assets plan

Location is a controlled desk or studio surface with no private material. Arrangement is original abstract source/downstream cards, cleared type, one cleared narrator, and original or cleared audio. Sound motif: one source-change tick, restrained connection ticks for verified fictional nodes, silence at `PROPAGATION_GAP`, and a neutral review tone. No data-integrity alarm, success chime, security cue, urgency cue, or false-completion cue. No final asset is approved.

## Claim and rights ledgers

| Category | Permitted | Prohibited / unresolved |
|---|---|---|
| Product | Conceptual language about source versions, downstream updates, gaps, stale values, and review | Claiming data lineage, provenance, version history, automatic update, stale-value detection, integrity protection, security controls, or product correctness |
| W3C / OpenLineage / NIST guidance | Use sources as data-governance and production-review boundaries [891] [892] [893] | Claiming adoption, certification, compliance, or product implementation |
| Craft | A fictional `SIZE NOTE` may motivate downstream stakes | Claiming calculation correctness, fit, grading accuracy, publication readiness, or tester outcomes |
| Founder | David is a developer whose late mother knitted | Calling David a knitter, designer, pattern designer, technical editor, or tester |
| Outcome | None | Revenue, adoption, accuracy, customer success, savings, final pricing, credentials, testimonials, urgency |
| Rights | Original cards, cleared type, cleared narrator, original/cleared audio | Private records, identifiable people, copyrighted patterns, customer data, unlicensed music/clips/artwork, current UI without approval |

## Risk register and acceptance gates

| Risk | Mitigation | State |
|---|---|---|
| Source update is mistaken for downstream completion | Show every node and stop at first unresolved gap | Enforced |
| Concept is mistaken for security or integrity protection | Use neutral stale-value language; no attack or defense imagery | Enforced |
| Lineage references are overclaimed | Use W3C/OpenLineage only as conceptual boundaries | Enforced |
| Captions obscure chain proof | Reserve caption lane; review caption-on and caption-free versions | Pending |
| Mobile crop hides the first propagation gap | Keep source, node, and gap central; verify current platform profiles before release | Pending |
| Human-gate collapse | Preserve calculation, technical edit, physical print review, chart readability, schematic scale, and test knitting separately | Enforced |
| Product proof absent | Keep blocked until current registry entry or approved capture verifies exact behavior | Blocking |

**Director disposition: BLOCKED — do not generate, upload, or approve.**

## Next action

Provide one versioned, non-private, rights-cleared product capture or proof-registry entry showing a real upstream change with source/version, downstream nodes, expected and observed update states, propagation gap, stale-value handling, review, and disposition. Then rerun product/data, claims, rights/privacy, caption, audio, platform, continuity, and Director gates.

## References

[891]: https://www.w3.org/TR/dwbp/ "W3C Data on the Web Best Practices"
[892]: https://openlineage.io/docs/ "OpenLineage — About OpenLineage"
[893]: https://www.nccoe.nist.gov/data-integrity-identifying-and-protecting-assets-against-ransomware-and-other-destructive-events "NIST NCCoE — Data Integrity"

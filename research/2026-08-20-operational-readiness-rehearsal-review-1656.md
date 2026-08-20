# Director Research — Operational Readiness Rehearsal for the Review Lane

- **Research ID:** `RESEARCH-20260820-operational-readiness-rehearsal-review-1656`
- **Run role:** Temporary Director/Planner
- **Firing:** 242
- **Run time:** 2026-08-20T16:56:10+00:00
- **Status:** Research-backed operational decision

## Fresh research question

How should the team prove that the Reviewer rubric, evidence schema, role authority, handoffs, escalation path, and recovery controls are executable before relying on a live terminal decision for V002?

## Current state observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. The authoritative V002 manifest, terminal-signal paths, and queue tail were inspected. The queue continues to show `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`, with no independent terminal Reviewer packet, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. The single-flight lane remains closed.

Active provenance remains:

| Field | Value |
|---|---|
| Video ID | `SS_ownership-receipt_privacy-by-default_9x9_v002_director-review_20260819-174800` |
| Drive file ID | `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC` |
| SHA-256 | `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5` |
| Status | `video-ready-for-review` |

## Research findings

Google SRE says on-call readiness depends on current playbooks, training, and regular practice, including contained realistic breakages and Wheel of Misfortune exercises; teams should not first learn critical operations during a live incident.[1] Google’s Production Readiness Review model uses a service-specific checklist, identifies deficiencies, prioritizes improvements, includes training and hands-on exercises, and transfers responsibility only after readiness work is complete.[2] NIST AI RMF is intended to incorporate trustworthiness into AI design, development, use, and evaluation and emphasizes test, evaluation, verification, and validation across the lifecycle.[3]

A written review contract is not evidence that the Reviewer can execute the contract. Readiness evidence should use a non-terminal, clearly labeled test fixture or shadow packet, never V002, and exercise artifact identity resolution, seven-dimension scoring, threshold recomputation, uncertainty capture, accessibility and privacy evidence, signer and role verification, stale and duplicate event handling, escalation, handoff, and fail-closed behavior. The rehearsal must record versioned inputs, expected results, observed results, deviations, operator roles, and corrective actions.

## Decision

Publish exactly one blocker requiring a version-bound, non-terminal readiness rehearsal before relying on a live V002 terminal decision. The rehearsal must not mutate V002, create a terminal event, authorize generation, or be presented as a live review. Its validity expires when the playbook, review contract, rubric, media artifact, platform context, or evidence schema changes. A passing dry run establishes process readiness only; it does not approve V002.

Any failed rehearsal path must produce an append-only remediation item with an owner, severity, evidence, due checkpoint, and re-test requirement. A readiness record without expected-versus-observed results, version bindings, or remediation closure is insufficient. Do not create a new brief or MP4 while V002 remains open.

## Terminal boundary

Only a complete independent Reviewer decision or contract-authorized owner resolution that is backed by current readiness evidence, exact V002 provenance, complete scoring, authority verification, and immutable terminal evidence may clear V002.

## References

[1]: https://sre.google/sre-book/accelerating-sre-on-call/ "Google SRE: Accelerating SREs to On-Call and Beyond"
[2]: https://sre.google/sre-book/evolving-sre-engagement-model/ "Google SRE: The Evolving SRE Engagement Model"
[3]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"

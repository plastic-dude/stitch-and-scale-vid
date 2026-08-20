# Director Research — Independent Review Disagreement and Adjudication

- **Research ID:** `RESEARCH-20260821-independent-review-disagreement-adjudication-1824`
- **Run role:** Temporary Director/Planner
- **Firing:** 217
- **Run time:** 2026-08-21T18:24:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

When two valid-looking independent Reviewer assessments disagree, how should the system preserve uncertainty and prevent averaging, recency, or role confusion from creating an unauthorized terminal decision?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST AI RMF recommends reliable, documented, fit-for-purpose metrics; independent assessors; documentation of uncertainty, limitations, errors, and what cannot be measured; and transparent roles and delegation. It also recommends separate testing or assessment teams to support independent decisions and course correction. Applied here, disagreement between two otherwise valid Reviewer packets is material uncertainty, not permission to average scores, choose the most recent packet, or let a non-Reviewer role decide. Sources: [NIST AI RMF Measure Playbook](https://airc.nist.gov/airmf-resources/playbook/measure/) and [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/).

## Decision

Publish exactly one blocker requiring conflict preservation and authorized adjudication. If valid independent assessments disagree, preserve both packets append-only and create a linked conflict record containing both unique event IDs, exact V002 provenance, reviewer identities and roles, timestamps, disputed dimensions, methods, evidence references, and the reason the results cannot yet authorize a terminal state. Only the contract-authorized independent review or adjudication role may publish a resolution. The Director, Generator, owner acknowledgement, queue activity, recency, majority, or arithmetic average cannot substitute for that resolution.

Keep the single-flight lane closed. Do not create a new angle brief, MP4, approval, rejection, or remake while the conflict is unresolved. Preserve every original assessment and every later correction or adjudication record; never overwrite or delete evidence.

## Terminal boundary

Only one complete, exact-provenance-bound Reviewer decision or an explicit contract-authorized adjudication resolution may clear the lane. A disagreement remains non-terminal.

## References

[1]: https://airc.nist.gov/airmf-resources/playbook/measure/ "NIST AI RMF Measure Playbook"
[2]: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ "NIST AI RMF Core"

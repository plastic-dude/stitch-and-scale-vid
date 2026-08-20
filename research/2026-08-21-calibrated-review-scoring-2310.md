# Director Research — Calibrated Review Scoring

- **Research ID:** `RESEARCH-20260821-calibrated-review-scoring-2310`
- **Run role:** Temporary Director/Planner
- **Firing:** 232
- **Run time:** 2026-08-21T23:10:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

What calibration and repeatability evidence is needed to ensure that a Reviewer’s seven-dimension score reflects the published rubric rather than an unexamined or drifted evaluator scale?

## Current repository observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. Remote parity was checked. The V002 manifest, Generator handoff, terminal-signal search, and queue tail were inspected from the authoritative remote state. Repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records remain present. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST calls for objective, repeatable, scalable TEVV with documented metrics, methods, tools, limitations, uncertainty, and independent assessors. It recommends reassessing metric appropriateness over time, documenting risks that cannot be measured, and using separate testing teams to support independent decisions and course correction. Sources: [NIST AI RMF Measure Playbook](https://airc.nist.gov/airmf-resources/playbook/measure/), [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/), and [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf).

## Decision

Publish exactly one blocker requiring a version-bound rubric and calibration context. The terminal Reviewer packet must identify the review-contract and rubric versions, scoring anchors or calibration reference, reviewer competency or calibration check where applicable, scoring procedure, independent-assessment status, per-dimension rationale and uncertainty, complete evidence, weighted calculation, threshold comparison, and explicit decision. Calibration is a measurement-quality control, not a second terminal authority; it must not be used to average conflicting decisions or replace independent Reviewer authority.

If the Reviewer used an obsolete rubric, changed scale, unrecorded anchor, inconsistent procedure, or materially drifted interpretation, the packet is context-mismatched and non-terminal until a linked revalidation or authorized adjudication event resolves the issue. Conflicting independent scores must remain append-only and cannot be cleared by majority count, recency, owner preference, or silent averaging. Keep the single-flight lane closed and do not create a new brief or MP4.

## Terminal boundary

Only a complete exact-provenance independent Reviewer packet with version-bound rubric, documented calibration context, reproducible per-dimension scoring, explicit uncertainty, recomputable weighted total, threshold comparison, and immutable evidence—or an equivalent contract-authorized terminal resolution—may clear V002.

## References

[1]: https://airc.nist.gov/airmf-resources/playbook/measure/ "NIST AI RMF Measure Playbook"
[2]: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ "NIST AI RMF Core"
[3]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf "NIST AI RMF 1.0"

# Director Research — Review Coverage and Stopping Rules

- **Research ID:** `RESEARCH-20260821-review-coverage-stopping-rules-2230`
- **Run role:** Temporary Director/Planner
- **Firing:** 231
- **Run time:** 2026-08-21T22:30:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

What coverage and stopping-rule evidence is required before a Reviewer can claim that a video has been adequately inspected, rather than inferring quality from a short, favorable, or incomplete sample?

## Current repository observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. Remote parity was checked. The V002 manifest, Generator handoff, terminal-signal search, and queue tail were inspected from the authoritative remote state. Repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records remain present. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST recommends documented test procedures and metrics, realistic and representative conditions, independent assessors, limitations and external-validity analysis, and attention to pockets of failure rather than averages alone. NIST also says characteristics that cannot be measured should be documented. AWS execution histories use ordered unique event IDs, timestamps, previous-event links, pagination, and explicit input/output details; truncation, missing pages, unavailable logs, or unrecorded workflow history are meaningful limitations. Sources: [NIST AI RMF Measure Playbook](https://airc.nist.gov/airmf-resources/playbook/measure/), [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), [AWS Execution Details](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html), and [AWS GetExecutionHistory](https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetExecutionHistory.html).

## Decision

Publish exactly one blocker requiring a documented inspection-coverage map and stopping rule. The terminal Reviewer packet must state the complete video interval and frame or scene coverage, audio and voice coverage, captions and text coverage, claim and proof coverage, platform/technical checks, any inspected external conditions, all uninspected regions, sampling method, sample density, known failure-mode searches, negative findings, stopping criterion, and evidence identifiers. The packet must distinguish “not observed” from “checked and absent,” “not applicable,” and “unable to inspect.”

A favorable sample, opening-only review, sparse frame sampling, partial audio listen, unavailable Drive data, truncated evidence, missing event pages, unknown stopping point, or silence about uninspected regions is non-terminal. Negative evidence is valid only when the search scope, method, coverage, and limits are documented. If the scope is incomplete, publish an evidence-gap or linked continuation/revalidation event; do not infer approval, rejection, remake authorization, or a new campaign. Keep the single-flight lane closed and do not create a new brief or MP4.

## Terminal boundary

Only a complete exact-provenance independent Reviewer packet with documented coverage, explicit stopping rule, supported negative findings, all seven dimension records, recomputable weighted score, threshold comparison, explicit outcome, and immutable evidence—or an equivalent contract-authorized terminal resolution—may clear V002.

## References

[1]: https://airc.nist.gov/airmf-resources/playbook/measure/ "NIST AI RMF Measure Playbook"
[2]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf "NIST AI RMF 1.0"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html "AWS Step Functions Execution Details"
[4]: https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetExecutionHistory.html "AWS GetExecutionHistory"

# Director Research — Deterministic Review Threshold and Fail-Closed Defaults

- **Research ID:** `RESEARCH-20260821-deterministic-review-threshold-1808`
- **Run role:** Temporary Director/Planner
- **Firing:** 216
- **Run time:** 2026-08-21T18:08:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should the review gate handle a complete-looking Reviewer packet when its weighting, threshold comparison, or input validity is ambiguous, inconsistent, or not independently calculable?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST’s Measure Playbook recommends fit-for-purpose testing procedures and metrics, acceptable performance limits, documented metric-selection criteria, regular assessment of metric effectiveness, and independent assessors outside front-line development. It also emphasizes documenting tools, test sets, methods, and performance outcomes to support repeatability and reliable decisions. Applied here, the seven Reviewer dimensions and their published weights must be shown individually, with the arithmetic total and 65% threshold comparison visible. Source: [NIST AI RMF Measure Playbook](https://airc.nist.gov/airmf-resources/playbook/measure/).

NIST AI RMF identifies objective, repeatable, documented TEVV, independent review, defined roles, and transparent decision processes as governance and measurement outcomes. A packet that contains a total but omits component scores, weights, or calculation cannot be independently checked. Source: [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/).

AWS Choice states evaluate explicit rules and recommend a Default path when no rule matches; if no rule matches and no Default exists, the workflow fails to transition. AWS execution details preserve unique execution identity, inputs, outputs, retries, errors, and event history for inspection. Applied here, absent, malformed, contradictory, or non-numeric review inputs must route to a blocking or escalation state, never implicit approval. Sources: [AWS Step Functions — Choice Workflow State](https://docs.aws.amazon.com/step-functions/latest/dg/state-choice.html) and [AWS Step Functions — Viewing Execution Details](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html).

## Decision

Publish exactly one blocker requiring deterministic, auditable scoring. The terminal packet must include the seven dimension scores, each published weight, weighted contributions, sum, rounding rule, 65% threshold comparison, explicit outcome, and evidence that all inputs were valid and evaluated against the exact V002 artifact. Any missing, malformed, contradictory, or unrecomputable component routes to non-terminal blocked/escalated status. Do not use last-write-wins or optimistic interpretation.

Keep the single-flight lane closed. Preserve all source packets and corrections append-only. Do not create a new angle brief, MP4, approval, rejection, or remake.

## Terminal boundary

Only an independently authored Reviewer packet whose score calculation and threshold comparison can be recomputed from valid exact-provenance inputs may clear the lane.

## References

[1]: https://airc.nist.gov/airmf-resources/playbook/measure/ "NIST AI RMF Measure Playbook"
[2]: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ "NIST AI RMF Core"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/state-choice.html "AWS Step Functions — Choice Workflow State"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html "AWS Step Functions — Viewing Execution Details"

# Director Research — Replayable Review Evidence

- **Research ID:** `RESEARCH-20260821-replayable-review-evidence-1752`
- **Run role:** Temporary Director/Planner
- **Firing:** 215
- **Run time:** 2026-08-21T17:52:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

What evidence is necessary for a Reviewer decision to be independently reconstructed rather than merely asserted as a score or status?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST’s Measure Playbook recommends documenting testing procedures, metrics, tools, test sets, processes, materials, metric-selection criteria, error reports, corrective actions, and generalizability limits. It specifically notes that independent assessors and experts outside front-line development can improve evaluation effectiveness. Applied here, a Reviewer score without its method, inputs, tools/materials, and evidence cannot be independently reproduced and is not sufficient for a terminal transition. Source: [NIST AI RMF Measure Playbook](https://airc.nist.gov/airmf-resources/playbook/measure/).

NIST AI RMF governance emphasizes documented roles, independent review, objective measurement, and traceable lifecycle decisions. This supports binding the evaluation to exact V002 provenance and recording the evaluator identity, evaluation time, method, and outcome. Source: [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/).

AWS execution details provide unique execution identity, status, timestamps, inputs, outputs, retries, errors, and event history. AWS input/output processing also demonstrates that workflow state is transformed through explicit paths while original input can remain available in execution context. The operational lesson is that a decision should retain the exact artifact input, evaluation outputs, scoring calculation, and event history needed for replay or reconstruction. Sources: [AWS Step Functions — Viewing Execution Details](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html) and [AWS Step Functions — Processing Input and Output](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-input-output-filtering.html).

## Decision

Publish exactly one blocker requiring reproducible Reviewer evidence. The terminal packet must include unique event ID, timestamp, exact V002 video ID, Drive file ID, SHA-256, independent reviewer role, evaluation method, tools/materials or evidence references, complete seven-dimension scores, weighting calculation, total score, threshold comparison, explicit terminal outcome, and immutable inspectable evidence. A bare score, status update, queue record, or untraceable assertion remains non-terminal.

Keep the single-flight lane closed. Preserve evidence append-only and escalate if the packet cannot be reconstructed. Do not create a new angle brief, MP4, approval, rejection, or remake.

## Terminal boundary

Only a complete independent Reviewer decision with reproducible inputs, method, outputs, and evidence may clear the lane.

## References

[1]: https://airc.nist.gov/airmf-resources/playbook/measure/ "NIST AI RMF Measure Playbook"
[2]: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ "NIST AI RMF Core"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html "AWS Step Functions — Viewing Execution Details"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-input-output-filtering.html "AWS Step Functions — Processing Input and Output"

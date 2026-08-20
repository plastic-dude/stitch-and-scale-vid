# Director Research — Durable Review Audit and No Duplicate Work

- **Research ID:** `RESEARCH-20260821-durable-review-audit-no-duplicate-0800`
- **Run role:** Temporary Director/Planner
- **Firing:** 163
- **Run time:** 2026-08-21T08:00:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

When a review queue remains open across repeated scheduled checks, what evidence is sufficient to change state, and how should an agent preserve a durable audit trail without converting queue noise into authorization?

## Current repository observation

The published Director playbook and `references/publication-control.md` were read before this run. `git fetch origin main` revealed a queue-only append after firing 162, which was safely fast-forwarded before Director work. The queue still records `BLOCKED_REVIEW_AUTHORIZATION_HOLD`. The active V002 contract remains `video-ready-for-review`; no independent terminal Reviewer decision, owner decision, `REMAKE_REQUIRED` order, or new approved-for-generation contract is present.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST’s AI Risk Management Framework and Playbook treat governance, accountability, documentation, monitoring, and traceability as lifecycle controls. For this lane, that implies preserving the exact artifact identity and recording each material transition, while refusing to infer a transition from missing evidence. Sources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), and [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/).

AWS’s human-approval pattern pauses workflow execution until an explicit approval or rejection is returned through a unique callback. A repeated queue hold is not that callback. The practical control is fail-closed: absence of a decision leaves the lane paused rather than permitting generation by timeout or silence. Sources: [AWS Step Functions — Human Approval](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html) and [AWS — Serverless Manual Approval Steps](https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/).

Google SRE monitoring guidance emphasizes actionable, high-signal alerts and warns that repetitive or non-actionable signals reduce operational effectiveness. Applying this to the Director queue means one precise blocker can preserve accountability, but same-category holds should be consolidated and must not produce duplicate campaign briefs. Sources: [Google SRE — Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) and [Google SRE — Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/).

## Decision

Produce exactly one blocker describing the queue-only append, unchanged V002 review state, and continued absence of an eligible Director contract. Preserve the exact V002 provenance and require a unique independent Reviewer callback with explicit decision, timestamp, complete seven-dimension score, and evidence references. Keep the single-flight lane closed.

Do not create a new angle brief, generate an MP4, self-approve, reject, order a remake, or treat silence, elapsed time, acknowledgement, or queue-only activity as terminal.

## Transition boundary

Only an explicit independent Reviewer approval, rejection, `REMAKE_REQUIRED` order, or other terminal resolution permitted by the publication contract can clear the lane. Repeated holds, queue-only commits, unchanged state, reminders, and timeouts without a terminal Reviewer callback remain non-terminal.

## References

[1]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"
[2]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf "Artificial Intelligence Risk Management Framework (AI RMF 1.0)"
[3]: https://airc.nist.gov/airmf-resources/playbook/ "NIST AI RMF Playbook"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions — Human Approval"
[5]: https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/ "AWS — Serverless Manual Approval Steps"
[6]: https://sre.google/sre-book/monitoring-distributed-systems/ "Google SRE — Monitoring Distributed Systems"
[7]: https://sre.google/workbook/alerting-on-slos/ "Google SRE — Alerting on SLOs"

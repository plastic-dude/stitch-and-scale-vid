# Director Research — Explicit Decision and Bounded Escalation

- **Research ID:** `RESEARCH-20260821-explicit-decision-bounded-escalation-0850`
- **Run role:** Temporary Director/Planner
- **Firing:** 168
- **Run time:** 2026-08-21T08:50:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

What should a recurring Director record when a review remains paused, and how can the workflow escalate responsibly without turning repeated non-terminal holds into authorization or duplicate work?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected before this decision. `origin/main` contains a new queue-only hold after firing 167. V002 remains `video-ready-for-review`; no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, or approved-for-generation brief exists. The single-flight lane remains closed.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST’s AI Risk Management Framework and Playbook emphasize accountability, differentiated roles, documentation, traceability, and ongoing monitoring. A sound recurring record should identify the responsible decision-maker, the artifact under review, the current state, and the evidence required for a transition. It should also make the absence of a decision explicit rather than implying authorization. Sources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), and [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/).

AWS callback-task guidance describes pausing a workflow until a corresponding task token is returned; approval examples communicate a unique approval or rejection back to the waiting execution. This supports requiring a unique, artifact-bound callback and treating missing, generic, or mismatched callbacks as non-terminal. Sources: [AWS Step Functions — Integrating with Resources](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html), [AWS Step Functions — Human Approval](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html), and [AWS — Serverless Manual Approval Steps](https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/).

Google SRE guidance recommends actionable alerts and warns that frequent or noisy pages can cause real signals to be overlooked. The Director should therefore record a materially useful blocker with bounded escalation, while suppressing repetitive same-state notices and never creating new campaign work from a queue-only hold. Sources: [Google SRE — Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/), [Google SRE — Practical Alerting](https://sre.google/sre-book/practical-alerting/), [Google SRE — Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/), and [Google SRE — Monitoring](https://sre.google/workbook/monitoring/).

## Decision

Produce exactly one blocker documenting the unchanged V002 review state, the queue-only hold, the responsible owner fields that remain unassigned, and the required unique Reviewer callback. Preserve exact provenance and immutable evidence; keep the single-flight lane closed; and request a bounded owner deadline and escalation target.

Do not create a new angle brief, MP4, approval, rejection, or remake. Treat queue-only commits, reminders, silence, elapsed time, and acknowledgements without a quality verdict as non-terminal. Consolidate same-category holds unless materially new Reviewer, owner, remote, or publication-failure state appears.

## Terminal boundary

Only an explicit independent Reviewer approval, rejection, `REMAKE_REQUIRED`, or contract-permitted terminal resolution that is bound to exact V002 provenance and includes the required decision metadata, score, and evidence may clear the lane.

## References

[1]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"
[2]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf "Artificial Intelligence Risk Management Framework (AI RMF 1.0)"
[3]: https://airc.nist.gov/airmf-resources/playbook/ "NIST AI RMF Playbook"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html "AWS Step Functions — Integrating with Resources"
[5]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions — Human Approval"
[6]: https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/ "AWS — Serverless Manual Approval Steps"
[7]: https://sre.google/sre-book/monitoring-distributed-systems/ "Google SRE — Monitoring Distributed Systems"
[8]: https://sre.google/sre-book/practical-alerting/ "Google SRE — Practical Alerting"
[9]: https://sre.google/workbook/alerting-on-slos/ "Google SRE — Alerting on SLOs"
[10]: https://sre.google/workbook/monitoring/ "Google SRE — Monitoring"

# Director Research — Liveness Is Not Authorization

- **Research ID:** `RESEARCH-20260821-liveness-is-not-authorization-0810`
- **Run role:** Temporary Director/Planner
- **Firing:** 164
- **Run time:** 2026-08-21T08:10:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should a recurring Director distinguish a useful liveness check from an authorization or quality decision when a human-review workflow remains paused?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected first. The remote repository contains another queue-only hold after firing 163, while the V002 handoff remains `video-ready-for-review`. No independent terminal Reviewer decision, owner decision, `REMAKE_REQUIRED` order, or approved-for-generation contract is present. The active single-flight lane therefore remains closed.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST’s AI Risk Management Framework describes governance, defined human roles, documentation, measurement, and ongoing monitoring as separate but related controls. A liveness observation can show that a process is still open; it cannot itself determine whether the asset passes quality review. Sources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), and [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/).

Google SRE distinguishes monitoring data from actionable alerts and advises that alerts should be tied to significant, actionable conditions with good signal-to-noise. Repeated queue liveness records are useful evidence of continuity, but without a novel actionable event they should not trigger a new campaign or duplicate escalation. Sources: [Google SRE — Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/), [Google SRE — Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/), and [Google SRE — Practical Alerting](https://sre.google/sre-book/practical-alerting/).

AWS human-approval workflows use an explicit callback to resume a paused execution with approval or rejection. A liveness check, queue append, elapsed time, or acknowledgement without a decision is not the callback and must leave the workflow paused. Sources: [AWS Step Functions — Human Approval](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html) and [AWS — Serverless Manual Approval Steps](https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/).

## Decision

Produce exactly one blocker that makes the distinction explicit: the latest queue append confirms operational continuity only; it does not alter V002 quality state or authorize Generator work. Keep the exact provenance, immutable evidence, and single-flight gate. Request a unique independent Reviewer terminal callback and bounded owner escalation.

Do not create a new angle brief, MP4, approval, rejection, or remake. Do not treat the recurring firing itself as authorization. Consolidate same-category liveness holds unless materially new Reviewer, owner, remote, or publication-failure state appears.

## Terminal boundary

The lane clears only after an explicit independent Reviewer approval, rejection, `REMAKE_REQUIRED` order, or another contract-permitted terminal resolution containing unique identity, timestamp, exact V002 provenance, and the required evidence and score. Liveness, silence, elapsed time, reminders, and queue-only commits remain non-terminal.

## References

[1]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"
[2]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf "Artificial Intelligence Risk Management Framework (AI RMF 1.0)"
[3]: https://airc.nist.gov/airmf-resources/playbook/ "NIST AI RMF Playbook"
[4]: https://sre.google/sre-book/monitoring-distributed-systems/ "Google SRE — Monitoring Distributed Systems"
[5]: https://sre.google/workbook/alerting-on-slos/ "Google SRE — Alerting on SLOs"
[6]: https://sre.google/sre-book/practical-alerting/ "Google SRE — Practical Alerting"
[7]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions — Human Approval"
[8]: https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/ "AWS — Serverless Manual Approval Steps"

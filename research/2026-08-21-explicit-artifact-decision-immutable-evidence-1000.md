# Director Research — Explicit Artifact Decision and Immutable Evidence

- **Research ID:** `RESEARCH-20260821-explicit-artifact-decision-immutable-evidence-1000`
- **Run role:** Temporary Director/Planner
- **Firing:** 175
- **Run time:** 2026-08-21T10:00:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should a recurring Director distinguish a legitimate artifact-specific terminal decision from repeated queue noise, and what evidence must remain immutable while the review lane is paused?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected before this decision. `origin/main` contains another queue-only hold after firing 174. V002 remains `video-ready-for-review`; no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, or approved-for-generation brief exists. The single-flight lane remains closed.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST’s AI Risk Management Framework and Playbook emphasize accountability, defined roles, systematic documentation, traceability, and ongoing monitoring. A terminal decision should identify the responsible role, exact asset, decision, and supporting evidence; an unchanged queue state or absence of a contrary decision does not satisfy those requirements. Sources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), and [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/).

AWS callback-task and human-approval patterns pause execution until the corresponding unique callback returns explicit approval or rejection. This supports preserving V002 in a fail-closed state: queue-only commits, silence, elapsed time, reminders, or generic acknowledgements cannot resume the waiting contract, and a decision for another asset cannot authorize V002. Sources: [AWS Step Functions — Integrating with Resources](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html), [AWS Step Functions — Human Approval](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html), and [AWS — Serverless Manual Approval Steps](https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/).

Google SRE guidance emphasizes actionable, high-signal alerts, low noise, and deduplication of equivalent conditions. The Director should preserve material evidence in append-only records but should not generate duplicate briefs or production work from repeated same-state holds. Sources: [Google SRE — Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/), [Google SRE — Practical Alerting](https://sre.google/sre-book/practical-alerting/), and [Google SRE — Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/).

## Decision

Produce exactly one blocker stating that the newest queue-only hold remains non-terminal, preserving exact V002 provenance and immutable evidence, and requiring a unique independent Reviewer callback plus bounded owner escalation. Keep the single-flight lane closed.

Do not create a new angle brief, MP4, approval, rejection, or remake. Treat repeated holds, silence, elapsed time, reminders, and acknowledgements without a quality verdict as non-terminal. Consolidate same-category holds absent materially new Reviewer, owner, remote, or publication-failure state.

## Terminal boundary

Only an explicit independent Reviewer approval, rejection, `REMAKE_REQUIRED`, or contract-permitted terminal resolution with unique event identity, timestamp, exact V002 provenance, required score, and evidence may clear the lane.

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

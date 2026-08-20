# Director Research — Audit, Explicit Authorization, and Noise Control

- **Research ID:** `RESEARCH-20260821-audit-explicit-authorization-noise-control-0920`
- **Run role:** Temporary Director/Planner
- **Firing:** 171
- **Run time:** 2026-08-21T09:20:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

What audit and authorization evidence should distinguish a legitimate terminal review decision from recurring queue noise, and how should escalation remain actionable without opening duplicate production work?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected before this decision. `origin/main` contains another queue-only hold after firing 170. V002 remains `video-ready-for-review`; no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, or approved-for-generation brief exists. The single-flight lane remains closed.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST’s AI Risk Management Framework and Playbook emphasize accountability, defined roles, systematic documentation, traceability, and monitoring. These principles support preserving the exact asset identity and an append-only audit trail while requiring the responsible role to make an explicit, reconstructable decision before a terminal state is accepted. Sources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), and [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/).

AWS callback-task and human-approval patterns pause a workflow until the corresponding unique callback returns an explicit approval or rejection. This supports a fail-closed interpretation for V002: queue-only commits, silence, elapsed time, reminders, or acknowledgements without a quality decision cannot resume the lane. Sources: [AWS Step Functions — Integrating with Resources](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html), [AWS Step Functions — Human Approval](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html), and [AWS — Serverless Manual Approval Steps](https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/).

Google SRE guidance stresses high-signal, low-noise alerting and deduplication of equivalent signals. The Director should therefore publish a precise blocker when it records a materially useful escalation requirement, but should consolidate same-state queue holds rather than generating duplicate briefs or production instructions. Sources: [Google SRE — Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/), [Google SRE — Practical Alerting](https://sre.google/sre-book/practical-alerting/), and [Google SRE — Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/).

## Decision

Produce exactly one blocker stating that the newest hold remains non-terminal, preserving V002’s exact provenance and requiring the responsible owner, bounded deadline, escalation target, and a unique independent Reviewer callback with explicit decision, timestamp, seven-dimension score, and evidence references.

Do not create a new angle brief, MP4, approval, rejection, or remake. Keep the single-flight lane closed and consolidate same-category holds absent materially new Reviewer, owner, remote, or publication-failure state.

## Terminal boundary

Only an explicit approval, rejection, `REMAKE_REQUIRED`, or contract-permitted terminal resolution bound to exact V002 identity and evidence may clear the lane. Process continuity is not quality authorization.

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

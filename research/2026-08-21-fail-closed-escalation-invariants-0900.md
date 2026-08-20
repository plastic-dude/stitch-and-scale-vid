# Director Research — Fail-Closed Escalation Invariants

- **Research ID:** `RESEARCH-20260821-fail-closed-escalation-invariants-0900`
- **Run role:** Temporary Director/Planner
- **Firing:** 169
- **Run time:** 2026-08-21T09:00:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

Which invariants must a recurring Director preserve when a review state remains open, and how should operational evidence and escalation remain useful without becoming an implicit approval or a duplicate production instruction?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected before this decision. `origin/main` contains a new queue-only hold after firing 168. V002 remains `video-ready-for-review`; no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, or approved-for-generation brief exists. The single-flight lane remains closed.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST’s AI Risk Management Framework and Playbook distinguish governance, defined accountability, documentation, measurement, and ongoing monitoring. These controls support three local invariants: the responsible role must be explicit, the artifact identity and provenance must be preserved, and a state transition must be supported by a reconstructable decision record rather than inferred from silence. Sources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), and [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/).

AWS human-approval patterns pause a workflow until a corresponding unique callback is returned, with the callback communicating approval or rejection to the waiting execution. This supports fail-closed behavior: the absence of the callback, a queue-only hold, a timeout, or a generic acknowledgement leaves V002 in review. Sources: [AWS Step Functions — Human Approval](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html), [AWS Step Functions — Integrating with Resources](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html), and [AWS — Serverless Manual Approval Steps](https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/).

Google SRE guidance warns that frequent or noisy pages can hide real incidents and recommends actionable, high-signal alerting. Therefore, an operational hold should identify a concrete bounded action, while same-state repetitions should be consolidated and must not open a new campaign or production lane. Sources: [Google SRE — Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/), [Google SRE — Practical Alerting](https://sre.google/sre-book/practical-alerting/), [Google SRE — Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/), and [Google SRE — Monitoring](https://sre.google/workbook/monitoring/).

## Decision

Produce exactly one blocker that records the unchanged V002 state, the queue-only hold, the required owner escalation fields, and the Reviewer callback contract. Preserve exact V002 provenance and immutable evidence, keep the single-flight lane closed, and suppress same-category duplicate work.

Do not create a new angle brief, MP4, approval, rejection, or remake. Treat queue-only commits, reminders, silence, elapsed time, and acknowledgements without a quality verdict as non-terminal. If a material publication failure appears, switch to `publication-blocked`, stop creating angles, and escalate.

## Invariants

The lane remains closed until an explicit independent Reviewer approval, rejection, `REMAKE_REQUIRED`, or other contract-permitted terminal resolution is published with exact V002 provenance, unique event identity, timestamp, required seven-dimension score, and evidence references. Operational continuity is evidence about process state, not a quality verdict.

## References

[1]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"
[2]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf "Artificial Intelligence Risk Management Framework (AI RMF 1.0)"
[3]: https://airc.nist.gov/airmf-resources/playbook/ "NIST AI RMF Playbook"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions — Human Approval"
[5]: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html "AWS Step Functions — Integrating with Resources"
[6]: https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/ "AWS — Serverless Manual Approval Steps"
[7]: https://sre.google/sre-book/monitoring-distributed-systems/ "Google SRE — Monitoring Distributed Systems"
[8]: https://sre.google/sre-book/practical-alerting/ "Google SRE — Practical Alerting"
[9]: https://sre.google/workbook/alerting-on-slos/ "Google SRE — Alerting on SLOs"
[10]: https://sre.google/workbook/monitoring/ "Google SRE — Monitoring"

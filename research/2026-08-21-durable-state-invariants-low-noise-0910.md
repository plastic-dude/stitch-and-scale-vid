# Director Research — Durable State Invariants and Low-Noise Holds

- **Research ID:** `RESEARCH-20260821-durable-state-invariants-low-noise-0910`
- **Run role:** Temporary Director/Planner
- **Firing:** 170
- **Run time:** 2026-08-21T09:10:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should a recurring Director preserve durable state invariants and a useful audit trail when a human-review queue remains open, while preventing repeated non-actionable holds from becoming production instructions?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected before this decision. `origin/main` contains another queue-only hold after firing 169. V002 remains `video-ready-for-review`; no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, or approved-for-generation brief exists. The single-flight lane remains closed.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST’s AI Risk Management Framework and Playbook treat governance, accountability, documentation, traceability, and ongoing monitoring as complementary lifecycle controls. For this workflow, the durable invariants are: the role responsible for a decision is explicit; the exact asset identity and provenance are preserved; material observations are recorded; and a terminal state is never inferred from the absence of a decision. Sources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), and [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/).

AWS human-approval patterns pause workflow execution until a corresponding approval or rejection is returned through a unique callback. This supports a fail-closed lane: queue-only activity, elapsed time, reminder, or acknowledgement without a quality decision cannot advance V002. Sources: [AWS Step Functions — Human Approval](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html) and [AWS — Serverless Manual Approval Steps](https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/).

Google SRE guidance says effective alerting has high signal and low noise, and describes deduplication of equivalent alerts. The operational implication is to retain material state in append-only records but consolidate same-state queue holds and avoid opening a new production lane without a novel actionable event. Sources: [Google SRE — Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/), [Google SRE — Practical Alerting](https://sre.google/sre-book/practical-alerting/), and [Google SRE — Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/).

## Decision

Produce exactly one blocker recording the unchanged V002 review state and the newest queue-only hold. Reassert the exact provenance-bound Reviewer callback requirements, bounded owner escalation fields, immutable evidence, and closed single-flight lane.

Do not create a new angle brief, MP4, approval, rejection, or remake. Treat queue-only commits, silence, elapsed time, reminders, and acknowledgements without a quality verdict as non-terminal. Consolidate same-category holds unless materially new Reviewer, owner, remote, or publication-failure state appears.

## Terminal boundary

Only an explicit independent Reviewer approval, rejection, `REMAKE_REQUIRED`, or contract-permitted terminal resolution with unique event identity, timestamp, exact V002 provenance, required score, and evidence may clear the lane.

## References

[1]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"
[2]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf "Artificial Intelligence Risk Management Framework (AI RMF 1.0)"
[3]: https://airc.nist.gov/airmf-resources/playbook/ "NIST AI RMF Playbook"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions — Human Approval"
[5]: https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/ "AWS — Serverless Manual Approval Steps"
[6]: https://sre.google/sre-book/monitoring-distributed-systems/ "Google SRE — Monitoring Distributed Systems"
[7]: https://sre.google/sre-book/practical-alerting/ "Google SRE — Practical Alerting"
[8]: https://sre.google/workbook/alerting-on-slos/ "Google SRE — Alerting on SLOs"

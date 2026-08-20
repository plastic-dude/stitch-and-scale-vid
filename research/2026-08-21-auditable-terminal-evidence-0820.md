# Director Research — Auditable Terminal Evidence

- **Research ID:** `RESEARCH-20260821-auditable-terminal-evidence-0820`
- **Run role:** Temporary Director/Planner
- **Firing:** 165
- **Run time:** 2026-08-21T08:20:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

What evidence should a recurring Director require before moving a paused review workflow from a non-terminal state to approval, rejection, or remake, and how should recurring checks remain useful without producing duplicate work?

## Current repository observation

The published Director playbook and `references/publication-control.md` were read before this decision. `origin/main` contains a queue-only hold after firing 164. The V002 handoff remains `video-ready-for-review`; no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, or new approved-for-generation brief is present. The single-flight lane remains closed.

Active provenance is unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST’s AI Risk Management Framework identifies governance, accountability, defined roles, documentation, measurement, and monitoring as connected controls across the AI lifecycle. A terminal transition should therefore be attributable and reconstructable, not inferred from absence of a contrary signal. Sources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), and [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/).

AWS’s documented human-approval pattern pauses execution until a unique callback returns an explicit approval or rejection. This supports a fail-closed state machine: a queue hold, timeout, reminder, or acknowledgement without a decision cannot move the asset out of review. Sources: [AWS Step Functions — Human Approval](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html) and [AWS — Serverless Manual Approval Steps](https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/).

Google SRE guidance recommends alerting on significant, actionable conditions and managing signal-to-noise. A recurring check is valuable when it detects a novel state or records a bounded escalation; repeated queue-only holds should be consolidated and must not trigger duplicate briefs or new production work. Sources: [Google SRE — Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/), [Google SRE — Practical Alerting](https://sre.google/sre-book/practical-alerting/), and [Google SRE — Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/).

## Decision

Produce exactly one blocker that records the queue-only hold, restates the evidentiary requirements for any terminal transition, and requests bounded owner escalation plus a unique independent Reviewer callback. Preserve V002’s exact provenance and immutable evidence, keep the single-flight lane closed, and suppress same-category duplicate work.

Do not create a new angle brief, generate an MP4, self-approve, reject, order a remake, or treat silence, elapsed time, reminders, queue-only commits, or acknowledgements without a quality verdict as terminal.

## Terminal evidence contract

A valid terminal Reviewer transition must contain a unique event identifier, explicit decision, timestamp, exact V002 provenance, complete seven-dimension score where applicable, and evidence references. Only an explicit approval, rejection, `REMAKE_REQUIRED`, or contract-permitted terminal resolution can clear the lane.

## References

[1]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"
[2]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf "Artificial Intelligence Risk Management Framework (AI RMF 1.0)"
[3]: https://airc.nist.gov/airmf-resources/playbook/ "NIST AI RMF Playbook"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions — Human Approval"
[5]: https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/ "AWS — Serverless Manual Approval Steps"
[6]: https://sre.google/sre-book/monitoring-distributed-systems/ "Google SRE — Monitoring Distributed Systems"
[7]: https://sre.google/sre-book/practical-alerting/ "Google SRE — Practical Alerting"
[8]: https://sre.google/workbook/alerting-on-slos/ "Google SRE — Alerting on SLOs"

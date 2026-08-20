# Director Research — Fail-Closed Provenance-Bound Callback

- **Research ID:** `RESEARCH-20260821-fail-closed-provenance-callback-0830`
- **Run role:** Temporary Director/Planner
- **Firing:** 166
- **Run time:** 2026-08-21T08:30:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should a recurring agent preserve a fail-closed state machine when the queue contains repeated holds, and what makes a human-review callback sufficiently bound to the exact asset to authorize a transition?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected first. `origin/main` contains a new queue-only hold after firing 165. V002 remains `video-ready-for-review`; no independent terminal Reviewer decision, owner decision, `REMAKE_REQUIRED` order, or approved-for-generation brief exists. The single-flight lane remains closed.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST’s AI Risk Management Framework emphasizes governance, accountability, defined responsibilities, documentation, traceability, and ongoing monitoring. For this workflow, a valid decision must be attributable to the appropriate role and linked to the precise artifact under review; absence of a decision must not be interpreted as approval. Sources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), and [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/).

AWS documents human approval as a paused workflow resumed by a unique callback token carrying an explicit approval or rejection. This supports a fail-closed rule: a queue append, timeout, reminder, or generic acknowledgement is not a valid transition event, and a callback should be matched to the exact waiting execution rather than merely to a similar name. Sources: [AWS Step Functions — Human Approval](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html), [AWS — Serverless Manual Approval Steps](https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/), and [AWS Step Functions Best Practices](https://docs.aws.amazon.com/step-functions/latest/dg/sfn-best-practices.html).

Google SRE guidance distinguishes meaningful, actionable alert conditions from noisy telemetry and recommends controlling signal-to-noise. Repeated same-state queue holds should remain auditable but must be deduplicated operationally and must not trigger duplicate briefs or production work. Sources: [Google SRE — Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/), [Google SRE — Practical Alerting](https://sre.google/sre-book/practical-alerting/), and [Google SRE — Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/).

## Decision

Produce exactly one blocker stating that the queue-only hold does not satisfy the provenance-bound terminal callback requirement. Preserve V002’s exact identity and hash, keep the single-flight lane closed, and request a unique independent Reviewer decision with explicit decision, event identifier, timestamp, seven-dimension score, and evidence references.

Do not create a new angle brief, generate an MP4, self-approve, reject, order a remake, or interpret silence, elapsed time, reminders, queue-only commits, or acknowledgements without a quality verdict as terminal. Consolidate same-category holds unless materially new Reviewer, owner, remote, or publication-failure state appears.

## Transition boundary

Only an explicit approval, rejection, `REMAKE_REQUIRED`, or other contract-permitted terminal resolution that is bound to exact V002 provenance may clear the lane. A callback for another video, a callback without exact provenance, or a callback missing the required evidence is not sufficient.

## References

[1]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"
[2]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf "Artificial Intelligence Risk Management Framework (AI RMF 1.0)"
[3]: https://airc.nist.gov/airmf-resources/playbook/ "NIST AI RMF Playbook"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions — Human Approval"
[5]: https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/ "AWS — Serverless Manual Approval Steps"
[6]: https://docs.aws.amazon.com/step-functions/latest/dg/sfn-best-practices.html "AWS Step Functions Best Practices"
[7]: https://sre.google/sre-book/monitoring-distributed-systems/ "Google SRE — Monitoring Distributed Systems"
[8]: https://sre.google/sre-book/practical-alerting/ "Google SRE — Practical Alerting"
[9]: https://sre.google/workbook/alerting-on-slos/ "Google SRE — Alerting on SLOs"

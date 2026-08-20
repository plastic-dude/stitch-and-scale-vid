# Director Research — Explicit Review Gate and No Duplicate Work

- **Research ID:** `RESEARCH-20260820-explicit-review-gate-no-duplicate-1452`
- **Run role:** Temporary Director/Planner
- **Firing:** 162
- **Run time:** 2026-08-20T14:52:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

When a human-review workflow remains paused and repeated hold records exist, what evidence is sufficient to change state, and how should an agent avoid creating duplicate work or converting silence into approval?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected before the decision. `git fetch origin main` found no newer remote commit after firing 161; local `HEAD` and `origin/main` remain synchronized at the current remote tip. The queue continues to contain `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains the sole active single-flight contract in `video-ready-for-review`, with no independent terminal Reviewer decision, no owner decision, no `REMAKE_REQUIRED` order, and no approved-for-generation brief.

Active provenance is unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST’s AI Risk Management Framework treats governance, accountability, documentation, and ongoing monitoring as lifecycle controls. A repeated hold should therefore remain an auditable operational record, while a state transition requires an attributable decision with enough documentation to reconstruct what happened. Sources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), and [NIST AI RMF Playbook — Govern](https://airc.nist.gov/airmf-resources/playbook/govern/).

Google SRE guidance distinguishes actionable alerts from noisy or repetitive signals and emphasizes improving signal-to-noise. Applying that principle here means one precise blocker may preserve accountability, but repeated same-category holds should be consolidated rather than spawning duplicate briefs or repeated campaign requests. Sources: [Google SRE — Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) and [Google SRE — Alerting on SLOs](https://sre.google/workbook/alerting-on-slos/).

Human-in-the-loop workflow guidance describes approval as an explicit step that pauses execution until a human decision is received. AWS’s approval pattern similarly resumes only after a unique callback communicates approval or rejection. Therefore, silence, elapsed time, a queue append, or an acknowledgement without a quality verdict cannot authorize generation or clear the single-flight lane. Sources: [AWS Step Functions — Human Approval](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html) and [AWS — Serverless Manual Approval Steps](https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/).

## Decision

Produce exactly one blocker, not a new brief. It should state that V002 remains paused at the review gate, that no eligible Director contract exists, and that no state transition is authorized without a unique provenance-bound independent Reviewer decision or an explicit terminal event permitted by the publication contract.

The blocker should request one bounded owner action and one unique terminal Reviewer callback, preserve exact V002 provenance, and suppress same-category duplication. It must not generate an MP4, self-approve, reject, order a remake, or clear the lane.

## State-transition boundary

A valid terminal transition requires an explicit authorized decision, a unique event identifier, timestamp, exact V002 provenance, complete seven-dimension score where applicable, and evidence references. The following remain non-terminal: repeated authorization holds, no eligible contract, queue-only updates, reminders, silence, elapsed time, acknowledgement without a quality verdict, and unchanged state.

## References

[1]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"
[2]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf "Artificial Intelligence Risk Management Framework (AI RMF 1.0)"
[3]: https://airc.nist.gov/airmf-resources/playbook/govern/ "NIST AI RMF Playbook — Govern"
[4]: https://sre.google/sre-book/monitoring-distributed-systems/ "Google SRE — Monitoring Distributed Systems"
[5]: https://sre.google/workbook/alerting-on-slos/ "Google SRE — Alerting on SLOs"
[6]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions — Human Approval"
[7]: https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/ "AWS — Serverless Manual Approval Steps"

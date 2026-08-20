# Director Research — Terminal Callback Identity and Bounded Review Waiting

- **Research ID:** `RESEARCH-20260821-terminal-callback-identity-heartbeat-1434`
- **Run role:** Temporary Director/Planner
- **Firing:** 202
- **Run time:** 2026-08-21T14:34:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should the V002 review hold distinguish a valid terminal callback from repeated liveness noise, while ensuring that a waiting review cannot remain unbounded without an accountable escalation path?

## Current repository observation

The published Director playbook and `references/publication-control.md` were read from the authoritative repository state. `origin/main` was inspected after fetch and is synchronized with the local checkout. The queue contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, or approved-for-generation contract is present.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST describes the AI Risk Management Framework as a way to incorporate trustworthiness considerations throughout design, development, use, and evaluation. For this lane, that implies that a state transition must remain auditable across the lifecycle: the decision-maker, artifact, evidence, and outcome should be recoverable rather than inferred from elapsed time or operational chatter. Source: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework).

AWS Step Functions documents callback tasks that pause until a task token is returned, and states that only a valid callback with success or failure allows the workflow to continue. AWS also documents heartbeat timeouts to prevent a waiting task from remaining indefinitely stuck. Applied here, the Reviewer callback needs a unique event identity bound to the exact V002 artifact; an operational heartbeat or repeated hold may demonstrate that the system is alive, but cannot authorize a quality transition. A bounded escalation deadline is therefore required in parallel with the fail-closed wait. Sources: [AWS Step Functions — Integrating with Resources](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html) and [AWS Step Functions — Human Approval](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html).

Google SRE guidance warns that frequent pages cause people to skim or ignore alerts and recommends simple, actionable, high-signal alerts. It further distinguishes novel, actionable problems from repeated benign conditions. Applied here, repeated same-state queue holds should be preserved as immutable operational evidence but consolidated as one blocker category unless there is a materially new Reviewer event, owner assignment, deadline, escalation target, remote state, or publication failure. Source: [Google SRE — Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/).

## Decision

Publish exactly one blocker. Keep V002 fail-closed and the single-flight lane closed. Require the independent Reviewer to publish one unique terminal callback containing: exact video ID, Drive file ID, SHA-256, explicit decision, timestamp, complete seven-dimension score, and evidence references. Require the owner to assign a responsible party, bounded deadline, and escalation target. Treat queue holds, reminders, acknowledgements without a verdict, silence, elapsed time, and callbacks lacking exact provenance as non-terminal.

Do not create a new campaign angle, Generator-ready brief, MP4, approval, rejection, or remake. Do not interpret a heartbeat or liveness record as a quality decision.

## Terminal boundary

The lane may clear only after an explicit independent Reviewer approval, rejection, `REMAKE_REQUIRED` order, or other contract-permitted terminal resolution that is uniquely identified, timestamped, bound to exact V002 provenance, and supported by the required evidence.

## References

[1]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"
[2]: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html "AWS Step Functions — Integrating with Resources"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions — Human Approval"
[4]: https://sre.google/sre-book/monitoring-distributed-systems/ "Google SRE — Monitoring Distributed Systems"

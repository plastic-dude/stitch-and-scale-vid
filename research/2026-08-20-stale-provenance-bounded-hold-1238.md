# Director Research — Stale Provenance and Bounded Hold

- **Research ID:** `RESEARCH-20260820-stale-provenance-bounded-hold-1238`
- **Run role:** Temporary Director/Planner
- **Firing:** 143
- **Run time:** 2026-08-20T12:38:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should a Director reconcile a new bounded authorization hold and stale-provenance warning without treating it as a terminal Reviewer decision or authorizing new Generator work?

## Repository observation

The published Director playbook and `references/publication-control.md` were read before the firing decision. The schedule is active at 420-second intervals with `runAsNewTask: false`. Local `HEAD` was one commit behind `origin/main`; remote commit `ed6c80684a782432aefb9ff88b1d1be266bfc15c`, titled `Log bounded authorization hold 2026-08-20T052632Z`, appends only a queue-status hold entry. The entry notes that stale local-only v001 provenance has already been consumed by v002. This is a provenance hygiene warning and operational hold, not a terminal Reviewer outcome.

V002 remains the sole active contract:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`
- **State:** `video-ready-for-review`, open and non-terminal

No independent terminal Reviewer callback, owner acknowledgement, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

## Primary-source research findings

NIST’s AI Risk Management Framework emphasizes accountability, transparency, documentation, provenance, and ongoing monitoring. A stale or consumed provenance reference must be preserved as an auditable warning and must not be silently reused or rewritten; equally, it cannot be promoted into a quality verdict. Sources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), and [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/).

Google SRE guidance recommends actionable, novel, low-noise human alerts and warns that repeated alerts can obscure genuine incidents. The Director should reconcile this remote record and publish one precise blocker, but must not create duplicate Generator work or repeat stale provenance. Sources: [Google SRE, Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) and [Google SRE, Being On-Call](https://sre.google/workbook/alerting-on-slos/).

AWS human-approval workflows pause until a unique callback communicates approval or rejection. The callback binds the decision to the waiting execution; a hold or provenance warning does not resume it. V002 therefore remains closed until a unique, provenance-bound independent Reviewer terminal callback exists. Sources: [AWS Step Functions human approval tutorial](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html) and [AWS manual approval pattern](https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/).

## Decision

Fast-forward the remote queue-only record, then publish exactly one blocker distinguishing the bounded hold and stale-provenance warning from a terminal decision. Require the named human owner, bounded deadline, escalation target, and unique independent Reviewer callback. Preserve immutable evidence, exact V002 provenance, and the single-flight lane.

Do not create a new angle brief, duplicate plan, MP4, approval, rejection, or remake. Do not reuse stale v001 provenance. Later same-category holds should be consolidated unless materially new owner, Reviewer, remote, or publication-failure state appears.

## Terminal boundary

The lane clears only on explicit independent Reviewer approval, explicit independent Reviewer rejection, explicit `REMAKE_REQUIRED`, or another explicit published terminal resolution allowed by the contract. Queue holds, stale-provenance warnings, reminders, silence, timeout without a Reviewer decision, and acknowledgement without a quality verdict remain non-terminal.

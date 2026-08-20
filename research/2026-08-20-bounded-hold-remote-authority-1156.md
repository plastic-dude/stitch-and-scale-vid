# Director Research — Bounded Hold and Remote Authority

- **Research ID:** `RESEARCH-20260820-bounded-hold-remote-authority-1156`
- **Run role:** Temporary Director/Planner
- **Firing:** 137
- **Run time:** 2026-08-20T11:56:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should a recurring Director reconcile another bounded review hold while preserving remote authority, immutable evidence, and the distinction between a non-terminal hold and an explicit Reviewer decision?

## Repository observation

The published Director playbook and `references/publication-control.md` were read before the firing decision. The schedule is active at 420-second intervals with `runAsNewTask: false`. Local `HEAD` was one commit behind `origin/main`; remote commit `7ff383416fcfbb110e6beefa3787c90d0b83a0e2`, titled `Log bounded review authorization hold`, appends only a queue-status hold entry. No independent terminal Reviewer callback, owner acknowledgement, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

V002 remains the sole active contract:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`
- **State:** `video-ready-for-review`, open and non-terminal

## Primary-source research findings

NIST’s AI Risk Management Framework emphasizes accountability, transparency, documentation, provenance, and ongoing monitoring. The queue append is an auditable operational observation, but it cannot substitute for the authorized evaluation result or erase the requirement for a traceable decision. Sources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), and [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/).

Google SRE guidance recommends actionable, novel, low-noise human alerts and warns that repeated alerts can hide genuine incidents. The Director should reconcile this remote change and publish one precise blocker, but must not create a duplicate Generator contract or turn each queue line into a new quality incident. Sources: [Google SRE, Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) and [Google SRE, Being On-Call](https://sre.google/workbook/on-call/).

AWS human-approval workflows pause until a unique callback communicates approval or rejection. The callback binds the decision to the waiting execution; a repeated hold does not resume it. V002 therefore remains closed until a unique, provenance-bound independent Reviewer terminal callback exists. Sources: [AWS Step Functions human approval tutorial](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html) and [AWS manual approval pattern](https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/).

## Decision

Fast-forward the remote queue-only record, then publish exactly one blocker distinguishing it from a terminal decision. Require the named human owner, bounded deadline, escalation target, and unique independent Reviewer callback. Preserve immutable evidence, exact V002 provenance, and the single-flight lane.

Do not create a new angle brief, duplicate plan, MP4, approval, rejection, or remake. The queue append is non-terminal operational evidence. Later same-category holds should be consolidated unless materially new owner, Reviewer, remote, or publication-failure state appears.

## Terminal boundary

The lane clears only on explicit independent Reviewer approval, explicit independent Reviewer rejection, explicit `REMAKE_REQUIRED`, or another explicit published terminal resolution allowed by the contract. Queue holds, reminders, silence, timeout without a Reviewer decision, and acknowledgement without a quality verdict remain non-terminal.

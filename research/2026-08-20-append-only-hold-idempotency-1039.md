# Director Research — Append-Only Hold Idempotency

- **Research ID:** `RESEARCH-20260820-append-only-hold-idempotency-1039`
- **Run role:** Temporary Director/Planner
- **Firing:** 126
- **Run time:** 2026-08-20T10:39:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should an append-only review ledger distinguish a new queue hold record from a new decision while preserving idempotency and preventing duplicate Generator work?

## Repository observation

Before research, the published Director playbook and `references/publication-control.md` were inspected. The schedule remains active at 420-second intervals with `runAsNewTask: false`. The local branch was one commit behind `origin/main`; the incoming remote commit `2f957429e2d9a3cfe7bf68b17dde31f531642d6c` is titled `chore: record bounded review authorization hold` and appends only a queue-status hold record. No new Reviewer verdict, unique terminal callback, owner acknowledgement, `REMAKE_REQUIRED` order, or approved-for-generation brief exists.

V002 remains the sole active contract:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`
- **State:** `video-ready-for-review`, open and non-terminal

## Primary-source research findings

NIST’s AI Risk Management Framework is designed to help incorporate trustworthiness into the design, development, use, and evaluation of AI systems. For this workflow, the applicable control is preserving traceable evidence and accountable decision authority: a queue append can document an observed state but cannot substitute for the authorized evaluation event. Source: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework).

Google SRE’s monitoring guidance warns that frequent non-actionable pages cause humans to skim or ignore alerts. It recommends alerts that are actionable, urgent or imminently actionable, low-noise, and associated with a novel problem or event. Therefore, a new append-only hold line is a repository change but not a novel quality event; it should be reconciled and represented without creating a duplicate Generator contract or an unbounded stream of equivalent escalations. Source: [Google SRE, Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/).

AWS’s human-approval workflow pattern uses an explicit callback mechanism to resume a paused execution, and AWS’s manual approval example describes a unique token that later conveys approval or rejection. The applicable principle is that the callback identity and decision are authoritative; a repeated pause/hold is not. The V002 lane therefore requires one unique, provenance-bound independent Reviewer callback before it can clear. Sources: [AWS Step Functions human approval tutorial](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html) and [AWS manual approval pattern](https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/).

## Decision

Safely fast-forward to the newer remote queue record, then publish exactly one blocker that distinguishes the queue append from a terminal decision. Preserve the single-flight lane, immutable Reviewer evidence, and exact V002 identity. Require the human owner’s named responsibility, bounded deadline, and escalation target, plus the independent Reviewer’s unique terminal callback with explicit decision, timestamp, score, evidence references, and exact provenance.

Do not create a new angle brief, duplicate plan, MP4, approval, rejection, or remake. Treat the repeated queue hold as non-terminal. After this consolidated blocker, ordinary same-category holds should be suppressed until a materially new owner action, Reviewer event, remote publication state, or publication failure appears.

## Terminal boundary

The lane may clear only upon explicit independent Reviewer approval, explicit independent Reviewer rejection, explicit `REMAKE_REQUIRED`, or another explicit published terminal resolution permitted by the contract. Queue appends, authorization holds, reminders, silence, timeouts without terminal Reviewer decisions, and acknowledgements without a quality verdict remain non-terminal.

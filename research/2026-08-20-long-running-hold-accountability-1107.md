# Director Research — Long-Running Hold Accountability

- **Research ID:** `RESEARCH-20260820-long-running-hold-accountability-1107`
- **Run role:** Temporary Director/Planner
- **Firing:** 130
- **Run time:** 2026-08-20T11:07:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should a recurring Director preserve a long-running non-terminal review hold while maintaining accountability, low-noise escalation, and an explicit callback authority boundary?

## Repository observation

The published Director playbook and `references/publication-control.md` were read before the firing decision. The schedule is active at 420-second intervals with `runAsNewTask: false`. Local `HEAD` equals `origin/main` at `ee5ff9369b247c0783e1f6123c7d51f4fa6f38bd`. No newer remote commit exists after firing 129. V002 remains open and non-terminal under the Generator-to-Reviewer handoff.

Active provenance remains:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`
- **State:** `video-ready-for-review`, open and non-terminal

No independent terminal Reviewer decision, unique terminal callback, owner acknowledgement, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

## Primary-source research findings

NIST’s AI Risk Management Framework emphasizes trustworthy AI risk management across design, development, use, and evaluation, with accountability, transparency, documentation, and ongoing monitoring as relevant controls. For this lane, a long-running hold should preserve an accountable owner request and auditable evidence, but the Director must not fabricate a decision from elapsed time. Sources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) and [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf).

Google SRE recommends alerts that are actionable, urgent or imminently actionable, and low-noise. It warns that repeated pages can mask real incidents and recommends improving noisy alert streams toward a one-to-one relationship between an incident and its alert. Applied here, repeated holds should be consolidated into an accountable dependency record rather than creating a new Generator contract or repeating identical escalation language. Sources: [Google SRE, Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) and [Google SRE, Being On-Call](https://sre.google/sre-book/being-on-call/).

AWS human-approval workflows keep execution paused until an explicit callback communicates approval or rejection. A unique callback token binds the response to the waiting execution. For V002, this supports requiring one unique, provenance-bound independent Reviewer callback before the lane can clear; duration, silence, or repeated operational holds do not substitute for the callback. Sources: [AWS Step Functions human approval tutorial](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html) and [AWS manual approval pattern](https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/).

## Decision

Publish exactly one accountable hold blocker for firing 130. It must request a named owner, bounded deadline, and escalation target, explicitly distinguish acknowledgement from a quality verdict, and require the unique terminal Reviewer callback. Preserve the single-flight lane and immutable evidence. Do not create a new angle brief, duplicate plan, MP4, approval, rejection, or remake.

If later firings remain unchanged, the existing anti-duplication rule remains active. Another blocker should be published only when materially new owner, Reviewer, remote, or publication-failure state appears; elapsed time alone may justify an escalation reminder but cannot authorize Generator work or create a terminal verdict.

## Terminal boundary

Only explicit independent Reviewer approval, explicit independent Reviewer rejection, explicit `REMAKE_REQUIRED`, or another explicit published terminal resolution allowed by the contract can clear the lane. Holds, reminders, silence, timeout without a Reviewer decision, and acknowledgement without a quality verdict remain non-terminal.

# Director Research — Durable Evidence-Bound Hold

- **Research ID:** `RESEARCH-20260820-durable-hold-evidence-bound-1114`
- **Run role:** Temporary Director/Planner
- **Firing:** 131
- **Run time:** 2026-08-20T11:14:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should a recurring Director maintain a durable, evidence-bound review hold when no terminal callback exists, without treating unchanged state as a decision or creating duplicate work?

## Repository observation

The published Director playbook and `references/publication-control.md` were read before the firing decision. The schedule remains active at 420-second intervals with `runAsNewTask: false`. Local `HEAD` equals `origin/main` at `eed47d2dc2783d17e7b29db924a8cbcf9bb1e7a1`. No newer remote commit exists after firing 130. V002 remains open and non-terminal under the original Generator-to-Reviewer handoff.

Active provenance remains:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`
- **State:** `video-ready-for-review`, open and non-terminal

No independent terminal Reviewer decision, unique terminal callback, owner acknowledgement, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

## Primary-source research findings

NIST’s AI Risk Management Framework states that documentation supports transparency, human review, accountability, and ongoing monitoring of AI risk-management processes. Applied to this lane, the Director should maintain a durable record of what is known, what is missing, who must act, and which evidence binds the hold, without inventing a quality result. Sources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) and [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf).

Google SRE guidance emphasizes actionable, low-noise alerts and warns that frequent or duplicate alerts cause humans to skim or ignore alerts. A repeated unchanged review hold should therefore be represented as one durable dependency state with a clear action, not as a sequence of speculative Generator contracts or duplicate incident narratives. Sources: [Google SRE, Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) and [Google SRE, Being On-Call](https://sre.google/sre-book/being-on-call/).

AWS’s human-approval patterns keep a workflow paused until a unique callback communicates approval or rejection. The callback’s identity binds the decision to the waiting execution. For V002, the equivalent control is a unique, provenance-bound independent Reviewer callback; a no-change state, silence, or operational hold cannot clear the lane. Sources: [AWS Step Functions human approval tutorial](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html) and [AWS manual approval pattern](https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/).

## Decision

Publish exactly one durable hold blocker for firing 131. It should preserve the known evidence, identify the missing owner and Reviewer actions, explicitly state that acknowledgement is not a quality verdict, and keep the single-flight lane closed. Do not create a new angle brief, duplicate plan, MP4, approval, rejection, or remake.

If subsequent firings are unchanged, the anti-duplication rule remains active. Another blocker should be created only for materially new remote, owner, Reviewer, or publication-failure state. A durable hold is not a terminal result and does not authorize the Generator.

## Terminal boundary

Only explicit independent Reviewer approval, explicit independent Reviewer rejection, explicit `REMAKE_REQUIRED`, or another explicit published terminal resolution allowed by the contract can clear the lane. Holds, silence, reminders, timeout without a Reviewer decision, and acknowledgement without a quality verdict remain non-terminal.

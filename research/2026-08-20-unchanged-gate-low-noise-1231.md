# Director Research — Unchanged Gate and Low-Noise Escalation

- **Research ID:** `RESEARCH-20260820-unchanged-gate-low-noise-1231`
- **Run role:** Temporary Director/Planner
- **Firing:** 142
- **Run time:** 2026-08-20T12:31:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

How should a Director preserve an unchanged review gate after repeated holds while maintaining explicit human oversight, immutable provenance, and low-noise escalation?

## Repository observation

The published Director playbook and `references/publication-control.md` were read before the firing decision. The schedule remains active at 420-second intervals with `runAsNewTask: false`. Local `HEAD` equals `origin/main` at `2e58d6346e2c6d9cbd892af615ca185e801d7e96`. No newer remote commit exists after firing 141. V002 remains open and non-terminal under the original Generator-to-Reviewer handoff.

Active provenance remains:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`
- **State:** `video-ready-for-review`, open and non-terminal

No independent terminal Reviewer callback, owner acknowledgement, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

## Primary-source research findings

NIST’s AI Risk Management Framework emphasizes accountable roles, transparency, documentation, provenance, and ongoing monitoring. The correct response to an unchanged gate is to preserve an auditable record of the known state and missing authority, not infer a quality result from elapsed time or repeated holds. Sources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework), [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), and [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/).

Google SRE guidance recommends actionable, novel, low-noise human alerts and warns that repeated alerts can mask genuine incidents. With no new remote, owner, Reviewer, or publication state, the Director should publish one concise state-preservation blocker and retain the anti-duplication rule rather than create duplicate campaign work. Sources: [Google SRE, Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/) and [Google SRE, Being On-Call](https://sre.google/workbook/alerting-on-slos/).

AWS human-approval workflows remain paused until a unique callback communicates approval or rejection. The callback binds the decision to the waiting execution; a hold, silence, or elapsed time is not a callback. V002 therefore remains closed until a unique, provenance-bound independent Reviewer terminal callback exists. Sources: [AWS Step Functions human approval tutorial](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html) and [AWS manual approval pattern](https://aws.amazon.com/blogs/compute/implementing-serverless-manual-approval-steps-in-aws-step-functions-and-amazon-api-gateway/).

## Decision

Publish exactly one concise state-preservation blocker for firing 142. It must record the unchanged remote state, require the named owner fields and unique Reviewer callback, and preserve the single-flight and immutable-evidence constraints. Do not create a new angle brief, duplicate plan, MP4, approval, rejection, or remake.

If later firings remain unchanged, ordinary same-category blockers should be suppressed until materially new owner, Reviewer, remote, or publication-failure state appears. The lane remains fail-closed, not silently approved.

## Terminal boundary

The lane clears only on explicit independent Reviewer approval, explicit independent Reviewer rejection, explicit `REMAKE_REQUIRED`, or another explicit published terminal resolution allowed by the contract. Holds, silence, reminders, timeout without a Reviewer decision, and acknowledgement without a quality verdict remain non-terminal.

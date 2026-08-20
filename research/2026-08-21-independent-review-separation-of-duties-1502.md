# Director Research — Independent Review and Separation of Duties

- **Research ID:** `RESEARCH-20260821-independent-review-separation-of-duties-1502`
- **Run role:** Temporary Director/Planner
- **Firing:** 204
- **Run time:** 2026-08-21T15:02:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

What minimum separation-of-duties and evidence requirements prevent the Director or Generator from implicitly authorizing its own video while a Reviewer callback is still missing?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; there is no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST’s AI RMF is designed to incorporate trustworthiness throughout design, development, use, and evaluation. The NIST framework and its supporting material identify documented roles, accountability, transparency, measurement, and independent review as important controls for trustworthy AI systems. Applied here, the Director may coordinate and publish an operational blocker, but cannot substitute for the independent Reviewer’s quality decision; the Generator cannot convert its own output into approval. Sources: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) and [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf).

AWS Step Functions documents that a callback workflow pauses until the correct task token is returned, and only a valid success or failure callback allows the workflow to continue. The callback is bound to the waiting task, not merely to the existence of a related message. Applied here, an independent Reviewer event must uniquely identify the waiting V002 contract and include the required decision evidence. A queue hold, acknowledgement, Generator handoff, or Director observation is not an equivalent callback and cannot clear the gate. Sources: [AWS Step Functions — Integrating with Resources](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html) and [AWS Step Functions Best Practices](https://docs.aws.amazon.com/step-functions/latest/dg/sfn-best-practices.html).

The same AWS guidance recommends explicit timeout and heartbeat controls so waiting tasks do not remain indefinitely stuck. Therefore, the owner escalation must have a responsible party, bounded deadline, and escalation target. A timeout without a terminal Reviewer decision should escalate the same incident, not authorize production or silently reset the contract.

## Decision

Publish exactly one blocker preserving strict separation of duties. Keep the single-flight lane closed. Require one independent Reviewer terminal callback with unique event ID, exact V002 video ID, Drive file ID, SHA-256, timestamp, explicit decision, complete seven-dimension score, and immutable evidence references. Require the owner to provide a responsible owner, bounded deadline, and escalation target.

Do not create a new angle brief, MP4, approval, rejection, or remake. Do not treat Director or Generator activity as quality authorization. Preserve all evidence append-only; conflicting or duplicate callbacks require escalation rather than overwrite.

## Terminal boundary

Only an explicit independent Reviewer approval, rejection, `REMAKE_REQUIRED` order, or other contract-permitted terminal resolution uniquely bound to V002 and supported by complete evidence can clear the lane.

## References

[1]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"
[2]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf "NIST AI RMF 1.0"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html "AWS Step Functions — Integrating with Resources"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/sfn-best-practices.html "AWS Step Functions Best Practices"

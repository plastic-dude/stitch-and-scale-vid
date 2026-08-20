# Director Research — Evidence-Sufficient Reviewer Callbacks

- **Research ID:** `RESEARCH-20260821-reviewer-evidence-sufficiency-1616`
- **Run role:** Temporary Director/Planner
- **Firing:** 209
- **Run time:** 2026-08-21T16:16:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

What minimum evidence makes a Reviewer callback sufficiently complete and independently attributable to clear the V002 review gate, and how should incomplete or ambiguous packets be handled?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST AI RMF describes continuous governance, documented roles, independent review, repeatable measurement, documented methods and metrics, and traceable outcomes. This supports an evidence-sufficiency rule: a Reviewer packet must identify the independent reviewer role, the exact artifact, the evaluation method, the complete score, the decision threshold, and evidence that another actor can inspect. Source: [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/).

AWS callback patterns use a unique task token or business-specific identifier to associate an external callback with the correct waiting workflow. Required request fields and explicit success/failure callbacks prevent an unrelated or malformed callback from advancing the workflow. Applied here, V002 cannot advance on a packet that omits unique event identity, exact artifact provenance, or explicit decision fields. Sources: [AWS Step Functions — Callback Tasks](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html) and [AWS Compute Blog — Integrating Step Functions Callbacks and External Systems](https://aws.amazon.com/blogs/compute/integrating-aws-step-functions-callbacks-and-external-systems/).

AWS error handling also distinguishes explicit success callbacks from timeout and failure paths. Therefore, an incomplete, ambiguous, mismatched, stale, or otherwise invalid Reviewer packet must remain non-terminal and route to escalation or correction; it must not be interpreted as approval, rejection, or `REMAKE_REQUIRED`. Source: [AWS Step Functions — Error Handling](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html).

## Decision

Publish exactly one blocker requiring one immutable, independently authored Reviewer packet containing:

1. A unique event ID and timestamp.
2. The exact V002 video ID, Drive file ID, and SHA-256.
3. An explicit reviewer role demonstrating independence.
4. Seven dimension scores using the project’s weighted quality system.
5. The total score, threshold comparison, and explicit terminal decision.
6. Immutable evidence references sufficient for independent inspection.
7. Any ordered correction if and only if the decision is `REMAKE_REQUIRED`.

Incomplete, ambiguous, duplicate, stale, mismatched, or callback-without-evidence packets remain non-terminal, are preserved append-only, and are escalated. Keep the single-flight lane closed. Do not create a new angle brief, MP4, approval, rejection, or remake.

## Terminal boundary

Only a complete, unique, exact-provenance, independent Reviewer approval, rejection, `REMAKE_REQUIRED` order, or other contract-permitted terminal resolution may clear the lane.

## References

[1]: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ "NIST AI RMF Core"
[2]: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html "AWS Step Functions — Callback Tasks"
[3]: https://aws.amazon.com/blogs/compute/integrating-aws-step-functions-callbacks-and-external-systems/ "AWS Compute Blog — Integrating Callbacks"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html "AWS Step Functions — Error Handling"

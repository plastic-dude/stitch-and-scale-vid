# Director Research — Fail-Safe and Fail-Secure Review Circuit

- **Research ID:** `RESEARCH-20260820-fail-safe-fail-secure-review-circuit-1613`
- **Run role:** Temporary Director/Planner
- **Firing:** 236
- **Run time:** 2026-08-20T16:13:52+00:00
- **Status:** Research-backed operational decision

## Fresh research question

How should a distributed multi-agent review lane behave when its Reviewer, artifact store, identity provider, callback path, ledger, or publication dependency fails, so that the system preserves safety and evidence without turning recovery into unauthorized campaign progression?

## Current state observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. V002’s authoritative manifest and review lane were inspected. The queue still contains `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`, with no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. The single-flight lane remains closed.

Active provenance remains:

| Field | Value |
|---|---|
| Video ID | `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800` |
| Drive file ID | `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC` |
| SHA-256 | `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5` |
| Status | `video-ready-for-review` |

## Research findings

NIST distinguishes fail-safe behavior, which prevents damage to specified resources when a failure occurs, from fail-secure behavior, which preserves secure state when a failure occurs.[1] [2] NIST’s Zero Trust Architecture rejects implicit trust based on network location or ownership and separates authentication from authorization before resource access.[3] AWS’s circuit-breaker pattern opens the circuit after repeated failures, returns an immediate failure rather than continuing calls, and requires an explicit recovery check before closing the circuit; it also emphasizes bounded retries and observability.[4]

For this review lane, the controls are complementary rather than interchangeable. The authorization path must fail-secure: missing, stale, ambiguous, or unverifiable identity and evidence must not become approval, rejection, remake authorization, or a new Director brief. The operational and evidence path must fail-safe: preserve the exact V002 object, retain all immutable records, emit a typed blocked state, prevent destructive or duplicate retries, and provide a bounded recovery procedure. A timeout expiry or restored service connection is not a terminal decision.

## Decision

Publish exactly one blocker requiring a dual fail-secure/fail-safe review circuit. Authorization dependencies must use deny-by-default behavior and typed failure states. Repeated failures must trip an explicit review circuit that stops downstream generation and returns an immediate non-terminal result. Retries must be bounded, idempotent, and observable; they must not create duplicate Reviewer events or new generation contracts. Recovery must use a bounded health or identity probe followed by explicit revalidation of the exact artifact, active review contract, Reviewer authority, and immutable evidence chain. Only that revalidation event may reopen evaluation; it may not itself clear the lane.

Evidence-preserving behavior must include retention of the original failure, timestamps, actor identity, dependency state, retry count, circuit state, and recovery-probe result. Any uncertainty about the Reviewer, Drive object, callback, ledger, or publication state remains non-terminal. Do not automatically transition from `blocked` to `approved`, `rejected`, or `REMAKE_REQUIRED` merely because the dependency returns. Do not create a new brief or MP4 while V002 is open.

## Terminal boundary

Only a complete independent Reviewer decision or contract-authorized owner resolution that is identity-bound, evidence-complete, fail-securely authorized, and explicitly revalidated after dependency recovery may clear V002. The lane remains closed until such a terminal event is published.

## References

[1]: https://csrc.nist.gov/glossary/term/fail_safe "NIST CSRC Fail-Safe Glossary"
[2]: https://csrc.nist.gov/glossary/term/fail_secure "NIST CSRC Fail-Secure Glossary"
[3]: https://www.nist.gov/publications/zero-trust-architecture "NIST Zero Trust Architecture"
[4]: https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/circuit-breaker.html "AWS Prescriptive Guidance: Circuit Breaker Pattern"

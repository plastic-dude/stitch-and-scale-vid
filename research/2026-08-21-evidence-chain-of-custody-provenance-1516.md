# Director Research — Evidence Chain of Custody and Provenance

- **Research ID:** `RESEARCH-20260821-evidence-chain-of-custody-provenance-1516`
- **Run role:** Temporary Director/Planner
- **Firing:** 205
- **Run time:** 2026-08-21T15:16:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

What evidence-chain controls are necessary to prove that a Reviewer decision applies to the exact V002 asset, rather than to a different upload, version, or stale handoff?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST defines chain of custody as tracking evidence through collection, safeguarding, and analysis by recording who handled it, when it was collected or transferred, and the purpose of each transfer. NIST’s digital-forensics guidance places this within audit and accountability, configuration management, media protection, and system and information integrity. Applied to V002, a terminal review record must preserve exact artifact identifiers, the immutable checksum, the reviewer identity or role, timestamp, evidence references, and the transition being authorized. Source: [NIST Chain of Custody](https://csrc.nist.gov/glossary/term/chain_of_custody) and [NIST SP 800-86](https://csrc.nist.gov/pubs/sp/800/86/final).

AWS Step Functions documents that a callback workflow waits for a task token and continues only when that token is returned with a success or failure payload. It also documents heartbeat timeouts for waiting tasks. Applied here, a Reviewer message is not terminal merely because it mentions V002 or appears after the handoff; it must bind to the exact active contract and contain the required decision evidence. A stale or mismatched callback must be retained as evidence and escalated, not used to change state. Source: [AWS Step Functions — Integrating with Resources](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html).

NIST’s AI RMF frames trustworthiness as a lifecycle concern spanning design, development, use, and evaluation. That reinforces a complete evidence chain from Generator handoff through Reviewer decision and Director publication. A hash-only match is necessary but not sufficient; the record also needs role, event identity, time, decision, score, and evidence references so the authorization is attributable and reconstructable. Source: [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework).

## Decision

Publish exactly one blocker requiring the independent Reviewer to submit a unique terminal record containing exact V002 video ID, Drive file ID, SHA-256, reviewer role, unique event ID, timestamp, explicit outcome, full seven-dimension score, and immutable evidence references. Require owner assignment, deadline, and escalation target. Keep the single-flight lane closed.

Do not create a new angle brief, MP4, approval, rejection, or remake. Treat queue holds, stale callbacks, callbacks missing any provenance field, reminders, acknowledgements without a verdict, silence, and elapsed time as non-terminal. Preserve mismatched or conflicting records append-only and escalate them without overwriting evidence.

## Terminal boundary

Only an explicit independent Reviewer approval, rejection, `REMAKE_REQUIRED` order, or other contract-permitted terminal resolution with complete chain-of-custody fields and exact V002 provenance may clear the lane.

## References

[1]: https://csrc.nist.gov/glossary/term/chain_of_custody "NIST Chain of Custody"
[2]: https://csrc.nist.gov/pubs/sp/800/86/final "NIST SP 800-86"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html "AWS Step Functions — Integrating with Resources"
[4]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"

# Director Research — Review-Gate State Invariants and Explicit Failure Handling

- **Research ID:** `RESEARCH-20260821-review-gate-state-invariants-1600`
- **Run role:** Temporary Director/Planner
- **Firing:** 208
- **Run time:** 2026-08-21T16:00:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

Which state invariants must remain true when the Director, Generator, Reviewer, and owner operate concurrently, so that a timeout or error cannot be mistaken for a valid V002 quality transition?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST AI RMF Core describes continuous lifecycle governance, clear roles and responsibilities, documented human oversight, independent review, repeatable measurement, and safe failure. These controls imply that V002 must have explicit state invariants: only the independent Reviewer can authorize a quality transition; exact provenance must remain bound; evidence and decisions must be documented; and missing or failed evaluation must not be treated as approval. Source: [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/).

AWS Step Functions documents explicit retry and catch transitions for errors, including `States.Timeout` and `States.HeartbeatTimeout`. It separately documents callback tasks that continue only when the correct task token is returned with success or failure. These patterns support a strict distinction between a terminal Reviewer callback and a timeout, retry, queue hold, reminder, or acknowledgement. A timeout must route to escalation or remain failed/blocked; it cannot create an implicit success path. Sources: [AWS Step Functions — Error Handling](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html) and [AWS Step Functions — Callback Tasks](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html).

Google SRE’s Incident Management Guide emphasizes actionable alerts, clear roles, up-to-date playbooks, explicit communication, and documented response. The Incident Commander, Communications Lead, and Operations Lead are distinct coordination roles. Applied here, the Director may coordinate and document the blocked state, but cannot perform the Reviewer’s independent quality function. Repeated queue-only holds should be grouped under one actionable blocker and should not create parallel campaigns. Source: [Google SRE Incident Management Guide](https://sre.google/resources/practices-and-processes/incident-management-guide/).

## Decision

Publish exactly one blocker that states the required invariants and error boundary. Require one unique independent Reviewer callback with exact V002 video ID, Drive file ID, SHA-256, timestamp, explicit decision, complete seven-dimension score, and immutable evidence references. Require owner, deadline, and escalation target. Treat timeout, retry, queue hold, silence, reminder, acknowledgement without a quality verdict, and mismatched callbacks as non-terminal.

Keep the single-flight lane closed. Do not create a new angle brief, MP4, approval, rejection, or remake. If a publication error occurs, stop new angles and escalate with the error plus both commit IDs.

## State invariants

1. `video-ready-for-review` remains fail-closed until an authorized terminal Reviewer event exists.
2. Only an independent Reviewer can create the quality transition.
3. The terminal event must bind exact V002 provenance and immutable evidence.
4. A timeout or error routes to escalation or blocked handling, never implicit approval.
5. Repeated observations are append-only evidence and do not create parallel Generator work.
6. Remote publication must be reconciled and verified before Generator-relevant state is considered visible.

## Terminal boundary

Only explicit independent Reviewer approval, rejection, `REMAKE_REQUIRED`, or another contract-permitted terminal resolution with complete exact-provenance evidence can clear the lane.

## References

[1]: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ "NIST AI RMF Core"
[2]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html "AWS Step Functions — Error Handling"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html "AWS Step Functions — Callback Tasks"
[4]: https://sre.google/resources/practices-and-processes/incident-management-guide/ "Google SRE Incident Management Guide"

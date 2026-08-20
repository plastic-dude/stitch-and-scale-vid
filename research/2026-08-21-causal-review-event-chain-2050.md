# Director Research — Causal Review Event Chain

- **Research ID:** `RESEARCH-20260821-causal-review-event-chain-2050`
- **Run role:** Temporary Director/Planner
- **Firing:** 226
- **Run time:** 2026-08-21T20:50:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

What minimum causal and identity fields prevent orphaned, duplicated, or mismatched review records from being mistaken for valid state transitions or terminal authority?

## Current repository observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. Remote parity was checked. The V002 manifest, Generator handoff, terminal-signal search, and queue tail were inspected from the authoritative remote state. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST AI RMF supports transparent governance, defined roles, independent review, repeatable measurement, and documented evidence. AWS execution history models events with unique sequential IDs, timestamps, explicit event types, previous-event links, and input/output or failure details; history retrieval preserves ordered causal records. Google SRE recommends a living incident state, retained communication records, explicit handoff acknowledgement, and separation of responsibilities. Sources: [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/), [AWS HistoryEvent](https://docs.aws.amazon.com/step-functions/latest/apireference/API_HistoryEvent.html), [AWS GetExecutionHistory](https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetExecutionHistory.html), and [Google SRE Managing Incidents](https://sre.google/sre-book/managing-incidents/).

## Decision

Publish exactly one blocker requiring causal event chaining for the canonical V002 review incident. Every event must have a unique event ID, timestamp, explicit event type, actor identity and role, prior event ID or explicit root marker, exact video ID, Drive file ID, SHA-256, current state, state-change summary, owner/checkpoint/escalation deltas, terminal-decision field, and immutable evidence references. A child event whose prior event is missing, whose exact provenance does not match, whose actor is unauthorized, or whose event ID is duplicated is an invalid authority attempt and remains append-only evidence; it must not alter current state.

A valid continuation must point to the prior canonical event and state what changed. A no-change observation may be linked and retained but cannot renew a lease, change ownership, create a quorum, reset a terminal boundary, or clear the single-flight lane. Only a complete exact-provenance independent Reviewer terminal packet or explicit contract-authorized terminal resolution can clear V002. Do not create a new brief or MP4.

## Terminal boundary

No causal chain, message count, timestamp, or repeated callback creates quality authority. The lane clears only on a complete authorized terminal event with a valid causal position and complete immutable evidence.

## References

[1]: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ "NIST AI RMF Core"
[2]: https://docs.aws.amazon.com/step-functions/latest/apireference/API_HistoryEvent.html "AWS Step Functions HistoryEvent"
[3]: https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetExecutionHistory.html "AWS Step Functions GetExecutionHistory"
[4]: https://sre.google/sre-book/managing-incidents/ "Google SRE Managing Incidents"

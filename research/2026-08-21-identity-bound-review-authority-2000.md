# Director Research — Identity-Bound Review Authority

- **Research ID:** `RESEARCH-20260821-identity-bound-review-authority-2000`
- **Run role:** Temporary Director/Planner
- **Firing:** 223
- **Run time:** 2026-08-21T20:00:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

When several agents emit progress, acknowledgement, or duplicate review-like records, what prevents those low-authority signals from being aggregated into a false terminal consensus?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST AI RMF defines differentiated human-AI roles, documented accountability structures, ongoing monitoring, repeatable measurement, independent assessors, and transparent evaluation. Independent review is valuable precisely because it mitigates internal bias and conflicts of interest. Source: [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/).

AWS callback workflows bind completion to a task token associated with the waiting task and require a valid callback from an eligible principal. The token is not a vote; it is an identity and task-binding mechanism. A heartbeat is not completion. Sources: [AWS Service Integration Patterns](https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html) and [AWS Callback Task Sample](https://docs.aws.amazon.com/step-functions/latest/dg/callback-task-sample-sqs.html).

Google SRE emphasizes separation of responsibilities, a recognized command post, a live incident state document, and explicit handoff acknowledgement. Participants should not freelance into another role’s authority. Source: [Google SRE Managing Incidents](https://sre.google/sre-book/managing-incidents/).

## Decision

Publish exactly one blocker requiring identity-bound terminal authority. A valid terminal decision must be authored by one authorized independent Video Reviewer or contract-authorized adjudicator, contain unique event identity, exact V002 provenance, complete seven-dimension evidence, threshold comparison, explicit outcome, and immutable evidence. Multiple Director blockers, Generator holds, owner acknowledgements, queue records, heartbeats, duplicate packets, or other non-authorized signals cannot be counted, averaged, majority-voted, or otherwise aggregated into terminal authority.

If two authorized independent Reviewer packets conflict, preserve both append-only and require the contract-defined adjudication path. If a packet is authored by an unauthorized role, it remains evidence of an invalid attempt, not a terminal decision. Keep the single-flight lane closed. Do not create a new brief or MP4.

## Terminal boundary

Only a complete exact-provenance independent Reviewer terminal packet or explicit contract-authorized adjudication may clear the lane. Authority is identity-bound, not count-bound.

## References

[1]: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ "NIST AI RMF Core"
[2]: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html "AWS Step Functions — Service Integration Patterns"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/callback-task-sample-sqs.html "AWS Step Functions — Callback Task Sample"
[4]: https://sre.google/sre-book/managing-incidents/ "Google SRE — Managing Incidents"

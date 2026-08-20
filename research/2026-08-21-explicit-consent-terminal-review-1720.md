# Director Research — Explicit Consent for Terminal Review

- **Research ID:** `RESEARCH-20260821-explicit-consent-terminal-review-1720`
- **Run role:** Temporary Director/Planner
- **Firing:** 213
- **Run time:** 2026-08-21T17:20:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

What distinguishes an explicit, identity-bound terminal Reviewer action from silence, reminders, acknowledgements, or other signals that must remain non-terminal?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST AI RMF governance material calls for clearly documented roles, differentiated human-AI oversight, transparent policies, lines of communication, and human adjudication for incident response and appeal/override. It also notes that documentation improves transparency and accountability. Applied here, terminal quality authority must be attached to the independent Reviewer identity and a documented decision; no other agent may infer that authority from an informal message or an absent response. Sources: [NIST AI RMF Govern Playbook](https://airc.nist.gov/airmf-resources/playbook/govern/) and [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/).

AWS’s human-approval workflow pauses at a callback task and progresses only when a user selects an explicit Approve or Reject action. The approval action is tied to execution context and task token, while the waiting state itself does not complete the task. Applied here, a Reviewer packet must be an explicit action bound to V002’s exact provenance and unique event identity. Silence, elapsed time, reminder, queue hold, or acknowledgement is not approval, rejection, or `REMAKE_REQUIRED`. Source: [AWS Step Functions Human Approval Tutorial](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html).

## Decision

Publish exactly one blocker requiring an explicit, identity-bound terminal Reviewer action. The packet must include unique event ID, timestamp, exact V002 video ID, Drive file ID, SHA-256, independent reviewer role, complete seven-dimension score, weighted total, threshold comparison, explicit terminal outcome, and immutable evidence references. The owner may assign responsibility and escalation, but owner acknowledgement alone cannot substitute for the Reviewer’s quality decision.

Keep the single-flight lane closed. Treat silence, elapsed time, reminders, queue-only commits, routine acknowledgements, and liveness records as non-terminal. Do not create a new angle brief, MP4, approval, rejection, or remake.

## Terminal boundary

Only a complete explicit Reviewer action or contract-authorized terminal resolution may clear the lane. Lack of objection is not consent.

## References

[1]: https://airc.nist.gov/airmf-resources/playbook/govern/ "NIST AI RMF Govern Playbook"
[2]: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ "NIST AI RMF Core"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions Human Approval Tutorial"

# Director Research — Role-Scoped Review Authority

- **Research ID:** `RESEARCH-20260821-role-scoped-review-authority-1704`
- **Run role:** Temporary Director/Planner
- **Firing:** 212
- **Run time:** 2026-08-21T17:04:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

Which role-scoped authorization boundaries prevent the Director, Generator, Reviewer, and owner from accidentally or implicitly performing one another’s terminal duties?

## Current repository observation

The published Director playbook and `references/publication-control.md` were inspected from the authoritative repository state. `origin/main` was fetched and checked. The queue still contains repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST AI RMF calls for clear roles, responsibilities, lines of communication, differentiated human-AI oversight, ongoing monitoring, and independent review. NIST AC-5 requires organizations to identify and document duties and define access authorizations that support separation of duties. Applied to this workflow, the Director may coordinate, research, and publish one brief or blocker; the Generator may act only on an eligible contract; the Reviewer may publish a quality decision; and the owner may assign responsibility and escalation. Source: [NIST AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) and [NIST AC-5 Separation of Duties](https://csf.tools/reference/nist-sp-800-53/r5/ac/ac-5/).

AWS IAM recommends least-privilege permissions: grant only the actions required for a task, review unused permissions, use conditions and boundaries, and prefer temporary credentials. Applied here, repository write access must not be treated as universal workflow authority. A role’s ability to write a file does not grant permission to approve a video, create a remake, or open a new campaign. Source: [AWS IAM Security Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html).

## Decision

Publish exactly one blocker requiring role-scoped authorization. The independent Reviewer is the only quality decision-maker. The Director must not self-approve, self-reject, or issue a remake order without the contract-authorized event. The Generator must not treat queue holds, Director continuity messages, acknowledgements, or stale artifacts as an eligible production contract. The owner must identify responsible owner, deadline, and escalation target, but owner acknowledgment alone is not a quality verdict.

Keep the single-flight lane closed. Do not create a new angle brief, MP4, approval, rejection, or remake. Preserve evidence append-only and escalate any attempted or ambiguous cross-role terminal action.

## Terminal boundary

Only a complete independent Reviewer decision or contract-authorized terminal resolution may clear the lane; write capability does not equal decision authority.

## References

[1]: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ "NIST AI RMF Core"
[2]: https://csf.tools/reference/nist-sp-800-53/r5/ac/ac-5/ "NIST AC-5 Separation of Duties"
[3]: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html "AWS IAM Security Best Practices"

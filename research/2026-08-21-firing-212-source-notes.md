# Firing 212 Source Notes

## NIST AI RMF governance and role separation

Source: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/

NIST AI RMF calls for documented roles, responsibilities, lines of communication, differentiated human-AI oversight roles, ongoing monitoring, and independent review. Applied to this lane, the Director coordinates and plans, the Generator produces, the Reviewer evaluates, and the owner assigns escalation. These duties must not silently collapse into one actor authorizing its own output.

## NIST AC-5 separation of duties

Source: https://csf.tools/reference/nist-sp-800-53/r5/ac/ac-5/

AC-5 calls for identifying and documenting duties and defining system access authorizations that support separation of duties. It explains that dividing mission/support functions among different roles reduces the risk of abuse of authorized privileges and applies across systems and components. For V002, only the independent Reviewer should have quality-decision authority; the Director and Generator must not self-approve or self-remake without an explicit order.

## AWS least privilege

Source: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html

AWS recommends granting only permissions required for a task, using temporary credentials where possible, reviewing unused permissions, and applying conditions and boundaries. The operational equivalent is role-scoped state authority: Director can publish a brief/blocker and receipt; Generator can act only on an eligible contract; Reviewer can publish a quality decision; owner can assign escalation. A role must not use a broader implied privilege merely because it can write to the repository.

## Firing-212 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require explicit role-scoped authorization and separation of duties. Queue holds, acknowledgements, Director messages, and Generator continuity records do not authorize a terminal quality transition. No new brief or MP4 is authorized.

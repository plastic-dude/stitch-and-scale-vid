# Firing 214 Source Notes

## NIST independent evaluation and repeatable measurement

Sources: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ and https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf

NIST AI RMF states that measurement should use objective, repeatable, documented methods and metrics, and that independent assessors can improve testing effectiveness and reduce bias or conflicts of interest. A second signal is not automatically corroboration: it must be independently authored, methodologically complete, bound to the same artifact, and independently inspectable.

## AWS callback identity and duplicate protection

Sources: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html and https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html

AWS callback tasks remain paused until the original task token returns with an explicit success or failure payload. The callback carries execution context and a unique token. A duplicate, missing-token, or unrelated callback cannot safely advance the waiting execution. Applied here, Reviewer evidence must use a unique event ID and exact V002 provenance; duplicate or conflicting packets must be retained and escalated, not treated as quorum or last-write-wins.

## Firing-214 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require one complete terminal Reviewer packet. If corroboration is later used, each corroborating assessment must be independent, exact-provenance-bound, complete, and preserved. No new brief or MP4 is authorized.

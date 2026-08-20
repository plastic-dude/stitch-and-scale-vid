# Firing 227 Source Notes

## NIST version control and retention

Sources: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf and https://airc.nist.gov/airmf-resources/airmf/5-sec-core/

NIST AI risk-management material emphasizes documented governance, independent evaluation, retention of TEVV and digital-content history, and version control so changes can be traced and reproduced. Applied here, a Reviewer decision must identify the review-contract version, scoring-policy version, evidence standard, and artifact version used at evaluation time.

## AWS version and alias association

Sources: https://docs.aws.amazon.com/step-functions/latest/dg/execution-alias-version-associate.html and https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html

AWS Step Functions associates an execution with a qualified version or alias at execution start. An unqualified invocation is not associated with a version even if the latest revision happens to match. Applied here, a V002 review event must explicitly bind to the active V002 artifact, review-contract version, scoring-policy identity, and evidence schema; an unqualified or later policy reference cannot retroactively validate the decision.

## Google SRE change management and playbooks

Source: https://sre.google/sre-book/introduction/

Google SRE emphasizes versioned operational playbooks, progressive and controlled changes, safe rollback, durable incident records, and avoiding repetitive manual interpretation. Applied here, a scoring or authorization-policy change must be recorded as a versioned change and must not silently reinterpret an already-published Reviewer packet.

## Firing-227 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require explicit version binding for artifact, review contract, scoring weights, threshold, evidence schema, and reviewer role. If any bound policy changes before a terminal event, re-review is required. No new brief or MP4 is authorized.

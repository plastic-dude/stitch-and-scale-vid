# Firing 210 Source Notes

## NIST audit-log definition and log management

Sources: https://csrc.nist.gov/glossary/term/audit_log and https://csrc.nist.gov/pubs/sp/800/92/final

NIST defines an audit log as a chronological record of system activities and as documentary evidence of specific events. NIST SP 800-92 emphasizes sound log-management infrastructure and robust processes for developing and maintaining logs. Applied to the V002 lane, every Reviewer callback, conflict, correction, blocker, and publication receipt must remain a durable chronological record rather than being overwritten or silently discarded.

## AWS durable workflow history

Sources: https://docs.aws.amazon.com/step-functions/latest/dg/choosing-workflow-type.html and https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html

AWS identifies Standard Workflows as durable and auditable, with retrievable execution history, and explains that workflow execution details include unique execution IDs, inputs, outputs, timestamps, retries, errors, and event history. The relevant operational principle is that a decision must be reconstructable from its event history. Conflicting or corrected evidence should therefore be preserved as subsequent events linked to the original event, not erase the original record.

## Firing-210 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require append-only retention and explicit conflict handling: each Reviewer packet must carry unique event identity, exact V002 provenance, reviewer role, timestamp, full seven-dimension score, explicit outcome, and evidence references. A corrected packet must supersede only through a new linked event; it must not mutate or delete the prior packet. No new brief or MP4 is authorized.

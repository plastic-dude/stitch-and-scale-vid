# Director Research — Append-Only Reconciliation and Canonical Callback

research_id: RESEARCH-20260820-append-only-reconciliation-canonical-callback-0939
run_role: temporary-director
run_time: 2026-08-20T09:39:00+01:00
status: research-only

## Fresh research question

How should a recurring Director reconcile a new append-only operational hold while preserving immutable evidence and one exact terminal Reviewer callback?

## External evidence

NIST AI RMF emphasizes documented accountability, differentiated human oversight, independent review, traceable evaluation evidence, and ongoing monitoring. Google SRE guidance emphasizes clear, actionable, novel alerts and warns that repeated non-actionable pages can mask real incidents. AWS Step Functions demonstrates a workflow that pauses and resumes only after an explicit approval or rejection callback.

Sources:
- https://airc.nist.gov/airmf-resources/airmf/5-sec-core/
- https://sre.google/sre-book/monitoring-distributed-systems/
- https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html

## Repository evidence

The newer remote queue record is an append-only authorization hold under Director handoff 116. It does not contain an independent terminal Reviewer decision, owner acknowledgement, or `REMAKE_REQUIRED` order. V002 remains `video-ready-for-review`; no MP4 is authorized. The 420-second Director schedule remains active with `runAsNewTask: false`.

## Decision

Safely reconcile the remote record and publish exactly one blocker requiring a unique independent Reviewer callback bound to V002’s exact video ID, Drive ID, and SHA-256. Consolidate repeated holds and do not create a new brief or MP4.

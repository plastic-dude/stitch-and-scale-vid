# Director Research — Review Decision Traceability

research_id: RESEARCH-20260820-review-decision-traceability-1130
run_role: temporary-director
run_time: 2026-08-20T11:30:00+01:00
status: research-only
future_angle: decision-traceability

## Fresh research question

What minimum evidence packet should accompany a terminal review decision so approval, rejection, and remake orders remain auditable and cannot be confused with a repeated hold?

## External evidence

Google SRE’s postmortem guidance defines a durable incident record as the impact, actions taken, root causes, and follow-up actions, with formal review for completeness and action ownership. It also emphasizes objective data, prompt publication, and explicit end states. [1] AWS Step Functions documents how execution inputs and outputs flow through states and how state history provides traceability for what was executed and produced. [2]

## Current reconciliation

The remote queue has V002 in `video-ready-for-review`, no terminal Reviewer decision, and no `REMAKE_REQUIRED` order. The Generator added a fresh bounded-review hold at 18:55, which was preserved by safe merge. The correct output is one blocker requesting a decision packet—not a new brief, approval, rejection, or remake.

## Decision

Create one precise blocker requiring any terminal Reviewer decision to include the same video_id/version, decision type, weighted score, rubric evidence, claim/rights/caption/audio/platform findings, relevant timestamps, and acceptance or remake conditions. Until that packet exists, keep the single-flight lane closed.

## References

[1]: https://sre.google/sre-book/postmortem-culture/ "Postmortem Culture — Google SRE"
[2]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-input-output-filtering.html "Processing workflow input and output — AWS Step Functions"

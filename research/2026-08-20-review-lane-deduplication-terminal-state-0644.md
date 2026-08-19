# Director Research — Review-Lane Deduplication and Terminal State

research_id: RESEARCH-20260820-review-lane-deduplication-terminal-state-0644
run_role: temporary-director
run_time: 2026-08-20T06:44:00+01:00
status: research-only

## Fresh research question

What evidence and state distinction are needed to deduplicate repeated V002 holds without accidentally treating a hold, timeout, or acknowledgement as a terminal review decision?

## Evidence reviewed

Google SRE alerting guidance recommends aggregating signals, pruning outliers, and keeping alerts actionable rather than paging on noisy component-level events. NIST AI RMF identifies documentation, clear accountability structures, differentiated human roles, independent assessment, and documented human oversight as governance controls. AWS Step Functions states that a callback workflow continues only after the task token is returned and recommends explicit heartbeat or task timeouts so a stuck waiting state produces an error rather than silently progressing.

Repository evidence shows the V002 handoff is still open and `video-ready-for-review`; no independent terminal Reviewer decision, owner acknowledgement, or open `REMAKE_REQUIRED` order is present. The Director schedule remains enabled at 420 seconds with `runAsNewTask: false`; local HEAD equals `origin/main` before publication.

## Decision

Keep one stable V002 contract and append only materially new state: named owner callback, bounded deadline, named escalation target, independent Reviewer verdict, or a timeout escalation that references the unchanged evidence. A repeated hold with no new state is not a lane transition and cannot create a new angle. The Director therefore publishes one precise blocker and preserves the single-flight hold.

## Sources

[1]: https://sre.google/sre-book/practical-alerting/ "Google SRE Practical Alerting"
[2]: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ "NIST AI RMF Core"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/sfn-best-practices.html "AWS Step Functions Best Practices"

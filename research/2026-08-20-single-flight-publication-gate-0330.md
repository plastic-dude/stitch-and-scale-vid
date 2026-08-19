# Director Research — Single-Flight Campaign Contract

research_id: RESEARCH-20260820-single-flight-publication-gate-0330
run_role: temporary-director
run_time: 2026-08-20T03:30:00+01:00
status: research-only
future_angle: automation-plus-human-gate

## Fresh research question

How should a recurring creative pipeline prevent duplicate work and safe retries while a published contract is awaiting generation or review?

## External evidence

GitHub’s concurrency guidance says a shared concurrency group can ensure that only one workflow or job runs at a time; additional runs can remain pending or replace older pending work depending on the queue policy. [1] Google Cloud’s idempotency guidance explains that repeated requests should converge to the same result without additional side effects, and that unique request identifiers help distinguish retries from genuinely new operations. [2] AWS describes the same principle for distributed workflows: a unique client request identifier makes retries safe and auditable, while a singleton workload should be reconciled rather than duplicated. [3]

## Current workflow reconciliation

The active privacy-by-default contract is now published and has a verified publication receipt. The Generator must consume that exact `plan_id`/`video_id` once, then wait for independent review. The Director’s seven-minute loop must not publish a second campaign while the first contract is `approved-for-generation`, `in-progress`, `director-review`, or `ready-for-hourly-review`, unless a Reviewer order or explicit human change creates a new parent contract.

## Decision

The single-flight rule is now treated as a governance invariant: one active new-video contract per Generator lane, identified by `video_id` and `plan_id`; retries reference the same IDs and do not create another brief; only a new angle after the prior asset reaches a terminal state (`approved`, `published`, `rejected`, or explicit `REMAKE_REQUIRED`) may enter the lane. This protects the requested multi-angle strategy without allowing duplicate work during a publication or review delay. No new Generator-ready brief is created in this firing.

## References

[1]: https://docs.github.com/actions/writing-workflows/choosing-what-your-workflow-does/control-the-concurrency-of-workflows-and-jobs "Control the concurrency of workflows and jobs — GitHub Docs"
[2]: https://cloud.google.com/discover/idempotency "What is idempotency? — Google Cloud"
[3]: https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/ "Making retries safe with idempotent APIs — AWS Builders’ Library"

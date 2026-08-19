# Director Research — Explicit Abstention and Default State

research_id: RESEARCH-20260820-abstention-default-state-1300
run_role: temporary-director
run_time: 2026-08-20T13:00:00+01:00
status: research-only
future_angle: abstention-default-state

## Fresh research question

What should the pipeline do when evidence does not match any terminal approval, rejection, or remake rule?

## External evidence

NIST guidance on reporting uncertainty says measurement results should report uncertainty together with the coverage factor or standard uncertainty, describe the components and evaluation method, and keep referenced documentation current. [1] Google SRE recommends fail-safe behavior: retain the previous known-good state, alert on delayed or implausible data, and await human approval before using potentially invalid new data. [2] AWS Step Functions recommends a `Default` path for a `Choice` state; if no rule matches and no default is provided, the state machine errors rather than silently choosing a path. [3]

## Current reconciliation

The remote queue has V002 in `video-ready-for-review`, with no independent terminal packet and no `REMAKE_REQUIRED` order. Repeated pending records do not match any terminal rule. Therefore, the correct state is explicit `review-pending-abstain` / `human-escalation-required`, not approval, rejection, remake, queue-empty, or generation.

## Decision

Create one precise abstention blocker. Preserve the previous known-good asset and all evidence, require an explicit default path for unmatched review states, and keep the single-flight lane closed.

## References

[1]: https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-7-reporting-uncertainty "Reporting Uncertainty — NIST"
[2]: https://sre.google/sre-book/service-best-practices/ "Production Service Best Practices — Google SRE"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/state-choice.html "Choice workflow state — AWS Step Functions"

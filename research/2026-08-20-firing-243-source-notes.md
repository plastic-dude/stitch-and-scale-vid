# Firing 243 Source Notes

## Fresh topic

Service-level objectives and error budgets for a review lane: how to measure review reliability and latency, define acceptable non-terminal delay, assign accountable ownership, and trigger bounded escalation or reliability work without turning an SLO miss into approval authority.

## Authoritative sources

Google SRE defines SLOs as targets for a measured service level and SLIs as carefully defined quantitative measures. It recommends selecting a small set of indicators tied to user experience, specifying how and under what conditions they are measured, and using the results to drive action: https://sre.google/sre-book/service-level-objectives/. Google’s SLO workbook explains that SLOs support data-driven prioritization, require stakeholder approval, ownership, an error-budget policy, and a refinement process; it describes error budgets as the allowed rate at which SLOs may be missed and notes that correctness, freshness, coverage, and quality can be relevant SLIs for pipelines: https://sre.google/workbook/implementing-slos/. Google’s example error-budget policy shows that an SLO miss should trigger reliability-focused work or a postmortem according to explicit policy, and that an error budget policy is not punishment or automatic permission to alter unrelated product state: https://sre.google/workbook/error-budget-policy/. NIST AI RMF is intended to manage AI risks to individuals, organizations, and society through trustworthy design, development, use, and evaluation, with risk tolerances that may evolve: https://www.nist.gov/itl/ai-risk-management-framework.

## Application to V002

The review lane can define SLIs such as time from `video-ready-for-review` to a complete Reviewer packet, proportion of review contracts reaching a valid terminal decision within a declared window, evidence completeness, correct identity binding, and percentage of blocked events handled without unauthorized progression. SLOs must be owned and approved; they cannot be invented by the Director or inferred from queue age. An error budget can guide escalation, staffing, rehearsal, or reliability investment, but it cannot authorize approval, rejection, remake, publication, or MP4 generation.

The review lane needs separate indicators for liveness, correctness, evidence completeness, and authorization safety. A heartbeat may show liveness while the lane still fails correctness or authorization safety. A single aggregate “review complete” percentage could hide a critical long-tail hold or a wrong-artifact decision. SLO windows, exclusions, pause conditions, and burn-rate thresholds must be versioned and tied to the active contract. Misses should create a bounded incident or reliability action with an owner and checkpoint, not a silent state transition.

## Decision direction

V002 remains `video-ready-for-review`, with no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, or approved-for-generation brief. Publish one blocker requiring a review-lane SLI/SLO and error-budget policy that separates liveness, correctness, evidence completeness, and authorization safety. Keep the single-flight lane closed and do not authorize MP4 generation.

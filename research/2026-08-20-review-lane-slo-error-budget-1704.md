# Director Research — Review-Lane SLO and Error-Budget Policy

- **Research ID:** `RESEARCH-20260820-review-lane-slo-error-budget-1704`
- **Run role:** Temporary Director/Planner
- **Firing:** 243
- **Run time:** 2026-08-20T17:04:31+00:00
- **Status:** Research-backed operational decision

## Fresh research question

How should a review lane measure reliability and latency, define acceptable non-terminal delay, assign accountable ownership, and trigger bounded escalation or reliability work without turning an SLO miss into approval authority?

## Current state observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. The authoritative V002 manifest, terminal-signal paths, and queue tail were inspected. The queue continues to show `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`, with no independent terminal Reviewer packet, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. The single-flight lane remains closed.

Active provenance remains:

| Field | Value |
|---|---|
| Video ID | `SS_ownership-receipt_privacy-by-default_9x9_v002_director-review_20260819-174800` |
| Drive file ID | `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC` |
| SHA-256 | `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5` |
| Status | `video-ready-for-review` |

## Research findings

Google SRE defines an SLI as a quantitative measure of a service level and an SLO as a target or range for that measure. It recommends selecting a small set of indicators tied to user experience, explicitly specifying measurement conditions, and using those indicators to drive action.[1] Google’s SLO workbook states that an error-budget approach requires stakeholder-approved SLOs, an owner empowered to make tradeoffs, a policy for using the budget, and a refinement process. It also recognizes correctness, freshness, coverage, and quality as relevant indicators for pipelines, not only availability and latency.[2] Google’s example error-budget policy uses explicit responses such as reliability work, postmortem actions, or a controlled change freeze when a budget is consumed; the policy is not punishment and does not itself grant unrelated state-changing authority.[3] NIST AI RMF frames risk management across AI design, development, use, and evaluation and recognizes that risk tolerances can change as systems, policies, and norms evolve.[4]

A V002 review lane should not collapse all health into one “review complete” percentage. It needs separate indicators for liveness, correctness, evidence completeness, and authorization safety. Candidate SLIs include time from `video-ready-for-review` to a complete Reviewer packet, proportion of contracts reaching a valid terminal decision within a declared window, proportion of packets with complete seven-dimension evidence, rate of exact-artifact identity binding, and rate of blocked or ambiguous events handled without unauthorized progression. A heartbeat can satisfy liveness while correctness or authorization safety fails. Aggregate averages can hide a critical long-tail hold or wrong-artifact decision.

## Decision

Publish exactly one blocker requiring a versioned review-lane SLI/SLO and error-budget policy. The policy must identify the user or owner whose outcome matters, measurement windows, inclusions and exclusions, pause conditions, freshness, burn-rate or escalation thresholds, accountable owner, and the permitted operational response. It must keep liveness, correctness, evidence completeness, and authorization safety as distinct dimensions. A missed SLO may create an incident, request staffing, trigger a rehearsal, or prioritize reliability work; it cannot authorize approval, rejection, remake, publication, or MP4 generation.

The policy must be approved by the accountable owner rather than inferred from queue age. Any SLO or error-budget change requires a versioned rationale and does not rewrite historical measurements. A review-lane SLO record without a defined SLI, measurement source, window, owner, or bounded response is non-actionable. Do not create a new brief or MP4 while V002 remains open.

## Terminal boundary

Only a complete independent Reviewer decision or contract-authorized owner resolution that is exact-provenance-bound, evidence-complete, authority-verified, and immutable may clear V002. SLO compliance, SLO violation, error-budget burn, queue age, heartbeat freshness, or escalation severity is never a terminal review decision.

## References

[1]: https://sre.google/sre-book/service-level-objectives/ "Google SRE: Service Level Objectives"
[2]: https://sre.google/workbook/implementing-slos/ "Google SRE Workbook: Implementing SLOs"
[3]: https://sre.google/workbook/error-budget-policy/ "Google SRE Workbook: Example Error Budget Policy"
[4]: https://www.nist.gov/itl/ai-risk-management-framework "NIST AI Risk Management Framework"

# Director Research — Independent Review Is a Separate Gate

research_id: RESEARCH-20260820-independent-review-gate-0730
run_role: temporary-director
run_time: 2026-08-20T07:30:00+01:00
status: research-only
future_angle: automation-plus-human-gate

## Fresh research question

Why must a technically complete generated video remain unapproved until an independent Reviewer evaluates it against disclosed scope and evidence?

## External evidence

NIST describes the AI Risk Management Framework as a voluntary framework for incorporating trustworthiness considerations into the design, development, use, and evaluation of AI systems. [1] NTIA distinguishes self-assessments from independent evaluations and explains that self-assessments are unlikely to be sufficient on their own; independent evaluation provides an essential check on management’s own assessment. NTIA also emphasizes that evaluation scope and methodology must be disclosed for results to be understood and credible. [2]

## Current product reconciliation

The V002 Generator handoff explicitly says the MP4 is technically QA-checked and submitted for independent scoring only. The V002 record preserves exact source captures, script, captions, safe-zone QA, narrator continuity, Drive ID, checksum, and manifest, while identifying one unresolved evidence question: whether the spoken local-storage warning is sufficiently supported by the visible approved capture. This is exactly the kind of claim-evidence boundary that must remain with the independent Reviewer.

## Decision

Create one precise single-flight blocker. Keep V002 in `video-ready-for-review` / open review state until the Reviewer issues approval or an explicit `REMAKE_REQUIRED` order. Do not create a second campaign brief, do not treat Generator QA as public approval, and do not let the Director resolve the Reviewer’s evidence question unilaterally.

## References

[1]: https://www.nist.gov/itl/ai-risk-management-framework "AI Risk Management Framework — NIST"
[2]: https://www.ntia.gov/issues/artificial-intelligence/ai-accountability-policy-report/developing-accountability-inputs-a-deeper-dive/ai-system-evaluations/independent-evaluations "Independent Evaluations — NTIA"

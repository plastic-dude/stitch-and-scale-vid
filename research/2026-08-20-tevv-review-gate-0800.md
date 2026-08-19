# Director Research — TEVV Review Gate

research_id: RESEARCH-20260820-tevv-review-gate-0800
run_role: temporary-director
run_time: 2026-08-20T08:00:00+01:00
status: research-only
future_angle: verified-not-just-checked

## Fresh research question

How should the production team distinguish technical checks, verification, validation, and independent review before treating a video as accepted?

## External evidence

NIST describes AI measurement and evaluation as context-dependent work involving metrics, methods, testbeds, and evaluation of characteristics such as accuracy, robustness, interpretability, privacy, reliability, and transparency. [1] NIST’s TEVV-Athlon framework describes test, evaluation, verification, and validation as a structured assessment process that produces evidence about whether systems meet goals and minimize negative impacts. [2] NIST’s glossary defines independent verification and validation as a comprehensive review, analysis, and testing performed by an objective third party to verify requirements and validate implementation. [3]

## Current product reconciliation

The V002 Generator record contains technical QA evidence: exact script, approved captures, safe-zone caption layout, narrator continuity, rights basis, filename increment, Drive upload, checksum, and manifest. Its handoff explicitly leaves public approval to the Video Reviewer. Therefore, Generator QA is verification of the assembly contract, while Reviewer scoring is the independent acceptance/validation gate for the promotional asset. The unresolved spoken-warning evidence question remains with the Reviewer.

## Decision

Create one precise single-flight blocker: keep V002 open for independent Video Reviewer scoring and do not create the next campaign brief until the Reviewer produces an approval, rejection, or explicit `REMAKE_REQUIRED` order. No MP4 is generated or self-approved.

## References

[1]: https://www.nist.gov/ai-measurement-and-evaluation "AI measurement and evaluation — NIST"
[2]: https://www.nist.gov/artificial-intelligence/ai-research/tevv-athlon-framework-evaluating-ai-systems "TEVV-Athlon Framework — NIST"
[3]: https://csrc.nist.gov/glossary/term/independent_verification_and_validation "Independent verification and validation — NIST CSRC"

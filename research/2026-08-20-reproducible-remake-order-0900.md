# Director Research — Reproducible Remake Orders and Early Escalation

research_id: RESEARCH-20260820-reproducible-remake-order-0900
run_role: temporary-director
run_time: 2026-08-20T09:00:00+01:00
status: research-only
future_angle: reproducible-remake-order

## Fresh research question

What evidence should an independent Reviewer include in a remake order so the Generator can apply one bounded correction rather than guessing or producing another unrelated version?

## External evidence

Google SRE guidance explains that tests reduce uncertainty when changes occur and recommends converting reported bugs into regression tests so previously observed failures do not recur. It also warns that passing a test does not necessarily prove reliability, while a failing test can establish the absence of reliability. [1] Google’s incident-response guidance recommends a clear line of command, defined roles, a working record of debugging and mitigation, and early incident declaration. [2] NIST’s incident-response lifecycle emphasizes Detect, Respond, Recover, and continuous Improvement, with lessons learned fed back into future preparation. [3]

## Current reconciliation

The remote queue still reports the privacy-by-default v002 asset verified in Drive and held for independent Reviewer scoring. No `REMAKE_REQUIRED` order exists. Therefore, this research strengthens the future order format but does not authorize a new brief or a remake. A valid future remake order should identify the exact video_id/version, timecode, failed rubric dimension, observed defect, expected condition, required correction, evidence asset, and acceptance test.

## Decision

Create one precise blocker: continue the open V002 review hold and defer all new campaign briefs until the Reviewer emits a terminal decision. If a remake order appears, preserve the original evidence, increment the version, make only the ordered correction, and add a regression check for the defect.

## References

[1]: https://sre.google/sre-book/testing-reliability/ "Testing for Reliability — Google SRE"
[2]: https://sre.google/workbook/incident-response/ "Incident Response — Google SRE Workbook"
[3]: https://csrc.nist.gov/projects/incident-response "Incident Response — NIST"

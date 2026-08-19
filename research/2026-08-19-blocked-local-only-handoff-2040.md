# Director Research and Blocker — Warnings, Gates, and Evidence

research_id: RESEARCH-20260819-blocked-local-only-handoff-2040
run_role: temporary-director
run_time: 2026-08-19T20:40:00+01:00
parent_brief: PLAN-20260819-local-only-001
local_head_before_new_record: 926b510
remote_head: 78eadde
status: blocked

## Fresh research question

How should the future credibility-with-receipts campaign distinguish a visible warning from a delivery-blocking error without making the product’s checks sound like a complete technical-editor or fit approval?

## Research synthesis

Sonar’s quality-gate guidance describes a gate as a configurable checkpoint with predefined measurable criteria, automated checks, feedback, and documented results; a failed gate prevents progression until the issue is addressed.[1] Qameta’s tester guidance distinguishes delivery-stopping checks from recommendations and stresses that automated checks are reliable and transparent but do not remove the need for human testing.[2] NIST’s software-testing material reinforces that testing scope and validity must be defined rather than assumed from automation alone.[3]

Applied to Stitch & Scale, a warning can responsibly mean “inspect this before publishing,” while an error/blocker can mean “the next stage should not proceed.” That supports the product’s visible `0 errors · 2 warnings · 13 checks` state, but does not establish a full tech-editor review, fit validation, factory sign-off, or market success.

## Reconciliation with current product truth

The live Publish surface shows `Ready to publish` with zero errors and two warnings: a possible base-size back-length mismatch and missing hip measurement. It also shows a 92/100 credibility score. The future angle is `warning-visible gate`: show the measurable checks, show the warnings, explain what they do and do not block, and make the human follow-up explicit. The warnings must not be hidden in edit or cropped out of the video.

The current privacy-by-default brief remains the only unconsumed Director contract and is still unpublished remotely. No second brief is created during this firing.

## Precise blocker

The remote repository remains `78eadde`; the local Director history contains the complete privacy brief plus twenty-three local research/blocker commits. The latest Generator run reports no eligible new exact approved-for-generation pair and no open `REMAKE_REQUIRED` order. No MP4 was generated or self-approved.

## Exact next action

Publish the local Director commits to `plastic-dude/stitch-and-scale-vid` using the existing GitHub connector or a valid short-lived credential. Then generate exactly one privacy-by-default MP4 from the existing brief, upload it to Drive `01-director-review`, and stop for independent Reviewer scoring. Consider `warning-visible gate` later with a fresh capture, explicit criteria, and visible warning acceptance rules.

## References

[1]: https://www.sonarsource.com/resources/library/quality-gate/ "Software Quality Gates — Sonar"
[2]: https://qameta.io/blog/quality-gates-for-testers "Quality Gates for Testers — Qameta"
[3]: https://www.nist.gov/software-testing "Software Testing — NIST"

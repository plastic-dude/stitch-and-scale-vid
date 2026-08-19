# Director Research — Reviewer Lineage Gate and Single-Flight Continuation

research_id: RESEARCH-20260820-reviewer-lineage-and-single-flight-0530
run_role: temporary-director
run_time: 2026-08-20T05:30:00+01:00
status: research-only

## Fresh research question

What did the newest independent Video Reviewer evidence change about production readiness, lineage, and the next eligible Generator action?

## Fresh evidence read

The newly published Video Reviewer run inspected the existing DIR-001 founder-receipt v001 MP4 and scored it 89.9%. The review found strong story, supported UI proof, clean audio, and synchronized captions, but blocked promotion because the repository evidence tree did not contain the matching production brief, exact script, claim ledger, platform profile, caption map/QA, rights record, or committed external-media manifest linking the Drive file and checksum. The review also found that the three `small-test.mp4` files are byte-identical archive-connectivity test duplicates with no production identity and must not be regenerated or promoted.

The review’s research used current TikTok in-feed dimensions/safe-zone guidance and YouTube encoding guidance. The reviewer’s evidence is immutable and must not be overwritten. This is a lineage/readiness blocker for DIR-001, not a `REMAKE_REQUIRED` order.

## Decision

The active privacy-by-default contract remains the only eligible new-video contract under the single-flight rule and has an acknowledged remote brief. No second Generator-ready brief is created. The Generator’s priority is to produce the privacy-by-default v001 with its complete manifest and archive evidence. After that lane reaches a terminal state, the Generator/Director may remediate DIR-001’s missing lineage record and request a new review; neither DIR-001 nor `small-test.mp4` should be regenerated solely because of the lineage blocker.

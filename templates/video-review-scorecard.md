# Video Review Scorecard — [video_id]

review_id: REV-[video_id]-[version]
reviewed_at: [RFC3339]
reviewer: video-reviewer
campaign_objective: [awareness / education / launch / ad / event / series / tester recruitment / other]
platform: [platform profile]
source_filename: [exact filename]
source_version: [v001]

## Dimension scores

| Dimension | Weight | Score / 100 | Evidence and timecodes |
|---|---:|---:|---|
| Story, purpose, and audience fit | 20 |  |  |
| Directing and visual language | 15 |  |  |
| Proof, claims, and product truth | 20 |  |  |
| Audio and voice continuity | 15 |  |  |
| Captions and text discipline | 10 |  |  |
| Technical and platform fit | 10 |  |  |
| Originality and brand fit | 10 |  |  |

**Weighted score:** `[sum(score × weight) / 100]%`

## Hard-fail flags

- [ ] Captions obscure product/event proof.
- [ ] Mixed, doubled, overlapping, or unintelligible voices.
- [ ] Hallucinated or contradictory UI/text.
- [ ] Unsupported claim or founder credential.
- [ ] Missing, corrupt, or wrong export.
- [ ] Unlicensed essential media.
- [ ] Duplicate or ambiguous filename.
- [ ] Missing manifest, checksum, or external-media record.
- [ ] Critical continuity error changes meaning.

## Verdict logic

- Weighted score `<65%`: `REMAKE_REQUIRED`.
- Any hard-fail: `REMAKE_REQUIRED` regardless of score.
- Any dimension `<55`: remediation required even when total is at least 65%.
- Any unresolved `UNVERIFIED` claim: remediation required.
- Score `≥80%` with all gates passed: `PASS_FOR_DIRECTOR_APPROVAL`.
- No reviewer score alone authorizes public publication.

## Verdict

status: [PASS_FOR_DIRECTOR_APPROVAL / REMAKE_REQUIRED / BLOCKED / UNVERIFIED]
remake_order_id: [if required]

## Ordered next action

1. [most important correction or approval action]
2. [second correction only if required to make the first possible]

## Communication

parent_manifest: [path]
parent_brief: [path]
message_id: [path]
Generator acknowledgement due: [run or time]

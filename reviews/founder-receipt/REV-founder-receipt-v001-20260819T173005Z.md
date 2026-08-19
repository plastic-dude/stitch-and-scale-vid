# Video Review Scorecard — founder-receipt

review_id: REV-founder-receipt-v001-20260819T173005Z
reviewed_at: 2026-08-19T17:30:05Z
reviewer: video-reviewer
campaign_objective: tester recruitment / awareness
platform: UNVERIFIED; media is widescreen 16:9 and suitable for web/YouTube, but no target platform profile is attached
source_filename: SS_founder-receipt_spreadsheet-11pm_16x9_v001_director-review_20260819-101800.mp4
source_version: v001
drive_file_id: 1OEjnR6azlw73irrwWM-dEzSfu9FgsbFp
sha256: 889f89ad5d19c1763e97aad06b9e406512634670e836498a22fce6dfea9acfdd
technical_metadata: 55.0 seconds; 1920x1080; H.264; AAC stereo 48 kHz

## Dimension scores

| Dimension | Weight | Score / 100 | Evidence and timecodes |
|---|---:|---:|---|
| Story, purpose, and audience fit | 20 | 93 | 00:00–00:23 establishes the 11:47 PM spreadsheet pain and turns it into an honest maker-facing invitation; 00:43–00:55 adds the founder disclosure and tester-oriented CTA. This matches the `spreadsheet-11pm` angle. |
| Directing and visual language | 15 | 88 | 00:00–00:23 warm desk/live-action setup, 00:24 transition to UI, and 00:48 return to desk create a coherent narrative loop. |
| Proof, claims, and product truth | 20 | 92 | 00:25–00:41 visibly supports gauge, tolerance, yarn bill, points of measure, XS–5XL, and the `BLOCKED` state; narration is consistent with the observed UI. Claim ledger and manifest are absent, so repository proof remains incomplete. |
| Audio and voice continuity | 15 | 95 | 00:00–00:55 clear single narrator, clean mix, no observed discontinuity, and transcript aligns with spoken content. |
| Captions and text discipline | 10 | 78 | Visual analysis found captions synchronized and readable, but top alignment risks mobile UI/notch collision; no caption map or approved caption QA artifact is present. |
| Technical and platform fit | 10 | 80 | MP4/H.264/AAC, 1920×1080, 30 fps, and 55 seconds are sound for widescreen web/YouTube. Mobile platform profile and safe-zone validation are missing. |
| Originality and brand fit | 10 | 92 | The 11 PM spreadsheet metaphor, transparent founder disclosure, and “Tell me where the math fails” line are distinctive and consistent with the brand voice. |

**Weighted media score:** `89.9%` (provisional media score; not public approval)

## Hard-fail and gate flags

- [x] Missing manifest, checksum, or external-media record in the repository. The checksum was independently computed for this review, but no matching committed manifest exists.
- [x] Missing production brief, exact script record, claim ledger, platform profile, rights record, and caption map.
- [ ] Captions obscure product/event proof.
- [ ] Mixed, doubled, overlapping, or unintelligible voices.
- [ ] Hallucinated or contradictory UI/text.
- [ ] Unsupported claim or founder credential observed in the media. The founder disclosure is present, but its approval evidence is absent.
- [ ] Missing, corrupt, or wrong export.
- [ ] Unlicensed essential media. Background music licensing is unresolved.
- [ ] Duplicate or ambiguous filename. The filename is structurally plausible, but its repository manifest is absent.
- [ ] Critical continuity error changes meaning.

## Verdict logic

The media itself scores above the 80% quality threshold, but the asset cannot enter `approved` or `PASS_FOR_DIRECTOR_APPROVAL` because required production evidence and target-platform gates are missing. Under the repository stop conditions, this is a prerequisite blocker rather than a public approval.

## Verdict

status: BLOCKED
remake_order_id: none

## Ordered next action

1. Provide and commit the matching production brief, exact script, claim ledger, platform profile, caption map/QA, rights record, and manifest linking this Drive file and checksum; then reopen this same video/version for independent review. Do not publish or treat the current score as approval.

## Communication

parent_manifest: UNAVAILABLE
parent_brief: UNAVAILABLE
research_note: research/2026-08-19-video-review-run-173005-platform-accessibility.md
message_id: comms/outbox/MSG-20260819T173005Z-founder-receipt-video-review.yml
Generator acknowledgement due: Not applicable while blocked

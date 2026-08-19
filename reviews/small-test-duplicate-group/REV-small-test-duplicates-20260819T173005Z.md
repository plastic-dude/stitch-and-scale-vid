# Video Review Scorecard — small-test duplicate group

review_id: REV-small-test-duplicates-20260819T173005Z
reviewed_at: 2026-08-19T17:30:05Z
reviewer: video-reviewer
campaign_objective: unknown; production purpose is not evidenced
platform: UNVERIFIED; all copies are 16:9 widescreen
source_filename: small-test.mp4
source_version: UNVERIFIED
logical_video_id: small-test-archive-connectivity-test

## Physical Drive copies reviewed

| Drive file ID | Modified time | Technical metadata | SHA-256 |
|---|---|---|---|
| `1KdkKeqJ4TTYuSRJy8SlRdKA8oS-4U4_i` | 2026-08-19T04:11:29.593Z | 103.04 s; 1280×720; H.264; AAC mono 24 kHz | `9c85c6ca006efa2a238ef2ed7b14380ab0188af6be17c2dbb41fdfc5b826837f` |
| `1FsZWinTBsPvF2kieXU5CM3dHhzlnPwKi` | 2026-08-19T04:07:15.576Z | 103.04 s; 1280×720; H.264; AAC mono 24 kHz | same as above |
| `1uPUEL_H4Jlp-E9XBfGUSrVYl7fAvsyOB` | 2026-08-19T03:53:42.435Z | 103.04 s; 1280×720; H.264; AAC mono 24 kHz | same as above |

The three files were downloaded and independently inspected. Matching SHA-256 values prove they are byte-identical copies of one logical video, so they are not three distinct production versions.

## Dimension scores for the shared media

| Dimension | Weight | Score / 100 | Evidence and timecodes |
|---|---:|---:|---|
| Story, purpose, and audience fit | 20 | 88 | 00:00–00:21 establishes knitwear-design pain and a local-first promise; 00:23–01:27 follows a coherent product walkthrough. |
| Directing and visual language | 15 | 88 | Tactile opening, clean UI progression, and deliberate transitions from craft to digital workflow. |
| Proof, claims, and product truth | 20 | 88 | 00:11–00:23 supports local-first/data-ownership claims; 00:43–01:09 shows XS–5XL grading, yarn estimation, and live placeholders; 01:11–01:27 shows warnings and a test-knit roster. Repository claim evidence is absent. |
| Audio and voice continuity | 15 | 90 | Transcript is continuous and intelligible across 103 seconds; narration is clear and music remains subordinate. |
| Captions and text discipline | 10 | 84 | Captions are accurate and readable; one visual analysis notes that large lower-middle captions may obscure UI and platform controls on mobile. |
| Technical and platform fit | 10 | 78 | MP4/H.264/AAC and 1280×720 are suitable for widescreen web/YouTube; no target platform profile or mobile adaptation is provided. |
| Originality and brand fit | 10 | 82 | Craft-to-data bridge and local-first positioning fit the brand, but the asset is explicitly a test upload and lacks production identity. |

**Weighted media score:** `85.2%` (provisional media score; not public approval)

## Hard-fail and gate flags

- [x] Missing production manifest, brief, exact script record, claim ledger, platform profile, rights record, checksum, and Generator acknowledgement.
- [x] Archive-connectivity test identity is not a valid production queue item.
- [ ] Captions obscure all product proof.
- [ ] Mixed, doubled, overlapping, or unintelligible voices.
- [ ] Hallucinated or contradictory UI/text observed in the media.
- [ ] Missing, corrupt, or wrong export.
- [ ] Unlicensed essential media confirmed. Music licensing is not evidenced.
- [x] Duplicate physical uploads; deduplicated to one logical review item.
- [ ] Critical continuity error changes meaning.

## Verdict

status: BLOCKED
remake_order_id: none

The media is playable and polished, but it must not be scored as a production candidate or promoted to approval because it is a known archive-connectivity test with no production lineage.

## Ordered next action

1. Exclude the three duplicate copies from the production queue and provide one approved production brief or acknowledged remake order with a matching manifest, claim ledger, platform profile, rights record, checksum, and Generator acknowledgement before the next video review.

## Communication

parent_manifest: manifests/blocked-first-catch-up-20260819-0825.yml (historical blocker; no production manifest for these copies)
parent_brief: UNAVAILABLE
research_note: research/2026-08-19-video-review-run-173005-platform-accessibility.md
message_id: comms/outbox/MSG-20260819T173005Z-small-test-duplicate-review.yml
Generator acknowledgement due: Not applicable while blocked

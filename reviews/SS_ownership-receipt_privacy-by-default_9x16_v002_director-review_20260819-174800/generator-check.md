# Generator QA — SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800

**Status:** `director-review`

**Contract:** `PLAN-20260819-local-only-001`

**Script:** `SCRIPT-20260819-local-only-v001`

**Platform:** `PLATFORM-20260819-9x16-local-only-001`

**Caption source:** `CAPTION-20260819-local-only-v001.srt`; rendered layout: `captions/CAPTION-20260819-local-only-v001-safe.ass`

**Output:** `videos/SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800.mp4`

**Drive file:** `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC`

**Drive URL:** https://drive.google.com/file/d/115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC/view?usp=drivesdk

## QA result

The final v002 file passed the technical and visual generator gates and was uploaded to the connected Google Drive `01-director-review` folder before Git record-keeping. The final file is a 45.000-second H.264/AAC MP4 at 1080×1920, 30 fps, 48 kHz mono audio, and yuv420p pixel format. The final file size is 1,445,803 bytes. SHA-256: `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`.

The six shots use only the approved owned product captures: `assets/live-local-first-home-20260819.webp` and `assets/live-local-first-new-project-20260819.webp`. The visual inspection confirmed that the captures are preserved as exact product pixels, centrally framed in the 9:16 canvas, with no redrawn UI, no invented controls, no stock media, and no unlicensed music. The final caption layout uses white two-line captions in the reserved lower blank matte with a dark outline; the final contact-sheet review confirmed that captions do not cover the central product proof, header, fields, buttons, or logo.

The audio uses one continuous Algieba narrator family, with no music bed, no second speaker, no overlap, and no voice-family change. Mean audio level measured approximately -19.4 dB with no clipping reported by the technical pass. The exact Director dialogue is preserved in the generated narration and the timed caption track.

The first assembly draft, `build/local-only-v001/draft_caption-obstructive_v001.mp4`, was not delivered because its default subtitle styling was visibly oversized and obstructive. It was preserved as an internal rejected draft rather than overwritten. The final v002 corrected the root defect with a safe-zone ASS layout and a unique incremented filename.

## Gate checklist

| Gate | Result |
|---|---|
| Director script authority | Pass — exact `SCRIPT-20260819-local-only-v001` used |
| Brief objective and audience | Pass — privacy-by-default trust and founding-tester recruitment |
| Platform framing | Pass — 9:16 vertical, 1080×1920 |
| Runtime | Pass — 45.000 seconds |
| Captions-off review | Pass — product proof remains visible without subtitles |
| Captions-on review | Pass — two-line captions remain in lower blank safe area |
| Voice plan | Pass — one consistent warm narrator family |
| Rights | Pass — owned product captures; no stock media or music |
| Product/UI text integrity | Pass — no generated or redrawn UI text |
| Filename uniqueness | Pass — v002 incremented, no prior output overwritten |
| SHA-256 checksum | Pass — recorded above and in manifest |
| Drive upload | Pass — verified file ID, URL, size, checksum, and parent folder |
| Public approval | Not granted — awaiting independent Video Reviewer scoring |

## Research applied

Fresh run research was recorded in `research/2026-08-19-generator-run-local-only-fresh-v2.md`. The research covered current vertical Shorts/Reels delivery, caption support, safe-zone handling, product-evidence fidelity, and accessibility. Sources included Google Ads Shorts asset guidance, YouTube caption guidance, Meta safe-zone guidance, and Instagram creator editing guidance.

## Reviewer handoff

The Video Reviewer owns the score and any remake decision. The unresolved risk is that the Director script’s spoken warning cue is stronger than the warning text visible in the approved capture set; the video does not fabricate a warning overlay, and the Reviewer should assess whether the existing product evidence is sufficient for the spoken claim. If not, the Reviewer should issue an explicit `REMAKE_REQUIRED` order with the required proof correction.

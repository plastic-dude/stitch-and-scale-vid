# Platform Profile — 9x16 Local-Only Proof Short

platform_id: PLATFORM-20260819-9x16-local-only-001
plan_id: PLAN-20260819-local-only-001
video_id: SS_ownership-receipt_privacy-by-default_9x16_v001_approved-for-generation_20260819-131500
format: 9:16 vertical
runtime: 40–55 seconds; target 45 seconds
primary_destinations: YouTube Shorts; Instagram Reels
tiktok_status: explicitly excluded pending current TikTok safe-zone verification

## Distribution intent

This is one vertical-first proof-led film for two destinations. It is not a horizontal master cropped into a vertical frame. The composition is built around the narrow screen, the local-status header, and a readable warning. The first four seconds must establish the ownership contradiction before any explanatory setup.

## Export profile

| Parameter | Requirement |
|---|---|
| Canvas | 1080×1920 preferred; Generator must record actual export dimensions |
| Aspect ratio | 9:16 |
| Frame rate | 30 fps minimum for the intended Reels profile; record actual value in manifest |
| Codec/container | H.264 MP4 unless the Generator’s available production path requires an equivalent accepted profile; record exact metadata |
| Audio | Stereo or mono is acceptable if intelligible and consistent; record channel layout and loudness measurement |
| Captions | Separate timed caption file plus burned-in captions only if they remain inside the declared safe area |
| Watermark | None; no third-party platform watermark |
| Rights | Owned product captures; one declared narrator family; no unlicensed music or stock footage |

## Safe-zone policy

No hard-coded numeric Meta safe-zone claim is made in this profile because the official Meta page was not fully extractable during research. The Generator must use the active target-platform overlay guide available in its production environment and record the checked coordinates in the manifest/QA report. Until then, keep critical proof inside the central region, reserve a clear bottom interface margin, reserve a clear right-side interaction margin, and place captions only in blank space selected per shot.

The product proof is the priority. The `Local only` and `Saved` labels, the local-first copy, the Local Storage Notice, form fields, buttons, and logo may never be covered by captions, CTA cards, generated labels, or decorative graphics.

## Native adaptation rules

For YouTube Shorts, preserve the proof hold long enough for a viewer to read the warning and maintain a separate caption track for accessibility. YouTube’s official guidance confirms that captions broaden access and can be added during upload or in YouTube Studio.[1]

For Instagram Reels, review the exported video with the platform’s safe-zone overlay or equivalent current editing guidance before delivery. Instagram’s official creator guidance states that safe zones indicate where text will not be cut off by the interface and recommends watching the edit with text and music before export.[2]

Do not deliver a TikTok version from this brief. TikTok is a separate platform adaptation requiring a fresh profile check, new safe-zone record, and separate video ID/reservation.

## Acceptance checklist

The Generator must demonstrate the following before handing the asset to the Reviewer:

| Check | Required evidence |
|---|---|
| Hook | The first four seconds contain the ownership contradiction and readable local-status proof |
| Product proof | At least one uninterrupted readable hold on the Local Storage Notice and one on the New Project local state |
| Caption safety | Caption-off and caption-on review; no obstruction of proof or controls |
| Audio | One narrator family, no voice drift, no doubled words, no masking music |
| Mobile legibility | 1080×1920 or actual export viewed at small preview; warning remains readable |
| Interface honesty | No regenerated UI text, invented backup controls, or altered numbers |
| Rights | Product captures and audio rights recorded |
| Storage | Full-resolution MP4 uploaded to `01-director-review`; Git stores manifest/checksum/captions/QA only |

## References

[1]: https://support.google.com/youtube/answer/2734796?hl=en "Add subtitles & captions — YouTube Help"
[2]: https://creators.instagram.com/blog/beginner-video-editing-guide/ "Your First Video Edit in 5 Minutes — Instagram Creators"
[3]: https://www.facebook.com/business/help/980593475366490 "About text overlays and the safe zone for ads in Stories and Reels — Meta Business Help Center"

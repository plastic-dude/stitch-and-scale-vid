# Platform Profile — 16:9 Proof Short

platform_profile_id: PLATFORM-20260819-16x9-proof-short-001
primary_platform: YouTube landing-page embed / 16:9 product explainer
secondary_use: website, email, and deliberate later adaptation
aspect_ratio: 16:9
master_resolution: 1920x1080 preferred
runtime: 55 seconds
hook_deadline: first 3 seconds
caption_policy: accurate_access_captions
caption_safe_zone: reserved top matte above product proof; lower-left only on uncluttered human shots; exact pixel bounds must be recorded in Generator QA
max_caption_lines: 2
max_characters_per_line: 38
editorial_overlay_policy: captions only; no decorative second text system
mobile_preview: required
proof_readability: one measurement family or one blocked state per close shot; no dense full-screen table as sole proof
voice: one narrator family unless explicitly mapped
rights: project-owned capture, owner-approved/generator-created b-roll, original or cleared audio only
export: H.264 MP4, stable 16:9, audio present, metadata recorded
archive_destination: private Google Drive folder `01-director-review`

## Required source checks before generation

1. Re-read current platform rules if the Generator changes distribution beyond the primary profile.
2. Preserve the approved application screenshot without inventing UI text, numbers, buttons, or logos.
3. Check the full frame with captions off, then captions on.
4. Check at the master dimensions and at a small mobile preview.
5. Record exact duration, resolution, frame rate, codec, audio layout, checksum, filename, Drive file ID, and status in the manifest.
6. Create a separate `video_id`, manifest, caption map, and QA record for every derivative format.

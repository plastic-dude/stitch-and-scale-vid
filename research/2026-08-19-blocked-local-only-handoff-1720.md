# Director Research and Blocker — Caption Accessibility and Obstruction

research_id: RESEARCH-20260819-blocked-local-only-handoff-1720
run_role: temporary-director
run_time: 2026-08-19T17:20:00+01:00
parent_brief: PLAN-20260819-local-only-001
local_head_before_new_record: 5c70508
remote_head: 1e62c79
status: blocked

## Fresh research question

What caption implementation and visual acceptance rules best satisfy accessibility while preventing captions from obscuring the product proof in the existing 9:16 film?

## First-party research synthesis

W3C WCAG 2.2 says prerecorded synchronized media should provide captions, and its definition includes speech plus meaningful non-speech audio information. W3C also explicitly notes that captions should not obscure or obstruct relevant information in the video.[1] W3C’s media guidance says automatic captions are not sufficient unless confirmed fully accurate, recommends editing them, identifies WebVTT as the common web format, and notes that caption positioning and styling support can be inconsistent across players.[2] YouTube provides a separate caption upload/editing path in Studio.[3]

## Reconciled production decision

The existing brief’s separate timed caption file remains the correct accessibility path. The Generator must create a transcript-accurate caption file, include meaningful non-speech cues only when they help comprehension, and run both caption-on and caption-off review. For burned-in social captions, the caption layer must remain inside a conservative mobile-safe region, never cover the app UI, never duplicate the spoken text with extra decorative overlays, and never become the only accessible caption record. If a caption cue would cover a critical UI value, the edit should move the cue or hold the visual rather than shrink the proof.

## Precise blocker

The remote repository remains `1e62c79`; the local Director history contains the complete brief plus thirteen local research/blocker commits. The latest Generator scan still reports zero eligible newer approved-for-generation contracts and zero open `REMAKE_REQUIRED` orders. No MP4 was generated or self-approved.

## Exact next action

Publish the local Director commits to `plastic-dude/stitch-and-scale-vid` using the existing GitHub connector or a valid short-lived credential. Then generate exactly one privacy-by-default MP4, attach the accurate caption file, upload to Drive `01-director-review`, and stop for independent Reviewer scoring.

## References

[1]: https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html "Understanding SC 1.2.2 Captions (Prerecorded) — W3C WAI"
[2]: https://www.w3.org/WAI/media/av/captions/ "Captions/Subtitles — W3C WAI"
[3]: https://support.google.com/youtube/answer/2734796?hl=en "Add subtitles & captions — YouTube Help"

# Generator run research — local-only privacy-by-default

**Run date:** 2026-08-19
**Contract:** `PLAN-20260819-local-only-001`
**Script:** `SCRIPT-20260819-local-only-v001`
**Platform:** YouTube Shorts and Instagram Reels, 9:16 vertical

## Fresh external research

Google’s current Shorts asset guidance recommends vertical 9:16 video, recommends videos shorter than 60 seconds for Shorts behavior, and describes Shorts as a sound-on mobile environment where voiceover or music may be used. The 45-second Director cut therefore fits the declared destination profile and will use one intelligible narrator with no music bed. [1]

YouTube’s current caption guidance confirms that subtitles and captions can be added during upload or later in YouTube Studio. The Director-provided timed caption track will remain a separate SRT deliverable, and burned-in captions will be limited to blank safe space rather than product proof. [2]

Meta’s current safe-zone guidance says that for 9:16 Stories and Reels, the top, bottom, and side edges should remain free of key text, logos, and visual elements because platform UI may crop or cover them. It further advises leaving the bottom 40% free of key elements when disclaimers are used. The edit will keep the warning, header, fields, and logo in the central proof area and place captions only in blank margins. [3]

Instagram’s current creator guidance says that its safe zones show where text will not be cut off by the interface and recommends watching the edit back with text and music before export. The QA pass will therefore include caption-off, caption-on, and small-preview review before Drive delivery. [4]

## Product evidence and visual decisions

The approved landing capture `assets/live-local-first-home-20260819.webp` is an owned 893×768 WebP capture. It visibly contains the Stitch & Scale header, the “Welcome to Stitch & Scale” landing surface, local-first/offline/no-account copy, “Your data belongs to you — export anytime, no lock-in,” the publish-ready PDF bullet, a “Cloud Sync is optional” line, and a Begin control. It does not authorize regenerated or redrawn interface text. For the vertical cut it will be centrally reframed with generous side and bottom margins, preserving the original UI pixels.

The approved New Project capture `assets/live-local-first-new-project-20260819.webp` is an owned 893×768 WebP capture. It visibly contains the `Local only` and `Saved` header, Projects/Portfolio/Settings navigation, the New Project control, the Draft a Pattern title, the Project Details form, Pattern Name and Designer fields, Craft Yarn Council sizing text, and the Next control. It will be used as a stable central proof frame without adding controls or labels.

The script’s warning cue will be represented only by the exact approved product evidence available in the source capture or a faithful live-product capture; no warning text, backup control, or claim will be redrawn. If a warning is not visible in the selected frame, the frame will not imply that it is visible. The spoken script remains the Director source of truth, and the QA pass will reject any contradictory or hallucinated product/UI treatment.

## Production decisions

The output will be one 1080×1920 H.264 MP4 at 30 fps, approximately 45 seconds, with one continuous warm-close narrator and no music. The six Director cues will be assembled as timed still-image proof shots with restrained push-ins/crops, exact SRT timing, captions placed only in blank safe regions, and no decorative product-like text. Full-resolution media will be uploaded to Drive `01-director-review` before the Git record is finalized.

## References

[1]: https://support.google.com/google-ads/answer/16041697?hl=en "YouTube Shorts ads: Asset specs and best practices — Google Ads Help"
[2]: https://support.google.com/youtube/answer/2734796?hl=en "Add subtitles & captions — YouTube Help"
[3]: https://www.facebook.com/business/help/980593475366490 "About text overlays and the safe zone for ads on Facebook and Instagram — Meta for Business"
[4]: https://creators.instagram.com/blog/beginner-video-editing-guide/ "Your First Video Edit in 5 Minutes — Instagram Creators"

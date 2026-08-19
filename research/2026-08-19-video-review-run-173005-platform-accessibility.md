# Video Reviewer Research — 2026-08-19 17:30 UTC

## Research question

What current platform and accessibility constraints materially affect the review of the newly generated 16:9 founder-receipt asset and the duplicate 16:9 small-test assets, especially caption placement, mobile distribution, and prerecorded-media accessibility?

## Findings

TikTok’s current official Auction In-Feed Ads guidance, updated June 2026, accepts horizontal 16:9 non-Spark ads at or above 960×540, while recommending vertical 9:16 at or above 540×960. It states that safe-zone size varies with dimension, ad-caption length, and additional formats, and provides downloadable safe-zone files. Therefore, the 16:9 founder-receipt export is not automatically invalid for TikTok, but its top-aligned captions must be checked against the correct safe-zone file for the intended ad configuration. The current review therefore treats mobile-safe placement as an unresolved platform-profile gate, not as an automatic media hard-fail. [1]

YouTube’s official upload-encoding guidance lists MP4 as a supported container, H.264 as a recommended video codec, and AAC-LC or Opus as supported audio codecs. The inspected founder-receipt file is MP4/H.264/AAC and 1920×1080, and the small-test duplicate set is MP4/H.264/AAC and 1280×720; both are technically compatible with standard widescreen web/YouTube delivery. [2]

The U.S. Section 508 synchronized-media guidance states that prerecorded synchronized media should provide captions, that captions should be synchronized and equivalent to the spoken words and relevant audio information, and that creators should not rely solely on automatic captions for prerecorded media. The inspected assets include baked-in captions that the visual review found aligned with the transcribed narration, but the repository lacks a caption map or approved caption QA artifact. Caption accuracy is therefore observed as strong but not fully evidenced for governance purposes. [3]

WCAG 2.2 is the current W3C Recommendation and applies across desktop and mobile devices. It frames accessibility around perceivable, operable, understandable, and robust content and uses testable success criteria. The reviewer should continue treating caption synchronization, readable text at target output size, and equivalent access to essential audio information as explicit quality gates rather than as aesthetic preferences. [4]

## Review implications

The founder-receipt video is technically strong and its spreadsheet-11pm narrative and visible UI evidence are coherent. It cannot advance to `approved` in the repository because the matching manifest, brief, claim ledger, platform profile, rights record, checksum, and caption QA record are absent. Its 16:9 export is suitable for widescreen web/YouTube, while mobile distribution requires an explicit platform profile and safe-zone validation.

The three small-test copies are byte-identical archive-connectivity tests. Their media quality is acceptable for a product overview, but they are not valid production queue items because they lack production evidence and a Generator acknowledgement. They remain `BLOCKED` as one logical duplicate asset group.

## Sources

[1] [TikTok Auction In-Feed Ads](https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads), accessed 2026-08-19T17:30:05Z. Official guidance lists accepted dimensions, formats, duration, bitrate, and safe-zone behavior.

[2] [YouTube recommended upload encoding settings](https://support.google.com/youtube/answer/1722171?hl=en), accessed 2026-08-19T17:30:05Z. Official guidance lists MP4, H.264, and supported audio codecs.

[3] [Section 508: Video and Other Synchronized Media](https://www.section508.gov/create/synchronized-media/), accessed 2026-08-19T17:30:05Z. Official accessibility guidance covers prerecorded captions, synchronization, equivalence, and the limits of auto-captioning.

[4] [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/), accessed 2026-08-19T17:30:05Z. W3C Recommendation covering accessible web content across devices.

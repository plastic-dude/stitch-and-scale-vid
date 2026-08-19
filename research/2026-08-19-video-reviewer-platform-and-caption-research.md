# Video Reviewer Research — Platform Safety, Captions, and Accessibility

**Research question:** What current platform and accessibility requirements should change the review of a short promotional explainer when the declared platform profile is missing?

**Run timestamp:** 2026-08-19T04:10:00+01:00

## Findings

TikTok’s current in-feed auction guidance states that vertical creative should use a 9:16 aspect ratio and be at least 540×960 pixels; square and horizontal alternatives have separate minimums. TikTok also states that safe-zone dimensions vary by aspect ratio, ad-caption length, and additional formats, and that preview and live rendering may differ by device. The reviewer should therefore require a declared platform profile and an explicit safe-zone check rather than treating a technically valid export as universally ready [1].

TikTok’s current ad-format policy requires standard 9:16, 1:1, or 16:9 video sizes, a duration between 5 and 60 seconds for the cited ad format, intelligible audio, legible high-resolution content, and consistency between the ad, caption, and landing page. It also prohibits unsupported functionality cues and restricts the use of personal or sensitive information. The reviewer should flag an absent platform target, unsupported UI or CTA language, and any unverified product or privacy claim before release [2].

Meta’s current safe-zone guidance says that critical text, logos, and other creative elements must remain inside the safe zone for 9:16 Stories, Reels, and Feed placements because platform UI can crop or cover the edges. It specifically recommends leaving the bottom 40% free of text, logos, and other key creative elements when disclaimers appear in Reels ads. The reviewer should inspect captions and proof at the target mobile size and should not approve a crop simply because it is readable in a desktop player [3].

YouTube’s current help guidance confirms that subtitles and captions broaden access for deaf or hard-of-hearing viewers and viewers who speak another language, and that captions may be added during upload or afterward. The reviewer should verify caption accuracy against the spoken track, record the caption source or version, and treat missing caption evidence as an unresolved release condition when the campaign or platform profile requires captions [4].

## Changed review decision

The current repository contains no production brief, manifest, platform profile, claim ledger, or reviewable asset record. The only accessible MP4 is `small-test.mp4` in the Drive `00-inbox` folder. It is a 103.04-second 1280×720 H.264/AAC test upload, and its filename violates the production filename contract. It is therefore treated as an archive connectivity test and excluded from production scoring. The next reviewer run must require a complete manifest and a declared platform profile before scoring any new asset.

## Sources

[1] [TikTok Auction In-Feed Ads](https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads), last updated June 2026.

[2] [TikTok Ad Format and Functionality Policy](https://ads.tiktok.com/help/article/tiktok-ads-policy-ad-format-and-functionality), last updated April 2026.

[3] [Meta: About text overlays and the safe zone for ads on Facebook and Instagram](https://www.facebook.com/business/help/980593475366490).

[4] [YouTube Help: Add subtitles and captions](https://support.google.com/youtube/answer/2734796?hl=en).

# Platform Matrix — Founder Proof / Handoff State — v001

**Status:** BLOCKED. Planning-only; no rendering, publishing, or upload authorized.

| Platform | Profile | Safe-zone / caption treatment | Proof readability check | Known limitation |
|---|---|---|---|---|
| TikTok In-Feed Ads | 9:16 vertical; current platform profile must be rechecked before release | Keep sender/recipient cards, context, version, required action, open items, rights, access needs, receipt, review, and disposition central; captions stay outside the cards | Test the transfer line and missing-context state on a current mobile crop | Exact current UI overlay and safe-zone coordinates are not verified in pass 173 |
| Instagram Reels | 9:16 vertical | Keep the sender-to-recipient line and key fields away from edges and likely overlays | Verify `RECIPIENT`, `CONTEXT`, `REQUIRED_ACTION`, `OPEN_ITEMS`, and `RECEIPT` at mobile scale | Platform-specific organic safe-zone coordinates are not verified in pass 173 |
| YouTube Shorts | 9:16 vertical | Keep captions and handoff card in a central readable lane; verify current Shorts UI before release | Confirm `RECEIPT: UNVERIFIED` cannot be mistaken for a product read receipt or delivery failure | Current Shorts-specific safe-zone coordinates are not established here |
| Internal review | 9:16 caption-on and caption-free masters | Review sender/recipient relationship, context, required action, open items, rights/access, receipt, review, and disposition against captions and audio | Require Director, claims, rights/privacy, audio, caption, platform, continuity, and product-proof signoff | Internal review cannot substitute for product proof or accessibility testing |

## Platform rejection conditions

Reject the cut if captions cover `HANDOFF`, `SENDER`, `RECIPIENT`, `CONTEXT`, `VERSION`, `REQUIRED_ACTION`, `OPEN_ITEMS`, `RIGHTS`, `ACCESS_NEEDS`, `RECEIPT`, `REVIEWED`, or `DISPOSITION`; if the card implies export workflow, recipient tracking, read receipt, task assignment, ownership transfer, rights enforcement, accessibility conformance, or handoff completion; if the file movement is presented as completed transfer; if an unresolved field is shown as confirmed; if caption-on and caption-free versions diverge; if auto-captions remain unreviewed; if current platform overlays have not been rechecked; or if mobile crop makes recipient context or open items unreadable.

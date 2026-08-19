# Platform Matrix — Founder Proof / Exception State — v001

**Status:** BLOCKED. Planning-only; no rendering, publishing, or upload authorized.

| Platform | Profile | Safe-zone / caption treatment | Proof readability check | Known limitation |
|---|---|---|---|---|
| TikTok In-Feed Ads | 9:16 vertical; current platform profile must be rechecked before release | Keep rule, exception, scope, reason, owner, review/expiry, affected gates, compensating action, status, and disposition central; captions stay outside the card | Test the lifecycle boundary and `HOLD FOR REVIEW` on a current mobile crop | Exact current UI overlay and safe-zone coordinates are not verified in pass 174 |
| Instagram Reels | 9:16 vertical | Keep the exception card away from edges and likely overlays | Verify `SCOPE`, `OWNER`, `EXPIRES_OR_REVIEWED_AT`, `AFFECTED_GATES`, and `DISPOSITION` at mobile scale | Platform-specific organic safe-zone coordinates are not verified in pass 174 |
| YouTube Shorts | 9:16 vertical | Keep captions and lifecycle card in a central readable lane; verify current Shorts UI before release | Confirm `EXPIRES_OR_REVIEWED_AT: UNDEFINED` cannot be mistaken for automated expiry or a product warning | Current Shorts-specific safe-zone coordinates are not established here |
| Internal review | 9:16 caption-on and caption-free masters | Review rule, scope, reason, owner, lifecycle boundary, affected gates, compensating action, status, and disposition against captions and audio | Require Director, claims, rights/privacy, audio, caption, platform, continuity, and product-proof signoff | Internal review cannot substitute for product proof or governance/accessibility evidence |

## Platform rejection conditions

Reject the cut if captions cover `EXCEPTION`, `RULE`, `SCOPE`, `REASON`, `OWNER`, `STARTED_AT`, `EXPIRES_OR_REVIEWED_AT`, `AFFECTED_GATES`, `COMPENSATING_ACTION`, `STATUS`, `REVIEWED`, or `DISPOSITION`; if the card implies exception workflow, waiver, risk acceptance, approval, automated expiry, compliance, accessibility conformance, or governance implementation; if a one-time allowance is presented as permanent approval; if affected human gates are hidden; if caption-on and caption-free versions diverge; if auto-captions remain unreviewed; if current platform overlays have not been rechecked; or if mobile crop makes the lifecycle boundary or review disposition unreadable.

# Platform Matrix — Founder Proof / Interruptibility State — v001

**Status:** BLOCKED. Planning-only; no rendering, publishing, or upload authorized.

| Platform | Profile | Safe-zone / caption treatment | Proof readability check | Known limitation |
|---|---|---|---|---|
| TikTok In-Feed Ads | 9:16 vertical; current platform profile must be rechecked before release | Keep `RUN`, `CURRENT_STEP`, `PAUSE_REQUESTED`, `SAFE_STATE`, saved/unsaved split, review, and disposition central; keep captions out of the card | Test the stopped-but-not-complete transition and `HUMAN REVIEW REQUIRED` on a current mobile crop | Exact current UI overlay and safe-zone coordinates are not verified in pass 168 |
| Instagram Reels | 9:16 vertical | Keep the stop boundary and saved/unsaved split away from edges and likely overlays; review caption-on and caption-free | Verify `SAFE_STATE: UNDEFINED`, `SAVED`, `UNSAVED`, `RESUME_CONDITIONS`, and `DISPOSITION` at mobile scale | Platform-specific organic safe-zone coordinates are not verified in pass 168 |
| YouTube Shorts | 9:16 vertical | Keep captions and workflow fields in a central readable lane; verify current Shorts UI before release | Confirm that `PAUSE_REQUESTED` does not visually read as completion and that the final line survives crop | Current Shorts-specific safe-zone coordinates are not established here |
| Internal review | 9:16 caption-on and caption-free masters | Review all fields against captions, motion, audio, and human-gate boundary | Require Director, claims, rights/privacy, audio, caption, platform, continuity, and product-proof signoff | Internal review cannot substitute for product proof or accessibility conformance testing |

## Platform rejection conditions

Reject the cut if captions cover `RUN`, `CURRENT_STEP`, `PAUSE_REQUESTED`, `SAFE_STATE`, `SAVED`, `UNSAVED`, `RESUME_CONDITIONS`, `OWNER`, `REVIEWED`, or `DISPOSITION`; if the red incomplete state is mistaken for completion; if the stop control resembles current product UI without proof; if the cut implies autosave, rollback, recovery, human override, AI oversight, zero-loss behavior, WCAG conformance, NIST adoption, or a universal workflow guarantee; if caption-on and caption-free versions diverge; if auto-captions remain unreviewed; if the current platform profile has not been rechecked; or if mobile crop makes the saved/unsaved boundary unreadable.

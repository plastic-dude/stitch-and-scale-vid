# Platform Matrix — Founder Proof / Propagation State — v001

**Status:** BLOCKED. Planning-only; no rendering, publishing, or upload authorized.

| Platform | Profile | Safe-zone / caption treatment | Proof readability check | Known limitation |
|---|---|---|---|---|
| TikTok In-Feed Ads | 9:16 vertical; current platform profile must be rechecked before release | Keep source/version, downstream nodes, expected/observed updates, first propagation gap, stale-value note, review, and disposition central; captions stay outside the chain | Test the moving source line and the first unresolved node on a current mobile crop | Exact current UI overlay and safe-zone coordinates are not verified in replacement pass 172 |
| Instagram Reels | 9:16 vertical | Keep the source-to-downstream chain away from edges and likely overlays | Verify `SOURCE`, `VERSION`, `DOWNSTREAM_NODE`, `PROPAGATION_GAP`, and `STALE_VALUE` at mobile scale | Platform-specific organic safe-zone coordinates are not verified in replacement pass 172 |
| YouTube Shorts | 9:16 vertical | Keep captions and chain card in a central readable lane; verify current Shorts UI before release | Confirm `OBSERVED_UPDATE: UNVERIFIED` cannot be mistaken for a real product lineage event or security warning | Current Shorts-specific safe-zone coordinates are not established here |
| Internal review | 9:16 caption-on and caption-free masters | Review source/version, chain, first gap, stale-value note, review, and disposition against captions and audio | Require Director, claims, rights/privacy, audio, caption, platform, continuity, and product-proof signoff | Internal review cannot substitute for product proof or data-integrity/security evidence |

## Platform rejection conditions

Reject the cut if captions cover `CHANGE`, `SOURCE`, `VERSION`, `DOWNSTREAM_NODE`, `EXPECTED_UPDATE`, `OBSERVED_UPDATE`, `PROPAGATION_GAP`, `STALE_VALUE`, `REVIEWED`, or `DISPOSITION`; if the card implies data lineage, provenance, version history, automatic update, stale-value detection, integrity protection, security controls, or product correctness; if the source change is shown without downstream nodes; if the first propagation gap is hidden; if a stale-value possibility is presented as a confirmed failure; if caption-on and caption-free versions diverge; if auto-captions remain unreviewed; if current platform overlays have not been rechecked; or if mobile crop makes the source-to-downstream chain or first gap unreadable.

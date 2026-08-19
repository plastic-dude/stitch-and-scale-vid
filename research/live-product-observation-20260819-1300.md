# Live Product Observation — 2026-08-19 13:00 +01:00

## Scope
Sandbox browser inspection of the public Stitch & Scale application at https://stitch-and-scale-pro-api-server.vercel.app/.

## Observed product truth

The landing screen presents Stitch & Scale as professional knitwear grading software. Visible claims and surfaces include local-first project saving, offline functionality, user ownership/export, publish-ready PDF exports, optional cloud sync, and no-account start. The page also displays a local-storage warning: projects are saved on the device, clearing browser data deletes them, and users should back up anything they cannot afford to lose.

The accessible New Project route is `/project/new`. It shows a three-step drafting flow with project name, designer, and Craft Yarn Council sizing standard. The app header shows “Local only” and “Saved,” and the route exposes Projects, Portfolio, Settings, and New Project navigation. The visible proof at this point is workflow setup and local-first status, not a current cost/yield/price chain, stale-number state change, test-knit roster, or final publication-readiness proof.

## Campaign implication

A privacy-by-default or local-first ownership angle has a current visible proof surface. An honest-price or stale-number brief should remain blocked until a current capture demonstrates the relevant product behavior. This observation does not establish unsupported claims about backups, cloud sync implementation, pricing, accuracy, adoption, or customer outcomes.

## Evidence

Screenshots captured during inspection:

- `/home/ubuntu/screenshots/stitch-and-scale-pro_2026-08-19_13-00-22_2589.webp`
- `/home/ubuntu/screenshots/stitch-and-scale-pro_2026-08-19_13-00-30_8881.webp`

## Decision input

The next distinct campaign can be a standard privacy-by-default / local-first ownership brief, provided it explicitly uses only the observed local-storage warning and visible “Local only” state, includes a backup-risk caveat rather than implying cloud backup exists, and keeps captions away from the proof surface.

## Source

Public application inspected 2026-08-19; observation is a direct product capture, not an inferred feature claim.


## Platform research retrieval note

The official Meta Business Help Center URL `https://www.facebook.com/business/help/980593475366490` resolved to the page titled “About text overlays and the safe zone for ads in Stories and Reels,” confirming the relevant official guidance exists. The sandbox browser could not expose the page body beyond the title/translation shell, so no numeric safe-zone dimensions are asserted from it. The production rule remains conservative: keep captions and proof inside a declared central safe area and verify the final render in the target platform UI.

## Fresh wide research question

**Question:** For a materially distinct local-first vertical campaign, what current platform guidance should govern captions, overlays, and accessibility without obscuring product proof?

### Findings

YouTube’s official help explains that subtitles and captions broaden access for deaf or hard-of-hearing viewers and viewers who speak another language, and supports adding captions during upload or through YouTube Studio. The production implication is to maintain a caption track and a caption-on review, while preserving a clean proof view for the product capture. Source: https://support.google.com/youtube/answer/2734796?hl=en.

Instagram’s official creator guidance says its editing tools expose safe zones so text is not cut off by Instagram’s interface, and it recommends reviewing the edit with text and music before export. The production implication is to keep all burned-in captions and post graphics inside a declared central safe region and to review the exported cut in the target interface, not merely on the editing canvas. Source: https://creators.instagram.com/blog/beginner-video-editing-guide/.

Meta’s official help page is titled “About text overlays and the safe zone for ads in Stories and Reels,” but the available public extraction exposed only the login/translation shell. No numeric Meta safe-zone dimensions are asserted here. Source: https://www.facebook.com/business/help/980593475366490.

### Reconciled decision

The product inspection exposes a current, honest local-first proof surface: the visible “Local only” state, the local-storage notice, and the explicit warning that clearing browser data deletes projects. That supports a privacy-by-default / local-ownership campaign. It does not support an honest-price or stale-number campaign because no current cost/yield/price chain or input-change/derived-value capture was observed. The campaign must therefore use the local-first angle, with the backup caveat stated plainly and no claim that cloud sync or recovery is already available.

### Changed decision

The prior Generator queue is no longer awaiting acknowledgement: DIR-001 has a Drive asset and is in `director-review` pending Reviewer score. No open `REMAKE_REQUIRED` order exists. The publication-readiness pair remains blocked by current-proof and rights gates. This run will create one new standard vertical brief for the distinct `privacy-by-default` angle rather than another spreadsheet-labor brief or a repeat blocked contract.

### Uncertainty and guardrails

The live inspection is a public unauthenticated view and only covers the landing and new-project setup surfaces. It does not verify every downstream grading, PDF, or backup behavior. The brief must quote only the observed local-first state and warning, mark deeper behaviors as unverified, and require a current screen capture before generation. Captions must be a separate track or restrained lower-third inside the central safe region; no caption or generated callout may cover the “Local only” indicator, warning text, buttons, or form fields.


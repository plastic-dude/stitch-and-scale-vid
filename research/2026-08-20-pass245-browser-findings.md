# Pass 245 Wide Research — Revisitability State

**Research date:** 2026-08-20  
**Director pass:** 245  
**Fresh question:** **When a designer returns to a saved decision later, what minimum context must still be present for the decision to be understandable, challengeable, and safe to reuse?**

## Campaign assumption

No active brief was present at refresh. This pass assumes the standing campaign objective remains founding-tester recruitment through the free demo and early-access cohort. The audience is independent knitwear designers and pattern publishers managing design notes, grading, charts, schematics, samples, business records, technical editing, testing, and publication preparation. The proposed form is a 35–45 second organic 9:16 founder-proof short for Instagram Reels, TikTok, and YouTube Shorts. Tone is first-person, quiet, specific, dry, and craft-respectful. Brief tier is a standard single-original-video planning package, blocked pending proof.

## Evidence gathered

### 1. A decision without context decays into a label

Microsoft’s current Architecture Decision Record guidance defines an ADR as a record of how and why a system came to its current shape. It recommends keeping context, alternatives, decision outcome, tradeoffs, confidence, status, and consequences together; maintaining an append-only history; linking a changed decision to the prior record; and avoiding a record that hides consequences or omits rationale.[1] This is software-architecture guidance, not evidence about Stitch & Scale, but it gives a precise, transferable boundary for revisitable decisions: a label such as `accepted` or `changed` is not the same as preserving why the decision made sense and when it should be reconsidered.

The same guidance says that a decision made but never recorded is likely to be forgotten and can lead to repeated debate or later changes that unknowingly contradict the original intent.[1] The pass therefore focuses on the future-reader problem, not generic note taking and not automatic decision generation.

### 2. Knitwear design is a chain of notes, transformations, and human checks

The Craft Yarn Council’s pattern-writing guidance describes a pattern as a roadmap and distinguishes written instructions, charts, graphs, schematics, sketching, math, contemporaneous row/round notes, transcription, standards, technical editing, and testing.[2] It tells designers to record what they did immediately rather than reconstructing it later, then clean the notes up before publication. Testers are asked to check clear directions, matching abbreviations/symbols/charts, comprehensive materials and yarn amounts, and finished appearance.[2]

Knitty’s June 17, 2026 submission guidance makes the context problem concrete: it requires a complete submission with a text-only pattern, separate images, charts where needed, schematics, size and measurement conventions, a signed originality statement, and specific rights conditions. It distinguishes the designer’s work from technical editing and says test knitting is optional and separate from the publication decision.[3] A preserved decision note cannot prove the math, technical edit, chart readability, schematic scale, physical print review, or test-knit result; it can only preserve the reasoning and boundary around those gates.

### 3. Current category tools foreground output, access, and markup rather than decision rationale

EnvisioKnit documents chart creation, automatic written instructions, layout, preview, and export formats.[4] knitCompanion documents project/PDF access, annotations, local and cloud locations, offline availability after synchronization, backup options, and cautions about deletion and duplicate files.[5] These official product pages show category expectations around outputs, access, and working marks. They do not prove that either competitor or Stitch & Scale preserves a structured rationale, confidence level, alternative considered, source, or reopen-trigger next to a design decision. The competitive opportunity is therefore an evidence question about revisitability, not a comparative superiority claim.

### 4. Accessibility and platform constraints affect future-readable proof

W3C’s WCAG 2.1 guidance says prerecorded synchronized media should provide captions, including dialogue, speaker identification, and meaningful non-speech audio, and says captions should not obscure relevant information.[6] YouTube’s current help documentation supports adding subtitles and captions during or after upload.[7] Meta’s safe-zone guidance says important text and logos should remain away from interface-covered edges; TikTok’s June 2026 in-feed specification recommends 9:16 at 540×960 or higher and says safe-zone size varies with dimensions and caption length.[8] [9] The concept therefore uses a single readable context card per shot, conservative safe zones, one narrator family, and caption-on plus caption-free review. These rules constrain the proof layout but do not prove product accessibility or platform acceptance.

### 5. Seasonal and cultural context is useful but not a campaign authorization

Knitty’s current page is soliciting Winter 2026 work for an issue going live in December 2026, with a September 15, 2026 submission deadline and specific cold-weather/gift-knit themes.[3] This confirms that late-August craft work can sit near a real seasonal publication cycle, but it does not establish that Stitch & Scale is connected to Knitty, that its audience is preparing that issue, or that a deadline should be used in promotion. The package adopts the broader cultural context of preserving handmade knowledge across revisions and handoffs, without borrowing Knitty’s deadline, themes, rights, or urgency.

No other event hook was adopted. Current search results surfaced regional fiber events, but none was verified as relevant to the project’s geography, audience, rights, or campaign calendar. The short remains evergreen.

## Audience pain and visual opportunity

The audience pain is **context debt**: a designer can remember that a choice was made while no longer remembering the source, alternative, assumption, scope, confidence, affected size or representation, or condition that would cause the decision to be reopened. This is a workflow hypothesis, not a prevalence or conversion claim. The visual opportunity is a fictional paper card that starts with a bold decision label, then reveals blank fields behind it: `WHY`, `ALTERNATIVES`, `ASSUMPTION`, `SCOPE`, `CONFIDENCE`, `REOPEN IF`. The card is always labeled `ILLUSTRATIVE — NOT PRODUCT UI`.

The dramatic contradiction is: **the shorter the record, the easier it may be to read today and the harder it may be to trust later**. The emotional turn is from embarrassment about “old notes” to relief through a small, explicit revisit trail.

## Product truth and rights reconciliation

The repository contains no current product-proof registry entry or approved non-private capture verifying a Stitch & Scale decision-rationale, context, confidence, alternative, supersession, or reopen-trigger surface. No generated card may be shown as current UI. No claim may be made that Stitch & Scale automatically records rationale, detects stale assumptions, recommends reconsideration, or protects against contradictory decisions.

The README says the video repository stores decision records and that full-resolution video remains outside Git; it does not prove the product surface described by this concept. No external media, pattern files, customer records, private notes, or third-party imagery are approved. Rights are unverified. Any future capture must provide product version/date, exact labels, capture owner, privacy treatment, destination, and rights/credit data.

## Research-derived decision

Research changed the concept from generic “keep better notes” to the narrower angle `revisitability-state`: **what context must travel with a decision so a future designer can understand when it still applies and what would reopen it?** The hook becomes **“If future-you cannot tell why, the decision is not finished.”** The visual metaphor becomes a bold decision card with missing context fields rather than the saved-copy versus restore split in pass 244. The proof surface becomes `DECISION / WHY / SOURCE / ALTERNATIVES / ASSUMPTION / SCOPE / CONFIDENCE / REOPEN IF / STATUS`. The emotional turn becomes relief through a compact, explicit revisit trail. The final line becomes **“Leave future-you a reason, not just a result.”**

The nearest prior is pass 244 `restore-boundary-state`. Pass 244 asked whether a saved copy can be returned as the intended usable project. Pass 245 asks whether a decision inside a project remains understandable and challengeable after time, revision, or handoff. It is not a backup, restore, review question, observation state, inspection scope, decision basis, rationale state, record purpose, or status state rename. The new slug was checked against all 255 occupied angle rows and is unoccupied.

## Uncertainty and limits

Microsoft ADR guidance is an engineering documentation model, not evidence about independent knitwear designers. CYC and Knitty describe craft workflows and publication boundaries, not the prevalence of context loss or the commercial effect of better records. Competitor pages document their own stated features and do not establish comparative reliability or the absence of rationale features. Platform rules cited here are primarily advertising or help guidance, and organic behavior may differ. No user interviews, analytics, product capture, proof registry, restore test, usability study, or rights clearance was available. The angle must remain blocked.

## Decision and next action

**Decision:** create a planning-only blocked package for `revisitability-state`; reserve a unique filename but do not generate or upload.

**Next action:** Product owner must provide one current, versioned, approved, non-private proof-registry entry or rights-cleared capture showing the exact Stitch & Scale decision-context surface, including visible labels for rationale/source/alternatives/assumption/scope/confidence/reopen condition, plus destination and privacy metadata. Then rerun Director claim, asset, rights, caption, audio, platform, and acceptance validation before any Generator authorization.

## References

[1]: https://learn.microsoft.com/en-us/azure/well-architected/architect-role/architecture-decision-record "Microsoft Learn, Maintain an architecture decision record"
[2]: https://www.craftyarncouncil.com/blog/ydkwydk-how-write-your-own-pattern "Craft Yarn Council, How To Write A Pattern"
[3]: https://knitty.com/subguide.php "Knitty, Design or Write For Knitty, last update June 17, 2026"
[4]: https://www.envisioknit.com/ "EnvisioKnit Design Studio"
[5]: https://www.knitcompanion.com/ "knitCompanion"
[6]: https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html "W3C WAI, Understanding Captions (Prerecorded), WCAG 2.1"
[7]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help, Add subtitles & captions"
[8]: https://www.facebook.com/business/help/980593475366490?id=1240182842783684 "Meta Business Help Center, About text overlays and the safe zone for ads in Stories and Reels"
[9]: https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads "TikTok for Business, TikTok Auction In-Feed Ads, last updated June 2026"

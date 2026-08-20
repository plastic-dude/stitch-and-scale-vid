# Pass 254 Wide Research — Dependency Disclosure State

**Research date:** 2026-08-20  
**Director pass:** 254  
**Fresh question:** **When a knitwear pattern relies on a chart, schematic, video, linked resource, or separate file, what must be named, versioned, and checked before a maker can rely on that dependency?**

## Campaign assumption

No active brief was present at refresh. This pass assumes the standing campaign objective remains founding-tester recruitment through the free demo and early-access cohort. The audience is independent knitwear designers and pattern publishers managing pattern instructions, charts, schematics, support files, video links, sizing, technical editing, test knitting, samples, and publication preparation. The proposed form is a 35–45 second organic 9:16 founder-proof short for Instagram Reels, TikTok, and YouTube Shorts. Tone is first-person, quiet, specific, dry, craft-respectful, and suspicious of hidden dependencies. Brief tier is a standard single-original-video package, blocked pending proof.

## Evidence gathered

### 1. A pattern can rely on an instruction language that is not self-contained

The Craft Yarn Council’s current guide to reading knitting patterns explains that knitting uses a special language of abbreviations and terms. It states that designers may assume some prerequisite knowledge, defines terms such as `CO`, `BO`, `inc`, `dec`, `rep`, and `YO`, and explains that a phrase such as “maintain pattern as established” depends on the reader understanding the pattern already in progress.[1] The same guide explains that a pattern may use asterisks, brackets, and parentheses as repeat operators, and that instructions such as “work same as left piece, reversing shaping” require the maker to reconstruct a prior piece and reverse it.[1]

This makes dependency disclosure concrete: a dependent instruction should identify the prerequisite source, the exact section or object it relies on, the scope in which it applies, and the human review still required. The source does not define a universal dependency schema and does not prove any Stitch & Scale dependency feature.

### 2. Charts have keys and local variations that must stay attached

The Craft Yarn Council’s current knit-chart-symbols page says stitch charts are used in addition to or instead of words, that there are many symbol variations, and that makers should always refer to the pattern key for variations. It gives standardized examples but explicitly notes that special symbols can be project-specific.[2]

A chart therefore is not a detached image. A usable dependency record should preserve `CHART_ID`, `PATTERN_VERSION`, `KEY_REFERENCE`, `SYMBOL_VARIANT`, `ROW_OR_SECTION_SCOPE`, `SOURCE_LOCATION`, and `REVIEW_STATUS`. A record that says only “chart attached” would not prove that the chart key, symbols, rows, and written instructions remain connected.

### 3. Support materials can be separate resources with their own purpose

Quince & Co.’s current pattern guide calls the pattern a roadmap and says makers should review materials, gauge, notes, repeats, abbreviations, size, and additional support materials before starting. It says support can include schematics, video links, and progress photos, and describes those resources as useful for patterns with multiple pieces or complex construction.[3]

The competitor reference demonstrates a real reader workflow around supplemental material, but it does not prove a Stitch & Scale resource-dependency record, link health state, versioned support file, or automatic warning. Research changed the visual opportunity toward a dependency card with one named resource and one explicit purpose rather than a generic “attachments” pile.

### 4. Link purpose is part of accessible navigation, not a decorative label

W3C’s current WCAG 2.2 Link Purpose guidance says users should be able to determine what each link will do from the link text alone or from its programmatically determined context. It explains that descriptive link purpose helps people with visual and cognitive disabilities decide whether to follow a link, and that links to alternate versions should indicate that purpose.[4]

This gives the concept a separate accessibility boundary: `LINK_LABEL`, `DESTINATION_PURPOSE`, and `ALTERNATE_VERSION` are not merely metadata fields. A dependency record should tell a maker whether a link opens a chart key, a video demonstration, a schematic, an alternate-language version, or a downloadable file. Link purpose evidence is not the same as verifying that the destination is current, complete, rights-cleared, or technically consistent.

### 5. Platform and caption practice require dependency proof to remain readable

W3C’s prerecorded-caption guidance says synchronized captions should include dialogue, speaker identification, and meaningful non-speech audio without obscuring relevant information.[5] YouTube documents adding subtitles and captions during or after upload.[6] Meta’s current safe-zone guidance keeps important creative away from interface-covered edges, and TikTok’s June 2026 in-feed specification recommends vertical 9:16 at 540×960 or higher and says safe-zone size varies with caption length.[7] [8]

The planned short will show one dependency at a time: `RESOURCE`, `PURPOSE`, `VERSION`, `SOURCE`, `SCOPE`, `LAST CHECK`, and `STATUS: HUMAN REVIEW`. Captions will stay outside the card and will not attempt to reproduce a dense table or a real URL. One narrator family is declared, and caption-on plus caption-free reviews remain mandatory.

## Audience pain and visual opportunity

The audience pain is **hidden dependency debt**: a pattern can appear complete while a chart key, schematic, video, linked alternate version, or separate file is missing, ambiguous, outdated, inaccessible, or detached from the exact version and scope that use it. This is a workflow hypothesis grounded in CYC’s chart-key and assumed-knowledge guidance, Quince & Co.’s support-material guidance, and W3C’s link-purpose guidance. It is not a prevalence claim and not a claim that a Stitch & Scale user experienced a broken dependency.

The visual opportunity is a fictional `DEPENDENCY CHECK` card with fields `PATTERN VERSION`, `RESOURCE`, `PURPOSE`, `SOURCE`, `SCOPE`, `LAST CHECK`, `ACCESS`, and `STATUS: HUMAN REVIEW`. A second strip reads `ATTACHED ≠ EXPLAINED`. Every card carries `ILLUSTRATIVE — NOT PRODUCT UI`.

The dramatic contradiction is: **a support file can exist and still be unusable if its purpose, scope, version, access, or relationship to the pattern is not named.** The emotional turn is from an attachment-looking-complete to a named dependency boundary.

## Product truth and rights reconciliation

The repository contains no current product-proof registry entry or approved non-private capture verifying a Stitch & Scale dependency-disclosure surface, resource-purpose field, chart-key relation, source location, scope, version, last-check state, link-purpose label, alternate-version relation, access state, or human dependency review. No generated card may be presented as current product UI. No claim may be made that Stitch & Scale automatically detects missing links, verifies resource freshness, checks chart-key consistency, repairs dependencies, validates accessibility, or approves pattern completeness.

No external media, real pattern file, private chart, schematic, customer record, video link, tester identity, support screenshot, or third-party imagery is approved. Rights and privacy are unverified. Any future product capture must provide product version/date, exact visible labels, capture owner, privacy treatment, destination, and rights/credit data. Illustrative cards may show category labels but not real pattern text, URLs, chart symbols, measurements, or product controls.

## Research-derived decision

Research changed the concept from pass 253’s cross-locale parity boundary to `dependency-disclosure-state`: **show that a support resource must be named by purpose, version, scope, source, access, and last check before a maker can rely on it, while refusing to turn an attachment or link into an automatic completeness or accessibility verdict**. The hook becomes **“A file can be attached and still not tell you what it is for.”** The visual metaphor becomes a dependency card with a single resource and its relationship to the pattern rather than a source/target language card. The proof surface becomes `PATTERN_VERSION / RESOURCE / PURPOSE / SOURCE / SCOPE / LAST_CHECK / LINK_LABEL / ACCESS / ALTERNATE_VERSION / HUMAN_DEPENDENCY_REVIEW / STATUS`. The emotional turn is attachment-looking-complete replaced by a named dependency boundary. The final line becomes **“Name what the pattern depends on before you trust the link.”**

The nearest prior is pass 253 `locale-alignment-state`. Pass 253 asked how a localized version should preserve technical relationships across languages. Pass 254 asks how a pattern should disclose a supporting resource or external dependency. It is not a rename of `dependency-state`, `support-boundary`, `cross-reference-state`, `provenance-chain`, `evidence-chain-state`, `prerequisite-state`, `input-state`, `locale-alignment-state`, `version-delta-state`, `maker-entry-state`, `false-completion`, or `release-gate-roster`. It has no automatic link checking, chart synchronization, missing-resource detection, accessibility conformance, or release approval surface. The slug was checked against all 264 occupied angle rows and was unoccupied before reservation.

## Cultural, seasonal, and event context

The cultural framing is respect for the informal teaching and support network around craft patterns: a chart key, video, schematic, alternate-language version, or progress image may be valuable to a maker, but its value depends on clear purpose, context, access, and attribution. The plan must not imply that all makers need the same support or that one resource format serves every community.

No current event or seasonal hook was verified as relevant enough to drive the concept. No deadline, partnership, publication selection, payment, rights, or urgency claim is adopted. The concept remains evergreen.

## Uncertainty and limits

CYC explains assumed knowledge, abbreviations, repeat syntax, and chart-key variation, but it does not define a software dependency model. Quince & Co. gives one publisher’s reader-facing support-material practice, not a link-health or version-control standard. W3C Link Purpose concerns accessible link naming and context; it does not certify an external resource’s accuracy, freshness, rights, or technical compatibility. Platform rules cited here are primarily help or advertising guidance, and organic behavior may differ. No user interviews, analytics, product capture, proof-registry entry, link-health report, translation review, technical-editing review, test-knit report, privacy clearance, or rights clearance was available.

## Decision and next action

**Decision:** create a planning-only blocked package for `dependency-disclosure-state`; reserve the unique filename but do not generate or upload.

**Next action:** Product owner must provide one current, versioned, approved, non-private proof-registry entry or rights-cleared capture showing the exact dependency surface, including pattern version, resource, purpose, source, scope, last check, link label, access state, alternate-version relation, human dependency review, status, capture owner, privacy treatment, destination, and rights/credit. Then rerun Director claim, asset, rights, caption, audio, platform, and acceptance validation before any Generator authorization.

## References

[1]: https://www.craftyarncouncil.com/standards/how-to-read-knitting-pattern "Craft Yarn Council, How to Read a Knitting Pattern"
[2]: https://www.craftyarncouncil.com/standards/knit-chart-symbols "Craft Yarn Council, Knit Chart Symbols"
[3]: https://quinceandco.com/blogs/news/tip-tuesday-how-to-decode-a-knitting-pattern "Quince & Co., Tip Tuesday: How-To Decode a Knitting Pattern"
[4]: https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html "W3C WAI, Understanding Success Criterion 2.4.4: Link Purpose (In Context)"
[5]: https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html "W3C WAI, Understanding Captions (Prerecorded), WCAG 2.1"
[6]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help, Add subtitles & captions"
[7]: https://www.facebook.com/business/help/980593475366490?id=1240182842783684 "Meta Business Help Center, About text overlays and the safe zone for ads in Stories and Reels"
[8]: https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads "TikTok for Business, TikTok Auction In-Feed Ads, last updated June 2026"

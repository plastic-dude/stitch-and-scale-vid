# Pass 247 Wide Research — Derived Freshness State

**Research date:** 2026-08-20  
**Director pass:** 247  
**Fresh question:** **When a source measurement, gauge, or design choice changes, which derived values must be recomputed before a multi-size pattern can be trusted?**

## Campaign assumption

No active brief was present at refresh. This pass assumes the standing campaign objective remains founding-tester recruitment through the free demo and early-access cohort. The audience is independent knitwear designers and pattern publishers managing body measurements, ease, gauge, grading, stitch and row counts, yardage, charts, schematics, samples, technical editing, test knitting, and publication preparation. The proposed form is a 35–45 second organic 9:16 founder-proof short for Instagram Reels, TikTok, and YouTube Shorts. Tone is first-person, quiet, specific, dry, craft-respectful, and suspicious of false certainty. Brief tier is a standard single-original-video package, blocked pending proof.

## Evidence gathered

### 1. A source value and a derived value are not the same record

The Craft Yarn Council’s current body-sizing guidance distinguishes body measurements from finished-garment measurements and ease. It says patterns often provide chest or bust information and may include schematics with measurements for different pattern sizes. It also notes that fit and length charts are guidelines and that changes can affect the appearance of a garment.[1] The practical implication is that a change to a source measurement, ease decision, or gauge assumption can affect downstream values; the source does not prescribe an automated recomputation workflow.

The Craft Yarn Council’s pattern-writing guidance says knit and crochet pattern creation involves math, contemporaneous notes, transcription, standards, charts, schematics, technical editing, and testing. It recommends recording what was done as it happens and checking whether directions, abbreviations, symbols, charts, materials, yarn quantities, and finished appearance agree.[2] This supports a concrete human question: **which downstream values were recalculated, and which were merely carried forward?**

TKGA’s current Professional Knitwear Designer Certification page explicitly groups gauge, grading, calculating yardage, spreadsheets, shaping, allowances, formulas, charting, pattern writing, technical editors, test knits, and layout within the design workflow, and separately covers pricing, accounting, contracts, rights, customer relations, and what to do when things go wrong.[3] This is a training curriculum rather than a neutral industry survey, but it confirms that sizing and derived-value work spans multiple connected artifacts.

Knitty’s current June 17, 2026 submission guidance requires a complete design, pattern text, charts where needed, schematics, accurate sizing conventions, clear photography, and a pattern whose math and instructions produce the intended design. It distinguishes technical editing from test knitting and publication selection.[4] It provides publication-specific requirements, not evidence that Stitch & Scale recalculates any value.

### 2. Data-freshness language offers a useful analogy, not a product claim

Google Cloud Dataflow’s current execution-details documentation defines data freshness for streaming jobs as the difference between a data element’s timestamp and the time when it is processed. It uses freshness visualizations and anomalies to identify lagging or stuck stages.[5] That is a pipeline-monitoring concept, not knitwear software. The safe creative transfer is narrower: a derived value can carry an older source timestamp than the source that should govern it, and a reviewer needs to know whether it is current, stale, or unresolved. The video must not claim that Stitch & Scale calculates freshness, detects stale values, or automatically recomputes anything.

### 3. The category opportunity is traceability, not magical automation

EnvisioKnit documents chart creation, generated written instructions, layout, preview, and export formats.[6] knitCompanion documents project/PDF access, annotations, local/cloud locations, offline availability after synchronization, backup options, deletion warnings, and conflict risks.[7] These official pages show category expectations around outputs and project handling. They do not prove source-to-derived lineage, recalculation status, stale-value detection, or Stitch & Scale capability. The competitive weakness used here is therefore a missing-evidence question, not a comparative superiority claim.

### 4. Accessibility and platform constraints affect the derived-value proof sequence

W3C’s WCAG 2.1 guidance says prerecorded synchronized media should provide captions containing dialogue, speaker identification, and meaningful non-speech audio, and says captions should not obscure relevant information.[8] YouTube documents adding subtitles and captions during or after upload.[9] Meta’s current safe-zone guidance says key text and logos should remain away from interface-covered edges; TikTok’s June 2026 in-feed specification recommends 9:16 at 540×960 or higher and says safe-zone size varies with dimensions and caption length.[10] [11]

The planned sequence therefore shows one source-to-derived relationship per shot, uses a conservative central safe zone, declares one narrator family, and requires caption-on plus caption-free review. No dense grading table will be shown as a single unreadable frame. These constraints improve proof readability but do not prove product accessibility or platform acceptance.

### 5. Cultural, seasonal, and event context is bounded

The cultural context is the care involved in making a pattern that works across bodies, sizes, gauges, and representations. The framing must not imply one universal body, one correct fit, or that a spreadsheet can replace lived fit review. Knitty’s current page places Winter 2026 submissions near a September 15, 2026 deadline and a December 2026 issue.[4] This is real seasonal publication context, but Stitch & Scale has no verified connection to Knitty and no permission to borrow its deadline, themes, payment, rights, or urgency. No event hook is adopted. The concept remains evergreen.

## Audience pain and visual opportunity

The audience pain is **derived-value staleness**: a source measurement or gauge changes while a stitch count, row count, yardage, schematic label, or related record still looks finished because it has not been visibly rechecked. This is a workflow hypothesis, not a prevalence claim and not a prediction of product behavior.

The visual opportunity is a fictional two-column paper card. The left side reads `SOURCE: GAUGE / BODY MEASUREMENT / EASE`; the right side reads `DERIVED: STITCHES / ROWS / YARDAGE / SCHEMATIC`; a pencil draws an arrow and stops at `RECOMPUTE CHECK: UNRESOLVED`. The card is labeled `ILLUSTRATIVE — NOT PRODUCT UI` and contains no real numbers. The dramatic contradiction is: **a changed source can leave a clean-looking downstream value behind**.

## Product truth and rights reconciliation

The repository contains no current product-proof registry entry or approved non-private capture verifying a Stitch & Scale source/derived lineage surface, stale-value indicator, recomputation state, dependency map, grading recalculation, or freshness timestamp. No generated card may be shown as current product UI. No claim may be made that Stitch & Scale automatically detects stale derived values, recomputes stitch/row/yardage outputs, validates grading, or certifies fit.

No external media, pattern files, customer records, private notes, invoices, charts, schematics, or third-party imagery are approved. Rights are unverified. Any future product capture must provide product version/date, exact visible labels, capture owner, privacy treatment, destination, and rights/credit data. Illustrative cards may show field names but not real counts, measurements, formulas, charts, or product controls.

## Research-derived decision

Research changed the concept from a generic grading or math story to the narrower angle `derived-freshness-state`: **show the boundary between a changed source and a downstream value that still needs a human recomputation check**. The hook becomes **“A changed source can leave a clean-looking value behind.”** The visual metaphor becomes a two-column source/derived card with a stopped arrow rather than the work-category receipt in pass 246. The proof surface becomes `SOURCE / SOURCE_VERSION / DERIVED_VALUE / DEPENDS_ON / LAST_CHECK / RECOMPUTE_STATUS / REVIEWER / LIMIT`. The emotional turn is from false reassurance to a small, honest recalculation question. The final line becomes **“Trace the source before you trust the result.”**

The nearest prior is pass 246 `labor-visibility-state`. Pass 246 asked which human work categories disappear behind a finished-looking pattern output. Pass 247 asks whether a downstream value is still current after an upstream source changes. It is not a rename of `grading`, `gauge`, `derived-value`, `source-note`, `revisitability-state`, `labor-visibility-state`, `restore-boundary-state`, or any prior evidence-state concept. The slug was checked against all 257 occupied angle rows and was unoccupied before reservation.

## Uncertainty and limits

CYC and TKGA describe sizing, grading, gauge, math, and publication workflows but do not establish typical error rates, prevalence, or the existence of any Stitch & Scale recomputation feature. Knitty’s requirements are publication-specific. Google Dataflow’s freshness definition is a technical analogy, not craft-software evidence. Competitor pages state their own features and do not establish comparative weakness or Stitch & Scale behavior. Platform rules cited here are primarily advertising or help guidance, and organic behavior may differ. No user interviews, analytics, product capture, proof-registry entry, recomputation test, grading audit, usability study, or rights clearance was available.

## Decision and next action

**Decision:** create a planning-only blocked package for `derived-freshness-state`; reserve the unique filename but do not generate or upload.

**Next action:** Product owner must provide one current, versioned, approved, non-private proof-registry entry or rights-cleared capture showing the exact source/derived lineage surface, including visible source and derived labels, dependency relationship, source version/date, last-check or recomputation status, reviewer/limit fields, capture owner, privacy treatment, destination, and rights/credit. Then rerun Director claim, asset, rights, caption, audio, platform, and acceptance validation before any Generator authorization.

## References

[1]: https://www.craftyarncouncil.com/standards/body-sizing "Craft Yarn Council, Standard Body Measurements/Sizing"
[2]: https://www.craftyarncouncil.com/blog/ydkwydk-how-write-your-own-pattern "Craft Yarn Council, How To Write A Pattern"
[3]: https://tkga.org/knitwear-designer-certification/ "The Knitting Guild Association, Professional Knitwear Designer Certification"
[4]: https://knitty.com/subguide.php "Knitty, Design or Write For Knitty, last update June 17, 2026"
[5]: https://cloud.google.com/dataflow/docs/concepts/execution-details "Google Cloud Dataflow, Execution details"
[6]: https://www.envisioknit.com/ "EnvisioKnit Design Studio"
[7]: https://www.knitcompanion.com/ "knitCompanion"
[8]: https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html "W3C WAI, Understanding Captions (Prerecorded), WCAG 2.1"
[9]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help, Add subtitles & captions"
[10]: https://www.facebook.com/business/help/980593475366490?id=1240182842783684 "Meta Business Help Center, About text overlays and the safe zone for ads in Stories and Reels"
[11]: https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads "TikTok for Business, TikTok Auction In-Feed Ads, last updated June 2026"

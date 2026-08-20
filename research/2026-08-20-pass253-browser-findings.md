# Pass 253 Wide Research — Locale Alignment State

**Research date:** 2026-08-20  
**Director pass:** 253  
**Fresh question:** **When the same knitwear pattern crosses locales, what must remain aligned—terminology, abbreviations, units, numbers, charts, schematics, and scope—and how can a parity record remain separate from an automatic translation or publication verdict?**

## Campaign assumption

No active brief was present at refresh. This pass assumes the standing campaign objective remains founding-tester recruitment through the free demo and early-access cohort. The audience is independent knitwear designers and pattern publishers managing multilingual pattern text, abbreviations, charts, schematics, sizing, units, technical editing, test knitting, samples, and publication preparation. The proposed form is a 35–45 second organic 9:16 founder-proof short for Instagram Reels, TikTok, and YouTube Shorts. Tone is first-person, quiet, specific, dry, craft-respectful, and suspicious of silent language drift. Brief tier is a standard single-original-video package, blocked pending proof.

## Evidence gathered

### 1. Knitting terminology is a technical system, not ordinary prose

The Craft Yarn Council’s current knitting-abbreviations page lists common abbreviations and says designers and publishers may use special abbreviations that are defined at the beginning of a book or pattern. It states that the definitions reflect U.S. knitting terminology.[1] The same page lists terms and common measurements, including inches, centimeters, grams, meters, millimeters, ounces, and yards, and shows U.S./Canada differences such as `bind off` versus `cast off`, `gauge` versus `tension`, and `slip stitch` versus `ss`.[1]

This makes the parity question concrete: **a localized pattern should preserve the relationship among the source term, the target term, the abbreviation, its definition, the unit display, and the chart or schematic that depends on it.** A translated word alone is not enough. The source does not define a universal multilingual schema or prove a Stitch & Scale translation surface.

### 2. Pattern readers need a whole-system cross-check

Quince & Co.’s current pattern guide calls a pattern a roadmap and says makers should inspect the materials list, gauge, notes, repeats, abbreviations, support materials, size, and the complete pattern before starting.[2] It explains that repeats can be expressed through brackets, parentheses, or asterisks, that notes can contain construction information, and that support materials can include schematics, video links, and progress photos.[2]

The guide also warns that sizing can vary between patterns and that the maker should compare body measurements with the pattern’s size guide; the choice can affect yarn quantity.[2] This supports a parity surface that includes `SOURCE_TERM`, `TARGET_TERM`, `ABBREVIATION`, `DEFINITION`, `UNIT`, `CHART_OR_SCHEMATIC_REFERENCE`, `AFFECTED_SIZE`, and `REVIEW_STATUS`. It does not establish automatic translation, semantic equivalence, or a release-ready state.

### 3. Accessibility requires language changes to be identifiable

W3C’s current WCAG 2.2 Language of Parts guidance says the human language of each passage or phrase should be programmatically determinable, except for defined exceptions. It explains that screen readers, braille displays, and other assistive technologies need language changes identified so pronunciation, braille translation, and presentation rules can be applied correctly.[3] It also notes that technical terms may remain universal across languages and that borrowed words may not require a language switch in every context.[3]

This creates a useful distinction for the video: `TRANSLATED` is not the same as `LANGUAGE-IDENTIFIED`, and `LANGUAGE-IDENTIFIED` is not the same as `SEMANTICALLY REVIEWED`. The planned proof card therefore uses separate fields for source language, target language, term/abbreviation, unit, chart or schematic reference, and human parity review. It makes no accessibility-conformance claim about Stitch & Scale.

### 4. Competitor context is category evidence, not Stitch & Scale proof

Quince & Co. is used here as a pattern-publisher reference for the categories a reader may need to cross-check: materials, gauge, notes, repeats, abbreviations, support materials, sizing, units, and a complete read-through.[2] Its guide demonstrates a reader-facing pattern workflow, not a locale-parity database, automatic translation, unit conversion, chart synchronization, or Stitch & Scale capability. The competitor evidence changed the visual opportunity toward a compact parity card rather than a generic language toggle.

### 5. Translation parity is not an automatic publication verdict

Craft Yarn Council’s abbreviation list is normative only for the terminology it documents and explicitly allows pattern-specific definitions.[1] Quince & Co. shows that notes, repeats, abbreviations, support files, sizes, and units work together as a pattern system rather than isolated strings.[2] The current Knitty submission page could not be retrieved during this pass because the source returned a database connection error; no claim from that page is treated as fresh evidence here. This uncertainty reinforces the stop condition rather than authorizing a publication claim.

A locale-parity record can therefore say `SOURCE_PRESENT`, `TARGET_PRESENT`, `TERM_ALIGNED`, `ABBREVIATION_DEFINED`, `UNIT_REVIEWED`, `CHART_REFERENCE_MATCHED`, and `HUMAN_REVIEW_REQUIRED` without saying `TRANSLATION_CORRECT`, `ALL_LOCALES_APPROVED`, `ACCESSIBLE`, or `READY_TO_PUBLISH`. Technical editing, physical print review, chart readability, schematic scale, and test knitting remain separate human gates.

### 5. Platform and caption practice require language-aware proof

W3C’s prerecorded-caption guidance says synchronized captions should include dialogue, speaker identification, and meaningful non-speech audio and should not obscure relevant information.[4] YouTube documents adding subtitles and captions during or after upload.[5] Meta’s current safe-zone guidance says key text and logos should remain away from interface-covered edges; TikTok’s June 2026 in-feed specification recommends 9:16 at 540×960 or higher and notes that safe-zone size varies with dimensions and caption length.[6] [7]

The planned short will show one language pair per close shot, with short labels such as `SOURCE`, `TARGET`, `TERM`, `UNIT`, `CHART REF`, and `HUMAN REVIEW`. Captions will remain outside the proof area and will not attempt to reproduce dense translated text. One narrator family is declared, and caption-on plus caption-free reviews remain mandatory.

## Audience pain and visual opportunity

The audience pain is **locale drift**: a translated pattern may look complete while a term, abbreviation, unit, size label, chart reference, or schematic reference has not been checked against the source. This is a workflow hypothesis grounded in CYC’s technical terminology system, Quince & Co.’s whole-pattern cross-check, and W3C’s language-identification guidance. It is not a prevalence claim and not a claim that a Stitch & Scale user experienced a translation failure.

The visual opportunity is a fictional `LOCALE PARITY` card with two columns. The card shows `SOURCE: EN`, `TARGET: FR`, then one neutral field family at a time: `TERM`, `ABBREVIATION`, `DEFINITION`, `UNIT`, `CHART REF`, `SIZE`, `STATUS: HUMAN REVIEW`. A final strip reads `TRANSLATED ≠ PROVEN ALIGNED`. Every card carries `ILLUSTRATIVE — NOT PRODUCT UI`.

The dramatic contradiction is: **two language versions can both read fluently while still disagreeing at the technical seam that a chart, unit, or size depends on.** The emotional turn is from a polished translation to an explicit parity boundary.

## Product truth and rights reconciliation

The repository contains no current product-proof registry entry or approved non-private capture verifying a Stitch & Scale locale-parity surface, source/target language fields, terminology mapping, abbreviation definition, unit mapping, chart or schematic reference, affected-size field, language identification, human parity review, or localization acceptance state. No generated card may be presented as current product UI. No claim may be made that Stitch & Scale automatically translates patterns, preserves semantic equivalence, converts units, synchronizes charts or schematics, marks language parts for assistive technology, or approves every locale.

No external media, real pattern file, customer record, private notes, tester identity, translated screenshot, chart, schematic, or third-party imagery is approved. Rights and privacy are unverified. Any future product capture must provide product version/date, exact visible labels, capture owner, privacy treatment, destination, and rights/credit data. Illustrative cards may show category labels but not real pattern text, translation, abbreviations, chart symbols, measurements, or product controls.

## Research-derived decision

Research changed the concept from pass 252’s version-delta boundary to `locale-alignment-state`: **show the technical seams that must stay aligned across language versions, while refusing to convert translation presence into an automatic correctness or publication verdict**. The hook becomes **“Two languages can agree on the sentence and still disagree on the pattern.”** The visual metaphor becomes a two-column source/target parity card rather than a from/to version card. The proof surface becomes `SOURCE_LANGUAGE / TARGET_LANGUAGE / SOURCE_TERM / TARGET_TERM / ABBREVIATION / DEFINITION / UNIT / CHART_SCHEMATIC_REF / AFFECTED_SIZE / LANGUAGE_IDENTIFIED / HUMAN_PARITY_REVIEW / STATUS`. The emotional turn is polished translation replaced by an explicit parity boundary. The final line becomes **“Translate the words; review the pattern.”**

The nearest prior is pass 252 `version-delta-state`. Pass 252 asked how a later change should disclose its delta to people using an earlier state. Pass 253 asks how a localized version should preserve technical relationships across languages. It is not a rename of `locale-drift`, `translation-scope`, `translation-state`, `locale-state`, `change-notice`, `change-communication-state`, `equivalent-meaning`, `chart-parity`, `language-of-parts`, `maker-entry-state`, `ambiguity-state`, `review-question-state`, `false-completion`, or `release-gate-roster`. It has no automatic translation, unit conversion, chart synchronization, accessibility conformance, or release approval surface. The slug was checked against all 263 occupied angle rows and was unoccupied before reservation.

## Cultural, seasonal, and event context

The cultural framing is respect for multilingual makers and for the labor of carrying a technical craft vocabulary across language communities without treating one terminology system as universally superior. The plan must avoid claiming that a particular language community is confused, underserved, or represented by a single translation. No cultural statistic, community endorsement, or language-specific outcome is invented.

Knitty’s current seasonal publication schedule was not used as evidence in this pass because its page retrieval returned a database connection error. No seasonal deadline, event, partnership, publication selection, payment, rights, or urgency hook is adopted. The concept remains evergreen.

## Uncertainty and limits

CYC documents U.S. terminology, special abbreviations, measurement units, and U.S./Canada differences; it does not define every language’s technical vocabulary or a universal localization model. Quince & Co. gives one publisher’s whole-pattern reading guidance, not a parity standard. W3C’s Language of Parts guidance concerns identifying language in web content and assistive technologies; it does not certify a pattern-localization workflow or Stitch & Scale. The current Knitty page was unavailable during retrieval, so it contributes no fresh evidence here. Platform rules cited here are primarily help or advertising guidance, and organic behavior may differ. No user interviews, analytics, product capture, proof-registry entry, professional translation review, technical-editing review, test-knit report, privacy clearance, or rights clearance was available.

## Decision and next action

**Decision:** create a planning-only blocked package for `locale-alignment-state`; reserve the unique filename but do not generate or upload.

**Next action:** Product owner must provide one current, versioned, approved, non-private proof-registry entry or rights-cleared capture showing the exact locale-parity surface, including source/target language, source/target term, abbreviation, definition, unit, chart or schematic reference, affected size, language identification, human parity review, status, capture owner, privacy treatment, destination, and rights/credit. Then rerun Director claim, asset, rights, caption, audio, platform, and acceptance validation before any Generator authorization.

## References

[1]: https://www.craftyarncouncil.com/standards/knitting-abbreviations "Craft Yarn Council, Knitting Abbreviations"
[2]: https://quinceandco.com/blogs/news/tip-tuesday-how-to-decode-a-knitting-pattern "Quince & Co., Tip Tuesday: How-To Decode a Knitting Pattern"
[3]: https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html "W3C WAI, Understanding Success Criterion 3.1.2: Language of Parts"
[4]: https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html "W3C WAI, Understanding Captions (Prerecorded), WCAG 2.1"
[5]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help, Add subtitles & captions"
[6]: https://www.facebook.com/business/help/980593475366490?id=1240182842783684 "Meta Business Help Center, About text overlays and the safe zone for ads in Stories and Reels"
[7]: https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads "TikTok for Business, TikTok Auction In-Feed Ads, last updated June 2026"

# Pass 228 wide research: translation-state

**Research date:** 2026-08-20 (Africa/Lagos)  
**Director pass:** 228  
**Campaign assumption:** No active human brief was present. This pass assumes founding-tester recruitment through the free demo and early-access cohort remains the campaign objective: an organic, proof-led 9:16 founder short for independent knitwear designers and pattern publishers, with a quiet, precise tone and no paid placement assumed. This is a planning assumption, not a product claim.

## Fresh research question

When a knitwear pattern is translated or localized, what record preserves the source version, locale, units, abbreviations, permissions, reviewer, and status without claiming translation quality, legal compliance, or publication approval?

This question is narrower than `visual-description-state`, which concerns image-description scope, and distinct from `language-state` or general captions because it follows a **pattern artifact across locale and translation**: source identity, target language, technical terms, units, rights, and review.

## Evidence gathered

| Area | Source and date | Evidence | Uncertainty and limit | Decision changed |
|---|---|---|---|---|
| Translation permission and copyright | Knitty, **Design or Write For Knitty**, last update June 17, 2026, accessed 2026-08-20 [1] | Knitty says a designer may decide whether to permit a translation; when permission is given, the translation should include a note that permission was granted and a link to the original English version. The creator retains copyright. | One publication’s policy is not legal advice or a universal licensing rule. | Require `PERMISSION_STATUS`, rights basis, source link, and target artifact identity; do not call a translation authorized without an explicit record. |
| Source and target artifact separation | Knitty current submission guidance [1] | Knitty requires individual submission files, separates pattern text from images, charts, schematics, and signed statements, and treats copyright/related-image rights as explicit submission concerns. | Publication-specific workflow; not proof of a Stitch & Scale localization surface. | Keep `SOURCE_ARTIFACT_ID`, `TARGET_ARTIFACT_ID`, and related chart/schematic references separate. |
| Language of parts | W3C, **Understanding WCAG 2.2 SC 3.1.2 Language of Parts**, accessed 2026-08-20 [2] | W3C says the language of each passage or phrase should be programmatically determinable so user agents and assistive technologies can use appropriate pronunciation and presentation rules. | WCAG guidance is not a translation-quality verdict, legal certification, or product proof. | Add locale/language fields for the artifact and language-part exceptions; do not imply automatic translation or conformance. |
| Language metadata | W3C Internationalization, **Authoring HTML techniques**, accessed 2026-08-20 [3] | W3C distinguishes document language metadata from text-processing language declarations and links to guidance for language tags and in-document language changes. | HTML authoring guidance does not specify knitwear terminology or prove a localized pattern works. | Separate `DOCUMENT_LOCALE`, `LANGUAGE_OF_PARTS`, and `DIRECTION` from translated content and human review. |
| Craft terminology and units | Craft Yarn Council, **Standards**, accessed 2026-08-20 [4] | CYC describes industry guidelines intended to bring uniformity to yarn, needle, hook labeling, patterns, charts, abbreviations, and sizing; it lists metric/imperial and technical-term standards. | CYC guidelines are voluntary standards/context, not universal legal requirements or a translation validator. | Preserve source terminology, unit system, abbreviation key, standard basis, and reviewer; do not silently convert or normalize. |
| Seasonal/publication context | Knitty Winter 2026 content [1], accessed 2026-08-20 | Current page lists a Winter 2026 issue, complete submission elements, copyright terms, and a September 15, 2026 deadline. | Time-sensitive and publication-specific; no urgency, affiliation, or outcome claim. | Keep seasonal context in research only; no deadline language in creative copy. |
| Category comparison | Generic localization/media workflows versus craft-specific artifact records | Generic language metadata or translation status does not by itself prove that pattern instructions, charts, schematics, abbreviations, units, and rights remain linked to the same source version. | No reliable basis for competitor superiority or weakness claims. | Say “translation status is not the same as technical review” rather than attacking tools. |
| Platform and accessibility | Instagram Help [5], TikTok Support [6], YouTube Help [7], W3C language/caption guidance [2]–[3], accessed 2026-08-20 | Current guidance supports conservative 9:16 planning, human caption review, editable/draft auto-captions, and language-aware presentation. | Platform controls and locale support vary; no upload authorized and no WCAG conformance claimed. | Provide caption-on/caption-free review, language metadata, and a destination check before approval. |
| Product truth and rights | Current repository HEAD `6ddaa306f5b2a68eefd9f80c57e59b3341b6fba2`; selection audit; imported continuity ledger | No current product-proof registry or approved, non-private, rights-cleared capture verifies a Stitch & Scale translation/localization surface. `false-completion` and `release-gate-roster` remain blocked and occupied. No repository-visible reviewer/remake orders were present at refresh. | Repository absence does not prove hidden/private product state is absent. Translation rights, source artifact rights, contributor consent, and chart/schematic rights remain unverified. | Keep package blocked. Use fictional cards marked `ILLUSTRATIVE — NOT PRODUCT UI`; make no claim of translation, localization, terminology, unit conversion, or rights capability. |

## Research synthesis

Knitty’s current guidance makes permission, source linkage, copyright retention, individual artifact files, charts, schematics, and technical editing explicit parts of a publication workflow. [1] W3C distinguishes document language metadata from language changes within passages and explains why assistive technologies need language information to present text correctly. [2] [3] CYC’s standards page shows that yarn labeling, patterns, charts, abbreviations, sizing, and units are connected but distinct standard surfaces. [4]

Together, these sources support a bounded record-design question: **when a pattern travels to another locale, which source artifact is being translated, what permissions apply, which technical terms and units are preserved, what related charts/schematics travel with it, and who reviewed the target artifact?** This does not prove translation quality or automatic localization.

The visual metaphor should be a fictional `SOURCE PATTERN` card connected to a `TARGET LOCALE` card. The line is interrupted until `SOURCE_VERSION`, `PERMISSION`, `LANGUAGE`, `UNITS`, `ABBREVIATIONS`, `CHART_LINK`, `SCHEMATIC_LINK`, `REVIEWER`, and `STATUS` are visible. The final state remains `TRANSLATION: UNVERIFIED` because no current Stitch & Scale localization surface is supplied.

## Decision

Select the new angle **`translation-state`**. It is materially distinct from `visual-description-state`, which concerns image-description scope. Pass 228 concerns the **identity and authorization trail of a translated or localized pattern artifact**, including source version, target locale, language metadata, units, abbreviations, related chart/schematic links, permission, reviewer, and status. It is distinct from `language-state`, `caption-state`, `visual-description-state`, `export-identity-state`, `publication-boundary-state`, and the imported blocked concepts.

The proposed hook is: **“A translated pattern is not just the same file in another language.”** The visual metaphor is a fictional source card and target-locale card whose connecting gate exposes missing permission, source version, units, abbreviations, chart/schematic links, reviewer, and status. The final line is: **“Name the source, the language, the permission, and the review.”** These are bounded creative lines, not product claims.

The fictional proof surface, if a current product record is later supplied, must distinguish: `TRANSLATION T-001 / DESIGN_ID / SOURCE_ARTIFACT_ID / SOURCE_VERSION / SOURCE_LOCALE / TARGET_ARTIFACT_ID / TARGET_LOCALE / LANGUAGE_OF_PARTS / DIRECTION / UNIT_SYSTEM / ABBREVIATION_KEY / CHART_REFERENCE / SCHEMATIC_REFERENCE / PERMISSION_STATUS / RIGHTS_BASIS / TRANSLATOR_OR_SOURCE / REVIEWER / REVIEWED_AT / TRANSLATION_STATUS / RELEASE_STATUS`. A translation record does not prove semantic accuracy, technical correctness, chart equivalence, grading, test-knit success, legal compliance, or publication approval.

## References

[1]: https://knitty.com/subguide.php "Knitty — Design or Write For Knitty; updated June 17, 2026"
[2]: https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html "W3C WAI — Understanding WCAG 2.2 SC 3.1.2 Language of Parts"
[3]: https://www.w3.org/International/techniques/authoring-html "W3C Internationalization — Authoring HTML techniques"
[4]: https://www.craftyarncouncil.com/standards "Craft Yarn Council — Standards and Guidelines"
[5]: https://help.instagram.com/1038071743007909 "Instagram Help — Reel size & aspect ratios"
[6]: https://support.tiktok.com/en/using-tiktok/creating-videos/accessibility "TikTok Support — Accessibility for your videos"
[7]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Add subtitles & captions"

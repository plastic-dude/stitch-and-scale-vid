# Pass 237 wide-research findings — `crosswalk-state`

**Research date:** 2026-08-20 08:48 WAT  
**Pass:** 237  
**Angle under consideration:** `crosswalk-state`  
**Researcher:** Manus AI, Director/Planner  
**Campaign assumption:** Founding-tester recruitment through the free demo and early-access cohort, because no active brief was present in the refreshed repository. The audience is independent knitwear designers and pattern publishers preparing pattern text, charts, schematics, sizes, materials, and destination-specific submissions. The proposed form is a 40–45 second organic 9:16 founder short for Instagram Reels, TikTok, and YouTube Shorts. Tone is quiet, precise, craft-respecting, local-first, and explicit about unmapped or non-equivalent terms. No paid placement is assumed. This is a planning assumption, not a confirmed campaign brief.

## Fresh question

**When a designer moves a pattern or project from one standard, style guide, publisher, or metadata vocabulary to another, what source term, target term, mapping type, unmapped field, and human review prevent a plausible translation from being mistaken for equivalence or acceptance?**

The question is distinct from pass 236 `relationship-state`, which asks what typed relationship connects two distinct records. It is distinct from pass 235 `qualifier-state`, which asks which qualifier travels beside one value; from `requirement-interpretation-state`, which asks what one requirement means before action; from `translation-state` and `locale-drift`, which concern language and locale; from `chart-parity`, which concerns semantic equivalence between chart and written representations; from `schema-state`, which concerns record structure; and from `evidence-package-state`, which concerns whether destination artifacts are present. Pass 237 focuses on a **source vocabulary to target vocabulary crosswalk**, including exact match, broader/narrower match, conditional mapping, no equivalent, and human review.

## Evidence gathered

### 1. CYC standards are a shared vocabulary, not a universal acceptance contract

The Craft Yarn Council’s current standards page says publishers, fiber, needle, hook, and yarn members established guidelines and symbols to bring uniformity to yarn, needle, hook, and pattern labeling. It lists yarn weight, chart symbols, abbreviations, project levels, body sizing, care symbols, and other charts. CYC asks users of its symbols in publications to provide a credit line. The standards provide a source vocabulary, but the page does not say every publisher or destination uses the same exact terms, nor does it prove that a software product maps them automatically. [1]

CYC’s current project checklist requires yarn weight and symbols, needle/hook sizes in millimeters and U.S. sizes, unusual abbreviation definitions, measurements by size, charts, a schematic, and destination-specific instructions. It explicitly says companies may require additional or different instructions. A crosswalk must therefore record source vocabulary, target vocabulary, mapping type, source authority, destination, version/date, and unmapped terms rather than silently replacing one term with another. [2]

### 2. Destination style guides can require their own file and terminology boundaries

Knitty’s current June 17, 2026 guidance requires the latest Knitty Style Guide template, a complete pattern in a Word or text-only document without images, standard abbreviations, specified size ranges and CYC sizing, imperial and metric measurements, individual image files, schematic files, chart files where needed, and a signed originality/rights statement. Knitty says work will be edited to match its style and that it does not use AI in its publication workflow. Knitty’s requirements demonstrate a destination-specific target vocabulary and package structure, not a universal mapping or acceptance guarantee. [3]

The same source says different stages and decisions remain distinct: a full submission is evaluated; technical editors may edit; test knitting is optional and separate; copyright remains with the creator; and publication is a later editorial decision. A crosswalk cannot turn a source field into a destination acceptance state. [3]

### 3. W3C’s accessibility metadata crosswalk is a direct crosswalk analogy with explicit limits

The W3C Publishing Accessibility Metadata Crosswalk says it provides guidance for mapping terms used in different accessibility vocabularies and describes mappings among EPUB Accessibility, Schema.org, ONIX, MARC 21, and related systems. It says the crosswalk is not intended to impose computer architecture and that standards have different approaches that need to be mapped. The document includes cases where terms are not wholly equivalent, have no direct equivalent, or require a note, caveat, or verification. [4]

The bounded lesson for this film is that a crosswalk should show `SOURCE TERM`, `TARGET TERM`, `MAPPING TYPE`, `EQUIVALENCE LIMIT`, `UNMAPPED`, `SOURCE`, `DESTINATION`, `VERSION`, and `HUMAN REVIEW`. The W3C document does not prove that Stitch & Scale maps pattern vocabularies, validates standards, or certifies accessibility.

### 4. Accessibility and mobile presentation

W3C WCAG 2.1 states that information, structure, and relationships conveyed through presentation must be available in text or programmatically determinable; it also requires captions for prerecorded synchronized media and emphasizes that conformance does not cover every user need. [5] The crosswalk graphic must therefore use text labels and connector types, not color alone, and keep an unmapped/conditional state legible in the transcript.

Use one narrator family, original or cleared audio, caption-on and caption-free reviews, and human-verified captions. Captions must not cover source or target terms, arrows, mapping labels, version/date, unmapped fields, hands, faces, tables, logos, controls, menus, or primary actions. Platform requirements remain to be rechecked at approval; no platform acceptance is implied.

The visual opportunity is a two-column card: `SOURCE: CYC / “WORSTED”` → `TARGET: DESTINATION STYLE GUIDE / “CATEGORY 4”`, with `MAPPING: CONDITIONAL / VERIFY YARN SYSTEM` below; another row shows `SOURCE: ABBREV X` → `TARGET: NO DIRECT EQUIVALENT / DEFINE IN NOTES`; a third shows `MAPPING: EXACT` only for a fictional safe example. The final card reads `CROSSWALK ≠ ACCEPTANCE / HUMAN REVIEW REQUIRED`.

## Uncertainty and limits

CYC standards and Knitty guidance document industry vocabulary and destination requirements, not Stitch & Scale functionality. W3C’s crosswalk is an analogy about metadata interoperability, not pattern translation or product proof. A crosswalk may be exact, broader, narrower, conditional, or unmapped; a plausible visual similarity is not evidence of equivalence. No mapping proves mathematical correctness, gauge, fit, chart readability, schematic scale, technical editing, test-knit success, rights, accessibility conformance, destination acceptance, publication, or user outcome.

No source supports claims about revenue, adoption, accuracy, customer outcomes, final pricing, credentials, testimonials, urgency, or unverified product capabilities. David is a developer whose late mother knitted; he must not be presented as a knitter, knitwear designer, pattern designer, technical editor, tester, publisher, accountant, lawyer, or tax adviser.

## Decision changed by research

Research changed the concept from a generic “translation” idea into the narrower **crosswalk-state** angle. The film will show a source term and target term with mapping types `EXACT`, `BROADER`, `NARROWER`, `CONDITIONAL`, `NO DIRECT EQUIVALENT`, and `UNMAPPED`. A plausible pair remains marked `VERIFY`; the final state is `CROSSWALK ≠ ACCEPTANCE / HUMAN REVIEW REQUIRED`.

The selected angle is materially different from pass 236: it is not about what connects two records; it is about how one vocabulary maps to another, where terms do not match, and how a mapping must not be mistaken for destination acceptance. It does not reopen the imported `false-completion` or `release-gate-roster` reservations.

## Research references

[1]: https://www.craftyarncouncil.com/standards "Craft Yarn Council — Standards & Guidelines"
[2]: https://www.craftyarncouncil.com/industry.html "Craft Yarn Council — Congratulations! You’ve Received the Go Ahead"
[3]: https://knitty.com/subguide.php "Knitty — Design Or Write For Knitty; updated June 17, 2026"
[4]: https://w3c.github.io/publ-a11y/metadata-crosswalk/ "W3C Publishing Accessibility Metadata Crosswalk"
[5]: https://www.w3.org/TR/WCAG21/ "W3C — Web Content Accessibility Guidelines 2.1 Recommendation"

# Pass 236 wide-research findings — `relationship-state`

**Research date:** 2026-08-20 08:41 WAT  
**Pass:** 236  
**Angle under consideration:** `relationship-state`  
**Researcher:** Manus AI, Director/Planner  
**Campaign assumption:** Founding-tester recruitment through the free demo and early-access cohort, because no active brief was present in the refreshed repository. The audience is independent knitwear designers and pattern publishers who keep design, sample, gauge, instruction, submission, test-knit, expense, invoice, and return records. The proposed form is a 40–45 second organic 9:16 founder short for Instagram Reels, TikTok, and YouTube Shorts. Tone is quiet, precise, craft-respecting, local-first, and explicit about record boundaries. No paid placement is assumed. This is a planning assumption, not a confirmed campaign brief.

## Fresh question

**When a design, sample, gauge swatch, pattern instruction, submission, expense, invoice, test-knit round, or return record appears in one workflow, what typed relationship says that it belongs to the same design without silently merging separate records or implying that one record proves another?**

The question is distinct from pass 235 `qualifier-state`, which asks which qualifier travels beside one value or field. It is distinct from pass 234 `editability-state`, which asks whether a named source or artifact may be changed and what review reopens; from `identity-state`, which asks which record/entity an item became; from `context-state`, which asks whether semantic context remained attached; from `provenance-chain`, `measurement-provenance`, `material-trace`, `sample-chain`, and `evidence-coverage`, which focus on origin or other narrower evidence chains; and from `evidence-package-state`, which concerns a destination package’s separate artifacts. Pass 236 focuses on the **typed relationship between records**: belongs-to-design, measured-from-sample, supports-pattern, submitted-to-destination, incurred-for-design, tested-in-round, returned-to-owner, or not-linked.

## Evidence gathered

### 1. CYC guidance shows that craft records are related but not interchangeable

The Craft Yarn Council’s current project checklist separates the actual project, yarn labels and skein bands, gauge swatch, electronic project instructions, printout, measurements for each size, charts, schematic, invoice, agreement or contract, and return shipping. It also asks designers to reconfirm yarn and color selection, dye lots, sample size, and project notes with the editor or design director. These are related pieces of a project but are not one record: a swatch is not the garment, an invoice is not the pattern, and return shipping is not evidence that a sample was accepted. [1]

The CYC “Where Do You Start?” guidance distinguishes a design idea, sketch, swatch, sample, submission, acceptance, possible contract, and later project. It says companies may require a label on a swatch or sample, a postage-paid envelope if return is desired, and company-specific submission requirements. It also says a design should generally be submitted to one company or magazine at a time and that acceptance can lead to a fee discussion and contract. A typed relationship must therefore include relationship type, direction, source and target, stage, destination, date, and owner rather than a generic “linked” badge. [2]

CYC standards aim to bring uniformity to yarn, needle, hook, and pattern labeling so designers and consumers can select materials and complete projects, but the standards do not define an app data model or prove relationship automation. [3]

### 2. Workflow records require source-of-truth boundaries

The craft-business record guidance for Stitch & Scale requires a stable design identity and distinguishes design records, expense events, sales rollups, estimates, exports, samples, submissions, test-knit rounds, invoices, return status, and other commitments. A design record can be the parent for an expense or sample relationship, but a derived rollup is not a new sale, an estimate is not a settled transaction, and a submission status is not proof of acceptance. This creates a useful, local-first visual boundary for the film: a design card with typed relationship cards and one deliberately unlinked record.

The proposed relationship surface is `REL R-001 / SOURCE_TYPE / SOURCE_ID / RELATIONSHIP_TYPE / TARGET_TYPE / TARGET_ID / STAGE / DESTINATION / OWNER / STARTED_AT / ENDED_AT / SOURCE_NOTE / STATUS / LIMITATIONS`. The exact product surface is unverified.

### 3. Submission guidance adds direction, destination, custody, and ownership

CYC says a sample or swatch should carry contact details, and a return envelope is needed if return is desired. CYC also distinguishes a submission recipient, expected response period, acceptance, fee discussion, contract, and later project work. This supports the visual distinction between `SUBMITTED TO`, `RETURN TO`, `INCURRED FOR`, `MEASURED FROM`, `TESTED IN`, `SUPPORTS`, and `BELONGS TO`; those relationships carry different directions and implications. It does not prove that Stitch & Scale routes, reminds, tracks delivery, records custody, or enforces exclusivity. [2]

### 4. Seasonal and destination context

CYC explicitly says company or magazine requirements are destination-specific and that submission review may take two to eight weeks, but this does not authorize a current deadline, urgency, affiliation, or response prediction for Stitch & Scale. A design can have different relationship stages at idea, sample, submission, acceptance, contract, technical editing, test knitting, and publication; no stage is claimed for the product. [2] [4]

### 5. Accessibility, caption, audio, and mobile presentation

The visual relationship map must show one source and one target at a time, with direction and relationship type printed on the connector rather than using color alone. Captions must preserve the connector label and source/target IDs and may not cover cards, lines, values, units, dates, hands, faces, tables, logos, controls, menus, or primary actions. Use one narrator family, original or cleared audio, caption-on and caption-free review, and human-verified captions. W3C guidance supports relationships being available in text and captions for prerecorded synchronized media; it does not prove product accessibility or relationship inference. [5] [6] [7]

The visual opportunity is a fictional design card with a sample card, gauge card, pattern card, and invoice card. A green line labelled `MEASURED FROM` connects sample to gauge; a blue line labelled `INCURRED FOR` connects expense to design; a red or dashed line labelled `SUBMITTED TO` ends at an unverified destination; an unrelated receipt remains outside the map marked `NOT LINKED`. Colors are redundant and cannot carry meaning alone.

## Uncertainty and limits

CYC documents craft and submission workflow, not Stitch & Scale functionality. The internal craft-business record contract is a product design boundary, not external proof that the deployed product exposes every relationship. Typed linkage does not prove that two records are correct, that a pattern is technically edited, that a gauge matches, that a schematic is to scale, that a test knit passed, that a submission was received, that a sample was returned, that an invoice was paid, or that a design was accepted or published. Technical editing, physical print review, chart readability, schematic scale, test knitting, rights, privacy, custody, and publication decision remain separate human gates.

No source supports claims about revenue, adoption, accuracy, customer outcomes, final pricing, credentials, testimonials, urgency, or unverified product capabilities. David is a developer whose late mother knitted; he must not be presented as a knitter, knitwear designer, pattern designer, technical editor, tester, publisher, accountant, lawyer, or tax adviser.

## Decision changed by research

Research changed the concept from a generic “linked records” idea into the narrower **relationship-state** angle. The film will show a design record with typed, directional connectors to a sample, gauge, pattern, expense, submission, and test-knit round, while one unrelated receipt remains explicitly `NOT LINKED`. The emotional turn is from “these items are nearby” to “the relationship type tells me what one record can and cannot prove about another.”

The selected angle is materially different from pass 235: it is not about the qualifier attached to one field; it is about the **typed relationship between distinct records**. It does not reopen the imported `false-completion` or `release-gate-roster` reservations.

## Research references

[1]: https://www.craftyarncouncil.com/industry.html "Craft Yarn Council — Congratulations! You’ve Received the Go Ahead"
[2]: https://www.craftyarncouncil.com/idea.html "Craft Yarn Council — You Want to Submit a Project Idea…Where Do You Start?"
[3]: https://www.craftyarncouncil.com/standards "Craft Yarn Council — Standards & Guidelines"
[4]: https://knitty.com/subguide.php "Knitty — Design Or Write For Knitty; updated June 17, 2026"
[5]: https://www.w3.org/TR/WCAG21/ "W3C — Web Content Accessibility Guidelines 2.1 Recommendation"
[6]: https://www.w3.org/WAI/media/av/captions/ "W3C WAI — Captions/Subtitles"
[7]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Create subtitles & captions"

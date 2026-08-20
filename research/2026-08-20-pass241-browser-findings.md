# Pass 241 wide-research findings — `inspection-scope-state`

**Research date:** 2026-08-20 09:16 WAT  
**Pass:** 241  
**Angle under consideration:** `inspection-scope-state`  
**Researcher:** Manus AI, Director/Planner  
**Campaign assumption:** Founding-tester recruitment through the free demo and early-access cohort, because no active brief was present in the refreshed repository. The audience is independent knitwear designers and pattern publishers managing pattern drafts, sizes, representations, charts, schematics, samples, technical editing, test knitting, accessibility review, and publication preparation. The proposed form is a 40–45 second organic 9:16 founder short for Instagram Reels, TikTok, and YouTube Shorts. Tone is quiet, precise, craft-respecting, local-first, and explicit about inspection subject, version, sample, conditions, findings, and limits. No paid placement is assumed. This is a planning assumption, not a confirmed campaign brief.

## Fresh question

**When someone says a pattern, sample, chart, or product was reviewed, what exact artifact, size, representation, version, conditions, and review question were actually inspected—and what remains outside that review—so one finding is not overgeneralized to uninspected material?**

The question is distinct from pass 240 `materiality-state`, which asks what consequence class a change may have and which human gate it may reopen. Pass 241 focuses on **the boundary of the inspection itself**, not on change impact: the named subject, version/date, size or sample, representation, conditions, question, reviewer, finding, and limitations.

## Evidence gathered

### 1. Craft submissions contain separate artifacts and checkpoints

The Craft Yarn Council’s current industry checklist says a designer should reconfirm yarn and color selection with an editor or design director, check dye lot, confirm the requested sample size, keep notes while working, and follow destination-specific instructions. It separately lists the actual project, label, yarn labels, gauge swatch, project instructions, measurements for each size, charts, schematic, invoice, and return shipping. [1]

The checklist is therefore a strong boundary example: a review of a project sample does not automatically inspect the gauge swatch, every size, the electronic instructions, the chart, the schematic, the invoice, or return-custody records. The source does not define a product workflow or claim that any system records inspection scope.

### 2. A schematic has a defined subject and use

CYC’s current schematic guidance defines a schematic as a visual rendering of a knit or crochet piece with relevant measurements. It gives the maker an overview of size and shape, a fit reference, and a template for modification, and recommends reviewing it before beginning. [2]

A schematic review should therefore identify which piece, which size, which measurements, and which use were inspected. A schematic cannot alone prove that written instructions, chart symbols, gauge, fit, finishing, or a test-knit result were reviewed.

### 3. Destination review is bounded by requested files and stages

Knitty’s current June 17, 2026 submission guidance asks for a complete design and individual files: a text-only pattern, separate images, chart files where needed, a schematic file for garments, and an originality/rights statement. It distinguishes the designer’s preparation from later technical editing, optional test knitting, editorial selection, rights, and publication. It says a submission may be evaluated for a particular issue or held for a future issue, and that a later publication decision is separate from the submission itself. [3]

This supports a precise inspection record: `DESTINATION`, `SUBMISSION_ID`, `FILE_OR_ARTIFACT`, `VERSION`, `SIZE`, `QUESTION`, `REVIEWER`, `FINDING`, and `LIMIT`. It does not support a claim that one inspected file proves full submission readiness, technical correctness, test-knit success, accessibility, rights, acceptance, or publication.

### 4. Accessibility evaluation must define scope and representative samples

W3C’s current WCAG Evaluation Methodology 2.0 says an evaluation should define the evaluation scope, explore the product, select a representative sample set, evaluate that sample, and report findings. It says scope should be explicit about which views, states, functionality, mobile/language versions, third-party content, and other parts are included. It also says evaluations of a selected subset generally do not support conformance claims for an entire website. Re-running an evaluation after repairs may use a subset of previous samples and a replaced subset to improve coverage. [4]

This is directly relevant to inspection-scope-state: a reviewer’s finding needs a target, sample, conditions, and stated limit. It is not safe to extrapolate from one screenshot, one route, one size, one chart, one document, or one assistive-technology combination to the complete product or pattern.

### 5. Accessibility and mobile presentation

Use explicit labels rather than color alone: `SUBJECT`, `VERSION`, `SIZE/SAMPLE`, `REPRESENTATION`, `CONDITIONS`, `QUESTION`, `REVIEWER`, `FINDING`, `LIMIT`, and `OUTSIDE SCOPE`. Review caption-on and caption-free versions, one narrator family, original/cleared audio, and human-verified captions. Captions must not cover inspection fields, numbers, tables, proof, hands, faces, logos, controls, menus, or primary actions.

The visual opportunity is a fictional inspection card: `REVIEWED: CHART C-01 / SIZE M / REV 03 / SCREEN VIEW / QUESTION: SYMBOL LEGIBILITY`. A broad `PATTERN REVIEWED` badge is removed. The card reveals `OUTSIDE SCOPE: SIZE 2X / PRINT / WRITTEN INSTRUCTIONS / TEST KNIT`, then ends with `FINDING: LIMITED / LIMIT: ONE SAMPLE / HUMAN REVIEW REQUIRED`.

## Uncertainty and limits

CYC, Knitty, and W3C document craft and evaluation boundaries, not Stitch & Scale functionality. Inspection scope must not be presented as automatic audit coverage, full-product conformance, technical correctness, publication approval, or universal accessibility. A reviewer’s finding applies only to the named subject, version, sample, conditions, and question unless a broader method is explicitly documented and performed.

No source supports claims of automatic scope capture, sample selection, reviewer tracking, coverage calculation, extrapolation, technical editing, chart readability, schematic scale, test-knitting success, rights clearance, acceptance, publication, or user outcomes. No source supports claims about revenue, adoption, accuracy, customer outcomes, final pricing, credentials, testimonials, urgency, or unverified product capabilities.

David is a developer whose late mother knitted; he must not be presented as a knitter, knitwear designer, pattern designer, technical editor, tester, publisher, accountant, lawyer, or tax adviser.

## Decision changed by research

Research changed the concept from a generic “review complete” card into the narrower **inspection-scope-state** angle. The film will remove `PATTERN REVIEWED` and replace it with explicit subject, version, size/sample, representation, conditions, question, reviewer, finding, limit, and outside-scope fields. The final state is `FINDING: LIMITED / OUTSIDE SCOPE VISIBLE / HUMAN REVIEW REQUIRED`.

The selected angle is materially different from pass 240: it is not about how consequential a change may be or which gate it may reopen. It is about **what a review actually covered and what it did not cover**, with a bounded finding rather than a universal status. It does not reopen the imported `false-completion` or `release-gate-roster` reservations.

## Research references

[1]: https://www.craftyarncouncil.com/industry.html "Craft Yarn Council — Congratulations! You’ve Received the Go Ahead"
[2]: https://www.craftyarncouncil.com/standards/schematics "Craft Yarn Council — Schematics"
[3]: https://knitty.com/subguide.php "Knitty — Design Or Write For Knitty; updated June 17, 2026"
[4]: https://www.w3.org/TR/wcag-em-2/ "W3C — WCAG-EM 2.0 Evaluation Methodology"

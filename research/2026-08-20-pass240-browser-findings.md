# Pass 240 wide-research findings — `materiality-state`

**Research date:** 2026-08-20 09:08 WAT  
**Pass:** 240  
**Angle under consideration:** `materiality-state`  
**Researcher:** Manus AI, Director/Planner  
**Campaign assumption:** Founding-tester recruitment through the free demo and early-access cohort, because no active brief was present in the refreshed repository. The audience is independent knitwear designers and pattern publishers managing pattern edits, sizing, grading, gauge, charts, schematics, samples, technical editing, test knitting, and publication preparation. The proposed form is a 40–45 second organic 9:16 founder short for Instagram Reels, TikTok, and YouTube Shorts. Tone is quiet, precise, craft-respecting, local-first, and explicit about impact, affected scope, re-review trigger, and human limits. No paid placement is assumed. This is a planning assumption, not a confirmed campaign brief.

## Fresh question

**When a craft record changes, what makes the change material enough to reopen a specific human review gate, and how can a designer distinguish a cosmetic edit from a change to size, gauge, math, chart, schematic, fit, instructions, rights, or publication state without pretending software has judged the impact?**

The question is distinct from pass 239 `representation-state`, which asks which representation exists and what role or scope it serves. Pass 240 focuses on **the consequence class of a change and the review gate it may reopen**, not on the existence of a format. It is distinct from `correction-trace`, which records a known post-release correction and affected copy; `change-notice`, which records a change event; `impact-scope`, which traces affected dependencies; `decision-reversal`, which records an explicit reversal; `editability-state`, which distinguishes editable, reviewed, and released copies; `evidence-status-state`, which describes status scope; and `normalization-state`, which preserves raw/canonical representation.

## Evidence gathered

### 1. CYC sizing guidance shows that some changes alter fit or appearance

The Craft Yarn Council’s current body-sizing guidance says actual body measurements, finished garment measurements, ease, and schematics must be reviewed before beginning. It states that sizing charts are guidelines and that changes to body and sleeve lengths may be made for individual differences, but certain sizing changes may alter the appearance of a garment. [1]

This supports a materiality distinction: a wording-only edit may have a different consequence from changing ease, a size increment, a sleeve length, a grading rule, or a schematic measurement. The source does not define a software impact classifier or certify that any change is safe.

### 2. CYC pattern-writing guidance treats math, terminology, technical editing, and testing as separate steps

CYC’s current pattern-writing overview says patterns can include written instructions, video tutorials, charts, graphs, schematics, or combinations. It recommends writing notes during making, transcribing changes, checking abbreviations and sizing, technical editing, and testing before releasing a pattern. It asks testers to follow the pattern literally and report whether directions, abbreviations, symbols, charts, materials, and finished appearance line up. [2]

A materiality card should therefore identify the affected surface and possible human gate rather than mark a change “safe” or “approved.” A change to an abbreviation may require a terminology review; a change to a chart or repeat may require chart readability and technical review; a change to grading, gauge, ease, or measurements may require calculation, schematic, fit, and test-knit review.

### 3. Knitty makes stage and destination consequences explicit

Knitty’s current June 17, 2026 guidance requires complete submissions and distinguishes what the designer must provide from later editorial work. It says its technical editors help solve math mistakes and improve fit where possible; it does not require or recommend test knitting before submission, and it says test knitting does not necessarily influence publication selection. It also says the work is edited to Knitty style, that the creator retains copyright, and that publication is a later editorial decision. [3]

This supports a review-routing boundary without claiming automation: the same visible change may have different consequences depending on whether the artifact is a working draft, a submission, a technically edited copy, a test-knit copy, or a released publication. Materiality is contextual, not a universal severity badge.

### 4. Plain-language and accessibility practice supports targeted re-testing, not universal impact claims

Digital.gov’s current plain-language guidance says content should be written for a specific audience and that content should be designed and tested so the audience understands it. [4] This supports re-testing after a change to instructions, labels, or layout, but it does not say every edit has the same impact or that a system can predict comprehension.

The production plan therefore shows `CHANGE FIELD`, `AFFECTED SCOPE`, `POSSIBLE GATE`, `EVIDENCE NEEDED`, and `STATUS: UNASSESSED`. It does not show a definitive `SAFE`, `LOW RISK`, `AUTO-APPROVED`, or `NO REVIEW NEEDED` badge.

### 5. Accessibility and mobile presentation

Use explicit text labels rather than color alone: `COSMETIC?`, `INSTRUCTION`, `CHART`, `GAUGE`, `SIZE/GRADING`, `SCHEMATIC`, `FIT`, `RIGHTS`, `PUBLICATION`, `AFFECTED SCOPE`, `POSSIBLE GATE`, `EVIDENCE NEEDED`, and `UNASSESSED`. Review caption-on and caption-free versions, one narrator family, original/cleared audio, and human-verified captions. Captions must not cover change fields, affected scope, numbers, tables, proof, hands, faces, logos, controls, menus, or primary actions.

The visual opportunity is a fictional change card: `CHANGE: sleeve length 20 → 22 cm`. It first receives a vague `SMALL EDIT` label, which is removed. The card then reveals `AFFECTED: SLEEVE / FIT / SCHEMATIC`, `POSSIBLE GATES: CALCULATION / FIT / PRINT REVIEW / TEST KNIT`, `EVIDENCE NEEDED`, and `STATUS: UNASSESSED`. A second row shows a fictional punctuation edit with a smaller, still-unverified scope; the film never labels either change safe or unsafe.

## Uncertainty and limits

CYC, Knitty, and Digital.gov document craft workflow, review stages, and audience-centered testing, not Stitch & Scale functionality. Materiality is contextual and must not be presented as an automatic severity score, risk prediction, approval, or completeness decision. A visible change does not prove a defect; a small-looking change does not prove low consequence. No evidence supports claims of impact detection, dependency tracing, automatic gate reopening, stale-output prevention, version control, technical correctness, fit, gauge, chart readability, schematic scale, test-knit success, accessibility conformance, rights, acceptance, publication, or user outcome.

No source supports claims about revenue, adoption, accuracy, customer outcomes, final pricing, credentials, testimonials, urgency, or unverified product capabilities. David is a developer whose late mother knitted; he must not be presented as a knitter, knitwear designer, pattern designer, technical editor, tester, publisher, accountant, lawyer, or tax adviser.

## Decision changed by research

Research changed the concept from a generic “impact score” idea into the narrower **materiality-state** angle. The film will show a change with affected scope, possible human gates, evidence needed, and `STATUS: UNASSESSED`, contrasting it with an unsafe generic “small edit” label. The final state is `MATERIALITY CONTEXT REQUIRED / HUMAN REVIEW REQUIRED`.

The selected angle is materially different from pass 239: it is not about which representation exists; it is about how the consequence of a change depends on field, scope, artifact stage, destination, and human evidence gate. It does not reopen the imported `false-completion` or `release-gate-roster` reservations.

## Research references

[1]: https://www.craftyarncouncil.com/standards/body-sizing "Craft Yarn Council — Standard Body Measurements/Sizing"
[2]: https://www.craftyarncouncil.com/blog/ydkwydk-how-write-your-own-pattern "Craft Yarn Council — YDKWYDK: How to write your own pattern"
[3]: https://knitty.com/subguide.php "Knitty — Design Or Write For Knitty; updated June 17, 2026"
[4]: https://digital.gov/guides/plain-language "Digital.gov — Plain language guide series"

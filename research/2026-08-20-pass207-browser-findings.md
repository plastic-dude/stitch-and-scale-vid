# Pass 207 Wide Research — Source Qualification State

**Date:** 2026-08-20  
**Director role:** Planning only; no video generation or upload  
**Research question:** How should a workflow decide whether a source or evidence item is relevant and sufficient for a specific intended use, rather than treating every named source as equally useful proof?

## Decision changed by research

Pass 206 exposed a source-to-activity-to-result lineage and a visible gap when the chain is incomplete. Pass 207 adds a qualification step before a source is allowed to support a decision: name the intended use, assess relevance, timeliness, validity, completeness, and accuracy as appropriate, record the method or basis for qualification, and keep the result bounded when the evidence is not sufficient. The fresh angle is `source-qualification-state`, focused on deciding whether a source is fit to support this claim, not merely whether a source exists or can be linked.

The film will not claim that Stitch & Scale currently qualifies sources, scores evidence, validates source fitness, or automatically blocks unsupported decisions. It will use original neutral cards labeled `ILLUSTRATIVE — NOT PRODUCT UI`.

## Source findings

### 1. GOV.UK — good quality is fitness for purpose, not universal perfection

GOV.UK explains that good-quality data is fit for purpose and good enough to support the outcomes for which it is used. It lists dimensions such as completeness, uniqueness, consistency, timeliness, validity, and accuracy, while noting that different uses require different combinations and that there are no universal criteria for good quality data. It also says metadata helps users understand what data is and is not, and supports assessing whether a dataset is adequate for a use. [1]

**Decision impact:** The visual record will include `INTENDED_USE`, `RELEVANCE`, `TIMELINESS`, `VALIDITY`, `COMPLETENESS`, `ACCURACY_BASIS`, and `QUALIFICATION_METHOD`, while keeping a source outside the decision when the use-specific basis is missing.

### 2. NIST — evidence must be preserved and its custody tracked in the cited context

NIST’s evidence-management page states that handlers should ensure evidence has not been compromised, contaminated, or degraded and that its chain of custody is tracked. This is forensic evidence guidance, not a Stitch & Scale product contract, but it gives a useful distinction between an item existing and the conditions under which it remains reliable for review. [2]

**Decision impact:** The treatment will show `SOURCE_STATE` and `CUSTODY_OR_INTEGRITY: NOT VERIFIED` as separate from relevance and qualification. It will not claim forensic custody, certification, or product support.

### 3. W3C WCAG-EM 2 — evaluation scope, sample, expertise, and result statements must be bounded

W3C WCAG-EM 2 describes a process to define evaluation scope, explore the product, select a representative sample set, evaluate the sample, and report findings. It explains that evaluating a selected subset generally does not permit a conformance claim for an entire digital product, and that evaluation requires appropriate expertise and consideration of user agents and assistive technologies. [3]

**Decision impact:** A qualification card will distinguish evidence relevance from sample coverage and expertise. A source or one sample cannot be presented as whole-product conformance or universal accessibility proof.

### 4. Craft Yarn Council — different human activities answer different questions

Craft Yarn Council advises reading the relevant instructions fully, doing what the pattern says, and asking another person to read aloud when instructions are difficult. It describes gauge as essential to successful fit and recommends a swatch using the specified yarn, needles, and stitch. [4]

**Decision impact:** The qualification surface will keep calculation, technical editing, physical print review, chart readability, schematic scale, and test knitting as separate evidence activities. One source or one test cannot silently satisfy the others.

## Audience and workflow relevance

The primary audience remains independent knitwear designers and pattern publishers coordinating calculations, technical editing, physical print review, chart readability, schematic scale, test knitting, samples, swatches, revisions, tester feedback, submissions, and intended users. The planning hypothesis is that a source can look authoritative while being stale, irrelevant to the question, incomplete for the sample, unverified in integrity, or unsupported by the required human activity. No current user study, incident report, product telemetry, or product-proof registry entry verifies this as a measured Stitch & Scale outcome.

David is a developer whose late mother knitted. He does not knit and must not be described as a knitter, knitwear designer, pattern designer, or technical editor. The film teaches source qualification boundaries and does not claim personal craft practice.

## Platform, accessibility, and visual opportunity

The planned output remains a 9:16, 45-second mobile-first social explainer with destination platform unconfirmed. The visual sequence will use readable inserts for source, intended use, relevance, timeliness, validity, completeness, accuracy basis, qualification method, sample coverage, source state, custody or integrity, decision status, and disposition. Captions must not cover hands, cards, labels, numbers, logos, controls, menus, or primary actions. Caption-on and caption-free review remain required. Exact safe-area and current caption behavior are not verified until a destination is named.

The visual opportunity is a source card approaching a qualification gate. It is held outside the decision lane until the intended use is named and the relevant dimensions are checked. A small sample card remains marked `NOT WHOLE PRODUCT`; a `CUSTODY_OR_INTEGRITY: NOT VERIFIED` tag prevents a trust stamp. The emotional turn is disciplined confidence: qualify before you rely.

## Product truth, rights, and uncertainty

No current product-proof registry verifies a source-qualification surface, dimension fields, qualification method, sample coverage, custody or integrity state, or qualification disposition. All cards are original props labeled `ILLUSTRATIVE — NOT PRODUCT UI`. No current UI, customer record, private material, copyrighted pattern, logo, testimonial, revenue, adoption, accuracy, capability, urgency, final pricing, or outcome may be introduced.

Rights for original cards, neutral materials, narrator, foley, and music-free sound remain unverified until a production inventory is approved. Destination platform remains unknown. These gaps independently block generation.

## Research limitations

GOV.UK data-quality guidance is general public-sector guidance and does not establish Stitch & Scale behavior. NIST’s evidence-management page concerns forensic evidence and does not define craft-product custody. W3C WCAG-EM 2 concerns digital accessibility evaluation and does not establish product conformance. Craft Yarn Council guidance is industry guidance, not a product contract or measured audience study. The concept is source-informed educational framing only.

## References

[1]: https://www.gov.uk/government/news/what-is-data-quality "GOV.UK — What is data quality?" (accessed 2026-08-20)  
[2]: https://www.nist.gov/forensic-science/interdisciplinary-topics/evidence-management "NIST — Evidence Management" (accessed 2026-08-20)  
[3]: https://www.w3.org/TR/wcag-em-2/ "W3C — WCAG-EM 2.0" (accessed 2026-08-20)  
[4]: https://www.craftyarncouncil.com/read_instructions.html "Craft Yarn Council — Reading Instructions & Other Basics" (accessed 2026-08-20)

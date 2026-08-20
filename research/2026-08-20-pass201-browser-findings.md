# Pass 201 Wide Research — Scoped Re-entry

**Date:** 2026-08-20  
**Director role:** Planning only; no video generation or upload  
**Research question:** After a held record has been corrected and reviewed, how can a workflow make clear that permission to reuse it applies only to the checked entity, purpose, or scope rather than becoming universal release?

## Decision changed by research

Pass 200 separated correction, review, and clearance. Pass 201 narrows the next boundary: even a reviewed and cleared record may be authorized only for a specific entity, purpose, or resource. The fresh angle is `scope-clearance-state`, focused on making the exact re-entry scope visible and preventing a scoped permission from being mistaken for a universal release.

The film will not claim that Stitch & Scale currently has scoped permissions, authorization records, access control, release profiles, or role-based clearance. It will use original neutral cards labeled `ILLUSTRATIVE — NOT PRODUCT UI`.

## Source findings

### 1. NIST glossary — authorization can be permission for a specific resource or action

NIST’s authorization glossary includes definitions describing authorization as a right or permission granted to an entity to access a resource, access privileges granted to a user, program, or process, and the process of verifying whether a requested action or service is approved for a specific entity. [1]

**Decision impact:** The visual record will include `AUTHORIZED_FOR` with a concrete illustrative purpose and entity, such as `FOLLOW CHART 3 / SIZE M / INTERNAL REVIEW`, while leaving other uses unapproved. The film must not imply that Stitch & Scale implements these controls.

### 2. GOV.UK Design System — review immediately before confirmation and show only relevant sections

The GOV.UK check-answers pattern recommends a review page immediately before confirmation, makes clear that a transaction is not complete until the user confirms the information, and advises showing only sections relevant to the user. It also recommends explicit change links so users can correct specific answers before submitting. [2]

**Decision impact:** A scoped-clearance card will show the checked scope immediately before the illustrative re-entry decision, with an explicit `CHANGE SCOPE` alternative and a hold state for anything outside that scope. A summary page is not treated as universal approval.

### 3. Craft Yarn Council — requirements vary by company, publication, project, and evidence

The Craft Yarn Council’s submission guidance says each company or magazine has its own requirements. It distinguishes the project idea, actual project, gauge swatch, instructions, measurements, charts, schematic, and recipient-specific checks. It also advises following the specific instructions of the company or publication. [3] [4]

**Decision impact:** The film will model a limited illustrative use and keep technical editing, physical print review, chart readability, schematic scale, and test knitting as separate human evidence gates. A clearance for one use cannot claim acceptance for every publisher, size, material, export, or physical review.

### 4. Research uncertainty

NIST authorization terminology comes from information-security and access-control contexts, not from a Stitch & Scale product specification. GOV.UK’s pattern concerns user transactions, not craft-pattern release. Craft Yarn Council guidance is industry guidance, not a current product contract or measured audience study. The research supports a general distinction between permission and scope only.

## Audience and workflow relevance

The primary audience remains independent knitwear designers and pattern publishers coordinating calculations, technical editing, physical print review, chart readability, schematic scale, test knitting, samples, swatches, revisions, tester feedback, submissions, and intended users. The planning hypothesis is that “cleared” language can be misread as covering uses, entities, or gates that were not reviewed. No current user study, incident report, product telemetry, or product-proof registry entry verifies this as a measured Stitch & Scale outcome.

David is a developer whose late mother knitted. He does not knit and must not be described as a knitter, knitwear designer, pattern designer, or technical editor. The film teaches scope discipline and does not claim personal craft practice.

## Platform, accessibility, and visual opportunity

The planned output remains a 9:16, 45-second mobile-first social explainer with destination platform unconfirmed. The visual sequence will use readable inserts for record ID, authorized entity, authorized purpose, exclusions, human-gate status, reviewer/owner, and disposition. Captions must not cover hands, cards, labels, numbers, logos, controls, menus, or primary actions. Caption-on and caption-free review remain required. Exact safe-area and current caption behavior are not verified until a destination is named.

The visual opportunity is a clearance card with one bright, narrow lane—`AUTHORIZED FOR: FOLLOW CHART 3 / SIZE M / INTERNAL REVIEW`—while neighboring lanes `PRINT`, `CHART READABILITY`, `TEST KNIT`, and `OTHER SIZES` remain marked `NOT INCLUDED`. The emotional turn is confidence through precision rather than the false comfort of a universal “released” stamp.

## Product truth, rights, and uncertainty

No current product-proof registry verifies a scoped-clearance surface, authorized entity, authorized purpose, exclusions, access/resource control, or current labels. All cards are original props labeled `ILLUSTRATIVE — NOT PRODUCT UI`. No current UI, customer record, private material, copyrighted pattern, logo, testimonial, revenue, adoption, accuracy, capability, urgency, final pricing, or outcome may be introduced.

Rights for original cards, neutral materials, narrator, foley, and music-free sound remain unverified until a production inventory is approved. Destination platform remains unknown. These gaps independently block generation.

## References

[1]: https://csrc.nist.gov/glossary/term/authorization "NIST CSRC Glossary — Authorization" (accessed 2026-08-20)  
[2]: https://design-system.service.gov.uk/patterns/check-answers/ "GOV.UK Design System — Check answers" (accessed 2026-08-20)  
[3]: https://www.craftyarncouncil.com/idea.html "Craft Yarn Council — You Want to Submit a Project Idea… Where Do You Start?" (accessed 2026-08-20)  
[4]: https://www.craftyarncouncil.com/industry.html "Craft Yarn Council — Congratulations! You’ve Received the Go Ahead" (accessed 2026-08-20)

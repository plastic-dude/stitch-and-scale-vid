# Pass 199 Wide Research — Quarantine State

**Date:** 2026-08-20  
**Director role:** Planning only; no video generation or upload  
**Research question:** When a record may be wrong, incomplete, or nonconforming, how can a workflow isolate it from unintended reuse while preserving the evidence needed to understand, correct, and re-review it?

## Decision changed by research

Pass 198 showed that a downstream decision may require review when an upstream dependency changes. Pass 199 moves from detecting the changed dependency to controlling the uncertain record while preserving its history. The fresh angle is `quarantine-state`: a record can be kept visible for correction and learning while being explicitly withheld from reuse or delivery. This is distinct from `invalidation-state`, which focuses on why a decision needs review after a dependency change.

The film will not claim that Stitch & Scale currently has quarantine, nonconforming-output control, archive isolation, error recovery, or workflow permissions. The concept uses original neutral cards labeled `ILLUSTRATIVE — NOT PRODUCT UI`.

## Source findings

### 1. GOV.UK Design System — preserve failed inputs while explaining how to fix them

The GOV.UK Error message guidance says an error message should explain what went wrong and how to fix it. It recommends keeping both passing and failing answers rather than clearing fields, because retaining the information helps users see what went wrong, edit the previous answer, and avoid re-entering information. It also says messages should be specific, clear, concise, and consistent, and that service problems the user cannot fix should be explained through a different route rather than presented as a normal input error. [1]

**Decision impact:** The visual treatment will not erase the uncertain record. It will place the record in a visibly separate `HOLD — DO NOT REUSE` tray while preserving a `REASON`, `EVIDENCE`, `CORRECTION`, and `REVIEW` path. The wording will be a plain instruction, not a vague “invalid” label.

### 2. Craft Yarn Council — common mistakes require records, exact details, and correction boundaries

The Craft Yarn Council’s Designer Pitfalls list includes missing or poorly calculated measurements, mismatched gauge, missing yarn colors and precise amounts, incorrect math, omitted stitch counts, unexplained abbreviations, missing repeat information, failure to keep notes, incomplete records, missing schematics or charts, and schematics not drawn to scale. It also warns against making changes in a contracted project without prior permission and submitting without instructions, schematics, or charts. [2]

**Decision impact:** The illustrative record will show a specific reason and affected evidence rather than a generic red failure stamp. Technical editing, physical print review, chart readability, schematic scale, and test knitting remain separate human gates. A quarantined record does not mean those gates passed or failed unless current human evidence says so.

### 3. Craft Yarn Council — submission scope and recipient requirements matter

The Council’s “Where to Start?” guidance says companies and magazines have their own requirements, ideas should be submitted to one recipient at a time, and acceptance may lead to a contract. It also notes that a proposal may be returned because it does not fit the recipient’s needs. [3]

**Decision impact:** The hold card will include a `REUSE_SCOPE` field and a disposition rather than suggesting that isolation is universal or permanent. The film will not invent an actual Stitch & Scale submission workflow, contract, exclusivity term, or commercial outcome.

### 4. ISO 9001 nonconforming-output control was a search lead, not a primary citation

Search results surfaced secondary explanations of ISO 9001:2015 Clause 8.7, commonly summarized as identifying and controlling nonconforming outputs to prevent unintended use or delivery. The official ISO standard text was not retrieved in this run, so the concept does not cite or restate the clause as verified evidence. The phrase “do not reuse” is used as an illustrative planning label, not as a claim of ISO compliance or product behavior.

## Audience and workflow relevance

The primary audience remains independent knitwear designers and pattern publishers coordinating calculations, technical editing, physical print review, chart readability, schematic scale, test knitting, samples, swatches, revisions, tester feedback, submissions, and intended users. The planning hypothesis is that a visible hold with a reason and correction path is safer than deleting or silently carrying forward an uncertain record. No current user study, incident report, product telemetry, or product-proof registry entry verifies this as a measured Stitch & Scale outcome.

David is a developer whose late mother knitted. He does not knit and must not be described as a knitter, knitwear designer, pattern designer, technical editor, or tester. The film teaches workflow honesty and does not claim personal craft practice.

## Platform, accessibility, and visual opportunity

The planned output remains a 9:16, 45-second mobile-first social explainer with destination platform unconfirmed. The hold record will be shown in separate readable inserts for `REASON`, `EVIDENCE`, `CORRECTION`, `REUSE_SCOPE`, `REVIEW_OWNER`, and `DISPOSITION`. Captions must not cover hands, cards, labels, numbers, logos, controls, menus, or the primary action. Caption-on and caption-free review remain required. No current safe-area or caption behavior is treated as verified until a destination is named.

The visual opportunity is a neutral record moving from a shared work area into a clearly marked hold tray. The reason card stays attached, a correction card remains blank, and the final disposition reads `HOLD — DO NOT REUSE` rather than `DELETED`. The emotional turn is relief through controlled incompleteness: the record is safe to inspect without being mistaken for a deliverable.

## Product truth, rights, and uncertainty

No current product-proof registry verifies a quarantine surface, hold tray, reuse restriction, reason field, correction path, reviewer assignment, or re-review transition. All cards are original props labeled `ILLUSTRATIVE — NOT PRODUCT UI`. No current UI, customer record, private material, copyrighted pattern, logo, testimonial, revenue, adoption, accuracy, capability, urgency, final pricing, or outcome may be introduced.

Rights for original cards, neutral materials, narrator, foley, and music-free sound remain unverified until a production inventory is approved. The destination platform remains unknown. These gaps independently block generation.

## Research limitations

GOV.UK guidance concerns user-facing input errors, not nonconforming craft records or Stitch & Scale behavior. Craft Yarn Council guidance is industry guidance, not a current product contract or measured audience study. ISO-related material was not cited because the primary standard was unavailable. The concept is source-informed educational framing only.

## References

[1]: https://design-system.service.gov.uk/components/error-message/ "GOV.UK Design System — Error message" (accessed 2026-08-20)  
[2]: https://www.craftyarncouncil.com/pitfalls.html "Craft Yarn Council — Designer Pitfalls" (accessed 2026-08-20)  
[3]: https://www.craftyarncouncil.com/idea.html "Craft Yarn Council — You Want to Submit a Project Idea… Where Do You Start?" (accessed 2026-08-20)

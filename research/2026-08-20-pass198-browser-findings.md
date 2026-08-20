# Pass 198 Wide Research — Invalidation State

**Date:** 2026-08-20  
**Director role:** Planning only; no video generation or upload  
**Research question:** When a decision depends on upstream entities, inputs, or human checks, what should happen when one of those dependencies changes, expires, or can no longer be verified?

## Decision changed by research

Pass 197 separated suitability evidence from authorization for a defined scope. The fresh research shows a further boundary: even an authorized decision can become unsafe to reuse if an upstream input, source, version, material, or human-gate result changes. Pass 198 therefore selects `invalidation-state` and will depict a decision card losing its “usable” status when a linked dependency changes. The film must not claim that Stitch & Scale currently tracks dependency graphs, automatically invalidates decisions, detects stale inputs, or propagates warnings.

## Source findings

### 1. W3C PROV-DM — provenance connects entities, activities, and responsibility

W3C PROV-DM defines provenance as information about entities, activities, and people involved in producing, influencing, or delivering a data item or thing. It distinguishes entities, activities, agents, derivations, time, responsibility, and collections; it describes derivation as a transformation, update, or construction of a new entity from a pre-existing entity. It also notes that provenance supports assessments of quality, reliability, and trustworthiness. [1]

**Decision impact:** The visual engine should show a decision card linked to an upstream source card, then visibly mark the decision as requiring review when the source changes. The relation is illustrative only; it does not establish a current Stitch & Scale provenance or dependency feature.

### 2. W3C PROV-O — dependency can be expressed through derivation and invalidation concepts

W3C PROV-O provides an ontology for representing and interchanging provenance information across systems and contexts. Its terms include `Entity`, `Activity`, `Agent`, `Derivation`, `Revision`, and `Invalidation`, and its examples show how entities and activities can form chains with attribution and responsibility. [2]

**Decision impact:** The proof surface should expose the dependency and the decision’s disposition, rather than presenting a static approval mark. The script must avoid saying that a product automatically knows or reacts to such relationships.

### 3. Craft Yarn Council — production notes and material conditions are not optional memory

Craft Yarn Council guidance advises reconfirming yarn and color selection, checking dye lots, confirming availability, recording notes while working, checking sizing, matching gauge, listing materials and measurements, double-checking math, and submitting a schematic to scale. It also keeps the actual project, gauge swatch, instructions, schematic, invoice, and other submission elements distinct. [3]

**Decision impact:** The script will use illustrative dependency cards such as `YARN / DYE LOT / GAUGE / SOURCE NOTE` and separate human-gate cards. If one prerequisite changes, the decision becomes `REVIEW REQUIRED`; it does not become an automated pass or a claim that the product detected the change.

### 4. NIST configuration-change control search result was not used as a primary citation

The initial search surfaced NIST SP 800-53 configuration-change-control material, but the official control page redirected through an unauthorized frame in extraction. Because the primary text was not retrieved reliably in this run, it is recorded as a research lead rather than relied upon as evidence. The pass remains grounded in the accessible W3C recommendations and Craft Yarn Council guidance. This uncertainty prevents overclaiming a formal change-control analogy.

## Audience and workflow relevance

The primary audience remains independent knitwear designers and pattern publishers coordinating calculations, technical editing, physical print review, chart readability, schematic scale, test knitting, samples, swatches, revisions, tester feedback, submissions, and intended users. The planning hypothesis is that a previously accepted record may be reused after a material, source, version, or human-gate change unless the dependency and review state are visible. No current user study, incident report, product telemetry, or product-proof registry entry verifies this as a measured Stitch & Scale outcome.

David is a developer whose late mother knitted. He does not knit and must not be described as a knitter, knitwear designer, pattern designer, technical editor, or tester. The film teaches evidence boundaries and does not claim personal craft practice.

## Platform, accessibility, and visual opportunity

The planned output remains a 9:16, 45-second mobile-first social explainer with destination platform unconfirmed. Dense dependency cards require dedicated close inserts. Captions must not cover hands, cards, labels, numbers, logos, controls, menus, or the primary action. Caption-on and caption-free review remain required. No platform safe-area or current caption behavior is treated as verified until a destination is named.

The visual opportunity is a clean, readable chain: `SOURCE / INPUT / HUMAN GATE` feeds an `AUTHORIZED DECISION`; one upstream card changes, a linking thread breaks, and the decision changes to `REVIEW REQUIRED`. The emotional turn is not alarm or an invented incident; it is relief that the record admits what must be checked again.

## Product truth, rights, and uncertainty

No current product-proof registry verifies a dependency map, source linkage, invalidation state, stale-input warning, review propagation, or current control labels. All cards are original props labeled `ILLUSTRATIVE — NOT PRODUCT UI`. No current UI, customer record, private material, copyrighted pattern, logo, testimonial, revenue, adoption, accuracy, capability, urgency, final pricing, or outcome may be introduced.

Rights for original cards, neutral materials, narrator, foley, and music-free sound remain unverified until a production inventory is approved. The destination platform remains unknown. These gaps independently block generation.

## Research limitations

W3C PROV is a general provenance data model and ontology, not a Stitch & Scale specification. Craft Yarn Council guidance is industry guidance, not a current product contract or measured audience study. NIST change-control material was a lead but not relied upon because the official control page did not extract reliably. The concept is therefore source-informed educational framing, not a claim about product behavior or audience outcomes.

## References

[1]: https://www.w3.org/TR/prov-dm/ "W3C — PROV-DM: The PROV Data Model" (2013 Recommendation; accessed 2026-08-20)  
[2]: https://www.w3.org/TR/prov-o/ "W3C — PROV-O: The PROV Ontology" (2013 Recommendation; accessed 2026-08-20)  
[3]: https://www.craftyarncouncil.com/industry.html "Craft Yarn Council — Congratulations! You’ve Received the Go Ahead" (accessed 2026-08-20)

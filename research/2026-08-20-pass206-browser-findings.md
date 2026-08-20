# Pass 206 Wide Research — Evidence Lineage State

**Date:** 2026-08-20  
**Director role:** Planning only; no video generation or upload  
**Research question:** How should a result expose the source trail that supports it, and how should the workflow show when that trail is incomplete or insufficient for the intended use?

## Decision changed by research

Pass 205 kept a result attached to scope, uncertainty, limitations, and cannot-conclude boundaries. Pass 206 adds the source-lineage boundary: the record should identify the entities, activities, derivations, responsible agents, and source documents that produced or influenced the result, while showing when the chain is incomplete. A source citation alone is not proof that the source was used correctly, remains current, or supports the intended claim. The fresh angle is `evidence-lineage-state`, focused on the trace from source to activity to result and the explicit gap where support is missing.

The film will not claim that Stitch & Scale currently records provenance, tracks derivation, assigns responsibility, validates source sufficiency, or automatically detects broken source chains. It will use original neutral cards labeled `ILLUSTRATIVE — NOT PRODUCT UI`.

## Source findings

### 1. W3C PROV-DM — provenance describes entities, activities, people, derivations, and responsibility

W3C describes provenance as information about entities, activities, and people involved in producing, influencing, or delivering a data item or thing. It says provenance can support assessments of quality, reliability, and trustworthiness. PROV-DM distinguishes entities and activities, derivations of entities, and agents bearing responsibility, with time and relationships forming the record. [1]

**Decision impact:** The visual record will separate `SOURCE_ENTITY`, `ACTIVITY_OR_TRANSFORM`, `DERIVATION_LINK`, `RESPONSIBLE_AGENT`, and `RESULT`. It will show the chain as a record to inspect, not as an automatic trust stamp.

### 2. GOV.UK Government Data Quality Framework — quality needs source, lifecycle, documentation, and communication

The Government Data Quality Framework describes data quality as fitness for purpose and recommends treating quality issues at source, assessing quality throughout the data lifecycle, documenting metadata and quality issues, communicating trade-offs, and keeping supporting documentation up to date. It warns that poor or unknown quality data weakens evidence and undermines trust. [2]

**Decision impact:** The treatment will put source and lifecycle fields beside the result, and will mark missing metadata, unknown source quality, and incomplete derivation as visible gaps. It will not claim that a citation or file automatically establishes data quality.

### 3. W3C WCAG-EM Report Tool — structured findings require experienced evaluation and can be saved as a report

W3C says the WCAG-EM Report Tool turns accessibility evaluation findings into a structured report, does not perform automated checks, and requires experienced accessibility evaluators with knowledge of standards, assistive technologies, and how people with disabilities use digital products. It also says unsaved data can be lost when the browser closes and encourages periodic report downloads. [3]

**Decision impact:** The package will keep a source or tool reference distinct from the human evaluation activity and result. It will not claim automated accessibility assessment, WCAG conformance, or a completed report.

### 4. Craft Yarn Council — instructions, gauge, and human reading are separate evidence activities

Craft Yarn Council advises reading the entire relevant instruction section, doing what the pattern says, and having another person read the pattern aloud when needed. It describes gauge as essential to project success and recommends a swatch using the specified yarn, needles, and pattern stitch. [4]

**Decision impact:** The lineage card will preserve calculation, technical editing, physical print review, chart readability, schematic scale, and test knitting as distinct activities and sources of evidence. One source or one reading is not a substitute for all human gates.

## Audience and workflow relevance

The primary audience remains independent knitwear designers and pattern publishers coordinating calculations, technical editing, physical print review, chart readability, schematic scale, test knitting, samples, swatches, revisions, tester feedback, submissions, and intended users. The planning hypothesis is that a result can look supported when the source exists but the derivation, activity, responsibility, or currentness is unclear. No current user study, incident report, product telemetry, or product-proof registry entry verifies this as a measured Stitch & Scale outcome.

David is a developer whose late mother knitted. He does not knit and must not be described as a knitter, knitwear designer, pattern designer, or technical editor. The film teaches source and activity boundaries and does not claim personal craft practice.

## Platform, accessibility, and visual opportunity

The planned output remains a 9:16, 45-second mobile-first social explainer with destination platform unconfirmed. The visual sequence will use readable inserts for source entity, source version/date, activity or transform, derivation link, responsible agent, result, missing metadata, and disposition. Captions must not cover hands, cards, labels, numbers, logos, controls, menus, or primary actions. Caption-on and caption-free review remain required. Exact safe-area and current caption behavior are not verified until a destination is named.

The visual opportunity is a chain of neutral cards connected by a thin line: `SOURCE_ENTITY` → `ACTIVITY_OR_TRANSFORM` → `DERIVATION_LINK` → `RESPONSIBLE_AGENT` → `RESULT`. One link is visibly dashed and labeled `NOT VERIFIED`, preventing the result from receiving a universal trust stamp. The emotional turn is cautious confidence: show the trail before asking anyone to trust the destination.

## Product truth, rights, and uncertainty

No current product-proof registry verifies an evidence-lineage surface, source metadata, derivation links, responsible-agent fields, source sufficiency, or broken-chain state. All cards are original props labeled `ILLUSTRATIVE — NOT PRODUCT UI`. No current UI, customer record, private material, copyrighted pattern, logo, testimonial, revenue, adoption, accuracy, capability, urgency, final pricing, or outcome may be introduced.

Rights for original cards, neutral materials, narrator, foley, and music-free sound remain unverified until a production inventory is approved. Destination platform remains unknown. These gaps independently block generation.

## Research limitations

W3C PROV-DM is a domain-agnostic provenance model, not a Stitch & Scale product contract. The Government Data Quality Framework is aimed at public-sector data quality and does not establish product behavior. The W3C Report Tool concerns accessibility evaluation reports and explicitly requires experienced evaluators; it does not establish accessibility conformance. Craft Yarn Council guidance is industry guidance, not a product contract or measured audience study. The concept is source-informed educational framing only.

## References

[1]: https://www.w3.org/TR/prov-dm/ "W3C — PROV-DM: The PROV Data Model" (accessed 2026-08-20)  
[2]: https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework "GOV.UK — Government Data Quality Framework" (accessed 2026-08-20)  
[3]: https://www.w3.org/WAI/eval/report-tool/ "W3C WAI — WCAG-EM Report Tool" (accessed 2026-08-20)  
[4]: https://www.craftyarncouncil.com/read_instructions.html "Craft Yarn Council — Reading Instructions & Other Basics" (accessed 2026-08-20)

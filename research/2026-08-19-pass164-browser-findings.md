# Pass 164 browser findings — rationale-state

**Date/time:** 2026-08-19 22:35 Africa/Lagos  
**Angle under review:** `rationale-state` — working premise: a decision can have evidence, provenance, and a reviewer while still lacking an explicit account of why the evidence and criteria led to that decision. This is planning only; no current Stitch & Scale capability is asserted.

## Official sources reviewed

### NIST Risk Management Framework
URL: https://csrc.nist.gov/projects/risk-management

NIST describes the RMF as a comprehensive, flexible, repeatable, and measurable seven-step process for managing security and privacy risk. The overview separates Prepare, Categorize, Select, Implement, Assess, Authorize, and Monitor. It states that assessment determines whether controls are in place, operating as intended, and producing desired results, while authorization is a senior official's risk-based decision to allow operation and monitoring is continuous. Used only as a process analogy, this supports a rationale card that links evidence and criteria to a bounded decision and keeps assessment separate from authorization. It does not prove a Stitch & Scale risk workflow, authorization, assessment, monitoring, or recommendation.

### W3C PROV-DM
URL: https://www.w3.org/TR/prov-dm/

W3C defines provenance as information about entities, activities, and people involved in producing a data item or thing, which can support assessments about quality, reliability, or trustworthiness. PROV-DM distinguishes entities and activities, derivations, agents and responsibility, and time. Used only as a boundary, this supports separating source/derivation/agent history from a rationale that explains why a decision followed. Provenance does not by itself establish criteria, alternatives considered, decision reason, approval, or correctness.

## Rationale model for planning

A fictional rationale card will use `DECISION / QUESTION / EVIDENCE / CRITERIA / ASSUMPTIONS / ALTERNATIVES / TRADEOFF / REASON / LIMIT / REVIEWER / DISPOSITION`. The card will visually connect each decision to its evidence and criteria while preserving a separate provenance strip. A reviewer should be able to answer why this decision was chosen, what alternative was rejected, under which assumptions, and where the conclusion stops. Rationale is not provenance, reviewability, confidence, authority, or approval.

## Distinctness decision

`rationale-state` is evaluated as distinct from `reviewability-state`, `provenance-state`, `confidence-state`, `authority-state`, `audit-state`, `relevance-state`, `sufficiency-state`, and imported `false-completion` / `release-gate-roster`. The angle concerns whether the decision's reason is explicit and connected to evidence, criteria, assumptions, alternatives, tradeoffs, limits, reviewer, and disposition, not whether a record can be inspected consistently, where it came from, how confident a person feels, who can authorize, whether an audit ran, whether evidence belongs to a decision, whether the minimum is met, or whether human gates are complete.

## Proposed proof vocabulary

`DECISION / QUESTION / EVIDENCE / CRITERIA / ASSUMPTIONS / ALTERNATIVES / TRADEOFF / REASON / LIMIT / REVIEWER / DISPOSITION`

## Research caution

No revenue, adoption, accuracy, customer result, credential, testimonial, pricing, urgency, legal sufficiency, risk-management compliance, authorization, or product capability is inferred from these sources. NIST and W3C are used as conceptual planning sources only.

## References

[1]: https://csrc.nist.gov/projects/risk-management "NIST Risk Management Framework"
[2]: https://www.w3.org/TR/prov-dm/ "W3C PROV-DM: The PROV Data Model"
[3]: https://csrc.nist.gov/pubs/sp/800/137/final "NIST SP 800-137, Information Security Continuous Monitoring"
[4]: https://www.craftyarncouncil.com/standards/schematics "Craft Yarn Council, Schematics"

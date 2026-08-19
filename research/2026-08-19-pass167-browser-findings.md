# Pass 167 browser findings — necessity-state

**Date/time:** 2026-08-19 22:58 Africa/Lagos  
**Angle under review:** `necessity-state` — working premise: a field may be permitted or visible without being necessary for a bounded craft decision, and the record should show why each retained field is needed and what can remain withheld. This is planning only; no current Stitch & Scale capability is asserted.

## Official sources reviewed

### W3C Privacy Principles
URL: https://www.w3.org/TR/privacy-principles/

The W3C Privacy Principles statement includes data minimization, purpose limitation, information access, transparency, and support for choosing which information to present. Relevant passages state that web APIs should minimize the data needed to carry out user goals and provide granularity and user controls over communicated personal data; actors should specify purpose and not use data for other purposes; and user agents should support choosing which information is provided. Used only as conceptual boundaries, these support a necessity card that links each field to a purpose and marks extra fields as withheld. They do not prove Stitch & Scale minimization, field-level control, privacy, redaction, consent, or product behavior.

### NIST Privacy Framework
URL: https://www.nist.gov/privacy-framework

NIST describes its Privacy Framework as a voluntary tool for helping organizations identify and manage privacy risk while protecting individuals' privacy. Used only as a conceptual boundary, this supports asking what data is required for the declared purpose and what unnecessary exposure or retention should be avoided. It does not prove Stitch & Scale privacy risk management, data minimization, retention control, field selection, or compliance.

## Craft and evidence context

Previously verified Craft Yarn Council reading-instructions and gauge guidance support distinguishing information needed for a particular craft task from extra context. Gauge, yarn, tools, stitch, and pattern context can be necessary for a craft result, but this package must not assert a universal minimum or product rule. The exact needed fields must be established by current product proof and human review, not inferred from general craft guidance.

## Necessity model for planning

A fictional necessity card will use `DECISION / PURPOSE / FIELD / WHY_NEEDED / MINIMUM_VALUE / FIELD_WITHHELD / CONSEQUENCE_OF_OMISSION / EXTRA_EXPOSURE / RETENTION / REVIEWED / DISPOSITION`. Necessity is separate from permission and audience control: a field can be allowed for an audience yet unnecessary for the decision, and a field can be necessary for one purpose but not another. The card must not imply a universal privacy threshold, legal test, secure redaction, or automated minimization.

## Distinctness decision

`necessity-state` is evaluated as distinct from `audience-control-state`, `consent-state`, `disclosure-state`, `relevance-state`, `sufficiency-state`, `applicability-state`, and imported `false-completion` / `release-gate-roster`. The angle concerns whether each retained field is needed for a declared decision purpose and what extra exposure can be withheld, not who receives a field, whether permission exists, whether a visible record is shareable, whether evidence belongs to a decision, whether the minimum evidence set is met, or whether a human-gate roster is complete.

## Proposed proof vocabulary

`DECISION / PURPOSE / FIELD / WHY_NEEDED / MINIMUM_VALUE / FIELD_WITHHELD / CONSEQUENCE_OF_OMISSION / EXTRA_EXPOSURE / RETENTION / REVIEWED / DISPOSITION`

## Research caution

No revenue, adoption, accuracy, customer result, credential, testimonial, pricing, urgency, legal sufficiency, privacy compliance, secure redaction, data-minimization feature, product threshold, or product capability is inferred from these sources. W3C and NIST are used as conceptual planning sources only.

## References

[1]: https://www.w3.org/TR/privacy-principles/ "W3C Privacy Principles"
[2]: https://www.nist.gov/privacy-framework "NIST Privacy Framework"
[3]: https://www.craftyarncouncil.com/read_instructions.html "Craft Yarn Council, Reading Instructions & Other Basics"
[4]: https://www.craftyarncouncil.com/blog/ydkwydk-gauge-and-why-its-important "Craft Yarn Council, Gauge and Why It Is Important"

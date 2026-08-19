# Pass 166 browser findings — audience-control-state

**Date/time:** 2026-08-19 22:50 Africa/Lagos  
**Angle under review:** `audience-control-state` — working premise: permission to use a record is not the same as controlling who receives which fields, for what purpose, through which channel, and until when. This is planning only; no current Stitch & Scale capability is asserted.

## Official sources reviewed

### NIST Privacy Framework
URL: https://www.nist.gov/privacy-framework

NIST describes the Privacy Framework as a voluntary tool intended to help organizations identify and manage privacy risk while protecting individuals' privacy. Used only as a conceptual boundary, this supports recording purpose, audience, fields, channel, retention/expiry, and review when a record moves from local visibility toward disclosure. It does not prove Stitch & Scale privacy controls, consent, redaction, audience selection, disclosure review, or compliance.

### W3C Privacy Principles
URL: https://www.w3.org/TR/privacy-principles/

The W3C Privacy Principles statement presents privacy as people-first governance and includes principles such as data minimization, information access, purpose limitation, transparency, consent and withdrawal, and support for choosing which information to present. The document also distinguishes discretion in disclosure from secrecy. Used only as a conceptual boundary, this supports separating consent from audience/field control and from the act of disclosure itself. It does not prove any Stitch & Scale disclosure, privacy, consent, redaction, retention, or user-control feature.

## Audience-control model for planning

A fictional share card will use `RECORD / PURPOSE / AUDIENCE / FIELDS_SHOWN / FIELDS_WITHHELD / CHANNEL / RETENTION_OR_EXPIRY / REVIEWED / REVOCATION_OR_CHANGE / DISPOSITION`. Permission is a separate question: consent may exist while the recipient, fields, purpose, channel, or expiry remain undefined. Disclosure is the actual movement or presentation boundary; audience control is the explicit constraint over who receives what and why. The card must not imply legal compliance or secure transmission.

## Distinctness decision

`audience-control-state` is evaluated as distinct from `consent-state`, `disclosure-state`, `authority-state`, `permission-state`, `privacy-boundary-state`, `portability-state`, and imported `false-completion` / `release-gate-roster`. The angle concerns whether a share or presentation is bounded by audience, purpose, field selection, channel, expiry, and review, not whether permission exists, whether a visible record is safe to share, who can authorize, whether a format can move, or whether human gates are complete.

## Proposed proof vocabulary

`RECORD / PURPOSE / AUDIENCE / FIELDS_SHOWN / FIELDS_WITHHELD / CHANNEL / RETENTION_OR_EXPIRY / REVIEWED / REVOCATION_OR_CHANGE / DISPOSITION`

## Research caution

No revenue, adoption, accuracy, customer result, credential, testimonial, pricing, urgency, legal sufficiency, security, privacy compliance, consent mechanism, redaction, access control, or product capability is inferred from these sources. NIST and W3C are used as conceptual planning sources only.

## References

[1]: https://www.nist.gov/privacy-framework "NIST Privacy Framework"
[2]: https://www.w3.org/TR/privacy-principles/ "W3C Privacy Principles"
[3]: https://csrc.nist.gov/glossary/term/accountability "NIST CSRC Glossary, Accountability"
[4]: https://www.craftyarncouncil.com/read_instructions.html "Craft Yarn Council, Reading Instructions & Other Basics"

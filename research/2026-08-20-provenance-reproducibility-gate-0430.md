# Director Research — Provenance Before Plausibility

research_id: RESEARCH-20260820-provenance-reproducibility-gate-0430
run_role: temporary-director
run_time: 2026-08-20T04:30:00+01:00
status: research-only
future_angle: checked-data-over-plausible-PDF

## Fresh research question

What makes an exported digital artifact traceable and reproducible rather than merely plausible-looking?

## External evidence

NIST defines data provenance as information about the method of generation, transmission, and storage that allows an item’s origin to be traced. [1] NIST’s Research Data Framework uses a lifecycle approach and describes reproducibility in terms of being able to replicate data using documented metadata, code, methods, and instruments. [2] W3C’s PROV overview describes provenance as information about entities, activities, and people involved in producing a data object and identifies reproducibility, versioning, procedures, and derivation as core provenance concerns. [3]

## Current product reconciliation

The live Stitch & Scale grading and Publish surfaces expose derived values, warnings, checks, export actions, and a credibility report. Those visible outputs can support a future evidence-chain story, but an attractive PDF or printed sheet alone is not proof of current inputs, derivation steps, version identity, or warning resolution. A responsible campaign would show the source state, transformation/version, export identity, and unresolved warnings together.

## Decision

Record one precise single-flight blocker. The active privacy-by-default contract is published remotely and remains the only eligible new-video contract while generation and independent review are outstanding. Reserve `checked-data-over-plausible-PDF` as a future distinct campaign; do not create a second Generator-ready brief in this firing.

## References

[1]: https://csrc.nist.gov/glossary/term/data_provenance "Data provenance — NIST CSRC Glossary"
[2]: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/1500-18/NIST.SP.1500-18r2.html "NIST Research Data Framework (RDaF), Version 2.0"
[3]: https://www.w3.org/TR/prov-overview/ "PROV-Overview — W3C"

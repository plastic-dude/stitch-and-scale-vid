# Director Research — Content Credentials and Media Provenance

research_id: RESEARCH-20260820-content-credentials-provenance-0600
run_role: temporary-director
run_time: 2026-08-20T06:00:00+01:00
status: research-only
future_angle: provenance-trailer

## Fresh research question

How can a future video or media manifest distinguish the origin and edit history of generated footage, product captures, and composed deliverables without overstating authenticity?

## External evidence

C2PA describes Content Credentials as an open technical standard for establishing the origin and edits of digital content. [1] Content Credentials explains that signed data can record creation time, source, and editing history, while fingerprinting and watermarking can help credentials travel with content. [2] The C2PA specification describes manifests, signed claims, assertions, ingredients, cryptographic content bindings, validation, and AI-disclosure assertions. It also states that provenance can provide trust signals but does not itself make value judgments about whether the underlying claims are good or bad. [3]

## Current product reconciliation

The Stitch & Scale video repository already stores manifests, source assets, script/brief versions, SHA-256 checksums, and Drive file IDs. These records establish an internal lineage contract, but they do not prove that a video is authentic, accurate, legally compliant, or approved merely because a manifest exists. Approved live product captures remain the only UI truth for the privacy-by-default film; generated atmosphere must be identified as generated and must not substitute for product evidence.

## Decision

Create one precise single-flight blocker. The acknowledged privacy-by-default contract remains the only active Generator lane while generation and independent review are outstanding. Reserve `provenance-trailer` as a future distinct campaign or manifest-enhancement angle; do not create a second Generator-ready brief in this firing.

## References

[1]: https://c2pa.org/ "C2PA — Advancing digital content transparency and authenticity"
[2]: https://contentcredentials.org/about/ "About Content Credentials"
[3]: https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html "C2PA Technical Specification 2.4"

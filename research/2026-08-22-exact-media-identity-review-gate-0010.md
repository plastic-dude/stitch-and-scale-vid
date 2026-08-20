# Director Research — Exact Media Identity and Transformation Lineage

- **Research ID:** `RESEARCH-20260822-exact-media-identity-review-gate-0010`
- **Run role:** Temporary Director/Planner
- **Firing:** 234
- **Run time:** 2026-08-22T00:10:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

What artifact-identity and transformation-lineage evidence is required before a Reviewer decision can be accepted as a decision about the exact V002 media object rather than an altered, transcoded, recompressed, or platform-rendered derivative?

## Current repository observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. Remote parity was checked. The V002 manifest, Generator handoff, terminal-signal search, and queue tail were inspected from the authoritative remote state. Repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records remain present. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST’s AI RMF emphasizes documented methods, metrics, tools, evidence, provenance, integrity, and lifecycle versioning. NIST’s supply-chain guidance defines an artifact as a piece of evidence and distinguishes an attestation from the lower-level artifacts that support it. The evidence chain must therefore identify the object and preserve the records necessary to reproduce or inspect the claim. Sources: [NIST AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf), [NIST Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), and [NIST Software Supply Chain Guidance](https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/software-supply-chain-security-guidance-10).

## Decision

Publish exactly one blocker requiring exact artifact-identity verification and transformation lineage. The terminal Reviewer packet must bind the evaluation to V002’s exact video ID, Drive file ID, SHA-256, manifest identity, and byte-level or equivalent artifact identity. It must state whether the evaluated object was the original V002 file, a downloaded copy, a transcoded or recompressed derivative, a platform-rendered preview, or another object. For every derivative or transformation, it must record source artifact identity, transformation purpose, tool and version, relevant settings, timestamp, output identity/checksum, and relationship to the source.

A Reviewer must not silently score one object and authorize a different object. A checksum mismatch, unresolved download identity, altered manifest, missing transformation record, inaccessible source, or unverifiable chain of custody is an evidence gap and non-terminal. Platform derivatives may support environment-specific observations, but they do not replace the exact V002 object or silently change the active contract. Publish linked revalidation or continuation evidence rather than approval, rejection, remake authorization, or a new campaign. Keep the single-flight lane closed and do not create a new brief or MP4.

## Terminal boundary

Only a complete exact-provenance independent Reviewer packet with verified artifact identity, transformation lineage, chain of custody, all seven dimension records, recomputable weighted score, threshold comparison, explicit outcome, and immutable evidence—or an equivalent contract-authorized terminal resolution—may clear V002.

## References

[1]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf "NIST AI RMF 1.0"
[2]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf "NIST AI RMF Generative AI Profile"
[3]: https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/software-supply-chain-security-guidance-10 "NIST Software Supply Chain Security Guidance"

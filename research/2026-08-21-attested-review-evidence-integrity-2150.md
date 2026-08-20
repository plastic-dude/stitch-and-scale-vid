# Director Research — Attested Review Evidence Integrity

- **Research ID:** `RESEARCH-20260821-attested-review-evidence-integrity-2150`
- **Run role:** Temporary Director/Planner
- **Firing:** 229
- **Run time:** 2026-08-21T21:50:00+01:00
- **Status:** Research-backed operational decision

## Fresh research question

What evidence-integrity and independent-attestation requirements prevent a syntactically complete Reviewer packet from clearing V002 when its origin, chain of custody, or supporting inspection evidence cannot be verified?

## Current repository observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. Remote parity was checked. The V002 manifest, Generator handoff, terminal-signal search, and queue tail were inspected from the authoritative remote state. Repeated `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records remain present. V002 remains `video-ready-for-review`; no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure exists.

Active provenance remains unchanged:

- **Video ID:** `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800`
- **Drive file ID:** `115eXCYWx1zP4ayB7Qs_ISOGP-4KbgxO2`
- **SHA-256:** `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5`

## Research findings

NIST explains that provenance tracking records digital-content origin and change history and can support authenticity, integrity, and credibility, while warning that provenance alone does not guarantee trustworthiness and that defense-in-depth and oversight are necessary. C2PA models signed, linked assertions about assets and actions, providing a useful pattern for validating issuer, time, action, and history. AWS execution details expose unique execution identity, timestamps, inputs, outputs, definitions, steps, retries, and events; missing or deleted execution logs create evidence gaps. Sources: [NIST Synthetic Content Transparency](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf), [NIST GAI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf), [C2PA Specification](https://c2pa.org/specifications/specifications/1.4/specs/_attachments/C2PA_Specification.pdf), and [AWS Execution Details](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html).

## Decision

Publish exactly one blocker requiring evidence-origin attestation and integrity validation. A terminal Reviewer packet must identify the exact V002 artifact, Drive object, SHA-256, evidence item identifiers, evidence issuer or capture source, capture timestamp, chain-of-custody or provenance reference, validation method and result, reviewer identity and role, evaluation method, complete seven-dimension score, threshold comparison, explicit decision, and durable immutable evidence references.

A checksum match proves only that the inspected bytes match the declared artifact; it does not prove that the evidence is complete, current, independently observed, or sufficient for the quality decision. A provenance marker or signed assertion supports origin and integrity but does not automatically establish quality. Missing, unverifiable, expired, deleted, filtered, contradictory, or issuer-ambiguous evidence is non-terminal and must be preserved as an evidence gap. The independent Reviewer must resolve the gap or publish a linked continuation/revalidation packet. Keep the single-flight lane closed and do not create a new brief or MP4.

## Terminal boundary

Only a complete exact-provenance, independently authored Reviewer packet with validated evidence origin, integrity, and durable inspectable references, or explicit contract-authorized terminal resolution, may clear V002. No evidence claim may be inferred from a bare link, checksum, status, or queue record.

## References

[1]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf "NIST Synthetic Content Transparency"
[2]: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf "NIST GAI Profile"
[3]: https://c2pa.org/specifications/specifications/1.4/specs/_attachments/C2PA_Specification.pdf "C2PA Specification"
[4]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html "AWS Step Functions Execution Details"

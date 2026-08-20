# Director Research — Non-Repudiable Review Evidence

- **Research ID:** `RESEARCH-20260820-non-repudiable-review-evidence-1627`
- **Run role:** Temporary Director/Planner
- **Firing:** 238
- **Run time:** 2026-08-20T16:27:58+00:00
- **Status:** Research-backed operational decision

## Fresh research question

What evidence is required to make a terminal Reviewer or owner decision non-repudiable and third-party verifiable, while preventing replay, stale-key use, payload substitution, or role confusion from clearing the V002 review lane?

## Current state observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. The authoritative V002 manifest, terminal-signal paths, and queue tail were inspected. The queue continues to show `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`, with no independent terminal Reviewer packet, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. The single-flight lane remains closed.

Active provenance remains:

| Field | Value |
|---|---|
| Video ID | `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800` |
| Drive file ID | `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC` |
| SHA-256 | `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5` |
| Status | `video-ready-for-review` |

## Research findings

NIST treats non-repudiation as third-party-verifiable assurance of data origin and integrity associated with a specific signatory or protection against falsely denying a specific action.[1] NIST describes digital signatures as providing origin authentication, data integrity, and signatory non-repudiation when properly implemented, and its Digital Signature Standard notes that a recipient can present a signature as evidence that the claimed signatory generated it.[2] [3] AWS recommends signed attestations for individual evidence-producing actions, including tests, packaging, and manual approval acceptance, with metadata about the environment and authoring party.[4]

A signature is not sufficient if it covers the wrong payload, comes from an unrecognized role, uses an expired or revoked key, is replayed, or is detached from the exact artifact and contract. The terminal packet must therefore bind the signed payload to the exact V002 video ID, Drive file ID, SHA-256, manifest and review-contract versions, canonical incident, causal parent, seven dimension records, threshold, and immutable evidence references. It must record signer identity, authorization context, key or credential reference, signature algorithm and version, signed-payload digest, verification result, key-status or trust-chain evidence, unique event ID, freshness data, and idempotency or nonce data.

## Decision

Publish exactly one blocker requiring non-repudiable terminal review evidence. A terminal outcome is non-terminal unless the signed or equivalently verifiable evidence binds the authorized Reviewer or owner to the exact decision payload and exact V002 artifact, and the verifier can validate identity, role authority, integrity, freshness, causal parent, key status, and replay uniqueness. Preserve signatures and verification records append-only. A signature from an unrecognized role, over an altered payload, for a stale contract, without exact artifact scope, without key-status evidence, or with a reused event/nonce is an evidence gap and cannot clear the lane.

Digital signatures do not replace authorization, separation of duties, evidence retention, or replay protection. Do not infer a terminal decision from a signed reminder, signed heartbeat, signed queue hold, or signed statement that lacks the required terminal fields. Do not create a new brief or MP4 while V002 is open.

## Terminal boundary

Only a complete independent Reviewer decision or contract-authorized owner resolution that is identity-bound, role-authorized, exact-provenance-bound, non-repudiably verifiable, fresh, replay-safe, and evidence-complete may clear V002.

## References

[1]: https://csrc.nist.gov/glossary/term/non_repudiation "NIST CSRC Non-Repudiation Glossary"
[2]: https://csrc.nist.gov/glossary/term/digital_signature "NIST CSRC Digital Signature Glossary"
[3]: https://www.nist.gov/publications/digital-signature-standard-dss-3 "NIST Digital Signature Standard"
[4]: https://docs.aws.amazon.com/wellarchitected/latest/devops-guidance/dl.cs.1-implement-automated-digital-attestation-signing.html "AWS: Implement Automated Digital Attestation Signing"

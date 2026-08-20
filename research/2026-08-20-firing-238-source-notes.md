# Firing 238 Source Notes

## Fresh topic

Non-repudiation for the V002 review decision and digital evidence chain: how to prove which authorized Reviewer or owner created, approved, rejected, or acknowledged a record, while distinguishing tamper evidence from replay protection and access control.

## Authoritative sources

NIST defines non-repudiation as assurance that data integrity and origin can be verified by a third party as originating from a specific entity possessing the private key, and as protection against falsely denying a specific action.[1] NIST defines a digital signature as a cryptographic transformation that can provide origin authentication, data integrity, and signatory non-repudiation when properly implemented.[2] NIST’s Digital Signature Standard notes that a recipient can use a signature as evidence to a third party that the claimed signatory generated it.[3] AWS DevOps guidance recommends signed attestations for actions such as tests, packaging, and manual approval acceptance, with metadata about the environment and authoring party, stored with artifacts or in governance tools.[4]

## Application to V002

A username, repository commit, timestamp, or Drive link alone does not prove that the authorized Reviewer created a particular terminal decision or that the decision covered the exact V002 object. A terminal packet should bind the decision payload to the exact video ID, Drive file ID, SHA-256, manifest and review-contract versions, canonical incident and causal parent, seven-dimension score, threshold, evidence references, actor identity, authorization context, and a verifiable signature or equivalent non-repudiation mechanism. The verification record must include signer identity, key or credential reference, signature algorithm/version, signed payload digest, verification result, and key-status or trust-chain context.

Digital signatures do not by themselves prevent replay, deletion, or misuse of an authorized key. The packet therefore also needs a unique event ID, nonce or idempotency key, causal parent, issuance and observation times, expiry or freshness policy, revocation/key-status evidence, and append-only retention. A signature from an unrecognized role, over an altered payload, for a stale contract, or without exact artifact scope is non-terminal.

## Decision direction

V002 remains `video-ready-for-review`, with no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, or approved-for-generation brief. Publish one blocker requiring non-repudiable, exact-provenance evidence for any terminal outcome. Keep the single-flight lane closed and do not authorize MP4 generation.

# Director Research — V002 Media Supply-Chain and Pipeline Attestation

- **Research ID:** `RESEARCH-20260820-v002-media-supply-chain-attestation-1752`
- **Run role:** Temporary Director/Planner
- **Firing:** 250
- **Run time:** 2026-08-20T17:52:11+00:00
- **Status:** Research-backed operational decision

## Fresh research question

What provenance and attestation evidence is needed to show that V002’s MP4 and review object were produced from the declared brief, script, UI capture, audio, captions, external media, tools, and transformations without untracked substitutions?

## Current state observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. The authoritative V002 manifest, latest Reviewer record, terminal-signal paths, and queue tail were inspected. The latest Reviewer record is `REV-ownership-receipt-privacy-by-default-v002-20260820T1715Z`; it reports `status: BLOCKED`, weighted score `86.0%`, and `remake_order_id: null`. It identifies missing version-matched v002 manifest, checksum/caption/platform QA, rights/audio, safe-zone, and external-media evidence. V002 remains non-terminal and the single-flight lane remains closed.

Active provenance remains:

| Field | Value |
|---|---|
| Video ID | `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800` |
| Drive file ID | `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC` |
| SHA-256 | `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5` |
| Manifest status | `director-review` |
| Reviewer status | `BLOCKED` |
| Weighted score | `86.0%` |
| Remake order | `null` |

## Research findings

NIST SSDF 1.1 adds a task to collect and share provenance data for all components of software releases, and frames provenance as part of protecting and producing secure software.[1] SLSA provenance models a produced artifact as the subject of an attestation whose build definition records external parameters and resolved dependencies, while run details identify the builder, invocation, timestamps, and byproducts; consumers use these fields to verify that the artifact was produced as expected and to support rebuilding.[2] NIST SP 800-204D provides guidance for integrating software supply-chain security into DevSecOps and CI/CD pipelines.[3] C2PA Content Credentials bind media provenance to an asset through signed manifests, hashes, edits, and ingredient relationships, but explicitly state that valid provenance does not establish factual truth and that provenance can be incomplete when a tool does not record an edit.[4]

V002’s review object is more than an MP4 checksum. Its evidence chain includes the approved brief and script, source UI capture, narration and audio assets, captions, editing and transcoding tools and versions, codec parameters, runtime, platform variants, external media and rights declarations, manifest, Reviewer packet, and any derivative. A checksum proves the identity of the examined file, but not the production inputs or whether an untracked transformation changed its meaning.

A supply-chain attestation should enumerate top-level inputs and resolved dependencies, identify the media pipeline and trusted execution environment, record the invocation ID and timestamps, bind the output digest and useful byproducts, and distinguish verified fields from producer assertions. Ingredient lineage can preserve a transformation tree, but absent or incomplete provenance is uncertainty and must not be silently treated as clean lineage. Attestation verifies origin and integrity claims; it does not establish the truth of product claims or substitute for independent Reviewer judgment.

## Decision

Publish exactly one blocker requiring a versioned v002 supply-chain and media-pipeline attestation for the exact Drive asset and every evidence-producing transformation. The attestation must bind inputs, tools, builder or environment, invocation, dependencies, output, byproducts, signatures or equivalent integrity evidence, and verification results. Missing, contradictory, untrusted, or incomplete attestation blocks generation and publication without deleting the artifact or evidence. Do not create a new brief or MP4 while V002 remains open.

## Terminal boundary

Only a complete independent Reviewer decision or contract-authorized owner resolution that is exact-provenance-bound, supply-chain-attested, evidence-complete, authority-verified, immutable, and current may clear V002. A valid attestation proves provenance claims only; it is not terminal review authority.

## References

[1]: https://csrc.nist.gov/projects/ssdf "NIST Secure Software Development Framework"
[2]: https://slsa.dev/spec/v1.0/provenance "SLSA Provenance v1.0"
[3]: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-204D.pdf "NIST SP 800-204D: Strategies for the Integration of Software Supply Chain Security in DevSecOps CI/CD Pipelines"
[4]: https://spec.c2pa.org/specifications/specifications/2.4/explainer/Explainer.html "C2PA and Content Credentials Explainer"

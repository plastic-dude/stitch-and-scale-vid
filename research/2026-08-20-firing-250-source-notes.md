# Firing 250 Source Notes

## Fresh topic

Media and software supply-chain provenance with build-environment attestation: proving that V002’s encoding, captions, audio, external media, and review object came from declared controlled inputs without untracked substitutions.

## Authoritative sources

NIST’s Secure Software Development Framework (SSDF) organizes practices around preparing the organization, protecting software, producing well-secured software, and responding to vulnerabilities. SSDF 1.1 specifically adds a task to collect and share provenance data for all components of software releases: https://csrc.nist.gov/projects/ssdf. SLSA provenance describes where, when, and how an artifact was produced; it binds a subject to a build definition, external and internal parameters, resolved dependencies, builder identity, invocation metadata, and byproducts so consumers can verify that the artifact was built as expected and can rebuild it: https://slsa.dev/spec/v1.0/provenance. NIST SP 800-204D addresses integrating software supply-chain security into DevSecOps CI/CD pipelines: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-204D.pdf. C2PA Content Credentials define cryptographically bound media provenance, including origin, edits, ingredients, hashes, and signatures, while explicitly warning that provenance does not by itself establish factual truth or complete provenance when an unrecognized tool omits an edit: https://spec.c2pa.org/specifications/specifications/2.4/explainer/Explainer.html.

## Application to V002

The V002 review object is more than an MP4 checksum. Its evidence chain includes the approved brief and script, source UI capture, narration and audio assets, captions, editing/transcoding tool and version, codec parameters, runtime, platform variants, external media and rights declarations, manifest, Reviewer packet, and any derivative. A checksum proves identity of the examined file but not how it was produced or whether an untracked input or transformation changed its meaning.

A supply-chain attestation should enumerate top-level inputs and resolved dependencies, identify the build or media pipeline and trusted execution environment, record invocation ID and timestamps, bind output digest and byproducts, and distinguish verified fields from producer-asserted fields. C2PA-style ingredient lineage can preserve a transformation tree, but absent or incomplete provenance must remain an uncertainty and cannot be silently treated as clean lineage. Attestation verifies origin and integrity claims; it does not establish that the product claims are true or that the Reviewer outcome is valid.

## Decision direction

V002 remains non-terminal after the Reviewer `BLOCKED` record at 86.0% with no `REMAKE_REQUIRED` order. Publish one blocker requiring a v002 supply-chain and media-pipeline attestation for the exact asset and its evidence-producing transformations. Keep the single-flight lane closed and do not authorize MP4 generation.

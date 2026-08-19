# Pass 137 browser findings — identity-state — 2026-08-19

## Sources checked in browser

| Source | Date/status checked | Findings used | Limits |
|---|---|---|---|
| RFC 9562, *Universally Unique Identifiers (UUIDs)* | 2026-08-19 | UUIDs are 128-bit identifiers intended to provide uniqueness across space and time, remain persistent, and support identifiers for database keys, file names, and system identifiers. The specification also documents variant properties and privacy/collision considerations. | Identifier standard; a UUID alone does not prove that a user-facing record is the same conceptual entity, that a copy is a revision, or that provenance is complete. |
| W3C, *PROV-DM: The PROV Data Model* | 2026-08-19 | PROV distinguishes entities with fixed aspects from activities; generation creates a new entity, usage consumes an existing entity in an activity, derivation connects a generated entity to a used entity, and attribution ascribes an entity to an agent. Provenance does not infer derivation merely because two artifacts were present in one activity. | Provenance model; not a current Stitch & Scale identity, copy, duplicate, or revision behavior. |

## Provisional research synthesis

The fresh question is: **When a craft record is reopened, copied, or exported, what proves it is the same record rather than a duplicate or a new derived record?** Candidate angle: `identity-state` — **“Named is not the same record.”** Fictional proof surface: `RECORD ID / DISPLAY NAME / PARENT / REVISION OR COPY / CREATED / DERIVED FROM / OWNER / REVIEWED`, explicitly illustrative until current product proof verifies exact labels. Visual metaphor: two visually similar record cards split at an identity fork; one is the same entity being revised, the other is a new copy/derived record, with the relationship named. Emotional turn: duplicate anxiety becomes traceable record identity. Final line: “Name which record this became.”

The candidate is provisionally distinct from `version-lock` (current is not the same version), `supersession-state` (new state replaces old), `conversion-trace` (transformation path), `provenance-chain` (where data came from), `commit-state` (saved status), `schema-state` (structural contract), and `authority-state` (which source controls). It focuses on the identity relationship between a record and its reopened, copied, revised, or exported states, not merely its version, replacement, transformation, origin, persistence, structure, or authority.

## Required blocker

No current product-proof registry or approved capture verifies stable record identifiers, parent/child relationships, same-record revision behavior, copy-versus-derivation semantics, ownership attribution, or reviewed identity state. The package must remain `blocked`. Next action: provide one versioned, non-private, rights-cleared approved capture or registry entry showing one record through reopen, copy or revision, and export with stable identifier, relationship label, created/revised context, attribution, and human review, then rerun product, claims, rights, caption, audio, platform, and acceptance gates.

## References

[771] [RFC Editor — RFC 9562: Universally Unique Identifiers (UUIDs)](https://www.rfc-editor.org/rfc/rfc9562.html)
[772] [W3C — PROV-DM: The PROV Data Model](https://www.w3.org/TR/prov-dm/)

## Research limit

The research supports a workflow-education concept only. It does not establish product capability, stable-ID semantics, copy/revision behavior, provenance completeness, ownership, or customer outcomes. It does not replace calculation, technical editing, physical print review, chart readability, schematic scale, or test knitting as separate human evidence gates.

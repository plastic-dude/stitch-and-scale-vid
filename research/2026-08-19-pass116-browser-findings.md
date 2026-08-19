# Pass 116 browser findings — version lock — 2026-08-19

## Sources checked

| Source | Checked | Findings used | Limits |
|---|---|---|---|
| Digital Preservation Coalition — Persistent identifiers | 2026-08-19 | A persistent identifier combines a unique identifier with a service that locates the resource over time; persistence depends on ongoing human and service maintenance, not just a unique string. Persistent identifiers help establish what a digital resource purports to be. | Preservation guidance; not a Stitch & Scale product or campaign claim. |
| RFC 7089 — Memento | 2026-08-19 | A resource can have prior frozen states; Memento uses datetime negotiation, TimeMaps, and explicit original/timegate/memento relationships to access past states. A frozen prior state is different from the current resource. | Informational RFC; no evidence Stitch & Scale supports Memento or time negotiation. |
| Semantic Versioning 2.0.0 | 2026-08-19 | A released version’s contents must not be modified; changes are released as a new version. Version changes communicate compatibility and public-API meaning only when the API is declared. | Software-versioning specification; not a product-version claim. |
| W3C PROV-DM | 2026-08-19 | Provenance records entities, activities, agents, generation, usage, derivation, and responsibility; prior state, derivation, and attribution should not be inferred from a bare label. | Domain-agnostic model; no product-proof evidence. |
| Stitch & Scale local publishing/export and QA contracts | Re-read 2026-08-19 | Publication records need versioned assets, filenames, localization/device previews, and integrity boundaries; QA distinguishes current calculations, physical print, charts, schematics, and test knits. | Internal workflow contracts, not current product behavior. |

## Research synthesis and decision shift

The fresh question is: **When a brief cites a product capture, source note, or prior output, what binds the claim to the exact artifact state rather than a later or altered version?** Research shifts the concept from generic freshness to a version-binding card that names `ARTIFACT ID / VERSION OR SNAPSHOT / CAPTURED AT / REFERENCED AS / CHANGED SINCE / SUPERSEDES / USES / OWNER`, with a frozen prior state explicitly distinct from “latest.”

Candidate angle: `version-lock` — **“Current is not the same version.”** Proof surface: `ARTIFACT ID / VERSION OR SNAPSHOT / CAPTURED AT / REFERENCED AS / CHANGED SINCE / SUPERSEDES / USES / OWNER`, explicitly illustrative until product proof verifies exact labels. Visual metaphor: a claim card points to one frozen capture while a “latest” card moves away; the claim pauses until the bound artifact is named. Emotional turn: citation anxiety becomes bounded evidence confidence without claiming truth. Final line: “Bind the claim to the version you actually saw.”

The candidate is distinct from `capture-freshness`, which asks whether a capture is current enough; `supersession-state`, which records replacement relationships; `review-expiry`, which sets review currency; `retention-state`, which governs storage and disposal; `provenance-chain`, which records source lineage; `authority-state`, which maps which field controls an output; `commit-state`, which addresses save acknowledgement; and `export-portability`, which addresses whether an export travels safely. `version-lock` focuses on exact artifact identity and frozen state binding at the moment a claim or planning decision is made.

## Product truth and blocker

No current product-proof registry or approved capture verifies exact version labels, snapshot identifiers, immutable artifact semantics, supersedes relationships, or claim-to-capture binding. Therefore no current UI, version history, audit, immutable-release, archive, or content-integrity capability may be claimed. The package must remain `blocked` with one next action: supply a versioned, non-private approved capture or registry entry containing the exact artifact ID/version or snapshot and one claim-to-artifact binding, then rerun all gates.

## Planned campaign framing

Assumption: no active brief was supplied, so classify as a blocked `founder-proof` micro-explainer for knitwear designers, technical editors, test knitters, and craft-business operators; objective is to show why “latest” is not a sufficient reference for a claim or review; tone is precise, calm, non-alarmist; distribution is organic-first Instagram Reels, TikTok, and YouTube Shorts; tier is blocked proof-led planning. David remains a developer whose late mother knitted, never a knitter, designer, pattern designer, technical editor, or tester.

## References

[649] [Digital Preservation Coalition — Persistent identifiers](https://www.dpconline.org/handbook/technical-solutions-and-tools/persistent-identifiers)
[650] [RFC 7089 — HTTP Framework for Time-Based Access to Resource States: Memento](https://www.rfc-editor.org/info/rfc7089)
[651] [Semantic Versioning 2.0.0](https://semver.org/)
[652] [W3C — PROV-DM: The PROV Data Model](https://www.w3.org/TR/prov-dm/)
[653] [Stitch & Scale local skill contracts — publishing/export and pattern QA workflows](file:///home/ubuntu/skills/knitwear-publishing-and-export/SKILL.md)

## Research limit

These sources establish version identity, frozen-state, and preservation principles, not Stitch & Scale product behavior. The candidate does not claim that the app currently exposes immutable releases, snapshot IDs, revision history, or claim-to-capture binding. Product truth remains unverified until a versioned approved capture or registry entry supplies the exact surface and behavior.

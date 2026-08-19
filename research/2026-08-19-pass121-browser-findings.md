# Pass 121 browser findings — dependency-state — 2026-08-19

## Sources checked

| Source | Checked | Findings used | Limits |
|---|---|---|---|
| NIST SP 800-128 — Guide for Security-Focused Configuration Management | 2026-08-19 | Configuration management is intended to manage and monitor configurations, minimize risk, and support change control; changes should be understood in relation to the system and its environment. | Security/configuration context; not a Stitch & Scale product claim. |
| W3C PROV-DM | 2026-08-19 | Provenance describes entities, activities, agents, derivations, usage, generation, and time; it can support assessments of quality, reliability, or trustworthiness and must account for changing entities. | Domain-agnostic provenance model; no product behavior evidence. |
| W3C PROV-O | 2026-08-19 | Provenance chains can connect activities and entities; `wasDerivedFrom`, `used`, and `wasGeneratedBy` express dependency and derivation relationships. | Ontology specification; not a current product capability claim. |
| Snowflake — Data Lineage Essential Guide | 2026-08-19 | Lineage traces origin, transformations, downstream assets, dependencies, ownership, and use; upstream changes require impact analysis and a maintained lineage record because stale lineage loses trust. | Enterprise data-governance guidance; not Stitch & Scale evidence. |
| Stitch & Scale local QA, craft-business, mobile-maker, and publishing/export contracts | Re-read 2026-08-19 | Grading, gauges, charts, schematics, exports, and review gates must remain linked to their evidence; a changed upstream fact cannot be treated as a current downstream result without recheck. | Internal contracts, not current product behavior. |

## Research synthesis and decision shift

The fresh question is: **When one upstream measurement, gauge, size-chart value, or rule changes, which downstream grading, chart, schematic, or export outputs become stale, and what proves they were rechecked?** The research changes the creative from generic lineage to a change-impact card naming `CHANGED INPUT / DEPENDENTS / LAST BUILT FROM / STALE? / RECHECKED? / OWNER / AFFECTED OUTPUT / RELEASE STATE`, explicitly illustrative until product proof verifies exact labels. Candidate angle: `dependency-state` — **“Changed upstream is not reviewed downstream.”** Visual metaphor: one upstream card changes and sends a stale signal through dependent grading/chart/schematic/export nodes until each recheck is named. Emotional turn: hidden ripple becomes bounded impact. Final line: “Name what changed before you trust what depends on it.”

The candidate is distinct from `authority-state`, which identifies what populated field controls an output; `provenance-chain`, which records source history; `version-lock`, which binds a claim to an exact artifact state; `drift-state`, which concerns currentness changing over time; `supersession-state`, which records replacement; `reproducibility-state`, which concerns rerun consistency; `conversion-trace`, which follows a conversion; and `outcome-proof`, which concerns whether a change improved an outcome. `dependency-state` focuses on **downstream impact and recheck obligation after an upstream change**.

## Product truth and blocker

No current product-proof registry or approved capture verifies dependency graphs, stale markers, affected-output lists, last-built-from links, change-impact warnings, recheck records, owners, or release-state propagation. Therefore no current lineage, invalidation, dependency-aware grading/export, stale-output detection, or release-safety capability may be claimed. The package must remain `blocked` with one next action: provide a versioned, non-private approved capture or registry entry for one upstream change linked to its affected downstream outputs and recheck state, then rerun all gates.

## Planned campaign framing

Assumption: no active brief was supplied, so classify as a blocked `founder-proof` micro-explainer for knitwear designers, technical editors, test knitters, and craft-business operators; objective is to show why an upstream change creates a downstream recheck obligation; tone is precise, calm, non-alarmist; distribution is organic-first Instagram Reels, TikTok, and YouTube Shorts; tier is blocked proof-led planning. David remains a developer whose late mother knitted, never a knitter, designer, pattern designer, technical editor, or tester.

## References

[694] [NIST SP 800-128 — Guide for Security-Focused Configuration Management](https://csrc.nist.gov/pubs/sp/800/128/upd1/final)
[695] [W3C — PROV-DM: The PROV Data Model](https://www.w3.org/TR/prov-dm/)
[696] [W3C — PROV-O: The PROV Ontology](https://www.w3.org/TR/prov-o/)
[697] [Snowflake — Data Lineage: Essential Guide for Enterprise Data Management](https://www.snowflake.com/en/data-governance/data-lineage/)
[698] [Stitch & Scale local skill contracts — QA, craft-business, mobile-maker, and publishing/export workflows](file:///home/ubuntu/skills/mobile-maker-workflows/SKILL.md)

## Research limit

These sources establish change-control, provenance, dependency, and impact-analysis principles, not Stitch & Scale product behavior. The candidate does not claim that the app currently exposes dependency graphs, stale markers, invalidation, affected-output lists, recheck records, owners, or release propagation. Product truth remains unverified until a versioned approved capture or registry entry supplies the exact surface and behavior.

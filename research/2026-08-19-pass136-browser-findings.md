# Pass 136 browser findings — schema-state — 2026-08-19

## Sources checked in browser

| Source | Date/status checked | Findings used | Limits |
|---|---|---|---|
| JSON Schema, *JSON Schema Validation: A Vocabulary for Structural Validation of JSON* | 2026-08-19 | JSON Schema can describe the meaning of JSON documents, provide UI hints, and assert what a valid document must look like. Its validation vocabulary includes structural requirements such as type, numeric/string/array constraints, required properties, and dependent-required properties. | The page is an IETF Internet-Draft dated 2022, not proof of a current Stitch & Scale data shape or implementation. |
| W3C, *Shapes Constraint Language (SHACL)* | 2026-08-19 | SHACL validates data graphs against conditions expressed in shape graphs; shape graphs can also describe data graphs and support uses such as UI building, code generation, and data integration. | W3C recommendation; not evidence that Stitch & Scale uses SHACL or exposes a schema-validation surface. |

## Provisional research synthesis

The fresh question is: **When a craft record is stored, what proves its structure was defined and validated rather than merely persisted as data?** Candidate angle: `schema-state` — **“Saved is not shaped.”** Fictional proof surface: `RECORD TYPE / REQUIRED FIELDS / CONSTRAINTS / DEPENDENCIES / VALIDATION RESULT / VERSION / REVIEWED`, explicitly illustrative until current product proof verifies exact labels. Visual metaphor: an unshaped record enters a schema frame; missing required fields and dependency failures remain visible rather than being smoothed into a green completion state. Emotional turn: “It saved” becomes “Its structure is inspectable.” Final line: “Name what the record must contain.”

The candidate is provisionally distinct from `commit-state` (saved is not a green check), `input-state` (entered is not intended), `unit-state` (number without unit is unfinished), `calibration-state` (measurement lacks reference and conditions), `acceptance-criteria` (a release decision needs explicit criteria), `validation`-adjacent prior work if any, and `false-completion`/`release-gate-roster` (human-gate completion). It focuses on structural shape and validation semantics for a stored record, not persistence, intent, measurement context, release criteria, or human-gate accountability.

## Required blocker

No current product-proof registry or approved capture verifies record schemas, required-field rules, cross-field dependencies, validation results, schema versions, or reviewed schema status. The package must remain `blocked`. Next action: provide one versioned, non-private, rights-cleared approved capture or registry entry showing one record type, required fields, a constraint or dependency, validation result, schema/version context, and human review, then rerun product, claims, rights, caption, audio, platform, and acceptance gates.

## References

[768] [JSON Schema — JSON Schema Validation: A Vocabulary for Structural Validation of JSON](https://json-schema.org/draft/2020-12/json-schema-validation)
[769] [W3C — Shapes Constraint Language (SHACL)](https://www.w3.org/TR/shacl/)

## Research limit

The research supports a workflow-education concept only. It does not establish product capability, data-model shape, validation accuracy, schema version, customer outcomes, or completeness. It does not replace calculation, technical editing, physical print review, chart readability, schematic scale, or test knitting as separate human evidence gates.

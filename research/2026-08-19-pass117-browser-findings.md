# Pass 117 browser findings — reproducibility-state — 2026-08-19

## Sources checked

| Source | Checked | Findings used | Limits |
|---|---|---|---|
| National Academies / NCBI — Reproducibility and Replicability in Science | 2026-08-19 | Reproducibility means consistent results using the same input data, computational steps, methods, code, and analysis conditions. Clear information about data, methods, parameters, and computational environment is needed. Exact reproducibility does not guarantee correctness. | Scientific-computing framework; not a Stitch & Scale product claim. |
| National Academies — Reproducibility chapter | 2026-08-19 | Unique identifiers for versions of data and code, environment details, and complete instructions improve reproducibility; nonpublic or changing data can prevent a direct rerun. | Research-report context; no product behavior evidence. |
| ACM Artifact Review and Badging | 2026-08-19 | Repeatability, reproducibility, and replicability are distinct; artifacts should be documented, consistent, complete, and exercisable, with verification/validation evidence. Reviewed artifacts and validated results are separate badges. | ACM policy page marked version 1.0 and not current; useful terminology, not product proof. |
| NIST — Cloud of Reproducible Records | 2026-08-19 | Reproducible records benefit from dedicated workflow management, unique IDs and timestamps, dependency/environment capture, local storage when APIs are unavailable, hashes for output regression, and explicit run records. | Project page last updated 2025; research infrastructure example, not a Stitch & Scale capability. |
| Stitch & Scale local QA, craft-business, and publishing/export contracts | Re-read 2026-08-19 | QA separates calculation evidence from technical edit, print, chart, schematic, and test-knit evidence; records distinguish recorded facts from derived outputs; export requires asset/version/integrity checks. | Internal contracts, not current product behavior. |

## Research synthesis and decision shift

The fresh question is: **Can a grading or record output be reproduced from the same inputs, version, settings, and run record, and what evidence distinguishes a repeatable rerun from a merely similar or correct-looking result?** The research changes the creative from version identity alone to a replay card that names `INPUT SNAPSHOT / VERSION / SETTINGS / RUN AT / OUTPUT / DIFF / ENVIRONMENT / REVIEWER / RESULT`, explicitly illustrative until product proof verifies exact labels. Candidate angle: `reproducibility-state` — **“Repeatable is not reproduced.”** Visual metaphor: a result travels through a replay lane using the same input snapshot and settings; a second run pauses until its diff and environment are named. Emotional turn: “it looked right” becomes inspectable replay confidence. Final line: “Name the run before you trust the repeat.”

The candidate is distinct from `version-lock`, which binds a claim to an exact artifact state; `authority-state`, which maps which field controls an output; `absence-state`, which names non-values; `repro-note`, which records a note about reproduction; `measurement-provenance`, which records measurement context; `conversion-trace`, which follows a conversion; `grade-transparency`, which exposes grading math; `outcome-proof`, which distinguishes completion from improvement; and `capture-freshness`, which assesses capture currency. `reproducibility-state` focuses on the **rerun event and evidence of consistency**, including inputs, settings, environment, output difference, reviewer, and result.

## Product truth and blocker

No current product-proof registry or approved capture verifies input snapshots, versioned settings, environment records, replay controls, output diffing, hashing, reviewer/result states, or reproducibility semantics. Therefore no current UI, deterministic calculation, repeatability, reproducibility, regression testing, accuracy, or correctness capability may be claimed. The package must remain `blocked` with one next action: provide a versioned, non-private approved capture or registry entry for one reproducible rerun, including input snapshot, settings/version, output comparison, and review result, then rerun all gates.

## Planned campaign framing

Assumption: no active brief was supplied, so classify as a blocked `founder-proof` micro-explainer for knitwear designers, technical editors, test knitters, and craft-business operators; objective is to show why a similar-looking result is not evidence of a documented rerun; tone is precise, calm, non-alarmist; distribution is organic-first Instagram Reels, TikTok, and YouTube Shorts; tier is blocked proof-led planning. David remains a developer whose late mother knitted, never a knitter, designer, pattern designer, technical editor, or tester.

## References

[659] [National Academies / NCBI — Reproducibility and Replicability in Science](https://www.ncbi.nlm.nih.gov/books/NBK547531/)
[660] [National Academies — Reproducibility](https://www.nationalacademies.org/read/25303/chapter/7)
[661] [ACM — Artifact Review and Badging](https://www.acm.org/publications/policies/artifact-review-badging)
[662] [NIST — Cloud of Reproducible Records](https://www.nist.gov/programs-projects/cloud-reproducible-records)
[663] [Stitch & Scale local skill contracts — QA, craft-business, and publishing/export workflows](file:///home/ubuntu/skills/knitwear-pattern-qa/SKILL.md)

## Research limit

These sources establish reproducibility and artifact-evidence principles, not Stitch & Scale product behavior. The candidate does not claim that the app currently exposes replay records, environment capture, hashes, diffs, or reproducibility controls. Product truth remains unverified until a versioned approved capture or registry entry supplies the exact surface and behavior.

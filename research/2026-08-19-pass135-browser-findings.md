# Pass 135 browser findings — calibration-state — 2026-08-19

## Sources checked in browser

| Source | Date/status checked | Findings used | Limits |
|---|---|---|---|
| NIST, *Metrological Traceability: Frequently Asked Questions and NIST Policy* | 2026-08-19 | NIST defines metrological traceability as a measurement result related to a reference through a documented unbroken chain of calibrations, each contributing to measurement uncertainty. NIST also states that the provider supports the claim, the user assesses validity, and traceability alone does not guarantee fitness for purpose. | Metrology policy; not a Stitch & Scale feature or a claim that a user’s measurement is traceable. |
| Craft Yarn Council, *YDKWYDK: Gauge and why it’s important* | 2026-08-19 | Gauge is described as stitches and rows per unit; the practical workflow is to make a sample swatch, compare it against the pattern gauge, and adjust needle/hook size, stitch count, or yarn if the result differs. The source notes that swatch dimensions and conditions can be pattern-specific. | Craft education article; not a product proof source and not a universal knitting rule. |

## Provisional research synthesis

The fresh question is: **When a gauge or body measurement is recorded, what proves it was taken against the intended reference and conditions rather than merely entered?** Candidate angle: `calibration-state` — **“Measured is not calibrated.”** A fictional proof surface would separate `MEASUREMENT / REFERENCE / CONDITIONS / INSTRUMENT / UNIT / DATE / REPEAT / REVIEWED`, explicitly illustrative until current product proof verifies exact labels. The product truth boundary is strict: these sources do not prove Stitch & Scale currently exposes calibration, traceability, reference, condition, instrument, repeat, or reviewed-measurement controls.

The candidate is provisionally distinct from `input-state` (entered is not intended), `unit-state` (number without a unit is unfinished), `tolerance-state` (within range is not understood), `reproducibility-state` (repeatable is not reproduced), and `absence-state` (zero is not missing). It focuses on the reference and conditions that make a recorded measurement meaningful, not the intention of an entry, its unit, interpretation of a tolerance, whether a repeat was reproduced, or what a blank/zero means.

## Required blocker

No current product-proof registry or approved capture verifies measurement reference, conditions, instrument, date, repeat, review, or calibration-related behavior. The package must remain `blocked`. Next action: provide one versioned, non-private, rights-cleared approved capture or registry entry showing a single measurement with its reference, conditions, unit, date, repeat or comparison, and human review, then rerun product, claims, rights, caption, audio, platform, and acceptance gates.

## References

[764] [NIST — Metrological Traceability: Frequently Asked Questions and NIST Policy](https://www.nist.gov/metrology/metrological-traceability)
[765] [Craft Yarn Council — YDKWYDK: Gauge and why it’s important](https://www.craftyarncouncil.com/blog/ydkwydk-gauge-and-why-its-important)

## Research limit

The research supports a workflow-education concept only. It does not establish product capability, measurement accuracy, calibration status, customer outcomes, or export behavior. It also does not replace technical editing, physical print review, chart readability, schematic scale, or test knitting as separate human evidence gates.

## Additional browser-verified source

| Source | Date/status checked | Findings used | Limits |
|---|---|---|---|
| BIPM/JCGM VIM3 §2.41 — Metrological traceability | 2026-08-19 | Defines traceability as a property of a measurement result related to a reference through a documented unbroken chain of calibrations, each contributing to measurement uncertainty. | Formal metrology definition; does not establish any product behavior or that a craft measurement requires laboratory calibration. |

The BIPM wording sharpens the creative distinction: a measurement can be recorded while its reference and conditions remain undocumented. The video must not imply that knitwear designers need laboratory calibration for ordinary gauge work; it should use “calibration” as a bounded metaphor for naming reference, conditions, and review, not as a product or certification claim.

[766] [BIPM/JCGM — VIM3 2.41 metrological traceability](https://jcgm.bipm.org/vim/en/2.41.html)

# Pass 142 browser findings — sensitivity-state — 2026-08-19

## Sources checked in browser

| Source | Date/status checked | Findings used | Limits |
|---|---|---|---|
| NIST Technical Note 1297, Appendix A, *Law of Propagation of Uncertainty* | 2026-08-19 | NIST models an output as a function of multiple input quantities and says the measurement process should contain quantities contributing significant uncertainty. The law uses sensitivity coefficients, input uncertainties, and covariance terms to describe combined result uncertainty. | Measurement-uncertainty guidance; not a grading-engine sensitivity report or Stitch & Scale product proof. |
| Craft Yarn Council, *Gauge and why it’s important* | 2026-08-19 | CYC explains that gauge is stitches and rows per unit and that a pattern’s specified gauge affects finished size. It recommends a swatch, notes personal tension differences, and gives practical corrections using needle/hook size, starting stitches, or yarn weight. | Craft workflow article; not product proof, mathematical sensitivity analysis, or a universal fit guarantee. |

## Provisional research synthesis

The fresh question is: **When a craft input changes slightly, what proves the resulting grading or export output remains within an understood range rather than silently changing materially?** Candidate angle: `sensitivity-state` — **“Stable is not insensitive.”** Fictional proof surface: `INPUT / PERTURBATION / OUTPUT DELTA / SENSITIVITY / RANGE / THRESHOLD / REVIEWED / DECISION`, explicitly illustrative until current product proof verifies exact labels. Visual metaphor: one input slider moves a small amount while two output cards diverge; the change is named rather than hidden. Emotional turn: “The number barely moved” becomes “What changed downstream?” Final line: “Name what moved when the input moved.”

The candidate is provisionally distinct from `tolerance-state` (whether a value is within a prescribed range), `dependency-state` (whether downstream items were reviewed after upstream changes), `calibration-state` (reference and measurement conditions), `reproducibility-state` (repeatability), `context-state` (what a value belongs to), `fitness-state` (suitability for intended use), and `uncertainty`-adjacent earlier work if any. It focuses on the response of an output to a changed input, including perturbation, output delta, sensitivity, range, threshold, review, and decision—not range membership, dependency notification, reference conditions, repeatability, semantic attachment, or suitability.

## Required blocker

No current product-proof registry or approved capture verifies sensitivity analysis, input perturbation, output delta, response range, threshold, review, decision semantics, or any robustness claim for grading or export. The package must remain `blocked`. Next action: provide one versioned, non-private, rights-cleared approved capture or registry entry showing a controlled input change and the resulting output delta, with sensitivity/range/threshold context and human review, then rerun product, claims, rights, caption, audio, platform, and acceptance gates.

## References

[786] [NIST — Technical Note 1297: Appendix A. Law of Propagation of Uncertainty](https://www.nist.gov/pml/nist-technical-note-1297/nist-tn-1297-appendix-law-propagation-uncertainty)
[787] [Craft Yarn Council — YDKWYDK: Gauge and why it’s important](https://www.craftyarncouncil.com/blog/ydkwydk-gauge-and-why-its-important)

## Research limit

The research supports a bounded sensitivity/uncertainty workflow concept only. It does not establish product capability, grading robustness, output accuracy, customer outcomes, or that a small input change is harmless. It does not replace calculation, technical editing, physical print review, chart readability, schematic scale, or test knitting as separate human evidence gates.

# Pass 154 browser findings — baseline-state

**Date/time:** 2026-08-19 22:19 Africa/Lagos  
**Angle under review:** `baseline-state` — working premise: a current result is not necessarily comparable until the reviewed reference/baseline, date/version, measurement context, and allowed change are named. This is a planning angle only; no current Stitch & Scale capability is asserted.

## Official sources reviewed

### NIST CSRC — baseline configuration
URL: https://csrc.nist.gov/glossary/term/baseline_configuration

NIST defines a baseline configuration as a documented set of specifications for a system or configuration item that was formally reviewed and agreed at a point in time, and that can be changed only through change-control procedures. The page also states that the baseline is used as a basis for future builds, releases, and changes. This supports a proof surface that distinguishes the approved reference from the current state, records when it was accepted, identifies the proposed change, and records review/disposition. It does **not** prove that the Stitch & Scale product implements baselines, change control, or any particular workflow.

### Craft Yarn Council — Standard Body Measurements/Sizing
URL: https://www.craftyarncouncil.com/standards/body-sizing

The Council explains that fit work should use body measurements and that pattern instructions may provide completed-garment sizing plus schematics showing specific garment measurements across sizes. It cautions that standard fit and length charts are guidelines, that individual changes may be appropriate, and that changes can alter the appearance of a garment. This supports a craft-specific distinction between a reference measurement set and a current measurement/result, with context such as body/garment measure, size, unit, ease, date, and intended use. It does **not** prove any application feature or user outcome.

## Distinctness decision

`baseline-state` is materially distinct from prior `consistency-state` and `divergence-state`. `consistency-state` concerns agreement among fields or views inside one record; `divergence-state` concerns two derived outputs drifting from one source. `baseline-state` instead concerns whether a current state is compared against a named, reviewed, time-bound reference before a change or decision. It does not reopen imported `false-completion` or `release-gate-roster`, and remains blocked pending current approved product proof.

## Proposed proof vocabulary

`BASELINE / BASELINE_VERSION / BASELINE_DATE / CURRENT / CURRENT_VERSION / CONTEXT / MEASURE / UNIT / ALLOWED_CHANGE / OBSERVED_CHANGE / REVIEWED / DISPOSITION`

## Research caution

No revenue, adoption, accuracy, customer result, credential, testimonial, pricing, urgency, or product capability is inferred from the sources. The source language is used as a conceptual planning basis only.

## References

[1]: https://csrc.nist.gov/glossary/term/baseline_configuration "NIST CSRC, baseline configuration glossary"
[2]: https://www.craftyarncouncil.com/standards/body-sizing "Craft Yarn Council, Standard Body Measurements/Sizing"

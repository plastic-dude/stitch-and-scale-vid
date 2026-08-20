# Pass 185 Wide-Research Findings — `qualification-state`

**Research date:** 2026-08-20  
**Director stamp:** `20260820-010139`  
**Status:** Research complete; concept remains blocked pending current product proof.

## Fresh question

When a craft-production workflow has evidence attached to a gate, what makes that evidence qualified for the decision rather than merely present: does it identify the item and condition tested, the method or source, the reviewer, the limitation, and the decision it is allowed to support?

## Evidence reviewed

| Ref | Source and access date | Evidence used | Uncertainty and boundary |
|---|---|---|---|
| [936] | NIST, *Software Verification & Validation* webinar description, updated 2020-07-23, accessed 2026-08-20: https://www.nist.gov/news-events/events/2016/04/software-verification-validation | NIST describes quality assurance as including documented evidence of verification and validation, inventories, assessment forms, and ongoing software evaluation. | This is a training resource for laboratory software and does not prove that Stitch & Scale uses NIST, ISO/IEC 17025, formal V&V, or any specific evidence registry. |
| [937] | W3C WAI, *Understanding Success Criterion 3.3.1: Error Identification*, WCAG 2.2, accessed 2026-08-20: https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html | W3C says automatically detected input errors should identify the item in error and describe the error in text; it distinguishes identifying an error from suggesting how to fix it and warns that generic messages may be insufficient. | This informs descriptive limitation and correction language only; it does not prove Stitch & Scale has automated validation or WCAG conformance. |
| [938] | Craft Yarn Council, *Industry Standards & Guidelines for Designers*, accessed 2026-08-20: https://www.craftyarncouncil.com/idea.html | CYC describes challenges across the pattern-production chain, including designer, editor, and final editing/printing stages; it notes that submissions may include sketches, swatches, samples, labels, review, and company-specific requirements. | This supports a craft-specific qualification question but does not establish a product workflow, review duration, acceptance rule, or outcome. |
| [939] | W3C WAI, *Captions/Subtitles*, accessed 2026-08-20: https://www.w3.org/WAI/media/av/captions/ | W3C requires synchronized captions for speech and needed non-speech audio, warns that automatic captions require confirmation and editing, and notes that player support for position and styling varies. | This informs production review only; it does not prove platform or product accessibility conformance. |
| [940] | YouTube Help, *Add subtitles & captions*, accessed 2026-08-20: https://support.google.com/youtube/answer/2734796?hl=en | YouTube supports adding captions during upload or through Studio and says captions broaden access. | Destination account, final metadata, and upload settings remain unknown; no upload is authorized. |

## Synthesis and changed decision

The sources support a bounded insight: **evidence needs a qualification boundary before it can support a decision**. A file, swatch, test note, or status may be real while still being insufficient for the gate under review because the item, condition, method, reviewer, limitation, or permitted decision is unclear. NIST’s V&V description emphasizes documenting evidence and ongoing evaluation; W3C’s error guidance emphasizes identifying the exact item and describing the problem rather than relying on generic signals; CYC’s production guidance shows that sketches, swatches, samples, editing, and printing occupy different stages and requirements.

The concept therefore narrows away from whether evidence exists or whether completion is claimed to **whether evidence is qualified for the decision it is being used to support**. The fictional proof surface is `EVIDENCE Q-001 / ITEM / CONDITION / METHOD_OR_SOURCE / REVIEWER / LIMITATION / SUPPORTS_DECISION / REVIEWED / DISPOSITION`. The film must use original paper cards labeled `ILLUSTRATIVE — NOT PRODUCT UI`, not a fabricated current app screen.

## Selected concept and distinctness

- **Angle slug:** `qualification-state`
- **Hook:** “Evidence can be real and still not qualify this decision.”
- **Final line:** “Name what this evidence is allowed to prove.”
- **Nearest prior:** `completion-boundary-state` (pass 184), with `evidence-chain-state`, `scope-of-proof-state`, and `sufficiency-state` as secondary neighbors.
- **Changed pain:** from a status requiring owner and evidence at handoff, to evidence being used beyond the condition, method, reviewer, limitation, or decision it can support.
- **Changed visual metaphor:** from a completed-looking handoff card to a labeled evidence envelope whose contents are present but whose qualification fields are blank.
- **Emotional turn:** confidence in a full evidence folder becomes disciplined clarity when the allowed decision and limitation are written down.

`qualification-state` is not `completion-boundary-state` (status versus evidence at handoff), `evidence-chain-state` (linking evidence to a specific claim), `scope-of-proof-state` (declaring where proof applies), `sufficiency-state` (whether evidence is enough), `attestation-state` (a person’s assertion), `replication-state` (another person repeating a result), `audit-state` (review trail), or `false-completion` (a finished-looking record concealing unresolved human evidence). It focuses on the admissibility boundary: what exact evidence may support what exact decision under what condition and limitation.

## Product and truth reconciliation

No current product-proof registry entry or approved, non-private, rights-cleared capture verifies an evidence qualification record with item, condition, method/source, reviewer, limitation, supported decision, review, and disposition. The brief is therefore **blocked**. The paper evidence envelope must not resemble current Stitch & Scale UI, and no claim may be made that the product validates, qualifies, certifies, or guarantees evidence.

The imported `false-completion` and `release-gate-roster` concepts remain blocked and occupied. This concept does not reopen, rename, overwrite, or approve either one. David remains a developer whose late mother knitted; he is not a knitter, knitwear designer, pattern designer, technical editor, or tester. Calculation, technical editing, physical print review, chart readability, schematic scale, and test knitting remain separate human evidence gates.

## References

[936]: https://www.nist.gov/news-events/events/2016/04/software-verification-validation "NIST — Software Verification & Validation"
[937]: https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html "W3C WAI — Error Identification"
[938]: https://www.craftyarncouncil.com/idea.html "Craft Yarn Council — Industry Standards & Guidelines for Designers"
[939]: https://www.w3.org/WAI/media/av/captions/ "W3C WAI — Captions/Subtitles"
[940]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Add subtitles & captions"

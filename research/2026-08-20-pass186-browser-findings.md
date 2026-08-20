# Pass 186 Wide-Research Findings — `rollback-boundary-state`

**Research date:** 2026-08-20  
**Director stamp:** `20260820-010915`  
**Status:** Research complete; concept remains blocked pending current product proof.

## Fresh question

When a change is discovered after other craft-production work has started, what makes correction safe: can the team review what will change, identify affected outputs and gates, reverse or amend the change where possible, and prevent an unreviewed correction from propagating?

## Evidence reviewed

| Ref | Source and access date | Evidence used | Uncertainty and boundary |
|---|---|---|---|
| [941] | W3C WAI, *Understanding Success Criterion 3.3.6: Error Prevention (All)*, WCAG 2.1, accessed 2026-08-20: https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-all.html | W3C identifies three safeguards before a submission: reversible action, checked input with an opportunity to correct, or a mechanism to review, confirm, and correct before finalizing. | This supports a general correction-safety principle, not a claim that Stitch & Scale provides undo, review, reversal, or conformance. |
| [942] | GOV.UK Design System, *Check answers*, accessed 2026-08-20: https://design-system.service.gov.uk/patterns/check-answers/ | GOV.UK recommends a review page before sending, clear `Change` links, pre-populated prior answers, and a return to the review page after edits; it says review can reduce errors and increase confidence. | GOV.UK guidance is not a Stitch & Scale specification and does not prove versioning, impact analysis, or correction propagation behavior. |
| [943] | Craft Yarn Council, *Industry Standards & Guidelines for Designers*, accessed 2026-08-20: https://www.craftyarncouncil.com/idea.html | CYC describes pattern production from design through editing and printing, distinguishes sketches, swatches, samples, review, company-specific requirements, and submission timing, and stresses that the production chain involves multiple stages. | This supports the craft-specific pain of a change arriving after downstream work begins, but does not prove any product correction workflow or outcome. |
| [944] | W3C WAI, *Captions/Subtitles*, accessed 2026-08-20: https://www.w3.org/WAI/media/av/captions/ | W3C requires synchronized captions for speech and needed non-speech audio, warns automatic captions need confirmation and editing, and notes caption positioning support varies by player. | This informs production review only; it does not prove platform or product accessibility conformance. |
| [945] | YouTube Help, *Add subtitles & captions*, accessed 2026-08-20: https://support.google.com/youtube/answer/2734796?hl=en | YouTube supports adding captions during upload or through Studio and says captions broaden access. | Destination account, final metadata, and upload settings remain unknown; no upload is authorized. |

## Synthesis and changed decision

The sources support a bounded insight: **correction safety depends on the boundary around a change, not merely on the existence of an edit control**. A team needs to know what is changing, which outputs or gates are affected, whether a review or confirmation is required, whether the change can be reversed, what remains pending, and who must re-check downstream work. GOV.UK’s review-before-send pattern and W3C’s reversible/checked/confirmed safeguards provide a general decision discipline; CYC’s multi-stage production chain supplies the craft context.

The concept therefore narrows away from generic reversibility or version history to a **correction boundary after downstream work begins**. The fictional proof surface is `CHANGE B-001 / PROPOSED_CHANGE / AFFECTED_OUTPUTS / AFFECTED_GATES / REVIEW_REQUIRED / REVERSIBLE_OR_AMENDABLE / OWNER / NEXT_CHECK / DISPOSITION`. The film must use original paper cards labeled `ILLUSTRATIVE — NOT PRODUCT UI`, not a fabricated current app screen.

## Selected concept and distinctness

- **Angle slug:** `rollback-boundary-state`
- **Hook:** “An edit is not safe just because it is possible.”
- **Final line:** “Name what this change reaches before you apply it.”
- **Nearest prior:** `qualification-state` (pass 185), with `reversibility-state`, `propagation-state`, `correction-trace`, and `provenance-state` as secondary neighbors.
- **Changed pain:** from evidence being qualified for a decision, to a correction being scoped against downstream outputs and human gates after work has begun.
- **Changed visual metaphor:** from an evidence envelope to a thread of downstream paper cards connected to one proposed amendment, with a review stop before the thread continues.
- **Emotional turn:** relief at finding a correction becomes disciplined pause when its impact and next checks are made visible.

`rollback-boundary-state` is not `reversibility-state` (whether a change can be undone), `propagation-state` (whether an upstream change reaches downstream outputs), `correction-trace` (whether a post-release correction is traceable), `qualification-state` (whether evidence may support a decision), `completion-boundary-state` (status versus evidence at handoff), `provenance-state` (lineage of a changed record), `resumption-state` (safe re-entry after pause), or `false-completion` (a finished-looking record concealing unresolved human evidence). It focuses on the review boundary before a correction is applied or allowed to propagate: affected outputs, affected human gates, review requirement, reversibility/amendability, owner, and next check.

## Product and truth reconciliation

No current product-proof registry entry or approved, non-private, rights-cleared capture verifies proposed-change review, affected-output mapping, affected-gate mapping, reversible/amendable behavior, owner, next check, or disposition in a current Stitch & Scale surface. The brief is therefore **blocked**. The paper change cards must not resemble current Stitch & Scale UI, and no claim may be made that the product offers undo, impact analysis, propagation control, or correction safety.

The imported `false-completion` and `release-gate-roster` concepts remain blocked and occupied. This concept does not reopen, rename, overwrite, or approve either one. David remains a developer whose late mother knitted; he is not a knitter, knitwear designer, pattern designer, technical editor, or tester. Calculation, technical editing, physical print review, chart readability, schematic scale, and test knitting remain separate human evidence gates.

## References

[941]: https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-all.html "W3C WAI — Error Prevention (All)"
[942]: https://design-system.service.gov.uk/patterns/check-answers/ "GOV.UK Design System — Check answers"
[943]: https://www.craftyarncouncil.com/idea.html "Craft Yarn Council — Industry Standards & Guidelines for Designers"
[944]: https://www.w3.org/WAI/media/av/captions/ "W3C WAI — Captions/Subtitles"
[945]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Add subtitles & captions"

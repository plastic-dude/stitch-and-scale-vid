# Pass 195 Wide-Research Findings — `effect-state`

**Research date:** 2026-08-20  
**Research question:** What evidence shows that a completed follow-through actually changed the intended craft artifact or gate, distinguishing action completion from verified effect?  
**Status:** Research complete; concept package remains blocked pending current product proof.

## Sources and evidence

| Ref | Source and access date | Evidence used | Boundary |
|---|---|---|---|
| [986] | NIST, *SP 800-128: Guide for Security-Focused Configuration Management of Information Systems*, accessed 2026-08-20: https://csrc.nist.gov/pubs/sp/800/128/upd1/final | NIST frames configuration management as managing and monitoring configurations to achieve adequate security and minimize organizational risk while supporting intended functionality. It emphasizes configuration management as an ongoing process rather than a single change event. | This supports the distinction between carrying out a change and verifying its effect on the intended configuration; it does not prove Stitch & Scale performs change control, monitoring, risk management, or effect verification. |
| [987] | GOV.UK Design System, *Step by step navigation*, accessed 2026-08-20: https://design-system.service.gov.uk/patterns/step-by-step-navigation/ | GOV.UK describes end-to-end journeys with logical order, multiple steps, return sessions, online/offline actions, and user research. It says tasks should be listed in the order users need to complete them and distinguishes task guidance from the completion state. | This supports sequencing and downstream-step reasoning; it does not prove product workflow orchestration or that completion of one step changes or verifies another artifact. |
| [988] | Craft Yarn Council, *Industry Standards & Guidelines for Designers*, accessed 2026-08-20: https://www.craftyarncouncil.com/idea.html | CYC describes challenges across pattern production from designer through editing/printing, including submitting concepts, swatches, sketches, labels, receiving confirmation, review timing, contracts, and project-specific requirements. | This supports a craft-specific chain where a submission or action may lead to later review and acceptance, but does not prove product submission, downstream effect, or gate status tracking. |
| [989] | W3C WAI, *Captions/Subtitles*, accessed 2026-08-20: https://www.w3.org/WAI/media/av/captions/ | W3C supports synchronized captions for speech and meaningful non-speech audio and warns that captions should not obscure relevant visual information. | This informs production review only; it does not prove platform or product accessibility conformance. |
| [990] | YouTube Help, *Add subtitles & captions*, accessed 2026-08-20: https://support.google.com/youtube/answer/2734796?hl=en | YouTube supports adding captions during upload or Studio and says captions broaden access. | Destination account, final metadata, and upload settings remain unknown; no upload is authorized. |

## Synthesis and changed decision

The sources support a bounded insight: **a follow-through action can be marked completed while its intended artifact, downstream step, or human gate remains unchanged or unverified**. A truthful effect record should identify the originating request, affected artifact or gate, before/after state, evidence of the observed change, verification method, residual limitation, and disposition. The film must not claim that Stitch & Scale changed any real artifact, gate, or outcome.

## Selected concept and distinctness

- **Angle slug:** `effect-state`
- **Hook:** “Completed is not the same as changed.”
- **Final line:** “Show the before, the after, and how you verified the difference.”
- **Nearest prior:** `follow-through-state` (pass 194).
- **Changed pain:** from proving that an acknowledged requested action happened, to proving that the action produced the intended change on the exact artifact or human gate.
- **Visual metaphor:** A request card gets a `COMPLETED` stamp, but the before/after artifact cards remain identical until the effect record is supplied; the track stays on hold.
- **Proof surface:** `EFFECT E-001 / REQUEST_ID / TARGET_ARTIFACT_OR_GATE / BEFORE_STATE / AFTER_STATE / OBSERVATION / VERIFICATION_METHOD / RESIDUAL_LIMITATION / DISPOSITION`.
- **Emotional turn:** relief at an action being marked complete becomes disciplined doubt about whether the intended difference exists and was verified.

`effect-state` is distinct from `follow-through-state` (whether a requested action was completed), `receipt-state` (delivery, receipt, acknowledgement, comprehension), `change-communication-state` (what a notice should contain), `rollback-boundary-state` (whether a correction can be reversed or scoped), `qualification-state` (what evidence may support a decision), `publication-boundary-state` (whether an exact output is ready to transfer), and imported `false-completion` / `release-gate-roster` concepts. It focuses on observed downstream difference after an action, not the action’s own status.

## Product and truth boundary

No current product-proof registry entry or approved, non-private, rights-cleared capture verifies a current effect surface with request ID, target artifact or gate, before state, after state, observation, verification method, residual limitation, and disposition. The eventual package must remain blocked. No product change propagation, effect verification, accuracy, outcome, adoption, or human-gate completion may be claimed. David remains a developer whose late mother knitted, not a knitter, designer, pattern designer, technical editor, or tester. Calculation, technical editing, physical print review, chart readability, schematic scale, and test knitting remain separate human evidence gates.

## References

[986]: https://csrc.nist.gov/pubs/sp/800/128/upd1/final "NIST — SP 800-128: Guide for Security-Focused Configuration Management of Information Systems"
[987]: https://design-system.service.gov.uk/patterns/step-by-step-navigation/ "GOV.UK Design System — Step by step navigation"
[988]: https://www.craftyarncouncil.com/idea.html "Craft Yarn Council — Industry Standards & Guidelines for Designers"
[989]: https://www.w3.org/WAI/media/av/captions/ "W3C WAI — Captions/Subtitles"
[990]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Add subtitles & captions"

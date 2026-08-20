# Pass 184 Wide-Research Findings — `completion-boundary-state`

**Research date:** 2026-08-20  
**Director stamp:** `20260820-005431`  
**Status:** Research complete; concept remains blocked pending current product proof.

## Fresh question

When several people or roles touch a craft-production workflow, what evidence distinguishes work that is genuinely complete from work that is merely saved, in progress, waiting on another person, blocked, or carrying a problem at handoff?

## Evidence reviewed

| Ref | Source and access date | Evidence used | Uncertainty and boundary |
|---|---|---|---|
| [931] | W3C WAI, *Understanding Success Criterion 4.1.3: Status Messages*, WCAG 2.2, accessed 2026-08-20: https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html | W3C defines status messages as information about action results, waiting, process progress, or errors; it distinguishes status from changes of context and emphasizes making updates available to assistive technology without unnecessarily interrupting work. | This supports status semantics and communication as design concerns, not a claim that Stitch & Scale implements accessible status messaging or meets WCAG. |
| [932] | GOV.UK Design System, *Complete multiple tasks*, accessed 2026-08-20: https://design-system.service.gov.uk/patterns/complete-multiple-tasks/ | GOV.UK recommends showing tasks, their order, and their statuses at the start of a transaction and each returning session. It distinguishes `Completed`, `Incomplete`, `In progress`, `Not yet started`, `Cannot start yet`, and problem states, and warns that status labels should stay short and should not be used as a substitute for an error summary or error message. | GOV.UK patterns are not a Stitch & Scale specification. They do not prove task ownership, reviewer identity, or product completion gates. |
| [933] | Craft Yarn Council, *Industry Standards & Guidelines for Designers*, accessed 2026-08-20: https://www.craftyarncouncil.com/idea.html | CYC describes pattern production as a chain from designer through editing and printing, says industry members identified challenges at every level, and distinguishes submissions, samples, review, contracts, and company-specific requirements. | This supports a multi-role handoff pain but does not prove any product workflow, submission status, or review SLA in Stitch & Scale. |
| [934] | W3C WAI, *Captions/Subtitles*, accessed 2026-08-20: https://www.w3.org/WAI/media/av/captions/ | W3C requires synchronized captions for speech and relevant non-speech audio, warns automatic captions need accuracy confirmation and editing, and notes caption styling/positioning varies by player. | This informs production review only; it does not prove platform or product accessibility conformance. |
| [935] | YouTube Help, *Add subtitles & captions*, accessed 2026-08-20: https://support.google.com/youtube/answer/2734796?hl=en | YouTube supports adding subtitles/captions during upload or in Studio and says captions broaden access. | Destination account, final metadata, and upload settings remain unknown; no upload is authorized. |

## Synthesis and changed decision

The sources support a bounded insight: **a status label describes state but does not, by itself, prove the evidence that justifies the state**. In a multi-role craft workflow, “completed” may mean a person finished an activity, while technical editing, physical print review, chart readability, schematic scale, and test knitting remain separate evidence gates. A useful status design must distinguish work not started, in progress, blocked, waiting, and complete, while surfacing the relevant action or problem without turning color or a badge into proof.

The concept therefore narrows away from generic task findability or saved/resume behavior to a **completion boundary at handoff**. The fictional proof surface is `WORK C-001 / STATE / OWNER / EVIDENCE_REQUIRED / EVIDENCE_PRESENT / BLOCKER / NEXT_ACTION / REVIEWED / DISPOSITION`. The film must use original paper cards labeled `ILLUSTRATIVE — NOT PRODUCT UI`, not a fabricated current app screen.

## Selected concept and distinctness

- **Angle slug:** `completion-boundary-state`
- **Hook:** “A status can say complete before the evidence is complete.”
- **Final line:** “Name what completion still needs.”
- **Nearest prior:** `discoverability-state` (pass 182), with `false-completion` and `release-gate-roster` as continuity neighbors, not interchangeable concepts.
- **Changed pain:** from finding the next action among tasks, to distinguishing a status from the evidence and human gate required to justify completion at handoff.
- **Changed visual metaphor:** from a crowded task table to a handoff card whose `COMPLETED` label is separated from its evidence slots and blocker.
- **Emotional turn:** confidence in a green or completed-looking badge becomes accountable clarity when the missing evidence and owner are named.

`completion-boundary-state` is not `discoverability-state` (finding the next action), `false-completion` (a finished-looking record concealing unresolved human evidence), `release-gate-roster` (a roster/accountability refinement for verified size coverage), `status-history-state` (the path of transitions), `evidence-chain-state` (linking evidence to a claim), `resumption-state` (safe return after interruption), or `readiness-state` if later proposed. It focuses on the boundary between a named status and the evidence required to defend that status at a role handoff.

## Product and truth reconciliation

No current product-proof registry entry or approved, non-private, rights-cleared capture verifies status semantics, owner, evidence required/present, blocker, next action, review, or disposition in a current Stitch & Scale surface. The brief is therefore **blocked**. The paper handoff card must not resemble current Stitch & Scale UI, and no claim may be made that the product marks completion, enforces gates, assigns ownership, or guarantees release readiness.

The imported `false-completion` and `release-gate-roster` concepts remain blocked and occupied. This concept does not reopen, rename, overwrite, or approve either one. David remains a developer whose late mother knitted; he is not a knitter, knitwear designer, pattern designer, technical editor, or tester. Calculation, technical editing, physical print review, chart readability, schematic scale, and test knitting remain separate human evidence gates.

## References

[931]: https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html "W3C WAI — Status Messages"
[932]: https://design-system.service.gov.uk/patterns/complete-multiple-tasks/ "GOV.UK Design System — Complete multiple tasks"
[933]: https://www.craftyarncouncil.com/idea.html "Craft Yarn Council — Industry Standards & Guidelines for Designers"
[934]: https://www.w3.org/WAI/media/av/captions/ "W3C WAI — Captions/Subtitles"
[935]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Add subtitles & captions"

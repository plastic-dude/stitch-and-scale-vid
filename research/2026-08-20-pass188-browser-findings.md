# Pass 188 Wide-Research Findings — `resolution-state`

**Research date:** 2026-08-20  
**Director stamp:** `20260820-012230`  
**Status:** Research complete; concept remains blocked pending current product proof.

## Fresh question

When a craft-production review request receives a reply, what distinguishes a real resolution from a receipt, acknowledgement, deadline, or generic suggestion: is the issue identified, the decision explicit, the reason or correction recorded, the affected artifact and gate named, and the next action closed or transferred?

## Evidence reviewed

| Ref | Source and access date | Evidence used | Uncertainty and boundary |
|---|---|---|---|
| [951] | GOV.UK Design System, *Contact a department or service team*, accessed 2026-08-20: https://design-system.service.gov.uk/patterns/contact-a-department-or-service-team/ | GOV.UK recommends telling users when a response is expected and helping them choose a contact channel; a response-time expectation is distinct from the content of the response itself. | This supports a response-versus-resolution distinction, not a claim that Stitch & Scale provides SLAs, contact channels, or resolution tracking. |
| [952] | W3C WAI, *Understanding Success Criterion 3.3.3: Error Suggestion*, WCAG 2.1, accessed 2026-08-20: https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html | W3C distinguishes merely notifying users that an input is wrong from providing a known way to correct it; suggestions should help users resolve errors faster and with less effort when known. | This supports explicit correction or next-action content as a design principle, not a claim that Stitch & Scale automatically detects or resolves errors. |
| [953] | Craft Yarn Council, *How to Write Your Own Pattern*, accessed 2026-08-20: https://www.craftyarncouncil.com/blog/ydkwydk-how-write-your-own-pattern | CYC describes recording work as it happens, transcribing later changes, using standards, technical editing as a second set of eyes, testing with people who follow the pattern, and using feedback on clarity, charts, materials, and finished results to adjust the design. | This supports a craft-specific resolution loop but does not prove a product review, correction, or closure workflow. |
| [954] | W3C WAI, *Captions/Subtitles*, accessed 2026-08-20: https://www.w3.org/WAI/media/av/captions/ | W3C requires synchronized captions for speech and relevant non-speech audio, warns automatic captions need confirmation and editing, and notes player differences in caption placement. | This informs production review only; it does not prove platform or product accessibility conformance. |
| [955] | YouTube Help, *Add subtitles & captions*, accessed 2026-08-20: https://support.google.com/youtube/answer/2734796?hl=en | YouTube supports adding captions during upload or through Studio and says captions broaden access. | Destination account, final metadata, and upload settings remain unknown; no upload is authorized. |

## Synthesis and changed decision

The sources support a bounded insight: **a reply is not automatically a resolution**. A response can acknowledge receipt, state a deadline, reject a request, ask for more information, suggest a correction, or record a decision. Resolution requires the issue or requested gate to be identified, the response to state what changed or was decided, the reason or correction to be explicit, the affected artifact or gate to be named, and the next action or closure state to be visible. CYC’s pattern-writing guidance demonstrates an iterative loop of recording, technical editing, testing, feedback, and adjustment; a reply that does not close or hand forward the affected work leaves that loop incomplete.

The concept therefore narrows away from request ownership, response expectation, acknowledgement, and refusal to **response-to-resolution closure**. The fictional proof surface is `RESPONSE R-001 / REQUEST_ID / ISSUE_OR_GATE / DECISION / REASON_OR_CORRECTION / AFFECTED_ARTIFACT / OWNER / NEXT_ACTION / CLOSURE_STATE / CLOSED_AT`. The film must use original paper reply cards labeled `ILLUSTRATIVE — NOT PRODUCT UI`, not a fabricated current app screen.

## Selected concept and distinctness

- **Angle slug:** `resolution-state`
- **Hook:** “A reply is not the same as a resolution.”
- **Final line:** “Show what changed, why, and what closes next.”
- **Nearest prior:** `request-ownership-state` (pass 187), with `refusal-state`, `qualification-state`, `correction-trace`, `completion-boundary-state`, and `status-history-state` as secondary neighbors.
- **Changed pain:** from a request having an owner and response expectation, to a received reply actually identifying the issue, decision, reason/correction, affected artifact/gate, next action, and closure state.
- **Changed visual metaphor:** from a request card in an unmarked tray to a reply card that is returned with `ACKNOWLEDGED` crossed out and a bounded resolution card attached.
- **Emotional turn:** relief at receiving a response becomes clarity when the response is converted into a named decision, correction, next action, and closure.

`resolution-state` is not `request-ownership-state` (ownership and response expectation), `refusal-state` (a reasoned refusal and safe next action), `correction-trace` (traceability of a correction), `qualification-state` (whether evidence may support a decision), `completion-boundary-state` (status versus evidence at handoff), `status-history-state` (transition history), or `rollback-boundary-state` (scoping a correction before propagation). It focuses on the semantic jump from a received reply to a closed or safely transferred issue.

## Product and truth reconciliation

No current product-proof registry entry or approved, non-private, rights-cleared capture verifies a current response-to-resolution surface with request ID, issue/gate, decision, reason/correction, affected artifact, owner, next action, closure state, and closure time. The brief is therefore **blocked**. The paper reply cards must not resemble current Stitch & Scale UI, and no claim may be made that the product resolves requests, detects errors, suggests corrections, updates artifacts, or closes review loops.

The imported `false-completion` and `release-gate-roster` concepts remain blocked and occupied. This concept does not reopen, rename, overwrite, or approve either one. David remains a developer whose late mother knitted; he is not a knitter, knitwear designer, pattern designer, technical editor, or tester. Calculation, technical editing, physical print review, chart readability, schematic scale, and test knitting remain separate human evidence gates.

## References

[951]: https://design-system.service.gov.uk/patterns/contact-a-department-or-service-team/ "GOV.UK Design System — Contact a department or service team"
[952]: https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html "W3C WAI — Error Suggestion"
[953]: https://www.craftyarncouncil.com/blog/ydkwydk-how-write-your-own-pattern "Craft Yarn Council — How to Write Your Own Pattern"
[954]: https://www.w3.org/WAI/media/av/captions/ "W3C WAI — Captions/Subtitles"
[955]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Add subtitles & captions"

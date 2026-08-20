# Pass 187 Wide-Research Findings — `request-ownership-state`

**Research date:** 2026-08-20  
**Director stamp:** `20260820-011542`  
**Status:** Research complete; concept remains blocked pending current product proof.

## Fresh question

When a craft-production review request is sent, what makes it a living responsibility rather than an unanswered message: is the request visible, owned by a role, bounded by a response expectation, connected to the relevant artifact and gate, and closed with a reason or next action?

## Evidence reviewed

| Ref | Source and access date | Evidence used | Uncertainty and boundary |
|---|---|---|---|
| [946] | GOV.UK Design System, *Contact a department or service team*, accessed 2026-08-20: https://design-system.service.gov.uk/patterns/contact-a-department-or-service-team/ | GOV.UK recommends providing contact information in context, ordering channels consistently, stating opening hours, telling users when a response is expected, and avoiding personal information in public social channels. | This supports response-expectation and channel clarity as service-design principles, not a claim that Stitch & Scale provides contact routing, SLAs, or public/private controls. |
| [947] | W3C WAI, *Understanding Success Criterion 4.1.3: Status Messages*, WCAG 2.2, accessed 2026-08-20: https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html | W3C defines status messages as information about action results, waiting, progress, or errors, and says important changes that do not take focus should still be available to assistive technology without unnecessarily interrupting work. | This informs visible waiting/response state only; it does not prove Stitch & Scale implements accessible notifications or meets WCAG. |
| [948] | Craft Yarn Council, *Congratulations! You’ve Received the Go Ahead*, accessed 2026-08-20: https://www.craftyarncouncil.com/industry.html | CYC describes explicit submission requirements, editor/design-director reconfirmation, notes kept during work, pattern instructions, sizing, schematics, swatches, technical-editing needs, and separate materials that must accompany a project. | This supports a craft-specific request-to-review chain but does not prove product ownership, response timing, or workflow automation. |
| [949] | W3C WAI, *Captions/Subtitles*, accessed 2026-08-20: https://www.w3.org/WAI/media/av/captions/ | W3C requires synchronized captions for speech and relevant non-speech audio, warns that automatic captions need confirmation and editing, and notes player differences in caption placement. | This informs production review only; it does not prove platform or product accessibility conformance. |
| [950] | YouTube Help, *Add subtitles & captions*, accessed 2026-08-20: https://support.google.com/youtube/answer/2734796?hl=en | YouTube supports adding captions during upload or through Studio and says captions broaden access. | Destination account, final metadata, and upload settings remain unknown; no upload is authorized. |

## Synthesis and changed decision

The sources support a bounded insight: **a request is not owned merely because it was sent**. A usable review request needs a visible request identity, the artifact and gate in scope, a responsible role or person, the expected response window or waiting state, the channel, the request’s current status, and a closure that records approval, refusal, reason, or next action. CYC’s detailed production checklist shows why a request may concern a swatch, yarn selection, sample size, technical editing, instructions, schematic, or submitted materials rather than a generic “review.” GOV.UK’s response-expectation guidance and W3C’s waiting/status framing reinforce that silence is not an interpretable state.

The concept therefore narrows away from generic handoff, escalation, acknowledgement, and status history to **request ownership and response closure**. The fictional proof surface is `REQUEST O-001 / ARTIFACT / GATE / REQUESTED_AT / OWNER / CHANNEL / RESPONSE_EXPECTED / STATUS / DECISION_OR_REASON / NEXT_ACTION / CLOSED_AT`. The film must use original paper request cards labeled `ILLUSTRATIVE — NOT PRODUCT UI`, not a fabricated current app screen.

## Selected concept and distinctness

- **Angle slug:** `request-ownership-state`
- **Hook:** “Sent is not the same as owned.”
- **Final line:** “Name who answers, by when, and what closes the request.”
- **Nearest prior:** `rollback-boundary-state` (pass 186), with `handoff-state`, `escalation-state`, `acknowledgement-state`, `status-history-state`, and `refusal-state` as secondary neighbors.
- **Changed pain:** from scoping a correction before it reaches downstream work, to ensuring a review request has an owner, response expectation, visible waiting state, and closure rather than vanishing after send.
- **Changed visual metaphor:** from a correction thread to a paper request card traveling into an unmarked tray, then being returned to a named owner with a response window and closure state.
- **Emotional turn:** anxiety in an unanswered queue becomes calm when the request’s owner, expectation, status, decision/reason, and next action are explicit.

`request-ownership-state` is not `handoff-state` (whether an exported artifact is actually transferred), `escalation-state` (whether a blocked issue reaches a higher role), `acknowledgement-state` (whether receipt is recognized), `status-history-state` (transition history), `refusal-state` (reasoned refusal and safe next action), `response-boundary-state` if later proposed, `request-custody-state` if later proposed, or `rollback-boundary-state` (scoping a correction before propagation). It focuses on the request lifecycle from send to owned response to closure, including response expectation and the reason/next action when the answer is not approval.

## Product and truth reconciliation

No current product-proof registry entry or approved, non-private, rights-cleared capture verifies a request record with artifact, gate, requested time, owner, channel, response expectation, status, decision/reason, next action, and closure time in a current Stitch & Scale surface. The brief is therefore **blocked**. The paper request cards must not resemble current Stitch & Scale UI, and no claim may be made that the product routes reviews, assigns owners, provides SLAs, tracks waiting, guarantees response, or closes requests.

The imported `false-completion` and `release-gate-roster` concepts remain blocked and occupied. This concept does not reopen, rename, overwrite, or approve either one. David remains a developer whose late mother knitted; he is not a knitter, knitwear designer, pattern designer, technical editor, or tester. Calculation, technical editing, physical print review, chart readability, schematic scale, and test knitting remain separate human evidence gates.

## References

[946]: https://design-system.service.gov.uk/patterns/contact-a-department-or-service-team/ "GOV.UK Design System — Contact a department or service team"
[947]: https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html "W3C WAI — Status Messages"
[948]: https://www.craftyarncouncil.com/industry.html "Craft Yarn Council — Congratulations! You've Received the Go Ahead"
[949]: https://www.w3.org/WAI/media/av/captions/ "W3C WAI — Captions/Subtitles"
[950]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Add subtitles & captions"

# Pass 192 Wide-Research Findings — `change-communication-state`

**Research date:** 2026-08-20  
**Research question:** How should a craft-production change be communicated to the affected audience, distinguishing an internal change record from a public notice with scope, impact, timing, owner, and safe next action?  
**Status:** Research complete; concept package remains blocked pending current product proof.

## Sources and evidence

| Ref | Source and access date | Evidence used | Boundary |
|---|---|---|---|
| [971] | GOV.UK Design System, *Notification banner*, accessed 2026-08-20: https://design-system.service.gov.uk/components/notification-banner/ | The component is for information users need that is not directly related to the current page, such as service-wide problems, deadlines, events elsewhere, or outcomes of an earlier action. GOV.UK says to use banners sparingly because people often miss them, combine messages when appropriate, and use the main page content when the information is directly relevant. | This supports message scope, priority, placement, and discoverability as design principles, not a claim that Stitch & Scale provides notification banners, audience notices, or alert routing. |
| [972] | W3C WAI, *Understanding Success Criterion 4.1.3: Status Messages*, WCAG 2.2, accessed 2026-08-20: https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html | W3C defines status messages as information about action results, waiting, progress, or errors, and says important changes that do not take focus should still be available to assistive technology without unnecessarily interrupting work. | This informs change/status communication only; it does not prove product accessibility or WCAG conformance. |
| [973] | Craft Yarn Council, *How to Write Your Own Pattern*, accessed 2026-08-20: https://www.craftyarncouncil.com/blog/ydkwydk-how-write-your-own-pattern | CYC describes recording each row/round, marking changes, transcribing notes, checking standards, using technical editing, testing with people who follow the pattern, gathering feedback on directions/charts/materials/results, and adjusting before release. | This supports a craft-specific change communication loop but does not prove product notification, change logs, errata, or public disclosure. |
| [974] | W3C WAI, *Captions/Subtitles*, accessed 2026-08-20: https://www.w3.org/WAI/media/av/captions/ | W3C supports synchronized captions for speech and meaningful non-speech audio and warns that captions should not obscure relevant visual information. | This informs production review only; it does not prove platform or product accessibility conformance. |
| [975] | YouTube Help, *Add subtitles & captions*, accessed 2026-08-20: https://support.google.com/youtube/answer/2734796?hl=en | YouTube supports adding captions during upload or Studio and says captions broaden access. | Destination account, final metadata, and upload settings remain unknown; no upload is authorized. |

## Synthesis and changed decision

The sources support a bounded insight: **recording a change internally does not ensure the affected audience sees the right notice**. A truthful change-communication record should identify the affected audience, changed artifact or version, impact, effective timing, owner/channel, required action, limitations, and disposition. It should also distinguish a directly relevant instruction from a contextual banner or general notification, avoid message overload, and preserve the craft revision trail from notes through standards, technical editing, testing, feedback, and release. The film must not claim that Stitch & Scale currently provides public change notices, notification routing, errata, alerts, or audience delivery.

## Selected concept and distinctness

- **Angle slug:** `change-communication-state`
- **Hook:** “A change recorded is not a change understood.”
- **Final line:** “Name who needs to know, what changed, and what they do next.”
- **Nearest prior:** `audience-readiness-state` (pass 191).
- **Changed pain:** from judging whether an output is ready for an external audience, to ensuring a material change reaches the affected audience with scope, impact, timing, owner/channel, required action, limitation, and disposition rather than remaining an internal note.
- **Visual metaphor:** An internal revision note remains pinned to a folder while an audience notice card is blank; the notice is built with affected audience, changed version, impact, timing, owner/channel, next action, limitation, and disposition.
- **Proof surface:** `NOTICE N-001 / AFFECTED_AUDIENCE / CHANGED_ARTIFACT_VERSION / IMPACT / EFFECTIVE_AT / OWNER_OR_CHANNEL / REQUIRED_ACTION / LIMITATION / DISPOSITION`.
- **Emotional turn:** confidence that “the note exists” becomes responsibility for whether the right people can understand and act on the change.

`change-communication-state` is distinct from `audience-readiness-state` (whether an output is ready for an external person/use), `publication-boundary-state` (exact output package and transfer scope), `status-history-state` (transition history), `disclosure-state` (what information is revealed), `notification-scope-state` if later proposed, `handoff-state` (whether an artifact is transferred), and imported `false-completion` / `release-gate-roster` concepts. It focuses on the communication path for a material change after it exists, not general audience readiness, package readiness, or human-gate roster status.

## Product and truth boundary

No current product-proof registry entry or approved, non-private, rights-cleared capture verifies a current change-communication surface with affected audience, changed artifact/version, impact, effective time, owner/channel, required action, limitation, and disposition. The eventual package must remain blocked. No product notification, alert, errata, change-log, public disclosure, audience-delivery, accessibility, or consumer outcome may be claimed. David remains a developer whose late mother knitted, not a knitter, designer, pattern designer, technical editor, or tester. Calculation, technical editing, physical print review, chart readability, schematic scale, and test knitting remain separate human evidence gates.

## References

[971]: https://design-system.service.gov.uk/components/notification-banner/ "GOV.UK Design System — Notification banner"
[972]: https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html "W3C WAI — Status Messages"
[973]: https://www.craftyarncouncil.com/blog/ydkwydk-how-write-your-own-pattern "Craft Yarn Council — How to Write Your Own Pattern"
[974]: https://www.w3.org/WAI/media/av/captions/ "W3C WAI — Captions/Subtitles"
[975]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Add subtitles & captions"

# Pass 182 Wide-Research Findings — `discoverability-state`

**Research date:** 2026-08-20  
**Director stamp:** `20260820-004050`  
**Status:** Research complete; concept remains blocked pending current product proof.

## Fresh question

When a craft workflow contains many valid tasks, how does a person find the next needed action without relying on memory, hunting through labels, or mistaking a status indicator for an action—especially when the work is read on a small screen or through captions?

## Evidence reviewed

| Ref | Source and access date | Evidence used | Uncertainty and boundary |
|---|---|---|---|
| [921] | W3C WAI, *Understanding Success Criterion 2.4.6: Headings and Labels*, WCAG 2.2, accessed 2026-08-20: https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html | W3C says headings and labels describe topic or purpose, help people understand organization, and make information easier to find; it notes benefits for people with cognitive or visual disabilities and limited short-term memory. | This supports a design principle, not a claim that Stitch & Scale currently meets WCAG or exposes a particular navigation structure. |
| [922] | GOV.UK Design System, *Task list*, accessed 2026-08-20: https://design-system.service.gov.uk/components/task-list/ | GOV.UK describes a task list as a way to show tasks, identify what is done or still needed, and let users choose an order when evidence shows they need to work across sessions. It warns against using a task list for a process that must be completed in a fixed order and records research concerns such as accidental clicking and status scanability. | GOV.UK guidance is not a Stitch & Scale specification. It does not authorize a product task list, save/resume behavior, or status semantics. |
| [923] | Craft Yarn Council, *How to Read a Knitting Pattern*, accessed 2026-08-20: https://www.craftyarncouncil.com/standards/how-to-read-knitting-pattern | CYC explains that abbreviations and terms save space but can be confusing; it teaches the reader to use keys and explicit conventions, and shows that phrases such as “maintain pattern as established” and repeat symbols require interpretation. | This is educational craft guidance, not proof that Stitch & Scale provides a glossary, guided next action, or reader-assistance feature. |
| [924] | W3C WAI, *Captions/Subtitles*, accessed 2026-08-20: https://www.w3.org/WAI/media/av/captions/ | W3C defines captions as synchronized text for speech and needed non-speech audio, warns that automatic captions are insufficient without accuracy confirmation and editing, and notes that caption positioning and styling support can vary across players. | This informs production review only. It does not prove platform support or product accessibility conformance. |
| [925] | YouTube Help, *Add subtitles & captions*, accessed 2026-08-20: https://support.google.com/youtube/answer/2734796?hl=en | YouTube says subtitles and captions broaden audience access and supports adding them during upload or through YouTube Studio, including manual and translated workflows. | Destination, channel settings, and current platform profile are not confirmed. No upload is authorized. |

## Synthesis and changed decision

The sources support a bounded insight: **findability is not the same as existence**. A task, label, status, abbreviation, or next action may be present yet remain hard to locate or interpret when its purpose is unclear, its order is ambiguous, or its status looks actionable. In craft reading, abbreviation keys and phrases such as “maintain pattern as established” are part of the reader’s orientation. In service design, a task list should be used only when users need flexible progress across tasks; a fixed sequence requires a different structure. This creates a useful dramatic boundary: do not make a decorative checklist; make the next action’s name, purpose, status, and order legible.

The decision changes the concept from broad mobile usability to a narrower **next-action findability** story. The fictional proof surface is `TASK D-001 / PURPOSE / ORDER_RULE / STATUS / NEXT_ACTION / HINT / LOCATION / REVIEWED`. The film must use neutral paper props labeled `ILLUSTRATIVE — NOT PRODUCT UI`, not a fabricated current app screen.

## Selected concept and distinctness

- **Angle slug:** `discoverability-state`
- **Hook:** “A task can exist and still be hard to find.”
- **Final line:** “Name the next action where the work is.”
- **Nearest prior:** `readability-under-load` (pass 175-era research line), with `handoff-state`, `observability-state`, `refusal-state`, and `reader-handoff` as secondary neighbors.
- **Changed pain:** from a page being visually/cognitively hard to read, to a real next action being hidden among valid tasks, unclear labels, or misleading status treatments.
- **Changed visual metaphor:** from competing text/chart/hand conditions to a tabletop of labeled task cards where one needed card is physically present but buried, then surfaced with purpose, order rule, status, and next action.
- **Emotional turn:** frustration from hunting becomes calm orientation when the next action is explicitly named and its status is not mistaken for a button.

`discoverability-state` is not `readability-under-load` (legibility under visual/cognitive load), `handoff-state` (whether an exported artifact is actually transferred), `observability-state` (whether an event can be seen), `refusal-state` (whether a stop names reason and safe action), `reader-handoff` (author-to-reader interpretation), `offline-continuity` (work under connectivity loss), or `task-order-state` if later proposed. It focuses specifically on findability and action semantics: purpose, ordering rule, status, next action, hint, location, and review.

## Product and truth reconciliation

No current product-proof registry entry or approved, non-private, rights-cleared capture verifies a task list, guided next action, glossary, persistent location, status semantics, or current mobile navigation surface. The brief is therefore **blocked**. The paper task cards must not resemble current Stitch & Scale UI, and no claim may be made that the product satisfies WCAG, improves memory, guarantees accessibility, or prevents user error.

David remains a developer whose late mother knitted; he is not a knitter, knitwear designer, pattern designer, technical editor, or tester. Calculation, technical editing, physical print review, chart readability, schematic scale, and test knitting remain separate human evidence gates.

## References

[921]: https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html "W3C WAI — Headings and Labels"
[922]: https://design-system.service.gov.uk/components/task-list/ "GOV.UK Design System — Task list"
[923]: https://www.craftyarncouncil.com/standards/how-to-read-knitting-pattern "Craft Yarn Council — How to Read a Knitting Pattern"
[924]: https://www.w3.org/WAI/media/av/captions/ "W3C WAI — Captions/Subtitles"
[925]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Add subtitles & captions"

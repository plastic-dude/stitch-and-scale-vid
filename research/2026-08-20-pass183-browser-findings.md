# Pass 183 Wide-Research Findings — `resumption-state`

**Research date:** 2026-08-20  
**Director stamp:** `20260820-004726`  
**Status:** Research complete; concept remains blocked pending current product proof.

## Fresh question

When a craft worker pauses a multi-step pattern or production task, what makes returning safe and intelligible rather than merely possible: can the person see where they left off, what was saved, what remains uncertain, and what the next re-entry action is?

## Evidence reviewed

| Ref | Source and access date | Evidence used | Uncertainty and boundary |
|---|---|---|---|
| [926] | W3C WAI, *Understanding Success Criterion 2.4.7: Focus Visible*, WCAG 2.2, accessed 2026-08-20: https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html | W3C says keyboard-operable interfaces need a mode with a visible focus indicator so people know which element has focus; it notes benefits for people with attention, short-term-memory, or executive-process limitations. | This supports visible re-entry orientation as a design principle, not a claim that Stitch & Scale implements focus management or meets WCAG. |
| [927] | GOV.UK Design System, *Button*, accessed 2026-08-20: https://design-system.service.gov.uk/components/button/ | GOV.UK distinguishes action wording such as `Continue`, `Save and continue`, and `Save and come back later` according to whether information is saved and whether return is supported. It warns that too many primary actions make it harder to know what to do next. | GOV.UK wording is not a Stitch & Scale specification and does not prove saving, resumption, or persistence in the product. |
| [928] | Craft Yarn Council, *How to Read a Knitting Pattern*, accessed 2026-08-20: https://www.craftyarncouncil.com/standards/how-to-read-knitting-pattern | CYC describes row/round sequence, repeats, right-side/wrong-side orientation, measurement stopping points, and phrases such as “maintain pattern as established.” It explains that the reader must retain and interpret position within an ongoing sequence. | This is craft education, not proof of an app’s row marker, checkpoint, save state, or re-entry feature. |
| [929] | W3C WAI, *Captions/Subtitles*, accessed 2026-08-20: https://www.w3.org/WAI/media/av/captions/ | W3C requires synchronized speech and relevant non-speech information in captions for prerecorded media and warns that automatic captions need accuracy confirmation and editing. | This informs the film’s caption-on/caption-free review only; it does not prove platform or product accessibility conformance. |
| [930] | YouTube Help, *Add subtitles & captions*, accessed 2026-08-20: https://support.google.com/youtube/answer/2734796?hl=en | YouTube supports adding subtitles/captions during upload or through Studio and says they broaden access. | Destination account, final metadata, and upload settings remain unknown; no upload is authorized. |

## Synthesis and changed decision

The sources support a bounded insight: **saving is not the same as resuming**. A person returning to a task needs an intelligible re-entry contract: what was last known, where the work sits in the sequence, what has not been reviewed, which action continues safely, and which action would overwrite or repeat work. Visible focus and precise action wording are relevant because a person returning after interruption may have limited memory of the prior screen or state. CYC’s row/round, right-side/wrong-side, repeat, and measurement conventions show why location within a pattern is meaningful evidence rather than decorative metadata.

The concept therefore narrows away from generic offline continuity or persistent storage to **re-entry after a pause**. The fictional proof surface is `RETURN R-001 / LAST_KNOWN_STEP / SAVED_AT / UNSAVED_WORK / SEQUENCE_CONTEXT / NEXT_SAFE_ACTION / REVIEWED / DISPOSITION`. The film must use original paper cards marked `ILLUSTRATIVE — NOT PRODUCT UI`, not a fabricated current app screen.

## Selected concept and distinctness

- **Angle slug:** `resumption-state`
- **Hook:** “Saved is not the same as ready to resume.”
- **Final line:** “Show the person where to begin again.”
- **Nearest prior:** `offline-continuity` (pass 176-era research line), with `discoverability-state`, `provenance-state`, `handoff-state`, and `status-history-state` as secondary neighbors.
- **Changed pain:** from work remaining safe and honestly labeled when connectivity disappears, to a person returning after a pause without knowing the last known step, sequence context, unsaved work, or safe next action.
- **Changed visual metaphor:** from connected/local device states to a paused row of pattern cards with a visible bookmark, a saved timestamp, an unresolved card, and one re-entry arrow.
- **Emotional turn:** uncertainty on return becomes calm when the re-entry point and unresolved work are explicit.

`resumption-state` is not `offline-continuity` (network loss and local state), `discoverability-state` (finding the next action among tasks), `provenance-state` (lineage of a changed record), `handoff-state` (exported artifact transfer), `status-history-state` (transition history), `checkpoint-state` if later proposed, or `readability-under-load` (legibility under competing visual demands). It focuses on the first safe return after interruption: last known step, saved/unsaved distinction, sequence context, next safe action, and review disposition.

## Product and truth reconciliation

No current product-proof registry entry or approved, non-private, rights-cleared capture verifies save-and-return, last-known-step display, row/round marker, checkpoint, unsaved-work warning, sequence context, or a current re-entry action. The brief is therefore **blocked**. The paper cards must not resemble current Stitch & Scale UI, and no claim may be made that the product saves, resumes, prevents duplication, preserves state, or guarantees safe recovery.

David remains a developer whose late mother knitted; he is not a knitter, knitwear designer, pattern designer, technical editor, or tester. Calculation, technical editing, physical print review, chart readability, schematic scale, and test knitting remain separate human evidence gates.

## References

[926]: https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html "W3C WAI — Focus Visible"
[927]: https://design-system.service.gov.uk/components/button/ "GOV.UK Design System — Button"
[928]: https://www.craftyarncouncil.com/standards/how-to-read-knitting-pattern "Craft Yarn Council — How to Read a Knitting Pattern"
[929]: https://www.w3.org/WAI/media/av/captions/ "W3C WAI — Captions/Subtitles"
[930]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Add subtitles & captions"

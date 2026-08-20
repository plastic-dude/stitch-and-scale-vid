# Pass 196 Wide-Research Findings — `acceptability-state`

**Research date:** 2026-08-20  
**Research question:** What evidence shows that an observed downstream effect is acceptable for the intended use, distinguishing a change observed, evidence qualified, and fit for purpose?  
**Status:** Research complete; concept package remains blocked pending current product proof.

## Sources and evidence

| Ref | Source and access date | Evidence used | Boundary |
|---|---|---|---|
| [991] | NIST CSRC Glossary, *Validation*, accessed 2026-08-20: https://csrc.nist.gov/glossary/term/validation | NIST defines validation as confirmation through strong, sound, objective evidence that requirements for a specific intended use or application have been fulfilled, and also as determining that an object or process is acceptable according to predefined tests and results. | This supports separating an observed difference from intended-use acceptance; it does not prove Stitch & Scale validates suitability, acceptance, or trustworthiness. |
| [992] | GOV.UK Service Manual, *User research*, accessed 2026-08-20: https://www.gov.uk/service-manual/user-research | GOV.UK frames user research around understanding user needs, planning and running sessions, analyzing findings, and sharing what was learned, with methods including contextual research, observation, user-experience research, and moderated usability testing. | This supports evidence from intended users and observed use as a separate question from system-side change; it does not prove product user research, usability, or outcomes. |
| [993] | Craft Yarn Council, *Project Levels*, accessed 2026-08-20: https://www.craftyarncouncil.com/standards/project-levels | CYC uses Basic, Easy, Intermediate, and Complex project levels to signal techniques that may appear in pattern instructions, including stitches, shaping, colorwork, and multiple techniques. | This supports communicating intended-use difficulty and scope, not a Stitch & Scale project-level feature or a guarantee that a pattern is suitable for a person. |
| [994] | W3C WAI, *Captions/Subtitles*, accessed 2026-08-20: https://www.w3.org/WAI/media/av/captions/ | W3C supports synchronized captions for speech and meaningful non-speech audio and warns that captions should not obscure relevant visual information. | This informs production review only; it does not prove platform or product accessibility conformance. |
| [995] | YouTube Help, *Add subtitles & captions*, accessed 2026-08-20: https://support.google.com/youtube/answer/2734796?hl=en | YouTube supports adding captions during upload or Studio and says captions broaden access. | Destination account, final metadata, and upload settings remain unknown; no upload is authorized. |

## Synthesis and changed decision

The sources support a bounded insight: **a verified difference is not automatically acceptable for every intended use**. A truthful acceptability record should identify intended use, requirements or acceptance criteria, observed result, test or user-research evidence, limitations, decision owner, and disposition. The film must not claim that Stitch & Scale validates fit, suitability, usability, user outcomes, or project level.

## Selected concept and distinctness

- **Angle slug:** `acceptability-state`
- **Hook:** “Changed is not the same as fit for use.”
- **Final line:** “Name the intended use, the test, and the limit of what passed.”
- **Nearest prior:** `effect-state` (pass 195).
- **Changed pain:** from proving that a completed action produced an observed difference, to deciding whether that difference satisfies the requirements of a specific intended use with objective tests, user evidence, limitations, and disposition.
- **Visual metaphor:** A before/after card shows a visible difference, but a separate intended-use card remains blank until requirements, test evidence, user evidence, limitations, and decision are explicit.
- **Proof surface:** `ACCEPT A-001 / INTENDED_USE / REQUIREMENTS_OR_CRITERIA / OBSERVED_RESULT / TEST_OR_USER_EVIDENCE / LIMITATIONS / DECISION_OWNER / DISPOSITION`.
- **Emotional turn:** relief at seeing a real change becomes humility about whether it is acceptable for the person, project, or gate that needs it.

`acceptability-state` is distinct from `effect-state` (whether an observed downstream difference exists), `qualification-state` (what evidence may support a decision), `audience-readiness-state` (whether an output is ready for an external audience), `fitness-state` if previously reserved under another meaning, `usability-state` if later proposed, and imported `false-completion` / `release-gate-roster` concepts. It focuses on intended-use acceptance after an effect is observed, not whether the effect exists or what evidence is linked.

## Product and truth boundary

No current product-proof registry entry or approved, non-private, rights-cleared capture verifies a current acceptability surface with intended use, requirements or criteria, observed result, test or user evidence, limitations, decision owner, and disposition. The eventual package must remain blocked. No product validation, suitability, usability, project-level classification, accuracy, outcome, adoption, or human-gate completion may be claimed. David remains a developer whose late mother knitted, not a knitter, designer, pattern designer, technical editor, or tester. Calculation, technical editing, physical print review, chart readability, schematic scale, and test knitting remain separate human evidence gates.

## References

[991]: https://csrc.nist.gov/glossary/term/validation "NIST CSRC Glossary — Validation"
[992]: https://www.gov.uk/service-manual/user-research "GOV.UK Service Manual — User research"
[993]: https://www.craftyarncouncil.com/standards/project-levels "Craft Yarn Council — Project Levels"
[994]: https://www.w3.org/WAI/media/av/captions/ "W3C WAI — Captions/Subtitles"
[995]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Add subtitles & captions"

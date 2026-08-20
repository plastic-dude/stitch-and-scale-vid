# Pass 181 Wide-Research Findings — `provenance-state`

**Research date:** 2026-08-20  
**Director stamp:** `20260820-003537`  
**Status:** Research complete; concept remains blocked pending current product proof.

## Fresh question

When a craft-business record changes, what makes its retained history inspectable rather than merely old: can a reviewer identify the prior entity, the change activity, the responsible agent, the source or note that informed the change, and the current disposition without treating a current view as the whole history?

## Evidence reviewed

| Ref | Source and access date | Evidence used | Uncertainty and boundary |
|---|---|---|---|
| [918] | W3C, *The PROV Ontology (PROV-O)*, Recommendation, 2013-04-30, accessed 2026-08-20: https://www.w3.org/TR/prov-o/ | W3C defines provenance modeling around Entity, Activity, and Agent; it describes chains through use, generation, derivation, responsibility, and time, and supports qualified relationships for additional context. | PROV-O is a general provenance model, not evidence that Stitch & Scale implements version history, audit trails, immutable records, or provenance queries. |
| [919] | National Archives and Records Administration, *What are the General Records Schedules (GRS)*, updated 2026-06-12, accessed 2026-08-20: https://www.archives.gov/records-mgmt/grs | NARA describes schedules as disposition authority and states that retention/disposition decisions depend on the applicable schedule and current authority. | Federal records-management rules do not transfer to an independent craft-business product and do not establish a retention period, legal duty, or archival behavior for Stitch & Scale. |
| [920] | Craft Yarn Council, Michele Costa, *How To Write A Pattern*, accessed 2026-08-20: https://www.craftyarncouncil.com/blog/ydkwydk-how-write-your-own-pattern | The guidance recommends making notes during the work, recording changes rather than relying on delayed memory, cleaning notes against the completed sample, following standards, obtaining technical editing, and seeking tester feedback. | This is craft-writing guidance, not a product specification. It supports the audience pain of losing the path from working notes to a released instruction, but does not prove a particular workflow exists in Stitch & Scale. |

## Synthesis and changed decision

The sources converge on a bounded planning insight: a retained artifact is more useful when the history of its creation and change is linked to the affected entity, activity, responsible person or role, and disposition. In craft publishing, row-by-row notes, transcription against a sample, technical editing, and test feedback are separate evidence activities; collapsing them into a single current file makes it harder to answer what changed and why. NARA’s schedule model also warns against inventing a universal retention duration: what should remain and when it may be disposed of depends on an explicit authority or policy.

The concept is narrowed away from generic archival retention to **lineage of a changed record**. The fictional proof surface is `RECORD P-001 / PRIOR_ENTITY / CHANGE_ACTIVITY / SOURCE_NOTE / AGENT / AT / CURRENT_ENTITY / AFFECTED_GATE / DISPOSITION`. The story should ask whether a current instruction can point back to the note, sample, technical edit, or test observation that changed it. It must not promise history, immutability, retention duration, legal compliance, or automatic authorship attribution in the product.

## Selected concept and distinctness

- **Angle slug:** `provenance-state`
- **Hook:** “A current file is not the history of how it changed.”
- **Final line:** “Show what this version came from.”
- **Nearest prior:** `evidence-chain-state` (pass 176), with `status-history-state` and `archival-state` as secondary neighbors.
- **Changed pain:** from whether evidence is linked to the exact claim, to whether a changed instruction is linked to its prior entity, change activity, source note, responsible agent, affected human gate, and disposition.
- **Changed visual metaphor:** from a claim-support graph to a revision thread connecting a handwritten row note, a sample detail, an edit mark, a tester observation, and a current page; no screen is presented as current product UI.
- **Emotional turn:** confidence in a polished current page becomes a pause when the audience asks what changed and discovers that the path is unshown; the safe turn is to name the evidence chain still required.

`provenance-state` is not `archival-state` (whether an artifact is preserved), `retention-state` (whether it remains available), `status-history-state` (the sequence of statuses), `custody-state` (who handled an artifact), `evidence-chain-state` (which evidence supports a claim), `replication-state` (whether another person can repeat a result), `reversibility-state` (whether a change can be undone), `assumption-state` (which hidden input drives a result), or the imported `false-completion` and `release-gate-roster` concepts. The new surface is a bounded lineage record for one changed entity and its human evidence activities.

## Product and truth reconciliation

No current product-proof registry entry or approved, non-private, rights-cleared capture verifies a provenance record, version lineage, linked revision thread, retained source note, or automatic agent attribution. The brief is therefore **blocked**. The fictional cards and paper props must not be presented as Stitch & Scale UI or product output.

David remains a developer whose late mother knitted; he is not a knitter, knitwear designer, pattern designer, technical editor, or tester. Calculation, technical editing, physical print review, chart readability, schematic scale, and test knitting remain separate human gates.

## References

[918]: https://www.w3.org/TR/prov-o/ "W3C — The PROV Ontology (PROV-O)"
[919]: https://www.archives.gov/records-mgmt/grs "NARA — What are the General Records Schedules (GRS)"
[920]: https://www.craftyarncouncil.com/blog/ydkwydk-how-write-your-own-pattern "Craft Yarn Council — How To Write A Pattern"

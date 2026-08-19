# Pass 158 browser findings — custody-state

**Date/time:** 2026-08-19 21:53 Africa/Lagos  
**Angle under review:** `custody-state` — working premise: provenance can describe how a record was produced, while custody records who handled the evidence, when, and why during collection, safeguarding, analysis, or transfer. This is planning only; no current Stitch & Scale capability is asserted.

## Official sources reviewed

### NIST CSRC — Chain of Custody Glossary
URL: https://csrc.nist.gov/glossary/term/chain_of_custody

NIST defines chain of custody as a process tracking evidence movement through collection, safeguarding, and analysis by documenting each person who handled it, the date/time collected or transferred, and the purpose for the transfer. This directly supports the pass-158 distinction between provenance of an output and custody of a specific evidence item through handling events. It is forensic guidance and does not prove a Stitch & Scale custody ledger, immutable record, or audit feature.

### W3C PROV-DM — The PROV Data Model
URL: https://www.w3.org/TR/prov-dm/

W3C PROV-DM describes provenance as information about entities, activities, and people involved in producing a data item or thing. Its core structures include entities and activities, time, derivations, agents and responsibility, and relations among them. This supports using provenance as a neighboring concept while keeping custody narrower: custody records the handling and transfer events for a particular evidence item. W3C PROV-DM is domain-agnostic and does not establish a product feature, legal sufficiency, or chain-of-custody implementation.

## Distinctness decision

`custody-state` is being evaluated as distinct from recent `containment-state`, `provenance-state`, `identity-state`, `audit-state`, `archival-state`, `traceability-state`, and imported `false-completion` / `release-gate-roster`. The angle concerns who handled a particular evidence item, when, why, and what transfer or safeguarding event occurred; it is not whether an output was held from propagation, how it was derived, what it is named, whether an audit occurred, whether it can be retrieved, or whether a roster proves human-gate coverage.

## Proposed proof vocabulary

`EVIDENCE_ID / CUSTODY_EVENT / HANDLER / DATE_TIME / PURPOSE / FROM / TO / SAFEGUARD / CONDITION / TRANSFER_ACCEPTED / NEXT_HANDLER / DISPOSITION`

## Research caution

No revenue, adoption, accuracy, customer result, credential, testimonial, pricing, urgency, legal sufficiency, or product capability is inferred from these sources. The sources support process design only.

## References

[1]: https://csrc.nist.gov/glossary/term/chain_of_custody "NIST CSRC, Chain of Custody Glossary"
[2]: https://www.w3.org/TR/prov-dm/ "W3C, PROV-DM: The PROV Data Model"

### Craft Yarn Council — Reading Instructions & Other Basics
URL: https://www.craftyarncouncil.com/read_instructions.html

The Council advises readers to read the entire relevant pattern section, actually perform the instructions, and have a friend read the pattern aloud while working. It describes gauge as important to producing a successful project and recommends a gauge swatch using the stated yarn, tools, and pattern stitch. This supports a fictional custody treatment in which a specific instruction artifact and its review handoffs remain identifiable; it does not prove product correctness, reader success, or any Stitch & Scale custody or review feature.

### W3C WCAG 2.2 — Captions (Prerecorded)
URL: https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html

W3C states that captions carry dialogue, speaker identification, and meaningful sound information in synchronized prerecorded media. Pass 158 therefore uses one narrator family, caption-on and caption-free review masters, and only meaningful transfer or custody sound cues. The visual custody table receives close readable holds and captions never cover its evidence ID, handler, date/time, or transfer purpose.

## Updated research decision

The research changed the treatment from a static provenance diagram to a custody sequence for one named evidence item: collection, safeguarding, transfer, and analysis each add handler/date-time/purpose/condition data. The artifact remains the same evidence item while responsibility moves; provenance explains production, but custody explains handling. No source proves a product custody ledger or legal sufficiency.

## Additional references

[3]: https://www.craftyarncouncil.com/read_instructions.html "Craft Yarn Council, Reading Instructions & Other Basics"
[4]: https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html "W3C WAI, Understanding SC 1.2.2: Captions (Prerecorded)"

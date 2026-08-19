# Pass 172 Browser / Source Findings — Propagation State

**Research question:** When an upstream input changes, can each downstream artifact show whether the change reached it, or can stale downstream values look current?

**Selected angle:** `propagation-state` — Changed upstream is not changed downstream.

## W3C Data on the Web Best Practices

W3C's Data on the Web Best Practices says data consumers need information such as structural metadata, data quality, provenance, licensing, usage, version indicators, and version history to understand and reuse data. It also lists version indicators, version history, persistent identifiers, data quality, and provenance as distinct best practices. The pass-172 use is a fictional chain-of-change record, not evidence that Stitch & Scale implements metadata, provenance, version history, or persistent identifiers.

Source: [W3C Data on the Web Best Practices](https://www.w3.org/TR/dwbp/).

## OpenLineage

OpenLineage describes an open framework and extensible specification for collecting and analyzing lineage metadata, with dataset, job, and run entities. The pass-172 use is a visual metaphor for tracing whether an input change reaches downstream outputs; it does not claim that Stitch & Scale uses OpenLineage, jobs, runs, lineage events, facets, or a backend.

Source: [OpenLineage — About OpenLineage](https://openlineage.io/docs/).

## NIST data integrity

NIST's National Cybersecurity Center of Excellence data-integrity guide describes identifying and protecting assets against data-integrity attacks and using a reference design to mitigate risks. The pass-172 use is limited to the distinction between a change being recorded and a change being demonstrably propagated; it does not claim that Stitch & Scale provides data-integrity protection, security controls, or attack mitigation.

Source: [NIST NCCoE — Data Integrity](https://www.nccoe.nist.gov/data-integrity-identifying-and-protecting-assets-against-ransomware-and-other-destructive-events).

## Research decision

The replacement decision changes the concept from “how sensitive is the output?” to “did the upstream change reach every dependent output, and can the chain show where propagation stopped?” The fictional proof surface is `CHANGE C-001 / SOURCE / VERSION / DOWNSTREAM_NODE / EXPECTED_UPDATE / OBSERVED_UPDATE / PROPAGATION_GAP / STALE_VALUE / REVIEWED / DISPOSITION`. No current product capture or proof-registry record was supplied.

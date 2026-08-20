# Wide Research Findings — Pass 218 — `triage-state`

**Research date:** 2026-08-20  
**Research question:** When several craft or pattern findings compete for attention, what evidence should justify their order before a team treats one as urgent, blocks a release, or starts remediation?

## Source evidence

NIST SP 800-30 says risk assessments provide leaders with information needed to determine appropriate courses of action in response to identified risks, and lists risk assessment, impact analysis, residual risk, and risk mitigation as relevant concepts. [1]

CISA Binding Operational Directive 26-04, published 10 June 2026, says federal agencies should focus patching on areas of highest risk rather than treat all vulnerabilities and systems equally. It uses explicit variables including asset exposure, known-exploited-vulnerability status, exploit automation, and technical impact. It requires agencies to define roles, internal validation, tracking, reporting, and timelines, and says remediation timelines can change when facts change. This is a federal cyber directive, not a Stitch & Scale requirement or product capability. [2]

The Craft Yarn Council’s designer pitfalls list identifies recurring issues that can compete for attention: missing or poor measurements, incorrect sizing, gauge mismatch, missing materials or quantities, incorrect math, missing stitch counts, absent repeats or abbreviations, incomplete instructions, missing charts, and schematics not drawn to scale. It also says designers should keep records and not rely on memory. [3] Its submission guidance says to discuss yarn or color problems with the manufacturer or editor, reconfirm sample size, keep notes, match project gauge, and preserve distinct instructions, measurements, schematics, invoices, and return responsibilities. [4]

## Decision boundary

Select `triage-state` if the angle remains distinct from `priority-state`, `severity-state`, `impact-assessment-state`, `risk-trigger`, `failure-mode`, `remediation-state`, `acceptance-criteria`, and `release-gate-roster`. The changed pain is **not** how severe one finding is or how a known defect gets fixed. It is whether the order of several findings is explainable from evidence, scope, consequence, urgency, uncertainty, and human authority rather than from recency or visual noise.

The proposed proof surface is:

`TRI X-001 / FINDING_ID / FINDING_TYPE / AFFECTED_SCOPE / EVIDENCE / CONSEQUENCE / URGENCY_SIGNAL / DEPENDENCY / UNCERTAINTY / PRIORITY_RATIONALE / ORDER / DECISION_OWNER / REVIEW_AT / STATUS`

No current product-proof registry or approved capture verifies a Stitch & Scale triage or prioritization surface. All cards must be labeled `ILLUSTRATIVE — NOT PRODUCT UI`; fictional values must be labeled `EXAMPLE — NOT A REAL PRIORITY DECISION`.

## Audience pain and visual opportunity

A designer or reviewer can have a gauge mismatch, missing stitch count, wrong size measurement, chart problem, and schematic issue at once. A list sorted by arrival time or visual drama does not explain what must be handled first, which scope is affected, what evidence supports the order, what is uncertain, or who can change it. A high-severity label alone does not prove urgency or release impact.

The visual treatment begins with five fictional finding cards arriving at once. A noisy `FIRST IN` stack is replaced by a bounded triage board where each card shows scope, consequence, urgency signal, dependency, uncertainty, rationale, owner, and review time. The board refuses to use a green `URGENT` stamp without a reason; it holds at `ORDER: REVIEW REQUIRED`.

The hook is: **“First found is not always first to fix.”** The emotional turn is from the comfort of a sorted list to explainable ordering. The final line is: **“Name the evidence, the consequence, and why this finding goes first.”**

## Limits

Do not claim that Stitch & Scale prioritizes findings, predicts impact, assigns urgency, recommends release order, blocks publication, or replaces designer, technical-editor, tester, publisher, or human release authority. Do not turn a fictional board into current product UI, real defect data, legal or safety advice, or a universal prioritization formula.

## References

[1]: https://csrc.nist.gov/pubs/sp/800/30/r1/final "NIST — SP 800-30 Guide for Conducting Risk Assessments"  
[2]: https://www.cisa.gov/news-events/directives/bod-26-04-prioritizing-security-updates-based-risk "CISA — BOD 26-04: Prioritizing Security Updates Based on Risk"  
[3]: https://www.craftyarncouncil.com/pitfalls.html "Craft Yarn Council — Designer Pitfalls"  
[4]: https://www.craftyarncouncil.com/industry.html "Craft Yarn Council — Congratulations! You’ve Received the Go Ahead"

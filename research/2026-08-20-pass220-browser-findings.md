# Wide Research Findings — Pass 220 — `deadline-condition-state`

**Research date:** 2026-08-20  
**Research question:** What must a craft or pattern deadline record distinguish between requested-by, committed-by, blocked-by, completed-at, accepted-at, and still-open conditions before a team describes work as on time or complete?

## Source evidence

Craft Yarn Council’s industry guidance says most magazines and book publishers work six months in advance, asks designers to reconfirm material availability and sample size before beginning, says to keep notes, and ends with a direction to complete the project on time. It also separates the actual project, gauge swatch, electronic instructions, schematic, invoice, and return shipping as distinct submission materials. [1]

Craft Yarn Council’s designer pitfalls list warns against missing records, incomplete instructions, missing charts or schematics, sending a garment before writing the pattern, and being late with submissions. It also identifies missing measurements, incorrect math, missing stitch counts, gauge mismatch, missing quantities, and unscaled schematics. [2]

Atlassian’s acceptance-criteria guidance defines acceptance criteria as predefined, clear, concise, testable requirements or conditions that must be met for a product or task to be complete and accepted. It distinguishes a completion condition from the user story or purpose, and says criteria should be clear, measurable, independent, testable, and collaboratively reviewed. This is general project-management guidance, not a Stitch & Scale product claim or a knitwear publication standard. [3]

## Decision boundary

Select `deadline-condition-state` if the angle remains distinct from `material-availability-state`, `triage-state`, `review-expiry`, `priority-state`, `handoff-state`, `acceptance-criteria`, `completion-boundary-state`, and `response-state`. The changed pain is **not** setting a date, tracking a queue, checking material availability, or proving acceptance. It is whether the record explains what a date means: requested-by, committed-by, blocked-by, completed-at, accepted-at, and still-open conditions, with dependencies and authority visible.

The proposed proof surface is:

`DUE D-001 / WORK_ID / DELIVERABLE / REQUESTED_BY / COMMITTED_BY / DEPENDENCY / BLOCKED_BY / BLOCKED_AT / OWNER / COMPLETED_AT / ACCEPTED_AT / ACCEPTANCE_CRITERIA / OPEN_CONDITION / DATE_BASIS / STATUS / REVIEW_RECORD`

No current product-proof registry or approved capture verifies a Stitch & Scale deadline-condition surface. All cards must be labeled `ILLUSTRATIVE — NOT PRODUCT UI`; fictional values must be labeled `EXAMPLE — NOT A REAL DEADLINE OR ACCEPTANCE RECORD`.

## Audience pain and visual opportunity

A project card can show a date and a green `ON TIME` stamp while the date’s basis is unknown. A request date can be mistaken for a commitment, a blocked task can be counted as complete, a completed artifact can be treated as accepted, or an acceptance condition can remain open after the calendar date passes. In knitwear workflows, a deadline can coexist with separate materials, gauge, instructions, schematic, technical-edit, physical-print, chart, and test-knit gates.

The visual treatment begins with a fictional card marked `ON TIME`. The camera reveals six date and condition lanes: requested-by, committed-by, dependency, blocked-by, completed-at, accepted-at, and open condition. The stamp changes to `DATE BASIS: REVIEW REQUIRED`; no delivery, schedule, customer, or product capability claim is made.

The hook is: **“A date is not a status.”** The emotional turn is from calendar reassurance to honest timing: name the basis, the dependency, and what is still open. The final line is: **“Name the date’s basis, the dependency, and what acceptance still needs.”**

## Limits

Do not claim that Stitch & Scale schedules work, predicts delivery, tracks deadlines, marks tasks complete, verifies acceptance, manages dependencies, notifies users, or guarantees publication timing. Do not claim that a date means on-time delivery, correctness, acceptance, publication, or customer outcome. Do not use real project schedules, customer commitments, private editor correspondence, invoices, contracts, personal identifiers, or current product UI. Do not invent pricing, revenue, fulfillment, delivery dates, adoption, accuracy, credentials, testimonials, urgency, or capabilities.

## References

[1]: https://www.craftyarncouncil.com/industry.html "Craft Yarn Council — Congratulations! You’ve Received the Go Ahead"  
[2]: https://www.craftyarncouncil.com/pitfalls.html "Craft Yarn Council — Designer Pitfalls"  
[3]: https://www.atlassian.com/work-management/project-management/acceptance-criteria "Atlassian — What is Acceptance Criteria?"

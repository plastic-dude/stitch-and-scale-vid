# Pass 114 browser findings — absence state — 2026-08-19

## Sources checked

| Source | Checked | Findings used | Limits |
|---|---|---|---|
| Understanding Society — Missing values | 2026-08-19 | The survey documentation explicitly distinguishes a real zero from dedicated negative missing-value codes, including “don’t know,” “refused,” “valid skip,” and “missing by error or implausible.” It warns analysts to read the code definitions before using substantive information. | Survey metadata context; not a Stitch & Scale data model or product claim. |
| DataONE — Identify missing values and define missing value codes | 2026-08-19 | Missing values should be handled consistently, defined in metadata, and not confused with valid data; `Not applicable`, `None`, and `Pending assignment` are different useful labels in some contexts. Character codes should not be placed in otherwise numeric fields. | Environmental data-management guidance; not a product specification. |
| University of Wisconsin REDCap — Missing Data Codes | 2026-08-19 | Missing-data codes can record why a field lacks a value, must not collide with valid values, can be shown in reports/exports, and support distinctions such as `Not asked`, `Unknown`, `Not applicable`, `Not available`, and `Not present`. | REDCap-specific implementation; not evidence that Stitch & Scale supports these codes. |
| W3C WCAG 2.2 — Error Identification | 2026-08-19 | Automatically detected input errors must identify the affected item and describe the error in text; merely redisplaying an unsuccessful form is insufficient. Error descriptions should explain what is wrong and can include how to fix it. | Accessibility guidance; does not prove current product validation or conformance. |
| W3C WAI Forms — Notifications | 2026-08-19 | Feedback should clearly communicate success or error; error lists should identify the control, describe the issue, explain correction, and link to the affected control. Visual cues can supplement, but not replace, text. | Web-form guidance; not a product finding. |
| Sister Mountain — grading patterns with a spreadsheet | 2026-08-19 | A grading workflow uses body measurements, ease, finished measurements, gauges, multiple sizes, and formulas; the author distinguishes values that are measured, calculated, referenced, and design decisions. | Practitioner tutorial, not a Stitch & Scale specification; no inference about the app. |
| Stitch & Scale local QA, craft-business, and mobile-maker contracts | 2026-08-19 | QA requires valid measurements and non-finite/unsafe output checks; craft records distinguish recorded facts, derived values, estimates, and planned values; mobile workflows require visible validation and interruption feedback. | Internal workflow contracts, not current product proof. |

## Research synthesis and decision shift

The fresh question is: **When a numeric or record field is empty, what distinguishes a real zero from not entered, not applicable, unknown, not available, or not checked, and how should that distinction affect calculations, validation, exports, and a maker’s next action?** The research changed the concept from generic missing data to a semantic absence record that prevents a blank or zero from silently entering a grading or business decision.

Candidate angle: `absence-state` — **“Zero is not missing.”** Proof surface: `VALUE / STATUS / REASON / ASKED? / APPLIES? / CHECKED? / COUNTS-INCLUDED?`, explicitly illustrative until product proof verifies exact labels. Visual metaphor: a numeric cell splitting into five labelled paths — `0`, `NOT ENTERED`, `NOT APPLICABLE`, `UNKNOWN`, `NOT CHECKED` — before a formula or rollup can proceed. Emotional turn: false precision becomes honest next-action clarity. Final line: “Name the absence before you calculate.”

The candidate is distinct from `value-state`, which focuses on recorded, derived, estimated, and planned business values; from `uncertainty-context`, which focuses on context attached to an uncertain measurement; from `data-minimum`, which focuses on limiting person-level collection; from `stale-number`, which focuses on an old value remaining after an input change; from `availability-status`, which focuses on whether a resource is available; from `first-record`, which focuses on initial capture; from `default-state`, which focuses on initial defaults; and from `backup-state` or `commit-state`, which focus on recovery and save acknowledgement. `absence-state` is specifically about the meaning of non-values and whether they are eligible to enter a calculation, export, or record summary.

## Product truth and blocker

No current product-proof registry or approved capture verifies the exact field-state labels, missing-value semantics, calculation inclusion rules, export behavior, or next-action controls. Therefore no current UI label, calculation behavior, validation behavior, accessibility implementation, or data-quality guarantee may be claimed. The package must remain `blocked` with one next action: supply a versioned, non-private approved capture or proof-registry entry for the exact absence-state surface and one representative calculation/export behavior, then rerun all gates.

## Planned campaign framing

Assumption: no active brief was supplied, so classify as a blocked `founder-proof` micro-explainer for knitwear designers, technical editors, test knitters, and craft-business operators; objective is to show that zero, blank, not applicable, unknown, and not checked are not interchangeable; tone is precise, calm, non-alarmist; distribution is organic-first Instagram Reels, TikTok, and YouTube Shorts; tier is blocked proof-led planning. David remains a developer whose late mother knitted, never a knitter, designer, pattern designer, technical editor, or tester.

## References

[1] [Understanding Society — Missing values](https://www.understandingsociety.ac.uk/documentation/mainstage/user-guides/main-survey-user-guide/missing-values/)
[2] [DataONE — Identify missing values and define missing value codes](https://dataoneorg.github.io/Education/bestpractices/identify-missing-values)
[3] [University of Wisconsin REDCap — Missing Data Codes](https://kb.wisc.edu/smph/informatics/108107)
[4] [W3C — Understanding Success Criterion 3.3.1: Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)
[5] [W3C WAI — Forms: Notifications](https://www.w3.org/WAI/tutorials/forms/notifications/)
[6] [Sister Mountain — How to Grade Knitting Patterns Using a Spreadsheet](https://www.sistermountain.com/blog/grade-knitting-patterns-spreadsheet)
[7] [Stitch & Scale local skill contracts — pattern QA, craft-business, mobile-maker, and publishing/export workflows](file:///home/ubuntu/skills/knitwear-pattern-qa/SKILL.md)

## Research limit

The sources establish distinctions and design principles, not Stitch & Scale product behavior. The candidate does not claim that the app currently supports missing-value codes, field-state semantics, calculations that exclude non-values, or export annotations. Product truth remains unverified until a versioned approved capture or registry entry supplies the exact surface and behavior.

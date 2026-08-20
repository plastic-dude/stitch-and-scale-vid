# Firing 216 Source Notes

## NIST measurement quality and evaluator calibration

Source: https://airc.nist.gov/airmf-resources/playbook/measure/

NIST recommends fit-for-purpose testing procedures and metrics, acceptable performance limits, documented metric-selection criteria, regular assessment of metric effectiveness, and independent assessors or experts outside front-line development. It also recommends documenting tools, test sets, methods, and performance outcomes so that evaluation is repeatable and reliable. Applied to V002, the Reviewer must use the published seven-dimension weighting and explicitly calculate the total against the 65% remake threshold; an unexplained or inconsistent threshold judgment is insufficient.

## NIST governance and measurement

Source: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/

NIST identifies objective, repeatable, documented TEVV, independent review, defined roles, and transparent decision processes as governance and measurement outcomes. A Reviewer packet must separate observations, dimension scores, weighting calculation, threshold comparison, and terminal decision, allowing an independent party to detect arithmetic or calibration errors.

## AWS conditional transitions and defaults

Sources: https://docs.aws.amazon.com/step-functions/latest/dg/state-choice.html and https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html

AWS Choice states evaluate explicit rules and recommend a Default path when no rule matches; without a Default, an unmatched condition causes a transition failure. AWS execution details expose unique execution identity, inputs, outputs, retries, errors, and complete event history for inspection. Applied here, missing or invalid scoring inputs must route to a blocking/escalation path, never to approval by default. The decision packet should preserve the intermediate calculation and event history.

## Firing-216 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require a deterministic scoring calculation and an explicit fail-closed default for absent, malformed, or contradictory inputs. No new brief or MP4 is authorized.

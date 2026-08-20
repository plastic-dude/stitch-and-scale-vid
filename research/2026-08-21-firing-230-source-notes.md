# Firing 230 Source Notes

## NIST AI RMF measurement and uncertainty

Sources: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ and https://www.nist.gov/ai-measurement-and-evaluation

NIST describes measurement and evaluation as context-dependent, requiring quantitative or qualitative methods, documented metrics, test and evaluation details, uncertainty consideration, comparisons to benchmarks, independent assessors, and formal reporting. It also says metrics that cannot be measured should be documented rather than silently omitted. Applied here, every one of the seven weighted review dimensions must have its own evidence, score, method, confidence or uncertainty note, and explicit missing-data treatment.

## AWS execution-history completeness

Sources: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html and https://docs.aws.amazon.com/step-functions/latest/dg/troubleshooting.html

AWS execution details expose inputs, outputs, definitions, states, retries, redrives, and event history. Standard histories are retained for a defined period; Express histories depend on CloudWatch Logs and may be incomplete if logging is deleted, filtered, or unavailable. Applied here, an incomplete evidence trail is an evidence gap, not a passing signal. A Reviewer must identify what was inspected and what could not be inspected.

## Firing-230 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require dimension-complete scoring, explicit uncertainty and missing-evidence fields, and fail-closed treatment of any unscored or unsupported dimension. No new brief or MP4 is authorized.

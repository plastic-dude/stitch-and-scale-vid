# Firing 209 Source Notes

## NIST AI RMF Core

Source: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/

NIST describes continuous lifecycle risk management, clear roles and responsibilities, human oversight, independent review, documented metrics and methods, and traceable measurement outcomes. It specifically notes that independent assessors can improve evaluation effectiveness and mitigate conflicts of interest. For V002, an acceptable terminal Reviewer record must therefore identify the independent role, the measurement method/score, and the evidence supporting the decision.

## AWS callback and error handling

Sources: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html and https://aws.amazon.com/blogs/compute/integrating-aws-step-functions-callbacks-and-external-systems/

AWS callback tasks continue only after the correct task token is returned with a success or failure result. The callback architecture uses a unique business identifier or tuple to map an external callback to the waiting task, and validates required request fields. This supports requiring a unique event identity and exact V002 provenance before accepting a Reviewer callback. AWS error handling treats timeouts and failures as explicit error paths, not as successful completion.

## Firing-209 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require a complete, immutable, independently authored Reviewer packet: unique event ID, exact video ID, Drive file ID, SHA-256, reviewer role, timestamp, explicit outcome, all seven weighted dimension scores, total score, threshold decision, and immutable evidence references. Incomplete or ambiguous callback packets are non-terminal and must be preserved/escalated. No new brief or MP4 is authorized.

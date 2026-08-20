# Firing 229 Source Notes

## NIST provenance and authenticity

Sources: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf and https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf

NIST describes provenance tracking as recording a digital item’s origin and history of changes, which can help establish authenticity, integrity, and credibility. It also cautions that technical provenance alone does not guarantee trustworthiness and that defense-in-depth, context, and human oversight remain necessary. Applied here, a Reviewer packet must not merely cite an MP4 or claim a score; its evidence must have inspectable origin, integrity, and chain-of-custody references, while the independent Reviewer remains responsible for the quality judgment.

## C2PA provenance concepts

Source: https://c2pa.org/specifications/specifications/1.4/specs/_attachments/C2PA_Specification.pdf

The C2PA specification provides a model for signed assertions and provenance manifests that can be validated and linked to digital assets and actions. Applied here, any provenance or evidence attestation should identify the artifact, assertion issuer, time, action/history, and validation result. A provenance marker is supporting evidence, not automatic quality authorization.

## AWS execution details and evidence retention

Source: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-view-execution-details.html

AWS execution details expose unique execution identity, status, timestamps, inputs, outputs, definition, step details, retry history, and events. Standard histories are retained for completed executions for a defined period; Express histories depend on CloudWatch Logs and can become incomplete if logs are deleted or filtered. Applied here, evidence references must point to durable inspectable material, and missing or incomplete logs cannot be treated as proof of a terminal decision.

## Firing-229 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require evidence-origin attestation, exact artifact binding, integrity verification, independent reviewer identity, and durable evidence references. No new brief or MP4 is authorized.

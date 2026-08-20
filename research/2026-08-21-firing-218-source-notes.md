# Firing 218 Source Notes

## NIST lifecycle monitoring and revalidation

Sources: https://airc.nist.gov/airmf-resources/playbook/manage/ and https://airc.nist.gov/airmf-resources/playbook/measure/

NIST AI RMF Manage guidance says AI risks, performance, trustworthiness, residual risk, and tradeoffs must be regularly tracked throughout the lifecycle. It recommends documenting updates, revisions, re-verification, monitoring responsibilities, and responses to drift or changed operating conditions. A previous evaluation cannot automatically remain valid after the artifact, provenance, scoring contract, or deployment context changes.

## AWS immutable version association

Sources: https://docs.aws.amazon.com/step-functions/latest/dg/execution-alias-version-associate.html and https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html

AWS associates an execution with a version or alias at execution start. Versions are immutable snapshots. Starting without a qualified version does not establish version association, and an execution must be tied to the specific version used. Applied here, a Reviewer decision must identify the exact V002 artifact, checksum, review contract/version, and evaluation time. A decision for another upload, a later remake, or a changed scoring contract is stale or mismatched and cannot clear V002.

## Firing-218 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require freshness and revalidation: if any active artifact or review-contract identity changes before terminal authorization, the prior packet is non-terminal until re-reviewed. No new brief or MP4 is authorized.

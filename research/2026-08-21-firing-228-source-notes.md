# Firing 228 Source Notes

## NIST lifecycle context and reproducibility

Source: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf

NIST AI RMF emphasizes lifecycle-wide TEVV, documentation, reproducibility, version control, and retaining relevant evaluation history. Applied here, a Reviewer decision must capture the evaluation context snapshot, not merely the artifact identifier: artifact and manifest version, active policy versions, evidence references, method, and time.

## AWS immutable workflow version and execution association

Sources: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html and https://docs.aws.amazon.com/step-functions/latest/dg/execution-alias-version-associate.html

AWS versions are immutable snapshots. Executions are associated with a qualified version or alias at execution start; an unqualified invocation is not associated with a version. Applied here, a review must bind to a specific evaluation context snapshot. A callback that was evaluated under an earlier snapshot but arrives after the active contract changes is stale until revalidated; a generic `latest` or `current` reference is insufficient.

## Google SRE current-state document and exit criteria

Source: https://sre.google/sre-book/incident-document/

Google’s example incident state document records current status, command hierarchy, update time, exit criteria, TODOs, and a timeline. Applied here, the canonical V002 incident should record the evaluation snapshot, current state, owner, next checkpoint, and explicit exit criteria. A terminal quality decision must satisfy the current exit criteria and cannot be inferred from a stale timeline entry.

## Firing-228 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require an immutable evaluation-context snapshot and a current-state comparison at callback acceptance. No new brief or MP4 is authorized.

# Firing 211 Source Notes

## NIST AI RMF lifecycle and version control

Sources: https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ and https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf

NIST treats AI risk management as continuous across the system lifecycle and describes documented governance, monitoring, independent review, repeatable measurement, and version control. The AI RMF publication itself uses a version-control table to identify version number, date of change, and change description. Applied to V002, a Reviewer decision must identify the exact artifact version through the video ID, Drive file ID, SHA-256, and review timestamp. A decision for an earlier or different artifact cannot clear the current V002 lane.

## AWS qualified execution identity

Sources: https://docs.aws.amazon.com/step-functions/latest/dg/execution-alias-version-associate.html and https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html

AWS associates an execution with a qualified version or alias at execution start. An unqualified execution is not associated with a version even if it uses the same revision. This demonstrates why a decision must carry explicit artifact identity instead of relying on a shared campaign name or current pointer. Version or alias history can be inspected through execution APIs, enabling stale or mismatched evidence to be rejected.

## Firing-211 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require an evidence-freshness rule: the Reviewer callback must bind to the exact V002 video ID, Drive file ID, SHA-256, and review timestamp, and must not rely on an unqualified campaign or latest-file pointer. Any callback for v001, another Drive upload, another checksum, a later remake, or missing version identity is non-terminal. No new brief or MP4 is authorized.

# Firing 248 Source Notes

## Fresh topic

Configuration drift detection and controlled baselines for the V002 review gate: preventing the repository contract, Drive asset, manifest, Reviewer packet, captions, platform QA, and rights/audio records from silently diverging.

## Authoritative sources

NIST SP 800-128 describes security-focused configuration management as managing and monitoring system configurations to achieve security, reduce organizational risk, and support intended functionality: https://csrc.nist.gov/pubs/sp/800/128/upd1/final. NIST defines a configuration baseline as a documented set of specifications formally reviewed and agreed at a point in time, changeable only through controlled change procedures, and usable as the basis for future builds, releases, and changes: https://csrc.nist.gov/glossary/term/baseline_configuration. AWS CloudFormation drift detection compares current resource configuration against the expected template, returns resource-level differences, and requires checking the last drift-check time so stale results are not used: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/detect-drift-stack.html. Google SRE’s configuration guidance identifies replicated configuration toil as a source of complexity, recommends tooling, hermetic evaluation for rollback and replayability, separation of configuration from data, and avoiding side effects during configuration evaluation: https://sre.google/workbook/configuration-specifics/.

## Application to V002

V002 has multiple configuration items: the approved brief and v001 source contract, the v002 Drive filename and checksum, repository manifest, Reviewer packet, seven-dimension rubric and threshold, captions and safe-zone settings, platform profile, rights/audio declaration, and Generator order. A single matching filename or checksum is insufficient if other expected fields are stale or from v001. The current Reviewer record demonstrates this risk: it found an 86.0% content score but blocked the asset because v002-matched manifest, QA, rights/audio, safe-zone, checksum linkage, and external-media evidence were incomplete.

A baseline must be formally versioned and bound to the exact artifact. Drift detection must compare expected and observed values field by field, identify additions, removals, and modifications, record detection time and source, and reject stale comparisons. Drift is not automatically repaired by overwriting the observed object; it must create a controlled reconciliation, preserve the old baseline and evidence, identify the change owner and rationale, and revalidate downstream review or generation contracts.

## Decision direction

V002 remains non-terminal after a Reviewer `BLOCKED` record with no `REMAKE_REQUIRED` order. Publish one blocker requiring a v002 configuration baseline and drift report across Drive, repository, manifest, review, caption/safe-zone, platform, and rights/audio records. Keep the single-flight lane closed and do not authorize MP4 generation.

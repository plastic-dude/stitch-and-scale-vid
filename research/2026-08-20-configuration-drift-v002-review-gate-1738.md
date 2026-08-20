# Director Research — Configuration Baseline and Drift Gate for V002

- **Research ID:** `RESEARCH-20260820-configuration-drift-v002-review-gate-1738`
- **Run role:** Temporary Director/Planner
- **Firing:** 248
- **Run time:** 2026-08-20T17:38:20+00:00
- **Status:** Research-backed operational decision

## Fresh research question

How should the V002 review gate detect and control drift among the repository contract, Drive asset, manifest, Reviewer packet, captions, platform QA, and rights/audio records before any terminal decision or Generator action?

## Current state observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. The authoritative V002 manifest, latest Reviewer record, terminal-signal paths, and queue tail were inspected. The latest Reviewer record is `REV-ownership-receipt-privacy-by-default-v002-20260820T1715Z`; it reports `status: BLOCKED`, weighted score `86.0%`, and `remake_order_id: null`. It identifies missing version-matched v002 manifest, checksum/caption/platform QA, rights/audio, safe-zone, and external-media evidence. V002 remains non-terminal and the single-flight lane remains closed.

Active provenance remains:

| Field | Value |
|---|---|
| Video ID | `SS_ownership-receipt_privacy-by-default_9x16_v002_director-review_20260819-174800` |
| Drive file ID | `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC` |
| SHA-256 | `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5` |
| Manifest status | `director-review` |
| Reviewer status | `BLOCKED` |
| Weighted score | `86.0%` |
| Remake order | `null` |

## Research findings

NIST SP 800-128 describes configuration management as managing and monitoring configurations to support intended functionality while reducing security and organizational risk.[1] NIST defines a configuration baseline as a formally reviewed and agreed specification at a point in time that may change only through controlled change procedures and serves as the basis for future builds, releases, and changes.[2] AWS CloudFormation drift detection compares expected template properties with observed properties, records resource-level differences, and warns operators to confirm that the drift check is recent enough to avoid using stale results.[3] Google SRE identifies replicated configuration as a source of toil and complexity and recommends tooling, hermetic evaluation for rollback and replayability, separation of configuration from data, and separating configuration evaluation from side effects.[4]

The V002 gate contains several configuration items: the approved brief and source contract, exact v002 Drive filename and checksum, repository manifest, Reviewer packet, rubric and threshold, caption and safe-zone settings, platform profile, rights/audio declaration, and Generator order. A matching filename or checksum alone cannot establish configuration consistency when other fields remain v001 or absent. The latest Reviewer record demonstrates this drift risk: it found strong content evidence and an 86.0% score but blocked the asset because version-matched evidence was incomplete.

A v002 baseline should be a formally versioned, owner-approved record bound to the exact artifact and active contract. Drift detection must compare expected and observed values field by field, identify additions, removals, and modifications, record the detection timestamp and source, and reject stale comparisons. Drift must not be “fixed” by overwriting the observed object or silently changing the baseline. The reconciliation must preserve the prior baseline and evidence, identify owner and rationale, publish a controlled version, and revalidate every downstream review, platform, and generation contract affected by the difference.

## Decision

Publish exactly one blocker requiring a v002 configuration baseline and drift report across Drive, repository, manifest, review, caption/safe-zone, platform, and rights/audio records. The report must contain expected value, observed value, difference type, source timestamp, freshness, artifact and contract binding, owner, reason, disposition, and downstream revalidation status. Any unbounded drift, stale comparison, unowned difference, or missing baseline is non-terminal and blocks generation or publication. Do not create a new brief or MP4 while V002 remains open.

## Terminal boundary

Only a complete independent Reviewer decision or contract-authorized owner resolution that is exact-provenance-bound, configuration-consistent, evidence-complete, authority-verified, immutable, and revalidated after any material drift may clear V002.

## References

[1]: https://csrc.nist.gov/pubs/sp/800/128/upd1/final "NIST SP 800-128: Guide for Security-Focused Configuration Management of Information Systems"
[2]: https://csrc.nist.gov/glossary/term/baseline_configuration "NIST CSRC Glossary: Baseline Configuration"
[3]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/detect-drift-stack.html "AWS CloudFormation: Detect Drift on an Entire Stack"
[4]: https://sre.google/workbook/configuration-specifics/ "Google SRE Workbook: Configuration Specifics"

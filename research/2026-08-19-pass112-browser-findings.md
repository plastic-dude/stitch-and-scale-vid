# Pass 112 Browser Findings — Backup State

Checked 2026-08-19.

## CISA business backup guidance

URL: https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data

CISA defines a backup as a secure copy of critical business data stored separately from primary systems. It recommends inventorying what must be protected, understanding who has access, following the 3-2-1 rule as a trusted guideline, protecting copies, and performing scheduled recovery tests. It specifically distinguishes having a copy from testing whether full and partial restoration works, and discusses Recovery Point Objectives (RPOs) and Recovery Time Objectives (RTOs). The guidance is for business cybersecurity and does not establish a Stitch & Scale backup or restore capability.

## NIST backup guidance

URL: https://csrc.nist.gov/pubs/other/2020/04/24/protecting-data-from-ransomware-and-other-data-los/final

NIST NCCoE describes backups as copies made to facilitate recovery and recommends that backup files be conducted, maintained, and tested. It frames the recommendations for managed service providers and says applicability depends on unique needs. This supports separating backup existence, maintenance, integrity, and tested usefulness; it is not evidence that Stitch & Scale performs backups or recovery.

## NIST recovery-time definition

URL: https://csrc.nist.gov/glossary/term/recovery_time_objective

NIST defines Recovery Time Objective (RTO) as the overall length of time system components can remain in recovery before negatively affecting mission or business processes. The definition comes from NIST SP 800-34 Rev. 1. It supports treating RTO as a planning field, not a measured Stitch & Scale outcome.

## Research implication

A fresh concept may show a fictional backup record with `BACKUP ID / SCOPE / SNAPSHOT AT / STORAGE LOCATION / INTEGRITY CHECK / RESTORE TEST AT / RECOVERED STATE / RPO / RTO / OWNER / STATUS`, labelled `ILLUSTRATIVE — NOT PRODUCT UI`, and ending at `STATUS: RESTORE UNVERIFIED`. The concept must not claim Stitch & Scale creates, stores, encrypts, schedules, tests, restores, or guarantees backups. It must distinguish backup existence from recoverability and successful restore.

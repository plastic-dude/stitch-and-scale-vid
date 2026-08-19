# Pass 170 Browser / Source Findings — Independence State

**Research question:** When the person who prepares a release also marks it ready, what evidence shows that the review was independent enough to catch a blind spot rather than merely record an assignment?

**Selected angle:** `independence-state` — Assigned is not independent.

## NIST SP 800-53

NIST's SP 800-53 Rev. 5 publication is a catalog of security and privacy controls and related assessment material. The official page notes that the control catalog spans access control, audit and accountability, assessment and authorization, configuration management, incident response, risk assessment, and related domains. It also warns that mappings to other frameworks are not one-to-one and should not be treated as equivalence. Pass 170 uses the separation-of-duties idea as a conceptual governance boundary only; it does not claim that Stitch & Scale is in NIST scope or implements AC-5.

Source: [NIST SP 800-53 Rev. 5, Updated 1](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final).

## GOV.UK Service Manual and Defra service assessments

The GOV.UK Service Manual describes service assessments as part of applying the Service Standard. Defra's service-assessment guidance says transactional services receive independent assessment and describes peer review, subject-matter assessors, user needs, access needs, technical constraints, and testing of risky assumptions. It also warns against committing to a solution too early and against building production code before discovery evidence. Pass 170 uses this as a planning and review-boundary reference, not as evidence that Stitch & Scale requires government-style assessment or has an independent-review feature.

Sources: [GOV.UK Service Manual](https://www.gov.uk/service-manual) and [Defra Service Assessments](https://digital.defra.gov.uk/service-assessments).

## Research decision

The research changes the concept from “someone is assigned to the release” to “the author and reviewer relationship is visible enough to reveal independence, recusal, or a declared exception.” The fictional proof surface is `RELEASE R-001 / AUTHOR / PREPARED_AT / REVIEWER / REVIEWED_AT / SAME_PERSON / RECUSAL / INDEPENDENCE_BASIS / FINDING / DISPOSITION`. This is distinct from accountability, which asks who answers for an action; reviewability, which asks whether evidence can be inspected consistently; audit, which asks whether a trace exists; and release-gate-roster, which remains an imported blocked concept requiring product proof.

No current product capture or proof-registry record was supplied. No claim may be made that Stitch & Scale exposes author/reviewer separation, recusal, independent review, approval, or release gating.

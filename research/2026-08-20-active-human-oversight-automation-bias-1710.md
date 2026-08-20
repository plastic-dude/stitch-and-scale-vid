# Director Research — Active Human Oversight and Automation-Bias Controls

- **Research ID:** `RESEARCH-20260820-active-human-oversight-automation-bias-1710`
- **Run role:** Temporary Director/Planner
- **Firing:** 244
- **Run time:** 2026-08-20T17:10:07+00:00
- **Status:** Research-backed operational decision

## Fresh research question

How should the V002 Reviewer demonstrate active, independent oversight rather than merely accepting an AI-generated summary, score, provenance claim, or prior agent assertion?

## Current state observation

The published Director playbook and `references/publication-control.md` were refreshed from `origin/main`. The authoritative V002 manifest, terminal-signal paths, and queue tail were inspected. The queue continues to show `BLOCKED_REVIEW_AUTHORIZATION_HOLD` records. V002 remains `video-ready-for-review`, with no independent terminal Reviewer packet, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. The single-flight lane remains closed.

Active provenance remains:

| Field | Value |
|---|---|
| Video ID | `SS_ownership-receipt_privacy-by-default_9x9_v002_director-review_20260819-174800` |
| Drive file ID | `115eXCYWx1zP4ayQk_b6nSheZ_yS_dFEC` |
| SHA-256 | `cb6a701bf55bb1066a8d7083a3378c93eb99c8354814f2ab5435e5fce92787c5` |
| Status | `video-ready-for-review` |

## Research findings

NIST AI RMF human-AI interaction guidance says organizations should clearly define and differentiate human roles and responsibilities across design, development, deployment, evaluation, and use. It warns that human-AI interaction can amplify cognitive and systemic bias, particularly when opaque outputs reduce context and transparency, and suggests examining when and why humans overrule AI outputs.[1] NIST SP 1270 provides a framework for identifying and managing systemic, statistical, and human sources of bias.[2] Google SRE incident guidance recommends clear command, defined roles, a working record, early declaration, and structured separation of Incident Commander, Communications Lead, and Operations Lead responsibilities.[3] [4]

A human-in-the-loop label is not proof of active oversight. If a Reviewer sees a generated score or summary before independently collecting evidence, the output can anchor the Reviewer and turn an advisory assertion into de facto authority. The review packet should therefore separate direct observations from machine-generated suggestions, require an independent first-pass evidence record, expose exact provenance and uncertainty, and capture challenge, rejection, acceptance, override, and dissent. The Reviewer must be able to inspect the exact V002 artifact and reproduce the seven-dimension score rather than merely approve a prefilled result.

## Decision

Publish exactly one blocker requiring an auditable active-oversight protocol. The protocol must identify the authorized Reviewer, distinguish observations from generated assistance, record whether AI assistance was used and how, require independent first-pass evidence, bind every claim to exact V002 provenance, require challenge or confirmation for material claims, preserve disagreements and unresolved questions, and record the rationale for any accepted, rejected, or overridden suggestion. A prior agent score, Director assertion, queue status, or generated summary is advisory and non-terminal.

Automation-bias controls do not permit the Reviewer to disclose unnecessary personal data, alter V002, or authorize generation. A Reviewer who cannot independently inspect the exact artifact or reproduce the decision must publish a non-terminal deficiency, not a bare score. Do not create a new brief or MP4 while V002 remains open.

## Terminal boundary

Only a complete independent Reviewer decision or contract-authorized owner resolution that demonstrates active oversight, exact-provenance evidence, complete scoring, authority verification, and immutable rationale may clear V002. Presence of a human, acceptance of an AI suggestion, or an unchallenged prior score is not sufficient.

## References

[1]: https://airc.nist.gov/airmf-resources/airmf/appendices/app-c-ai-risk-management-and-human-ai-interaction/ "NIST AI RMF Appendix C: AI Risk Management and Human-AI Interaction"
[2]: https://nvlpubs.nist.gov/nistpubs/specialpublications/NIST.SP.1270.pdf "NIST SP 1270: Towards a Standard for Identifying and Managing Bias in Artificial Intelligence"
[3]: https://sre.google/workbook/incident-response/ "Google SRE Workbook: Incident Response"
[4]: https://sre.google/resources/practices-and-processes/incident-management-guide/ "Google SRE: Incident Management Guide"

# Firing 244 Source Notes

## Fresh topic

Automation bias and active human oversight in AI-assisted review: how to prevent a Reviewer from merely accepting generated summaries, scores, captions, provenance claims, or previous agent assertions.

## Authoritative sources

NIST AI RMF Appendix C says organizations should clearly define and differentiate human roles and responsibilities when using, interacting with, managing, evaluating, or overseeing AI systems. It warns that AI systems can amplify human and systemic cognitive biases, especially when opacity or lack of transparency makes outputs difficult to understand, and it recommends making decision processes explicit and studying when and why humans overrule AI outputs: https://airc.nist.gov/airmf-resources/airmf/appendices/app-c-ai-risk-management-and-human-ai-interaction/. NIST’s AI RMF 1.0 discusses human-AI configurations, oversight, and the possibility that the interaction can amplify bias: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf. NIST SP 1270 provides a framework for identifying and managing bias in AI, including systemic, statistical, and human sources: https://nvlpubs.nist.gov/nistpubs/specialpublications/NIST.SP.1270.pdf. Google SRE incident guidance recommends clear command, defined roles, a working record of debugging and mitigation, early declaration, and structured separation of Incident Commander, Communications Lead, and Operations Lead responsibilities: https://sre.google/workbook/incident-response/ and https://sre.google/resources/practices-and-processes/incident-management-guide/.

## Application to V002

A Reviewer who reads an agent-generated score or summary first may anchor on it, accept unsupported claims, or treat a prior non-terminal record as authority. A human-in-the-loop label is insufficient if the human cannot independently inspect the exact artifact, reproduce the score, challenge the evidence, and record dissent. The review packet should separate observations from generated suggestions, require independent first-pass evidence capture, show provenance and uncertainty, and make any AI assistance explicit.

The system should record whether the Reviewer inspected the exact V002 artifact, which evidence was independently observed, which parts were machine-generated or prefilled, what the Reviewer accepted or rejected, what challenges were made, and whether an override or dissent occurred. The Reviewer must own the terminal judgment within the authorized role; the Director, Generator, queue, prior score, or AI summary cannot substitute for it. A working review record should preserve unresolved questions and conflicting evidence rather than silently resolving them.

## Decision direction

V002 remains `video-ready-for-review`, with no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, or approved-for-generation brief. Publish one blocker requiring active, auditable human oversight and anti-automation-bias controls. Keep the single-flight lane closed and do not authorize MP4 generation.

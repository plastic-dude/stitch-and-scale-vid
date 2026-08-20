# Firing 241 Source Notes

## Fresh topic

Privacy-preserving Reviewer evidence and data minimization: how to prove V002’s review decision and quality claims while limiting unnecessary personal, sensitive, or identifying data in video files, screenshots, logs, transcripts, and agent records.

## Authoritative sources

NIST’s Privacy Framework is an enterprise-risk tool for improving individuals’ privacy and supports privacy-by-design practices, risk-based outcomes, communication about privacy practices, and collaboration across organizational roles: https://www.nist.gov/privacy-framework. The NIST Privacy Framework describes data actions across the lifecycle, including collection, logging, generation, transformation, use, disclosure, sharing, transmission, and disposal, and frames privacy risk as problems individuals may experience from data processing; it calls for proportional, risk-based responses and accountability: https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.01162020.pdf. NIST AI RMF is intended to help manage AI risks to individuals, organizations, and society and incorporate trustworthiness into AI design, development, use, and evaluation: https://www.nist.gov/itl/ai-risk-management-framework. W3C Privacy Principles recommend restricting data transfers to what is necessary or aligned with user interests, de-identifying where possible, specifying purpose, avoiding secondary use, providing transparency, and considering sensitivity in context: https://www.w3.org/TR/privacy-principles/.

## Application to V002

A Reviewer needs enough evidence to evaluate the exact video, but should not automatically collect unrelated faces, private messages, account tokens, full browser histories, unnecessary audio, or raw personal data. Evidence should be purpose-bound to the seven-dimensional review, minimized to the smallest useful excerpt or transformed representation, access-controlled by role, and retained under an explicit schedule. Redaction, cropping, blurring, pseudonymization, and selective disclosure must be documented as transformations; they cannot be treated as the exact V002 artifact unless lineage and scope are explicit.

Privacy minimization must not destroy reproducibility. The review packet should preserve the exact artifact hash and a protected access reference, while exposing only necessary derivative evidence to ordinary participants. If redaction could remove a claim, visual, audio cue, caption, or accessibility condition, the Reviewer must record the limitation and test the original or an authorized protected view. A privacy-preserving evidence record is not automatically complete, and a privacy defect or access restriction cannot be silently converted into a terminal decision.

## Decision direction

V002 remains `video-ready-for-review`, with no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, or approved-for-generation brief. Publish one blocker requiring purpose-bound, minimized, role-scoped, lineage-preserving review evidence. Keep the single-flight lane closed and do not authorize MP4 generation.

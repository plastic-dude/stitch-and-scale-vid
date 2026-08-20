# Firing 242 Source Notes

## Fresh topic

Operational readiness rehearsal and dry-run evidence for a multi-agent review lane: how to verify that the Reviewer rubric, evidence schema, escalation path, handoffs, and recovery controls are executable before treating a terminal decision as trustworthy.

## Authoritative sources

Google SRE guidance says on-call readiness requires up-to-date playbooks, training, and regular practice such as Wheel of Misfortune exercises; it recommends contained, realistic breakages and hands-on exercises rather than first learning during a real incident: https://sre.google/sre-book/accelerating-sre-on-call/ and https://sre.google/resources/practices-and-processes/incident-management-guide/. Google’s Production Readiness Review model verifies production setup and operational readiness, uses a service-specific checklist, prioritizes improvements, and includes training and hands-on exercises before responsibility is assumed: https://sre.google/sre-book/evolving-sre-engagement-model/. NIST AI RMF addresses trustworthiness through design, development, use, and evaluation and emphasizes test, evaluation, verification, and validation throughout the lifecycle: https://www.nist.gov/itl/ai-risk-management-framework and https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf.

## Application to V002

The review lane has many written controls, but a written contract is not proof that a Reviewer can execute it correctly. A readiness rehearsal should use a non-terminal, clearly labeled test fixture or shadow packet—not V002—to exercise artifact identity resolution, seven-dimension scoring, threshold recomputation, uncertainty capture, accessibility and privacy evidence, signer/role verification, stale and duplicate event handling, escalation, handoff, and fail-closed behavior. The rehearsal should record versioned inputs, expected outcomes, observed outcomes, deviations, operator roles, and corrective actions.

A rehearsal must not mutate V002, create a terminal event, authorize generation, or be presented as a live review. Readiness evidence expires when the playbook, review contract, rubric, media artifact, platform context, or evidence schema changes. A passing dry run verifies process readiness only; it does not approve the active video.

## Decision direction

V002 remains `video-ready-for-review`, with no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, or approved-for-generation brief. Publish one blocker requiring a version-bound, non-terminal readiness rehearsal and explicit remediation of any failed path before relying on a live terminal decision. Keep the single-flight lane closed and do not authorize MP4 generation.

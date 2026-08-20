# Firing 247 Source Notes

## Fresh topic

Compensating actions and partial-failure recovery in durable review workflows: how to prevent failed Reviewer or Generator steps from being silently retried, rolled back, duplicated, or treated as terminal authorization.

## Authoritative sources

AWS explains the Saga pattern as a way to maintain consistency across distributed services when partial failures can leave inconsistent state; a workflow orchestrates compensating transactions when a later step fails: https://aws.amazon.com/video/watch/0128e601ef9/. AWS Step Functions documentation distinguishes Standard Workflows, which are durable, auditable, long-running, and exactly-once by default, from asynchronous Express Workflows, which are at-least-once and require idempotent actions. It also states that workflow type is immutable and that Express execution history requires explicit logging: https://docs.aws.amazon.com/step-functions/latest/dg/choosing-workflow-type.html. NIST SP 800-34 provides guidance for developing, prioritizing, testing, and maintaining information-system contingency plans: https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final. Google SRE guidance on cascading failures warns that naive retries can amplify load and destabilize a system; it recommends randomized exponential backoff, retry limits, retry budgets, and avoiding retries at multiple layers. It also emphasizes testing overload and recovery paths: https://sre.google/sre-book/addressing-cascading-failures/.

## Application to V002

A review lane has multiple side effects: fetching the Drive asset, creating evidence, writing a review record, publishing a Generator-facing order, updating a manifest, and potentially uploading a new revision. A failure after one side effect must not be treated as if nothing happened. Each step needs a durable execution ID, idempotency key, precondition, postcondition, compensation or containment action, and immutable record of the attempt. A compensation may restore a non-terminal operational state or quarantine a derivative, but it cannot erase evidence or silently roll V002 backward.

At-least-once retry semantics are unsafe for non-idempotent terminal actions. Replays of Reviewer or Generator messages must deduplicate by contract, artifact, action, and execution identity. Retry budgets, exponential backoff, and a single owner prevent cascading duplicate actions. A compensation that fails must create an explicit recovery incident and preserve the partially completed state. A successful compensation is not a Reviewer decision and cannot authorize approval, rejection, remake, publication, or MP4 generation.

## Decision direction

V002 remains non-terminal after the Reviewer’s `BLOCKED` record with no `REMAKE_REQUIRED` order. Publish one blocker requiring a durable, step-level recovery and compensation contract for evidence, manifests, orders, and derivatives. Keep terminal actions idempotent and authorization-bound, preserve partial state and evidence, limit retries, and fail closed when compensation or postcondition verification is incomplete. Keep the single-flight lane closed and do not authorize MP4 generation.

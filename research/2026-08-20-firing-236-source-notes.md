# Firing 236 Source Notes

## Fresh topic

Fail-safe versus fail-secure behavior in a distributed multi-agent review lane: how to preserve evidence and user safety during dependency failure without treating recovery, timeout expiry, or an incomplete callback as authorization.

## Authoritative sources

NIST defines **fail-safe** as terminating system functions in a way that prevents damage to specified resources or entities when a failure occurs, while noting that a security compromise might still occur: https://csrc.nist.gov/glossary/term/fail_safe. NIST defines **fail-secure** as terminating system functions in a way that prevents loss of secure state when a failure occurs, while noting that damage to a resource or entity might still occur: https://csrc.nist.gov/glossary/term/fail_secure. NIST Zero Trust Architecture rejects implicit trust based on network location or ownership and treats authentication and authorization as discrete functions performed before resource access: https://www.nist.gov/publications/zero-trust-architecture. AWS circuit-breaker guidance says repeated failure should open the circuit and return an immediate failure, while recovery requires an explicit health check or state change; it also calls for logging failed calls and bounded retry behavior: https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/circuit-breaker.html.

## Application to V002

The review lane has two safety obligations. It must fail-secure with respect to authorization: if the Reviewer, Drive, identity, callback, ledger, or publication dependency is unavailable or ambiguous, no approval, rejection, remake authorization, or new brief may be inferred. It must fail-safe with respect to evidence and operations: preserve the V002 artifact and all immutable records, return a typed blocked state, avoid destructive retries or duplicate generation, and provide a bounded recovery path. Recovery must be an explicit, identity-bound revalidation event, not automatic reopening merely because a timeout expired or a service became reachable.

## Decision direction

V002 remains `video-ready-for-review` and non-terminal, with no independent Reviewer decision, owner action, `REMAKE_REQUIRED` order, or approved-for-generation brief. Publish one blocker requiring a dual fail-secure/fail-safe circuit-breaker policy: authorization-denying on uncertainty, evidence-preserving during failure, bounded retries, typed recovery probes, explicit revalidation, and no automatic terminal transition. Keep the single-flight lane closed and do not authorize MP4 generation.

# Pass 140 browser findings — attestation-state — 2026-08-19

## Sources checked in browser

| Source | Date/status checked | Findings used | Limits |
|---|---|---|---|
| W3C, *Verifiable Credentials Data Model v2.0* | 2026-08-19 | A verifiable credential expresses claims made by an issuer in an issuer/holder/verifier ecosystem. W3C explicitly distinguishes verification of authenticity/currency from truth of the claims: verification does not itself imply that the claims are true; verifiers evaluate issuer, proof, subject, and claims against their own policies before relying on them. | Credential standard; not a current Stitch & Scale reviewer, attestation, or product-proof system. |
| NIST SP 800-63 Digital Identity Guidelines landing page | 2026-08-19 | NIST’s page identifies identity proofing, authentication, and federation as separate guideline volumes and states that SP 800-63-3 was superseded by SP 800-63-4 on 2025-08-01. This supports a bounded distinction between identity assurance and a generic recorded review. | Superseded landing page; identity guideline scope, not a craft-review or Stitch & Scale proof source. |

## Provisional research synthesis

The fresh question is: **When a craft claim is marked reviewed, what proves a named person or evidence source actually attested to the claim, with scope, date, and policy rather than merely appearing in a record?** Candidate angle: `attestation-state` — **“Reviewed is not attested.”** Fictional proof surface: `CLAIM / ATTESTER / ROLE / EVIDENCE / SCOPE / ISSUED / EXPIRES / POLICY / VERIFIED`, explicitly illustrative until current product proof verifies exact labels. Visual metaphor: a claim card approaches an attestation gate; the reviewer name alone is separated from the claim, scope, evidence, policy, and verification state. Emotional turn: “Someone looked at it” becomes “What exactly was attested, by whom, and under which rule?” Final line: “Name what the review actually attests.”

The candidate is provisionally distinct from `review-state` or `review-expiry` if present (whether a review exists or remains current), `acknowledgement-state` (whether a warning was seen), `authority-state` (which source controls), `evidence-type`/`evidence-coverage` (what evidence exists and what it covers), `identity-state` (which record it is), `schema-state` (record structure), and `consent-state` (permission). It focuses on the relationship between a claim and the person/evidence/policy that attests to it, including scope and verification, not mere review presence, acknowledgement, source authority, evidence classification, record identity, structure, or permission.

## Required blocker

No current product-proof registry or approved capture verifies claim-attester relationships, reviewer roles, evidence links, scope, issued/expiry context, policy, verification result, or attestation semantics. The package must remain `blocked`. Next action: provide one versioned, non-private, rights-cleared approved capture or registry entry showing one claim with named attester or evidence source, role, linked evidence, scope, issued/expiry context, policy, and human verification, then rerun product, claims, rights, caption, audio, platform, and acceptance gates.

## References

[780] [W3C — Verifiable Credentials Data Model v2.0](https://www.w3.org/TR/vc-data-model-2.0/)
[781] [NIST — SP 800-63 Digital Identity Guidelines](https://pages.nist.gov/800-63-3/)

## Research limit

The research supports a bounded assurance/attestation workflow concept only. It does not establish product capability, reviewer identity, credential issuance, cryptographic verification, claim truth, legal compliance, customer outcomes, or that any human has approved a Stitch & Scale record. It does not replace calculation, technical editing, physical print review, chart readability, schematic scale, or test knitting as separate human evidence gates.

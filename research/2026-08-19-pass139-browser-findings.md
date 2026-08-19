# Pass 139 browser findings — disclosure-state — 2026-08-19

## Sources checked in browser

| Source | Date/status checked | Findings used | Limits |
|---|---|---|---|
| NIST, *Privacy Framework* | 2026-08-19 | NIST describes the Privacy Framework as a voluntary tool to help organizations identify and manage privacy risk while protecting individuals’ privacy. It frames privacy as a risk-management question for products and services, not merely a screen-visibility question. | Framework guidance; not legal advice, not a product proof source, and not evidence that Stitch & Scale offers privacy controls. |
| W3C Data Privacy Vocabulary (DPV), version 2.0 | 2026-08-19 | DPV enables machine-readable metadata about the use and processing of personal data; its model includes purposes, processing operations, processing context, data source, status, legal bases, rights, risk/impact, and technical/organizational measures. | W3C Community Group report; not a current Stitch & Scale privacy or disclosure model, and not a legal conclusion for any user. |

## Provisional research synthesis

The fresh question is: **When a craft record is visible on a screen, what proves it is safe and intended to disclose in a screenshot, export, or handoff?** Candidate angle: `disclosure-state` — **“Visible is not shareable.”** Fictional proof surface: `AUDIENCE / PURPOSE / FIELDS SHOWN / FIELDS REDACTED / RECIPIENT / CHANNEL / EXPIRY / REVIEWED`, explicitly illustrative until current product proof verifies exact labels. Visual metaphor: a visible record approaches a share gate; a disclosure card separates what is shown from what is permitted to leave the local workspace. Emotional turn: “I can see it” becomes “I know who may receive it.” Final line: “Name what left the room.”

The candidate is provisionally distinct from `consent-state` (permission or consent), `withdrawal-state` (revocation), `privacy`-adjacent earlier work if any, `exclusion-state` (why a record left an output), `authority-state` (which source controls), `identity-state` (which record it is), `context-state` (what a value belongs to), and `accessibility-state` (whether it can be perceived). It focuses on the disclosure boundary and audience/channel/purpose of a visible record, not consent validity, revocation, output membership, source authority, record identity, semantic context, or perceptual access.

## Required blocker

No current product-proof registry or approved capture verifies audience, purpose, fields shown, fields redacted, recipient, channel, expiry, reviewed disclosure state, or any privacy-safe screenshot/export/handoff behavior. The package must remain `blocked`. Next action: provide one versioned, non-private, rights-cleared approved capture or registry entry showing one record moving from local display to a defined audience/channel with fields shown and redacted, purpose, recipient, expiry, and human review, then rerun product, claims, rights, caption, audio, platform, and acceptance gates.

## References

[777] [NIST — Privacy Framework](https://www.nist.gov/privacy-framework)
[778] [W3C — Data Privacy Vocabulary (DPV), version 2.0](https://www.w3.org/community/reports/dpvcg/CG-FINAL-dpv-20240801/)

## Research limit

The research supports a privacy-risk workflow concept only. It does not establish product capability, legal compliance, permission, disclosure safety, customer outcomes, or that any record is personal data. It does not replace calculation, technical editing, physical print review, chart readability, schematic scale, or test knitting as separate human evidence gates.

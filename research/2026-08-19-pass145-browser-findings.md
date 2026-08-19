# Pass 145 browser findings — deprecation-state — 2026-08-19

## Sources checked

| Source | Date/status checked | Findings used | Limits |
|---|---|---|---|
| W3C, *Version Management in W3C Technical Reports* | 2026-08-19 | W3C distinguishes current/latest/canonical and dated historical versions and lists lifecycle states including obsolete, superseded, rescinded, retired, and outdated. It says status should clearly state when a newer version supersedes an earlier one and that historical versions remain identifiable through dated URLs. | Guidance for W3C technical reports; not a Stitch & Scale lifecycle contract or product proof. The occupied `supersession-state` concept already covers explicit replacement relationships. |
| Craft Yarn Council, *Industry Standards and Guidelines for Designers* | 2026-08-19 | CYC describes pattern-quality concerns, review across production from designer through editing/printing, and company-specific requirements. It discusses submissions, review, acceptance, and the fact that guidelines do not replace individual company guidelines. | Craft industry guidance; not product deprecation, retirement, or update behavior. |

## Provisional research synthesis

A record can be no longer recommended without being visibly removed. Candidate angle: `deprecation-state` — **“Discouraged is not gone.”** Fictional proof surface: `ITEM / STATUS / DEPRECATED-AT / REASON / AFFECTED SCOPE / REPLACEMENT / MIGRATION / HISTORICAL LINK / REVIEWED / DECISION`, explicitly illustrative until current product proof verifies exact labels. Visual metaphor: an older pattern card receives a clear deprecation ribbon while remaining available for historical reference; a new card points to the replacement without silently deleting the old one. Emotional turn: “It is discouraged” becomes “The workflow knows what not to start next.” Final line: “Name what should not start again.”

The candidate is distinct from the occupied `supersession-state` angle, which asks for an explicit predecessor/current replacement relationship. `deprecation-state` changes the pain to communicating that an item is no longer recommended for new use, with reason, effective date, affected scope, replacement, migration, historical link, review, and decision. It is also distinct from `version-lock` (which version is current), `identity-state` (which entity a record became), `withdrawal-state` (whether an item is withdrawn), `review-expiry` (whether review is fresh), `closure-state` (whether work is resolved), `publication-readiness` (release readiness), and `portability-state` (semantic preservation during transfer).

## Required blocker

No current product-proof registry or approved capture verifies deprecation status, effective date, reason, affected scope, replacement, migration guidance, historical link, review, decision semantics, retirement, or exact product labels. The package must remain `blocked`. Next action: provide one versioned, non-private, rights-cleared approved capture or registry entry showing one older craft item marked no-longer-recommended with reason, date, affected scope, replacement or migration guidance, historical link, and human review, then rerun product, claims, rights, caption, audio, platform, and acceptance gates.

## References

[795] [W3C — Version Management in W3C Technical Reports](https://www.w3.org/guide/editor/versioning.html)
[796] [Craft Yarn Council — Industry Standards and Guidelines for Designers](https://www.craftyarncouncil.com/idea.html)

## Research limit

The research supports a bounded deprecation/lifecycle communication concept only. It does not establish product capability, deprecation behavior, retirement status, currentness, customer outcomes, legal obligations, or that a newer record automatically invalidates an older one. It does not replace calculation, technical editing, physical print review, chart readability, schematic scale, or test knitting as separate human evidence gates.

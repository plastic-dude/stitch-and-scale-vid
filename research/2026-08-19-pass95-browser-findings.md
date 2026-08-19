# Pass 95 Browser Findings — Decision Reversal

Checked 2026-08-19.

## NIST National Checklist Program glossary

URL: https://ncp.nist.gov/glossary

NIST defines **Rollback Capability** as whether changes in product configuration made by applying a checklist can be rolled back and, if so, how to roll back the changes. This supports making rollback status and method explicit rather than assuming that a change is reversible. The page is general checklist/configuration terminology and does not prove that Stitch & Scale exposes rollback.

## Vogue Knitting corrections archive

URL: https://www.vogueknitting.com/pattern-help/corrections/

Vogue Knitting states that mistakes can happen despite publication checks, and that corrections are posted as they become available. Corrections are listed by issue and project number; the publisher asks support requests to include issue, page, and project number. This supports scoping a correction/reversal to the affected artifact rather than treating it as a universal or anonymous change. It does not prove that Stitch & Scale has an errata or rollback feature.

## Research implication

A fresh concept may focus on a decision/change record that names the prior state, new state, affected scope, rationale, reversibility, rollback method, owner, and date/version. It must remain blocked until current product proof verifies such a surface. It must not duplicate `correction-trace`, `supersession-state`, `artifact-status`, `change-notice`, `decision-ledger`, or imported `false-completion` / `release-gate-roster`.

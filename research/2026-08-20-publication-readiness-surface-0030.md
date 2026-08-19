# Live Product Research — Publication Readiness Surface

research_id: RESEARCH-20260820-publication-readiness-surface-0030
observed_at: 2026-08-20T00:30:00+01:00
source_url: https://stitch-and-scale-pro-api-server.vercel.app/project/sample-crew-neck-sweater
status: research-only

## Direct observation

The live Publish surface is titled `Pre-publish readiness`. It shows `Ready to publish`, `0 errors`, `2 warnings`, and `13 checks`. The visible checks include sizing-standard availability, plausible gauge, section presence, non-empty sections, positive base measurements, size growth consistency, pattern identity, designer notes, measurement labels, and yarn-weight selection. It also shows two warnings: a possible base-size unit mix-up for Body → Back Length and a missing hip measurement that would affect buyer self-selection.

The same surface displays a `Credibility report` score of `92 / 100`, says `Credible`, and reports `9 sizes graded` and `2624 yd estimated`. The trust-check copy says the pattern is graded against a declared sizing standard, uses a real fit chart, computes yardage from gauge and body measurements, records plausible gauge, passes an automated tech-edit checklist, and contains human-written construction and fit notes. The page also includes copyable buyer-facing credibility text and a marketplace listing generator.

## Guardrails and decision

This is powerful proof of visible checks and visible warnings, but not proof of a human tech editor’s approval, a completed test-knit, buyer outcomes, final marketplace acceptance, or universal pattern credibility. The score and labels are current demo outputs tied to the observed project state; future campaign copy must show the warnings rather than call `Ready to publish` a guarantee.

Reserve `warning-visible-gate` / `checked-data-over-plausible-PDF` as distinct future research territory. The visual contradiction is a green readiness state beside a visible unresolved warning. The proof surface is the actual check list and warning text, not a generic claim about quality. No new Generator brief is created while the privacy-by-default contract remains unpublished.

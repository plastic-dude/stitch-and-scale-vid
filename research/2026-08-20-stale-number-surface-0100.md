# Live Product Research — Derived Grading Table and Stale-Number Risk

research_id: RESEARCH-20260820-stale-number-surface-0100
observed_at: 2026-08-20T01:00:00+01:00
source_url: https://stitch-and-scale-pro-api-server.vercel.app/project/sample-crew-neck-sweater/grading
status: research-only

## Direct observation

The public grading-table route displays a measurement reference diagram, base size M, gauge `20sts × 28rws / 4in`, and size-by-size tables for XS through 5XL across Body, Sleeve, and Neckline. It provides `Copy TSV`, `CSV`, and `Print Sheet` actions. Values expose both stitch/row counts and inch measurements, including exact-looking versus derived values in the table text. The surface therefore offers a concrete proof surface for an input-to-derived-output story.

## Guardrails

A visible derived table does not by itself prove that every value is current, that the underlying inputs were recently changed, that a test knit occurred, or that a buyer-facing PDF is correct. A future stale-number concept must demonstrate an observed input change followed by a verified updated derived value, with the before/after states captured and the export state checked. It must not invent a stale-value defect from a static screenshot.

## Future angle candidate

Reserve `stale-number` as distinct research territory: the dangerous number is the one that looks finished while its source or export is no longer aligned. This differs from privacy ownership, receipts/invoices, test-knit coverage, honest pricing, and warning-visible publication gates by using a before/after derivation and export integrity as the central dramatic engine. No new Generator brief is created while the privacy-by-default contract remains unpublished.

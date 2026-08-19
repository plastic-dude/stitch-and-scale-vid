# Pass 126 browser findings — preview-state — 2026-08-19

## Sources checked

| Source | Checked | Findings used | Limits |
|---|---|---|---|
| W3C CSS Paged Media Module Level 3 | 2026-08-19 | Paged output has page boxes, page size/orientation/margins, printable and non-printable areas, page breaks, page progression, and content that can fall outside a page box. | Specification; not a Stitch & Scale product claim. |
| Adobe Acrobat — Create and verify PDF accessibility | 2026-08-19 | PDF accessibility checks cover tags, reading order, document language, tables, images, contrast, and manual checks; automatic pass status is not the same as complete human review. | Vendor guidance; no product behavior evidence. |
| Section508.gov — Create accessible PDFs | 2026-08-19 | Accessible PDF authoring requires documented baseline/checklist processes and review of conformance, not only generation. | Government guidance; no Stitch & Scale evidence. |
| Modern Daily Knitting — Knitting graph paper | 2026-08-19 | Knit charts depend on gauge and stitch geometry; ordinary square grid can distort the intended knitted shape, so chart geometry and gauge must be reviewed in the target medium. | Practitioner reference, not a standard and not Stitch & Scale evidence. |
| Stitch & Scale local QA, craft-business, mobile-maker, and publishing/export contracts | Re-read 2026-08-19 | Preview, print, chart, schematic, localization, accessibility, and human evidence gates remain distinct; a screen preview is not proof of final export or physical readability. | Internal contracts, not current product behavior. |

## Research synthesis and decision shift

The fresh question is: **When a screen preview becomes a PDF, chart, schematic, or printed page, what proves that page breaks, scale, margins, reading order, labels, tables, and chart geometry remain usable in the target medium?** The research changes the creative from generic preview approval to a fidelity card naming `PREVIEW VERSION / RENDER TARGET / PAGE SIZE / SCALE / PAGE BREAKS / MARGINS / READING ORDER / FINAL CHECK`, explicitly illustrative until product proof verifies exact labels. Candidate angle: `preview-state` — **“Previewed is not printed.”** Visual metaphor: a phone preview unfolds into page boxes and splits at a page break before a final fidelity check. Emotional turn: preview confidence becomes target-medium accountability. Final line: “Name the medium before you trust the preview.”

The candidate is distinct from `version-lock`, which concerns exact artifact identity; `locale-state`, which concerns locale-sensitive meaning; `unit-state`, which concerns unit attachment; `selection-state`, which concerns selected context propagation; `publication-readiness`, if present, which concerns release readiness; and physical print review, which remains a separate human gate. `preview-state` focuses on **the difference between an on-screen preview and the rendered/exported/printed target artifact**.

## Product truth and blocker

No current product-proof registry or approved capture verifies preview version identity, render target, page size, scale, page-break behavior, margins, reading order, chart geometry, schematic scale, PDF tags, document language, or physical print fidelity. Therefore no current preview-to-export, print fidelity, chart geometry, or PDF accessibility capability may be claimed. The package must remain `blocked` with one next action: provide a versioned, non-private approved capture or registry entry showing one preview linked to its exact rendered/exported artifact plus one device view and one physical or target-medium review, then rerun all gates.

## Planned campaign framing

Assumption: no active brief was supplied, so classify as a blocked `founder-proof` micro-explainer for knitwear designers, technical editors, test knitters, and craft-business operators; objective is to show why a screen preview is not evidence that a chart, schematic, PDF, or printed page will survive its target medium; tone is precise, calm, non-alarmist; distribution is organic-first Instagram Reels, TikTok, and YouTube Shorts; tier is blocked proof-led planning. David remains a developer whose late mother knitted, never a knitter, designer, pattern designer, technical editor, or tester.

## References

[720] [W3C — CSS Paged Media Module Level 3](https://www.w3.org/TR/css-page-3/)
[721] [Adobe — Create and verify PDF accessibility](https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html)
[722] [Section508.gov — Create accessible PDFs](https://www.section508.gov/create/pdfs/)
[723] [Modern Daily Knitting — Pro Tip: Knitting Graph Paper](https://www.moderndailyknitting.com/community/pro-tip-knitting-graph-paper/)
[724] [Stitch & Scale local skill contracts — QA, craft-business, mobile-maker, and publishing/export workflows](file:///home/ubuntu/skills/mobile-maker-workflows/SKILL.md)

## Research limit

These sources establish paged-media, PDF accessibility, chart-geometry, print-review, and target-medium fidelity principles, not Stitch & Scale product behavior. The candidate does not claim that the app currently exposes preview version links, render targets, page-break checks, scale controls, reading-order checks, chart-geometry checks, PDF tags, or physical print fidelity. Product truth remains unverified until a versioned approved capture or registry entry supplies the exact surface and behavior.

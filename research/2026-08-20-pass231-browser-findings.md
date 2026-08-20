# Pass 231 wide research: evidence-status-state

**Research date:** 2026-08-20 (Africa/Lagos)  
**Director pass:** 231  
**Campaign assumption:** No active human brief was present. This pass assumes founding-tester recruitment through the free demo and early-access cohort remains the campaign objective: an organic, proof-led 9:16 founder short for independent knitwear designers and pattern publishers, with a quiet, precise tone and no paid placement assumed. This is a planning assumption, not a product claim.

## Fresh research question

When a craft workflow record says **reviewed**, **ready**, **current**, **accepted**, or **open**, what scope, source, timestamp, reviewer, and evidence window make that status meaningful rather than a generic badge?

This question is narrower than `decision-basis-state`, which concerns the evidence and roles beneath a decision. Pass 231 focuses on **what a status applies to, when it was true, who set it, what evidence window it covers, and what it does not certify**.

## Evidence gathered

| Area | Source and date | Evidence | Uncertainty and limit | Decision changed |
|---|---|---|---|---|
| Status and evidence window | Atlassian, **Complete guide to writing a clear project status report**, accessed 2026-08-20 [1] | Atlassian describes a status report as a concise, timely update of progress, risks, and next steps; it emphasizes report date, data gathering, blockers, action owners, and regular cadence. | Vendor project-management guidance; not a craft-specific status validator or Stitch & Scale capability. | Require `STATUS_SCOPE`, `EVIDENCE_WINDOW`, `STATUS_SET_AT`, `STATUS_SET_BY`, `SUPPORTING_RECORDS`, and `NEXT_CHECK` rather than a standalone badge. |
| Publication status variation | Knitty, **Design or Write For Knitty**, last update June 17, 2026, accessed 2026-08-20 [2] | Knitty says submissions may receive YES/NO, may be held for possible future publication with permission, and final decisions can take weeks to months after a deadline; it separately discusses technical editing, test knitting, and publication. | One publication’s process; not a universal lifecycle or product proof. | Keep `ACCEPTED`, `HELD`, `REVIEWED`, `TECH_EDITED`, `TEST_KNIT`, and `PUBLISHED` from collapsing into one status. |
| Workflow status context | Craft Yarn Council, **You Want to Submit a Project Idea… Where Do You Start?**, accessed 2026-08-20 [3] | CYC distinguishes idea, swatch/sketch/sample, completed project, acceptance, contract, and review; it notes organizations have their own requirements and that review may take weeks. | General guidance; organization-specific instructions take precedence. | Define status against a named workflow and source rather than treating it as universal. |
| Status from concrete evidence | Craft Yarn Council, **Congratulations! You’ve Received the Go Ahead**, accessed 2026-08-20 [4] | CYC asks designers to reconfirm inputs, keep notes, submit labels, gauge, instructions, schematics, invoices, and return shipping; the checklist makes clear that different evidence surfaces support different workflow steps. | The checklist does not define a software status model. | Keep a status distinct from the underlying label, swatch, instruction, schematic, invoice, or return record. |
| Technical and publication gates | Knitty current submission guidance [2] | Knitty separates technical editing, test knitting, charts, schematics, photographs, rights, and submission files, while handling publication decisions separately. | Publication-specific; no Stitch & Scale proof. | Status must identify its gate and must not imply technical edit, test knit, rights clearance, or publication. |
| Category comparison | Atlassian status reports and craft publication workflows | A generic progress status summarizes a project or report; it does not necessarily identify the exact artifact, evidence window, reviewer, or gate that supports the label. | No basis for competitor superiority or weakness claims. | Say “a status needs scope and evidence” rather than attacking tools. |
| Seasonal context | Knitty Winter 2026 page [2], accessed 2026-08-20 | Current page lists a Winter 2026 issue, submission elements, and a September 15, 2026 deadline. | Time-sensitive and publication-specific; not urgency, affiliation, or outcome. | Keep seasonal context in research only; no deadline language in creative copy. |
| Platform and accessibility | Instagram Help [5], TikTok Support [6], YouTube Help [7], accessed 2026-08-20 | Current guidance supports conservative 9:16 planning, human caption review, and draft/editable automatic captions. | Platform controls vary; no upload authorized and no accessibility conformance claimed. | Use one status field per close-up, caption-on/caption-free review, and mobile readability gates. |
| Product truth and rights | Current repository HEAD `a53e404a61535ba2a9298221cd68c66b70650670`; selection audit; imported continuity ledger | No current product-proof registry or approved, non-private, rights-cleared capture verifies a Stitch & Scale evidence-status surface. `false-completion` and `release-gate-roster` remain blocked and occupied. No repository-visible reviewer/remake orders were present at refresh. | Repository absence does not prove hidden/private state is absent. Real patterns, samples, test-knit reports, publication decisions, customer records, and contributor identities remain unverified and rights-sensitive. | Keep the package blocked. Use fictional cards marked `ILLUSTRATIVE — NOT PRODUCT UI`; make no claim of status automation, freshness, or evidence verification. |

## Research synthesis

Atlassian’s current status-report guidance treats status as a timely, dated update that gathers data, risks, blockers, and next actions. [1] Knitty’s current guidance shows that publication workflow has more than one meaningful state: a design may be accepted, held for future consideration with permission, awaiting a decision, technically edited, test knit or not, and eventually published; these are not interchangeable. [2] CYC likewise separates idea, sample, completed project, acceptance, contract, and review, while its project checklist keeps labels, swatches, instructions, schematics, invoices, and return shipping distinct. [3] [4]

Together, these sources support a bounded question: **what exactly does a status apply to, which evidence window supports it, when was it set, who set it, and what next check can change it?** A status card should make its scope and limits legible without presenting freshness as correctness or review as approval.

The visual metaphor should be a fictional `STATUS` card that first reads `STATUS: READY`, then opens to `SCOPE`, `EVIDENCE_WINDOW`, `STATUS_SET_AT`, `STATUS_SET_BY`, `SUPPORTING_RECORDS`, `NEXT_CHECK`, and `LIMITATIONS`. Separate cards keep technical editing, test knitting, chart readability, schematic scale, rights, and publication approval visible. The final state remains `STATUS: UNVERIFIED` because no current Stitch & Scale evidence-status surface is supplied.

## Decision

Select the new angle **`evidence-status-state`**. It is materially distinct from `decision-basis-state`, which concerns the evidence beneath a decision. Pass 231 concerns the **scope, evidence window, timestamp, setter, supporting records, next check, and limits beneath a status label**. It is distinct from `deadline-condition-state`, `record-purpose-state`, `publication-boundary-state`, `capture-freshness`, `review-state`, `confidence-state`, `verification-state`, and the imported blocked concepts.

The proposed hook is: **“A status is not evidence until its scope is visible.”** The visual metaphor is a fictional `STATUS` card whose green-looking label opens to reveal scope, evidence window, set time, setter, supporting records, next check, and limitations. The final line is: **“Name what the status covers, when it was true, and what checks it still needs.”** These are bounded creative lines, not product claims.

The fictional proof surface, if a current product record is later supplied, must distinguish: `STATUS S-001 / DESIGN_ID / SUBJECT_ID / STATUS_VALUE / STATUS_SCOPE / EVIDENCE_WINDOW_START / EVIDENCE_WINDOW_END / STATUS_SET_AT / STATUS_SET_BY / SUPPORTING_RECORDS / NEXT_CHECK / REVIEWER / REVIEWED_AT / LIMITATIONS / STATUS`. A status record does not prove the underlying evidence, technical correctness, test-knit success, publication approval, rights clearance, or user outcome.

## References

[1]: https://www.atlassian.com/agile/project-management/status-report "Atlassian — Complete guide to writing a clear project status report"
[2]: https://knitty.com/subguide.php "Knitty — Design or Write For Knitty; updated June 17, 2026"
[3]: https://www.craftyarncouncil.com/idea.html "Craft Yarn Council — You Want to Submit a Project Idea… Where Do You Start?"
[4]: https://www.craftyarncouncil.com/industry.html "Craft Yarn Council — Congratulations! You’ve Received the Go Ahead"
[5]: https://help.instagram.com/1038071743007909 "Instagram Help — Reel size & aspect ratios"
[6]: https://support.tiktok.com/en/using-tiktok/creating-videos/accessibility "TikTok Support — Accessibility for your videos"
[7]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Add subtitles & captions"

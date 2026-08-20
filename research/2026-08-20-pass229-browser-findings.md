# Pass 229 wide research: record-purpose-state

**Research date:** 2026-08-20 (Africa/Lagos)  
**Director pass:** 229  
**Campaign assumption:** No active human brief was present. This pass assumes founding-tester recruitment through the free demo and early-access cohort remains the campaign objective: an organic, proof-led 9:16 founder short for independent knitwear designers and pattern publishers, with a quiet, precise tone and no paid placement assumed. This is a planning assumption, not a product claim.

## Fresh research question

When one craft-business record is reused across design, sample, submission, testing, and publication contexts, what explicit purpose keeps its fields from being misread as a different kind of fact or approval?

This question is narrower than `translation-state`, which concerns a source pattern moving into a target locale, and distinct from `selective-disclosure-state`, which concerns which fields travel to an audience. Pass 229 focuses on **why a record exists, which decision it supports, and which fields remain outside that purpose**.

## Evidence gathered

| Area | Source and date | Evidence | Uncertainty and limit | Decision changed |
|---|---|---|---|---|
| Submission purpose | Craft Yarn Council, **Congratulations! You’ve Received the Go Ahead**, accessed 2026-08-20 [1] | CYC separates before-project notes, actual project, gauge swatch, project instructions, schematic, invoice, and return shipping; it asks designers to keep notes and not rely on memory. | General industry guidance; company/publication instructions take precedence. | Treat `PURPOSE` and `WORKFLOW_STAGE` as explicit fields rather than interpreting a project record as every downstream artifact. |
| Record fields by workflow | CYC guidance [1] | CYC asks for labels, gauge, yarn amounts, size made, measurements, instructions, schematic, charts, invoice, and return shipping as related but distinct submission elements. | The checklist is not a product model or proof that one app supports these fields. | Keep `SOURCE_RECORD_ID`, `PURPOSE`, `STAGE`, `FACTS`, `DERIVED_VALUES`, and `NEXT_DECISION` separate. |
| Pattern production scope | CYC, **You Want to Submit a Project Idea… Where Do You Start?**, accessed 2026-08-20 [2] | CYC distinguishes a design idea, a swatch/sketch/sample submission, a completed project, acceptance, a contract, and a review process. | The workflow varies by company and is not a universal lifecycle. | Use a stage record without claiming a canonical lifecycle or automatic state transitions. |
| Publication artifact separation | Knitty, **Design or Write For Knitty**, last update June 17, 2026, accessed 2026-08-20 [3] | Knitty requires individual files and separates pattern text, images, charts, schematics, signed statements, and permission/copyright concerns. | One publication’s submission rules; not product proof or an approval standard for Stitch & Scale. | Make the record purpose visible before attaching files or interpreting status. |
| Single-source category | Atlassian, **Building a true Single Source of Truth**, accessed 2026-08-20 [4] | Atlassian describes an SSoT as a location for current project/process information and warns that multiple unclear locations create duplication, conflicting information, and outdated files; it recommends assigning update responsibility and maintaining templates. | Vendor educational material; not evidence of superiority or a Stitch & Scale feature. | Compare the category carefully: one location alone does not make a record authoritative; purpose, owner, source, update responsibility, and status still need evidence. |
| Craft standards | Craft Yarn Council, **Standards and Guidelines**, accessed 2026-08-20 [5] | CYC describes guidelines for labels, patterns, charts, abbreviations, sizing, and yarn/needle terminology to bring uniformity across related craft surfaces. | Voluntary guidelines; not law, translation validation, or a complete workflow model. | Keep standard/reference purpose separate from a recorded project fact or a technical review result. |
| Seasonal context | Knitty Winter 2026 page [3], accessed 2026-08-20 | Current page lists a Winter 2026 issue, complete submission elements, and a September 15, 2026 deadline. | Time-sensitive and publication-specific; not urgency, affiliation, or outcome. | Keep seasonal context in research only; do not mention the deadline in creative copy. |
| Platform and accessibility | Instagram Help [6], TikTok Support [7], YouTube Help [8], accessed 2026-08-20 | Current guidance supports conservative 9:16 planning, human caption review, and draft/editable automatic captions. | Platform controls vary; no upload authorized and no accessibility conformance claimed. | Use a single clear record-purpose card per shot, caption-on/caption-free review, and mobile readability gates. |
| Product truth and rights | Current repository HEAD `e702ebe01f3408af47179981b5fce20802e58cf0`; selection audit; imported continuity ledger | No current product-proof registry or approved, non-private, rights-cleared capture verifies a Stitch & Scale purpose/stage/source-of-truth surface. `false-completion` and `release-gate-roster` remain blocked and occupied. No repository-visible reviewer/remake orders were present at refresh. | Repository absence does not prove hidden/private state is absent. Private project records, invoices, customer details, samples, and submission materials remain unverified and rights-sensitive. | Keep the package blocked. Use fictional cards marked `ILLUSTRATIVE — NOT PRODUCT UI`; make no claim of automatic lifecycle, authoritative records, or source-of-truth capability. |

## Research synthesis

CYC’s current workflow guidance separates project notes, actual project, gauge swatch, instructions, schematic, labels, invoice, and return shipping, while asking designers to keep notes and not rely on memory. [1] It also distinguishes an idea, a swatch/sketch/sample, a completed project, acceptance, a contract, and review. [2] Knitty’s current guidance similarly separates pattern text, images, charts, schematics, statements, and permission concerns. [3] Atlassian’s SSoT guidance adds a category-level warning: a central location does not eliminate confusion if purpose, ownership, update responsibility, and templates are unclear. [4]

Together, these sources support a bounded record-design question: **before a field is read as a fact, estimate, attachment, stage, or approval, what purpose and source does the record declare?** The film should not claim that a single ledger solves duplication or becomes authoritative automatically. It should show purpose as a boundary around meaning.

The visual metaphor should be a fictional `PROJECT RECORD` card that is stamped `PURPOSE: DESIGN NOTE`, `PURPOSE: SUBMISSION`, `PURPOSE: TEST KNIT`, or `PURPOSE: PUBLICATION REVIEW`. Fields outside the selected purpose remain visibly `NOT PART OF THIS RECORD`. The final state remains `RECORD PURPOSE: UNVERIFIED` because no current Stitch & Scale purpose/stage surface is supplied.

## Decision

Select the new angle **`record-purpose-state`**. It is materially distinct from `translation-state`, which follows a source artifact into a target locale, and from `selective-disclosure-state`, which concerns audience-specific field travel. Pass 229 concerns the **declared purpose and workflow stage of a craft-business record** and the separation between recorded facts, derived values, attachments, decisions, and approvals. It is distinct from `workflow-stage-state`, `source-of-truth`, `owner-state`, `decision-state`, `publication-boundary-state`, and the imported blocked concepts.

The proposed hook is: **“A record without a purpose can tell the wrong story.”** The visual metaphor is a fictional `PROJECT RECORD` card whose meaning changes when `PURPOSE` changes, while `SOURCE`, `STAGE`, `RECORDED_FACTS`, `DERIVED_VALUES`, `NEXT_DECISION`, and `STATUS` stay visible. The final line is: **“Name why the record exists before you read what it means.”** These are bounded creative lines, not product claims.

The fictional proof surface, if a current product record is later supplied, must distinguish: `RECORD R-001 / DESIGN_ID / RECORD_PURPOSE / WORKFLOW_STAGE / SOURCE_RECORD_ID / RECORDED_FACTS / DERIVED_VALUES / ATTACHMENTS / DECISION_OWNER / NEXT_DECISION / REVIEWER / REVIEWED_AT / STATUS / LIMITATIONS`. A purpose record does not prove the underlying facts, calculations, technical editing, test-knit success, publication approval, financial treatment, or reader/customer outcome.

## References

[1]: https://www.craftyarncouncil.com/industry.html "Craft Yarn Council — Congratulations! You’ve Received the Go Ahead"
[2]: https://www.craftyarncouncil.com/idea.html "Craft Yarn Council — You Want to Submit a Project Idea… Where Do You Start?"
[3]: https://knitty.com/subguide.php "Knitty — Design or Write For Knitty; updated June 17, 2026"
[4]: https://www.atlassian.com/work-management/knowledge-sharing/documentation/building-a-single-source-of-truth-ssot-for-your-team "Atlassian — Building a true Single Source of Truth for your team"
[5]: https://www.craftyarncouncil.com/standards "Craft Yarn Council — Standards and Guidelines"
[6]: https://help.instagram.com/1038071743007909 "Instagram Help — Reel size & aspect ratios"
[7]: https://support.tiktok.com/en/using-tiktok/creating-videos/accessibility "TikTok Support — Accessibility for your videos"
[8]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Add subtitles & captions"

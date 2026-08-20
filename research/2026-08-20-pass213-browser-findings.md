# Wide Research Findings — Pass 213 — `record-estimate-state`

**Research date:** 2026-08-20  
**Research question:** How should an independent knitwear designer distinguish a recorded cost from an estimate, derived calculation, or assumption when samples, testing, editing, materials, postage, fees, and time feed into business decisions?  
**Decision status:** Research complete; planning package remains **blocked** pending current product proof, rights, platform confirmation, and Director gates.

## Decision changed by research

Select **`record-estimate-state`** as the fresh angle. The pain is not simply price formation, payment status, cost basis, or a missing number. It is the collapse of four different kinds of business information: a cost actually incurred, an estimate entered before work happens, a calculation derived from stored records, and an assumption supplied by the designer. When these are visually or semantically flattened, a break-even or margin view can look settled while its inputs remain estimated, incomplete, or unverified.

This is a workflow-education concept, not tax, accounting, investment, or profitability advice. The research supports showing the labels **RECORDED**, **ESTIMATED**, **DERIVED**, and **ASSUMED** as distinct states. It does not support any claim that Stitch & Scale currently performs accounting, tax treatment, automated reconciliation, profitability prediction, or financial decision-making.

## Evidence synthesis

| Source | Date/status | Evidence relevant to the question | Uncertainty or boundary |
|---|---|---|---|
| U.S. Small Business Administration, “Break-even point” | Page accessed 2026-08-20; search result dated 2024-10-03 | SBA separates estimated fixed costs, selling price, projected unit sales, and estimated variable cost per unit; it gives the break-even formula and explicitly says the analysis is an estimate for planning and is not intended to determine accounting or financing with complete accuracy before costs and production occur. It also says semi-variable costs should be separated into fixed and variable parts where possible. [1] | U.S. small-business guidance, not tax advice for this user or a universal accounting rule. No Stitch & Scale behavior is established. |
| SBA, “Plan your business” | Current page accessed 2026-08-20 | SBA says market research and competitive analysis reduce risk; its business-plan guidance distinguishes a cost structure from revenue streams and says startup-cost calculation can estimate profits, support break-even analysis, and identify missing expenses. It also distinguishes projected financial statements from historical statements. [2] | General planning guidance; it does not prescribe the product’s data model or a designer’s legal/tax treatment. |
| Craft Yarn Council, “Congratulations! You’ve Received the Go Ahead” | Page accessed 2026-08-20; page date not stated | CYC asks designers to keep notes while working rather than rely on memory; it lists materials, yarn amounts, sizing, math checks, technical editing, project instructions, schematics, invoices, and return shipping as separate project responsibilities or records. It states that design fees are generally negotiated when a concept is accepted and that return shipping is the designer’s expense. [3] | Industry guidance and company-specific instructions may differ. It demonstrates record-bearing workflow responsibilities, not a universal compensation or cost formula. |
| Craft Yarn Council, “You Want to Submit a Project Idea… Where Do You Start?” | Page accessed 2026-08-20; page date not stated | CYC says submission requirements vary by company or magazine; it distinguishes a concept, sketch, swatch, sample, submission receipt, review period, design fee discussion, contract, and postage responsibility. [4] | Guidance is not current product proof and does not establish typical prices, revenue, or acceptance probability. |
| Craft Yarn Council, Standards & Guidelines PDF | Published 2018-11-06; accessed 2026-08-20 | The standards describe a coordinated pattern-production ecosystem involving publishers, manufacturers, designers, editors, samples, patterns, yarn labels, schematics, and submission guidance. It emphasizes consumer-friendly products and distinct design/submission materials. [5] | The document is older than the current research date and is guidance rather than a live platform or accounting specification. |
| Manus craft-business record contract | Local skill guidance read 2026-08-20 | The local operating model distinguishes expense events from sales rollups, estimates, planned costs, and derived break-even or P&L values; it requires stable IDs, dates, amounts, units, source notes, visible formulas, local-first persistence, explicit deletion, and accountant-readable export. [6] | This is project operating guidance, not an external source or proof of current Stitch & Scale implementation. |

## Audience and craft pain

CYC’s guidance makes the hidden record work concrete. A designer may need to retain notes while working, material and yarn quantities, required sizes, technical editing, schematic information, an invoice, and return shipping. Those items do not all have the same status: some are incurred expenses, some are obligations, some are negotiated fees, some are measurements, and some are future estimates. Treating them as one undifferentiated “cost” erases why the number exists and whether it can support a decision.

SBA’s warning is especially useful for a truthful film: break-even is a planning estimate, not a completed accounting result. The concept should therefore show a projection refusing to become a settled fact until its inputs are labeled. It must not show a made-up price, margin, customer outcome, revenue, adoption, or profitability threshold.

The treatment should not show a real invoice, private business record, customer name, bank data, tax identifier, contract, or copyrighted pattern. Use original neutral cards with fictional values only if every value is explicitly labeled `ILLUSTRATIVE — NOT PRODUCT UI` and `EXAMPLE — NOT A USER RECORD`. Avoid making any number look like a product default or recommendation.

## Distinctness decision

| Nearby occupied territory | What it already asks | What `record-estimate-state` changes |
|---|---|---|
| `price-basis` | What inputs or basis support a price | Whether each input is a recorded fact, estimate, derived value, or assumption before it is used |
| `quantity-basis` / `value-state` | Quantity or value representation and basis | The epistemic status and source of the business number, not the number’s unit or magnitude |
| `payment-state` | Whether money is invoiced, due, paid, or followed up | Upstream cost-status and estimate lineage before any payment event |
| `comparison-basis` | Whether two records are comparable under aligned fields | No A/B comparison; one project’s record, estimate, derived calculation, and assumption remain separate |
| `accountable-owner-state` | Who can accept, check, monitor, hand back, or reauthorize a decision | What kind of number is being shown and what evidence supports it; no role roster or authority claim |
| `cross-reference-state` | Whether a reader can follow a source-to-target pointer and return | Whether a business calculation preserves the distinction between event, projection, formula output, and assumption |

## Proposed proof surface

`REC X-001 / DESIGN_ID / LINE_ITEM / CATEGORY / AMOUNT_OR_QUANTITY / UNIT / CURRENCY / EVENT_DATE / SOURCE_NOTE / STATUS / RECORDED_AT / ESTIMATE_PERIOD / ASSUMPTION_NOTE / FORMULA_OR_DERIVATION / SOURCE_RECORD_ID / REVIEW_RECORD`

This surface is illustrative only. No current product-proof registry or approved capture verifies that Stitch & Scale exposes, persists, links, calculates, or exports these exact fields.

## Visual opportunity and dramatic engine seed

Show four original cards around a fictional design ledger: `RECORDED — YARN RECEIPT`, `ESTIMATED — TEST-KNIT HOURS`, `DERIVED — BREAK-EVEN VIEW`, and `ASSUMED — PROJECTED SALES`. A single number tries to move from the estimate lane into the derived lane; the gate stops it until source note, period, and formula are visible. The final image holds the four labels apart and marks the calculation `PLANNING ESTIMATE — NOT ACCOUNTING RESULT`.

The hook is: **“A number can be useful without being settled.”** The emotional turn is from false certainty to honest control: label what happened, what is forecast, what is calculated, and what is still your assumption. The final line is: **“Name what happened, what you estimated, and what the formula still depends on.”**

## Platform and production findings

Plan a 45-second 9:16 master only as a blocked assumption. Use one narrator family, caption-on and caption-free reviews, close inserts for one status card at a time, and a caption safe zone that protects cards, hands, labels, numbers, and the final invitation. No actual financial record, invoice, contract, tax identifier, bank detail, customer data, or personal business outcome may appear. No platform destination is confirmed; platform-specific safe-zone and caption behavior must be rechecked after the destination is named.

The film must not claim tax treatment, accounting compliance, profitability, break-even accuracy, financial viability, product defaults, automated reconciliation, background money movement, or a recommended price. It must not imply that estimates become facts because a formula displays them. Preserve technical editing, physical print review, chart readability, schematic scale, and test knitting as separate human evidence gates.

## Current-state reconciliation

The active branch is the Director planning branch at pass 212’s published state. The latest occupied angle is `cross-reference-state`; this pass is materially different because it moves from reader navigation to the status and lineage of business records. `price-basis`, `quantity-basis`, `payment-state`, `comparison-basis`, `accountable-owner-state`, and `cross-reference-state` remain occupied adjacent territory and are not modified. The imported `false-completion` and `release-gate-roster` concepts remain blocked with occupied filenames. `reviews/`, `orders/`, and `comms/inbox/` are absent; no open CRITICAL or HIGH remake order was found at refresh. No product-proof registry or approved capture was found. No media is being generated or uploaded.

## References

[1]: https://legacy.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs/break-even-point "U.S. Small Business Administration — Break-even point"  
[2]: https://www.sba.gov/counseling/plan-your-business/ "U.S. Small Business Administration — Plan your business"  
[3]: https://www.craftyarncouncil.com/industry.html "Craft Yarn Council — Congratulations! You’ve Received the Go Ahead"  
[4]: https://www.craftyarncouncil.com/idea.html "Craft Yarn Council — You Want to Submit a Project Idea… Where Do You Start?"  
[5]: https://media.craftyarncouncil.com/sites/default/files/images/standards/CYC_YarnStandards-2018-11-06.pdf "Craft Yarn Council — Standards & Guidelines for Knitting and Crochet"  
[6]: https://github.com/plastic-dude/stitch-and-scale-vid "Stitch & Scale video operations repository and local craft-business record contract"

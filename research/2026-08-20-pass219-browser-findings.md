# Wide Research Findings — Pass 219 — `material-availability-state`

**Research date:** 2026-08-20  
**Research question:** What must a knitwear material record preserve before a project can honestly describe its yarn, color, quantity, dye lot, supplier confirmation, sample timing, and availability as ready for a submission or handoff?

## Source evidence

Craft Yarn Council’s industry guidance says to reconfirm yarn and color selection with an editor or design director, check that ball bands share a dye-lot number, reconfirm with the yarn manufacturer that the selected yarn will be available for at least the next year, reconfirm the required sample size, keep notes, and discuss yarn or color problems with the manufacturer or editor. It also requires project instructions to identify yarn type, yardage and weight, fiber content, skein or ball quantities by size, materials and accessories, measurements, and the size made. [1]

Craft Yarn Council’s designer pitfalls list identifies missing yarn colors and precise amounts, discontinued yarn colors, missing accessory quantities, gauge mismatch, missing records, and failure to prepare complete instructions or schematics as common problems. [2] Its standards page describes shared guidelines intended to make yarn, needle, hook, and pattern information more uniform and easier for consumers to select materials and complete projects. [3]

## Decision boundary

Select `material-availability-state` if the angle remains distinct from `substitution-authorization-state`, `material-trace`, `gauge-state`, `gauge-reality`, `record-estimate-state`, `quantity-basis`, `price-basis`, and `test-protocol-state`. The changed pain is **not** whether a substitute fits, whether a material fact is recorded, or whether a swatch passed. It is whether the material package is actually ready to travel: yarn and color are confirmed, dye lot is identified, quantity is explicit, supplier availability is checked, sample size is reconfirmed, timing is known, and unresolved material risk is visible.

The proposed proof surface is:

`MAT A-001 / DESIGN_ID / MATERIAL_ID / YARN_OR_MATERIAL / COLORWAY / DYE_LOT / FIBER_AND_WEIGHT / QUANTITY_BY_SIZE / ACCESSORIES / SUPPLIER_OR_SOURCE / AVAILABILITY_CHECKED_AT / AVAILABILITY_WINDOW / SAMPLE_SIZE / REQUIRED_BY / CONFIRMING_ROLE / OPEN_MATERIAL_RISK / STATUS`

No current product-proof registry or approved capture verifies a Stitch & Scale material-availability surface. All cards must be labeled `ILLUSTRATIVE — NOT PRODUCT UI`; fictional values must be labeled `EXAMPLE — NOT A CURRENT SUPPLY RECORD`.

## Audience pain and visual opportunity

A design can look ready while its material package still says “blue yarn,” “a small amount,” or “available somewhere.” A different dye lot may change the appearance, a discontinued color may block a handoff, an accessory quantity may be missing, or the requested sample size may not match the intended model. The failure is not only a purchasing problem: an incomplete material record can make instructions, testing, submission, and downstream reader expectations harder to coordinate.

The visual treatment begins with a polished project card marked `READY`. The camera pulls back to reveal blank lanes for dye lot, quantity by size, supplier/source, availability window, sample size, required-by date, confirming role, and open material risk. `READY` changes to `MATERIAL CHECK: OPEN`; no supply, product, pricing, or delivery claim is made.

The hook is: **“A yarn name is not a material handoff.”** The emotional turn is from a tidy project card to responsible readiness: show what is confirmed, what is time-bound, and what still needs a human check. The final line is: **“Name the material, the quantity, the window, and what still needs confirmation.”**

## Limits

Do not claim that Stitch & Scale verifies inventory, predicts stock, confirms suppliers, guarantees availability, recommends yarn, authorizes substitutions, manages purchasing, prevents shortages, or establishes publication readiness. Do not use real supplier records, private invoices, customer orders, personal addresses, copyrighted patterns, or current product UI. Do not invent pricing, revenue, fulfillment, delivery dates, customer outcomes, adoption, accuracy, credentials, testimonials, urgency, or capabilities.

## References

[1]: https://www.craftyarncouncil.com/industry.html "Craft Yarn Council — Congratulations! You’ve Received the Go Ahead"  
[2]: https://www.craftyarncouncil.com/pitfalls.html "Craft Yarn Council — Designer Pitfalls"  
[3]: https://www.craftyarncouncil.com/standards "Craft Yarn Council — Standards and Guidelines"

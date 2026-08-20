# Wide Research Findings — Pass 221 — `care-instruction-state`

**Research date:** 2026-08-20  
**Research question:** What must a knitwear care record preserve about washing, bleaching, drying, ironing, professional care, temperature, symbols, warnings, blocking, and evidence before a maker or reader treats it as safe guidance?

## Source evidence

Craft Yarn Council’s care-symbol guidance says universal care symbols reduce language on yarn and clothing labels and indicate how best to care for an item made from the yarn. It identifies five basic categories: washing, bleaching, drying, ironing, and professional textile care. It also explains that temperatures, hand washing, do-not symbols, and other qualifiers modify the meaning. [1]

Craft Yarn Council’s designer pitfalls page warns not to block acrylic yarn with heat, and says care or finishing questions should be discussed with the company or publication when needed. It also warns about missing material details, incomplete instructions, missing records, and late submissions. [2]

The U.S. Federal Trade Commission’s Care Labeling Rule applies to covered textile wearing apparel and certain piece goods. It requires regular care instructions and warnings for covered products, requires a reasonable basis for care information, and describes care terms for washing, drying, ironing, bleaching, warnings, and drycleaning. The rule is a legal text for covered manufacturers and importers, not a Stitch & Scale feature or general knitwear publication approval. [3]

Canada’s Office of Consumer Affairs explains five basic apparel-care symbols, temperature dots and bars, and supplementary symbols such as dry flat, line dry, do not tumble dry, do not iron, do not bleach, and do not wring. It notes that its material is informational and that the Canadian national standard cited there was withdrawn in 2017. [4]

## Decision boundary

Select `care-instruction-state` if the angle remains distinct from `material-availability-state`, `substitution-authorization-state`, `gauge-state`, `gauge-reality`, `test-protocol-state`, `material-trace`, `record-estimate-state`, and existing `care-context` continuity. The changed pain is **not** which yarn is available, whether a substitute fits, whether gauge passed, or whether a test was run. It is whether the care record preserves the treatment, temperature, method, warning, qualifier, symbol meaning, blocking or finishing instruction, source, and review status without turning a generic symbol into a product-specific guarantee.

The proposed proof surface is:

`CARE C-001 / DESIGN_ID / MATERIAL_OR_FIBER / CARE_STAGE / TREATMENT / METHOD / TEMPERATURE_OR_LEVEL / SYMBOL / SYMBOL_MEANING / WARNING_OR_PROHIBITION / BLOCKING_OR_FINISHING / SOURCE_OR_BASIS / REVIEWER / REVIEWED_AT / STATUS`

No current product-proof registry or approved capture verifies a Stitch & Scale care-instruction surface. All cards must be labeled `ILLUSTRATIVE — NOT PRODUCT UI`; fictional values must be labeled `EXAMPLE — NOT A PRODUCT CARE LABEL`.

## Audience pain and visual opportunity

A care symbol can look familiar while a temperature, bar, dot, cross, hand-wash qualifier, dry-flat instruction, or warning changes its meaning. A material record can name yarn but omit how it should be washed, dried, blocked, or finished. A generic symbol is not a product-specific care proof, and a care record does not replace physical testing, manufacturer guidance, technical editing, or human judgment.

The visual treatment begins with a fictional yarn card showing a familiar wash symbol. The camera reveals blank lanes for treatment, method, temperature, symbol meaning, warning, blocking or finishing, source/basis, reviewer, and status. A red `CARE CLAIM: NOT YET BOUNDED` tag replaces a reassuring `CARE OK` stamp; no real care label or product guarantee is shown.

The hook is: **“A care symbol is not the whole instruction.”** The emotional turn is from recognition to responsible specificity: name the treatment, qualifier, warning, and basis before calling care guidance complete. The final line is: **“Name the treatment, the limit, the warning, and the basis.”**

## Limits

Do not claim that Stitch & Scale recommends washing, drying, ironing, bleaching, drycleaning, blocking, or finishing methods; interprets symbols automatically; verifies fiber behavior; tests care outcomes; guarantees garment safety; provides legal compliance; replaces manufacturer or editor guidance; or establishes product-specific care labels. Do not use real care labels, manufacturer marks, private garments, customer records, copyrighted patterns, or current product UI. Do not invent temperatures, care outcomes, delivery, pricing, revenue, adoption, accuracy, credentials, testimonials, urgency, or capabilities.

## References

[1]: https://www.craftyarncouncil.com/standards/care-symbols "Craft Yarn Council — Care Symbols"  
[2]: https://www.craftyarncouncil.com/pitfalls.html "Craft Yarn Council — Designer Pitfalls"  
[3]: https://www.ftc.gov/legal-library/browse/rules/care-labeling-textile-wearing-apparel-certain-piece-goods-text "Federal Trade Commission — Care Labeling of Textile Wearing Apparel and Certain Piece Goods"  
[4]: https://ised-isde.canada.ca/site/office-consumer-affairs/en/product-safety-recalls-and-labelling/guide-apparel-and-textile-care-symbols "Government of Canada — Guide to Apparel and Textile Care Symbols"

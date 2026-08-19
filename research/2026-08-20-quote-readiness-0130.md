# Director Research — A Quote Is Not a Payment

research_id: RESEARCH-20260820-quote-readiness-0130
run_role: temporary-director
run_time: 2026-08-20T01:30:00+01:00
future_angle: quote-readiness-gate
status: research-only

## Fresh wide-research question

What must a designer distinguish between a quote, an invoice, a receipt, and a payment before presenting a business-ready workflow?

## External evidence

GOV.UK states that an invoice is not the same as a receipt: an invoice requests or records what the customer needs to pay, while a receipt acknowledges payment. The guidance also lists payment amount and due date among invoice information. [1] This supports an explicit state model in any future campaign: a quote is an estimate or offer, an invoice requests payment, and a receipt acknowledges payment. None should be silently presented as another.

## Current product reconciliation

The live Stitch & Scale surfaces already expose Receipt, Order Quote, and Refund Note modes in Receipt Lab, and the Publish surface exposes current project evidence and warnings. The current privacy-by-default brief remains the only complete unpublished Generator contract. No new brief is created during this firing.

## Future angle decision

Reserve `quote-readiness-gate` as a distinct future campaign. The dramatic engine is a designer moving from an informal “what would this cost?” conversation to an explicitly labeled Order Quote with visible inputs, assumptions, and state boundaries. This differs from `receipt-vs-invoice` by centering the pre-sale decision rather than the post-transaction record; it differs from `honest-price-model` by centering document state and readiness rather than modeled price mechanics. A future brief must not claim a quote is an order, invoice, payment, or customer acceptance.

## Reference

[1]: https://www.gov.uk/invoicing-and-taking-payment-from-customers "Invoicing and taking payment from customers — GOV.UK"

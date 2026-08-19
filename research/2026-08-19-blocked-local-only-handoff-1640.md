# Director Research and Blocker — Pricing Proof Recheck

research_id: RESEARCH-20260819-blocked-local-only-handoff-1640
run_role: temporary-director
run_time: 2026-08-19T16:40:00+01:00
parent_brief: PLAN-20260819-local-only-001
local_head_before_new_record: 6ac373e
remote_head: 05b36ab
status: blocked

## Fresh research question

Does the current live sample project expose a current, evidence-bearing pricing and cost surface that can support a materially distinct future “honest price” campaign, or are its displayed figures still only user-entered/modelled outputs?

## Direct product findings

The public `Classic Crew Neck Sweater` Pricing surface currently shows a Pattern Pricing Advisor with item type `Sweater / Pullover`, skill level `Intermediate`, market position `Standard band ($5–10)`, current price `$8.00`, hours worked `20`, hourly rate `$25`, and unchecked `Tech edited` and `Test knitted` controls. It displays a `$10.00` recommended price, a `$3.33` cost-plus floor labelled `time ÷ 150-sale lifetime`, and an “At or above floor” comparison against the current price. It also displays documented market bands, a nine-size adjustment, and per-platform net scenarios for Ravelry, Etsy, Ribblr, and Payhip.

This is a useful future proof surface for honest-price storytelling, but the current capture does not establish that the displayed inputs are verified real costs, that the market data is independently validated for the user’s product, that the pattern has been tech edited or test knitted, or that any projected sales scenario will occur. The future campaign must show inputs, model labels, and assumptions rather than present forecasts as outcomes.

Screenshots from this recheck:

- `/home/ubuntu/screenshots/stitch-and-scale-pro_2026-08-19_14-19-52_7193.webp`
- `/home/ubuntu/screenshots/stitch-and-scale-pro_2026-08-19_14-20-02_1163.webp`

## Reconciled decision

Reserve `honest-price-model` as a materially distinct future campaign angle. The existing privacy-by-default brief remains the only eligible unconsumed Director contract and is still unpublished remotely. Do not create a second Generator contract during this firing. If the honest-price angle is later activated, it must use a new capture with a claim ledger marking every figure as input, model output, assumption, or verified evidence.

## Precise blocker

The remote repository remains `05b36ab`; the local Director history contains the complete privacy-by-default brief plus eleven local research/blocker commits. The latest remote Generator run reported no eligible Director contract and no open `REMAKE_REQUIRED` order. No MP4 was generated.

## Exact next action

Publish the local Director commits to `plastic-dude/stitch-and-scale-vid` using the existing GitHub connector or a valid short-lived credential. Then generate exactly one MP4 from the existing privacy-by-default brief. After independent review, consider a separate `honest-price-model` brief using fresh proof and explicit model/assumption labels.

# Wide Research Findings — Pass 212 — `cross-reference-state`

**Research date:** 2026-08-20  
**Research question:** When a knitwear instruction points elsewhere, what must remain explicit for a reader to find the exact target, preserve size/section/row context, and return to the next action—especially on a mobile screen or after interruption?  
**Decision status:** Research complete; planning package remains **blocked** pending current product proof, rights, platform confirmation, and Director gates.

## Decision changed by research

Select **`cross-reference-state`** as the fresh angle. The pain is not that an instruction exists, that a reader is arriving cold, that a repeat group lacks a stop condition, that a number has lost semantic context, or that a decision lacks an accountable owner. The pain is that a cross-reference such as “see chart,” “work same as the left piece, reversing shaping,” or “rep from *” can point to an ambiguous target or omit the scope, version, size, row, and return cue needed to continue safely.

The research supports a bounded educational treatment: make the pointer, target, scope, and return point visible as separate records. It does **not** support a claim that Stitch & Scale currently resolves cross-references, parses pattern language, detects ambiguity, restores reader position, or guarantees instruction correctness.

## Evidence synthesis

| Source | Date/status | Evidence relevant to the question | Uncertainty or boundary |
|---|---|---|---|
| Craft Yarn Council, “How to Read a Knitting Pattern” | Accessed 2026-08-20; page date not stated | The guidance explains that abbreviations compress instructions; “maintain pattern as established” relies on an already established center; and “work same as left (or right) piece, reversing shaping” can be difficult because the reader must infer and reverse the earlier work. It also explains that asterisks, brackets, and parentheses encode repeat scope. [1] | This is reader education, not a universal editorial standard and not product proof. It does not establish that a particular tool can resolve or validate those references. |
| W3C, “Making Content Usable for People with Cognitive and Learning Disabilities” | Working Group Note, published 2021-04-29; current page accessed 2026-08-20 | W3C recommends clear headings, boundaries, and regions; says headings and breadcrumbs can help a person restore context after distraction; warns against relying on memory; and notes that mobile use in unfamiliar or noisy situations can split attention and add cognitive load. [2] | This is supplemental accessibility guidance beyond WCAG conformance. It is not a knitwear-pattern rule and must not be turned into a Stitch & Scale conformance claim. |
| W3C, WCAG 2.1 | Recommendation page updated/current version dated 2025-05-06; accessed 2026-08-20 | WCAG 2.1 covers web content on mobile devices and frames accessibility through perceivable, operable, understandable, and robust principles. It includes criteria and supporting material for text alternatives and prerecorded media captions. [3] | WCAG applicability to a future product or video is not established here. Do not claim WCAG conformance, universal accessibility, or user outcomes. |
| Meta Business Help, text overlays and safe zones for Stories and Reels ads | Accessed 2026-08-20; page served in Chinese locale | Meta defines a safe zone as the area where important elements are not cropped or covered by interface elements; for 9:16 Stories/Reels ads, key text, logos, and creative elements should remain away from top, bottom, and side edges. It also warns that taller screens can crop or letterbox a 9:16 creative. [4] | This is paid-ad guidance, not a universal organic Reels rule. Destination and ad/organic status remain unconfirmed. |
| TikTok Ads, “TikTok Auction In-Feed Ads” | Last updated June 2026; accessed 2026-08-20 | TikTok states that vertical 9:16 is recommended for in-feed ads, lists current file/dimension and duration guidance, says ad captions can display up to four lines, and states that safe-zone size depends on dimension, caption length, and additional formats; preview and live display may differ by device. [5] | This is in-feed advertising guidance, not proof of organic-post behavior. Use only as a planning warning until the destination is named. |
| YouTube Help, “Upload YouTube Shorts — Computer” | Current help page accessed 2026-08-20 | YouTube says a Short uploaded from a computer can be up to three minutes and use a square or vertical aspect ratio; it also warns that externally created Shorts must have approved rights for protected material. [6] | This does not settle captions, safe-area overlays, or every upload condition for the eventual destination. |

## Audience and craft pain

The Craft Yarn Council example makes the reader’s hidden work concrete: the pattern can compress instruction to save space while leaving the reader to identify the referent, infer what “same as” means, reverse shaping, remember which side was used, and return to the correct continuation. The problem is not merely poor typography. It is a navigation contract between a source instruction and a target instruction.

W3C’s cognitive guidance adds a useful non-product lens: interruption, noise, mobile use, memory demands, and lost context are common situational barriers as well as disability-related barriers. A pattern reader may therefore need visible section, size, row, version, scope, and return cues without the team claiming a diagnosis or a product accessibility result.

The treatment should not portray a real customer failure, named tester, private pattern, or copyrighted chart. Use original neutral cards and an invented reference sentence. Keep calculation, technical editing, physical print review, chart readability, schematic scale, and test knitting separate. David remains a developer whose late mother knitted; he must not be described as a knitter, knitwear designer, pattern designer, technical editor, or tester.

## Distinctness decision

| Nearby occupied territory | What it already asks | What `cross-reference-state` changes |
|---|---|---|
| `accountable-owner-state` | Who can accept, check, monitor, hand back, or reauthorize a conditional decision | Whether a reader can follow a pointer to the exact target and return to the next action; no ownership or role roster is claimed |
| `decision-conditions-state` | Which conditions constrain a disposition | Which source-to-target context must travel with a reference; no authorization or conditional decision is dramatized |
| `reader-handoff` | A reader’s first interpretation of size, ease, schematic, chart key, or instruction | The referential link after the reader has an instruction: target identity, target scope, target version, and return point |
| `repeat-scope` | Repeat membership, repeat count, stop, exception, and size branch | Cross-reference target and return path; repeat syntax is used only as a boundary example and not as the subject |
| `context-state` | Semantic attachment of a value to subject, location, purpose, method, size, ease, date, and source | Source instruction to target instruction navigation; no measurement-context card is reused |
| `comparison-basis` | Whether two records are comparable under explicit A/B fields, units, dates, methods, conditions, scope, and basis | No A/B comparison; the film follows one pointer to one exact target |

## Proposed proof surface

`REF X-001 / SOURCE_SECTION / SOURCE_SIZE_OR_SCOPE / SOURCE_ROW_OR_STEP / POINTER_TEXT / TARGET_SECTION / TARGET_VERSION / TARGET_SIZE_OR_SCOPE / TARGET_ROW_OR_STEP / ACTION_AT_TARGET / RETURN_POINT / EXCEPTION_OR_OPEN_GATE / REVIEW_RECORD`

This surface is illustrative only. No current product-proof registry or approved capture verifies that Stitch & Scale exposes, stores, parses, highlights, or validates these fields.

## Visual opportunity and dramatic engine seed

Show an original source card reading `WORK SAME AS LEFT PIECE — REVERSE SHAPING` beside two target cards that look similar. The pointer first lands without target section, size, version, or return point. The target is then bounded with `TARGET_SECTION`, `TARGET_VERSION`, `TARGET_SIZE_OR_SCOPE`, `TARGET_ROW_OR_STEP`, and `RETURN_POINT`; a deliberate interruption wipes the pointer’s context, and the unbounded card returns to `REFERENCE NEEDS REVIEW` rather than silently becoming a correct path.

The hook is: **“A pointer is not a path.”** The emotional turn is from relief at seeing a reference to calm recoverability: the reader can name the target and return point instead of guessing. The final line is: **“Name the target, the scope, and where the reader returns.”**

## Platform and production findings

Plan a 45-second 9:16 master only as a blocked assumption. Use one narrator family, caption-on and caption-free reviews, close inserts for one reference record at a time, and a caption safe zone that protects cards, hands, labels, numbers, and the final invitation. Meta and TikTok guidance shows that platform overlays and ad caption length can cover important elements or vary by device, while YouTube confirms that square or vertical Shorts can be up to three minutes and requires rights clearance for protected material. [4] [5] [6]

Do not use a real pattern excerpt, customer/tester record, copyrighted chart, private message, current UI screenshot, or unlicensed audio. No platform destination is confirmed, so the platform matrix must remain destination-pending. The exact film must not claim mobile accessibility, WCAG conformance, instruction correctness, parser capability, ambiguity detection, reader comprehension, accuracy, adoption, revenue, pricing, credentials, testimonials, urgency, or customer outcomes.

## Current-state reconciliation

The active branch is the Director planning branch. The latest completed local pass is `accountable-owner-state` at `20260820-040356`; the older but already tracked `comparison-basis` package at `20260820-050000` is occupied territory and is not regenerated or modified. The imported `false-completion` and `release-gate-roster` outputs remain blocked and their reserved filenames remain occupied. `reviews/`, `orders/`, and `comms/inbox/` are absent; no open CRITICAL or HIGH remake order is present in the current repository. No product-proof registry or approved capture was found. No media files are being generated or uploaded.

## References

[1]: https://www.craftyarncouncil.com/standards/how-to-read-knitting-pattern "Craft Yarn Council — How to Read a Knitting Pattern"  
[2]: https://www.w3.org/TR/coga-usable/ "W3C — Making Content Usable for People with Cognitive and Learning Disabilities"  
[3]: https://www.w3.org/TR/WCAG21/ "W3C — Web Content Accessibility Guidelines (WCAG) 2.1"  
[4]: https://www.facebook.com/business/help/980593475366490 "Meta Business Help — About text overlays and the safe zone for ads in Stories and Reels"  
[5]: https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads "TikTok Ads — TikTok Auction In-Feed Ads"  
[6]: https://support.google.com/youtube/answer/12779649?hl=en&co=GENIE.Platform%3DDesktop "YouTube Help — Upload YouTube Shorts"  

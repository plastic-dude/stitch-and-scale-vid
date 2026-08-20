# Wide Research Findings — Pass 216 — `selective-disclosure-state`

**Research date:** 2026-08-20  
**Research question:** When a craft or tester record contains more fields than each viewer needs, what must be explicit about purpose, audience, field exposure, redaction or pseudonymization, reuse, and review before the record is shown beyond its original workflow?

## Decision changed by research

Select **`selective-disclosure-state`** as the fresh angle. The changed pain is not simply collecting less data, obtaining consent, or deleting records. It is that **one record may need different fields for different purposes and viewers**, while a full-card export or screenshot can silently expose names, contact details, private tester comments, submission information, or unrelated business data beyond the stated purpose.

The concept must keep these questions separate: **What is the purpose? Who is the audience? Which fields are necessary for that audience? Which fields are hidden, redacted, or pseudonymized? Is the new use compatible with the original purpose? Who reviewed the exposure?** A selective view must not be presented as automatic privacy compliance, consent, erasure, or product functionality.

## Evidence synthesis

| Source | Date/status | Evidence relevant to the question | Uncertainty or boundary |
|---|---|---|---|
| ICO, “Purpose limitation” | Guidance updated 23 March 2026; accessed 2026-08-20 | The ICO says purposes should be clear from the start, documented, communicated, and limited to compatible reuse. It connects purpose specification with data minimization, accountability, and avoiding function creep. It says a compatibility assessment should consider the link between purposes, collection context, sensitivity, consequences, and safeguards such as encryption or pseudonymization. [1] | ICO guidance is under an evolving UK legal framework and is not legal advice for this project. Do not claim compliance, lawful basis, or legal sufficiency. |
| ICO, “Data minimisation” | Page says guidance is under review because of Data (Use and Access) Act changes; accessed 2026-08-20 | The ICO describes data as adequate, relevant, and limited to what is necessary for the specified purpose. It says the right amount depends on purpose and may differ by person or group, and that records should contain enough context to interpret an opinion correctly. [2] | Guidance under review; do not turn it into a product control claim or legal recommendation. |
| NIST Privacy Framework Core | Version 1.0, 2020; accessed 2026-08-20 | The framework includes privacy risk management across data processing and supports configurations for selective collection or disclosure of data elements. It frames privacy as risk management rather than a single approval badge. [3] | Voluntary framework, not a Stitch & Scale implementation, certification, or legal standard. |
| Craft Yarn Council, “Congratulations! You’ve Received the Go Ahead” | Official designer guidance accessed 2026-08-20; page date not stated | CYC submission guidance demonstrates that craft workflows can contain contact details, project numbers, yarn labels, instructions, measurements, invoices, and return-shipping information in distinct artifacts. [4] | Industry workflow example; it does not establish which fields a Stitch & Scale viewer should see or any current product privacy behavior. |
| Internal project continuity | Local records read 2026-08-20 | Existing `data-minimum`, consent, withdrawal, permission, retention, caption, and rights packages preserve separate boundaries. This pass must not collapse selective exposure into collection minimization, permission, erasure, or storage state. [5] | Internal operating contract, not product proof or legal advice. |

## Audience and workflow pain

A designer, editor, test knitter, accountant, publisher, or founder may need different evidence from the same project. A reviewer may need a finding and scope but not a person’s phone number. A manufacturer may need yarn and sample details but not private tester comments. A public-facing handoff may need a role label and disposition but not the underlying contact record. Reusing a full record for every audience creates exposure beyond purpose; showing too little can make the review unintelligible.

This gives the campaign a concrete visual: a fictional full evidence card slides toward three viewer windows—`TESTER REVIEW`, `EDITOR REVIEW`, and `PUBLIC HANDOFF`. The same source card contains more fields than any one window needs. Fields are masked or replaced with role labels in each view. The final status is `EXPOSURE REVIEW OPEN`, not `PRIVATE BY DEFAULT`, `CONSENTED`, or `COMPLIANT`.

## Distinctness decision

| Nearby occupied territory | What it already asks | What `selective-disclosure-state` changes |
|---|---|---|
| `data-minimum` | How much personal or project data should be collected or retained | Which fields from an existing record are exposed to a particular purpose and audience |
| `consent-state` / `permission-line` | Whether a person granted permission for a specified use | Whether the selected view contains only fields necessary for that audience and purpose; no consent claim is implied |
| `withdrawal-state` | What changes after permission is withdrawn | No withdrawal or erasure event; the focus is exposure mapping before or during a view or handoff |
| `retention-state` | How long a record remains held | No retention duration; the focus is field-level exposure for a named use |
| `disclosure-state` | What statement or disclosure is made | No public statement; the focus is the data elements revealed in a purpose-specific view |
| `substitution-authorization-state` | Fit, confirmation, disclosure, and review around an alternate yarn | No material choice; the focus is viewer-specific field exposure around craft records |
| `test-protocol-state` | Whether a test result is interpretable from question, method, conditions, and limits | No test protocol; a source record is filtered into audience-specific views |

## Proposed proof surface

`DISC X-001 / SOURCE_RECORD_ID / PURPOSE / AUDIENCE_OR_ROLE / FIELD_SET / NECESSITY_REASON / VISIBLE_FIELDS / HIDDEN_FIELDS / REDACTED_FIELDS / PSEUDONYM_OR_ROLE_LABEL / REUSE_COMPATIBILITY / EXPOSURE_REVIEWER / REVIEWED_AT / STATUS`

This surface is illustrative only. No current product-proof registry or approved capture verifies that Stitch & Scale exposes, persists, enforces, or validates these exact fields. Every prop card must say `ILLUSTRATIVE — NOT PRODUCT UI`; fictional fields must not contain real names, phone numbers, email addresses, tester comments, contracts, or customer records.

## Visual opportunity and dramatic engine seed

Open on a full fictional evidence card with contact, project, tester, material, and review fields. Three viewer windows appear. `TESTER REVIEW` receives scope and method; `EDITOR REVIEW` receives finding and pattern version; `PUBLIC HANDOFF` receives role, disposition, and next action. Contact details and private comments are hidden or replaced with `ROLE LABEL`. A reviewer card asks `PURPOSE? AUDIENCE? NECESSARY FIELDS?` and the final status holds at `EXPOSURE REVIEW OPEN`.

The hook is: **“The same record does not need to travel whole.”** The emotional turn is from convenient full-card sharing to responsible, purpose-specific exposure. The final line is: **“Name the purpose, the audience, and the fields that do not need to travel.”**

## Platform and production findings

Plan a 45-second 9:16 master only as a blocked assumption. Use one narrator family, caption-on and caption-free reviews, one viewer window per close insert, high contrast, and destination-specific safe areas protecting visible fields, redaction markers, role labels, hands, and the final line. No destination platform is confirmed; safe-zone, caption, and sharing rules must be checked after the destination is named.

The caption-free pass must remain intelligible without relying on captions to explain which fields are hidden. Captions must never cover faces, hands, proof cards, names, numbers, labels, controls, menus, or primary actions. Automatic captions are draft-only; human review is required. Audio must use one narrator family, restrained field-hide cues, no unlicensed music, and room-tone checks. Reject mixed voices, doubled words, overlaps, room-tone jumps, stale UI, and effects that conceal privacy-boundary language.

## Claims, rights, and product boundary

Do not claim that Stitch & Scale automatically minimizes data, selects fields, redacts, pseudonymizes, enforces purpose limitation, checks compatible reuse, controls audience access, guarantees privacy, establishes consent, erases data, or provides legal compliance. Do not use real contact details, tester comments, submission records, customer records, publisher contracts, personal identifiers, company logos, current product UI, or copyrighted patterns. Do not invent accuracy, adoption, customer outcomes, revenue, pricing, credentials, testimonials, urgency, or capabilities.

David remains a developer whose late mother knitted; he is not a knitter, knitwear designer, pattern designer, technical editor, or tester. Calculation, technical editing, physical print review, chart readability, schematic scale, and test knitting remain distinct human evidence gates.

## Current-state reconciliation

The active branch is the Director planning branch after published pass 215. The latest occupied angle is `test-protocol-state`; this pass is materially different because it maps purpose-specific field exposure from an existing record rather than documenting test protocol completeness, alternate-yarn authority, data collection minimums, consent, withdrawal, retention, or disclosure statements. The imported `false-completion` and `release-gate-roster` concepts remain blocked with occupied filenames. `reviews/`, `orders/`, and `comms/inbox/` are absent; no open CRITICAL or HIGH remake order was found at refresh. No product-proof registry or approved capture was found. No media is being generated or uploaded.

## References

[1]: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/purpose-limitation/ "ICO — Principle (b): Purpose limitation"  
[2]: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/data-minimisation/ "ICO — Principle (c): Data minimisation"  
[3]: https://www.nist.gov/document/nist-privacy-framework-version-1-core-pdf "NIST — Privacy Framework Core"  
[4]: https://www.craftyarncouncil.com/industry.html "Craft Yarn Council — Congratulations! You’ve Received the Go Ahead"  
[5]: https://github.com/plastic-dude/stitch-and-scale-vid "Stitch & Scale video operations repository and local workflow contracts"

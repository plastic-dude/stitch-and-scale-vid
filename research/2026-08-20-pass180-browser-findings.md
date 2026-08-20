# Pass 180 Browser / Source Findings — Refusal State

**Research question:** When a workflow refuses a request, what makes the refusal usable and trustworthy: explicit scope, reason, responsible owner, safe next action, review state, and disposition?

**Selected angle:** `refusal-state` — A refusal without a reason or safe next action is an ambiguous stop.

## NIST Privacy Framework

NIST describes the Privacy Framework as a voluntary tool to help organizations improve individual privacy through enterprise risk management. The pass-180 use is to motivate a fictional refusal card that states scope and reason; it does not claim that Stitch & Scale implements the Privacy Framework, manages privacy risk, or provides legal compliance.

Source: [NIST Privacy Framework](https://www.nist.gov/privacy-framework).

## NIST SP 800-53 Rev. 5

NIST SP 800-53 Rev. 5 covers security and privacy control families, including Access Control and PII Processing and Transparency. Its page also warns that mappings and crosswalks should not be treated as one-to-one equivalence and that scope and intended use matter. The pass-180 use is to maintain a boundary between a fictional refusal workflow and any claim of access enforcement, privacy control, or framework compliance.

Source: [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final).

## GOV.UK Design System error-message guidance

The GOV.UK guidance says an error message should explain what went wrong and how to fix it, and that permission or eligibility problems should be explained on a page that provides useful information about what to do next rather than being presented as an ordinary field error. It also emphasizes clear, specific, concise language, retaining the user's entered information, and associating messages with the relevant field. The pass-180 use is limited to caption and visual treatment; it does not claim Stitch & Scale has this component or follows GOV.UK patterns.

Source: [GOV.UK Design System — Error message](https://design-system.service.gov.uk/components/error-message/).

## Research decision

The research changes the concept from “access denied” to “a refusal should expose its scope, reason, responsible owner, safe next action, review state, and disposition.” The fictional proof surface is `REFUSAL F-001 / REQUEST / SCOPE / REASON / OWNER / NEXT_SAFE_ACTION / REVIEWED / STATUS / DISPOSITION`.

No current product capture or proof-registry record was supplied. No product claim may be made about access enforcement, privacy controls, eligibility decisions, error handling, permission messaging, safe alternatives, or compliance.

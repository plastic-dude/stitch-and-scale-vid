# Pass 203 Wide Research — Impact State

**Date:** 2026-08-20  
**Director role:** Planning only; no video generation or upload  
**Research question:** When a relevant change triggers review, how should the workflow distinguish the event itself from the downstream evidence, scope, and decision it may affect?

## Decision changed by research

Pass 202 named a review trigger and paused a prior decision. Pass 203 adds the impact boundary: a trigger is not an impact finding. The workflow should record what changed, which evidence or scope may be affected, what was actually observed, what remains uncertain, and who decides the next disposition. The fresh angle is `impact-assessment-state`, focused on separating a change event from its assessed consequences without claiming automated analysis.

The film will not claim that Stitch & Scale currently performs impact analysis, detects affected records, calculates consequences, or automatically updates a decision. It will use original neutral cards labeled `ILLUSTRATIVE — NOT PRODUCT UI`.

## Source findings

### 1. NIST security impact analysis — analyze the extent to which a change affected a state

NIST’s glossary defines security impact analysis as analysis by an official or qualified staff to determine the extent to which a change to a system has affected or may have affected its security state or posture. [1] This is a domain-specific definition, not a Stitch & Scale specification.

**Decision impact:** The visual record will separate `CHANGE_EVENT` from `AFFECTED_SURFACE`, `OBSERVED_RESULT`, and `IMPACT_STATUS`. It will explicitly leave the impact assessment pending rather than turning the trigger into a conclusion.

### 2. NIST Risk Management Framework — impact analysis sits within a repeatable risk process

NIST describes the Risk Management Framework as a comprehensive, flexible, repeatable, and measurable seven-step process for managing security and privacy risk. The current project page was updated July 24, 2026 and notes current framework publications and updates. [2]

**Decision impact:** The treatment will show a repeatable review packet with named fields and a human decision point, but will not claim NIST compliance, a Stitch & Scale implementation, measurable outcomes, or a product risk engine.

### 3. GOV.UK user-needs guidance — acceptance criteria and supporting evidence should be recorded

GOV.UK guidance says content should meet a valid user need, user needs should be written from the user’s perspective, and acceptance criteria can list what must be done for the need to be met. It also recommends recording the user need, acceptance criteria, supporting evidence, and rationale. [3]

**Decision impact:** The illustrative impact packet will include `INTENDED_TASK`, `ACCEPTANCE_CRITERIA`, `SUPPORTING_EVIDENCE`, and `DECISION_OWNER`, keeping observed result separate from what still needs evidence.

### 4. Craft Yarn Council — gauge and instructions require actual work and separate checks

Craft Yarn Council guidance describes gauge as a key element for a successful project and recommends making a gauge swatch using the specified yarn, needles, and pattern stitch. It advises reading the whole instruction section, doing what the pattern says, and having another person read the pattern aloud when needed. [4]

**Decision impact:** The package will preserve calculation, technical editing, physical print review, chart readability, schematic scale, and test knitting as separate human evidence gates. A change event or illustrative impact assessment cannot replace those checks.

## Audience and workflow relevance

The primary audience remains independent knitwear designers and pattern publishers coordinating calculations, technical editing, physical print review, chart readability, schematic scale, test knitting, samples, swatches, revisions, tester feedback, submissions, and intended users. The planning hypothesis is that teams can confuse “something changed” with “we know what it affected.” No current user study, incident report, product telemetry, or product-proof registry entry verifies this as a measured Stitch & Scale outcome.

David is a developer whose late mother knitted. He does not knit and must not be described as a knitter, knitwear designer, pattern designer, or technical editor. The film teaches evidence boundaries and does not claim personal craft practice.

## Platform, accessibility, and visual opportunity

The planned output remains a 9:16, 45-second mobile-first social explainer with destination platform unconfirmed. The visual sequence will use readable inserts for change event, affected surface, observed result, acceptance criteria, supporting evidence, owner, impact status, and disposition. Captions must not cover hands, cards, labels, numbers, logos, controls, menus, or primary actions. Caption-on and caption-free review remain required. Exact safe-area and current caption behavior are not verified until a destination is named.

The visual opportunity is a change card that forks into three neutral lanes: `AFFECTED_SURFACE`, `OBSERVED_RESULT`, and `IMPACT_STATUS`. One lane remains `PENDING` while the original trigger stays visible. The emotional turn is humility: a change deserves investigation, not an invented consequence.

## Product truth, rights, and uncertainty

No current product-proof registry verifies impact-assessment fields, affected-surface links, observed-result records, acceptance-criteria records, automatic analysis, or current labels. All cards are original props labeled `ILLUSTRATIVE — NOT PRODUCT UI`. No current UI, customer record, private material, copyrighted pattern, logo, testimonial, revenue, adoption, accuracy, capability, urgency, final pricing, or outcome may be introduced.

Rights for original cards, neutral materials, narrator, foley, and music-free sound remain unverified until a production inventory is approved. Destination platform remains unknown. These gaps independently block generation.

## Research limitations

NIST sources concern security and privacy risk management, not knitwear software or Stitch & Scale. GOV.UK guidance concerns content and service design, not product behavior. Craft Yarn Council guidance is industry guidance, not a current product contract or measured audience study. The concept is source-informed educational framing only.

## References

[1]: https://csrc.nist.gov/glossary/term/security_impact_analysis "NIST CSRC Glossary — Security impact analysis" (accessed 2026-08-20)  
[2]: https://csrc.nist.gov/projects/risk-management "NIST CSRC — Risk Management Framework" (accessed 2026-08-20)  
[3]: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/identify-user-needs/ "GOV.UK Publishing guidance — Identify user needs" (accessed 2026-08-20)  
[4]: https://www.craftyarncouncil.com/read_instructions.html "Craft Yarn Council — Reading Instructions & Other Basics" (accessed 2026-08-20)

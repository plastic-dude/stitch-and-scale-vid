# Pass 243 wide-research findings — `review-question-state`

**Research date:** 2026-08-20 09:30 WAT  
**Pass:** 243  
**Angle under consideration:** `review-question-state`  
**Researcher:** Manus AI, Director/Planner  
**Campaign assumption:** Founding-tester recruitment through the free demo and early-access cohort, because no active brief was present in the refreshed repository. The audience is independent knitwear designers and pattern publishers managing pattern instructions, charts, schematics, sizes, samples, technical editing, test knitting, accessibility review, and publication preparation. The proposed form is a 40–45 second organic 9:16 founder short for Instagram Reels, TikTok, and YouTube Shorts. Tone is quiet, precise, craft-respecting, local-first, and explicit about the question under review, subject, scope, evidence, response, and unresolved next step. No paid placement is assumed. This is a planning assumption, not a confirmed campaign brief.

## Fresh question

**What makes a craft review question concrete and answerable rather than a vague request for approval, and how should the record keep the question, subject, evidence, response, and open next step separate from an automated verdict?**

The question is distinct from pass 241 `inspection-scope-state`, which asks what exact subject, version, sample, conditions, question, finding, and outside-scope boundary were inspected. Pass 243 focuses on **the review question as the unit that makes a finding testable**: a specific prompt with a subject, scope, criterion, expected evidence, response, reviewer, and unresolved follow-up.

It is also distinct from pass 242 `observation-state`, which labels whether a statement was observed, transcribed, calculated, interpreted, or unresolved. A review question can request an observation, calculation, comparison, or human judgment; the evidence-state remains a separate field.

## Evidence gathered

### 1. CYC’s tester prompts are concrete checks, not blanket approval

The Craft Yarn Council’s current pattern-writing guidance gives testers concrete questions: are the directions clear and concise; do abbreviations, symbols, and charts line up and match; is the materials list comprehensive and the yarn amount correct; and are they satisfied with the finished appearance? It distinguishes recording notes, transcription, standards, technical editing, and testing. [1]

These prompts illustrate a useful record shape: `QUESTION`, `SUBJECT`, `SCOPE`, `EXPECTED_EVIDENCE`, `RESPONSE`, and `FOLLOW_UP`. “Is this pattern good?” is not equivalent to “Do the chart symbols and written instructions match for size M, rows 1–12?” A question can be answered `YES`, `NO`, `PARTIAL`, or `UNRESOLVED` only after the relevant evidence and human role are named.

### 2. Knitty separates technical editing, test knitting, and publication decisions

Knitty’s current June 17, 2026 guidance expects completed submissions and distinguishes the designer’s work from technical editing, optional test knitting, editorial selection, rights, and publication. It says technical editors may help solve math mistakes and improve fit, while test knitting is not required and does not necessarily influence selection. [2]

A technical-editing question about math is not the same as a test-knitting question about whether a maker can follow the instructions, and neither is a publication question. The record must keep question type, reviewer role, evidence, response, and next action separate. No product capability is inferred from this workflow boundary.

### 3. WCAG success criteria are testable statements, not blanket accessibility claims

W3C’s current WCAG 2.1 recommendation says success criteria are written as testable statements and are used for requirements and conformance testing. It also states that accessibility requires both automated testing and human evaluation and that even the highest conformance level cannot address every user need. [3]

WCAG-EM 2.0 requires evaluation scope definition, representative sample selection, evaluation, and findings reporting, and warns that a selected subset generally does not support a whole-product conformance claim. [4] This supports a review-question card such as `QUESTION: Can a viewer identify the chart key in this sample? / SUBJECT: CHART C-01 / SCOPE: SCREEN VIEW / EVIDENCE: TEXT ALTERNATIVE + HUMAN REVIEW / RESPONSE: UNRESOLVED` without claiming accessibility conformance or product automation.

### 4. Question quality is a visual opportunity

A vague `REVIEW?` card can split into concrete fields: `QUESTION`, `SUBJECT`, `SCOPE`, `EXPECTED EVIDENCE`, `RESPONSE`, `REVIEWER`, `NEXT CHECK`, and `LIMIT`. The audience sees that a review request is not an approval badge and that an unanswered question is not a defect or success. Use explicit text, not color alone. Captions should not cover the question, evidence, response, limit, hands, tables, numbers, logos, controls, menus, or primary actions.

## Uncertainty and limits

CYC, Knitty, and W3C document pattern-writing, testing, technical-editing, and accessibility-evaluation boundaries, not Stitch & Scale functionality. A concrete question can still be poorly worded, asked of the wrong subject, answered with incomplete evidence, or interpreted incorrectly. `RESPONSE: UNRESOLVED` does not mean the product detected a defect; it means the illustrative review question has no supplied answer.

No source supports claims of automatic question generation, question routing, reviewer assignment, evidence matching, response validation, defect detection, accessibility conformance, technical editing, chart readability, schematic scale, test-knit success, rights clearance, acceptance, publication, or user outcomes.

No source supports claims about revenue, adoption, accuracy, customer outcomes, final pricing, credentials, testimonials, urgency, or unverified product capabilities. David is a developer whose late mother knitted; he must not be presented as a knitter, knitwear designer, pattern designer, technical editor, tester, publisher, accountant, lawyer, or tax adviser.

## Decision changed by research

Research changed the concept from a generic “review request” into the narrower **review-question-state** angle. The film will replace a vague `REVIEW?` badge with `QUESTION`, `SUBJECT`, `SCOPE`, `EXPECTED EVIDENCE`, `RESPONSE`, `REVIEWER`, `NEXT CHECK`, and `LIMIT`. The final state is `QUESTION: SPECIFIC / RESPONSE: UNRESOLVED / HUMAN REVIEW REQUIRED`.

The selected angle is materially different from pass 241: it is not about what a reviewer inspected or what lay outside the inspection. It is about **the shape and answerability of the question that makes a review falsifiable and bounded**. It is also distinct from pass 242: it does not classify the evidence as observed, transcribed, calculated, interpreted, or unresolved; it defines the question that asks for that evidence. It does not reopen the imported `false-completion` or `release-gate-roster` reservations.

## Research references

[1]: https://www.craftyarncouncil.com/blog/ydkwydk-how-write-your-own-pattern "Craft Yarn Council — YDKWYDK: How to write your own pattern"
[2]: https://knitty.com/subguide.php "Knitty — Design Or Write For Knitty; updated June 17, 2026"
[3]: https://www.w3.org/TR/WCAG21/ "W3C — Web Content Accessibility Guidelines 2.1"
[4]: https://www.w3.org/TR/wcag-em-2/ "W3C — WCAG-EM 2.0 Evaluation Methodology"

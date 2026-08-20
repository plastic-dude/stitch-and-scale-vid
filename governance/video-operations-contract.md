# Stitch & Scale Video Operations Contract

**Contract version:** 2.0
**Effective date:** 2026-08-20
**Owner:** Director/Planner
**Repository:** `plastic-dude/stitch-and-scale-vid`
**Operating mode:** Planning-first; no video generation or upload is authorized by this contract.

## Purpose

This contract is the single source of truth for how the Stitch & Scale video space works. It replaces repeated, overlapping playbook paragraphs with a short workflow, explicit ownership, and one durable state record. Historical briefs, scripts, research notes, reviewer evidence, and handoffs remain immutable evidence; they do not become current truth merely because they exist.

The system should use the simplest workflow that reliably protects product truth, founder truth, rights, accessibility, production quality, and owner control. Agents may research, plan, validate, and report. They may not invent product proof, silently change claims, self-approve, generate video, upload video, or erase reviewer evidence.

## Authority order

When sources disagree, apply this order:

| Priority | Authority | Use |
|---:|---|---|
| 1 | Current owner decision or explicit user message | Final decision on scope, approval, rights, or irreversible action. |
| 2 | Current `governance/current-state.yml` and `governance/review-state.yml` | Current work status, owner, blocker, next action, and open-order state. |
| 3 | Current product-proof registry or approved product capture | UI labels, numbers, warnings, controls, and capability claims. |
| 4 | Current approved brief, script, manifest, and QA record | Production plan and acceptance evidence for one work item. |
| 5 | Research notes and brand references | Context, audience, creative direction, and bounded claims. |
| 6 | Historical artifacts and old handoffs | Lineage only; never current authorization by themselves. |

## Roles and ownership

| Role ID | Role | Owns | May do | Must not do |
|---|---|---|---|---|
| `director` | Director/Planner | Research question, angle selection, campaign assumption, brief/script/package, blocker, next action, and handoff | Read current state, research, plan, create planning artifacts, run deterministic validation, commit planning artifacts | Generate, upload, self-approve, erase reviewer evidence, or promote without gates |
| `researcher` | Research subroutine | Fresh evidence memo with source, date, evidence, uncertainty, and changed decision | Search and summarize credible sources within a bounded question | Approve concepts, assert product behavior, or change current state |
| `producer` | Producer/Implementer | Production preparation after explicit approval | Assemble approved assets or a requested production package | Change claims, proof state, rights, angle, or status without Director/Owner decision |
| `qa` | QA/Reviewer | Deterministic validation and reviewer verdict | Check schema, claims, rights, captions, audio, platform, filename, and acceptance evidence | Rewrite creative intent, bypass blockers, self-approve, or delete failed evidence |
| `owner` | Product owner/Approver | Product proof, rights, human approval, and irreversible publication decisions | Supply evidence, approve or reject gates, decide disputed scope | Delegate owner sign-off implicitly to an agent |

The Director remains the single workflow owner. Researcher, Producer, and QA are bounded capabilities, not peer authorities with independent queues. If a specialist is unavailable, the Director records `blocked` rather than inventing a substitute approval.

## Work-item state machine

```text
INTAKE
  → RESEARCHED
  → CONCEPT_BLOCKED
  → PACKAGE_READY
  → QA_REVIEW
  → OWNER_APPROVAL
  → GENERATION_ELIGIBLE
  → GENERATED_REVIEW
  → PUBLISH_ELIGIBLE
  → PUBLISHED

Any state → BLOCKED
BLOCKED → INTAKE only after the recorded blocker is resolved and the Director reopens the item.
```

`CONCEPT_BLOCKED` is the normal state when the idea is creatively complete but current product proof, rights, or other evidence is missing. `BLOCKED` is a stop state for any unresolved failure. A blocked item must carry exactly one primary reason code and exactly one next action. No agent may skip a state, create a competing current state, or treat an old `approved-for-generation` label as current without revalidation.

## Canonical handoff schema

Every current work item has one YAML record under `governance/work-items/` with these fields:

```yaml
schema_version: "2.0"
work_item_id: "..."
angle_slug: "..."
state: "CONCEPT_BLOCKED"
owners: ["director"]
source_of_truth: "governance/current-state.yml"
objective: "..."
audience: "..."
format: "..."
current_artifacts: []
proof:
  product_proof_present: false
  rights_cleared: false
  captions_reviewed: false
  audio_reviewed: false
  platform_reviewed: false
  acceptance_complete: false
blocker:
  code: "MISSING_PRODUCT_PROOF"
  reason: "..."
  next_action: "..."
  owner: "owner"
media:
  generated: false
  uploaded: false
  reserved_filename: "..."
last_transition:
  at: "..."
  by: "director"
```

The state record is short. Detailed creative material stays in the linked brief, script, research, platform, ledger, manifest, and QA files. Consumers should read the current pointer first and open historical material only when needed.

## Run protocol

Every Director firing performs the following sequence:

1. Read `governance/current-state.yml`, `governance/review-state.yml`, the compact contract, latest relevant references, and the current work item.
2. Acknowledge any open `CRITICAL` or `HIGH` reviewer/remake order before new creative work. Preserve the original evidence and record the order ID in the current state.
3. Research one fresh question. Store sources, dates, evidence, uncertainty, and the changed decision.
4. Choose one materially distinct angle or explicitly continue the current blocked item. Inspect the angle ledger and imported continuity first.
5. Create or revise the smallest complete planning package required by the work item’s brief tier.
6. Run deterministic checks. If any required gate is missing, write `CONCEPT_BLOCKED` or `BLOCKED`, one reason code, and one next action.
7. Commit only planning artifacts. Do not generate or upload video.
8. Update the current state and durable handoff. Do not create a second schedule or a competing outbox authority.

## Approval gates

A work item may enter `GENERATION_ELIGIBLE` only when objective, audience, script, current product proof, claim ledger, approved assets, rights/consent, narrator/voice plan, caption-on review, caption-free review, audio review, platform profile, reserved filename, acceptance checks, and owner approval are all present. A paper prop, generated text, research citation, or plausible UI is not product proof.

The current user instruction for this operating repair keeps the video space in planning-only mode. Therefore no item may enter `GENERATION_ELIGIBLE`, and no video may be generated or uploaded, until the owner explicitly changes scope.

## Truth and production safeguards

David is a developer whose late mother knitted. He does not knit and must not be described as a knitter, knitwear designer, pattern designer, technical editor, or test knitter. Never invent revenue, adoption, accuracy, customer outcomes, final pricing, credentials, testimonials, urgency, or capabilities. Technical editing, physical print review, chart readability, schematic scale, localization review, and test knitting remain distinct human evidence gates.

Captions may not cover faces, hands, proof, tables, numbers, logos, buttons, menus, or primary actions. Every package declares one narrator family or an explicit speaker map. Caption-on and caption-free review are separate checks. Reject mixed voices, doubled words, overlaps, room-tone jumps, stale UI, unsupported claims, unclear rights, duplicate filenames, and reviewer orders that have not been acknowledged.

## Imported continuity

`false-completion` and `release-gate-roster` remain blocked and their reserved filenames remain occupied. Do not regenerate, rename, overwrite, or approve either concept from historical artifacts or generic evidence. `release-gate-roster` may be preferred only when a current product-proof registry or approved capture verifies the roster surface. Generic human-gate proof does not silently authorize it.

## Schedule rule

There is one Director schedule for this task, preserving the current conversation. It must remain `runAsNewTask=false`, recurring every 420 seconds, full-auto, max agent mode, and timezone `Africa/Lagos`. No downstream agent may create a second recurring schedule. The Generator is manual and approval-gated; it has no autonomous recurring schedule under this contract.

## Completion definition

The operating repair is complete when the canonical contract, role registry, current-state pointer, review-state record, compact Director prompt, manual Generator prompt, validator, and durable repair handoff are committed and the existing schedule is confirmed with the required same-chat settings. Historical production artifacts must remain intact, and the repository must contain no generated media.

# Stitch & Scale Video Operations Inventory

**Inventory date:** 2026-08-20
**Repository:** `plastic-dude/stitch-and-scale-vid`
**Branch:** `director/publication-readiness-second-shift-20260819`
**Purpose:** Baseline for repairing the video-creation operating setup without generating or uploading video.

## Current state

The repository is a planning repository, not a rendered-video repository. The working tree was inspected at the current branch state and contains **zero MP4, MOV, or WEBM files**. The latest visible planning chain includes pass 263, `recalculation-trigger-state`, and the in-progress pass-264 package, `outsider-position-state`. The latest pass-264 package is blocked and its media is not authorized.

The repository contains a large historical communication stream and many per-pass artifacts. Durable handoffs are stored under `comms/outbox/`, manifests under `manifests/`, research under `research/`, scripts under `scripts/`, briefs under `briefs/`, platform matrices under `platforms/`, and continuity records under `ledgers/`. The angle ledger has 275 rows after the pass-264 reservation.

## Coordination observations

| Area | Observed state | Operational consequence |
|---|---|---|
| Authority | The Director/Planner contract is repeated in several prompt paragraphs with overlapping versions of the same rule. | Agents can receive the same instruction multiple times with different emphasis and may spend context resolving repetition rather than executing. |
| Roles | The repository clearly defines a Director/Planner and a Generator contract, but no compact, canonical role registry or single handoff state machine was found in the inspected top-level files. | Agents can wait for “the script” or “approval” without a shared definition of who creates, reviews, or advances each artifact. |
| Handoffs | Outbox messages are durable, but the latest handoff uses a detailed custom shape while recent successful handoffs use a more compact `media_status`/`upload_status` convention. | Consumers may need to understand several schemas and can miss the authoritative fields. |
| Blocking | Current briefs are blocked because product proof, rights, caption, audio, and acceptance evidence are missing. | This is truthful, but the blocker is repeated across many artifacts without one compact queue of next actions. |
| Review state | `reviews/`, `orders/`, `orders/remake/`, and `orders/acknowledged/` are absent. | Absence is not the same as an explicit “no open orders” record; agents must infer state from missing directories. |
| Continuity | Imported `false-completion` and `release-gate-roster` are protected by a continuity ledger and reserved filenames. | The protection is necessary, but the rules are repeated across prompts, research, audits, manifests, and handoffs. |
| Scheduling | The one existing recurring task has UID `HlLWATF66Y8K479N37HY1S`, interval 420 seconds, `runAsNewTask: false`, `runMode: full_auto`, timezone `Africa/Lagos`, but current status is **pause** rather than active. | The desired same-chat loop is not currently running. Re-enabling it should be done only after the repair contract is safely published or with an explicitly minimized detail prompt. |
| Communications | The outbox contains many director messages, including out-of-sequence numeric suffixes in historical filenames. | Filename order is not a safe authority mechanism; consumers need a manifest or current-state pointer. |
| Media safety | No media files exist. | The planning-only boundary is currently intact. |

## Non-negotiable truth and production constraints

The founder boundary remains: David is a developer whose late mother knitted; he does not knit and must not be described as a knitter, knitwear designer, pattern designer, technical editor, or test knitter. Product proof is not available for the current outsider-position concept. Generated text is not UI truth. Captions must not cover proof, hands, faces, tables, numbers, logos, buttons, menus, or primary actions. Technical editing, physical print review, chart readability, schematic scale, localization review, and test knitting remain separate human evidence gates.

The imported blocked concepts `false-completion` and `release-gate-roster` remain occupied and must not be regenerated, renamed, overwritten, or approved from generic evidence. There are no open reviewer/remake directories in the current checkout, but the absence must be converted into an explicit review-state record in the repaired model.

## Initial repair hypothesis

The setup should move from a document-heavy, repeated-prompt model to a **single operating contract plus a small state machine**. The minimum roles should be Director/Planner, Producer/Implementer, QA/Reviewer, and Owner/Approver. Each work item should have one current state, one owner, one next action, one blocker, one proof requirement, and one canonical handoff. Historical artifacts remain immutable; consumers should read the current pointer rather than scan every outbox message.

The repair must retain the planning-only safety boundary, imported continuity protections, deterministic validation, truthful claims, rights/caption/audio gates, and same-chat schedule. It should remove redundant prompt prose, eliminate schema drift between handoffs, make “no open orders” explicit, and prevent downstream agents from waiting for a script by giving them a machine-readable work-item state and next action.

# Stitch & Scale Video Operations Repair Report

**Date:** 2026-08-20
**Repository:** `plastic-dude/stitch-and-scale-vid`
**Branch:** `director/publication-readiness-second-shift-20260819`
**Published commit:** `df3af1d71abb2610640eaed9296b765c05b948a6`
**Scope:** Operating-model repair only. No video was generated or uploaded.

## Executive conclusion

The previous setup was safe in intention but inefficient in coordination. It repeated the same playbook across prompts, allowed schema drift between handoffs, made agents infer review state from missing directories, and left downstream roles without one compact current-state record. The repair preserves the safety gates while replacing the control plane with a **Director-owned workflow, four bounded roles, one state machine, one current pointer, one explicit review-state record, and one canonical handoff schema**.

This direction is supported by current agent-engineering guidance. Anthropic recommends starting with the simplest solution, using predefined workflows and programmatic gates when the path is known, and adding agentic complexity only when it improves outcomes [1]. Anthropic’s context guidance treats context as a finite resource and recommends high-signal prompts, minimal-overlap tools, just-in-time retrieval, and structured notes [2]. OpenAI recommends maximizing a single agent before adding agents, using clear run exit conditions, layered guardrails, and human intervention for high-risk actions [3]. Microsoft’s handoff guidance distinguishes decentralized handoff from agent-as-tools and emphasizes stable identities and explicit approval/checkpoint behavior [4].

## What changed

| Area | Before | After |
|---|---|---|
| Workflow authority | Director and Generator contracts carried overlapping assumptions. | `director` is the single workflow owner; other roles are bounded capabilities. |
| Context | Agents were encouraged to read many historical artifacts and repeated playbook text. | Agents read the compact contract, current pointer, review state, and linked artifacts on demand. |
| Handoffs | Multiple durable message shapes and numeric suffixes could be mistaken for current authority. | One canonical state schema with `state`, `blocker`, `next_action`, proof gates, media flags, and artifact links. |
| Roles | Research, production, QA, and approval boundaries were distributed across prose. | Stable roles: Director, Researcher, Producer, QA, and Owner. |
| Review state | `reviews/` and order directories were absent, so agents inferred “no orders.” | `governance/review-state.yml` explicitly records `NO_OPEN_REVIEWER_OR_REMAKE_ORDERS`. |
| Generator | Prompt described a fresh isolated recurring Generator loop. | Generator is manual and approval-gated; no autonomous recurring Generator schedule. |
| Schedule | Existing task was paused. | Existing task was re-enabled in place with the same conversation, 420-second interval, full-auto, max mode, and Africa/Lagos timezone. |
| Safety | Safety rules were repeated across several prompts. | Safety rules are centralized in `governance/video-operations-contract.md` and referenced by prompts. |

## New operating model

The canonical state machine is:

```text
INTAKE → RESEARCHED → CONCEPT_BLOCKED → PACKAGE_READY → QA_REVIEW
       → OWNER_APPROVAL → GENERATION_ELIGIBLE → GENERATED_REVIEW
       → PUBLISH_ELIGIBLE → PUBLISHED

Any state → BLOCKED
```

`CONCEPT_BLOCKED` is the normal truthful state when a concept is creatively complete but product proof, rights, or production evidence is absent. `BLOCKED` is a stop state for any unresolved failure. Every blocked item carries one primary reason code and one next action. No agent may skip a state, create a competing current state, self-approve, or convert historical evidence into current authorization.

The Director remains the workflow owner. Research returns a bounded evidence memo. Producer acts only after explicit owner approval and `GENERATION_ELIGIBLE`. QA validates but does not rewrite creative intent or approve its own work. The Owner controls product proof, rights, human approval, and irreversible publication.

## Durable control files

| File | Purpose |
|---|---|
| `governance/video-operations-contract.md` | Canonical operating contract, authority order, roles, state machine, gates, truth rules, and schedule rule. |
| `governance/agent-registry.yml` | Stable role IDs, ownership, allowed handoffs, forbidden edges, and global limits. |
| `governance/current-state.yml` | One current work item, blocker, next action, media state, continuity state, and schedule state. |
| `governance/review-state.yml` | Explicit open-review/remake state and priority rule. |
| `governance/work-items/SS-PLAN-20260820-OUTSIDER-POSITION-STATE-V001.yml` | Canonical pass-264 work-item record. |
| `prompts/director-planner-loop-7m.md` | Compact Director execution prompt. |
| `prompts/video-generator-loop-15m.md` | Manual, approval-gated Generator contract. |
| `comms/outbox/MSG-20260820-113649-operations-repair-001.yml` | Durable repair handoff and schedule action. |

## Current work item and blocker

The current work item is `outsider-position-state`, state `CONCEPT_BLOCKED`, with blocker code `MISSING_EXACT_PRODUCT_PROOF`. The owner must supply one current, versioned, approved, non-private proof-registry record or capture for the exact outsider-position or community-review surface, including role, knowledge limit, reviewer relationship, ask, ownership/consent treatment, status, privacy, rights, and destination. The Director must then rerun claim, asset, rights, caption, audio, platform, filename, and acceptance validation.

The imported `false-completion` and `release-gate-roster` concepts remain blocked, their filenames remain occupied, and neither was regenerated, renamed, overwritten, or approved. The repository contains zero MP4, MOV, or WEBM files.

## Schedule result

The existing schedule was updated rather than duplicated and verified as follows:

| Setting | Verified value |
|---|---|
| Task UID | `HlLWATF66Y8K479N37HY1S` |
| Status | `active` |
| Interval | 420 seconds / 7 minutes |
| Same conversation | `runAsNewTask=false` |
| Run mode | `full_auto` |
| Agent task mode | `max` |
| Timezone | `Africa/Lagos` |
| Additional Generator schedule | None created |

## Validation and publication

The deterministic repair validator passed with `required_files=10`, `roles=5`, `state_machine=present`, and `media_files=0`. The cached Git diff passed whitespace validation. The branch is clean after publication, and local and remote HEAD both equal `df3af1d71abb2610640eaed9296b765c05b948a6`.

The repair was pushed to the existing Director branch. It was not merged. The next Director firing should read the canonical governance files first, inspect explicit review state, research one fresh question, and continue from the current pointer rather than scanning the historical outbox.

## References

[1]: https://www.anthropic.com/engineering/building-effective-agents "Anthropic — Building effective agents"
[2]: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents "Anthropic — Effective context engineering for AI agents"
[3]: https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/ "OpenAI — A practical guide to building agents"
[4]: https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/handoff "Microsoft Agent Framework — Handoff orchestration"

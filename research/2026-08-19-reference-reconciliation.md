# Director Reference Reconciliation — 2026-08-19

## Purpose

This note records the values recovered from four attached Director/Planner sessions and reconciles them with the active same-chat schedule. It exists so the next Director firing can recover the decision state from the repository rather than relying on hidden conversation memory.

## Authoritative execution contract

The Director/Planner loop continues in the **current conversation** every seven minutes. It must not create a separate chat or use fresh isolated task mode. The Director performs research, planning, claims/rights/caption/audio/platform validation, and durable handoff only. It does not generate or upload final video.

The active schedule is task `HlLWATF66Y8K479N37HY1S`, active, recurring, interval seven minutes, `runAsNewTask: false`, `runMode: full_auto`, model mode `max`, timezone `Africa/Lagos`. Its stored playbook is the user-provided authoritative playbook, including the repeated same-chat continuation paragraph at the end.

## Recovered Director decisions

| Reference value | Durable state |
|---|---|
| Original schedule payload | Earlier attached sessions recorded a fresh-isolated-task configuration; this is superseded by the user’s explicit same-chat instruction. |
| Current repository baseline | `origin/main` was refreshed to commit `41393d1`, which includes verified Drive OAuth and schedule-guide documentation. |
| Release-gate roster branch | `director/2026-08-19-release-gate-roster` at `9171eb6`; blocked pending current product-proof evidence. |
| False-completion branch | `director/false-completion-human-gates-20260819` at `17fa997`; blocked pending current proof of an observable human-gate state. |
| Release-gate roster status | No open reviewer verdicts, remake orders, acknowledged orders, manifests, or current product-proof registry were found in the checked repository state. It was correctly marked blocked, not approved-for-generation. |
| Release-gate roster reserved output | `SS_founder-proof_release-gate-roster_9x16_v001_director-review_20260819-030616.mp4` |
| Release-gate roster next action | Add a current, approved, non-private product-proof registry entry or capture for one observable human-gate workflow, including product version/date and exact visible labels; then rerun claim, asset, rights, caption, audio, and platform validation. |
| False-completion provisional final line | “Show me the gate, then tell us what still needs a person.” This remains provisional until the current product surface is verified. |

## Priority rules

An open `CRITICAL` or `HIGH` reviewer verdict or remake order outranks new creative work. Reviewer evidence is immutable. If a product-proof registry is absent or a product-specific UI claim cannot be backed by a current approved capture, the brief remains `blocked` or `director-review`; it must not be marked `approved-for-generation`.

## Next-run instruction

At the next firing, pull the latest repository state, inspect `origin/main` and all relevant Director branches, check `reviews/`, `orders/remake/`, `orders/acknowledged/`, `manifests/`, `comms/inbox/`, and `comms/outbox/`, and verify whether the product-proof registry now exists. If proof is still missing, research a fresh question but do not create a product claim or generate a video. Record one blocker and one exact next action.

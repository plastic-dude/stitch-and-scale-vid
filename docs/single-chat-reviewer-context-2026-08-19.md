# Single-Chat Reviewer Context Consolidation

**Date:** 2026-08-19

## Purpose

The user requires all Stitch & Scale production and review coordination to remain in one conversation. The historical sessions listed below were separate or isolated task contexts and must not be treated as independent active workflows. Their useful requirements are consolidated here as context for the current Video Reviewer chat only.

## Referenced sessions

| ID | Historical title | Role in this chat |
|---|---|---|
| `A8xXnhKbw8w7zMtodQWoWr` | Automate Video Production and Archiving Every 15 Minutes | Generator contract and archive boundaries; reviewer reads these requirements but does not generate |
| `VA2q86GKxGYzkGsiHTRTez` | Video Reviewer Playbook: Key Steps and Guidelines | Primary reviewer workflow and threshold rules |
| `RoJLvNFS3EmE3qtV46AwAe` | Automate Video Production Execution Every 15 Minutes | Historical generator execution context |
| `MR5NzzrByREVQ8v6JnUAuw` | Scheduled Video Production Workflow with GitHub and Google Drive | Historical repository/archive scheduling context |
| `HQaA7B3u4Py9oQC9t9yPPg` | Automate Video Production Every 15 Minutes with GitHub and Google Drive | Historical credential and archive context |
| `W9PgEx54WP8q5nhjKpTxiJ` | Video Reviewer Playbook: Key Processes and Quality Guidelines | Duplicate reviewer guidance; reconciled into the current playbook |
| `F8Ktrce9zKSdJndgF7wqMC` | Automate Video Production Every 15 Minutes with GitHub Credentials | Historical runtime credential handling |
| `corYmpfr8cJbjoqWmadeAh` | Automate Isolated Video Production Every 15 Minutes | Historical isolated-run behavior; explicitly superseded by single-chat requirement |
| `kksidBZPFsQVT9zzGJuxya` | Video Reviewer Playbook: Key Guidelines and Procedures | Duplicate reviewer guidance; reconciled into the current playbook |
| `JhSumQzTATvU7S22XZVnft` | Automate Video Production Runs Every 15 Minutes | Historical production cadence context |
| `vYATwJ375SsaI2LpkY2lZH` | VIDEO GENERATOR | Historical generator parent context |

## Reconciled operating contract

The **Video Reviewer** owns one bounded review at a time. It reads the current conversation, current repository state, Drive archive, manifests, briefs, scripts, claim ledgers, platform profiles, caption maps, audio plans, rights records, prior verdicts, and open remake orders. It performs fresh research on every run, watches the entire candidate video, scores all seven weighted dimensions, applies the 65 percent threshold and hard-fail rules, and writes an immutable scorecard, blocker, or remake order.

The **Video Generator** requirements remain context only. The Generator must work from one approved brief or one acknowledged Reviewer remake order, preserve version history, use the exact filename contract, verify claims and UI, honor platform/caption/audio/rights requirements, archive full-resolution MP4s in Drive rather than Git, and produce exactly one video or one blocked/rejected result per bounded production run. The Reviewer must not generate, edit, render, upload, publish, or self-approve a video.

The **repository** is the durable communication board. Scorecards belong in `reviews/`; open correction orders belong in `orders/remake/`; Generator acknowledgements belong in `orders/acknowledged/`; manifests belong in `manifests/`; and communication events belong in `comms/outbox/`. Prior evidence and versions are immutable and must not be deleted or overwritten.

The **Drive archive** is the location for full-resolution video assets. Git stores only manifests, checksums, research, transcripts/captions, QA reports, scorecards, orders, and communication records. Missing Drive access is a blocker, not a reason to place video in Git.

The **single-chat rule** supersedes the historical isolated-task behavior. No scheduled run may use a fresh isolated task, child task, fork, separate chat, or new conversation. The current chat is the only coordination channel. Every review, Generator acknowledgement, remake order, blocker, and next action must be stated here and mirrored durably in the repository.

## Corrective action taken

The published reviewer playbook was rewritten at `prompts/video-reviewer-loop-hourly.md` to enforce reviewer-only scope, current-chat continuity, no child tasks, no isolated runs, no separate Generator handoff, one bounded review per firing, and the reconciled requirements above. The hourly schedule must be updated to use this playbook without fresh-task execution.

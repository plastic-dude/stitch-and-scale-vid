# Stitch & Scale Video Operations

This public repository is the **creative operating system and audit trail** for Stitch & Scale promotional video production. It stores research, angle decisions, scripts, Director briefs, shot lists, prompt packs, caption maps, audio plans, manifests, QA reports, and small review references.

> Full-resolution videos are stored outside Git. GitHub stores the decision record; the external media archive stores the media.

## Purpose

The video team exists to recruit founding testers for Stitch & Scale through honest, cinematic, multi-angle stories about the real pains of independent knitwear designers. The Director/Planner researches and plans. The Video Generator produces one video per run. Reviewers verify the result before publication.

## Repository map

| Path | Purpose |
|---|---|
| `prompts/` | Self-contained loop prompts for Main Worker, Reviewer, Crawler, Director/Planner, and Video Generator |
| `briefs/` | Complete production briefs ready for generation or review |
| `scripts/` | Approved narration scripts and versioned dialogue cues |
| `research/` | Fresh research notes, source URLs, dates, evidence, and changed decisions |
| `ledgers/` | Angle ledger, claim ledger, continuity ledger, and asset ledger |
| `manifests/` | One metadata record per external video |
| `qa/` | Evidence-backed review verdicts and rejection notes |
| `production-lessons/` | Test-video findings and prevention rules |
| `references/` | Brand, archive, and production references used by the team |
| `templates/` | Reusable brief, script, shot, caption, and manifest templates |
| `proxies/` | Optional small review proxies only; never commit masters or raw generations |

## Agent cadence

The intended schedules are a 7-minute repeated Director/Planner run and a 15-minute repeated Video Generator run. Main Worker, Reviewer, and Crawler operate on 15-minute repeated runs. Every firing must research a fresh question and leave a durable report. The Video Generator creates one video per firing and then stops. Each schedule must preserve the configured single-chat continuity and must read the published remote repository state before acting.

## Publication is a hard gate

The Video Generator sees `origin/main`, not a Director’s local worktree. A local commit, bundle, attachment, or chat message is not published. Every Director firing that changes a Generator-relevant artifact must fetch, safely merge newer remote evidence, push, fetch again, verify local `HEAD` equals `origin/main`, read the exact remote paths back, and write a publication receipt. If any step fails, the state is `publication-blocked`; the Director must stop creating new campaign ideas and restore remote visibility. After two consecutive Generator runs report no eligible contract while a local package is known to exist, the Generator writes one `PUBLICATION_ESCALATION_REQUIRED` record instead of repeating ordinary starvation blockers. See `references/publication-control.md`.

## Media boundary

Use the configured external archive, currently planned as the private Google Drive folder `Stitch & Scale Video Archive`. Keep production folders private until approval. Public-by-link access, if desired, is limited to approved/published exports and is viewer-only. A public Drive URL is not an upload credential.

Never commit OAuth client JSON, client secrets, refresh tokens, API tokens, full-resolution MP4s, raw voice files, private tester data, or unlicensed media. Store the external file ID, URL, checksum, versions, and status in the manifest.

## Filename contract

Reserve a unique name before generation:

```text
SS_<campaign>_<angle>_<format>_<version>_<status>_<YYYYMMDD-HHMMSS>.mp4
```

Example:

```text
SS_founder-receipt_stale-number_9x16_v001_director-review_20260819-143000.mp4
```

Never overwrite a prior generation. Increment the version and preserve the previous manifest.

## Workflow states

`research-needed` means the evidence base is stale. `director-review` means the concept or video needs review. `approved-for-generation` means the brief is complete. `director-review` after generation means the file exists but is not public. `approved` means a reviewer has verified it. `published` means the approved export has been deliberately distributed. `blocked` and `rejected` require an evidence-backed reason.

## Brand anchor

David is a developer whose late mother knitted; he does not knit. The product voice is first-person, quiet, craft-focused, honest, and specific. The current job is to recruit founding testers, not to claim proven revenue or invented credentials. Read the brand reference before writing public copy.

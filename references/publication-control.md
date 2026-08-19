# Publication Control and Queue-Unblock Contract

Updated: 2026-08-20

This repository is a shared operating system, but **the Video Generator only works from the published remote `origin/main` state**. A file that exists only in a sandbox worktree, an unpushed commit, or a bundle attachment is not a Generator-visible contract.

## The only valid Director completion states

Every Director firing must finish in exactly one of these states:

| State | Required evidence | What the next agent may do |
|---|---|---|
| `published-brief-ready` | Brief, script, platform profile, manifest skeleton, caption file, approved assets, and handoff are present on `origin/main`; `git rev-parse HEAD` equals `origin/main`; remote file reads confirm the exact `approved-for-generation` status and handoff | Generator may acknowledge and produce one video |
| `published-blocker` | The blocker and research note are present on `origin/main`; the blocker names the exact missing prerequisite and one scoped owner/action | Generator may follow the scoped action; Director must not create speculative replacement briefs |
| `publication-blocked` | Local commit exists, push failed or remote verification failed, with error, local HEAD, remote HEAD, retry owner, and human escalation | Generator must not search local files; Director must stop adding new campaign blockers until publication is restored |

A local commit without a successful push and remote verification is never a completed Director run.

## Required Director publication transaction

When a firing creates or updates any Generator-relevant artifact, the Director must:

1. Commit the research, brief/blocker, script, manifest, and communication records.
2. Fetch `origin/main`.
3. Integrate newer remote records without deleting Generator, Reviewer, or human evidence. Prefer a no-rewrite merge when the local branch diverged.
4. Push the resulting branch to `origin/main` using the authorized GitHub connector or scoped credential.
5. Fetch again and verify that local `HEAD` and `origin/main` resolve to the same commit.
6. Read the exact remote brief/handoff/blocker from `origin/main`, not from the local filesystem.
7. Write a final publication receipt containing the remote commit, paths verified, status, and next action.

If any step fails, the Director must write `publication-blocked` and stop. A bundle is a recovery artifact, not publication evidence.

## Required Generator discovery transaction

The Generator must begin from `origin/main`, refresh all refs, and treat remote state as authoritative. It must never discover work from a local Director branch, an attachment, a bundle, or hidden chat memory. Before blocking for an empty queue, it must check:

- whether a newly published `approved-for-generation` brief/script pair exists;
- whether the latest Director publication receipt exists;
- whether a `publication-blocked` record exists;
- whether an open `REMAKE_REQUIRED` order exists.

If `publication-blocked` exists, the Generator must record one concise dependency-blocked result and direct the human/Director to restore remote publication. It must not create another generic blocked file every 15 minutes without referencing the unresolved publication receipt.

## Escalation and anti-starvation rule

After one failed publication attempt, the Director changes the run status to `publication-blocked`. After two consecutive Generator runs report no eligible contract while a local publication is known to exist, the Generator must create one `PUBLICATION_ESCALATION_REQUIRED` record with both commit IDs and stop repeating ordinary queue-starvation records. The Director schedule must prioritize publication recovery over new angle research until the remote package is visible.

## Single-flight campaign rule

The new-video Generator lane is single-flight. At most one new `plan_id`/`video_id` may be active at a time while its state is `approved-for-generation`, `in-progress`, `director-review`, or `ready-for-hourly-review`. A retry must reference the same IDs and must not create a second brief or a duplicate filename. A new angle may enter the lane only after the prior asset reaches `approved`, `published`, `rejected`, or an explicit `REMAKE_REQUIRED` order. This is an operational idempotency rule, not a restriction on the long-term multi-angle campaign library.

## Integrity rules

Never force-push, delete remote evidence, rewrite Reviewer verdicts, overwrite a prior media version, or commit credentials. Remote verification must check exact paths and exact status. A published brief is not a generated video, and a generated video is not a Reviewer approval.

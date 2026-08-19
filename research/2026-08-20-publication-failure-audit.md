# Publication Failure Audit and Safeguard Design

research_id: RESEARCH-20260820-publication-failure-audit
run_role: temporary-director-and-governance-hardening
run_time: 2026-08-20T02:30:00+01:00
status: implementation-basis

## Root cause

The Director correctly created and committed the privacy-by-default package, but treated a local commit and recovery bundle as if they were publication. The Director loop had no mandatory push-and-remote-read verification. The Generator correctly read `origin/main`, found no eligible new brief, and repeatedly wrote ordinary blocked records. There was no cross-agent `publication-blocked` state, no escalation after repeated empty-queue runs, and no schedule-level instruction to pause new creative planning while a known local package was unpublished.

A second operational issue was branch divergence. The remote Generator had continued committing blocked-run evidence while the Director accumulated local commits. The first push was rejected as non-fast-forward. GitHub’s official guidance says this rejection protects remote history and should be resolved by fetching and merging the remote changes before pushing again. [1] The successful recovery used exactly that safe merge-and-push route; force-push is not an acceptable remedy because it could remove evidence.

## Safeguard decision

The workflow is being changed from `commit-and-report` to `commit → fetch → merge safely → push → fetch → exact remote read → publication receipt`. A bundle remains a recovery artifact only. The Director must not start another angle research cycle when a `publication-blocked` record exists; it must restore remote visibility first. The Generator must detect a publication blocker and escalate after two consecutive empty-queue runs rather than producing unreferenced repetitive blockers.

GitHub’s branch-protection guidance supports preserving remote history, disabling force pushes by default, and using controlled merge requirements where appropriate. [2] The repository workflow therefore forbids force-push and destructive deletion and records both local and remote commit IDs in every publication receipt.

## Evidence paths

- `references/publication-control.md`
- `prompts/director-planner-loop-7m.md`
- `prompts/video-generator-loop-15m.md`
- `README.md`
- `docs/stitch-scale-completion-instructions.md`
- `comms/outbox/MSG-20260819T131500-temporary-director-003.yml`
- `briefs/PLAN-20260819-local-only-001.md`
- `manifests/SS_ownership-receipt_privacy-by-default_9x16_v001_approved-for-generation_20260819-131500.yml`

## References

[1]: https://docs.github.com/en/get-started/using-git/dealing-with-non-fast-forward-errors "Dealing with non-fast-forward errors — GitHub Docs"
[2]: https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches "About protected branches — GitHub Docs"

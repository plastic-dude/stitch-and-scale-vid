# Publication Hardening Record

hardening_id: HARDENING-20260820-PUBLICATION
owner: temporary-director
status: implemented-pending-remote-verification

## Failure corrected

The Director accumulated 34 local commits while the Generator read `origin/main`. Local commits and bundles were reported as if they were published. The Generator therefore produced repeated empty-queue blockers even though a complete privacy-by-default brief existed locally. A later push was rejected as non-fast-forward because the remote Generator had continued committing its own evidence. The safe recovery was to fetch, merge remote evidence without rewriting it, push, fetch again, and verify exact remote paths.

## Controls now required

| Control | Acceptance test |
|---|---|
| Remote authority | Generator prompt says `origin/main` is authoritative and excludes local branches, bundles, attachments, and hidden memory. |
| Director publication transaction | Director prompt requires commit, fetch, safe merge, push, fetch, `HEAD == origin/main`, and exact remote read-back. |
| Fail-closed state | A failed push or verification creates `publication-blocked`; Director stops creating new angles. |
| Queue escalation | After two empty Generator runs while a known local package exists, Generator writes one `PUBLICATION_ESCALATION_REQUIRED` record instead of repetitive ordinary blockers. |
| Schedule continuity | Completion instructions use `--run-as-new-task=false` unless isolation is explicitly requested. |
| Destructive safety | Prompts and publication control forbid force-push, remote deletion, evidence rewriting, and overwrite of media versions. |
| Documentation alignment | README, Director prompt, Generator prompt, publication-control reference, and completion instructions carry the same rules. |

## Verification still required

The changes are complete locally only until the hardening commit is pushed and read back from `origin/main`. The final receipt must record the published commit, the exact remote paths, and the remote status of `PLAN-20260819-local-only-001` and `MSG-20260819T131500-temporary-director-003.yml`.

## Operational rule

> A local commit is work in progress. A verified remote read-back is publication. Nothing else unblocks the Generator.

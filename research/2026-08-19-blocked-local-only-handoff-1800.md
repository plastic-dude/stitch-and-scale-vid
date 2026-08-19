# Director Research and Blocker — Browser Quota and Eviction

research_id: RESEARCH-20260819-blocked-local-only-handoff-1800
run_role: temporary-director
run_time: 2026-08-19T18:00:00+01:00
parent_brief: PLAN-20260819-local-only-001
local_head_before_new_record: 26f402a
remote_head: 1e62c79
status: blocked

## Fresh research question

What persistence caveat must appear in the privacy-by-default campaign when browser storage is best-effort and subject to quota, policy, and eviction rules?

## First-party research synthesis

MDN explains that browser-stored data is usually best-effort by default: it persists while the origin remains below quota, the device has enough storage, and the user has not deleted the data. Browsers can evict best-effort data under storage pressure, and private browsing usually clears stored data when the private session ends.[1] Web.dev explains that persistent storage can reduce eviction risk, but it is permission/heuristic dependent and does not create cloud backup; the user can still remove local data.[2]

## Reconciled production decision

The active brief should say that the project is saved locally in the browser and is not synced to an account by default, while retaining the explicit deletion/backup warning. It must not say “never lost,” “permanent,” “always available,” or “secure because it is local.” A future product capture could improve the story by showing an export or backup action, but that is not current proof for this brief. No new campaign is created because the active privacy contract remains unpublished.

## Precise blocker

The remote repository remains `1e62c79`; the local Director history contains the complete brief plus fifteen local research/blocker commits. The latest remote Generator scan reports no eligible newer Director contract and no open `REMAKE_REQUIRED` order. No MP4 was generated or self-approved.

## Exact next action

Publish the local Director commits to `plastic-dude/stitch-and-scale-vid` using the existing GitHub connector or a valid short-lived credential. Then generate exactly one privacy-by-default MP4 with narrow storage language and the existing deletion warning, upload it to Drive `01-director-review`, and stop for independent Reviewer scoring.

## References

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria "Storage quotas and eviction criteria — MDN Web Docs"
[2]: https://web.dev/articles/persistent-storage "Persistent storage — web.dev"

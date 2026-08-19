# Director Research and Publication Blocker — Local Ownership Is Not Automatic Recovery

research_id: RESEARCH-20260819-blocked-local-only-handoff-2200
run_role: temporary-director
run_time: 2026-08-19T22:00:00+01:00
parent_brief: PLAN-20260819-local-only-001
angle_under_consideration: export-before-loss
local_head_before_new_record: 587c4b1
remote_head_at_run_start: 31605480b7e5149e71ed827f07d80859c99daf22
status: blocked

## Fresh wide-research question

What does “local-only” technically guarantee, and what must a truthful ownership film avoid implying about recovery or permanence?

## Research evidence

MDN’s Web Storage documentation states that `localStorage` is partitioned by origin and normally persists when the browser is closed and reopened, while private-browsing storage is deleted when the private session ends. MDN also notes that browser policy, blocked cookies, and security conditions can prevent persistence. [1] [2]

web.dev explains that browser storage may be evicted under storage pressure unless persistent storage is granted, and that persistent-storage permission is browser-dependent. It also recommends requesting persistence only when the user is performing an action that clearly involves critical data. [3] The web.dev storage guidance further describes browser quota and eviction behavior and recommends selecting the appropriate storage mechanism, handling quota errors, and treating default storage as potentially evictable unless persistence is requested. [4]

## Reconciliation against current product truth

The live Stitch & Scale surface visibly presents `Local only` and `Saved`, and its local-storage notice warns that clearing browser data deletes local projects. The active privacy-by-default brief already states the essential caveat: local ownership is not magic, recovery is not automatic, and the warning must remain visible. The new research strengthens—not changes—that decision.

A distinct future campaign angle is `export-before-loss`: the user sees that ownership without a recovery habit is incomplete, then is shown a real, currently supported export or save path only if the product surface proves that path. This angle differs from `privacy-by-default` by changing the pain from surrendering work to failing to preserve a local-owned record, the hook from “whose server?” to “where is your second copy?”, the visual metaphor from a project held on-device to a receipt or export leaving the browser, the proof surface from the Local only warning to a verified export/save workflow, the emotional turn from ownership disclosure to responsible recovery behavior, and the final line from keeping work on the machine to making a deliberate copy. It is reserved as research territory only; no new brief is created while the current brief is unpublished.

## Single precise blocker

The remote repository still does not contain the complete local Director history or the active `PLAN-20260819-local-only-001` package. The latest remote Generator record at `20260819T170008` reports `BLOCKED_NO_ELIGIBLE_DIRECTOR_CONTRACT`, with no open `REMAKE_REQUIRED` order and no unprocessed exact approved-for-generation brief/script pair. The privacy-by-default brief remains complete and correct locally and must not be replaced by another brief.

## Required next action

Publish the local Director commits to `plastic-dude/stitch-and-scale-vid` using the GitHub connector or a valid short-lived Git-dude credential. On the next Generator firing, acknowledge `MSG-20260819T131500-temporary-director-003.yml`, research current product/platform facts again, generate exactly one privacy-by-default MP4 using the reserved filename, upload it to Drive `01-director-review`, write the manifest/checksum/QA/caption records, and stop for independent Video Reviewer scoring. Do not regenerate DIR-001, do not use `small-test.mp4`, do not generate a recovery/export claim from this research, and do not self-approve any MP4.

## References

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API "Web Storage API — MDN Web Docs"
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage "Window: localStorage property — MDN Web Docs"
[3]: https://web.dev/articles/persistent-storage "Persistent storage — web.dev"
[4]: https://web.dev/articles/storage-for-the-web "Storage for the web — web.dev"

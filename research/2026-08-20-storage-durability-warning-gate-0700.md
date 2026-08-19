# Director Research — Storage Durability and Warning Precision

research_id: RESEARCH-20260820-storage-durability-warning-gate-0700
run_role: temporary-director
run_time: 2026-08-20T07:00:00+01:00
status: research-only
future_angle: export-before-loss

## Fresh research question

What can a truthful privacy-by-default video say about browser-local storage without implying automatic backup or guaranteed recovery?

## External evidence

MDN states that browser data is best-effort by default and can be evicted under storage pressure, browser-wide limits, or browser-specific policies; persistent storage requires a separate request and may or may not be granted. [1] MDN also notes that private-browsing data is usually deleted when the private session ends. [2] The WHATWG Web Storage standard distinguishes localStorage, which spans multiple windows and lasts beyond the current session, from sessionStorage, and also allows storage requests to fail because of policy or quota. [3]

## Current product and Reviewer reconciliation

The V002 Generator QA record states that the unresolved Reviewer risk is that the spoken local-storage warning cue is stronger than the warning text visible in the approved capture set. The generated video did not fabricate a warning overlay, and the final V002 preserved the approved product captures, safe-zone captions, one narrator, no music, and full manifest/checksum/Drive evidence. The correct action is independent Reviewer assessment—not Director self-approval and not an automatic remake.

A truthful script should distinguish local browser storage from automatic backup, cloud sync, or guaranteed recovery. The active privacy-by-default contract remains the only active Generator lane and has reached `video-ready-for-review`; no second brief is created.

## Decision

Create one precise blocker: hold new campaign briefing until the Video Reviewer issues approval or an explicit `REMAKE_REQUIRED` order for V002. Reserve `export-before-loss` as a future distinct angle only after the active review reaches a terminal state.

## References

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria "Storage quotas and eviction criteria — MDN"
[2]: https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist "StorageManager: persist() — MDN"
[3]: https://html.spec.whatwg.org/multipage/webstorage.html "Web storage — WHATWG HTML Living Standard"

# Director Research and Blocker — Local-Only Handoff Publication

research_id: RESEARCH-20260819-local-only-handoff-1410
run_role: temporary-director
run_time: 2026-08-19T14:10:00+01:00
parent_brief: PLAN-20260819-local-only-001
parent_commit: bdccbad
remote_head_seen: c6b0a6a
status: blocked

## Fresh research question

How should a local-first product story describe browser persistence and deletion risk without turning a real storage caveat into an unsupported privacy or durability promise?

## Evidence

MDN’s current `Window.localStorage` guidance states that localStorage data is saved across browser sessions for a specific origin and remains available until explicitly removed or cleared. It identifies manual browser-data clearing, storage APIs, extensions, private browsing behavior, and blocked persistence as relevant caveats.[1]

MDN’s client-side storage guide distinguishes local browser storage from server-side storage and describes local storage as a way to persist data across reloads and browser restarts, while noting that browser storage has limits that vary by browser and user settings.[2]

The W3C Web Storage Recommendation defines local storage areas per origin and states that user agents should expire local-storage data only for security reasons or when the user requests deletion, while also allowing policy decisions that prevent persistence.[3]

## Reconciliation with Stitch & Scale truth

The live Stitch & Scale capture already committed in `assets/live-local-first-home-20260819.webp` visibly shows `Local only`, `Saved`, local-first/offline/no-account positioning, and a Local Storage Notice warning that clearing browser data deletes local projects. The current privacy-by-default brief correctly avoids claiming permanent safety, automatic recovery, cloud sync, or universal persistence. The new research reinforces the existing claim ledger and does not authorize any additional durability or privacy claim.

The nearest prior campaign remains `spreadsheet-11pm`; the local-only brief remains materially distinct by pain, hook, visual metaphor, proof surface, emotional turn, and final line. No open `REMAKE_REQUIRED` order exists. The latest remote Generator run at 14:06 still saw no newer approved-for-generation pair because the Director commit had not reached the remote repository.

## Precise blocker

The complete brief, script, platform profile, manifest, captions, research, proof assets, angle reservation, and Generator handoff exist in local commit `bdccbad`, but the remote repository remains at `c6b0a6a`. The Director handoff is therefore not discoverable by the scheduled Video Generator, which is correctly continuing to write `BLOCKED_NO_ELIGIBLE_DIRECTOR_CONTRACT` records. This is a publication/authentication blocker, not a creative or product-proof blocker.

## One exact next action

Push commit `bdccbad` to `plastic-dude/stitch-and-scale-vid` using the existing GitHub connector or a valid short-lived GitHub credential. After the push, the Video Generator must acknowledge `MSG-20260819T131500-temporary-director-003.yml` and generate exactly one MP4 from `PLAN-20260819-local-only-001`; the Director must not create a second brief, regenerate DIR-001, or use `small-test.mp4` while this handoff is unpublished.

## References

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage "Window: localStorage property — MDN Web Docs"
[2]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage "Client-side storage — MDN Web Docs"
[3]: https://www.w3.org/TR/2016/REC-webstorage-20160419/ "Web Storage — W3C Recommendation"

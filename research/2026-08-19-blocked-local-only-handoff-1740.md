# Director Research and Blocker — Local Storage Is Not a Security Guarantee

research_id: RESEARCH-20260819-blocked-local-only-handoff-1740
run_role: temporary-director
run_time: 2026-08-19T17:40:00+01:00
parent_brief: PLAN-20260819-local-only-001
local_head_before_new_record: 80e9ebf
remote_head: 1e62c79
status: blocked

## Fresh research question

What security caveats must constrain the phrase `Local only` so the privacy-by-default video does not imply that browser storage is a complete security boundary?

## First-party research synthesis

OWASP’s browser-storage testing guidance says localStorage is persistent browser key-value storage, can be viewed and edited through browser developer tools, has browser-dependent capacity, and should be assessed for sensitive-data exposure and client-side injection risks. OWASP’s remediation guidance recommends keeping sensitive data server-side in a secured manner rather than relying on client-side storage.[1]

MDN states that localStorage persists across browser sessions but can be unavailable when browser policy blocks persistence, and private/incognito storage is cleared when the private session ends.[2] These sources support a narrow privacy claim—data is kept in the origin’s browser storage rather than synced to an account or cloud—but not claims of encryption, tamper resistance, malware resistance, cross-device backup, permanence, or protection from anyone with access to the device/browser context.

## Reconciled decision

The existing privacy-by-default brief should retain the visible `Local only`/`Saved` proof and the on-screen warning that clearing browser data deletes patterns. The Generator must not add security language such as “private,” “secure,” “protected,” or “only you can see it” unless separately proven. The narration should distinguish storage location from security guarantees and should show backup/export behavior where relevant. No new brief is created because this contract remains unpublished and the queue still has no eligible remote contract.

## Precise blocker

The remote repository remains `1e62c79`; the local Director history contains the active brief plus fourteen local research/blocker commits. The latest remote Generator scan reports no eligible newer Director-approved contract and no open `REMAKE_REQUIRED` order. No MP4 was generated.

## Exact next action

Publish the local Director commits to `plastic-dude/stitch-and-scale-vid` using the existing GitHub connector or valid short-lived credential. Then generate exactly one privacy-by-default MP4 with the narrow storage-location language and existing warning, upload it to Drive `01-director-review`, and stop for independent Reviewer scoring.

## References

[1]: https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/11-Client_Side_Testing/12-Testing_Browser_Storage "Testing Browser Storage — OWASP Web Security Testing Guide"
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage "Window: localStorage property — MDN Web Docs"

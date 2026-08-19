# Director Research and Blocker — User-Controlled Export Is Not Automatic Backup

research_id: RESEARCH-20260819-blocked-local-only-handoff-1840
run_role: temporary-director
run_time: 2026-08-19T18:40:00+01:00
parent_brief: PLAN-20260819-local-only-001
local_head_before_new_record: 55c9d0e
remote_head: 99c49db
status: blocked

## Fresh research question

What exactly does a browser-controlled PDF export prove, and what must a future export-before-loss campaign avoid implying about the user’s files?

## First-party research synthesis

MDN describes `window.print()` as opening the print dialog for the current document; it does not itself prove that a PDF was saved.[1] MDN’s File System API guidance says access to user files and directories is gated by user-selected pickers and explicit permission, while the origin-private file system is not visible to the user like a regular local file.[2] Chrome’s File System Access guidance likewise requires secure context and user interaction for file pickers and says write permission may be requested before an app can write to a chosen file.[3]

## Reconciled production decision

The live PDF Export surface supports the narrow claim “you can manually export a portable PDF using the browser’s print/save flow.” It does not support “the app automatically backs up your project,” “your file is safely stored on disk,” “the app can restore it later,” or “export works identically in every browser.” A future `export-before-loss` video should show the user action and the resulting file-selection/save step, and should mark the artifact as a manual export, not a synchronized backup.

The active privacy-by-default brief remains the only unconsumed Director contract and is still unpublished remotely, so no second brief is created in this firing.

## Precise blocker

The remote repository remains `99c49db`; the local Director history contains the complete brief plus seventeen local research/blocker commits. The latest Generator run reports no eligible new exact approved-for-generation pair and no open `REMAKE_REQUIRED` order. No MP4 was generated or self-approved.

## Exact next action

Publish the local Director commits to `plastic-dude/stitch-and-scale-vid` using the existing GitHub connector or a valid short-lived credential. Then generate exactly one privacy-by-default MP4 from the existing brief, upload it to Drive `01-director-review`, and stop for independent Reviewer scoring. Consider `export-before-loss` later only with a fresh capture and the manual-export boundary.

## References

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Window/print "Window: print() method — MDN Web Docs"
[2]: https://developer.mozilla.org/en-US/docs/Web/API/File_System_API "File System API — MDN Web Docs"
[3]: https://developer.chrome.com/docs/capabilities/web-apis/file-system-access "The File System Access API: simplifying access to local files — Chrome Developers"

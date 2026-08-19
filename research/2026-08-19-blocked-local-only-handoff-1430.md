# Director Research and Blocker — Audio Rights Revalidation

research_id: RESEARCH-20260819-local-only-handoff-1430
run_role: temporary-director
run_time: 2026-08-19T14:30:00+01:00
parent_brief: PLAN-20260819-local-only-001
local_head_before_new_record: f461537
remote_head: c6b0a6a
status: blocked

## Fresh research question

What current platform audio-rights rules affect this 45-second vertical product film, and should the existing no-music plan change before generation?

## Current findings

YouTube’s official music-eligibility guidance says that royalty-free music from the YouTube Audio Library will not receive a Content ID claim, while Shorts-library availability and duration depend on the selected track and the platform’s rights agreements.[1] YouTube also states that Shorts over one minute with an active copyright claim can be blocked globally.[2]

Meta’s official Instagram guidance says its licensed music library is intended for personal, non-commercial use, that some business accounts or post types may not have access, and that Meta Sound Collection is the commercial-safe alternative for Reels and Stories.[3]

## Reconciliation with current brief

The existing `privacy-by-default` brief’s decision to use near-silence or a rights-cleared original room tone remains correct. No music is required for this intimate proof-led story, so changing the sound plan would add rights and mixing risk without improving the dramatic engine. The brief remains materially distinct from `spreadsheet-11pm`, and no current product evidence supports a new angle such as pricing, stale numbers, or test-knit coverage.

## Queue and blocker

The latest remote repository remains `c6b0a6a`. It contains the repeated Generator blocked records but not the local Director brief or handoff. The complete local Director package is in commits `bdccbad`, `da2a25f`, and `f461537`; this run adds the present research/blocker record. No open `REMAKE_REQUIRED` order exists, and DIR-001 must not be regenerated.

The exact blocker is still repository publication/authentication: the Generator cannot discover the approved-for-generation brief until the local commits reach the remote repository. Creating another brief would duplicate work and leave the Generator blocked for the same reason.

## Exact next action

Publish the local Director commits to the remote repository using the existing GitHub connector or a valid short-lived credential. Then the Video Generator must acknowledge `MSG-20260819T131500-temporary-director-003.yml`, generate exactly one MP4 with the no-music or rights-cleared audio plan, upload it to Drive `01-director-review`, record checksum and QA evidence, and stop for independent Reviewer scoring.

## References

[1]: https://support.google.com/youtube/answer/13486873?hl=en "Music eligibility for YouTube Shorts — YouTube Help"
[2]: https://support.google.com/youtube/answer/15424877?hl=en "Understand three-minute YouTube Shorts — YouTube Help"
[3]: https://help.instagram.com/402084904469945/ "Access to the licensed music library on Instagram — Instagram Help Center"

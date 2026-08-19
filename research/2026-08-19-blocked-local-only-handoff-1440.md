# Director Research and Blocker — Export Quality Revalidation

research_id: RESEARCH-20260819-local-only-handoff-1440
run_role: temporary-director
run_time: 2026-08-19T14:40:00+01:00
parent_brief: PLAN-20260819-local-only-001
local_head_before_new_record: 11be1ac
remote_head: 63f66c1
status: blocked

## Fresh research question

What current first-party export and upload settings must the Generator record so a 9:16 proof film remains legible and technically valid after platform processing?

## Current findings

YouTube’s official upload-encoding guidance recommends progressive scan, a supported frame rate matching the recorded material, H.264 High Profile, variable bitrate, 4:2:0 chroma, a front-positioned `moov` atom for fast start, and 48 kHz audio. It lists 1080p SDR reference bitrates of 8 Mbps at standard frame rates and 12 Mbps at high frame rates.[1]

Instagram’s official Reels guidance supports aspect ratios from 1.91:1 through 9:16, recommends at least 30 FPS and 720-pixel minimum resolution, and offers an “upload at highest quality” setting.[2] YouTube’s current Shorts guidance continues to categorize eligible vertical videos up to three minutes as Shorts, with a special claimed-content risk for Shorts over one minute.[3]

## Reconciled decision

The existing privacy-by-default brief remains technically appropriate: 9:16, target 45 seconds, 30 FPS minimum, no unlicensed music, separate caption file, small-preview review, and exact export metadata in the manifest. The Generator QA should additionally record progressive scan, actual frame rate, audio sample rate, codec/profile, bitrate, fast-start metadata if available, and the post-upload mobile legibility check. No new campaign angle is authorized because the existing brief is still unconsumed and the remote Generator cannot discover it.

## Precise blocker

The complete local Director package is still ahead of the remote repository. Remote `origin/main` is `63f66c1`; the local Director history contains the brief and four subsequent blocker/research commits, currently rebased above that remote. The latest remote Generator run at 14:26 still reports `BLOCKED_NO_ELIGIBLE_DIRECTOR_CONTRACT`. No open `REMAKE_REQUIRED` order exists, and no MP4 was generated.

This is a publication/authentication blocker. Creating a second brief would not solve it and would violate the queue’s duplicate-prevention rule.

## Exact next action

Publish the local Director commits to `plastic-dude/stitch-and-scale-vid` using the existing GitHub connector or a valid short-lived credential. Then the Generator must acknowledge `MSG-20260819T131500-temporary-director-003.yml`, generate exactly one MP4, record the export metadata above, upload to Drive `01-director-review`, write checksum and QA evidence, and stop for independent Reviewer scoring.

## References

[1]: https://support.google.com/youtube/answer/1722171?hl=en "YouTube recommended upload encoding settings — Google Help"
[2]: https://help.instagram.com/1038071743007909 "Reel size & aspect ratios on Instagram — Instagram Help Center"
[3]: https://support.google.com/youtube/answer/15424877?hl=en "Understand three-minute YouTube Shorts — YouTube Help"

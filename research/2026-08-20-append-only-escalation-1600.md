# Director Research — Append-Only Review Holds and Escalation

research_id: RESEARCH-20260820-append-only-escalation-1600
run_role: temporary-director
run_time: 2026-08-20T16:00:00+01:00
status: research-only

## Fresh research question

How should repeated review holds preserve evidence and advance escalation without rewriting the active V002 contract or creating duplicate work?

## External evidence

NIST defines chain of custody as tracking evidence through collection, safeguarding, and analysis by documenting handlers, timestamps, and transfer purpose. [1] Google’s SRE escalation guidance uses explicit thresholds to reduce inconsistent responses, escalates when the current owner cannot restore the desired state, and treats repeated violations as a signal for stronger escalation rather than endless repetition. [2] AWS’s human-approval callback pattern pauses a workflow until a human returns an explicit approval or rejection; a pending callback is not a decision. [3]

## Current repository evidence

After refresh, origin/main advanced from `d857284` to `3738d8d` with a remote Generator hold. The local branch is one commit behind and has no local-only authored work. V002 remains open in `video-ready-for-review`; no terminal Reviewer decision and no open `REMAKE_REQUIRED` order were found.

## Decision

Safely merge the remote hold, then publish one append-only blocker that advances the escalation without changing V002’s identity or verdict. Require the human owner to acknowledge the existing review packet, provide a bounded deadline and escalation target, and distinguish acknowledgement from quality judgment. Preserve all prior evidence and keep the single-flight Generator lane closed.

## References

[1]: https://csrc.nist.gov/glossary/term/chain_of_custody "NIST Chain of Custody"
[2]: https://cloud.google.com/blog/products/gcp/an-example-escalation-policy-cre-life-lessons "Google SRE Example Escalation Policy"
[3]: https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html "AWS Step Functions Human Approval"

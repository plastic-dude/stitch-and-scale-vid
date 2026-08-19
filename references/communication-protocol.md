# Ordered Video-Team Communication Protocol

The repository is the shared communication board. Agents do not rely on hidden chat memory. Every meaningful decision is a durable file with a unique ID, parent relationship, owner, status, evidence, and next action.

## Message envelope

Use this YAML envelope for events in `comms/inbox/` and `comms/outbox/`:

```yaml
message_id: MSG-[timestamp]-[agent]-[sequence]
created_at: [RFC3339]
from: [director / generator / video-reviewer / human]
to: [agent or role]
message_type: [research / brief-ready / generated / review / remake-order / acknowledgement / blocked / approval]
priority: [critical / high / normal / low]
video_id: [manifest id or null]
parent_id: [brief, manifest, review, or order id]
status: [open / acknowledged / in-progress / resolved / blocked]
summary: [one sentence]
evidence: [paths, timecodes, measured values]
next_action: [one scoped action]
```

## Ordered lifecycle

The normal path is:

```text
Director research
  → Director brief
  → Generator acknowledgement
  → One generated version
  → Generator QA
  → Hourly Reviewer watch and score
  → PASS_FOR_DIRECTOR_APPROVAL or REMAKE_REQUIRED
  → Director/publication decision
```

For a failed video:

```text
Reviewer score and evidence
  → orders/remake/REMAKE-<video_id>-<review_version>.md
  → Generator acknowledgement in orders/acknowledged/
  → next version with incremented filename
  → Generator QA
  → hourly Reviewer recheck
```

The Reviewer’s evidence is immutable. A Generator may append a response but must not rewrite the original verdict. The Director may change the brief when the order reveals a concept-level problem; that change gets a new brief version and a parent link to the review order.

## Priority rules

`CRITICAL` orders block publication and are handled before new work. `HIGH` orders must be acknowledged by the next Generator firing. `NORMAL` orders are handled in version order. `LOW` notes can be scheduled by the Director. An open remake order always outranks an unstarted new video for the same Generator queue unless a human changes the priority.

## Version and collision rules

A remake never overwrites the failed file. Increment the video version and keep the source review linked. A new angle receives a new `angle_slug`; a derivative platform output receives a separate `video_id` even when it shares a campaign. Duplicate filenames, duplicate IDs, or missing parent links are blockers.

## Communication folders

| Folder | Meaning |
|---|---|
| `comms/inbox/` | New events waiting for the receiving agent |
| `comms/outbox/` | Agent’s durable message to the team |
| `orders/remake/` | Open Reviewer orders that require a new Generator version |
| `orders/acknowledged/` | Generator acknowledgements with planned correction sequence |
| `reviews/` | Immutable scorecards and verdicts |
| `manifests/` | Current media state and external-storage link |

A scheduled run must read these folders before choosing work and must leave them in a state another fresh task can understand.

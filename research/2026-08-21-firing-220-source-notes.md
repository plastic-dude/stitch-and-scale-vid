# Firing 220 Source Notes

## NIST review cadence and role ownership

Sources: https://airc.nist.gov/airmf-resources/playbook/govern/ and https://airc.nist.gov/airmf-resources/playbook/manage/

NIST AI RMF emphasizes transparent policies, clearly delegated authority, periodic monitoring and review, documented change management, incident response, and human adjudication. Risk tolerance and oversight needs can change over the lifecycle. Applied here, an open review hold needs an explicit accountable owner and a bounded review checkpoint rather than indefinite silence.

## Google SRE incident coordination

Source: https://sre.google/resources/practices-and-processes/incident-management-guide/

Google SRE recommends actionable alerting, clear incident roles, coordination, communication, control, early escalation, and a working record. Repeated non-actionable notifications should not substitute for action; the incident remains assigned and controlled through explicit roles and next steps.

## AWS callback and heartbeat semantics

Source: https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html

AWS Step Functions callback tasks wait for an external token, but a heartbeat timeout can prevent a stuck execution from waiting indefinitely. A timeout produces failure/escalation; it does not imply success. Applied here, a review hold should have a bounded checkpoint or heartbeat-style continuation event. A missed checkpoint escalates the same incident and preserves the fail-closed gate; it cannot authorize approval, rejection, remake, new angle, or MP4.

## Firing-220 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require a bounded review lease: named owner, lease/checkpoint expiry, renewal evidence, escalation target, and terminal event reference. No new brief or MP4 is authorized.

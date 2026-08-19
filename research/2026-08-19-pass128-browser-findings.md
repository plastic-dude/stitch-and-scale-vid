# Pass 128 browser findings — priority-state — 2026-08-19

## Sources checked

| Source | Checked | Findings used | Limits |
|---|---|---|---|
| NIST SP 800-30 Rev. 1 — Guide for Conducting Risk Assessments | 2026-08-19 | Risk assessment supplies information for deciding appropriate courses of action in response to identified risks; risk should be assessed rather than treated as an unexplained label. | Government risk guidance; not a Stitch & Scale product claim. |
| NIST Risk Management Framework | 2026-08-19 | Risk management is described as comprehensive, flexible, repeatable, and measurable, with decisions supported throughout the system life cycle. | Government risk guidance; no product behavior evidence. |
| W3C WCAG 2.2 — Status Messages | 2026-08-19 | Status messages communicate results, waiting/progress, or errors; important changes should be programmatically determinable without unnecessary focus changes. | Accessibility guidance; not a product claim. |
| Apple HIG — Managing Notifications | 2026-08-19 | Notification delivery is permissioned and filtered; interruption levels carry different urgency; urgency should be represented accurately and high-priority interruption should not be used for low-priority content. | Apple platform guidance; no product behavior evidence. |
| Stitch & Scale local QA, craft-business, mobile-maker, and publishing/export contracts | Re-read 2026-08-19 | Review items need truthful risk, owner, due, escalation, accessibility, caption, audio, and human-gate boundaries; urgency does not replace impact or human review. | Internal contracts, not current product behavior. |

## Research synthesis and decision shift

The fresh question is: **When several review items compete for attention, what proves the difference between impact, urgency, due time, priority, owner, and escalation rather than collapsing them into one alarming label?** The research changes the creative from generic “high priority” to a triage card naming `IMPACT / URGENCY / DUE / OWNER / PRIORITY / REASON / ESCALATION / REVIEWED`, explicitly illustrative until product proof verifies exact labels. Candidate angle: `priority-state` — **“Urgent is not important.”** Visual metaphor: multiple review cards separating into impact and urgency axes before a bounded queue. Emotional turn: alarm fatigue becomes defensible triage. Final line: “Name the reason before you raise the priority.”

The candidate is distinct from `risk-trigger`, which concerns whether a warning has a trigger; `acknowledgement-state`, which concerns the message-to-action lifecycle; `consent-state`, which concerns permission; `response-state`, which concerns plan versus enacted response; `review-expiry`, which concerns review freshness; `intent-state`, which concerns action scope; and `outcome-proof`, which concerns improved outcome. `priority-state` focuses on **why an item is ranked and what urgency means**, not whether it was delivered, acknowledged, or completed.

## Product truth and blocker

No current product-proof registry or approved capture verifies impact/urgency fields, due times, owners, priority reasons, queue ordering, escalation rules, or accessibility exposure of priority changes. Therefore no current triage, priority, urgency, due-date, owner, or escalation capability may be claimed. The package must remain `blocked` with one next action: provide a versioned, non-private approved capture or registry entry showing at least two competing review items with distinct impact/urgency reasoning, due/owner, priority result, escalation behavior, and accessible status announcement, then rerun all gates.

## Planned campaign framing

Assumption: no active brief was supplied, so classify as a blocked `founder-proof` micro-explainer for knitwear designers, technical editors, test knitters, and craft-business operators; objective is to show why an alarming label is not a defensible triage decision when impact, urgency, due time, owner, and escalation are unnamed; tone is precise, calm, non-alarmist; distribution is organic-first Instagram Reels, TikTok, and YouTube Shorts; tier is blocked proof-led planning. David remains a developer whose late mother knitted, never a knitter, designer, pattern designer, technical editor, or tester.

## References

[730] [NIST — SP 800-30 Rev. 1: Guide for Conducting Risk Assessments](https://csrc.nist.gov/pubs/sp/800/30/r1/final)
[731] [NIST — Risk Management Framework](https://csrc.nist.gov/projects/risk-management)
[732] [W3C — Understanding Success Criterion 4.1.3: Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
[733] [Apple Developer — Human Interface Guidelines: Managing Notifications](https://developer.apple.com/design/human-interface-guidelines/managing-notifications)
[734] [Stitch & Scale local skill contracts — QA, craft-business, mobile-maker, and publishing/export workflows](file:///home/ubuntu/skills/mobile-maker-workflows/SKILL.md)

## Research limit

These sources establish risk-assessment, measurable lifecycle decision, accessible status-message, and notification-urgency principles, not Stitch & Scale product behavior. The candidate does not claim that the app currently exposes impact/urgency fields, due times, owners, priority reasons, queue ordering, escalation rules, or accessible priority announcements. Product truth remains unverified until a versioned approved capture or registry entry supplies the exact surface and behavior.

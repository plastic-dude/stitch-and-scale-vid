# Pass 127 browser findings — acknowledgement-state — 2026-08-19

## Sources checked

| Source | Checked | Findings used | Limits |
|---|---|---|---|
| W3C WCAG 2.2 — Status Messages | 2026-08-19 | Status messages can report action results, waiting/progress, or errors; important changes should be programmatically determinable to assistive technology without taking focus; delivery should avoid unnecessary interruption. | Accessibility guidance; not a Stitch & Scale product claim. |
| W3C ARIA19 — role=alert or live regions | 2026-08-19 | Error messages injected into a live region can be announced without moving focus; the technique includes repeated invalid submissions and context for assistive technology. | Technique guidance; no product behavior evidence. |
| Apple HIG — Managing Notifications | 2026-08-19 | Notifications require permission; delivery can be filtered or scheduled; interruption levels should represent urgency accurately; time-sensitive interruption should be reserved for relevant events; marketing notifications require explicit agreement. | Apple platform guidance; no product behavior evidence. |
| Apple HIG — Alerts | 2026-08-19 | Alerts should provide essential information and useful actions, be used sparingly, and describe the actual situation and result clearly. | Apple platform guidance; no product behavior evidence. |
| Stitch & Scale local QA, craft-business, mobile-maker, and publishing/export contracts | Re-read 2026-08-19 | Warning, review, consent, save, response, caption, audio, and human evidence states remain distinct; displayed text is not evidence of delivery, comprehension, acknowledgement, or action. | Internal contracts, not current product behavior. |

## Research synthesis and decision shift

The fresh question is: **When an important warning, review request, or result appears, what proves it was delivered, seen, acknowledged, acted on, or escalated rather than merely displayed?** The research changes the creative from a generic warning to an acknowledgement card naming `MESSAGE / RECIPIENT / DELIVERED / SEEN / ACKNOWLEDGED / ACTION / ESCALATION / EXPIRES`, explicitly illustrative until product proof verifies exact labels. Candidate angle: `acknowledgement-state` — **“Shown is not acknowledged.”** Visual metaphor: a warning travels through delivery, seen, acknowledgement, action, escalation, and expiry gates. Emotional turn: notification anxiety becomes accountable handoff. Final line: “Name the acknowledgement before you close the loop.”

The candidate is distinct from `risk-trigger`, which concerns whether a warning has a trigger; `consent-state`, which concerns permission; `response-state`, which concerns a plan versus enacted response; `intent-state`, which concerns action scope before execution; `commit-state`, which concerns save acknowledgement; `outcome-proof`, which concerns improved outcome; `review-expiry`, which concerns review freshness; and `accessibility-state`, which concerns accessibility configuration. `acknowledgement-state` focuses on the lifecycle between a message/result being emitted and a human or system recording that it was received and acted upon.

## Product truth and blocker

No current product-proof registry or approved capture verifies recipient routing, delivery state, seen state, acknowledgement controls, action records, escalation, expiry, accessible status-message announcement, notification permission, interruption level, or marketing-notification consent. Therefore no current delivery, notification, acknowledgement, escalation, or completion capability may be claimed. The package must remain `blocked` with one next action: provide a versioned, non-private approved capture or registry entry showing one warning or review request from emission through recipient, delivery, seen, acknowledgement, action, escalation/expiry, and accessible announcement, then rerun all gates.

## Planned campaign framing

Assumption: no active brief was supplied, so classify as a blocked `founder-proof` micro-explainer for knitwear designers, technical editors, test knitters, and craft-business operators; objective is to show why a displayed warning or result is not proof that a handoff was received and acted upon; tone is precise, calm, non-alarmist; distribution is organic-first Instagram Reels, TikTok, and YouTube Shorts; tier is blocked proof-led planning. David remains a developer whose late mother knitted, never a knitter, designer, pattern designer, technical editor, or tester.

## References

[725] [W3C — Understanding Success Criterion 4.1.3: Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
[726] [W3C — Technique ARIA19: Using ARIA role=alert or Live Regions to Identify Errors](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA19)
[727] [Apple Developer — Human Interface Guidelines: Managing Notifications](https://developer.apple.com/design/human-interface-guidelines/managing-notifications)
[728] [Apple Developer — Human Interface Guidelines: Alerts](https://developer.apple.com/design/human-interface-guidelines/alerts)
[729] [Stitch & Scale local skill contracts — QA, craft-business, mobile-maker, and publishing/export workflows](file:///home/ubuntu/skills/mobile-maker-workflows/SKILL.md)

## Research limit

These sources establish status-message announcement, live-region error delivery, notification permission/urgency, and accountable handoff principles, not Stitch & Scale product behavior. The candidate does not claim that the app currently exposes recipient routing, delivery/seen/acknowledged/action/escalation/expiry states, accessible status announcements, or notification permission/urgency controls. Product truth remains unverified until a versioned approved capture or registry entry supplies the exact surface and behavior.

# Pass 265 Wide Research — Local-First Ownership State

**Research date:** 2026-08-20
**Pass:** 265
**Question:** What can a craft-software product honestly say about device-held data, offline use, backup, portability, and loss without implying security, permanence, or cloud behavior it cannot prove?

## Decision summary

The fresh question selects `local-first-ownership-state`, not a generic privacy or offline angle. Research supports a sharper boundary: **local-first can describe where the primary working copy is held and who retains practical control, but it must not silently promise backup, permanence, cross-device sync, security, or legal intellectual-property ownership.** Browser storage is typically best-effort and can be evicted under storage pressure or user action; a durable workflow therefore needs visible export/backup responsibility and a clear record of what is local, what is synced, and what remains unverified.

The visual concept is an original `WHO HOLDS THE COPY?` card that separates `PRIMARY WORKING COPY / SYNC COPY / EXPORT / BACKUP / SECURITY / STATUS`. It is an illustrative prop, not current Stitch & Scale UI, and remains blocked because the repository has no current product-proof registry entry or approved capture verifying the exact local-first, export, backup, sync, persistence, or security surfaces.

## Evidence table

| Source and access | Evidence | Uncertainty or limit | Planning decision changed |
|---|---|---|---|
| [Ink & Switch, Local-first software: you own your data, in spite of the cloud](https://www.inkandswitch.com/essay/local-first/) — published 2019-04-01; accessed 2026-08-20 | The essay defines local-first as prioritizing local storage and local networks, treating the local device copy as primary while servers may hold secondary copies. Its ideals include offline capability, longevity, privacy/security by default, and user agency. It explicitly distinguishes practical control and autonomy from legal intellectual-property ownership, and says data ownership brings responsibility for backups and loss prevention. | A principles essay, not a current Stitch & Scale architecture record, security audit, backup guarantee, sync test, or legal opinion. | The film must separate primary working copy, sync copy, export, backup, security, and legal ownership; it cannot turn “local-first” into an all-purpose safety promise. |
| [MDN, Storage quotas and eviction criteria](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) — updated 2026-01-05; accessed 2026-08-20 | Browser data is stored per origin with quotas. Browser storage is best-effort by default and can be evicted under storage pressure, quota conditions, proactive policies, or user deletion; persistent storage requires an explicit API request and browser-dependent approval. In private browsing, stored data is usually deleted when the session ends. | Browser behavior varies by browser, mode, device, origin, and implementation. The page does not prove Stitch & Scale’s storage layer or current persistence request behavior. | Do not say “your work can never disappear,” “browser storage is permanent,” or “local means backed up.” Make storage status, export, and backup responsibility visible. |
| [web.dev, Persistent storage](https://web.dev/articles/persistent-storage) — accessed 2026-08-20; page explains that persistent storage can reduce eviction risk and that browsers decide whether to grant it | Persistent storage can protect browser data from eviction, but a site must request it and browsers may grant or deny it based on heuristics or permission. The page warns that unsynchronized local data can be lost if storage is removed. | The extracted page was localized in Chinese; the technical guidance is still attributable to the web.dev page, but exact UI wording must not be copied into product claims. | A future product surface should show whether persistence was requested/granted and should pair it with export/backup guidance rather than imply automatic durability. |
| [Local-First Web](https://localfirstweb.dev/) — accessed 2026-08-20 | The ecosystem directory describes local-first apps as keeping data locally while using cloud services to synchronize data between machines, and links to the Ink & Switch principles. | Community directory and ecosystem reference, not a product-specific audit or normative standard. | The concept should distinguish local storage from synchronization and not imply sync is already present. |

## Audience pain and campaign interpretation

For independent knitwear designers, “local-first” matters because patterns, calculations, notes, samples, expense records, sales rollups, and publication work carry creative and business value. The audience pain is not a slogan about privacy; it is uncertainty about **where the authoritative copy lives, what happens on another device, what survives offline work, what can be exported, who is responsible for backup, and whether storage state is visible before trust is placed in the tool**.

Assume the standing campaign objective is a founder-proof short recruiting founding testers through the free demo and early-access cohort. Audience: independent knitwear designers and pattern publishers who need local ownership without surrendering records to an opaque service. Form: organic 9:16 short for Instagram Reels, TikTok, and YouTube Shorts, 35–45 seconds. Tone: quiet, precise, local-first, and suspicious of broad privacy slogans. Brief tier: standard single-original-video planning package. No subscription, security, backup, sync, or product capability claim is adopted.

## Product-truth reconciliation

The current repository confirms a local-first design intention in project guidance, but this pass has no current product-proof registry entry or approved non-private capture for the exact primary-copy, export, backup, sync, persistent-storage, storage-status, or security surface. A repository statement is not visual proof of current behavior. The paper card must be labeled `ILLUSTRATIVE — NOT PRODUCT UI`. Do not show generated browser controls or invent a “local-only” badge.

The concept must not claim that Stitch & Scale automatically backs up work, synchronizes across devices, encrypts records, prevents loss, requests or receives persistent browser storage, works offline in every workflow, gives legal ownership, or guarantees recovery. It may invite designers to check what the current product actually stores locally and what export path they need.

## Rights, visual opportunity, and asset decisions

Use only original paper cards, a blank envelope labeled `EXPORT`, a blank device silhouette, and a pencil. Do not use a real pattern, private record, browser screenshot, customer file, family material, device photo, cloud-provider logo, security badge, third-party UI, or generated storage dashboard. If a current product capture is later supplied, verify product version/date, exact labels, browser/device context, privacy, destination, rights, and whether the capture demonstrates storage, sync, export, backup, or merely a visual state.

Visual sequence: a card says `LOCAL = SAFE?`; the hand splits it into `PRIMARY WORKING COPY / SYNC COPY / EXPORT / BACKUP / SECURITY / STATUS`. The emotional turn is from a comforting slogan to a responsible ownership question. The final card reads `KNOW WHERE THE COPY LIVES.`

## Platform, caption, audio, and acceptance decisions

Use one narrator family, one desk, one pencil-on-paper sound, and a 9:16 master under 45 seconds. Open on `LOCAL ≠ BACKUP` in the first second. Keep the six status labels readable in the central safe region. Captions must not cover the card, hands, envelope, or status fields. Review caption-on, caption-free, and muted comprehension separately. Reject security badges, cloud-sync animation, backup success sounds, fake browser permission prompts, mixed voices, stale product captures, and any claim that local storage prevents loss.

## Research conclusion

The evidence supports a materially distinct angle about **visible custody and responsibility**, not generic privacy, offline continuity, storage persistence, recovery proof, export portability, or device exit. The package remains blocked until current product proof, rights, caption, audio, platform, and acceptance evidence exist for the exact surface.

## References

[1]: https://www.inkandswitch.com/essay/local-first/ "Ink & Switch — Local-first software: you own your data, in spite of the cloud"
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria "MDN — Storage quotas and eviction criteria"
[3]: https://web.dev/articles/persistent-storage "web.dev — Persistent storage"
[4]: https://localfirstweb.dev/ "Local-First Web — local-first ecosystem directory"

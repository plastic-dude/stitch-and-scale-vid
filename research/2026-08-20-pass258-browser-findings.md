# Pass 258 Wide Research — Device Exit State

**Research date:** 2026-08-20
**Pass:** 258
**Question:** When an independent designer leaves, replaces, loses, or stops trusting a device, what must be verified so local-first records remain owned, readable, exportable, and recoverable without implying cloud sync or guaranteed backup?

## Decision summary

The research changes the concept from a generic local-ownership statement to a sharper **device-exit boundary**. Local storage can improve agency, but ownership is not the same as a successful export, a readable file, a tested restore, or a backup. A trustworthy exit check should name what was exported, its format, its version, its fixity or checksum, its destination, its readability test, and the separate backup or recovery responsibility.

The planned illustrative proof surface is a `DEVICE EXIT` card with `LOCAL COPY`, `EXPORT`, `FORMAT`, `VERSION`, `CHECKSUM / FIXITY`, `DESTINATION`, `READABILITY TEST`, `BACKUP STATE`, and `HUMAN CONFIRMATION`. This is not a recovery guarantee, cloud-sync claim, or current Stitch & Scale UI. It will carry `ILLUSTRATIVE — NOT PRODUCT UI` and remain blocked.

## Evidence table

| Source and access | Evidence | Uncertainty or limit | Planning decision changed |
|---|---|---|---|
| [Ink & Switch, Local-first software: you own your data, in spite of the cloud](https://www.inkandswitch.com/essay/local-first/) — accessed 2026-08-20; essay dated 2019-04-01 | The essay defines local-first as prioritizing local storage and local networks, treats the local copy as primary, and describes ideals including offline work, multi-device access, long-term preservation, privacy, and user control. It explicitly says ownership brings responsibility for backups, data-loss prevention, and archive management. It also explains that export alone may not preserve the ability to continue using a service’s software. | This is a research essay, not a product specification, legal ownership statement, or proof of Stitch & Scale behavior. It describes ideals and examples, not a universal implementation checklist. | Separate `LOCAL COPY`, `EXPORT`, `BACKUP STATE`, and `READABILITY TEST`; do not equate local-first with automatic recovery, sync, backup, or future software compatibility. |
| [Ink & Switch, Local-first Software](https://www.inkandswitch.com/local-first-software/) — accessed 2026-08-20; page date not stated | The lab summarizes local-first as principles supporting collaboration and ownership while improving offline work, multi-device use, security, privacy, long-term preservation, and user control. | Summary language is broad and aspirational; it does not verify any current Stitch & Scale surface. | Keep the hook about the user’s exit from a device rather than promising that local-first solves every failure mode. |
| [Digital Preservation Coalition, File formats and standards](https://www.dpconline.org/handbook/technical-solutions-and-tools/file-formats-and-standards) — accessed 2026-08-20; handbook page date not stated | DPC says preservation planning should be practical and tied to user needs. It discusses format obsolescence, proliferation, migration, emulation, normalization, documentation, adoption, metadata, significant properties, and validation. It recommends choosing target formats deliberately and recording acceptance criteria for migration. | This is preservation guidance for collections and organizations, not a personal-app export promise. “Open” does not automatically mean readable forever, and migration can introduce changes. | Add `FORMAT`, `SIGNIFICANT PROPERTIES`, and `READABILITY TEST`; do not show an export badge as proof of durable access. |
| [U.S. National Archives, About the Digital Preservation Program](https://www.archives.gov/preservation/digital-preservation/about) — accessed 2026-08-20; page references the 2022–2026 strategy | NARA records authenticity, accuracy, and functionality as preservation qualities; it records fixities, tracks actions, creates public-use copies, validates formats, maintains manifests and logs, performs audits, and tests backup restoration. | NARA is an archival institution with resources and procedures that do not map directly to an independent designer’s app. These practices are evidence of preservation concerns, not a requirement that Stitch & Scale already implements them. | Use `CHECKSUM / FIXITY`, `ACTION LOG`, and `READABILITY TEST` as illustrative evidence fields while explicitly keeping backup restoration a separate human gate. |
| [Craft-business records skill, local repository guidance](file:///home/ubuntu/skills/craft-business-records/SKILL.md) — read 2026-08-20 | The project guidance separates recorded facts, derived estimates, planned values, exports, backups, deletion, and restoration. It requires stable identifiers, source labels, readable exports, explicit destructive actions, and restoration testing before calling a workflow durable. | Internal project guidance is not external research and does not prove the live app implements these behaviors. | Make the exit card a record-and-evidence boundary, not a promise of data durability. Keep original records visible and do not hide them behind a summary. |
| [W3C, Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) — Recommendation dated 2024-12-12; accessed 2026-08-20 | WCAG 2.2 applies across devices, supports text alternatives and captions for synchronized media, and expects a combination of automated testing and human evaluation. | WCAG does not prove data preservation, export correctness, or product capability. | Keep the device-exit card legible without captions, use one field family per close shot, and review mobile readability without claiming conformance. |
| [YouTube Help, Add subtitles & captions](https://support.google.com/youtube/answer/2734796?hl=en) — accessed 2026-08-20 | YouTube explains that subtitles and captions broaden access and can be added or edited in YouTube Studio. | Platform help does not define the campaign’s proof area or guarantee caption accuracy. | Provide a human-reviewed caption file and caption-free master; do not rely solely on automatic captions. |
| [TikTok Creative Best Practices](https://ads.tiktok.com/help/article/creative-best-practices) — last updated June 2025; accessed 2026-08-20 | TikTok recommends vertical 9:16 creative, UI safe-zone visibility, early hooks, captions or text overlays, and clear CTAs. | Advertiser guidance is not a guarantee of organic performance or fixed behavior in every account or placement. | Start on a visible exit boundary, keep proof central, and recheck current platform behavior before approval. |

## Audience and cultural/workflow interpretation

The audience pain is the moment a designer changes devices or storage habits and discovers that “I have the data” is not the same as “I can open, interpret, verify, and recover the data.” Pattern notes, sample records, expense events, test-knit history, submissions, and publication decisions carry both practical and emotional value. The story respects the craft culture of keeping work-in-progress and family knowledge without turning that respect into a sentimental ownership claim or invented customer story.

The standing campaign objective remains recruiting founding testers through the free demo and early-access cohort. No event, seasonal deadline, shipping cutoff, or urgency hook is adopted. The research does not support any claim about competitor weakness, adoption, market demand, or a data-loss event involving a Stitch & Scale user.

## Product-truth reconciliation

No current Stitch & Scale product-proof registry entry or approved non-private capture verifies a device-exit checklist, readable export, format/version field, checksum or fixity, destination, readability test, backup state, action log, or restoration test. Therefore the package is **blocked**. The paper card is not current product UI and must not be presented as a backup, sync, recovery, or portability feature.

The concept must not claim that Stitch & Scale automatically backs up, syncs, restores, migrates, validates file formats, guarantees future readability, prevents device loss, or protects data from every failure. A local record, an export, a backup, a tested restore, and a human confirmation remain separate states. Technical editing, physical print review, chart readability, schematic scale, and test knitting remain separate human evidence gates.

## Rights, visual opportunity, and asset decisions

Use an original paper card, one blank removable drive-shaped prop with no brand, and one neutral device silhouette with no screen UI. Do not use a real personal device screen, cloud dashboard, customer record, pattern file, private backup, account credential, external storage brand, or third-party media. If a product capture is ever supplied, verify version, destination, privacy, owner, rights, and exact labels before use.

The visual opportunity is a simple exit sequence: a local card is copied to an unlabeled destination, then a second card asks `CAN YOU OPEN IT?` and a final strip asks `DID YOU TEST THE RESTORE?`. The emotional turn is from possession to evidence. No data-loss reenactment, broken-device stunt, fear montage, or urgency cue is needed.

## Platform, caption, audio, and acceptance decisions

Use a mobile-native 9:16 master under 45 seconds with one founder narrator, one microphone family, one room tone, and one paper-placement sound motif. Captions may not cover the card, device silhouette, hands, labels, checksum/fixity, buttons, menus, or CTA. Review caption-on and caption-free versions independently. The exit sequence must remain understandable with audio muted and captions disabled. Reject mixed voices, doubled words, overlaps, room-tone jumps, stale UI, unsupported backup/recovery claims, unlicensed audio, and dense overlays.

## Research conclusion

The evidence supports the materially distinct angle `device-exit-state`: make the boundary between local possession and trustworthy exit evidence visible, then stop before promising backup or recovery. It does not authorize a Stitch & Scale export, sync, backup, restore, migration, checksum, or future-readability feature claim. The package remains blocked until current product proof, rights, platform, caption, audio, and acceptance evidence exist.

## References

[1]: https://www.inkandswitch.com/essay/local-first/ "Ink & Switch — Local-first software: you own your data, in spite of the cloud"
[2]: https://www.inkandswitch.com/local-first-software/ "Ink & Switch — Local-first Software"
[3]: https://www.dpconline.org/handbook/technical-solutions-and-tools/file-formats-and-standards "Digital Preservation Coalition — File formats and standards"
[4]: https://www.archives.gov/preservation/digital-preservation/about "U.S. National Archives — About the Digital Preservation Program"
[5]: file:///home/ubuntu/skills/craft-business-records/SKILL.md "Craft-business records — local repository guidance"
[6]: https://www.w3.org/TR/WCAG22/ "W3C — Web Content Accessibility Guidelines 2.2"
[7]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Add subtitles & captions"
[8]: https://ads.tiktok.com/help/article/creative-best-practices "TikTok — Creative Best Practices"

# Director and Video Reviewer Research — 2026-08-19

## Research question
What makes a directing agent useful across campaigns, ads, events, series, long-form, and short-form outputs, and how should an automated reviewer diagnose quality without hiding failure behind one aggregate score?

## Findings

Professional shot-list practice translates a director’s vision into executable coverage. A useful shot list records action, shot number, shot type, angle, movement, equipment, framing/aspect ratio, location, setup time, and sometimes audio or prop notes. It is a living collaboration artifact, not a rigid plan; changes should occur from a prepared baseline. The research also emphasizes beginning with the script and emotional beats, planning coverage rather than only hero shots, organizing by production order, and leaving room for adjustment. [1]

Creative-brief practice treats the brief as a roadmap rather than a finished concept. A complete brief defines the objective, audience, key message, tone, deliverables, formats, timeline, stakeholders, risks, and measurable success conditions. It should be concise enough to use, detailed enough to prevent ambiguity, and flexible enough to permit original concepts. Different project tiers need different brief depth: a highly conceptual campaign needs a full brief, while a templated adaptation can use a shorter one. [2]

Advertising-brief practice reinforces that a brief must carry campaign objective, audience, key message/tone, deliverables, timeline, and measurable goals before execution. A campaign brief should be adaptable to branding, promotion, launch, event, educational, or direct-response work instead of assuming one funnel or one runtime. [3]

DirectorBench’s 2026 benchmark is useful as a diagnostic design pattern: it evaluates long-form video across script, visual, audio, cross-modal, and stability dimensions, and uses checkpoint-level diagnosis instead of a single undifferentiated score. The benchmark reports that transition quality and other workflow bottlenecks can be hidden by aggregate prompt-alignment scores. This supports a reviewer that publishes a total percentage for triage but always includes dimension scores, hard-fail flags, evidence, and a precise remake order. [4]

Platform constraints change. Current official guidance says YouTube Shorts can be up to three minutes when square or vertical, TikTok ad formats have their own duration/aspect rules, and Instagram Reels permit a range of aspect ratios with minimum frame-rate/resolution requirements. The Director should therefore use a platform-profile registry and a deliverable matrix, not hard-code one universal duration or frame. Platform rules must be checked on each relevant run. [5] [6] [7]

## Design decisions

The Director must be flexible in campaign objective, audience, event context, format, runtime, tone, and distribution. It should choose the appropriate brief tier and create a master concept plus platform-native derivatives only when the derivative preserves the story’s truth and proof. It must plan series arcs, recurring motifs, and long-form chapters when requested, but must not assume every campaign is a tester-recruitment ad.

The Video Reviewer should score seven dimensions—story and purpose, directing/visual language, proof and claim truth, audio/voice, captions/text, technical/platform fit, and originality/brand fit—on a 0–100 scale with evidence. Hard failures override the percentage: obstructive captions, mixed voices, hallucinated product/UI text, unsupported claims, missing audio, corrupt export, or duplicate filename. Any total under 65% becomes `REMAKE_REQUIRED`, with a structured order sent to the Generator. A score at or above 65% is not automatic approval; it still needs dimension-level minimums and human/publication approval where required.

## References

[1]: https://www.studiobinder.com/blog/what-is-a-shot-list-example/ "What is a Shot List? StudioBinder"

[2]: https://business.adobe.com/blog/basics/creative-brief "Creative briefs — Adobe Business"

[3]: https://celtra.com/blog/creative-briefs-for-effective-ad-campaigns/ "Creative Briefs for Effective Ad Campaigns — Celtra"

[4]: https://arxiv.org/abs/2605.30090 "DirectorBench: Diagnosing Long-Form Video Generation with Personalized Multi-Agent Evaluation"

[5]: https://support.google.com/youtube/answer/15424877?hl=en "Understand three-minute YouTube Shorts"

[6]: https://ads.tiktok.com/help/article/tiktok-ads-policy-ad-format-and-functionality "TikTok Ads: Ad Format and Functionality"

[7]: https://help.instagram.com/1038071743007909 "Reel size and aspect ratios on Instagram"

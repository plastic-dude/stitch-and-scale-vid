# Video Reviewer research note — ownership-receipt v002

**Run date:** 2026-08-20  
**Reviewer:** Video Reviewer  
**Scope:** Current VIDEO GENERATOR output only; no application-code review.

## Findings

The inspected asset is a 45-second, 1080×1920, 30 fps H.264 MP4 with mono AAC audio. The declared campaign destinations are YouTube Shorts and Instagram Reels; TikTok remains explicitly excluded by the campaign profile until it has a separately verified platform record.

YouTube’s current Help guidance states that captions improve accessibility, that automatic captions can be generated for Shorts, and that creators should review and correct machine-generated captions because transcription quality can vary.[1] For this asset, the narration transcript is available and matches the reviewed spoken content, but the required version-matched caption file and caption-on/caption-off QA record were not found in the repository.

Meta’s current Business Help guidance defines the safe zone as the area where important text and logos will not be cropped or covered by interface elements. It advises keeping the edges of 9:16 creative free of key elements and recommends using the Safe Zone guardrail in Ads Manager.[2] The sampled frames show the burned-in captions in the low portion of the canvas. They do not visibly cover the central product card in the sampled frames, but their placement is not demonstrated against a recorded Reels safe-zone overlay. The repository platform profile requires per-shot blank-margin coordinates and a caption-on/caption-off review before delivery.

Instagram’s current creator guidance describes safe-zone guides as showing where text will not be cut off by the interface and recommends watching the edit back with text and audio before export.[3] This supports a conservative blocker until the Generator supplies the declared caption coordinates and mobile/safe-zone QA evidence.

## Review implication

The media itself is visually coherent and its claims align with the approved privacy-by-default brief. However, the Drive asset is named and versioned as `v002`, while the only matching repository manifest is a `v001` approved-for-generation contract with `drive_file_id: null`, `sha256: null`, and `qa.status: pending-generator`. The version mismatch and missing external-media evidence prevent an auditable approval. The correct operational outcome is **BLOCKED pending a version-matched manifest/checksum/caption/rights/QA package**, not a public approval. A remake order is not issued solely from the visual safe-zone recommendation because the current evidence does not establish whether the asset itself or its production record should be corrected first.

## References

[1]: https://support.google.com/youtube/answer/6373554?hl=en "Use automatic captioning — YouTube Help"

[2]: https://www.facebook.com/business/help/980593475366490 "About text overlays and the safe zone for ads on Facebook and Instagram — Meta for Business"

[3]: https://creators.instagram.com/blog/beginner-video-editing-guide/ "Your First Video Edit in 5 Minutes: A No-Pressure Guide — Instagram Creators"

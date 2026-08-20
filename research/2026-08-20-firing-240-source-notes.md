# Firing 240 Source Notes

## Fresh topic

Accessibility and inclusive evaluation as a release-gate requirement for promotional video: how captions, non-speech audio, visual descriptions, readable placement, and equivalent access should be evaluated without confusing accessibility evidence with terminal campaign approval.

## Authoritative sources

W3C WAI explains that captions are synchronized text for speech and meaningful non-speech audio, and that high-quality captions require accuracy review; automatically generated captions are not sufficient unless confirmed fully accurate: https://www.w3.org/WAI/media/av/captions/. WCAG 2.2 Success Criterion 1.2.2 requires captions for all prerecorded audio in synchronized media, including dialogue and meaningful non-speech information; W3C also notes that captions should not obscure or obstruct relevant video information: https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html. W3C guidance on visual description explains that important visual information, scene changes, and on-screen text may require integrated or separate audio description or an equivalent alternative: https://www.w3.org/WAI/media/av/description/. NIST AI RMF emphasizes inclusive risk management, stakeholder access, and consideration of accessibility and diverse impacts across the AI lifecycle: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf.

## Application to V002

Accessibility is not a decorative post-processing check. For a short promotional video, the Reviewer should verify caption completeness and synchronization, speaker identification where needed, meaningful sound effects and music context, caption placement that does not obstruct product proof or key visuals, readable contrast and size, absence of competing generated text, voice intelligibility, and whether essential visual claims are conveyed through audio or an alternative description. The review must distinguish objective accessibility evidence from subjective style preference and record platform/profile context.

An accessibility remediation, caption correction, alternative track, or description file is a transformation and must preserve exact source identity and lineage. A positive accessibility observation does not clear V002, and an accessibility defect does not silently authorize a remake unless the independent Reviewer publishes a contract-valid `REMAKE_REQUIRED` order. A derivative caption file or platform preview must be bound to the exact V002 artifact and version.

## Decision direction

V002 remains `video-ready-for-review`, with no independent terminal Reviewer decision, owner action, `REMAKE_REQUIRED` order, or approved-for-generation brief. Publish one blocker requiring an accessibility-complete review packet and exact lineage for any caption or description derivative. Keep the single-flight lane closed and do not authorize MP4 generation.

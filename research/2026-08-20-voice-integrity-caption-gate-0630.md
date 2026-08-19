# Director Research — Voice Integrity and Accessible Captions

research_id: RESEARCH-20260820-voice-integrity-caption-gate-0630
run_role: temporary-director
run_time: 2026-08-20T06:30:00+01:00
status: research-only
future_angle: voice-integrity

## Fresh research question

What must a promotional video preserve so that narration, captions, sound effects, and visual proof remain intelligible and accessible without mixing or obstruction?

## External evidence

W3C WCAG 2.2 explains that prerecorded synchronized media should provide captions, including speaker identification and meaningful non-speech audio; captions should not obscure or obstruct relevant information. [1] W3C’s audio-description guidance says important visual information, including actions, scene changes, and on-screen text, should be conveyed through synchronized audio description when it is not already present in the soundtrack. [2] FCC materials describe caption-quality concerns around accuracy, synchronicity, completeness, placement, and readability for covered television programming; those rules are not automatically a legal determination for every social-media asset, but they are useful quality evidence. [3]

## Current product reconciliation

The active privacy-by-default contract requires a single clear narrator, synchronized caption track, no voice mixing, and protected Local only/Saved/local-storage-warning proof. The new research strengthens the existing acceptance gates but does not justify a new brief while the current contract is still active. No second Generator-ready brief is created.

## Decision

Create one precise single-flight blocker and reserve `voice-integrity` as a future materially distinct campaign angle. The Generator must treat caption synchronization, speaker identity, non-speech audio, obstruction checks, and clean narration as acceptance evidence for the active contract.

## References

[1]: https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html "Understanding Captions (Prerecorded) — W3C WAI"
[2]: https://w3c.github.io/wcag/understanding/audio-description-prerecorded.html "Understanding Audio Description (Prerecorded) — W3C WAI"
[3]: https://www.fcc.gov/encyclopedia/closed-captioning-video-programming-television "Closed Captioning of Video Programming — FCC"

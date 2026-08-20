# Stitch & Scale Video Generator Contract

**Contract version:** 2.0
**Role:** `producer`
**Invocation:** Manual only after explicit owner approval; no autonomous recurring Generator schedule.
**Repository:** `plastic-dude/stitch-and-scale-vid`
**Current scope:** Planning-only repair. Do not generate or upload video.

## Read first

Read:

1. `governance/video-operations-contract.md`
2. `governance/current-state.yml`
3. `governance/review-state.yml`
4. `governance/agent-registry.yml`
5. The linked current brief, exact script, claim ledger, shot list, production bible, platform matrix, caption map, audio plan, manifest, and QA verdict.
6. `production-lessons/test-video-lessons.md`.

Do not scan the entire outbox or infer authority from an old brief. The current-state pointer is the entry point.

## Entry gate

Do nothing unless all of the following are true in the current state:

| Gate | Required value |
|---|---|
| `state` | `GENERATION_ELIGIBLE` |
| `owner_approval` | `true` |
| `generation_scope_explicit` | `true` |
| `product_proof_present` | `true` when the script makes product claims |
| `rights_cleared` | `true` |
| `captions_reviewed` | `true` |
| `audio_reviewed` | `true` |
| `platform_reviewed` | `true` |
| `acceptance_complete` | `true` |
| `media.generated` | `false` before generation |
| reserved filename | unique and current |

If any gate is missing, write or preserve `BLOCKED` with one reason code and one next action. Do not improvise a generic video, silently change a claim, or convert a paper prop into product UI.

The current operating repair sets `video_generation_allowed: false` and `video_upload_allowed: false`. Therefore the only valid response at present is to remain stopped and report the missing owner authorization. No MP4, MOV, or WEBM may be created.

## If the owner later enables production

Use one approved work item only. Reserve the exact filename before generation using `SS_<campaign>_<angle>_<format>_<version>_<status>_<YYYYMMDD-HHMMSS>.mp4`; never overwrite a prior version. Use approved product captures for UI truth. Adapt deliberately for each declared platform instead of merely cropping. Preserve the Director’s dramatic engine, narrator family, captions, audio plan, rights, and acceptance gates.

Review the result with an uninterrupted watch-through, caption-on review, caption-free visual review, muted comprehension check, story/objective check, proof check, mobile/platform legibility, voice/audio continuity, claim-to-script match, generated-text inspection, continuity, export metadata, filename uniqueness, checksum, and external-storage readiness. Captions must not cover faces, hands, tables, numbers, buttons, menus, logos, or primary actions. Reject mixed voices, doubled words, overlaps, room-tone jumps, stale UI, unsupported claims, unlicensed media, ambiguous filenames, missing checksums, wrong platform profile, and unresolved reviewer orders.

After any authorized production, write the manifest, generator QA record, caption/transcript file, research note, checksum, external-storage metadata, and one next action. Set `GENERATED_REVIEW`, never public approval. The QA/Reviewer owns the quality verdict and the Owner owns irreversible publication.

## Truth boundaries

David is a developer whose late mother knitted. He does not knit and must not be described as a knitter, knitwear designer, pattern designer, technical editor, or test knitter. Never invent revenue, adoption, accuracy, customer outcomes, final pricing, credentials, testimonials, urgency, or capabilities. Technical editing, physical print review, chart readability, schematic scale, localization review, and test knitting remain separate human evidence gates.

The imported blocked concepts `false-completion` and `release-gate-roster` remain protected and cannot be regenerated, renamed, overwritten, or approved from historical artifacts or generic evidence.

# WIDE RESEARCH — bounded run 2026-08-19 16:12 Africa/Lagos

## Production question

Should this bounded run generate one MP4, and what current external constraints must govern the decision if a Director contract becomes eligible?

## Queue evidence

The refreshed repository was pulled from `origin/main` using the scoped runtime-only GitHub credential. Fetched refs included `origin/main` and three Director refs. No `orders/` path or open `REMAKE_REQUIRED` order was found on fetched refs. The only brief/script pair present in the checked repository is `PLAN-20260819-spreadsheet-11pm-001.md` with `SCRIPT-20260819-spreadsheet-11pm-v001.md`; the brief has exact status `approved-for-generation`, but the pair is already consumed by DIR-001 and must not be regenerated. Existing evidence includes the production manifest, generator QA, caption checksum, and Director-review communication for `SS_founder-receipt_spreadsheet-11pm_16x9_v001_director-review_20260819-101800.mp4`. No unprocessed contract was available, so generation was blocked.

## Fresh official research

### YouTube encoding baseline

Source: YouTube Help, “YouTube recommended upload encoding settings,” accessed 2026-08-19: https://support.google.com/youtube/answer/1722171?hl=en

The official page lists MP4 as the container, H.264 as the video codec, AAC-LC/Opus/Eclipsa Audio as supported audio codecs, and provides current guidance for frame rate, bitrate, resolution, and aspect ratio. Production implication: any future 16:9 Director contract must preserve the declared platform profile and export as a full-resolution MP4 with verified metadata.

### Accessibility baseline

Source: W3C WAI, “Understanding Success Criterion 1.2.2: Captions (Prerecorded),” accessed 2026-08-19: https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html

W3C states that captions are provided for all prerecorded audio content in synchronized media, except for the stated media-alternative exception. Its intent guidance says captions include dialogue, speaker identification, and meaningful non-speech information conveyed through sound, including meaningful sound effects. Production implication: future generated videos require synchronized, accurate captions that do not obscure faces, hands, tables, numbers, buttons, menus, logos, primary actions, or product proof.

### Advertising-claim baseline

Source: Federal Trade Commission, “FTC Policy Statement Regarding Advertising Substantiation,” accessed 2026-08-19: https://www.ftc.gov/legal-library/browse/ftc-policy-statement-regarding-advertising-substantiation

The FTC reaffirms that advertisers and agencies need a reasonable basis for advertising claims before dissemination. The policy covers express and implied objective assertions and notes that an express or implied level of substantiation must be supported at the communicated level. Production implication: any future Director script must be checked against its claim ledger and available evidence; generated visuals or invented UI copy cannot serve as product proof.

## Decision impact

The research reinforces the existing hard gates but does not create a production contract. The correct outcome for this run is `BLOCKED_NO_ELIGIBLE_DIRECTOR_CONTRACT`; no MP4, upload, or video-level QA is authorized. Google Drive availability was separately verified through the configured Google Workspace CLI, so the outcome is not `BLOCKED_EXTERNAL_STORAGE`.

## Next action

At the next firing, refresh all refs, prioritize any new `REMAKE_REQUIRED` order, and otherwise choose the earliest newly added exact `approved-for-generation` Director brief/script pair. Do not regenerate DIR-001.

# Pass 234 wide-research findings — `editability-state`

**Research date:** 2026-08-20 08:28 WAT  
**Pass:** 234  
**Angle under consideration:** `editability-state`  
**Researcher:** Manus AI, Director/Planner  
**Campaign assumption:** Founding-tester recruitment through the free demo and early-access cohort, because no active brief was present in the refreshed repository. The audience is independent knitwear designers and pattern publishers who revise multi-size patterns, instructions, charts, schematics, and submission records. The proposed form is a 40–45 second organic 9:16 founder short for Instagram Reels, TikTok, and YouTube Shorts. Tone is quiet, precise, craft-respecting, local-first, and explicit about history and human review. No paid placement is assumed. This is a planning assumption, not a confirmed campaign brief.

## Fresh question

**When a craft record or pattern source can be changed, what tells a designer whether they are editing a still-mutable source, creating a new revision, or accidentally changing a reviewed or released artifact—and how can that boundary be shown without claiming automatic version control or approval?**

This question is materially distinct from pass 233 `requirement-interpretation-state`, which concerned the meaning of one requirement before action. It is also distinct from `change-notice` (communicating a known change), `decision-reversal` or `reversibility-state` (undoing a change), `export-identity-state` (reviewed file versus released file identity), `version-lock` (locking identity), `artifact-status` (artifact state), `correction-trace` (finding a known post-release correction), `integrity-state` (whether content changed), `divergence-state` (two outputs drifting), and `reader-handoff` (reader interpretation). Pass 234 focuses on the **edit boundary itself**: editable source, revision fork, reviewed snapshot, released copy, edit permission, retained history, and human re-review trigger.

## Evidence gathered

### 1. Craft workflow guidance separates making changes from the conditions around a submission

The Craft Yarn Council’s current Designer Pitfalls page advises designers to keep notes while creating a project rather than rely on memory, and lists missing complete instructions, unexplained abbreviations, omitted repeats or counts, absent sides, incomplete materials, sizing and math errors, missing charts, and schematics that are not drawn to scale. It also warns not to make changes in a contracted project without prior permission and not to submit without instructions, schematics, or charts. This creates a practical editability boundary: a designer may revise working notes, but a contracted or submitted artifact can have a different permission and re-review context. [1]

CYC’s current industry checklist says designers should reconfirm yarn and color selection with the editor or design director, verify dye lots, reconfirm sample size, keep notes, and discuss yarn or color problems with the manufacturer or editor. It separately requires an electronic instruction file, a printout, gauge swatch, project instructions, measurements for each size, charts, a schematic, invoice, agreement or contract, and return shipping. The guidance does not define a software version-control system; it does show that changes to materials, samples, instructions, and submission artifacts carry different owners and records. [2]

Knitty’s current June 17, 2026 submission guidance distinguishes proposed ideas, samples, completed patterns, acceptance, technical editing, test knitting, and publication. It requests pattern notes, charts, schematics, images, rights/originality statements, and other submission materials. Its process means a changed source or pattern can require a fresh editorial or test-knit decision; a changed file is not automatically a changed acceptance. [3]

### 2. Source history provides a narrow analogy, not product proof

The current Git user manual describes a repository as a history of changes represented by commits, with branches, remote-tracking branches, and tags acting as references to commits. This provides a useful documentary analogy for the film: a source can have named revisions and branches rather than one mutable file pretending to be every state. Git’s model is not evidence that Stitch & Scale uses Git, exposes commits, retains revisions, detects edits, or provides version control. The film must not mention Git or imply technical implementation. [4]

The bounded creative translation is a fictional paper source card with fields `SOURCE`, `REVISION`, `EDITABLE?`, `REVIEWED SNAPSHOT`, `RELEASED COPY`, `WHO MAY CHANGE IT?`, and `REVIEW AGAIN IF CHANGED`. The cards are illustrative and do not become a current UI or a guarantee of history preservation.

### 3. Plain-language guidance supports naming the edit boundary

Digital.gov’s current plain-language guide frames content design as writing, designing, and testing for a specific audience so readers understand what they need to understand. For this angle, the useful implication is that a designer should be able to see whether a control or record means “edit this source,” “create a new revision,” or “do not change this released copy.” This is a design principle, not evidence that a product labels or enforces those states. [5]

The research does not support claims that Stitch & Scale automatically tracks versions, prevents edits after approval, preserves a history, detects stale reviews, routes re-review, or distinguishes source from export. Those capabilities require current product proof with exact labels, state transitions, owners, and version/date context.

### 4. Seasonal and submission context

Current 2026 craft-publication calls and Knitty’s Winter 2026 submission context show that designers work against destination-specific stages and deadlines, but they do not authorize urgency, publication affiliation, or a specific deadline claim for Stitch & Scale. The angle is useful during any revision or submission cycle without naming a calendar pressure. Any actual event, publisher, deadline, or call-to-action must be revalidated against an active campaign brief. [3] [6] [7]

### 5. Accessibility, audio, and mobile presentation

The film should show one edit-boundary card at a time at readable scale. Captions must remain outside source, revision, reviewed, released, permission, owner, and re-review fields. Use one narrator family, human-verified captions, caption-on and caption-free review, and original or cleared audio. W3C guidance supports captions and preserving information relationships, but it does not prove that a source-history surface is accessible or understandable for every user. TikTok and YouTube platform help pages provide current caption workflows; automatic captions remain draft-only until human review. [8] [9] [10]

## Uncertainty and limits

CYC and Knitty describe craft-production and publication workflows, not Stitch & Scale’s implementation. Git documents Git’s own source-history model, not a product capability. Digital.gov describes audience-specific content practice, not automatic edit-boundary detection. The research does not establish that a changed record is wrong, that a reviewer must approve every change, that a contract is present, or that a submission was accepted. Technical editing, physical print review, chart readability, schematic scale, test knitting, rights, and publication decision remain distinct human gates.

No source supports claims about revenue, adoption, accuracy, customer outcomes, final pricing, credentials, testimonials, urgency, or unverified product capabilities. David is a developer whose late mother knitted; he must not be presented as a knitter, knitwear designer, pattern designer, technical editor, tester, publisher, accountant, lawyer, or tax adviser.

## Decision changed by research

Research changed the concept from a generic “version history” idea into the narrower **editability-state** angle. The film will show a fictional source card moving through three visibly different states: `EDITABLE SOURCE`, `REVIEWED SNAPSHOT`, and `RELEASED COPY`. A pencil reaches for the released copy, stops at `EDIT AGAIN?`, and moves back to a new revision card marked `RE-REVIEW REQUIRED`. The emotional turn is from “I can change this file” to “I must know which state I am changing and what review the change reopens.”

The proposed proof surface is `EDIT E-001 / SOURCE_ID / REVISION_ID / STATE / EDITABLE_BY / EDIT_SCOPE / REVIEWED_SNAPSHOT / RELEASED_COPY / HISTORY_REFERENCE / CHANGE_REASON / RE-REVIEW_TRIGGER / OWNER / RIGHTS / LIMITATIONS / STATUS`. No current Stitch & Scale editability surface is verified.

The selected angle is not a renamed pass-233 interpretation concept. It is not about understanding a requirement; it is about the **permission and review boundary around changing a named source or artifact**. It also does not reopen the imported `false-completion` or `release-gate-roster` reservations.

## Research references

[1]: https://www.craftyarncouncil.com/pitfalls.html "Craft Yarn Council — Designer Pitfalls"
[2]: https://www.craftyarncouncil.com/industry.html "Craft Yarn Council — Congratulations! You’ve Received the Go Ahead"
[3]: https://knitty.com/subguide.php "Knitty — Design Or Write For Knitty; updated June 17, 2026"
[4]: https://git-scm.com/docs/user-manual "Git — User Manual"
[5]: https://digital.gov/guides/plain-language "Digital.gov — Plain language"
[6]: https://lainepublishing.com/en-us/pages/submissions "Laine Publishing — Submissions"
[7]: https://tkga.org/current-call-for-designs/ "The Knitting Guild Association — Current Call for Designs"
[8]: https://www.w3.org/WAI/media/av/captions/ "W3C WAI — Captions/Subtitles"
[9]: https://support.tiktok.com/en/using-tiktok/creating-videos/accessibility "TikTok Support — Accessibility for your videos"
[10]: https://support.google.com/youtube/answer/2734796?hl=en "YouTube Help — Create subtitles & captions"

# Pass 239 wide-research findings — `representation-state`

**Research date:** 2026-08-20 09:02 WAT  
**Pass:** 239  
**Angle under consideration:** `representation-state`  
**Researcher:** Manus AI, Director/Planner  
**Campaign assumption:** Founding-tester recruitment through the free demo and early-access cohort, because no active brief was present in the refreshed repository. The audience is independent knitwear designers and pattern publishers handling pattern prose, charts, schematics, measurements, tables, photographs, and destination-specific submissions. The proposed form is a 40–45 second organic 9:16 founder short for Instagram Reels, TikTok, and YouTube Shorts. Tone is quiet, precise, craft-respecting, local-first, and explicit about each representation’s role, presence, scope, and review limit. No paid placement is assumed. This is a planning assumption, not a confirmed campaign brief.

## Fresh question

**When one craft concept appears as prose, chart, schematic, table, photograph, or video, what representation is present, absent, or intentionally not applicable, what role does it play, and what human review prevents a viewer from treating one representation as proof of another?**

The question is distinct from pass 238 `normalization-state`, which preserves raw and canonical labels within one vocabulary or record. Pass 239 focuses on **representation role and presence**: whether a concept is represented as instructions, chart, schematic, measurement table, photograph, or video, and what each representation can and cannot show. It is distinct from `chart-parity`, which asks whether chart and written instructions are semantically equivalent; from `chart-description`, which asks for a textual alternative or description; from `evidence-type` and `evidence-package-state`, which concern evidence purpose or package completeness; from `accessibility-state`, which scopes an accessibility review; and from `crosswalk-state`, which maps terms between vocabularies.

## Evidence gathered

### 1. CYC presents several pattern representations with different roles

The Craft Yarn Council’s current “How to Read a Knitting Pattern” guidance explains that abbreviations and terms compress instructions, and that symbols such as asterisks, brackets, and parentheses represent repetition or grouped operations. It distinguishes rows, rounds, right side/wrong side, repeated instructions, and size-specific shaping. A written instruction is therefore an action sequence with order and scope, not merely a label. [1]

CYC’s current knit-chart-symbol guidance says charts may be used in addition to or instead of words, that standardized symbols have variations, and that the pattern key must be consulted for variations, especially cable symbols. A chart is a representation with a legend and reading convention; it is not automatically the same as prose or a complete technical review. [2]

CYC’s current schematic guidance defines a schematic as a visual rendering of a knit or crochet piece with relevant measurements. It provides an overview of size and shape, a fit reference, and a template for modifying size. A schematic is not the same representation as instructions, a chart, a photograph, or a body-measurement table. [3]

CYC’s current project guidance separately requires electronic instructions, printouts, measurements by size, project schematics, and charts where applicable. These are related submission components but remain distinct representations with distinct roles. [4]

### 2. Craft workflow can intentionally include multiple representations

CYC’s current pattern-writing overview explicitly lists written patterns, video tutorials, charts, graphs, schematics, and patterns that include all of the above. It also emphasizes taking notes during making, transcribing them, checking terminology and sizing, technical editing, and testing before release. This supports a representation map with `ROLE`, `PRESENT?`, `SCOPE`, `SOURCE`, `AUDIENCE`, and `REVIEW LIMIT`, not a generic completeness badge. [5]

Knitty’s current June 17, 2026 submission guidance requires a complete text-only pattern document, separate image files, individual chart files when needed, and a schematic file for garments. It says photos should show relevant design features, charts and schematics are separate files, and work is edited to match Knitty style. These requirements are destination-specific; one representation’s presence does not prove the package is accepted or technically correct. [6]

### 3. Accessibility requires structure and alternatives, not visual similarity

W3C’s current tables tutorial states that accessible data tables need markup identifying header and data cells and their relationships. It explains that screen readers use these associations to provide context, and that visual cues alone are insufficient. It also warns that table markup can be lost during conversion between formats. [7]

W3C’s complex-image guidance treats complex images as containing substantial information and calls for a two-part text alternative. This supports a production rule for the short: a dense schematic, chart, or table cannot be treated as accessible merely because it is visible; a text description or structured alternative requires its own human review. [8]

The visual opportunity is a representation rail for one fictional `DESIGN D-01`: `PROSE / PRESENT`, `CHART / PRESENT`, `SCHEMATIC / PRESENT`, `MEASUREMENT TABLE / PRESENT`, `PHOTO / CONTEXT ONLY`, `VIDEO / NOT PROVIDED`, and `TEXT ALTERNATIVE / REVIEW REQUIRED`. The film can then show that `PRESENT` means “this representation exists,” not “the representations agree, are readable, are accessible, or are publication-ready.”

## Uncertainty and limits

CYC and Knitty document craft workflow and destination requirements, not Stitch & Scale functionality. W3C documents accessibility techniques and structural requirements, not product conformance. Representation presence cannot prove semantic parity, technical editing, math, gauge, fit, chart readability, schematic scale, test-knit success, rights, accessibility conformance, destination acceptance, publication, or user outcome. `PHOTO / CONTEXT ONLY` cannot prove pattern instructions; `VIDEO / NOT PROVIDED` cannot be treated as a defect without a destination requirement; `TEXT ALTERNATIVE / REVIEW REQUIRED` is not an accessibility certification.

No source supports claims about revenue, adoption, accuracy, customer outcomes, final pricing, credentials, testimonials, urgency, or unverified product capabilities. David is a developer whose late mother knitted; he must not be presented as a knitter, knitwear designer, pattern designer, technical editor, tester, publisher, accountant, lawyer, or tax adviser.

## Decision changed by research

Research changed the concept from a generic “all formats present” idea into the narrower **representation-state** angle. The film will show one fictional design represented by prose, chart, schematic, measurement table, photo, and video rows; each row carries a role, presence state, scope, and review limit. The final state is `REPRESENTATION PRESENT ≠ REPRESENTATIONS AGREE / HUMAN REVIEW REQUIRED`.

The selected angle is materially different from pass 238: it is not about raw-to-canonical labels or normalization; it is about which representation exists, what it is for, and what it cannot prove. It does not reopen the imported `false-completion` or `release-gate-roster` reservations.

## Research references

[1]: https://www.craftyarncouncil.com/standards/how-to-read-knitting-pattern "Craft Yarn Council — How to Read a Knitting Pattern"
[2]: https://www.craftyarncouncil.com/standards/knit-chart-symbols "Craft Yarn Council — Knit Chart Symbols"
[3]: https://www.craftyarncouncil.com/standards/schematics "Craft Yarn Council — Schematics"
[4]: https://www.craftyarncouncil.com/industry.html "Craft Yarn Council — Congratulations! You’ve Received the Go Ahead"
[5]: https://www.craftyarncouncil.com/blog/ydkwydk-how-write-your-own-pattern "Craft Yarn Council — YDKWYDK: How to write your own pattern"
[6]: https://knitty.com/subguide.php "Knitty — Design Or Write For Knitty; updated June 17, 2026"
[7]: https://www.w3.org/WAI/tutorials/tables/ "W3C WAI — Tables Tutorial"
[8]: https://www.w3.org/WAI/tutorials/images/complex/ "W3C WAI — Complex Images"

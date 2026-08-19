# Pass 169 Browser / Source Findings — Reversibility State

**Research question:** When a user changes or removes something, can they predict the consequence, review it, reverse it, or clearly understand that reversal is unavailable before the change becomes final?

**Selected angle:** `reversibility-state` — Changed is not undoable.

## Apple Human Interface Guidelines

Apple's Undo and Redo guidance says people expect undo and redo to reverse recent actions. It emphasizes helping users predict the result, highlighting what changed, supporting multiple undo operations where appropriate, and briefly describing the operation being undone or redone. The pass-169 use is a conceptual design boundary for a fictional action record, not evidence that Stitch & Scale implements undo or redo.

Source: [Apple Human Interface Guidelines — Undo and Redo](https://developer.apple.com/design/human-interface-guidelines/undo-and-redo).

## W3C Error Prevention

W3C's Understanding SC 3.3.4 guidance addresses pages that cause legal commitments or financial transactions, modify or delete user-controllable data, or submit test responses. It identifies at least one of reversibility, checking with an opportunity to correct, or review/confirmation before finalization. The pass-169 concept uses this as an accessibility and risk boundary only; it does not claim that Stitch & Scale falls within the criterion's scope or conforms to it.

Source: [W3C Understanding SC 3.3.4: Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html).

## Material Design 3 Snackbar guidance

Material Design describes snackbars as short process updates that should not interrupt the user, may include one action such as Undo, and should not be the only way to access a core use case. Its web accessibility guidance says auto-dismissing snackbar information should also be communicated inline or near the action, and that a snackbar must not obscure focused actionable elements. The pass-169 use is a mobile visual and caption-placement boundary, not evidence that the product uses snackbars or provides undo.

Source: [Material Design 3 — Snackbar Guidelines](https://m3.material.io/components/snackbar/guidelines).

## U.S. Web Design System / VA destructive-button ADR

The U.S. Department of Veterans Affairs design-system decision record says destructive actions should not rely on color alone, should communicate what will happen, and should provide error prevention. It also records an explicit design decision to provide friction before completion and, when possible, an undo capability or a clear explanation when an action is irreversible. The pass-169 use is a general interface-design reference, not a claim about Stitch & Scale's current buttons, confirmation dialogs, or accessibility implementation.

Source: [VA Design System — Button Design Decisions](https://design.va.gov/components/button/design-decisions/).

## Research decision

The research changes the concept from merely naming a change or a deletion scope to showing the **reversibility contract before finality**: what action is about to happen, what the before-state is, what consequence follows, whether the action is reversible, how long reversal remains available, what the undo result is, and what explicit disclosure or review is required when reversal is unavailable.

The selected angle is `reversibility-state`, hook **“Changed is not undoable.”** The proof surface is a fictional action card with `ACTION A-001 / BEFORE / CHANGE / CONSEQUENCE / PREVIEW / REVERSIBLE_UNTIL / UNDO_RESULT / IRREVERSIBLE_DISCLOSURE / REVIEWED / DISPOSITION`. No current product capture or proof-registry record was supplied.

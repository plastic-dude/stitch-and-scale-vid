# Video Operations Architecture Research — 2026-08-20

**Question:** Is the current Stitch & Scale multi-agent video setup more complex than the work requires, and what simpler operating pattern preserves safety while improving throughput?

## Decision changed by research

Yes. The repair should use a **central Director-owned workflow with a small number of specialized roles**, not peer agents repeatedly handing off through overlapping prompts. The workflow should be deterministic wherever the path is known, use specialized review only where separation materially improves quality, and store a compact current state plus links to immutable artifacts. The schedule should invoke the Director loop; downstream roles should not independently create competing schedules or reinterpret the current state.

## Evidence table

| Source and date | Evidence | Limit | Design decision |
|---|---|---|---|
| [Anthropic, Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) — 2024-12-19, page notes some tooling has since changed | Anthropic distinguishes predefined workflows from dynamically directed agents and recommends finding the simplest solution possible, adding complexity only when needed. It describes prompt chaining with programmatic gates, routing for distinct categories, and evaluator-optimizer loops where measurable refinement is useful. It emphasizes that agents should pause for human feedback at checkpoints and use stopping conditions. | General engineering guidance, not a Stitch & Scale-specific benchmark. | Convert the video operation to a fixed workflow with deterministic gates; reserve model autonomy for fresh research and creative synthesis. Add explicit stop states and one owner per work item. |
| [Anthropic, Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) — 2025-09-29, accessed 2026-08-20 | Context is a finite resource with diminishing returns. The guidance recommends the smallest high-signal context, clear prompts, minimal-overlap tools, just-in-time retrieval, structured note-taking, and concise sub-agent summaries rather than loading every artifact into every context. | Research guidance is not a direct measurement of this repository’s token usage. | Replace repeated playbook paragraphs with one canonical contract, one current-state pointer, one blocker/next-action record, and on-demand historical artifacts. Require sub-agents to return bounded summaries. |
| [OpenAI, A practical guide to building agents](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/) — accessed 2026-08-20 | OpenAI recommends maximizing a single agent’s capabilities before adding agents, using prompt templates, clear tools and instructions, explicit run exit conditions, manager coordination when one agent should retain workflow control, layered guardrails, risk ratings, and human intervention for high-risk actions or repeated failures. | Vendor guidance; not a guarantee that one agent is always sufficient. | Use a Director as the sole workflow owner. Treat Research, Production, and QA as bounded roles or subroutines with explicit inputs/outputs, not autonomous peer authorities. Add retry limits and escalation conditions. |
| [Microsoft Agent Framework, Handoff orchestration](https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/handoff) — accessed 2026-08-20 | Microsoft distinguishes decentralized handoff, where the receiving agent takes full ownership, from agent-as-tools, where a primary agent retains overall responsibility. It documents checkpointing and stable agent IDs, and shows human approval as an explicit pause for sensitive operations. | Page is a framework reference and partially gated; it does not prescribe the repository’s file layout. | Avoid decentralized handoff for this production room. Use central ownership with stable role IDs, durable checkpoints, and explicit approval gates for publication or any irreversible action. |

## Synthesis

The current setup has a real safety reason for its strictness, but its control plane is over-specified: repeated playbook text, per-pass artifact fan-out, schema drift between handoffs, and implicit absence-based review state. The redesign should preserve the safety content while reducing the number of things agents must remember at once.

The recommended pattern is a **Director-owned production board**:

`INTAKE → RESEARCHED → CONCEPT_BLOCKED → PACKAGE_READY → QA_REVIEW → OWNER_APPROVAL → GENERATION_ELIGIBLE → GENERATED_REVIEW → PUBLISH_ELIGIBLE → PUBLISHED`

A work item may enter `BLOCKED` from any stage. `BLOCKED` requires one reason code and one next action. No agent may skip a state, approve its own work, or change `GENERATION_ELIGIBLE` without current proof, rights, captions, audio, platform, filename, and acceptance evidence. Generation and upload remain outside the current user-authorized scope.

The role model is:

| Role | Owns | Must not own |
|---|---|---|
| **Director/Planner** | Research question, angle selection, campaign assumption, brief/script/package decision, blocker, next action, and final handoff | Video generation, upload, silent approval, or rewriting reviewer evidence |
| **Researcher** | Fresh-source collection and bounded evidence memo | Concept approval, product claims, or publication |
| **Producer/Implementer** | Turning an approved package into production-ready assets when explicitly authorized | Changing claims, proof state, rights, or angle without Director review |
| **QA/Reviewer** | Deterministic schema, claims, rights, caption/audio, platform, filename, and acceptance checks | Rewriting creative intent or self-approving a failed gate |
| **Owner/Approver** | Human decisions on product proof, rights, approval, and irreversible publication | Delegating owner sign-off implicitly to an agent |

The repair therefore targets coordination simplicity, not removal of safety. Historical artifacts remain immutable; the current pointer becomes the only default read surface; and every role reports the same small handoff schema.

## References

[1]: https://www.anthropic.com/engineering/building-effective-agents "Anthropic — Building effective agents"
[2]: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents "Anthropic — Effective context engineering for AI agents"
[3]: https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/ "OpenAI — A practical guide to building agents"
[4]: https://learn.microsoft.com/en-us/agent-framework/workflows/orchestrations/handoff "Microsoft Agent Framework — Handoff orchestration"

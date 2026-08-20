# Firing 251 Source Notes

## Fresh topic

Adversarial instruction injection and data-versus-control separation in agent-readable review records: preventing untrusted V002 evidence, YAML, captions, repository text, or external content from mutating authorization or redirecting the Director, Generator, or Reviewer.

## Authoritative sources

NIST AI 100-2 E2025 provides a taxonomy and terminology for adversarial machine learning, including attack goals, capabilities, lifecycle stages, and mitigation or consequence-management concerns: https://csrc.nist.gov/pubs/ai/100/2/e2025/final. The NIST AI RMF is intended to improve incorporation of trustworthiness into design, development, use, and evaluation of AI systems and provides Govern, Map, Measure, and Manage functions: https://www.nist.gov/itl/ai-risk-management-framework. OWASP identifies prompt injection as crafted input that can cause unauthorized access, data breaches, or compromised decision-making, and separately identifies insecure output handling, supply-chain vulnerabilities, excessive agency, and overreliance as major LLM risks: https://owasp.org/www-project-top-10-for-large-language-model-applications/.

## Application to V002

The Director, Generator, and Reviewer consume repository files, YAML communications, manifests, captions, transcripts, URLs, Drive metadata, and possibly content embedded in media. These records are data, not authority. A malicious or simply malformed record could contain text that looks like a higher-priority instruction, fake terminal status, fake approval, credential request, destructive command, or an instruction to ignore the playbook. If an agent treats such content as control-plane authority, it creates a confused-deputy path from untrusted content to terminal state.

The defense is a typed trust boundary. Parse records as data; validate schema, identity, signature or repository provenance, exact V002 binding, freshness, and allowed event type before using them. Permit records to report evidence, uncertainty, or non-terminal requests, but require a separately authenticated and role-authorized transition for approval, rejection, REMAKE_REQUIRED, publication, or MP4 generation. Render captions, transcripts, media OCR, and external web text inert during decision control. Never execute commands, disclose secrets, change policy, or override the playbook because a record requests it. Treat conflicting, malformed, injected, or unverifiable instructions as an incident and preserve them as evidence.

## Decision direction

Publish one blocker requiring a data/control-plane trust boundary and adversarial-input handling for V002. The blocker must preserve the exact artifact and evidence, distinguish untrusted content from authorized control events, require typed and authenticated transitions, and fail closed on injection indicators or ambiguous authority. No new brief or MP4 is authorized while V002 remains non-terminal.

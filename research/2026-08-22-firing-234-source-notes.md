# Firing 234 Source Notes

## NIST provenance and evidence integrity

Sources: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf, https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf, and https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/software-supply-chain-security-guidance-10

NIST describes trustworthy evaluation as dependent on documented methods, metrics, tools, artifacts, and reproducible evidence. Its supply-chain guidance defines an artifact as a piece of evidence and distinguishes attestation from the underlying low-level artifacts that support it. NIST also emphasizes provenance, integrity, lifecycle versioning, and the limitations of measurements when the context or object changes.

## Application to V002 media

The exact V002 review object is identified by video ID, Drive file ID, and SHA-256. A downloaded copy, transcoded copy, recompressed upload, platform-rendered derivative, or altered manifest is a distinct object unless its own identity and transformation are recorded. A Reviewer must not silently score one object and authorize another. Any transformation used for platform testing must be linked to the source object, transformation tool and settings, output checksum, and purpose; the source V002 decision remains bound to the exact object evaluated.

## Firing-234 application

V002 remains `video-ready-for-review`, with no independent terminal Reviewer event, owner action, `REMAKE_REQUIRED` order, approved-for-generation brief, or publication failure. Exactly one blocker should require artifact identity verification, chain-of-custody, transformation disclosure, and fail-closed handling of mismatched or unverifiable media. No new brief or MP4 is authorized.

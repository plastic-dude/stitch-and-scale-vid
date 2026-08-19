# Pass 171 Browser / Source Findings — Observability State

**Research question:** When a workflow appears quiet, what evidence shows whether it is healthy, waiting, progressing, or silently failing?

**Selected angle:** `observability-state` — No error is not observable.

## OpenTelemetry

OpenTelemetry describes observability as the ability to understand a system's internal state by examining outputs, typically through telemetry such as traces, metrics, and logs. It explains that instrumentation must emit those signals and that the data must reach an observability backend. The pass-171 use is a conceptual metaphor for inspectable workflow evidence, not a claim that Stitch & Scale uses OpenTelemetry, telemetry, distributed tracing, metrics, logs, or an observability backend.

Source: [OpenTelemetry — What is OpenTelemetry?](https://opentelemetry.io/docs/what-is-opentelemetry/).

## W3C Status Messages

W3C's Understanding SC 4.1.3 says status messages can be programmatically determined so assistive technologies can present them without taking focus. It defines status messages as information about action results, waiting state, process progress, or errors, and emphasizes awareness without unnecessary interruption. The pass-171 use is a production and accessibility boundary for the fictional proof card; it does not claim WCAG conformance or a live-region implementation in Stitch & Scale.

Source: [W3C Understanding SC 4.1.3: Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html).

## NIST continuous monitoring

NIST SP 800-137 describes continuous monitoring as a strategy and program that provides visibility into assets, threats, vulnerabilities, and the effectiveness of deployed controls, with information to respond when observations indicate inadequacy. The pass-171 use is conceptual language about distinguishing healthy, waiting, progressing, and silently failing states; it does not claim that Stitch & Scale performs continuous monitoring or has security controls.

Source: [NIST SP 800-137: Information Security Continuous Monitoring](https://csrc.nist.gov/pubs/sp/800/137/final).

## Research decision

The research changes the concept from “no error is shown” to “the workflow's state is observable enough to distinguish healthy, waiting, progressing, stale, and failed.” The fictional proof surface is `PROCESS P-001 / EXPECTED / OBSERVED / LAST_UPDATED / SIGNAL / STATE / GAP / REVIEWED / DISPOSITION`. A quiet screen is not treated as success. No current product capture or proof-registry record was supplied.

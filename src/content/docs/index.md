---
title: Modular Agent
description: Build AI workflows like a modular synth — patch extensible agents together visually into real-time pipelines.
---

**Modular Agent** is a framework for assembling AI workflows the way you would patch a modular synth.
Patch together agents that each do one simple thing, and you get real-time pipelines spanning LLMs, databases, messaging, and more.

![Workflow Editor](../../assets/screenshot_editor.jpg)

## Features

### Agents

> Agent: Any part or process of the mind that by itself is simple enough to understand — even though the interactions among groups of such agents may produce phenomena that are much harder to understand.
> — Marvin Minsky, _The Society of Mind_

- **A Wide Range of Agents** — LLM, Web/HTTP, Slack, SQL databases, screen capture, and more
- **Extensible** — Add agent plugins as Rust crates
- **Parallel Execution** — Each agent runs independently, in parallel
- **Stream-Based Data Flow** — Data flows between agents in real time

### Runtime

- **Local Execution** — Runs as a local application, with no cloud dependency.
- **Cross-Platform** — Windows, macOS, Linux
- **Embeddable** — The core runtime has minimal dependencies and embeds into Rust applications: CLI tools, desktop apps, servers, mobile devices

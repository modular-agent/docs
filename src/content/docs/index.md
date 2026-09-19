---
title: Modular Agent
description: Build AI workflows like a modular synth — patch extensible modules together visually into real-time pipelines.
template: splash
prev: false
next: false
hero:
  tagline: Assemble AI workflows the way you would patch a modular synth. Modules that each do one simple thing patch together into real-time pipelines spanning LLMs, databases, and messaging.
  image:
    alt: ""
    file: ../../assets/app_icon.png
  actions:
    - text: Get Started
      link: /docs/getting-started/installation/
      icon: right-arrow
      variant: primary
    - text: GitHub
      link: https://github.com/modular-agent/modular-agent/
      icon: external
      variant: minimal
      attrs:
        target: _blank
        rel: noopener noreferrer
---

<div class="not-content support">
  <h2>Support the Project</h2>
  <p>Modular Agent is new and under active development. Starring the repository helps other people find it.</p>
  <a
    class="star-button"
    href="https://github.com/modular-agent/modular-agent/"
    target="_blank"
    rel="noopener noreferrer">Star on GitHub</a>
</div>

## Features

### Modules

- **A Wide Range of Modules** — LLM, Web/HTTP, Slack, SQL databases, screen capture, and more
- **Extensible** — Add module plugins as Rust crates
- **Parallel Execution** — Each module runs independently, in parallel
- **Stream-Based Data Flow** — Data flows between modules in real time

### Runtime

- **Local Execution** — Runs as a local application, with no cloud dependency.
- **Cross-Platform** — Windows, macOS, Linux
- **Embeddable** — The core runtime has minimal dependencies and embeds into Rust applications: CLI tools, desktop apps, servers, mobile devices

![Workflow Editor](../../assets/screenshot_editor.jpg)

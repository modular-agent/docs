---
id: intro
slug: /
title: What is Modular Agent?
sidebar_position: 1
---

# Modular Agent?

**Modular Agent** is a framework for building AI workflows like a modular synth: patch extensible agents together into real-time pipelines spanning LLMs, databases, messaging, and more. Privacy-first, no cloud required.

![Workflow Editor](/img/screenshot_editor.jpg)

## How It Works

1. **Presets** are workflow configurations, a graph of connected agents
2. **Agents** are processing units (e.g., "Chat Completion", "HTTP Request", "Text Template")
3. Each agent has **input/output ports**. Connect them by dragging between ports
4. Press **Play** to start the pipeline. Data flows through agents in real time

## Features

### Agents

- ⚡ **Stream-Based Data Flow** — Real-time data streaming between agents
- 🤖 **Built-in Agents** — LLM, Web/HTTP, Slack, SQL databases, screen capture, and more
- 🧩 **Extensible** — Add agent plugins via Rust crates

### Runtime

- 🏠 **Local Execution** — All processing happens on your machine; no cloud dependency
- 💻 **Cross-Platform** — Windows, macOS, Linux
- 📦 **Embeddable** — The core runtime has minimal dependencies and can be embedded into CLI tools, desktop apps, servers, or any Rust application

### Editor

- 🎨 **Visual Workflow Editor** — Node-based drag-and-drop interface for designing agent pipelines
- 💾 **Preset Management** — Save, load, import/export workflow configurations
- 🚀 **Auto-Start** — Configure presets to run on app launch
- 🔲 **System Tray** — Run workflows in the background

## Project Structure

Modular Agent spans a family of repositories:

| Repository | Purpose |
|-----------|---------|
| [modular-agent-desktop](https://github.com/modular-agent/modular-agent-desktop) | Visual workflow editor (Tauri 2 + Svelte 5) |
| [modular-agent-core](https://github.com/modular-agent/modular-agent-core) | Core orchestration runtime (Rust) |
| [modular-agent-std](https://github.com/modular-agent/modular-agent-std), [llm](https://github.com/modular-agent/modular-agent-llm), [web](https://github.com/modular-agent/modular-agent-web), ... | Agent plugin libraries |

See [Agent Packages](/agent-packages) for the full list.

## Where to Go Next

- **[Installation](/getting-started/installation)** — Build and run the desktop app
- **[Your First Workflow](/getting-started/first-workflow)** — Create a workflow in the visual editor
- **[Core Concepts](/concepts/architecture)** — Understand agents, presets, and data flow
- **[Building Agents](/building-agents/your-first-agent)** — Write your own agents in Rust
- **[Embedding](/embedding/rust-api)** — Run workflows inside your own Rust application

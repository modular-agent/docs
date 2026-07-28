---
title: Installation
sidebar_position: 1
---

# Installation

:::info[Developer Preview]
Modular Agent Desktop is a **developer release**: pre-built binaries are not available yet, so you build the app from source.
:::

## Prerequisites

- [Rust](https://www.rust-lang.org/tools/install) 1.85+
- [Node.js](https://nodejs.org/) 20+
- [Tauri Prerequisites](https://v2.tauri.app/start/prerequisites/) — platform-specific dependencies (WebView2 on Windows, Xcode Command Line Tools on macOS, `webkit2gtk` and friends on Linux)

## Build the Desktop App

Clone and build [modular-agent-desktop](https://github.com/modular-agent/modular-agent/tree/main/apps/desktop):

```bash
git clone https://github.com/modular-agent/modular-agent.git
cd modular-agent/apps/desktop
npm install              # Install dependencies
npm run tauri build      # Build for production
```

After building, either run the executable directly or use the installer. Cargo artifacts
land in the workspace `target/` directory at the repository root:

- **Executable** — `target/release/modular-agent-desktop.exe` (Windows) / `modular-agent-desktop` (macOS/Linux)
- **Installer** — `target/release/bundle/nsis/*-setup.exe` (Windows) / `dmg/*.dmg` (macOS) / `deb/*.deb` (Linux)

### Development Mode

For a faster edit-run cycle while developing:

```bash
npm run tauri dev
```

## Choosing Agent Packages

The default build bundles the standard agent packages (LLM, web, Slack, SQL databases, audio, and more). To choose which agent crates to compile in, use the **ma-config** wizard. See [Custom Build](/desktop/custom-build).

## Using the Core Library Only

If you want to embed the runtime in your own Rust application without the desktop app:

```toml
[dependencies]
modular-agent-core = "0.23"
```

See [Embedding — Rust API](/embedding/rust-api) for details.

## Next Steps

Launch the app and continue with [Your First Workflow](/getting-started/first-workflow).

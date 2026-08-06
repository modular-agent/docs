---
title: Installation
description: Build the Modular Agent desktop app from source, and choose which agent packages are compiled in.
---

:::note[Developer Preview]
Pre-built binaries are not available yet, so build the app from source.
:::

## Prerequisites

- [Rust](https://www.rust-lang.org/tools/install) 1.85+
- [Node.js](https://nodejs.org/) 20+
- [Tauri Prerequisites](https://v2.tauri.app/start/prerequisites/)

## Build the Desktop App

Clone and build [modular-agent](https://github.com/modular-agent/modular-agent):

```bash
git clone https://github.com/modular-agent/modular-agent.git
cd modular-agent/apps/desktop
npm install              # Install dependencies
npm run tauri build      # Build for production
```

After building, either run the executable directly or use the installer. Cargo artifacts
land in the shared workspace `target/` directory at the repository root:

- **Executable** — `target/release/modular-agent-desktop.exe` (Windows) / `modular-agent-desktop` (macOS / Linux)
- **Installer** — `target/release/bundle/nsis/*-setup.exe` (Windows) / `dmg/*.dmg` (macOS) / `deb/*.deb` (Linux)

### Development Mode

For a faster edit-run cycle while developing:

```bash
npm run tauri dev
```

## Choosing Agent Packages

The default build links in LLM, web, Slack, SQL database, and audio agents, among others.
To customize which agent crates are compiled in, use the **ma-config** wizard. See [Custom Build](https://github.com/modular-agent/modular-agent/tree/main/apps/desktop#custom-build) for details.

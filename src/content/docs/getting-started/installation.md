---
title: Installation
description: Install Modular Agent with the one-command installer, or build the desktop app from source and add module packages.
---

## Prerequisites

Install the [Tauri prerequisites](https://v2.tauri.app/start/prerequisites/)
(Rust 1.85+, Node.js 20+, and the platform toolchain).

## Quick Install

One command clones the repository and builds from source. You choose whether to
build the
[desktop app](https://github.com/modular-agent/modular-agent/tree/main/apps/desktop)
or the [CLI](https://github.com/modular-agent/modular-agent/tree/main/apps/cli),
and whether to include the recommended module packages.

A first desktop build typically takes 20-40 minutes and ~10 GB of disk:

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/modular-agent/modular-agent/main/scripts/install.sh | sh
```

```powershell
# Windows (PowerShell)
irm https://raw.githubusercontent.com/modular-agent/modular-agent/main/scripts/install.ps1 | iex
```

To update later, run the same command again from the same directory: it pulls
the existing clones and rebuilds with the same configuration.

## Build the Desktop App Manually

If you prefer not to use the command above, the manual steps are as follows.

Clone and build [modular-agent](https://github.com/modular-agent/modular-agent):

```bash
git clone https://github.com/modular-agent/modular-agent.git
cd modular-agent/apps/desktop
npm install              # Install dependencies
npm run tauri build      # Build for production
```

After building, either run the executable directly or use the installer. Cargo artifacts
land in the shared workspace `target/` directory at the repository root:

- **Executable**
  - Windows: `target/release/modular-agent-desktop.exe`
  - macOS / Linux: `modular-agent-desktop`
- **Installer**
  - Windows: `target/release/bundle/nsis/*-setup.exe`
  - macOS: `dmg/*.dmg`
  - Linux: `deb/*.deb`

This is a minimal build: it links only the module crates that live in the repository —
**modular-agent-std** (standard utility modules) and **modular-agent-llm** (Claude, OpenAI,
and Ollama integrations). Everything else — web scraping, messaging, databases, and more —
comes from separate module packages.

### Development Mode

To build in development mode for a faster edit-run cycle, use the following
instead of `npm run tauri build`:

```bash
npm run tauri dev
```

## Adding Module Packages

Additional modules live in their own repositories and are linked into the app at build
time. Clone the packages you want into `custom_modules/` at the repository root, keeping
the repository name as the directory name:

```bash
cd custom_modules
git clone https://github.com/modular-agent/modular-agent-web.git
git clone https://github.com/modular-agent/modular-agent-sqlx.git
cd ..
```

For example, the following modules can be cloned from
[github.com/modular-agent](https://github.com/modular-agent/):

| Repository                                                                            | Modules                                          |
| ------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [modular-agent-lifelog](https://github.com/modular-agent/modular-agent-lifelog)       | Screen capture, window tracking modules          |
| [modular-agent-mattermost](https://github.com/modular-agent/modular-agent-mattermost) | Mattermost messaging modules                     |
| [modular-agent-monty](https://github.com/modular-agent/modular-agent-monty)           | Monty script modules                             |
| [modular-agent-slack](https://github.com/modular-agent/modular-agent-slack)           | Slack messaging modules                          |
| [modular-agent-sqlx](https://github.com/modular-agent/modular-agent-sqlx)             | SQL database modules (PostgreSQL, MySQL, SQLite) |
| [modular-agent-web](https://github.com/modular-agent/modular-agent-web)               | Web/HTTP, scraping, search, YouTube modules      |
| [modular-agent-zapcode](https://github.com/modular-agent/modular-agent-zapcode)       | ZapCode TypeScript script modules                |

Then run the **ma-config** wizard from the repository root to select modules and their
features — only cloned packages are offered:

```bash
cargo run --manifest-path tools/ma-config/Cargo.toml -- desktop
```

Confirm the selection and rebuild in `apps/desktop` with `npm run tauri build` (or
`npm run tauri dev`). The wizard leaves `Cargo.lock` alone apart from what the new
selection adds on the next build; pass `--update` to have it run `cargo update` as well.

The selection is saved to `apps/desktop/ma-config.toml` and reused on later runs. If the
wizard stops because a selected package is not cloned yet, clone it and re-run with
`--apply` to apply the saved selection without prompting.

The same steps work for the [ma](https://github.com/modular-agent/modular-agent/tree/main/apps/cli) command-line runner: pass `cli` instead of `desktop` to
ma-config, and build with `cargo build -p modular-agent-cli --release` (the binary lands
at `target/release/ma`). `ma run <patch>` runs one patch with stdin and stdout wired to
it, and `ma serve --workspace <dir>` keeps a workspace's patches running as a server —
the desktop app's `~/.modular_agent` directory runs unchanged. See the
[ma README](https://github.com/modular-agent/modular-agent/tree/main/apps/cli) for
options and the container image.

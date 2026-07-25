---
title: Custom Build
sidebar_position: 2
---

# Custom Build

The default desktop build bundles the standard set of agent packages. If you want a leaner binary, or want to add agent crates of your own, use the **ma-config** TUI wizard to select which agent packages are compiled in.

## Default Agent Packages

| Crate | Description |
|-------|-------------|
| [modular-agent-std](https://github.com/modular-agent/modular-agent-std) | Standard utility agents |
| [modular-agent-llm](https://github.com/modular-agent/modular-agent-llm) | LLM integrations (OpenAI, Ollama) |
| [modular-agent-web](https://github.com/modular-agent/modular-agent-web) | HTTP, scraping, search, YouTube |
| [modular-agent-slack](https://github.com/modular-agent/modular-agent-slack) | Slack messaging |
| [modular-agent-sqlx](https://github.com/modular-agent/modular-agent-sqlx) | SQLite, MySQL, PostgreSQL |
| [modular-agent-audio](https://github.com/modular-agent/modular-agent-audio) | Audio capture/transcription |
| [modular-agent-voicevox](https://github.com/modular-agent/modular-agent-voicevox) | VOICEVOX text-to-speech |
| [modular-agent-lifelog](https://github.com/modular-agent/modular-agent-lifelog) | Screen capture, window tracking |
| [modular-agent-monty](https://github.com/modular-agent/modular-agent-monty) | Monty agents |

## Running the Wizard

```bash
cd tools/ma-config && cargo run
```

The wizard lets you:

- Choose which agent packages to include
- Configure each package's source: **local path**, **Git repository**, or **crates.io**
- Select per-crate **feature flags**

The configuration is saved to `ma-config.toml` at the repository root, so subsequent rebuilds reuse it.

## Rebuild

After the wizard completes, build as usual:

```bash
npm run tauri dev      # development
npm run tauri build    # production
```

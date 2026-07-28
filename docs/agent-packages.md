---
title: Agent Packages
sidebar_position: 9
---

# Agent Packages

Agent implementations ship as separate Rust crates that plug into the core runtime. The desktop app bundles a standard set by default; you can select any combination with a [custom build](/desktop/custom-build).

## Applications

| Repository | Description |
|-----------|-------------|
| [modular-agent-desktop](https://github.com/modular-agent/modular-agent/tree/main/apps/desktop) | Visual preset editor (Tauri 2 + Svelte 5) |
| [modular-agent-chatvrm](https://github.com/modular-agent/modular-agent-chatvrm) | Avatar chat interface |

## Core

| Repository | Description |
|-----------|-------------|
| [modular-agent-core](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-core) | Orchestration engine and `#[modular_agent]` macro |
| [tauri-plugin-modular-agent](https://github.com/modular-agent/modular-agent/tree/main/crates/tauri-plugin-modular-agent) | Tauri plugin bridging the runtime to app frontends |

## Agent Libraries — General

| Repository | Description |
|-----------|-------------|
| [modular-agent-std](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-std) | Standard utility agents (50+) |
| [modular-agent-llm](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-llm) | LLM integrations: OpenAI, Ollama |

## Agent Libraries — Data Sources

| Repository | Description |
|-----------|-------------|
| [modular-agent-web](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-web) | HTTP, scraping, search, YouTube |
| [modular-agent-slack](https://github.com/modular-agent/modular-agent-slack) | Slack messaging |
| [modular-agent-lifelog](https://github.com/modular-agent/modular-agent-lifelog) | Screen capture, window tracking |

## Agent Libraries — Audio & Speech

| Repository | Description |
|-----------|-------------|
| [modular-agent-audio](https://github.com/modular-agent/modular-agent-audio) | Audio playback and capture |
| [modular-agent-voicevox](https://github.com/modular-agent/modular-agent-voicevox) | VOICEVOX text-to-speech |

## Agent Libraries — Databases

| Repository | Description |
|-----------|-------------|
| [modular-agent-sqlx](https://github.com/modular-agent/modular-agent-sqlx) | SQLite, MySQL, PostgreSQL |
| [modular-agent-duckdb](https://github.com/modular-agent/modular-agent-duckdb) | DuckDB analytics |
| [modular-agent-mongodb](https://github.com/modular-agent/modular-agent-mongodb) | MongoDB CRUD |
| [modular-agent-surrealdb](https://github.com/modular-agent/modular-agent-surrealdb) | SurrealDB graph database |
| [modular-agent-cozodb](https://github.com/modular-agent/modular-agent-cozodb) | Cozo logic database |
| [modular-agent-lancedb](https://github.com/modular-agent/modular-agent-lancedb) | LanceDB vector database |

## Writing Your Own

Any Rust crate can provide agents. See [Building Agents](/building-agents/your-first-agent).

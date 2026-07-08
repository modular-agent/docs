---
title: UI Hints & Metadata
sidebar_position: 4
---

# UI Hints & Metadata

Beyond ports and configs, agent definitions can carry presentation metadata that the desktop editor uses to render agent blocks.

## UI Hints

Attach hints at the definition level with `hint(...)`:

```rust
#[modular_agent(
    title = "My Agent",
    category = "LLM",
    hint(color = 3, width = 2, height = 1),
)]
```

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `color` | integer (1–7) | unset | Node color index |
| `width` | integer (>0) | 1 | Block width |
| `height` | integer (>0) | 1 | Block height |

Definition-level hints apply to **all instances** of the agent type. Individual instances can override them via `AgentSpec.extensions`.

## Titles and Categories

- `title` — Human-readable name shown on the block and in the catalog
- `category` — `/`-separated path controlling where the agent appears in the catalog (e.g. `"Database/SQL"`, `"Text/Transform"`)

## Descriptions

The agent's description comes from the `///` doc comment on the struct (or an explicit `description = "..."` attribute, which takes priority). A well-formed description documents:

- A one-line summary, then behavior details, edge cases, and error conditions
- `# Ports` — each input and output port
- `# Configuration` — each config with its default
- `# Global Configuration` — any app-level settings the agent reads (API keys, etc.)
- `# Example` — an input/output example when the transformation is non-trivial

This text is displayed in the editor and doubles as the package's reference documentation.

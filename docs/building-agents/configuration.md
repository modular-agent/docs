---
title: Configuration
sidebar_position: 2
---

# Configuration

Agents declare their configuration parameters in the `#[modular_agent]` macro. The editor renders an appropriate input widget for each type, and values are stored in the preset JSON.

## Configuration Types

| Type | Macro | Example |
|------|-------|---------|
| String | `string_config` | `string_config(name = "url", default = "")` |
| Integer | `integer_config` | `integer_config(name = "limit", default = 100)` |
| Number | `number_config` | `number_config(name = "threshold", default = 0.5)` |
| Boolean | `boolean_config` | `boolean_config(name = "enabled", default = true)` |
| Text (multiline) | `text_config` | `text_config(name = "script")` |
| Object (JSON) | `object_config` | `object_config(name = "options", hidden = true)` |
| Array | `array_config` | `array_config(name = "items")` |

## Reading Configs

Inside the agent, read current values through `self.configs()`:

```rust
let config = self.configs()?;
let url = config.get_string_or_default("url");    // definition default if unset
let limit = config.get_integer_or("limit", 100);  // custom fallback
let enabled = config.get_bool_or("enabled", true);
```

- `get_*_or_default(name)` — falls back to the default declared in the macro
- `get_*_or(name, fallback)` — falls back to the given value

Configs can change at runtime while the agent is running; react to changes with the `configs_changed()` hook (see [Lifecycle](/building-agents/lifecycle)).

## Reserved Names

Config names starting with `_` are reserved for stale-key migration (see below). The `#[modular_agent]` macro rejects them at compile time.

## Renaming Configs Safely

When you rename or remove a config key, presets saved with the old key still load: the runtime keeps the stale value under a `_`-prefixed key so your `new()` constructor can migrate it. The runtime strips the `_`-prefixed keys after `new()` returns.

## Global Configuration

Some settings, like API keys and endpoints, belong to the whole application, not to one agent instance. Agent packages can declare **global configs** (e.g. via `string_global_config` / `custom_global_config`), which the desktop app surfaces in its settings screen. Document them in the agent's doc comment under a `# Global Configuration` heading.

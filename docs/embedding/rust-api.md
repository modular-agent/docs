---
title: Rust API
sidebar_position: 1
---

# Embedding — Rust API

`modular-agent-core` is a regular Rust library with minimal dependencies. You can embed the runtime into CLI tools, desktop apps, servers, or any Rust application and run presets programmatically.

## Installation

```toml
[dependencies]
modular-agent-core = "0.23"
```

To trim dependencies, disable default features and enable only what you need:

```toml
[dependencies]
modular-agent-core = { version = "0.23", default-features = false, features = ["llm"] }
```

### Feature Flags

| Feature | Default | Description |
|---------|---------|-------------|
| `file` | Yes | File handling support for presets |
| `image` | Yes | Image processing via photon-rs |
| `llm` | Yes | LLM integration with `Message` and `ToolCall` types |
| `mcp` | Yes | Model Context Protocol integration |
| `test-utils` | No | Testing utilities |

## Quick Start

```rust
use modular_agent_core::{AgentError, AgentValue, ModularAgent, ModularAgentEvent};

#[tokio::main]
async fn main() -> Result<(), AgentError> {
    // 1. Initialize
    let ma = ModularAgent::init()?;
    ma.ready().await?;

    // 2. Subscribe to output BEFORE starting (avoid race condition)
    let mut rx = ma.subscribe_to_event(|event| {
        if let ModularAgentEvent::ExternalOutput(name, value) = event {
            if name == "output" { return Some(value); }
        }
        None
    });

    // 3. Load and start preset
    let preset_id = ma.open_preset_from_file("preset.json", None).await?;
    ma.start_preset(&preset_id).await?;

    // 4. Send input / receive output
    ma.write_external_input("input".into(), AgentValue::string("hello")).await?;
    if let Some(value) = rx.recv().await {
        println!("Output: {:?}", value);
    }

    // 5. Cleanup
    ma.stop_preset(&preset_id).await?;
    ma.quit();
    Ok(())
}
```

The preset file used here is the echo example from [External I/O](/concepts/external-io).

## Walkthrough

1. **Initialize** — `ModularAgent::init()` creates the orchestrator; `ready().await` waits until it can accept commands.
2. **Subscribe** — Register an event filter for the outputs you care about. Do this before starting the preset so you don't miss early output.
3. **Load & start** — `open_preset_from_file()` parses the preset JSON and instantiates its agents; `start_preset()` runs their `start()` hooks and begins routing.
4. **Exchange values** — `write_external_input(name, value)` feeds the network through [ExternalInputAgent](/concepts/external-io); outputs arrive on your subscription.
5. **Cleanup** — Stop the preset and call `quit()` to shut down.

## Adding Agent Packages

The core crate only ships the built-in external/local I/O agents. To use agents from packages like `modular-agent-std` or `modular-agent-llm`, add those crates as dependencies. Each registers its agent definitions with the runtime.

## Further Reference

Full API documentation is available at [docs.rs/modular-agent-core](https://docs.rs/modular-agent-core). A runnable CLI example lives in the core repository at `modular-agent-core/examples/cli.rs`:

```bash
cargo run --example cli -- <preset.json> [-i input] [-o output]
```

---
title: External I/O
sidebar_position: 3
---

# External I/O

A preset is a closed graph of agents. External I/O agents connect that graph to the outside world: your application code, or the desktop app UI.

## External Agents

External agents bridge external I/O with the agent network:

- **ExternalInputAgent** (`ExtIn->`) — Entry point for external input. Listens to `write_external_input()` calls and forwards values to connected agents.
- **ExternalOutputAgent** (`->ExtOut`) — Exit point for external output. Receives values from agents and emits a `ModularAgentEvent::ExternalOutput` event.

Each external agent has a `name` config; the name is how callers address it:

```rust
// Send a value to every ExternalInputAgent named "input"
ma.write_external_input("input".into(), AgentValue::string("hello")).await?;

// Receive values from every ExternalOutputAgent named "output"
let mut rx = ma.subscribe_to_event(|event| {
    if let ModularAgentEvent::ExternalOutput(name, value) = event {
        if name == "output" { return Some(value); }
    }
    None
});
```

:::tip[Subscribe before starting]
Subscribe to output events **before** starting the preset, otherwise a race condition can drop output produced during startup.
:::

## Local Agents

Local agents provide **preset-scoped variables**, a way to route values within one preset without drawing a connection line across the whole canvas:

- **LocalInputAgent** (`LocalIn->`) — Entry point for a preset-scoped local value
- **LocalOutputAgent** (`->LocalOut`) — Exit point for a preset-scoped local value

A value written to a `->LocalOut` named `foo` appears at every `LocalIn->` named `foo` in the same preset. This keeps large graphs readable.

## Example

The minimal echo preset connects an external input straight to an external output, so whatever you write to `input` comes back out of `output`:

```json
{
  "id": "echo",
  "name": "Echo",
  "agents": [
    {
      "id": "in",
      "def_name": "modular_agent_core::external_agent::ExternalInputAgent",
      "outputs": ["value"],
      "configs": { "name": "input" }
    },
    {
      "id": "out",
      "def_name": "modular_agent_core::external_agent::ExternalOutputAgent",
      "inputs": ["value"],
      "configs": { "name": "output" }
    }
  ],
  "connections": [
    {
      "source": "in",
      "source_handle": "value",
      "target": "out",
      "target_handle": "value"
    }
  ]
}
```

See [Embedding — Rust API](/embedding/rust-api) for running this preset from Rust.

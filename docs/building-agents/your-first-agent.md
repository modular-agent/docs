---
title: Your First Agent
sidebar_position: 1
---

# Your First Agent

Agents are Rust structs annotated with the `#[modular_agent]` macro and implementing the `AsAgent` trait. The example below is a complete, minimal one.

## A Complete Example

```rust
use modular_agent_core::{
    ModularAgent, AgentContext, AgentData, AgentError, AgentSpec, AgentValue, AsAgent,
    modular_agent, async_trait,
};

// Port names as constants at module top
const PORT_INPUT: &str = "input";
const PORT_OUTPUT: &str = "output";

/// Repeats the input string a configurable number of times.
///
/// # Ports
/// - Input `input`: The string to repeat
/// - Output `output`: The repeated string
///
/// # Configuration
/// - `count`: Number of repetitions (default: 2)
#[modular_agent(
    title = "Repeat Text",
    category = "Text/Transform",
    inputs = [PORT_INPUT],
    outputs = [PORT_OUTPUT],
    integer_config(name = "count", default = 2),
)]
struct RepeatTextAgent {
    data: AgentData,
}

#[async_trait]
impl AsAgent for RepeatTextAgent {
    fn new(ma: ModularAgent, id: String, spec: AgentSpec) -> Result<Self, AgentError> {
        Ok(Self { data: AgentData::new(ma, id, spec) })
    }

    async fn process(
        &mut self,
        ctx: AgentContext,
        port: String,
        value: AgentValue,
    ) -> Result<(), AgentError> {
        let count = self.configs()?.get_integer_or("count", 2);
        let text = value
            .as_str()
            .ok_or_else(|| AgentError::InvalidValue("expected a string".into()))?;

        let result = AgentValue::string(text.repeat(count as usize));
        self.output(ctx, PORT_OUTPUT.into(), result).await
    }
}
```

## Anatomy

### The `#[modular_agent]` Macro

The macro generates an `AgentDefinition`, the metadata the runtime and the editor use:

- `title` — Display name in the agent catalog
- `category` — Catalog placement, `/`-separated (e.g. `"Text/Transform"`)
- `inputs` / `outputs` — Port names
- `*_config(...)` — Configuration parameters with defaults (see [Configuration](/building-agents/configuration))

### Doc Comments Become Descriptions

The macro extracts the `///` doc comment on the struct as the agent's description and shows it in the editor. Follow this structure:

```rust
/// One-line summary of the agent.
///
/// Detailed description: behavior, features, edge cases, error conditions.
///
/// # Ports
/// - Input `message`: Description
/// - Output `response`: Description
///
/// # Configuration
/// - `model`: Description (default: "value")
```

An explicit `description = "..."` in the macro attribute overrides the doc comment when both are present.

### The `AsAgent` Trait

- `new()` — Constructor; store an `AgentData` created from the arguments
- `process()` — Called for each value arriving on an input port; do your work and emit results with `self.output(ctx, port, value).await`

There are also optional lifecycle hooks. See [Lifecycle](/building-agents/lifecycle).

## Error Handling

Return `AgentError` variants to signal failures:

```rust
AgentError::InvalidValue("Invalid input format".into())
AgentError::InvalidConfig("Missing required config".into())
AgentError::IoError(format!("Network error: {}", e))
```

## Packaging

Agents are distributed as ordinary Rust crates depending on `modular-agent-core`. Add your crate to a desktop build with the [ma-config wizard](/desktop/custom-build), or register it in your own embedding application.

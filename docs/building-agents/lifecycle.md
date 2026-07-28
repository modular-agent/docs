---
title: Lifecycle
sidebar_position: 3
---

# Lifecycle

The `AsAgent` trait defines one required constructor, one main processing method, and optional lifecycle hooks.

```rust
#[async_trait]
impl AsAgent for MyAgent {
    // Required: constructor
    fn new(ma: ModularAgent, id: String, spec: AgentSpec) -> Result<Self, AgentError> {
        Ok(Self { data: AgentData::new(ma, id, spec) })
    }

    // Optional: called when the agent starts (preset play)
    async fn start(&mut self) -> Result<(), AgentError> {
        Ok(())
    }

    // Optional: called when the agent stops (preset stop)
    async fn stop(&mut self) -> Result<(), AgentError> {
        Ok(())
    }

    // Optional: called when config values change at runtime
    fn configs_changed(&mut self) -> Result<(), AgentError> {
        Ok(())
    }

    // Main processing logic: called per incoming value
    async fn process(
        &mut self,
        ctx: AgentContext,
        port: String,
        value: AgentValue,
    ) -> Result<(), AgentError> {
        self.output(ctx, "output".into(), value).await
    }
}
```

## When Each Hook Runs

| Hook | When |
|------|------|
| `new()` | The runtime loads the preset and creates the agent instance |
| `start()` | The preset starts (Play). Spawn background tasks, open connections, start timers here |
| `process()` | A value arrives on one of the agent's input ports |
| `configs_changed()` | The user edits the agent's config while it is running |
| `stop()` | The preset stops. Cancel tasks and release resources here |

## Source Agents

Agents without input ports (timers, screen capture, file watchers) do their work from `start()`: spawn a background task that emits values with `self.output(...)`, and cancel it in `stop()`.

## Shared State

Use `Arc<Mutex<T>>` for state shared between `process()` and background tasks. For expensive shared resources like database connections, cache them keyed by connection string in a `static OnceLock<Mutex<BTreeMap<String, Client>>>` so multiple agent instances reuse the same client.

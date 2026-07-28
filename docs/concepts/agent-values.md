---
title: Agent Values
sidebar_position: 2
---

# Agent Values

`AgentValue` is the single data type that flows between agents. Every port carries an `AgentValue`.

## Variants

| Variant | Rust type | Description |
|---------|-----------|-------------|
| `Unit` | — | Empty value; used as a trigger signal |
| `Boolean` | `bool` | Boolean value |
| `Integer` | `i64` | 64-bit signed integer |
| `Number` | `f64` | 64-bit floating point number |
| `String` | `Arc<String>` | UTF-8 string (cheap to clone) |
| `Image` | `Arc<PhotonImage>` | Image data (requires the `image` feature) |
| `Array` | `Vector<AgentValue>` | Ordered array of values (immutable `im::Vector`) |
| `Object` | `HashMap<String, AgentValue>` | Key-value map |
| `Tensor` | `Arc<Vec<f32>>` | Tensor data for embeddings, etc. |
| `Message` | `Arc<Message>` | LLM chat message (requires the `llm` feature) |
| `Error` | `Arc<AgentError>` | Error value for propagating errors through the workflow |

Values clone cheaply: `Arc` wraps strings, images, tensors, and messages, and arrays use the immutable `im::Vector`, so passing a value to many downstream agents copies no payload.

## Constructing Values

```rust
use modular_agent_core::AgentValue;

let trigger = AgentValue::unit();
let flag = AgentValue::boolean(true);
let count = AgentValue::integer(42);
let text = AgentValue::string("hello");
```

## Trigger Signals

Many agents accept a `Unit` on an input port as a "fire now" signal. A timer agent, for example, emits `Unit` periodically to trigger downstream agents that don't need a payload.

## Error Propagation

Errors are first-class values. When an agent fails, it can emit an `Error` value downstream. Downstream agents route, log, or display the failure like any other value.

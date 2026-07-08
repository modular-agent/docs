---
title: Preset Format
sidebar_position: 4
---

# Preset Format

Presets are JSON files describing a workflow: which agents exist, how they are configured, and how their ports are connected. The desktop editor reads and writes this format, and you can also author or generate it by hand.

## Structure

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

## Fields

### Top level

| Field | Description |
|-------|-------------|
| `id` | Unique identifier of the preset |
| `name` | Display name |
| `agents` | Array of agent instances |
| `connections` | Array of port-to-port connections |

### Agent

| Field | Description |
|-------|-------------|
| `id` | Unique identifier of this instance within the preset |
| `def_name` | Fully qualified agent definition name (e.g. `modular_agent_core::external_agent::ExternalInputAgent`) |
| `inputs` / `outputs` | Port names of this instance |
| `configs` | Configuration values, keyed by config name |

### Connection

| Field | Description |
|-------|-------------|
| `source` | Agent `id` producing the value |
| `source_handle` | Output port name on the source agent |
| `target` | Agent `id` receiving the value |
| `target_handle` | Input port name on the target agent |

## Forward Compatibility

When you load a preset saved by an older agent package, the runtime **reconciles** the stored spec with the current agent definition:

- Missing config keys are filled in with the definition's defaults
- Stale (renamed or removed) config keys are kept with a `_` prefix so agents can migrate their values later
- Ports and config specs are overwritten from the current definition

This means presets keep working across agent package upgrades without manual migration.

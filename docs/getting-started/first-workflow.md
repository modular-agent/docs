---
title: Your First Workflow
sidebar_position: 2
---

# Your First Workflow

Create and run a workflow in the Modular Agent Desktop editor.

## 1. Create a Preset

A **preset** is a saved workflow, a graph of connected agents. Launch Modular Agent and open or create a new preset.

## 2. Add Agents

- **Right-click** on the canvas and select **Add agent**, or
- **Double-click** on the canvas to open the agent list

Pick an agent from the catalog, such as a *Text Input* agent and a *Chat Completion* agent.

## 3. Connect Ports

Each agent block shows its **input ports** and **output ports**. Connect agents by **dragging between ports**. Data flows along these connections when the workflow runs.

## 4. Configure Agents

Select an agent to edit its configuration. Model names, URLs, templates, and other parameters depend on the agent type. Some agents (like LLM integrations) also read **global settings** such as API keys from the app settings.

## 5. Run

Right-click the canvas and select **Play**, or press `Ctrl+.` (`Cmd+.` on macOS). The pipeline starts and data streams through the connected agents in real time. Use **Stop** (the same menu) to halt it.

## Tips

- **Auto-Start** — Mark a preset to run automatically when the app launches
- **System Tray** — The app can keep workflows running in the background from the system tray
- **Import/Export** — Presets are JSON files; you can share them or edit them by hand (see [Preset Format](/concepts/preset-format))

## Next Steps

- Learn how data flows through the system in [Core Concepts](/concepts/architecture)
- Explore the editor in depth in the [Desktop App guide](/desktop/editor)

---
title: Visual Editor
sidebar_position: 1
---

# Visual Editor

Modular Agent Desktop is a node-based visual editor for building and running agent workflows.

![Workflow Editor](/img/screenshot_editor.jpg)

## Canvas Operations

| Action | How |
|--------|-----|
| Add an agent | Right-click → **Add agent**, or double-click to open the agent list |
| Connect agents | Drag from an output port to an input port |
| Configure an agent | Select the agent block and edit its config panel |
| Start the workflow | Right-click → **Play**, or `Ctrl+.` / `Cmd+.` |
| Stop the workflow | Right-click → **Stop** |

## Preset Management

You can save, load, import, and export presets. They are plain JSON files (see [Preset Format](/concepts/preset-format)), so you can version them in git or share them with others.

## Auto-Start and System Tray

- **Auto-Start** — Configure a preset to start automatically when the app launches, for always-on workflows like lifelogging or chat bots.
- **System Tray** — The app minimizes to the system tray and keeps workflows running in the background.

## Architecture

The desktop app is a thin visual shell over the core runtime:

- **Frontend** — [SvelteKit](https://svelte.dev/docs/kit/) + [Svelte 5](https://svelte.dev/), TypeScript, Tailwind CSS, [Svelte Flow](https://svelteflow.dev/), shadcn-svelte
- **Backend** — Rust with [Tauri 2](https://v2.tauri.app/)
- **Core** — [`modular-agent-core`](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-core) agent runtime, bridged via [`tauri-plugin-modular-agent`](https://github.com/modular-agent/modular-agent/tree/main/crates/tauri-plugin-modular-agent)

Everything runs locally: the editor, the runtime, and the agents. No cloud dependency.

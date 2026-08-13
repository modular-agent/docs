---
title: Your First Preset
description: Wire two agents together and run your first preset.
---

A preset is a saved graph of connected agents — the unit you build, run, and share. This walkthrough builds the smallest one possible: it just displays whatever you type.

## 1. Create a Preset

The first launch opens the Open Presets window.

![The Open Presets window with no presets yet](../../../assets/getting-started/first-preset/01-open-presets-empty.png)

Click **+ New Preset**, type a name such as `first preset`, and press **New**.

![The New Preset dialog with the name "first preset" entered](../../../assets/getting-started/first-preset/02-new-preset-dialog.png)

The preset opens on an empty canvas.

![An empty preset canvas](../../../assets/getting-started/first-preset/03-empty-canvas.png)

## 2. Add the Input and Display Agents

Right-click the blue grid and choose **Add agent** — double-clicking the canvas or pressing `Shift+A` does the same thing.

![The canvas context menu with Add agent highlighted](../../../assets/getting-started/first-preset/04-canvas-context-menu.png)

The agent list opens, grouped by package.

![The agent list showing package categories](../../../assets/getting-started/first-preset/05-agent-list.png)

Type in the search box to narrow it down, then pick **Std / Input / String Input**.

![The agent list filtered by the search term "str"](../../../assets/getting-started/first-preset/06-agent-search-string-input.png)

The String Input agent appears on the canvas.

![The String Input agent on the canvas](../../../assets/getting-started/first-preset/07-string-input-added.png)

Add **Std / Display / Display Value** the same way.

## 3. Wire Them Up

Connect the agents by dragging between their ports: `string` on String Input to `value` on Display Value.

![String Input and Display Value connected by a wire](../../../assets/getting-started/first-preset/08-agents-wired.png)

## 4. Run the Preset

Press the ▶ button in the title bar, or right-click and choose **Play** (`Ctrl+.`).

The preset switches to run mode: the grid disappears, ▶ becomes a red ■, and the node fields go live.

![The preset in run mode](../../../assets/getting-started/first-preset/09-run-mode.png)

Type `Hello, world!` into String Input. The same string appears in Display Value.

![Display Value showing "Hello, world!"](../../../assets/getting-started/first-preset/10-hello-world.png)

## 5. Save

Save the preset with **File &gt; Save**. To stop it, press the red ■ in the title bar or choose **Stop** (`Ctrl+.`) from the right-click menu.

Next, [Using the Chat Agent](../chat-preset/) puts an LLM between these two agents and turns the preset into a conversation with a model.

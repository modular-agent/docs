---
title: Your First Preset
description: Build and run a preset that calls an LLM chat API by wiring a String Input, a Chat agent, and a Display Value agent together.
---

This walkthrough builds a small preset that calls an LLM chat API.

## 1. Create a Preset

The first launch opens the Open Presets window.

![The Open Presets window with no presets yet](../../../assets/getting-started/first-preset/01-open-presets-empty.png)

Click **+ New Preset**, type a name such as `first preset`, and press **New**.

![The New Preset dialog with the name "first preset" entered](../../../assets/getting-started/first-preset/02-new-preset-dialog.png)

The preset opens on an empty canvas.

![An empty preset canvas](../../../assets/getting-started/first-preset/03-empty-canvas.png)

## 2. Add the Input and Chat Agents

Right-click the blue grid and choose **Add agent** — double-clicking the canvas or pressing `Shift+A` does the same thing.

![The canvas context menu with Add agent highlighted](../../../assets/getting-started/first-preset/04-canvas-context-menu.png)

The agent list opens, grouped by package.

![The agent list showing package categories](../../../assets/getting-started/first-preset/05-agent-list.png)

Type in the search box to narrow it down, then pick **Std / Input / String Input**.

![The agent list filtered by the search term "str"](../../../assets/getting-started/first-preset/06-agent-search-string-input.png)

The String Input agent appears on the canvas.

![The String Input agent on the canvas](../../../assets/getting-started/first-preset/07-string-input-added.png)

Add **LLM / Chat** the same way.

![The String Input and Chat agents on the canvas](../../../assets/getting-started/first-preset/08-chat-added.png)

## 3. Set the LLM Endpoint

The LLM endpoint and API key live in **Settings**, at the bottom left of the window.

![The LLM section of the Settings screen](../../../assets/getting-started/first-preset/09-settings-llm.png)

:::tip[Using a local LLM]
Point **OpenAI API Base URL** at any OpenAI-compatible endpoint to run against a local model. The screenshot above uses LM Studio on `http://localhost:1234/v1`.
:::

## 4. Add the Output Agent and Wire Them Up

Back on the preset canvas, add **Std / Display Value**.

![The Display Value agent added to the canvas](../../../assets/getting-started/first-preset/10-display-value-added.png)

Connect the three agents by dragging between their ports.

![The three agents connected by wires](../../../assets/getting-started/first-preset/11-agents-wired.png)

Set the `model` field if your endpoint needs it. The layout below is also tidied up.

![The Chat agent with a model name filled in](../../../assets/getting-started/first-preset/12-model-configured.png)

## 5. Run the Preset

Press the ▶ button in the title bar, or right-click and choose **Play** (`Ctrl+.`).

![The context menu with Play highlighted](../../../assets/getting-started/first-preset/13-play-context-menu.png)

The preset switches to run mode.

![The preset running](../../../assets/getting-started/first-preset/14-run-mode.png)

Type into String Input to call the chat API. The reply arrives in Display Value.

![Display Value showing the model's reply](../../../assets/getting-started/first-preset/15-chat-response.png)

## 6. Save

Save the preset with **File > Save**.

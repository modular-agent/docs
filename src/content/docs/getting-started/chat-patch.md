---
title: Using the Chat Agent
description: Add a Chat agent to your first patch, point Modular Agent at an LLM endpoint, and chat with a model.
---

[Your First Patch](../first-patch/) displayed whatever you typed. This walkthrough continues from that patch: it puts a **Chat** agent between String Input and Display Value, turning the patch into a call to an LLM chat API.

:::note[You need an LLM endpoint]
This patch calls a real model. Have one ready before you start: an OpenAI or Anthropic API key, or a local server such as LM Studio or Ollama.
:::

## 1. Add the Chat Agent

Continue from the `first patch` in [the previous guide](../first-patch/). Add one agent: **LLM / Chat**.

![The Chat agent added to the patch, zoomed in](../../../assets/getting-started/chat-patch/01-chat-added.png)

## 2. Set the LLM Endpoint

The LLM endpoint and API key live in **Settings**, at the bottom left of the window.

![The LLM section of the Settings screen](../../../assets/getting-started/chat-patch/02-settings-llm.png)

:::tip[Using an OpenAI-compatible local LLM]
Point **OpenAI API Base URL** at any OpenAI-compatible endpoint to run against a local model. The screenshot above uses LM Studio on `http://localhost:1234/v1`.
:::

## 3. Rewire the Agents

Back on the patch canvas, the wire from the previous guide still runs straight from String Input to Display Value. Click the wire to select it and press `Delete` to remove it.

Then wire the agents through Chat by dragging between their ports: `string` on String Input to `message` on Chat, then `message` on Chat to `value` on Display Value.

![The three agents connected by wires](../../../assets/getting-started/chat-patch/04-agents-wired.png)

Selecting an agent opens its config panel on the right. Simple fields are editable directly on the node too, which is what the next step does.

The `model` field takes a provider-prefixed name — `openai/…`, `claude/…`, or `ollama/…`. The prefix selects which credentials from **Settings** to use, not who hosts the model, so the local LM Studio model below is still written with the `openai/` prefix. Without a prefix the agent fails with _"requires a provider prefix."_ The default is `openai/gpt-5-nano`, which is what the previous screenshot shows.

The layout below is also tidied up.

![The Chat agent with a model name filled in](../../../assets/getting-started/chat-patch/05-model-configured.png)

## 4. Run the Patch

Switch on the **Run** toggle in the title bar, or right-click and choose **Play** (`Ctrl+.`).

![The context menu with Play highlighted](../../../assets/getting-started/chat-patch/06-play-context-menu.png)

The patch switches to run mode.

![The patch running](../../../assets/getting-started/chat-patch/07-run-mode.png)

Type into String Input to call the chat API. The reply arrives in Display Value.

![Display Value showing the model's reply](../../../assets/getting-started/chat-patch/08-chat-response.png)

## 5. When Nothing Comes Back

A failing agent shows a red alert icon beside its title — hover it for the message. **Logs**, at the bottom left, has the full trace.

- **"requires a provider prefix"** — the `model` field is missing its `openai/`, `claude/`, or `ollama/` prefix
- **Connection refused** — the endpoint in Settings is not running, or the base URL is wrong
- **Model not found** — the name after the prefix does not exist at that endpoint
- **Settings edits appear to do nothing** — restart the running patch, as the Settings screen warns

## 6. Save

Save the patch with **File &gt; Save**.

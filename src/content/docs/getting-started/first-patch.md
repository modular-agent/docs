---
title: Your First Patch
description: Wire two modules together and run your first patch.
---

A patch is a saved graph of connected modules — the unit you build, run, and share. This walkthrough builds the smallest one possible: it just displays whatever you type.

## 1. Create a Patch

The first launch opens the Open Patches window.

![The Open Patches window with no patches yet](../../../assets/getting-started/first-patch/01-open-patches-empty.png)

Click **+ New Patch**, type a name such as `first patch`, and press **New**.

![The New Patch dialog with the name "first patch" entered](../../../assets/getting-started/first-patch/02-new-patch-dialog.png)

The patch opens on an empty canvas.

![An empty patch canvas](../../../assets/getting-started/first-patch/03-empty-canvas.png)

## 2. Add the Input and Display Modules

Right-click the blue grid and choose **Add module** — double-clicking the canvas or pressing `Shift+A` does the same thing.

![The canvas context menu with Add module highlighted](../../../assets/getting-started/first-patch/04-canvas-context-menu.png)

The module list opens, grouped by package.

![The module list showing package categories](../../../assets/getting-started/first-patch/05-module-list.png)

Type in the search box to narrow it down, then pick **Std / Input / String Input**.

![The module list filtered by the search term "str"](../../../assets/getting-started/first-patch/06-module-search-string-input.png)

The String Input module appears on the canvas.

![The String Input module on the canvas](../../../assets/getting-started/first-patch/07-string-input-added.png)

Add **Std / Display / Display Value** the same way.

## 3. Wire Them Up

Connect the modules by dragging between their ports: `string` on String Input to `value` on Display Value.

![String Input and Display Value connected by a wire](../../../assets/getting-started/first-patch/08-modules-wired.png)

## 4. Run the Patch

Switch on the **Run** toggle in the title bar, or right-click and choose **Play** (`Ctrl+.`).

The patch switches to run mode: the grid disappears, the toggle lights up, and the node fields go live.

![The patch in run mode](../../../assets/getting-started/first-patch/09-run-mode.png)

Type `Hello, world!` into String Input. The same string appears in Display Value.

![Display Value showing "Hello, world!"](../../../assets/getting-started/first-patch/10-hello-world.png)

## 5. Save

Save the patch with **File &gt; Save**. To stop it, switch the **Run** toggle off or choose **Stop** (`Ctrl+.`) from the right-click menu.

Next, [Using the Chat Module](../chat-patch/) puts an LLM between these two modules and turns the patch into a conversation with a model.

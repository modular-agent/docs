---
title: はじめてのプリセット
description: 2 つのエージェントを繋いで、はじめてのプリセットを実行する。
---

プリセットとは、繋がれたエージェントのグラフを保存したもので、作成・実行・共有の単位になります。ここでは、入力した文字列をそのまま表示するだけの、いちばん小さなプリセットを作成します。

## 1. プリセットを作成する

デスクトップアプリを初めて立ち上げると、Open Presets ウィンドウが開きます。

![プリセットがまだない Open Presets ウィンドウ](../../../../assets/getting-started/first-preset/01-open-presets-empty.png)

**+ New Preset** ボタンをクリックし、`first preset` など好きな名前を入力して **New** を押します。

![名前に「first preset」を入力した New Preset ダイアログ](../../../../assets/getting-started/first-preset/02-new-preset-dialog.png)

新しいプリセットの画面が開きます。

![空のプリセットキャンバス](../../../../assets/getting-started/first-preset/03-empty-canvas.png)

## 2. 入力エージェントと表示エージェントを追加する

青い格子が表示されているエリアで右クリックし **Add agent** を選びます。ダブルクリック、または `Shift+A` でも同じです。

![Add agent を選択しているキャンバスのコンテキストメニュー](../../../../assets/getting-started/first-preset/04-canvas-context-menu.png)

エージェントのリストがパッケージごとに分類されて表示されます。

![パッケージごとに分類されたエージェントリスト](../../../../assets/getting-started/first-preset/05-agent-list.png)

検索ボックスで絞り込み、**Std / Input / String Input** を選びます。

![検索語「str」で絞り込んだエージェントリスト](../../../../assets/getting-started/first-preset/06-agent-search-string-input.png)

String Input エージェントが表示されます。

![キャンバス上の String Input エージェント](../../../../assets/getting-started/first-preset/07-string-input-added.png)

同様に **Std / Display / Display Value** エージェントを追加します。

## 3. エージェントを繋ぐ

ポート間をドラッグして、エージェントを繋ぎます。String Input の `string` を Display Value の `value` へ繋いでください。

![ワイヤーで繋がれた String Input と Display Value](../../../../assets/getting-started/first-preset/08-agents-wired.png)

## 4. プリセットを実行する

ウィンドウタイトル上の ▶ ボタンを押すか、右クリックから **Play**（`Ctrl+.`）を選択します。

プリセットが実行モードになります。格子が消え、▶ が赤い ■ に変わり、ノードの各項目が動作するようになります。

![実行モードのプリセット](../../../../assets/getting-started/first-preset/09-run-mode.png)

String Input に `Hello, world!` と入力してみましょう。入力した文字列がそのまま Display Value に表示されます。

![「Hello, world!」が表示された Display Value](../../../../assets/getting-started/first-preset/10-hello-world.png)

## 5. 保存する

**File > Save** でプリセットを保存しておきましょう。停止するには、タイトルバーの赤い ■ を押すか、右クリックメニューから **Stop**（`Ctrl+.`）を選びます。

次の [Chat エージェントを使う](../chat-preset/) では、2 つのエージェントの間に LLM を挟んで、モデルと会話できるプリセットを作ります。

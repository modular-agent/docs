---
title: はじめてのプリセット
description: String Input、Chat、Display Value の 3 つのエージェントを繋いで、LLM の Chat API を呼び出すプリセットを作成し実行する手順。
---

ここでは、LLM の Chat API を呼び出す簡単なプリセットを作成します。

## 1. プリセットを作成する

デスクトップアプリを初めて立ち上げると、Open Presets ウィンドウが開きます。

![プリセットがまだない Open Presets ウィンドウ](../../../../assets/getting-started/first-preset/01-open-presets-empty.png)

**+ New Preset** ボタンをクリックし、`first preset` など好きな名前を入力して **New** を押します。

![名前に「first preset」を入力した New Preset ダイアログ](../../../../assets/getting-started/first-preset/02-new-preset-dialog.png)

新しいプリセットの画面が開きます。

![空のプリセットキャンバス](../../../../assets/getting-started/first-preset/03-empty-canvas.png)

## 2. 入力エージェントと Chat エージェントを追加する

青い格子が表示されているエリアで右クリックし **Add agent** を選びます。ダブルクリック、または `Shift+A` でも同じです。

![Add agent を選択しているキャンバスのコンテキストメニュー](../../../../assets/getting-started/first-preset/04-canvas-context-menu.png)

エージェントのリストがパッケージごとに分類されて表示されます。

![パッケージごとに分類されたエージェントリスト](../../../../assets/getting-started/first-preset/05-agent-list.png)

検索ボックスで絞り込み、**Std / Input / String Input** を選びます。

![検索語「str」で絞り込んだエージェントリスト](../../../../assets/getting-started/first-preset/06-agent-search-string-input.png)

String Input エージェントが表示されます。

![キャンバス上の String Input エージェント](../../../../assets/getting-started/first-preset/07-string-input-added.png)

同様に **LLM / Chat** エージェントを追加します。

![String Input と Chat の 2 つのエージェント](../../../../assets/getting-started/first-preset/08-chat-added.png)

## 3. LLM のエンドポイントを設定する

LLM のエンドポイントと API キーの設定は、ウィンドウ左下の **Settings** から行います。

![Settings 画面の LLM セクション](../../../../assets/getting-started/first-preset/09-settings-llm.png)

:::tip[ローカル LLM を使う]
**OpenAI API Base URL** に OpenAI 互換のエンドポイントを指定すると、ローカルの LLM を使えます。上のスクリーンショットでは LM Studio のエンドポイント `http://localhost:1234/v1` を指定しています。
:::

## 4. 出力エージェントを追加して繋ぐ

プリセット画面に戻り、**Std / Display Value** エージェントを追加します。

![Display Value エージェントを追加したキャンバス](../../../../assets/getting-started/first-preset/10-display-value-added.png)

3 つのエージェントのポート間をドラッグして、ワイヤーで繋ぎます。

![ワイヤーで繋がれた 3 つのエージェント](../../../../assets/getting-started/first-preset/11-agents-wired.png)

必要に応じてモデル名を指定します。下の図ではレイアウトも調整しています。

![モデル名を指定した Chat エージェント](../../../../assets/getting-started/first-preset/12-model-configured.png)

## 5. プリセットを実行する

ウィンドウタイトル上の ▶ ボタンを押すか、右クリックから **Play**（`Ctrl+.`）を選択します。

![Play を選択しているコンテキストメニュー](../../../../assets/getting-started/first-preset/13-play-context-menu.png)

プリセットが実行モードになります。

![実行中のプリセット](../../../../assets/getting-started/first-preset/14-run-mode.png)

String Input に入力すると LLM の Chat API が呼び出され、返答が Display Value に表示されます。

![モデルの返答が表示された Display Value](../../../../assets/getting-started/first-preset/15-chat-response.png)

## 6. 保存する

**File > Save** でプリセットを保存しておきましょう。

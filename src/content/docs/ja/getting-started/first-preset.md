---
title: はじめてのプリセット
description: 3 つのエージェントを繋ぎ、LLM のエンドポイントを設定して、はじめてのプリセットを実行する。
---

プリセットとは、繋がれたエージェントのグラフを保存したもので、作成・実行・共有の単位になります。ここでは、LLM の Chat API を呼び出すプリセットを作成します。

:::note[LLM のエンドポイントが必要です]
このプリセットは実際にモデルを呼び出します。OpenAI か Anthropic の API キー、または LM Studio や Ollama などのローカルサーバーを事前に用意してください。設定場所は手順 3 で説明します。
:::

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

エージェントを選択すると、右側に設定パネルが開きます。単純な項目はノード上で直接編集することもでき、次の手順ではそちらを使います。

ポート間をドラッグして、エージェントを繋ぎます。String Input の `string` を Chat の `message` へ、Chat の `message` を Display Value の `value` へ繋いでください。Chat は `response`（プロバイダの生のレスポンス）と `event`（ストリーミングイベント）も出力しますが、どちらも繋がなくて構いません。

![ワイヤーで繋がれた 3 つのエージェント](../../../../assets/getting-started/first-preset/11-agents-wired.png)

`model` にはプロバイダ接頭辞付きのモデル名（`openai/…`、`claude/…`、`ollama/…`）を指定します。接頭辞が選ぶのは **Settings** のどの認証情報を使うかであって、モデルの提供元ではありません。そのため下の図のローカルの LM Studio のモデルも `openai/` 接頭辞で書きます。接頭辞がないと *"requires a provider prefix"* エラーになります。デフォルトは `openai/gpt-5-nano` で、前の図に表示されているのがそれです。

下の図ではレイアウトも調整しています。

![モデル名を指定した Chat エージェント](../../../../assets/getting-started/first-preset/12-model-configured.png)

## 5. プリセットを実行する

ウィンドウタイトル上の ▶ ボタンを押すか、右クリックから **Play**（`Ctrl+.`）を選択します。

![Play を選択しているコンテキストメニュー](../../../../assets/getting-started/first-preset/13-play-context-menu.png)

プリセットが実行モードになります。格子が消え、▶ が赤い ■ に変わり、ノードの各項目が動作するようになります。

![実行中のプリセット](../../../../assets/getting-started/first-preset/14-run-mode.png)

String Input に入力すると LLM の Chat API が呼び出され、返答が Display Value に表示されます。

![モデルの返答が表示された Display Value](../../../../assets/getting-started/first-preset/15-chat-response.png)

## 6. 応答が返ってこないとき

失敗したエージェントはタイトルの横に赤いアラートアイコンを表示します。ホバーするとメッセージを読めます。左下の **Logs** には詳細なログがあります。

- **"requires a provider prefix"** — `model` に `openai/`、`claude/`、`ollama/` のいずれの接頭辞も付いていない
- **接続エラー** — Settings で指定したエンドポイントが起動していないか、ベース URL が誤っている
- **モデルが見つからない** — 接頭辞の後ろの名前が、そのエンドポイントに存在しない
- **Settings を変更しても反映されない** — Settings 画面の警告のとおり、実行中のプリセットを再起動する

## 7. 保存する

**File > Save** でプリセットを保存しておきましょう。停止するには、タイトルバーの赤い ■ を押すか、右クリックメニューから **Stop**（`Ctrl+.`）を選びます。

ここから一箇所だけ変えて実行してみてください。Display Value を別の Std エージェントに差し替える、String Input と Chat の間に別のエージェントを挟む、など。

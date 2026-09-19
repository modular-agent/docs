---
title: はじめてのパッチ
description: 2 つのモジュールを繋いで、はじめてのパッチを実行する。
---

Modular Agentではモジュールをワイヤーで繋いだものをパッチといいます。
ここでは、入力した文字列をそのまま表示するだけの、単純なパッチを作成します。

## 1. パッチを作成する

デスクトップアプリを初めて立ち上げると、Open Patches ウィンドウが開きます。

![パッチがまだない Open Patches ウィンドウ](../../../../assets/getting-started/first-patch/01-open-patches-empty.png)

**+ New Patch** ボタンをクリックし、`first patch` など好きな名前を入力して **New** を押します。

![名前に「first patch」を入力した New Patch ダイアログ](../../../../assets/getting-started/first-patch/02-new-patch-dialog.png)

新しいパッチの画面が開きます。

![空のパッチキャンバス](../../../../assets/getting-started/first-patch/03-empty-canvas.png)

## 2. 入力モジュールと表示モジュールを追加する

青い格子が表示されているエリアで右クリックし **Add module** を選びます。ダブルクリック、または `Shift+A` でも同じです。

![Add module を選択しているキャンバスのコンテキストメニュー](../../../../assets/getting-started/first-patch/04-canvas-context-menu.png)

モジュールのリストがパッケージごとに分類されて表示されます。

![パッケージごとに分類されたモジュールリスト](../../../../assets/getting-started/first-patch/05-module-list.png)

検索ボックスで絞り込み、**Std / Input / String Input** を選びます。

![検索語「str」で絞り込んだモジュールリスト](../../../../assets/getting-started/first-patch/06-module-search-string-input.png)

String Input モジュールが表示されます。

![キャンバス上の String Input モジュール](../../../../assets/getting-started/first-patch/07-string-input-added.png)

同様に **Std / Display / Display Value** モジュールを追加します。

## 3. モジュールを繋ぐ

ポート間をドラッグして、モジュールを繋ぎます。String Input の `string` を Display Value の `value` へ繋いでください。

![ワイヤーで繋がれた String Input と Display Value](../../../../assets/getting-started/first-patch/08-modules-wired.png)

## 4. パッチを実行する

タイトルバーの **Run** トグルをオンにするか、右クリックから **Play**（`Ctrl+.`）を選択します。

パッチが実行モードになります。格子が消え、トグルが点灯し、ノードの各項目が動作するようになります。

![実行モードのパッチ](../../../../assets/getting-started/first-patch/09-run-mode.png)

String Input に `Hello, world!` と入力してみましょう。入力した文字列がそのまま Display Value に表示されます。

![「Hello, world!」が表示された Display Value](../../../../assets/getting-started/first-patch/10-hello-world.png)

## 5. 保存する

**File > Save** でパッチを保存しておきましょう。停止するには、タイトルバーの **Run** トグルをオフにするか、右クリックメニューから **Stop**（`Ctrl+.`）を選びます。

次の [Chat モジュールを使う](../chat-patch/) では、2 つのモジュールの間に LLM を挟んで、モデルと会話できるパッチを作ります。

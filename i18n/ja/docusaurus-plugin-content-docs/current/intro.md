---
id: intro
slug: /
title: Modular Agent とは
sidebar_position: 1
---

# Modular Agent とは

**Modular Agent** は、モジュラーシンセのように AI ワークフローを組み立てるためのフレームワークです。拡張可能なエージェント同士をパッチして、LLM・データベース・メッセージングなどをまたぐリアルタイムのパイプラインを構築できます。プライバシーファーストで、クラウドは不要です。

![ワークフローエディタ](/img/screenshot_editor.jpg)

## 仕組み

1. **プリセット** はワークフローの構成であり、エージェントを接続したグラフです
2. **エージェント** は処理単位です(例:「Chat Completion」「HTTP Request」「Text Template」)
3. 各エージェントには **入出力ポート** があります。ポート間をドラッグして接続します
4. **Play** を押すとパイプラインが起動します。データはエージェント間をリアルタイムに流れます

## 特長

### エージェント

- ⚡ **ストリームベースのデータフロー** — エージェント間をリアルタイムにデータが流れます
- 🤖 **豊富な組み込みエージェント** — LLM、Web/HTTP、Slack、SQL データベース、画面キャプチャなど
- 🧩 **拡張可能** — Rust クレートとしてエージェントプラグインを追加できます

### ランタイム

- 🏠 **ローカル実行** — すべての処理は手元のマシンで完結し、クラウドに依存しません
- 💻 **クロスプラットフォーム** — Windows、macOS、Linux
- 📦 **組み込み可能** — コアランタイムは依存が少なく、CLI ツール、デスクトップアプリ、サーバーなど任意の Rust アプリケーションに組み込めます

### エディタ

- 🎨 **ビジュアルワークフローエディタ** — ノードベースのドラッグ&ドロップでエージェントのパイプラインを設計できます
- 💾 **プリセット管理** — ワークフロー構成の保存・読み込み・インポート/エクスポート
- 🚀 **自動起動** — アプリ起動時にプリセットを実行するよう設定できます
- 🔲 **システムトレイ** — ワークフローをバックグラウンドで実行できます

## プロジェクト構成

Modular Agent は複数のリポジトリで構成されています。

| リポジトリ | 役割 |
|-----------|---------|
| [modular-agent-desktop](https://github.com/modular-agent/modular-agent/tree/main/apps/desktop) | ビジュアルワークフローエディタ(Tauri 2 + Svelte 5) |
| [modular-agent-core](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-core) | コアのオーケストレーションランタイム(Rust) |
| [modular-agent-std](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-std)、[llm](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-llm)、[web](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-web)、... | エージェントプラグインライブラリ |

全リストは [エージェントパッケージ](/agent-packages) を参照してください。

## 次に読むもの

- **[インストール](/getting-started/installation)** — デスクトップアプリをビルドして実行する
- **[はじめてのワークフロー](/getting-started/first-workflow)** — ビジュアルエディタでワークフローを作る
- **[コアコンセプト](/concepts/architecture)** — エージェント、プリセット、データフローを理解する
- **[エージェントを作る](/building-agents/your-first-agent)** — Rust で独自のエージェントを書く
- **[組み込み](/embedding/rust-api)** — 自作の Rust アプリケーション内でワークフローを実行する

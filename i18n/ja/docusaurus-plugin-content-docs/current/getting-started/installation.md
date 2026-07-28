---
title: インストール
sidebar_position: 1
---

# インストール

:::info[開発者プレビュー]
Modular Agent Desktop は**開発者向けリリース**です。ビルド済みバイナリはまだ提供していないため、ソースからビルドしてください。
:::

## 前提条件

- [Rust](https://www.rust-lang.org/tools/install) 1.85 以上
- [Node.js](https://nodejs.org/) 20 以上
- [Tauri の前提条件](https://v2.tauri.app/start/prerequisites/) — プラットフォームごとの依存関係(Windows は WebView2、macOS は Xcode Command Line Tools、Linux は `webkit2gtk` など)

## デスクトップアプリをビルドする

[modular-agent](https://github.com/modular-agent/modular-agent) をクローンしてビルドします。

```bash
git clone https://github.com/modular-agent/modular-agent.git
cd modular-agent/apps/desktop
npm install              # Install dependencies
npm run tauri build      # Build for production
```

ビルド後は、実行ファイルを直接起動するか、インストーラーを使用します。Cargo の成果物は
リポジトリルートの workspace 共通 `target/` に出力されます。

- **実行ファイル** — `target/release/modular-agent-desktop.exe`(Windows)/ `modular-agent-desktop`(macOS / Linux)
- **インストーラー** — `target/release/bundle/nsis/*-setup.exe`(Windows)/ `dmg/*.dmg`(macOS)/ `deb/*.deb`(Linux)

### 開発モード

開発中に編集と実行を素早く繰り返したい場合は、次のコマンドを使います。

```bash
npm run tauri dev
```

## エージェントパッケージを選択する

デフォルトのビルドには標準のエージェントパッケージ(LLM、web、Slack、SQL データベース、audio など)が同梱されます。コンパイル対象のエージェントクレートをカスタマイズするには、**ma-config** ウィザードを使用してください。詳しくは[カスタムビルド](/desktop/custom-build)を参照してください。

## コアライブラリのみを使う

デスクトップアプリを使わず、自分の Rust アプリケーションにランタイムを組み込みたい場合は次のようにします。

```toml
[dependencies]
modular-agent-core = "0.23"
```

詳細は[組み込み — Rust API](/embedding/rust-api) を参照してください。

## 次のステップ

アプリを起動して、[最初のワークフロー](/getting-started/first-workflow)に進みましょう。

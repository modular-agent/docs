---
title: インストール
description: Modular Agent のデスクトップアプリをソースからビルドし、組み込むエージェントパッケージを選択する手順。
---

:::note[開発者プレビュー]
ビルド済みバイナリはまだ提供していないため、ソースからビルドしてください。
:::

## 前提条件

- [Rust](https://www.rust-lang.org/tools/install) 1.85 以上
- [Node.js](https://nodejs.org/) 20 以上
- [Tauri の前提条件](https://v2.tauri.app/start/prerequisites/)

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

デフォルトのビルドにはLLM、web、Slack、SQL データベース、audio などがリンクされます。
コンパイル対象のエージェントクレートをカスタマイズするには、**ma-config** ウィザードを使用してください。詳しくは[カスタムビルド](https://github.com/modular-agent/modular-agent/tree/main/apps/desktop#custom-build)を参照してください。

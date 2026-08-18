---
title: インストール
description: Modular Agent のデスクトップアプリをソースからビルドし、ミニマルビルドにエージェントパッケージを追加する手順。
---

## 前提条件

- [Rust](https://www.rust-lang.org/ja/tools/install) 1.85 以上
- [Node.js](https://nodejs.org/ja) 20 以上
- [Tauri の前提条件](https://v2.tauri.app/ja/start/prerequisites/)

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

- **実行ファイル**
  - Windows: `target/release/modular-agent-desktop.exe`
  - macOS / Linux: `modular-agent-desktop`
- **インストーラー**
  - Windows: `target/release/bundle/nsis/*-setup.exe`
  - macOS: `dmg/*.dmg`
  - Linux: `deb/*.deb`

これはミニマルビルドで、リンクされるのはリポジトリ内のエージェントクレート —
**modular-agent-std**(標準ユーティリティエージェント)と **modular-agent-llm**(Claude /
OpenAI / Ollama 連携)— のみです。それ以外の Web スクレイピング、メッセージング、
データベースなどは独立したエージェントパッケージとして提供されます。

### 開発モード

開発中に編集と実行を素早く繰り返したい場合は、次のコマンドを使います。

```bash
npm run tauri dev
```

## エージェントパッケージを追加する

追加のエージェントはそれぞれ独立したリポジトリにあり、ビルド時にアプリへリンクします。
使いたいパッケージをリポジトリルートの `custom_agents/` にクローンします。ディレクトリ名は
リポジトリ名のままにしてください。

```bash
cd custom_agents
git clone https://github.com/modular-agent/modular-agent-web.git
git clone https://github.com/modular-agent/modular-agent-sqlx.git
cd ..
```

例えば、[github.com/modular-agent](https://github.com/modular-agent/) から以下のエージェントをクローンできます。

| リポジトリ | エージェント |
| --- | --- |
| [modular-agent-lifelog](https://github.com/modular-agent/modular-agent-lifelog) | 画面キャプチャ・ウィンドウ追跡エージェント |
| [modular-agent-mattermost](https://github.com/modular-agent/modular-agent-mattermost) | Mattermost メッセージングエージェント |
| [modular-agent-monty](https://github.com/modular-agent/modular-agent-monty) | Monty スクリプトエージェント |
| [modular-agent-slack](https://github.com/modular-agent/modular-agent-slack) | Slack メッセージングエージェント |
| [modular-agent-sqlx](https://github.com/modular-agent/modular-agent-sqlx) | SQL データベースエージェント(PostgreSQL、MySQL、SQLite) |
| [modular-agent-web](https://github.com/modular-agent/modular-agent-web) | Web/HTTP・スクレイピング・検索・YouTube エージェント |
| [modular-agent-zapcode](https://github.com/modular-agent/modular-agent-zapcode) | ZapCode TypeScript スクリプトエージェント |

次に、リポジトリルートで **ma-config** ウィザードを実行し、エージェントと feature を
選択します。ウィザードに表示されるのはクローン済みのパッケージだけです。

```bash
cargo run --manifest-path tools/ma-config/Cargo.toml -- desktop
```

選択を確定してウィザードに `cargo update` を実行させたら、`apps/desktop` で
`npm run tauri build`(または `npm run tauri dev`)を実行して再ビルドします。

選択内容は `apps/desktop/ma-config.toml` に保存され、次回以降の実行で再利用されます。
選択したパッケージが未クローンでウィザードが停止した場合は、クローンしてから
`--apply` 付きで再実行すると、保存済みの選択を対話なしで適用できます。

同じ手順は CLI ランナー [ma](https://github.com/modular-agent/modular-agent/tree/main/apps/cli) にも使えます。ma-config に `desktop` の代わりに `cli` を
渡し、`cargo build -p modular-agent-cli --release` でビルドします(バイナリは
`target/release/ma` に出力されます)。

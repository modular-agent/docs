---
title: インストール
description: ワンコマンドインストーラーで Modular Agent を導入する手順と、デスクトップアプリをソースからビルドしてモジュールパッケージを追加する手順。
---

## 前提条件

[Tauri の前提条件](https://v2.tauri.app/ja/start/prerequisites/)(Rust 1.85 以上、Node.js 20 以上、プラットフォームのツールチェーン)をインストールしてください。

## クイックインストール

ワンコマンドでリポジトリのクローンからソースビルドまで行えます。[デスクトップアプリ](https://github.com/modular-agent/modular-agent/tree/main/apps/desktop)と[CLI](https://github.com/modular-agent/modular-agent/tree/main/apps/cli) の
どちらをビルドするか、推奨モジュールパッケージを含めるかを選べます。

デスクトップアプリの初回ビルドは 20〜40 分・約 10 GB のディスクを使います:

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/modular-agent/modular-agent/main/scripts/install.sh | sh
```

```powershell
# Windows (PowerShell)
irm https://raw.githubusercontent.com/modular-agent/modular-agent/main/scripts/install.ps1 | iex
```

アップデートするには、同じディレクトリで同じコマンドをもう一度実行してください。
既存のクローンをpullし、同じ構成でリビルドします。

## 手動でデスクトップアプリをビルドする

上記のコマンドを用いずに手動でビルドする場合の手順は以下の通りです。

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

これはミニマルビルドで、リンクされるのはリポジトリ内のモジュールクレート —
**modular-agent-std**(標準ユーティリティモジュール)と **modular-agent-llm**(Claude /
OpenAI / Ollama 連携)— のみです。それ以外の Web スクレイピング、メッセージング、
データベースなどは独立したモジュールパッケージとして提供されます。

### 開発モード

開発モードでビルドし、編集と実行を素早く繰り返したい場合は、`npm run tauri build` の代わりに次のコマンドを使います。

```bash
npm run tauri dev
```

## モジュールパッケージを追加する

追加のモジュールはそれぞれ独立したリポジトリにあり、ビルド時にアプリへリンクします。
使いたいパッケージをリポジトリルートの `custom_modules/` にクローンします。ディレクトリ名は
リポジトリ名のままにしてください。

```bash
cd custom_modules
git clone https://github.com/modular-agent/modular-agent-web.git
git clone https://github.com/modular-agent/modular-agent-sqlx.git
cd ..
```

例えば、[github.com/modular-agent](https://github.com/modular-agent/) から以下のモジュールをクローンできます。

| リポジトリ                                                                            | モジュール                                            |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [modular-agent-lifelog](https://github.com/modular-agent/modular-agent-lifelog)       | 画面キャプチャ・ウィンドウ追跡モジュール              |
| [modular-agent-mattermost](https://github.com/modular-agent/modular-agent-mattermost) | Mattermost メッセージングモジュール                   |
| [modular-agent-monty](https://github.com/modular-agent/modular-agent-monty)           | Monty スクリプトモジュール                            |
| [modular-agent-slack](https://github.com/modular-agent/modular-agent-slack)           | Slack メッセージングモジュール                        |
| [modular-agent-sqlx](https://github.com/modular-agent/modular-agent-sqlx)             | SQL データベースモジュール(PostgreSQL、MySQL、SQLite) |
| [modular-agent-web](https://github.com/modular-agent/modular-agent-web)               | Web/HTTP・スクレイピング・検索・YouTube モジュール    |
| [modular-agent-zapcode](https://github.com/modular-agent/modular-agent-zapcode)       | ZapCode TypeScript スクリプトモジュール               |

次に、リポジトリルートで **ma-config** ウィザードを実行し、モジュールと feature を
選択します。ウィザードに表示されるのはクローン済みのパッケージだけです。

```bash
cargo run --manifest-path tools/ma-config/Cargo.toml -- desktop
```

選択を確定したら、`apps/desktop` で `npm run tauri build`(または `npm run tauri dev`)
を実行して再ビルドします。ウィザードは `Cargo.lock` を変更せず、新しい選択で増えた分だけが
次のビルドで追加されます。`cargo update` もあわせて実行したい場合は `--update` を付けます。

選択内容は `apps/desktop/ma-config.toml` に保存され、次回以降の実行で再利用されます。
選択したパッケージが未クローンでウィザードが停止した場合は、クローンしてから
`--apply` 付きで再実行すると、保存済みの選択を対話なしで適用できます。

同じ手順は CLI ランナー [ma](https://github.com/modular-agent/modular-agent/tree/main/apps/cli) にも使えます。ma-config に `desktop` の代わりに `cli` を
渡し、`cargo build -p modular-agent-cli --release` でビルドします(バイナリは
`target/release/ma` に出力されます)。`ma run <patch>` は 1 つのパッチを標準入出力に
つないで実行し、`ma serve --workspace <dir>` はワークスペースのパッチをサーバーとして
動かし続けます。デスクトップアプリの `~/.modular_agent` ディレクトリもそのまま実行できます。
オプションやコンテナイメージについては
[ma の README](https://github.com/modular-agent/modular-agent/tree/main/apps/cli) を参照してください。

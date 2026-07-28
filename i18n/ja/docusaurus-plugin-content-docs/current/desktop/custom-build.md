---
title: カスタムビルド
sidebar_position: 2
---

# カスタムビルド

デスクトップアプリの標準ビルドには、エージェントパッケージの標準セットが同梱されています。より小さいバイナリが欲しい場合や、独自のエージェントクレートを追加したい場合は、**ma-config** TUI ウィザードでコンパイルするエージェントパッケージを選択してください。

## 標準のエージェントパッケージ

| クレート | 説明 |
|-------|-------------|
| [modular-agent-std](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-std) | 標準ユーティリティエージェント |
| [modular-agent-llm](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-llm) | LLM 連携(OpenAI、Ollama) |
| [modular-agent-web](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-web) | HTTP、スクレイピング、検索、YouTube |
| [modular-agent-slack](https://github.com/modular-agent/modular-agent-slack) | Slack メッセージング |
| [modular-agent-sqlx](https://github.com/modular-agent/modular-agent-sqlx) | SQLite、MySQL、PostgreSQL |
| [modular-agent-audio](https://github.com/modular-agent/modular-agent-audio) | 音声のキャプチャ / 文字起こし |
| [modular-agent-voicevox](https://github.com/modular-agent/modular-agent-voicevox) | VOICEVOX による音声合成 |
| [modular-agent-lifelog](https://github.com/modular-agent/modular-agent-lifelog) | 画面キャプチャ、ウィンドウ追跡 |
| [modular-agent-monty](https://github.com/modular-agent/modular-agent-monty) | Monty エージェント |

## ウィザードの実行

リポジトリルートで実行します。

```bash
cargo run --manifest-path tools/ma-config/Cargo.toml -- desktop
```

同じウィザードで CLI ランナーも設定できます。`desktop` の代わりに `cli` を指定してください。

ウィザードでできることは次のとおりです。

- 組み込むエージェントパッケージの選択
- リポジトリ外にあるパッケージの取得元の設定: **ローカルチェックアウト** または **Git リポジトリ**
- クレートごとの **フィーチャーフラグ** の選択

`modular-agent-std` / `modular-agent-llm` / `modular-agent-web` は同じリポジトリ内にあるため、
取得元の選択はありません。設定内容は `apps/desktop/ma-config.toml` に保存され、以降の再ビルドで
再利用されます。

## 再ビルド

ウィザードが完了したら、通常どおりビルドします。

```bash
npm run tauri dev      # development
npm run tauri build    # production
```

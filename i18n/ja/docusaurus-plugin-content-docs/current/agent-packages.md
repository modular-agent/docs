---
title: エージェントパッケージ
sidebar_position: 9
---

# エージェントパッケージ

エージェントの実装は、コアランタイムに差し込む独立した Rust クレートとして提供されます。デスクトップアプリは標準的なセットを既定でバンドルしていますが、[カスタムビルド](/desktop/custom-build) で任意の組み合わせを選べます。

## アプリケーション

| リポジトリ | 説明 |
|-----------|-------------|
| [modular-agent-desktop](https://github.com/modular-agent/modular-agent/tree/main/apps/desktop) | ビジュアルプリセットエディタ(Tauri 2 + Svelte 5) |
| [modular-agent-chatvrm](https://github.com/modular-agent/modular-agent-chatvrm) | アバターチャットインターフェース |

## コア

| リポジトリ | 説明 |
|-----------|-------------|
| [modular-agent-core](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-core) | オーケストレーションエンジンと `#[modular_agent]` マクロ |
| [tauri-plugin-modular-agent](https://github.com/modular-agent/modular-agent/tree/main/crates/tauri-plugin-modular-agent) | ランタイムとアプリのフロントエンドをつなぐ Tauri プラグイン |

## エージェントライブラリ — 汎用

| リポジトリ | 説明 |
|-----------|-------------|
| [modular-agent-std](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-std) | 標準ユーティリティエージェント(50 以上) |
| [modular-agent-llm](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-llm) | LLM 連携:OpenAI、Ollama |

## エージェントライブラリ — データソース

| リポジトリ | 説明 |
|-----------|-------------|
| [modular-agent-web](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-web) | HTTP、スクレイピング、検索、YouTube |
| [modular-agent-slack](https://github.com/modular-agent/modular-agent-slack) | Slack メッセージング |
| [modular-agent-lifelog](https://github.com/modular-agent/modular-agent-lifelog) | 画面キャプチャ、ウィンドウ追跡 |

## エージェントライブラリ — 音声・スピーチ

| リポジトリ | 説明 |
|-----------|-------------|
| [modular-agent-audio](https://github.com/modular-agent/modular-agent-audio) | 音声の再生と録音 |
| [modular-agent-voicevox](https://github.com/modular-agent/modular-agent-voicevox) | VOICEVOX による音声合成 |

## エージェントライブラリ — データベース

| リポジトリ | 説明 |
|-----------|-------------|
| [modular-agent-sqlx](https://github.com/modular-agent/modular-agent-sqlx) | SQLite、MySQL、PostgreSQL |
| [modular-agent-duckdb](https://github.com/modular-agent/modular-agent-duckdb) | DuckDB による分析 |
| [modular-agent-mongodb](https://github.com/modular-agent/modular-agent-mongodb) | MongoDB の CRUD |
| [modular-agent-surrealdb](https://github.com/modular-agent/modular-agent-surrealdb) | SurrealDB グラフデータベース |
| [modular-agent-cozodb](https://github.com/modular-agent/modular-agent-cozodb) | Cozo 論理データベース |
| [modular-agent-lancedb](https://github.com/modular-agent/modular-agent-lancedb) | LanceDB ベクトルデータベース |

## 自作する

任意の Rust クレートがエージェントを提供できます。[エージェントを作る](/building-agents/your-first-agent) を参照してください。

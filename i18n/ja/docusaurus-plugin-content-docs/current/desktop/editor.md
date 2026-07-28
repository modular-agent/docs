---
title: ビジュアルエディタ
sidebar_position: 1
---

# ビジュアルエディタ

Modular Agent Desktop は、エージェントワークフローを構築・実行するためのノードベースのビジュアルエディタです。

![ワークフローエディタ](/img/screenshot_editor.jpg)

## キャンバス操作

| 操作 | 方法 |
|--------|-----|
| エージェントを追加する | 右クリック → **Add agent**(エージェント追加)、またはダブルクリックでエージェント一覧を開く |
| エージェントを接続する | 出力ポートから入力ポートへドラッグ |
| エージェントを設定する | エージェントブロックを選択し、設定パネルを編集 |
| ワークフローを開始する | 右クリック → **Play**(再生)、または `Ctrl+.` / `Cmd+.` |
| ワークフローを停止する | 右クリック → **Stop**(停止) |

## プリセットの管理

プリセットは保存・読み込み・インポート・エクスポートができます。実体は単なる JSON ファイルなので([プリセット形式](/concepts/preset-format)を参照)、git でバージョン管理したり、他の人と共有したりできます。

## 自動起動とシステムトレイ

- **Auto-Start**(自動起動) — アプリ起動時にプリセットを自動的に開始するよう設定できます。ライフログやチャットボットのような常時稼働のワークフローに便利です。
- **System Tray**(システムトレイ) — アプリはシステムトレイに最小化され、バックグラウンドでワークフローを動かし続けます。

## アーキテクチャ

デスクトップアプリは、コアランタイムをラップした薄いビジュアルシェルです。

- **フロントエンド** — [SvelteKit](https://svelte.dev/docs/kit/) + [Svelte 5](https://svelte.dev/)、TypeScript、Tailwind CSS、[Svelte Flow](https://svelteflow.dev/)、shadcn-svelte
- **バックエンド** — Rust + [Tauri 2](https://v2.tauri.app/)
- **コア** — [`modular-agent-core`](https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-core) のエージェントランタイム。[`tauri-plugin-modular-agent`](https://github.com/modular-agent/modular-agent/tree/main/crates/tauri-plugin-modular-agent) が橋渡しします

エディタもランタイムもエージェントも、すべてローカルで動作します。クラウドへの依存はありません。

---
title: Rust API
sidebar_position: 1
---

# 組み込み — Rust API

`modular-agent-core` は依存の少ない普通の Rust ライブラリです。CLI ツール、デスクトップアプリ、サーバーなど、任意の Rust アプリケーションにランタイムを組み込み、プログラムからプリセットを実行できます。

## インストール

```toml
[dependencies]
modular-agent-core = "0.23"
```

依存を絞り込むには、デフォルトフィーチャーを無効にして必要なものだけを有効にします。

```toml
[dependencies]
modular-agent-core = { version = "0.23", default-features = false, features = ["llm"] }
```

### フィーチャーフラグ

| フィーチャー | デフォルト | 説明 |
|---------|---------|-------------|
| `file` | 有効 | プリセットのファイル処理サポート |
| `image` | 有効 | photon-rs による画像処理 |
| `llm` | 有効 | `Message` / `ToolCall` 型を含む LLM 連携 |
| `mcp` | 有効 | Model Context Protocol 連携 |
| `test-utils` | 無効 | テスト用ユーティリティ |

## クイックスタート

```rust
use modular_agent_core::{AgentError, AgentValue, ModularAgent, ModularAgentEvent};

#[tokio::main]
async fn main() -> Result<(), AgentError> {
    // 1. Initialize
    let ma = ModularAgent::init()?;
    ma.ready().await?;

    // 2. Subscribe to output BEFORE starting (avoid race condition)
    let mut rx = ma.subscribe_to_event(|event| {
        if let ModularAgentEvent::ExternalOutput(name, value) = event {
            if name == "output" { return Some(value); }
        }
        None
    });

    // 3. Load and start preset
    let preset_id = ma.open_preset_from_file("preset.json", None).await?;
    ma.start_preset(&preset_id).await?;

    // 4. Send input / receive output
    ma.write_external_input("input".into(), AgentValue::string("hello")).await?;
    if let Some(value) = rx.recv().await {
        println!("Output: {:?}", value);
    }

    // 5. Cleanup
    ma.stop_preset(&preset_id).await?;
    ma.quit();
    Ok(())
}
```

ここで使っているプリセットファイルは、[外部 I/O](/concepts/external-io) のエコー例と同じものです。

## 各ステップの解説

1. **初期化** — `ModularAgent::init()` がオーケストレーターを生成し、`ready().await` でコマンドを受け付けられる状態になるまで待ちます。
2. **購読** — 必要な出力に対するイベントフィルタを登録します。序盤の出力を取りこぼさないよう、プリセットを開始する前に行ってください。
3. **読み込みと開始** — `open_preset_from_file()` がプリセット JSON をパースしてエージェントを生成し、`start_preset()` が各エージェントの `start()` フックを実行してルーティングを開始します。
4. **値のやり取り** — `write_external_input(name, value)` が [ExternalInputAgent](/concepts/external-io) 経由でネットワークに値を流し込みます。出力は購読先に届きます。
5. **後片付け** — プリセットを停止し、`quit()` を呼んでシャットダウンします。

## エージェントパッケージの追加

コアクレートに含まれるのは、組み込みの外部 / ローカル I/O エージェントだけです。`modular-agent-std` や `modular-agent-llm` などのパッケージのエージェントを使うには、それらのクレートを依存に追加してください。各クレートが自身のエージェント定義をランタイムに登録します。

## さらに詳しく

完全な API ドキュメントは [docs.rs/modular-agent-core](https://docs.rs/modular-agent-core) にあります。実行可能な CLI のサンプルは、コアリポジトリの `modular-agent-core/examples/cli.rs` にあります。

```bash
cargo run --example cli -- <preset.json> [-i input] [-o output]
```

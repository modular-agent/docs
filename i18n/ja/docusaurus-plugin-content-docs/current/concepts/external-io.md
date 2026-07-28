---
title: 外部入出力
sidebar_position: 3
---

# 外部入出力

プリセットはエージェントの閉じたグラフです。外部入出力エージェントは、その外側の世界（アプリケーションのコードやデスクトップアプリの UI）とグラフの間で値をやり取りするための橋渡しをします。

## 外部エージェント

外部エージェントは、外部入出力とエージェントネットワークをつなぎます。

- **ExternalInputAgent**（`ExtIn->`）— 外部入力の入口です。`write_external_input()` の呼び出しを待ち受け、接続先のエージェントへ値を転送します。
- **ExternalOutputAgent**（`->ExtOut`）— 外部出力の出口です。エージェントから値を受け取り、`ModularAgentEvent::ExternalOutput` イベントを送出します。

各外部エージェントは `name` 設定を持ち、呼び出し側はこの名前で対象を指定します。

```rust
// Send a value to every ExternalInputAgent named "input"
ma.write_external_input("input".into(), AgentValue::string("hello")).await?;

// Receive values from every ExternalOutputAgent named "output"
let mut rx = ma.subscribe_to_event(|event| {
    if let ModularAgentEvent::ExternalOutput(name, value) = event {
        if name == "output" { return Some(value); }
    }
    None
});
```

:::tip[開始前に購読する]
出力イベントの購読は、プリセットを開始する**前**に行ってください。そうしないと、起動中に生成された出力が競合状態で失われることがあります。
:::

## ローカルエージェント

ローカルエージェントは**プリセットスコープの変数**を提供します。キャンバス全体を横切る接続線を引かなくても、1 つのプリセット内で値を受け渡せます。

- **LocalInputAgent**（`LocalIn->`）— プリセットスコープのローカル値の入口
- **LocalOutputAgent**（`->LocalOut`）— プリセットスコープのローカル値の出口

`foo` という名前の `->LocalOut` に書き込んだ値は、同じプリセット内で `foo` という名前を持つすべての `LocalIn->` に現れます。これにより、大きなグラフでも読みやすさを保てます。

## 例

最小の echo プリセットは、外部入力を外部出力に直結します。`input` に書き込んだ値がそのまま `output` から出てきます。

```json
{
  "id": "echo",
  "name": "Echo",
  "agents": [
    {
      "id": "in",
      "def_name": "modular_agent_core::external_agent::ExternalInputAgent",
      "outputs": ["value"],
      "configs": { "name": "input" }
    },
    {
      "id": "out",
      "def_name": "modular_agent_core::external_agent::ExternalOutputAgent",
      "inputs": ["value"],
      "configs": { "name": "output" }
    }
  ],
  "connections": [
    {
      "source": "in",
      "source_handle": "value",
      "target": "out",
      "target_handle": "value"
    }
  ]
}
```

このプリセットを Rust から実行する方法は[組み込み — Rust API](/embedding/rust-api) を参照してください。

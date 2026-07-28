---
title: プリセット形式
sidebar_position: 4
---

# プリセット形式

プリセットは、ワークフローを記述した JSON ファイルです。どのエージェントが存在し、どう設定され、ポートがどう接続されているかを表します。デスクトップエディタはこの形式を読み書きしますが、手で書いたり生成したりすることもできます。

## 構造

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

## フィールド

### トップレベル

| フィールド | 説明 |
|-------|-------------|
| `id` | プリセットの一意な識別子 |
| `name` | 表示名 |
| `agents` | エージェントインスタンスの配列 |
| `connections` | ポート間の接続の配列 |

### Agent

| フィールド | 説明 |
|-------|-------------|
| `id` | プリセット内でこのインスタンスを一意に識別する ID |
| `def_name` | 完全修飾のエージェント定義名（例: `modular_agent_core::external_agent::ExternalInputAgent`） |
| `inputs` / `outputs` | このインスタンスのポート名 |
| `configs` | 設定値。設定名をキーとするマップ |

### Connection

| フィールド | 説明 |
|-------|-------------|
| `source` | 値を送出するエージェントの `id` |
| `source_handle` | 送出側エージェントの出力ポート名 |
| `target` | 値を受け取るエージェントの `id` |
| `target_handle` | 受け取り側エージェントの入力ポート名 |

## 前方互換性

古いバージョンのエージェントパッケージで保存されたプリセットを読み込むと、ランタイムは保存済みの spec を現在のエージェント定義と**すり合わせ**ます。

- 不足している設定キーは、定義のデフォルト値で補われます
- 使われなくなった（リネーム・削除された）設定キーは `_` プレフィックス付きで保持され、エージェントが後から値を移行できます
- ポートと設定仕様は、現在の定義の内容で上書きされます

これにより、エージェントパッケージをアップグレードしても、手作業の移行なしにプリセットは動き続けます。

---
title: 最初のエージェント
sidebar_position: 1
---

# 最初のエージェント

エージェントは `#[modular_agent]` マクロを付与し、`AsAgent` トレイトを実装した Rust の構造体です。以下は完全かつ最小限の例です。

## 完全な例

```rust
use modular_agent_core::{
    ModularAgent, AgentContext, AgentData, AgentError, AgentSpec, AgentValue, AsAgent,
    modular_agent, async_trait,
};

// Port names as constants at module top
const PORT_INPUT: &str = "input";
const PORT_OUTPUT: &str = "output";

/// Repeats the input string a configurable number of times.
///
/// # Ports
/// - Input `input`: The string to repeat
/// - Output `output`: The repeated string
///
/// # Configuration
/// - `count`: Number of repetitions (default: 2)
#[modular_agent(
    title = "Repeat Text",
    category = "Text/Transform",
    inputs = [PORT_INPUT],
    outputs = [PORT_OUTPUT],
    integer_config(name = "count", default = 2),
)]
struct RepeatTextAgent {
    data: AgentData,
}

#[async_trait]
impl AsAgent for RepeatTextAgent {
    fn new(ma: ModularAgent, id: String, spec: AgentSpec) -> Result<Self, AgentError> {
        Ok(Self { data: AgentData::new(ma, id, spec) })
    }

    async fn process(
        &mut self,
        ctx: AgentContext,
        port: String,
        value: AgentValue,
    ) -> Result<(), AgentError> {
        let count = self.configs()?.get_integer_or("count", 2);
        let text = value
            .as_str()
            .ok_or_else(|| AgentError::InvalidValue("expected a string".into()))?;

        let result = AgentValue::string(text.repeat(count as usize));
        self.output(ctx, PORT_OUTPUT.into(), result).await
    }
}
```

## 構成要素

### `#[modular_agent]` マクロ

このマクロは、ランタイムとエディタが利用するメタデータである `AgentDefinition` を生成します。

- `title` — エージェントカタログに表示される名前
- `category` — カタログ上の配置。`/` 区切りで指定します(例: `"Text/Transform"`)
- `inputs` / `outputs` — ポート名
- `*_config(...)` — デフォルト値付きの設定パラメータ([設定](/building-agents/configuration)を参照)

### ドキュメントコメントが説明になる

マクロは構造体に付けられた `///` ドキュメントコメントをエージェントの説明として抽出し、エディタがそれを表示します。次の構造に従ってください。

```rust
/// One-line summary of the agent.
///
/// Detailed description: behavior, features, edge cases, error conditions.
///
/// # Ports
/// - Input `message`: Description
/// - Output `response`: Description
///
/// # Configuration
/// - `model`: Description (default: "value")
```

マクロ属性に `description = "..."` を明示した場合は、ドキュメントコメントより優先されます。

### `AsAgent` トレイト

- `new()` — コンストラクタ。引数から生成した `AgentData` を保持します
- `process()` — 入力ポートに値が届くたびに呼ばれます。処理を行い、`self.output(ctx, port, value).await` で結果を送出します

このほかに任意のライフサイクルフックがあります。[ライフサイクル](/building-agents/lifecycle)を参照してください。

## エラー処理

失敗を通知するには `AgentError` のバリアントを返します。

```rust
AgentError::InvalidValue("Invalid input format".into())
AgentError::InvalidConfig("Missing required config".into())
AgentError::IoError(format!("Network error: {}", e))
```

## パッケージング

エージェントは `modular-agent-core` に依存する通常の Rust クレートとして配布します。[ma-config ウィザード](/desktop/custom-build)でデスクトップ版のビルドにクレートを追加するか、独自の組み込みアプリケーションに登録してください。

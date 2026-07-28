---
title: ライフサイクル
sidebar_position: 3
---

# ライフサイクル

`AsAgent` トレイトは、必須のコンストラクタ 1 つ、メインの処理メソッド 1 つ、そして任意のライフサイクルフックを定義します。

```rust
#[async_trait]
impl AsAgent for MyAgent {
    // Required: constructor
    fn new(ma: ModularAgent, id: String, spec: AgentSpec) -> Result<Self, AgentError> {
        Ok(Self { data: AgentData::new(ma, id, spec) })
    }

    // Optional: called when the agent starts (preset play)
    async fn start(&mut self) -> Result<(), AgentError> {
        Ok(())
    }

    // Optional: called when the agent stops (preset stop)
    async fn stop(&mut self) -> Result<(), AgentError> {
        Ok(())
    }

    // Optional: called when config values change at runtime
    fn configs_changed(&mut self) -> Result<(), AgentError> {
        Ok(())
    }

    // Main processing logic: called per incoming value
    async fn process(
        &mut self,
        ctx: AgentContext,
        port: String,
        value: AgentValue,
    ) -> Result<(), AgentError> {
        self.output(ctx, "output".into(), value).await
    }
}
```

## 各フックが呼ばれるタイミング

| フック | タイミング |
|-------|----------|
| `new()` | プリセットが読み込まれ、エージェントのインスタンスが生成されたとき |
| `start()` | プリセットが開始(Play)したとき。バックグラウンドタスクの起動、接続のオープン、タイマーの開始はここで行います |
| `process()` | エージェントの入力ポートのいずれかに値が届いたとき |
| `configs_changed()` | 実行中にユーザーがエージェントの設定を編集したとき |
| `stop()` | プリセットが停止したとき。タスクのキャンセルとリソースの解放はここで行います |

## ソースエージェント

入力ポートを持たないエージェント(タイマー、画面キャプチャ、ファイル監視など)は `start()` から処理を行います。`self.output(...)` で値を送出するバックグラウンドタスクを起動し、`stop()` でキャンセルします。

## 共有状態

`process()` とバックグラウンドタスクの間で共有する状態には `Arc<Mutex<T>>` を使います。データベース接続のようにコストの高い共有リソースは、`static OnceLock<Mutex<BTreeMap<String, Client>>>` に接続文字列をキーとしてキャッシュし、複数のエージェントインスタンスで同じクライアントを再利用できるようにします。

---
title: エージェント値
sidebar_position: 2
---

# エージェント値

`AgentValue` は、エージェント間を流れる唯一のデータ型です。すべてのポートは `AgentValue` を運びます。

## バリアント

| バリアント | Rust の型 | 説明 |
|---------|-----------|-------------|
| `Unit` | — | 空の値。トリガー信号として使います |
| `Boolean` | `bool` | 真偽値 |
| `Integer` | `i64` | 64 ビット符号付き整数 |
| `Number` | `f64` | 64 ビット浮動小数点数 |
| `String` | `Arc<String>` | UTF-8 文字列（クローンが安価） |
| `Image` | `Arc<PhotonImage>` | 画像データ（`image` フィーチャが必要） |
| `Array` | `Vector<AgentValue>` | 順序を持つ値の配列（イミュータブルな `im::Vector`） |
| `Object` | `HashMap<String, AgentValue>` | キーと値のマップ |
| `Tensor` | `Arc<Vec<f32>>` | 埋め込みなどのテンソルデータ |
| `Message` | `Arc<Message>` | LLM のチャットメッセージ（`llm` フィーチャが必要） |
| `Error` | `Arc<AgentError>` | ワークフロー内でエラーを伝播させるためのエラー値 |

値のクローンは安価です。文字列、画像、テンソル、メッセージは `Arc` でラップされ、配列にはイミュータブルな `im::Vector` を使っているため、値を多数の下流エージェントに渡してもペイロードのコピーは発生しません。

## 値の生成

```rust
use modular_agent_core::AgentValue;

let trigger = AgentValue::unit();
let flag = AgentValue::boolean(true);
let count = AgentValue::integer(42);
let text = AgentValue::string("hello");
```

## トリガー信号

多くのエージェントは、入力ポートで受け取った `Unit` を「今すぐ実行せよ」という信号として扱います。たとえばタイマーエージェントは `Unit` を定期的に送出し、ペイロードを必要としない下流のエージェントを起動します。

## エラーの伝播

エラーは第一級の値です。エージェントは処理に失敗したとき、黙って停止する代わりに `Error` 値を下流へ送出できます。これにより、失敗を他のデータと同じようにルーティングしたり、ログに残したり、画面に表示したりできます。

---
title: 設定
sidebar_position: 2
---

# 設定

エージェントは設定パラメータを `#[modular_agent]` マクロで宣言します。エディタは型ごとに適切な入力ウィジェットを描画し、値はプリセット JSON に保存されます。

## 設定の型

| 型 | マクロ | 例 |
|----|-------|-----|
| String | `string_config` | `string_config(name = "url", default = "")` |
| Integer | `integer_config` | `integer_config(name = "limit", default = 100)` |
| Number | `number_config` | `number_config(name = "threshold", default = 0.5)` |
| Boolean | `boolean_config` | `boolean_config(name = "enabled", default = true)` |
| Text(複数行) | `text_config` | `text_config(name = "script")` |
| Object(JSON) | `object_config` | `object_config(name = "options", hidden = true)` |
| Array | `array_config` | `array_config(name = "items")` |

## 設定の読み取り

エージェント内では `self.configs()` を通じて現在の値を読み取ります。

```rust
let config = self.configs()?;
let url = config.get_string_or_default("url");    // definition default if unset
let limit = config.get_integer_or("limit", 100);  // custom fallback
let enabled = config.get_bool_or("enabled", true);
```

- `get_*_or_default(name)` — マクロで宣言したデフォルト値にフォールバックします
- `get_*_or(name, fallback)` — 指定した値にフォールバックします

設定はエージェントの実行中でも変更されることがあります。変更に反応するには `configs_changed()` フックを使います([ライフサイクル](/building-agents/lifecycle)を参照)。

## 予約された名前

`_` で始まる設定名は、古いキーのマイグレーション用に予約されています(後述)。`#[modular_agent]` マクロはコンパイル時にこれを拒否します。

## 設定名を安全に変更する

設定キーをリネームしたり削除したりしても、古いキーで保存されたプリセットは引き続き読み込めます。ランタイムが古い値を `_` 始まりのキーで保持するため、`new()` コンストラクタでマイグレーションできます。`_` 始まりのキーは `new()` の実行後に自動的に取り除かれます。

## グローバル設定

API キーやエンドポイントのように、個々のエージェントインスタンスではなくアプリケーション全体に属する設定もあります。エージェントパッケージは(`string_global_config` / `custom_global_config` などで)**グローバル設定**を宣言でき、デスクトップアプリの設定画面に表示されます。エージェントのドキュメントコメントでは `# Global Configuration` 見出しの下に記載してください。

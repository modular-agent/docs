---
title: Modular Agent
description: モジュラーシンセのように AI ワークフローを組み立てる。拡張可能なモジュールをビジュアルにパッチして、リアルタイムのパイプラインを構築できます。
template: splash
prev: false
next: false
hero:
  tagline: モジュラーシンセのように AI ワークフローを組み立てる。シンプルなモジュール同士をパッチして、LLM、データベース、メッセージングなどを活用したリアルタイムパイプラインを構築できます。
  image:
    alt: ""
    file: ../../../assets/app_icon.png
  actions:
    - text: はじめる
      link: /docs/ja/getting-started/installation/
      icon: right-arrow
      variant: primary
    - text: GitHub
      link: https://github.com/modular-agent/modular-agent/
      icon: external
      variant: minimal
      attrs:
        target: _blank
        rel: noopener noreferrer
---

<div class="not-content support">
  <h2>Support the Project</h2>
  <p>Modular Agent は公開したばかりで、活発に開発中です。</p>
  <a
    class="star-button"
    href="https://github.com/modular-agent/modular-agent/"
    target="_blank"
    rel="noopener noreferrer"
    lang="en">Star on GitHub</a>
</div>

## 特長

### モジュール

- **様々なモジュール** — LLM、Web/HTTP、Slack、SQL データベース、画面キャプチャなど
- **拡張可能** — Rustクレートとしてモジュールプラグインを追加できる
- **並列動作** — 各モジュールは独立に並列に動作する
- **ストリームベースのデータフロー** — モジュール間をリアルタイムにデータが流れる

### ランタイム

- **ローカル実行** — ローカルで動くアプリケーションとして実行でき、クラウドに依存しない。
- **クロスプラットフォーム** — Windows、macOS、Linux
- **組み込み可能** — コアランタイムは依存が少なく、CLIツール、デスクトップアプリ、サーバー、モバイルデバイスなどRustアプリケーションに組み込めます

![ワークフローエディタ](../../../assets/screenshot_editor.jpg)

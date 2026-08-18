---
title: Modular Agent
description: モジュラーシンセのように AI ワークフローを組み立てる。拡張可能なエージェントをビジュアルにパッチして、リアルタイムのパイプラインを構築できます。
template: splash
prev: false
next: false
hero:
  tagline: モジュラーシンセのように AI ワークフローを組み立てる。シンプルなエージェント同士をパッチして、LLM、データベース、メッセージングなどを活用したリアルタイムパイプラインを構築できます。
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

### エージェント

> 心の一部分とか、心の中の一プロセスであって、それ自体だけで理解できるような、十分単純なもの。
> ただし、エージェントたちの集まり同士のインタラクションによって、もっとずっと理解しにくいような現象が生み出される可能性がある。
> 『心の社会』マーヴィン・ミンスキー

- **様々なエージェント** — LLM、Web/HTTP、Slack、SQL データベース、画面キャプチャなど
- **拡張可能** — Rustクレートとしてエージェントプラグインを追加できる
- **並列動作** — 各エージェントは独立に並列に動作する
- **ストリームベースのデータフロー** — エージェント間をリアルタイムにデータが流れる

### ランタイム

- **ローカル実行** — ローカルで動くアプリケーションとして実行でき、クラウドに依存しない。
- **クロスプラットフォーム** — Windows、macOS、Linux
- **組み込み可能** — コアランタイムは依存が少なく、CLIツール、デスクトップアプリ、サーバー、モバイルデバイスなどRustアプリケーションに組み込めます

![ワークフローエディタ](../../../assets/screenshot_editor.jpg)

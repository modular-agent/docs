# modular-agent-doc

[Modular Agent](https://github.com/modular-agent) のドキュメントサイトです。[Docusaurus](https://docusaurus.io/) で構築しています。

[English](README.md)

## 開発

```bash
npm install
npm run start       # 英語版の開発サーバー http://localhost:3000
npm run start:ja    # 日本語版の開発サーバー http://localhost:3000/ja/
```

`docusaurus start` は一度に 1 つのロケールしかサーブしません。`npm run start` では英語版だけが起動し、`/ja/` のルートは存在しません。日本語ページを開発サーバーで確認するときは `npm run start:ja` を使ってください。

英語版と日本語版を同時に確認したい場合や、ナビバーのロケール切り替えドロップダウンの動作を確認したい場合は、ビルドしてからサーブします(下記)。

## ビルド

```bash
npm run build    # build/ に静的サイトを出力(全ロケールを一括ビルド)
npm run serve    # 本番ビルドのプレビュー
```

`npm run serve` では `/`(英語)と `/ja/`(日本語)の両方が配信されます。

## 構成

- `docs/` — ドキュメントページ(Markdown、英語がソース・オブ・トゥルース)
- `i18n/ja/` — 日本語訳
  - `docusaurus-plugin-content-docs/current/` — `docs/` を翻訳した Markdown
  - `docusaurus-theme-classic/` — ナビバー・フッターの文字列
  - `docusaurus-plugin-content-docs/current.json` — サイドバーのカテゴリラベル
  - `code.json` — テーマ組み込みの UI 文字列
- `sidebars.ts` — サイドバーの構造
- `docusaurus.config.ts` — サイト設定
- `static/img/` — ロゴ、スクリーンショット

## 翻訳

`docs/` の英語版を更新したら、`i18n/ja/docusaurus-plugin-content-docs/current/` の対応するファイルも手動で更新してください。追従漏れを検知する仕組みはありません。

ナビバー項目やサイドバーのカテゴリを追加・変更した場合は、翻訳キーのスカフォールドを再生成します(既存の訳は保持されます)。

```bash
npm run write-translations -- --locale ja
```

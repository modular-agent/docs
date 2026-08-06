# modular-agent-doc

[Modular Agent](https://github.com/modular-agent) のドキュメントサイトです。[Astro Starlight](https://starlight.astro.build/) で構築しています。

[English](README.md)

## 開発

```bash
npm install
npm run dev    # 開発サーバー http://localhost:4321/docs/
```

開発サーバーは全ロケールを同時に配信します。英語は `/docs/`、日本語は `/docs/ja/` です。

## ビルド

```bash
npm run build      # dist/ に静的サイトを出力(全ロケールを一括ビルド)
npm run preview    # 本番ビルドのプレビュー
```

全文検索(Pagefind)は本番ビルドに対してのみ動作します。確認するときは開発サーバーではなく
`npm run build && npm run preview` を使ってください。

## 構成

- `src/content/docs/` — ドキュメントページ(Markdown、英語がソース・オブ・トゥルース)
  - `ja/` — 英語版と同じ構造でミラーした日本語訳
- `src/content.config.ts` — コンテンツコレクションの定義
- `src/assets/` — ロゴ、スクリーンショット(Astro のアセットパイプラインを通ります)
- `src/styles/custom.css` — テーマカラー
- `src/components/Footer.astro` — リポジトリのリンク列を追加するフッターの上書き
- `public/` — サイトルートへそのままコピーされるファイル(favicon、`.nojekyll`)
- `astro.config.mjs` — サイト設定、ロケール、サイドバー

## 翻訳

`src/content/docs/` の英語版を更新したら、`src/content/docs/ja/` の対応するファイルも手動で更新してください。追従漏れを検知する仕組みはありません。

Starlight は組み込み UI 文字列の日本語訳を標準搭載しているため、メンテナンスが必要なのはページ本文と `astro.config.mjs` のサイドバーカテゴリラベル(`translations: { ja: … }`)だけです。

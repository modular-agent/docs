// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://modular-agent.github.io",
  base: "/docs",
  integrations: [
    starlight({
      title: "Modular Agent",
      logo: { src: "./src/assets/logo.png", alt: "Modular Agent Logo" },
      favicon: "/favicon.ico",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/modular-agent" }],
      defaultLocale: "root",
      locales: {
        root: { label: "English", lang: "en" },
        ja: { label: "日本語", lang: "ja" },
      },
      sidebar: [
        "index",
        {
          label: "Getting Started",
          translations: { ja: "はじめる" },
          items: [
            "getting-started/installation",
            "getting-started/first-patch",
            "getting-started/chat-patch",
          ],
        },
      ],
      components: {
        Footer: "./src/components/Footer.astro",
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});

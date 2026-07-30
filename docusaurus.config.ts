import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Modular Agent',
  tagline:
    'Build AI workflows like a modular synth — patch extensible agents together visually into real-time pipelines.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://modular-agent.github.io',
  baseUrl: '/docs/',

  organizationName: 'modular-agent',
  projectName: 'docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    localeConfigs: {
      ja: {
        label: '日本語',
        htmlLang: 'ja',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/screenshot_editor.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Modular Agent',
      logo: {
        alt: 'Modular Agent Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/modular-agent',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Repositories',
          items: [
            {
              label: 'modular-agent',
              href: 'https://github.com/modular-agent/modular-agent/',
            },
            {
              label: 'modular-agent-desktop',
              href: 'https://github.com/modular-agent/modular-agent/tree/main/apps/desktop',
            },
            {
              label: 'modular-agent-core',
              href: 'https://github.com/modular-agent/modular-agent/tree/main/crates/modular-agent-core',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'crates.io',
              href: 'https://crates.io/crates/modular-agent-core',
            },
            {
              label: 'docs.rs',
              href: 'https://docs.rs/modular-agent-core',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Modular Agent.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['rust', 'json', 'toml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

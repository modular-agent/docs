import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/installation', 'getting-started/first-workflow'],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'concepts/architecture',
        'concepts/agent-values',
        'concepts/external-io',
        'concepts/preset-format',
      ],
    },
    {
      type: 'category',
      label: 'Desktop App',
      items: ['desktop/editor', 'desktop/custom-build'],
    },
    {
      type: 'category',
      label: 'Building Agents',
      items: [
        'building-agents/your-first-agent',
        'building-agents/configuration',
        'building-agents/lifecycle',
        'building-agents/metadata',
      ],
    },
    {
      type: 'category',
      label: 'Embedding',
      items: ['embedding/rust-api'],
    },
    'agent-packages',
  ],
};

export default sidebars;

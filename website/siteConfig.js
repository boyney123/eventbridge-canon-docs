const siteConfig = {
  title: 'EventBridge Canon',
  tagline: 'Status Checks as Functions',
  // For deploy
  url: 'https://eventbridge-canon.netlify.com',
  baseUrl: '/',
  projectName: 'eventbridge-canon',
  organizationName: 'boyney123',
  // End deploy options
  editUrl: 'https://github.com/boyney123/eventbridge-canon-docs/tree/master/docs/',
  headerLinks: [
    { doc: 'motivation', label: 'Docs' },
    { href: 'https://github.com/boyney123/eventbridge-canon', label: 'GitHub' },
  ],
  headerIcon: 'img/icons/apple-touch-icon.png',
  favicon: 'img/icons/favicon-32x32.png',
  colors: {
    primaryColor: '#0e0c33',
    secondaryColor: '#008DF9',
  },
  customDocsPath: 'docs',
  gaTrackingId: 'G-Q00TMYCNXC',
  copyright: 'David Boyne',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate', // On page navigation for the current documentation page.
  cleanUrl: true, // No .html extensions for paths.

  separateCss: ['print-953e3353.css', 'screen-c9d8fa83.css', 'styles.min.css'],

  // Show documentation's last contributor's name.
  enableUpdateBy: true,
  enableUpdateTime: true,
};

module.exports = siteConfig;

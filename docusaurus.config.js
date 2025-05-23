// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const config = {
  title: 'AWS Docs',
  tagline: 'Documentação pessoal sobre AWS',
  url: 'https://seusite.com', // Altere se for publicar
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'seuusuario', // GitHub org/user
  projectName: 'aws-wikiquest', // Nome do repositório

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },
    navbar: {
      title: 'AWS Docs',
      logo: {
        alt: 'AWS Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/servicos-aws/ec2', label: 'Serviços AWS', position: 'left' },
        { href: 'https://linkedin.com/in/seuusuario', label: 'LinkedIn', position: 'right' },
        { href: 'https://github.com/seurepo', label: 'GitHub', position: 'right' },
        { to: '/docs/bento', label: 'Bento', position: 'right' },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
};

module.exports = config;

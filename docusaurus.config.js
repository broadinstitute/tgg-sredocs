// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TGG SRE Docs',
  tagline: 'Managing Genomics in the Cloud',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sre.the-tgg.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/broadinstitute/tgg-sredocs/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/broadinstitute/tgg-sredocs/tree/main/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/broadinstitute/tgg-sredocs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Tools',
            items: [
              {
                label: 'tgg-terraform-modules',
                href: 'https://github.com/broadinstitute/tgg-terraform-modules'
              },
              {
                label: 'gnomad-helm',
                href: 'https://github.com/broadinstitute/gnomad-helm'
              },
              {
                label: 'seqr-helm',
                href: 'https://github.com/broadinstitute/seqr-helm'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'ClinGen',
                href: 'https://clinicalgenome.org'
              },
              {
                label: 'gnomAD Browser',
                href: 'https://gnomad.broadinstitute.org',
              },
              {
                label: 'seqr',
                href: 'https://seqr.broadinstitute.org',
              },
              {
                label: 'The TGG',
                href: 'https://the-tgg.org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Broad Institute of MIT and Harvard. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

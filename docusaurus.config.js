/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Forem Admin Docs",
  tagline: "Forem is cool",
  url: "https://forem-admin.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Forem", // Usually your GitHub org/user name.
  projectName: "admin-docs", // Usually your repo name.
  themeConfig: {
    // algolia: {
    //   apiKey: process.env.ALGOLIA_SEARCH_KEY,
    //   appId: process.env.ALGOLIA_APP_ID,
    //   indexName: process.env.ALGOLIA_INDEX_NAME,
    // },
    algolia: {
      apiKey: "63e1a3533b440fc655791f8a37e7df02",
      appId: "A133UIV45B",
      indexName: "forem-admin",
    },
    navbar: {
      // title: 'Forem Admin Docs',
      logo: {
        alt: "Forem Admin Docs Logo",
        src: "img/forem.svg",
        srcDark: "img/foremDark.svg",
      },
      items: [
        {
          type: "doc",
          docId: "getting-started/creator-signup-and-onboarding",
          position: "left",
          label: "Getting Started",
        },
        {
          href: "https://forem.dev",
          label: "Explore Forem.dev",
          position: "right",
        },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Forem Docs",
          items: [
            {
              label: "Admin Docs",
              to: "/",
            },
            {
              label: "Selfhost Installation",
              to: "https://github.com/forem/selfhost",
            },
            {
              label: "Developer Docs",
              to: "https://docs.forem.com/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "DEV",
              href: "https://dev.to",
            },
            {
              label: "forem.dev",
              href: "https://forem.dev",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/forem",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/forem/admin-docs",
            },
            {
              label: "Email Us",
              href: "mailto:hello@forem.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Forem`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/forem/admin-docs/edit/main/",
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl: "https://github.com/forem/admin-docs/edit/main/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

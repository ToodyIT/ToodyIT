/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.toody-it.com',
    generateRobotsTxt: true,
    alternateRefs: [
      {
        href: 'https://www.toody-it.com/en',
        hreflang: 'en',
      },
      {
        href: 'https://www.toody-it.com/ru',
        hreflang: 'ru',
      },
    ],
    exclude: ['/exclude-page'],
    pagesDirectory: 'pages',
  };
  
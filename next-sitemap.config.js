/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.BASE_URL,
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: `${process.env.BASE_URL}/en`,
      hreflang: 'en',
    },
    {
      href: `${process.env.BASE_URL}/ru`,
      hreflang: 'ru',
    },
    {
      href: `${process.env.BASE_URL}/cz`,
      hreflang: "cs",
    },
  ],
  pagesDirectory: 'pages',
};

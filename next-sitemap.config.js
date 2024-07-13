/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://medicare-support.com',
  generateRobotsTxt: true,
  exclude: ['/twitter-image.*', '/opengraph-image.*', '/icon.*'],
};
export const generateRobotsTxt = true;
export const exclude = [
  '/twitter-image.*',
  '/opengraph-image.*',
  '/icon.*',
];

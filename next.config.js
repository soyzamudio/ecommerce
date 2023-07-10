/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "localhost",
      "cdn.schema.io",
      "cdn.swell.store",
      "placehold.co",
      "images.unsplash.com",
      "ciclo-dispensary.ghost.io",
    ],
  },
  experimental: {
    legacyBrowsers: false,
  },
};

module.exports = nextConfig;

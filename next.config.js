/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "localhost",
      "cdn.schema.io",
      "cdn.swell.store",
      "placehold.co",
      "images.unsplash.com",
    ],
  },
  experimental: {
    legacyBrowsers: false,
  },
};

module.exports = nextConfig;

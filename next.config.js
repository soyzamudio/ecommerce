/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["localhost", "cdn.schema.io", "cdn.swell.store", "placehold.co"],
  },
  experimental: {
    legacyBrowsers: false,
  },
};

module.exports = nextConfig;

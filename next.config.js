/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["localhost", "cdn.schema.io", "cdn.swell.store"],
  },
  experimental: {
    legacyBrowsers: false,
  },
};

module.exports = nextConfig;

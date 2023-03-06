/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  rewrites: () => [
    {
      source: '/:path*',
      destination: '/',
    },
  ],
};

module.exports = nextConfig;

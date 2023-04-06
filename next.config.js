/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/rnizwphe/production/*',
      },

      // (https://cdn.sanity.io/images/rnizwphe/production/e05a8c1cdcbbf03b7f6e9ead72dcb928e99ed89e-1134x1500.jpg)
    ],
  },
}

module.exports = nextConfig

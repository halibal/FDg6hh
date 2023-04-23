/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.piton.com.tr',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output:'export',
  images: { unoptimized: true },
  experimental: {
    images: {
      allowFutureImage: true,

    },
  },
}

module.exports = nextConfig

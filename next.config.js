/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
          expandProps: 'end'
        }
      }],
    })

    return config
  },
  images: {
    domains: ['source.unsplash.com'],
  },
}

module.exports = nextConfig

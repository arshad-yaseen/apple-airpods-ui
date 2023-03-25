/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: `${isServer ? '../' : ''}static/videos/`,
            name: '[name].[hash].[ext]',
            esModule: false,
          },
        },
      ],
    });

    return config;
  }
}

module.exports = nextConfig

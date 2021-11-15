const nextConfig = {
  reactStrictMode: true,

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  }
}

export default nextConfig

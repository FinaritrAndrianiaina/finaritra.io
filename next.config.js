module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  webpack: function (config, { dev, isServer }) {
    if (isServer) {
      require("./scripts/generate-sitemap");
      require("./scripts/generate-rss");
    }
    config.module.rules.push({
      test: /\.mdx$/,
      use: "raw-loader",
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": __dirname,
    };
    return config;
  },
};

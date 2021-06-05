module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  webpack: function (config) {
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

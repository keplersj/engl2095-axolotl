exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      alias: {
        fs: "memory-fs"
      }
    }
  });

  config.loader("null", {
    test: /webworker-threads/,
    loader: "null-loader"
  });

  if (stage === "build-html") {
    config.loader("null", {
      test: /spectacle/,
      loader: "null-loader"
    });
  }

  return config;
};

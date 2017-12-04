exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /spectacle/,
      loader: "null-loader"
    });
  }
};

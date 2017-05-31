// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://storybooks.js.org/docs/react-storybook/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

var genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (config, env) {

  var config = genDefaultConfig(config, env);

  config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      include: [/stories/, /components/],
      loader: "awesome-typescript-loader"
  })

   config.module.rules.push({
      test: /\.css$/,
      loader: "css-loader"
  })

  config.module.rules.push({
      test: /\.less$/,
      loaders: [ "style-loader", "css-loader", "less-loader" ] 
  })

  config.resolve.extensions.push(".tsx");
  config.resolve.extensions.push(".ts");
  config.resolve.extensions.push(".js");
  config.resolve.extensions.push(".css");
  config.resolve.extensions.push(".less");

  return config;
};

const fs = require('fs');
const path = require('path');
const  webpackConfigFunction = require("./webpack.config");

function resolve(...paths) {
  return fs.realpathSync(path.join(__dirname, ...paths));
}

let webpackConfig = webpackConfigFunction({});

module.exports = {
  title: 'Test Style',
  serverPort: 3000,
    require: [
    resolve('dist/initial.css'),
  ],
  sections: [
    { name: 'Commons', components: 'src/components/commons/buttons/*.tsx' },
  ],
  webpackConfig: webpackConfig,
  propsParser: require('react-docgen-typescript').parse,
};


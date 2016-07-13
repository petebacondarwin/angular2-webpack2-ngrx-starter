const path = require('path');
const distPath = path.resolve(__dirname, 'dist');

/**
 * @author: @AngularClass
 */

let configFn;

// Look in ./webpack folder for webpack.dev.js
switch (process.env.NODE_ENV) {
  case 'production':
    configFn = require('./webpack/webpack.prod');
    break;
  case 'test':
  case 'testing':
    configFn = require('./webpack/webpack.test');
    break;
  case 'development':
  default:
    configFn = require('./webpack/webpack.dev');
}

module.exports = (options: EnvOptions = {}) => {
  options.distPath = options.distPath || distPath;
  console.log('Env Options: ', JSON.stringify(options, null, 2));
  return configFn(options);
};

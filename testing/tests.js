require('core-js/es6');
require('core-js/es7/reflect');
require('ts-helpers');
require('es6-shim');

Error.stackTraceLimit = Infinity;

const testContext = require.context('../src', true, /\.spec\.ts/);
const testing = require('@angular/core/testing');
const browser = require('@angular/platform-browser-dynamic/testing');

testing.setBaseTestProviders(
  browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);
testContext.keys().forEach(testContext);

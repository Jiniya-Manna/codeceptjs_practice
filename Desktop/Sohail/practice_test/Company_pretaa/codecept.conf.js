const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://pretaa-staging.netlify.app/login',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    "I": "./steps_file.js",
    "loginPage": "./pages/login.js",
    "companysearchPage": "./pages/companysearch.js",
    "searchPage": "./pages/search.js"
  },
  name: 'Company_pretaa'
}
plugins: {
  fakerTransform: {
    enabled: true
  }
}
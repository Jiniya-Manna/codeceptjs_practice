import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: 'specs/*.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://pretaa-staging.netlify.app',
      show: true,
      browser: 'chromium',
      restart: "session",
      keepBrowserState: true,
      keepCookies: true,
    }
  },
multiple : {
  parallel: {
    chunks : 2,
    browser : 'chromium',
    browsers: 'firefox',
    windowSize : 'maximize',
  }
},
 include: {
    "I": "./steps_file",
    "pagesPage": "./pages/pages.ts",
    "datadrivenPage": "./pages/datadriven.ts"
  },
  name: 'codeceptjs_practice',
  fullPromiseBased: true,
  plugins:{
    allure : {
     enabled : true
    }
}
};


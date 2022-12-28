import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
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
    chunks : 1,
    browsers : ["chromium" , "firefox"]
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
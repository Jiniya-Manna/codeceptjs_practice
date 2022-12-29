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
<<<<<<< HEAD
      keepCookies: true
=======
      keepCookies: true,
>>>>>>> qa/newcompanySearch
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
<<<<<<< HEAD
    "loginPage": "./pages/login.ts",
    "validCompanySearchPage": "./pages/validCompanySearch.ts",
    "invalidCompanySearchPage": "./pages/invalidCompanySearch.ts",
    "invalidPage": "./pages/invalid.ts",
    "settingpagePage": "./pages/settingpage.ts",
    "companynotePage": "./pages/companynote.ts",
    "datadrivenPage": "./pages/datadriven.ts",
    "launchPage": "./pages/launch.ts"
=======
    "pagesPage": "./pages/pages.ts",
    "datadrivenPage": "./pages/datadriven.ts"
>>>>>>> qa/newcompanySearch
  },
  name: 'codeceptjs_practice',
  fullPromiseBased: true,
  plugins:{
<<<<<<< HEAD
    allure: {
      enabled:true
    }
  }
}
{
  {
    true
  }
}
=======
    allure : {
     enabled : true
    }
}
};

>>>>>>> qa/newcompanySearch

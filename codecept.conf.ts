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
<<<<<<< HEAD
<<<<<<< HEAD
      restart: "session",
      keepBrowserState: true,
<<<<<<< HEAD
      keepCookies: true
=======
      keepCookies: true,
>>>>>>> qa/newcompanySearch
=======
      restart:"session",
      keepBrowserState:true,
      keepCookies:false
>>>>>>> qa/notecreated
=======
      restart: "session",
      keepBrowserState: true,
      keepCookies: true,
>>>>>>> qa/setting
    }
  },
multiple : {
  parallel: {
<<<<<<< HEAD
    chunks : 2,
    browser : 'chromium',
    browsers: 'firefox',
    windowSize : 'maximize',
=======
    chunks : 1,
    browsers : ["chromium" , "firefox"],
    windowSize : 'maximize'
>>>>>>> qa/setting
  }
},
 include: {
    "I": "./steps_file",
<<<<<<< HEAD
<<<<<<< HEAD
    "loginPage": "./pages/login.ts",
    "validCompanySearchPage": "./pages/validCompanySearch.ts",
<<<<<<< HEAD
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
=======
    "invalidPage": "./pages/invalid.ts"
>>>>>>> qa/notecreated
=======
    "pagesPage": "./pages/pages.ts",
    "datadrivenPage": "./pages/datadriven.ts"
>>>>>>> qa/setting
  },
  name: 'codeceptjs_practice',
  fullPromiseBased: true,
  plugins:{
<<<<<<< HEAD
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
=======
>>>>>>> qa/setting
    allure : {
     enabled : true
    }
}
};

<<<<<<< HEAD
>>>>>>> qa/newcompanySearch
=======
>>>>>>> qa/setting

/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type loginPage = typeof import('./pages/login');
type validCompanySearchPage = typeof import('./pages/validCompanySearch');
type invalidCompanySearchPage = typeof import('./pages/invalidCompanySearch');
type invalidPage = typeof import('./pages/invalid');
<<<<<<< HEAD
type settingpagePage = typeof import('./pages/settingpage');
type companynotePage = typeof import('./pages/companynote');
type datadrivenPage = typeof import('./pages/datadriven');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, validCompanySearchPage: validCompanySearchPage, invalidCompanySearchPage: invalidCompanySearchPage, invalidPage: invalidPage, settingpagePage: settingpagePage, companynotePage: companynotePage, datadrivenPage: datadrivenPage }
=======

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, validCompanySearchPage: validCompanySearchPage, invalidCompanySearchPage: invalidCompanySearchPage, invalidPage: invalidPage }
>>>>>>> qa/notecreated
  interface Methods extends PlaywrightTs {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
